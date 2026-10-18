// ─── Serendib Tycoon engine: complete game state machine ─────────────────
// Recreated from the author's design. One roll per turn (no doubles bonus),
// flat 8-round loans, one-time shields, Poya welfare pool, express transit,
// and a solvency cascade (auto-loan → liquidate buildings → surrender →
// bankrupt). Bots and humans share this single rules path.

import type { GameState, PlayerSetup, SquareDef, TradeOffer } from './types';
import {
  BOARD, BAIL, COMPREHENSIVE_CLAIM, COMMUNITY_CARDS, CYCLE_LENGTH,
  EXPRESS_FARE, EXPRESS_ORANGE_DIVIDEND, GROUPS, GROUP_SQUARES, HEADLINE_CARDS,
  LOAN_DURATION, MACRO_CYCLES, MAX_JAIL_TURNS, POYA_FESTIVAL_BONUS,
  POYA_POOL_SHARE, REPAIR_COST, SEAT_COLORS, START_CASH, TEA_DIVIDEND,
} from './config';
import { randInt, rollDice, shuffle, seedRng } from './rng';
import {
  buildCostOf, effectiveLoanRate, effectiveRent, fmt, log,
  maintenanceCostOf, maxBorrowLimit, netWorth, ownsMonopoly, shieldCost, squareValue, startBonus,
} from './economy';

export function cur(s: GameState) {
  return s.players[s.current];
}

// ─── Game creation ────────────────────────────────────────────────────────

export function createGame(opts: { players: PlayerSetup[]; seed: number; maxRounds: number }): GameState {
  const players = opts.players.map((p, i) => ({
    id: i,
    name: p.name,
    kind: p.kind,
    persona: p.persona,
    tokenKey: p.tokenKey,
    color: SEAT_COLORS[i % SEAT_COLORS.length],
    cash: START_CASH,
    position: 0,
    inJail: false,
    jailTurns: 0,
    bankrupt: false,
    loan: 0,
    loanRoundsLeft: 0,
  }));

  const s: GameState = {
    rngState: seedRng(opts.seed),
    round: 1,
    maxRounds: opts.maxRounds,
    poyaPool: 1000,
    cycleIndex: 0,
    cycleRoundsLeft: CYCLE_LENGTH,
    players,
    squares: BOARD.map(() => ({
      owner: null,
      buildings: 0,
      shield: 0,
      damaged: false,
      loanLocked: false,
      mortgaged: false,
      condition: 100,
    })),
    current: 0,
    phase: 'preRoll',
    communityDeck: [],
    headlineDeck: [],
    auction: null,
    pendingBuy: null,
    lastRoll: null,
    selectedSquare: 0,
    cardJustDrawn: null,
    pendingTrade: null,
    consecutiveDoubles: 0,
    hasBonusRoll: false,
    log: [],
    winner: null,
  };
  s.communityDeck = shuffle(s, COMMUNITY_CARDS.map((_, i) => i));
  s.headlineDeck = shuffle(s, HEADLINE_CARDS.map((_, i) => i));

  log(s, `🎊 Welcome to POLA: Monopoly Sri Lanka! Each player starts with LKR ${fmt(START_CASH)} at Avurudu Start. First to round ${opts.maxRounds} or last solvent tycoon wins.`, 'event');
  log(s, `Turn order: ${players.map(p => p.name).join(' → ')}.`, 'info');
  return s;
}

// ─── Money: charges always pass through the solvency cascade ─────────────

export function chargeCash(
  s: GameState, playerId: number, amount: number,
  to: { type: 'player'; id: number } | { type: 'pool' } | { type: 'bank' },
): boolean {
  const p = s.players[playerId];
  if (amount <= 0) return true;
  p.cash -= amount;
  if (to.type === 'player') s.players[to.id].cash += amount;
  else if (to.type === 'pool') s.poyaPool += amount;
  if (p.cash >= 0) return true;

  // 1. Auto-loan against unmortgaged collateral.
  if (p.loan === 0) {
    const maxBorrow = maxBorrowLimit(s, playerId);
    if (maxBorrow > 0) {
      takeLoan(s, maxBorrow, playerId);
      if (p.cash >= 0) return true;
    }
  }

  // 2. Mortgage unimproved properties for cash.
  s.squares.forEach((st, i) => {
    if (st.owner !== playerId || p.cash >= 0 || st.mortgaged || st.loanLocked) return;
    const def = BOARD[i];
    if (def.group && GROUP_SQUARES[def.group].some(sqIdx => s.squares[sqIdx].buildings > 0)) return;
    if (def.mortgageValue) {
      st.mortgaged = true;
      p.cash += def.mortgageValue;
      log(s, `📜 ${p.name} mortgaged ${def.name} for emergency cash (+LKR ${fmt(def.mortgageValue)}).`, 'danger');
    }
  });
  if (p.cash >= 0) return true;

  // 3. Liquidate buildings at half rebuild value.
  s.squares.forEach((st, i) => {
    if (st.owner !== playerId || p.cash >= 0) return;
    if (st.buildings > 0 && BOARD[i].buildCost) {
      const refund = Math.round(st.buildings * BOARD[i].buildCost! * 0.5);
      st.buildings = 0;
      st.condition = 100;
      p.cash += refund;
      log(s, `⚠️ ${p.name} liquidated buildings on ${BOARD[i].name} for LKR ${fmt(refund)}.`, 'danger');
    }
  });

  // 4. Surrender remaining properties to the bank at mortgage value.
  s.squares.forEach((st, i) => {
    if (st.owner !== playerId || p.cash >= 0) return;
    if (st.loanLocked) return; // already collateral
    const val = BOARD[i].mortgageValue ?? Math.round((BOARD[i].price ?? 2000) * 0.5);
    st.owner = null;
    st.buildings = 0;
    st.shield = 0;
    st.loanLocked = false;
    st.damaged = false;
    st.mortgaged = false;
    p.cash += val;
    log(s, `⚠️ ${p.name} surrendered ${BOARD[i].name} to the bank for LKR ${fmt(val)}.`, 'danger');
  });

  if (p.cash < 0) {
    p.bankrupt = true;
    p.cash = 0;
    p.loan = 0;
    p.loanRoundsLeft = 0;
    s.squares.forEach(st => {
      if (st.owner === playerId) {
        st.owner = null;
        st.buildings = 0;
        st.shield = 0;
        st.loanLocked = false;
        st.damaged = false;
        st.mortgaged = false;
      }
    });
    if (s.auction && s.auction.participants.includes(playerId)) {
      s.auction.participants = s.auction.participants.filter(id => id !== playerId);
    }
    log(s, `💥 BANKRUPTCY! ${p.name} has been eliminated from the island economy.`, 'danger');
    checkGameOver(s);
    return false;
  }
  return true;
}

// ─── Roll & movement ──────────────────────────────────────────────────────

export function takeTurnRoll(s: GameState): void {
  const p = cur(s);
  const d = rollDice(s);
  s.lastRoll = d;
  const sum = d[0] + d[1];
  const isDouble = d[0] === d[1];
  log(s, `${p.name} rolls ${d[0]} + ${d[1]} = ${sum}${isDouble ? ' (DOUBLES! 🎲🎲)' : ''}.`, 'info');

  if (p.inJail) {
    s.consecutiveDoubles = 0;
    s.hasBonusRoll = false;
    if (isDouble) {
      p.inJail = false;
      p.jailTurns = 0;
      log(s, `⚖️ ${p.name} rolled doubles and was released from CID Inquiry!`, 'event');
      movePlayer(s, sum);
      resolveLanding(s);
    } else {
      p.jailTurns++;
      if (p.jailTurns >= MAX_JAIL_TURNS) {
        log(s, `⚖️ ${p.name} completed ${MAX_JAIL_TURNS} turns in CID Inquiry — forced LKR ${fmt(BAIL)} bail.`, 'danger');
        chargeCash(s, p.id, BAIL, { type: 'pool' });
        if (p.bankrupt) { endTurn(s); return; }
        p.inJail = false;
        p.jailTurns = 0;
        movePlayer(s, sum);
        resolveLanding(s);
      } else {
        log(s, `⚖️ ${p.name} remains in CID Inquiry (attempt ${p.jailTurns}/${MAX_JAIL_TURNS}).`, 'info');
        endTurn(s);
      }
    }
    return;
  }

  // Regular turn doubles check
  if (isDouble) {
    s.consecutiveDoubles = (s.consecutiveDoubles || 0) + 1;
    if (s.consecutiveDoubles >= 3) {
      log(s, `🚨 SPEEDING AUDIT! ${p.name} rolled 3 doubles in a row! Summoned to CID Inquiry immediately!`, 'danger');
      s.consecutiveDoubles = 0;
      s.hasBonusRoll = false;
      p.position = 10;
      p.inJail = true;
      p.jailTurns = 0;
      s.selectedSquare = 10;
      endTurn(s);
      return;
    }
    s.hasBonusRoll = true;
    log(s, `🎲 DOUBLES! ${p.name} gets a bonus roll after completing their turn!`, 'event');
  } else {
    s.consecutiveDoubles = 0;
    s.hasBonusRoll = false;
  }

  movePlayer(s, sum);
  resolveLanding(s);
}

export function payBail(s: GameState): void {
  const p = cur(s);
  if (!p.inJail || p.cash < BAIL) return;
  chargeCash(s, p.id, BAIL, { type: 'pool' });
  p.inJail = false;
  p.jailTurns = 0;
  log(s, `⚖️ ${p.name} paid LKR ${fmt(BAIL)} bail to exit CID Inquiry early.`, 'money');
}

function movePlayer(s: GameState, steps: number): void {
  const p = cur(s);
  const from = p.position;
  if (from + steps >= BOARD.length) grantStartBonus(s);
  p.position = (from + steps) % BOARD.length;
  log(s, `${p.name} moves to ${BOARD[p.position].name}.`, 'info');
}

function grantStartBonus(s: GameState): void {
  const p = cur(s);
  const bonus = startBonus(s);
  const tea = ownsMonopoly(s, p.id, 'darkblue') ? TEA_DIVIDEND : 0;
  p.cash += bonus + tea;
  log(s, `🎊 ${p.name} passed Avurudu Start and collected LKR ${fmt(bonus + tea)}${tea ? ' (incl. LKR 1,000 Tea Export Dividend!)' : ''}.`, 'money');
}

// ─── Landing resolution ───────────────────────────────────────────────────

export function resolveLanding(s: GameState): void {
  const p = cur(s);
  const idx = p.position;
  const def = BOARD[idx];
  const st = s.squares[idx];
  const diceSum = s.lastRoll ? s.lastRoll[0] + s.lastRoll[1] : 7;
  s.selectedSquare = idx;

  switch (def.kind) {
    case 'property':
    case 'railway':
    case 'utility': {
      if (st.owner === null) {
        s.pendingBuy = idx;
        s.phase = 'decideBuy';
      } else if (st.owner !== p.id) {
        const owner = s.players[st.owner];
        if (st.damaged) {
          log(s, `⚠️ ${def.name} is storm-damaged! No rent until it is repaired.`, 'danger');
        } else {
          const rent = effectiveRent(s, idx, diceSum);
          log(s, `💸 ${p.name} paid LKR ${fmt(rent)} rent to ${owner.name} at ${def.name}.`, 'money');
          chargeCash(s, p.id, rent, { type: 'player', id: owner.id });
        }
        goPostRoll(s);
      } else {
        log(s, `${p.name} inspects their own ${def.name}.`, 'info');
        goPostRoll(s);
      }
      break;
    }
    case 'tax': {
      const tax = def.taxAmount ?? 1500;
      log(s, `🏛️ ${p.name} paid LKR ${fmt(tax)} Inland Revenue Tax into the Poya Welfare Pool.`, 'money');
      chargeCash(s, p.id, tax, { type: 'pool' });
      goPostRoll(s);
      break;
    }
    case 'poya': {
      const share = Math.floor(s.poyaPool * POYA_POOL_SHARE);
      const total = POYA_FESTIVAL_BONUS + share;
      s.poyaPool -= share;
      p.cash += total;
      log(s, `🌕 ${p.name} celebrates the Poya Day Holiday and collects LKR ${fmt(total)} (incl. 50% of the Welfare Pool)!`, 'money');
      goPostRoll(s);
      break;
    }
    case 'gotojail': {
      p.position = 10;
      p.inJail = true;
      p.jailTurns = 0;
      s.selectedSquare = 10;
      log(s, `🚨 ${p.name} was summoned to CID Inquiry!`, 'danger');
      endTurn(s);
      break;
    }
    case 'community':
      drawCommunityCard(s);
      goPostRoll(s);
      break;
    case 'event':
      drawHeadlineCard(s);
      goPostRoll(s);
      break;
    case 'start':
      grantStartBonus(s);
      goPostRoll(s);
      break;
    case 'jail':
      log(s, `${p.name} is just visiting the CID Inquiry.`, 'info');
      goPostRoll(s);
      break;
    case 'bank':
      log(s, `🏦 ${p.name} visits the Bank of Serendib — preferential 10% loan rate available!`, 'info');
      goPostRoll(s);
      break;
    case 'insurance':
      log(s, `🛡️ ${p.name} visits ${def.name} — Shield Tokens at a 20% discount while standing here.`, 'info');
      goPostRoll(s);
      break;
  }
}

function goPostRoll(s: GameState): void {
  if (s.phase !== 'gameOver') s.phase = 'postRoll';
}

// ─── Cards ────────────────────────────────────────────────────────────────

function drawCommunityCard(s: GameState): void {
  const p = cur(s);
  const ci = s.communityDeck.shift()!;
  s.communityDeck.push(ci);
  const card = COMMUNITY_CARDS[ci];
  let delta = card.cash;
  if (delta > 0 && ownsMonopoly(s, p.id, 'brown')) delta += 500; // Old Colombo perk
  p.cash += delta;
  if (card.toPool && delta < 0) s.poyaPool += Math.abs(delta);
  log(s, `🪷 Community Fund [${card.title}]: ${card.text} (${delta >= 0 ? '+' : ''}LKR ${fmt(delta)}${delta > card.cash ? ' incl. Old Colombo perk' : ''})`, 'event');
  if (p.kind === 'human') s.cardJustDrawn = { deck: 'community', index: ci, delta };
  if (p.cash < 0) chargeCash(s, p.id, 0, { type: 'bank' });
}

function drawHeadlineCard(s: GameState): void {
  const p = cur(s);
  const ci = s.headlineDeck.shift()!;
  s.headlineDeck.push(ci);
  const card = HEADLINE_CARDS[ci];
  const e = card.effect;
  switch (e.type) {
    case 'selfCash':
      p.cash += e.amount;
      log(s, `📰 Headline [${card.title}]: ${card.text} (+LKR ${fmt(e.amount)})`, 'event');
      break;
    case 'allCash':
      for (const pl of s.players) if (!pl.bankrupt) pl.cash += e.amount;
      log(s, `📰 Headline [${card.title}]: ${card.text}`, 'event');
      break;
    case 'groupBonus': {
      for (const pl of s.players) {
        if (pl.bankrupt) continue;
        if (s.squares.some((st, i) => st.owner === pl.id && BOARD[i].group && e.groups.includes(BOARD[i].group!))) {
          pl.cash += e.amount;
        }
      }
      log(s, `📰 Headline [${card.title}]: ${card.text}`, 'event');
      break;
    }
    case 'disaster': {
      const owned = s.squares.map((st, i) => ({ st, i })).filter(o => o.st.owner !== null && BOARD[o.i].kind === 'property');
      if (owned.length === 0) {
        log(s, `📰 Headline [${card.title}]: The ${e.hazard.toLowerCase()} passed harmlessly over unowned land.`, 'event');
        break;
      }
      const hit = owned[randInt(s, owned.length)];
      const victim = s.players[hit.st.owner!];
      if (hit.st.shield === 3) {
        // Business Interruption Insurance (Hotel)
        hit.st.shield = 0;
        const hotelRent = BOARD[hit.i].rents ? BOARD[hit.i].rents![5] : 5000;
        const claim = REPAIR_COST + (hotelRent * 5);
        victim.cash += claim;
        log(s, `🛡️ ${e.hazard} struck ${BOARD[hit.i].name}, but ${victim.name}'s Business Interruption Policy covered repairs AND paid LKR ${fmt(claim)} in lost hotel revenue!`, 'event');
      } else if (hit.st.shield === 2) {
        // Comprehensive Insurance (100% repair cost)
        hit.st.shield = 0;
        victim.cash += COMPREHENSIVE_CLAIM;
        log(s, `🛡️ ${e.hazard} struck ${BOARD[hit.i].name}, but ${victim.name}'s Comprehensive Insurance absorbed the disaster and paid a LKR ${fmt(COMPREHENSIVE_CLAIM)} claim!`, 'event');
      } else if (hit.st.shield === 1) {
        // Basic Property Insurance (80% repair cost)
        hit.st.shield = 0;
        const claim = Math.round(REPAIR_COST * 0.8);
        victim.cash += claim;
        hit.st.damaged = true;
        log(s, `🛡️ ${e.hazard} struck ${BOARD[hit.i].name}! ${victim.name}'s Basic Property Insurance paid an 80% claim of LKR ${fmt(claim)} toward repairs.`, 'event');
      } else {
        hit.st.damaged = true;
        hit.st.condition = Math.max(0, (hit.st.condition ?? 100) - 30);
        log(s, `⛈️ ${e.hazard} damaged ${BOARD[hit.i].name} (owned by ${victim.name})! Rent suspended until repaired (LKR ${fmt(REPAIR_COST)}).`, 'danger');
      }
      break;
    }
  }
  if (p.kind === 'human') s.cardJustDrawn = { deck: 'headline', index: ci, delta: 0 };
}

// ─── Buying & auctions ────────────────────────────────────────────────────

export function buyCurrent(s: GameState): boolean {
  if (s.phase !== 'decideBuy' || s.pendingBuy === null) return false;
  const idx = s.pendingBuy;
  const p = cur(s);
  const price = squareValue(s, idx);
  if (p.cash < price) return false;
  p.cash -= price;
  s.squares[idx].owner = p.id;
  s.squares[idx].mortgaged = false;
  s.squares[idx].condition = 100;
  s.pendingBuy = null;
  log(s, `🏠 ${p.name} purchased ${BOARD[idx].name} for LKR ${fmt(price)}.`, 'money');
  if (BOARD[idx].group && ownsMonopoly(s, p.id, BOARD[idx].group!)) {
    log(s, `🌟 MONOPOLY UNLOCKED! ${p.name} completed the ${GROUPS[BOARD[idx].group!].name} district — perk: ${GROUPS[BOARD[idx].group!].perk}`, 'event');
  }
  goPostRoll(s);
  return true;
}

export function declineCurrent(s: GameState): void {
  if (s.phase !== 'decideBuy' || s.pendingBuy === null) return;
  const idx = s.pendingBuy;
  s.pendingBuy = null;
  log(s, `🔨 ${cur(s).name} declined ${BOARD[idx].name} at list price — public auction!`, 'auction');
  startAuction(s, idx);
}

export function startAuction(s: GameState, idx: number): void {
  const listPrice = squareValue(s, idx);
  const opening = Math.max(250, Math.floor((listPrice * 0.5) / 250) * 250);
  const participants = s.players.filter(p => !p.bankrupt && p.cash >= opening).map(p => p.id);
  if (participants.length === 0) {
    log(s, `🔨 No player could bid on ${BOARD[idx].name}. It stays with the bank.`, 'auction');
    goPostRoll(s);
    return;
  }
  s.auction = { square: idx, listPrice, opening, currentBid: opening, leader: null, participants, turn: 0 };
  s.phase = 'auction';
  log(s, `🔨 Auction opens: ${BOARD[idx].name}. List LKR ${fmt(listPrice)}, floor LKR ${fmt(opening)}.`, 'auction');
}

export function auctionCurrentBidder(s: GameState): number {
  const a = s.auction!;
  return a.participants[a.turn];
}

export function auctionNextAmount(s: GameState): number {
  const a = s.auction!;
  return a.leader === null ? a.opening : a.currentBid + 250;
}

export function auctionBid(s: GameState, increment = 250): boolean {
  const a = s.auction;
  if (!a) return false;
  const bidder = auctionCurrentBidder(s);
  const amount = a.leader === null ? (a.opening + increment - 250) : (a.currentBid + increment);
  if (s.players[bidder].cash < amount) return false;
  a.currentBid = amount;
  a.leader = bidder;
  a.turn = (a.turn + 1) % a.participants.length;
  log(s, `🔨 ${s.players[bidder].name} bids LKR ${fmt(amount)}.`, 'auction');
  advanceAuction(s);
  return true;
}

export function auctionPass(s: GameState): void {
  const a = s.auction;
  if (!a) return;
  const bidder = auctionCurrentBidder(s);
  a.participants.splice(a.turn, 1);
  if (a.turn >= a.participants.length) a.turn = 0;
  log(s, `${s.players[bidder].name} withdraws from the auction.`, 'auction');
  advanceAuction(s);
}

function advanceAuction(s: GameState): void {
  const a = s.auction!;
  if (a.participants.length === 0) {
    finishAuction(s);
    return;
  }
  if (a.participants.length === 1 && a.leader === a.participants[0]) {
    finishAuction(s);
    return;
  }
  a.turn = a.turn % a.participants.length;
  const bidder = a.participants[a.turn];

  // If this bidder is already leading the auction, skip them or finish if only leader remains
  if (bidder === a.leader) {
    if (a.participants.length > 1) {
      a.turn = (a.turn + 1) % a.participants.length;
      advanceAuction(s);
      return;
    } else {
      finishAuction(s);
      return;
    }
  }

  const nextMin = a.leader === null ? a.opening : a.currentBid + 250;
  if (s.players[bidder].cash < nextMin) {
    log(s, `${s.players[bidder].name} lacks cash for LKR ${fmt(nextMin)} and withdraws.`, 'auction');
    a.participants.splice(a.turn, 1);
    if (a.turn >= a.participants.length) a.turn = 0;
    advanceAuction(s);
    return;
  }
}

function finishAuction(s: GameState): void {
  const a = s.auction!;
  if (a.leader !== null) {
    const winner = s.players[a.leader];
    winner.cash -= a.currentBid;
    s.squares[a.square].owner = a.leader;
    s.squares[a.square].mortgaged = false;
    s.squares[a.square].condition = 100;
    log(s, `🔨 AUCTION WON! ${winner.name} acquired ${BOARD[a.square].name} for LKR ${fmt(a.currentBid)}.`, 'auction');
  } else {
    log(s, `🔨 No bids on ${BOARD[a.square].name} — it stays with the bank.`, 'auction');
  }
  s.auction = null;
  goPostRoll(s);
}

// ─── Building, shields, repairs, mortgage ─────────────────────────────────

export function canBuildAt(s: GameState, idx: number): boolean {
  const def = BOARD[idx];
  const st = s.squares[idx];
  const p = cur(s);
  if (def.kind !== 'property' || !def.group) return false;
  if (st.owner !== p.id || st.buildings >= 5 || st.mortgaged || st.damaged) return false;
  if (!ownsMonopoly(s, p.id, def.group)) return false;

  // Rule 9 & Traditional Monopoly: Even Building Rule
  const groupSqs = GROUP_SQUARES[def.group];
  if (groupSqs.some(i => s.squares[i].mortgaged)) return false;
  const minBuildings = Math.min(...groupSqs.map(i => s.squares[i].buildings));
  if (st.buildings > minBuildings) return false;

  return p.cash >= buildCostOf(s, idx);
}

export function doBuild(s: GameState, idx: number): boolean {
  if (!canBuildAt(s, idx)) return false;
  const p = cur(s);
  const cost = buildCostOf(s, idx);
  p.cash -= cost;
  s.squares[idx].buildings++;
  s.squares[idx].condition = 100;
  const st = s.squares[idx];
  log(s, `🏗️ ${p.name} constructed ${st.buildings === 5 ? 'a Boutique Hotel 🏨' : `House #${st.buildings} 🏠`} on ${BOARD[idx].name} for LKR ${fmt(cost)}.`, 'money');
  return true;
}

export function canSellBuildingAt(s: GameState, idx: number): boolean {
  const def = BOARD[idx];
  const st = s.squares[idx];
  const p = cur(s);
  if (def.kind !== 'property' || !def.group) return false;
  if (st.owner !== p.id || st.buildings <= 0) return false;

  // Even selling rule
  const groupSqs = GROUP_SQUARES[def.group];
  const maxBuildings = Math.max(...groupSqs.map(i => s.squares[i].buildings));
  return st.buildings >= maxBuildings;
}

export function sellBuilding(s: GameState, idx: number): boolean {
  if (!canSellBuildingAt(s, idx)) return false;
  const p = cur(s);
  const refund = Math.round(buildCostOf(s, idx) * 0.5);
  s.squares[idx].buildings--;
  p.cash += refund;
  const wasHotel = s.squares[idx].buildings === 4;
  log(s, `🔨 ${p.name} sold ${wasHotel ? 'Hotel down to 4 Houses' : 'House'} on ${BOARD[idx].name} for LKR ${fmt(refund)}.`, 'money');
  return true;
}

export function canMortgageSquare(s: GameState, idx: number): boolean {
  const def = BOARD[idx];
  const st = s.squares[idx];
  const p = cur(s);
  if (st.owner !== p.id || st.mortgaged || st.loanLocked) return false;
  if (!def.mortgageValue) return false;
  if (def.group) {
    const groupSqs = GROUP_SQUARES[def.group];
    if (groupSqs.some(i => s.squares[i].buildings > 0)) return false;
  }
  return true;
}

export function mortgageSquare(s: GameState, idx: number): boolean {
  if (!canMortgageSquare(s, idx)) return false;
  const p = cur(s);
  const def = BOARD[idx];
  const val = def.mortgageValue ?? Math.round((def.price ?? 2000) * 0.5);
  s.squares[idx].mortgaged = true;
  p.cash += val;
  log(s, `📜 ${p.name} mortgaged ${def.name} for LKR ${fmt(val)}. Rent collection suspended.`, 'money');
  return true;
}

export function canUnmortgageSquare(s: GameState, idx: number): boolean {
  const def = BOARD[idx];
  const st = s.squares[idx];
  const p = cur(s);
  if (st.owner !== p.id || !st.mortgaged) return false;
  const cost = Math.round((def.mortgageValue ?? Math.round((def.price ?? 2000) * 0.5)) * 1.1);
  return p.cash >= cost;
}

export function unmortgageSquare(s: GameState, idx: number): boolean {
  if (!canUnmortgageSquare(s, idx)) return false;
  const p = cur(s);
  const def = BOARD[idx];
  const cost = Math.round((def.mortgageValue ?? Math.round((def.price ?? 2000) * 0.5)) * 1.1);
  p.cash -= cost;
  s.squares[idx].mortgaged = false;
  log(s, `📜 ${p.name} unmortgaged ${def.name} for LKR ${fmt(cost)} (includes 10% interest). Rent restored!`, 'money');
  return true;
}

export function maintainSquare(s: GameState, idx: number): boolean {
  const def = BOARD[idx];
  const st = s.squares[idx];
  const p = cur(s);
  if (st.owner !== p.id || st.buildings === 0 || (st.condition ?? 100) >= 100) return false;
  const cost = maintenanceCostOf(s, idx);
  if (p.cash < cost) return false;
  p.cash -= cost;
  st.condition = 100;
  log(s, `🛠️ ${p.name} performed maintenance on ${def.name} for LKR ${fmt(cost)} — Condition restored to 100%!`, 'money');
  return true;
}

export function buyShield(s: GameState, idx: number, tier: 1 | 2 | 3): boolean {
  const p = cur(s);
  const st = s.squares[idx];
  if (st.owner !== p.id || BOARD[idx].kind !== 'property' || st.shield >= tier) return false;
  if (tier === 3 && st.buildings !== 5) return false; // Tier 3 is Hotel only
  const cost = shieldCost(s, idx, tier);
  if (p.cash < cost) return false;
  p.cash -= cost;
  st.shield = tier;
  const label = tier === 3 ? 'Business Interruption Policy' : tier === 2 ? 'Comprehensive Insurance' : 'Basic Property Insurance';
  log(s, `🛡️ ${p.name} equipped ${label} on ${BOARD[idx].name} for LKR ${fmt(cost)}.`, 'money');
  return true;
}

export function repairSquare(s: GameState, idx: number): boolean {
  const p = cur(s);
  const st = s.squares[idx];
  if (st.owner !== p.id || !st.damaged || p.cash < REPAIR_COST) return false;
  p.cash -= REPAIR_COST;
  st.damaged = false;
  st.condition = Math.max(75, st.condition ?? 100);
  log(s, `🔧 ${p.name} repaired damage on ${BOARD[idx].name} — rent collection restored.`, 'money');
  return true;
}

// ─── Bank of Ceylon loans ─────────────────────────────────────────────────

export function takeLoan(s: GameState, amount: number, playerId?: number): boolean {
  const pid = playerId ?? s.current;
  const p = s.players[pid];
  if (p.loan > 0) return false;
  const max = maxBorrowLimit(s, p.id);
  const principal = Math.min(amount, max);
  if (principal <= 0) return false;
  const rate = effectiveLoanRate(s);
  const payback = Math.round(principal * (1 + rate / 100));
  p.cash += principal;
  p.loan = payback;
  p.loanRoundsLeft = LOAN_DURATION;
  s.squares.forEach((st, i) => {
    if (st.owner === p.id && BOARD[i].mortgageValue && !st.loanLocked && !st.mortgaged) st.loanLocked = true;
  });
  log(s, `🏦 ${p.name} borrowed LKR ${fmt(principal)} from Bank of Ceylon (${rate}% flat; LKR ${fmt(payback)} due in ${LOAN_DURATION} rounds). Collateral locked.`, 'money');
  return true;
}

export function repayLoan(s: GameState, amount: number): boolean {
  const p = cur(s);
  if (p.loan <= 0) return false;
  const pay = Math.min(amount, p.loan, p.cash);
  if (pay <= 0) return false;
  p.cash -= pay;
  p.loan -= pay;
  if (p.loan <= 0) {
    p.loan = 0;
    p.loanRoundsLeft = 0;
    s.squares.forEach(st => { if (st.owner === p.id) st.loanLocked = false; });
    log(s, `🏦 ${p.name} settled their Bank of Serendib loan in full! Collateral unlocked.`, 'money');
  } else {
    log(s, `🏦 ${p.name} repaid LKR ${fmt(pay)}. Outstanding: LKR ${fmt(p.loan)}.`, 'money');
  }
  return true;
}

// ─── Express transit (railway fast travel) ────────────────────────────────

export function canExpressTransit(s: GameState): boolean {
  const p = cur(s);
  return s.phase === 'postRoll' && BOARD[p.position].kind === 'railway' && p.cash >= EXPRESS_FARE && !p.bankrupt;
}

export function expressTransit(s: GameState, destType: 'unowned' | 'bank'): void {
  const p = cur(s);
  if (!canExpressTransit(s)) return;
  const rail = s.squares[p.position];
  if (rail.owner !== null && rail.owner !== p.id) {
    chargeCash(s, p.id, EXPRESS_FARE, { type: 'player', id: rail.owner });
  } else {
    chargeCash(s, p.id, EXPRESS_FARE, { type: 'pool' });
  }
  log(s, `🛺 ${p.name} paid LKR ${fmt(EXPRESS_FARE)} Express Fare.`, 'money');

  for (const pl of s.players) {
    if (!pl.bankrupt && ownsMonopoly(s, pl.id, 'orange')) {
      pl.cash += EXPRESS_ORANGE_DIVIDEND;
      log(s, `✈️ ${pl.name} collected LKR ${fmt(EXPRESS_ORANGE_DIVIDEND)} Airport Logistics Dividend from Express Transit.`, 'money');
    }
  }

  let target = 38;
  if (destType === 'unowned') {
    for (let offset = 1; offset <= BOARD.length; offset++) {
      const idx = (p.position + offset) % BOARD.length;
      const kind = BOARD[idx].kind;
      if ((kind === 'property' || kind === 'railway' || kind === 'utility') && s.squares[idx].owner === null) {
        target = idx;
        break;
      }
    }
  }
  if (target < p.position) grantStartBonus(s);
  p.position = target;
  s.selectedSquare = target;
  log(s, `🛺 ${p.name} express-travelled to ${BOARD[target].name}.`, 'info');
  resolveLanding(s);
}

// ─── Trading ──────────────────────────────────────────────────────────────

export function validTrade(s: GameState, o: TradeOffer): string | null {
  const from = s.players[o.fromId];
  const to = s.players[o.toId];
  if (o.fromId === o.toId) return 'Pick a different partner.';
  if (o.giveCash < 0 || o.wantCash < 0) return 'Cash amounts cannot be negative.';
  if (o.giveCash > from.cash) return 'You cannot offer more cash than you have.';
  if (o.wantCash > to.cash) return 'Your partner cannot pay that much cash.';
  if (o.giveSquare !== null) {
    const st = s.squares[o.giveSquare];
    if (st.owner !== o.fromId) return 'You do not own the offered property.';
    if (st.loanLocked) return 'The offered property is loan-locked as collateral.';
    const g = BOARD[o.giveSquare].group;
    if (g && GROUP_SQUARES[g].some(i => s.squares[i].buildings > 0)) {
      return 'Must sell all buildings in the district before trading this property.';
    }
  }
  if (o.wantSquare !== null) {
    const st = s.squares[o.wantSquare];
    if (st.owner !== o.toId) return 'Your partner does not own the requested property.';
    if (st.loanLocked) return 'The requested property is loan-locked as collateral.';
    const g = BOARD[o.wantSquare].group;
    if (g && GROUP_SQUARES[g].some(i => s.squares[i].buildings > 0)) {
      return 'Your partner must sell buildings in the district before trading.';
    }
  }
  if (o.giveSquare === null && o.giveCash === 0 && o.wantSquare === null && o.wantCash === 0) {
    return 'An empty trade is not a trade.';
  }
  return null;
}

export function applyTrade(s: GameState, o: TradeOffer): void {
  const from = s.players[o.fromId];
  const to = s.players[o.toId];
  if (o.giveSquare !== null) s.squares[o.giveSquare].owner = o.toId;
  if (o.wantSquare !== null) s.squares[o.wantSquare].owner = o.fromId;
  if (o.giveCash > 0) { from.cash -= o.giveCash; to.cash += o.giveCash; }
  if (o.wantCash > 0) { to.cash -= o.wantCash; from.cash += o.wantCash; }
  const giveName = o.giveSquare !== null ? BOARD[o.giveSquare].name : null;
  const wantName = o.wantSquare !== null ? BOARD[o.wantSquare].name : null;
  log(s, `🤝 TRADE: ${from.name} gave ${giveName ? giveName : ''}${giveName && o.giveCash ? ' + ' : ''}${o.giveCash ? `LKR ${fmt(o.giveCash)}` : ''} → ${to.name} for ${wantName ? wantName : ''}${wantName && o.wantCash ? ' + ' : ''}${o.wantCash ? `LKR ${fmt(o.wantCash)}` : ''}.`, 'event');
  for (const g of Object.values(GROUPS) as { id: keyof typeof GROUPS }[]) {
    const owner = ownsMonopoly(s, o.fromId, g.id) ? o.fromId : ownsMonopoly(s, o.toId, g.id) ? o.toId : null;
    if (owner !== null) {
      log(s, `🌟 ${s.players[owner].name} now holds the ${GROUPS[g.id].name} monopoly!`, 'event');
    }
  }
}

// ─── Turn & round flow ────────────────────────────────────────────────────

export function endTurn(s: GameState): void {
  if (s.phase === 'gameOver') return;
  s.lastRoll = null;
  s.pendingTrade = null;

  // Bonus roll on doubles (Traditional Monopoly rule)
  if (s.hasBonusRoll && !cur(s).bankrupt && !cur(s).inJail) {
    s.hasBonusRoll = false;
    s.phase = 'preRoll';
    log(s, `🎲 ${cur(s).name} rolls again for their DOUBLES bonus!`, 'info');
    return;
  }

  s.hasBonusRoll = false;
  s.consecutiveDoubles = 0;
  let i = s.current;
  for (let n = 0; n < s.players.length; n++) {
    i = (i + 1) % s.players.length;
    if (!s.players[i].bankrupt) break;
  }
  const wrapped = i !== s.current && i <= s.current;
  s.current = i;
  if (checkGameOver(s)) return;
  if (wrapped) processEndOfRound(s);
  // processEndOfRound may end the game via the round limit — check through a
  // helper so the compiler doesn't narrow phase based on the entry guard.
  if (!isOver(s)) s.phase = 'preRoll';
}

function isOver(s: GameState): boolean {
  return s.phase === 'gameOver';
}

function processEndOfRound(s: GameState): void {
  s.round++;
  if (s.round > s.maxRounds) {
    s.round = s.maxRounds;
    gameOverByWorth(s);
    return;
  }

  // Rule-LK 25: Building Condition Rating degrades by 2% at the end of every round
  s.squares.forEach((st, i) => {
    if (st.owner !== null && st.buildings > 0) {
      st.condition = Math.max(0, (st.condition ?? 100) - 2);
      if (st.condition === 24) {
        log(s, `🏚️ ${BOARD[i].name}'s buildings fell below 25% condition and are CLOSED until maintained!`, 'danger');
      }
    }
  });

  // Loan maturity: auto-settle if possible, otherwise foreclosure.
  for (const p of s.players) {
    if (p.bankrupt || p.loan <= 0) continue;
    p.loanRoundsLeft--;
    if (p.loanRoundsLeft <= 0) {
      if (p.cash >= p.loan) {
        p.cash -= p.loan;
        p.loan = 0;
        s.squares.forEach(st => { if (st.owner === p.id) st.loanLocked = false; });
        log(s, `🏦 ${p.name} auto-settled their maturing Bank loan at deadline.`, 'money');
      } else {
        p.loan = 0;
        s.squares.forEach((st, i) => {
          if (st.owner === p.id && st.loanLocked) {
            st.owner = null;
            st.buildings = 0;
            st.shield = 0;
            st.loanLocked = false;
            st.damaged = false;
            st.mortgaged = false;
            st.condition = 100;
          }
        });
        log(s, `🚨 LOAN DEFAULT! The Bank of Ceylon foreclosed ${p.name}'s pledged collateral.`, 'danger');
      }
    }
  }

  // Macro cycle rotation.
  s.cycleRoundsLeft--;
  if (s.cycleRoundsLeft <= 0) {
    s.cycleIndex = (s.cycleIndex + 1) % MACRO_CYCLES.length;
    s.cycleRoundsLeft = CYCLE_LENGTH;
    const cyc = MACRO_CYCLES[s.cycleIndex];
    log(s, `🌏 MACRO SHIFT: ${cyc.icon} ${cyc.name} active for ${CYCLE_LENGTH} rounds! (${cyc.desc})`, 'cycle');
  }
}

export function checkGameOver(s: GameState): boolean {
  const solvent = s.players.filter(p => !p.bankrupt);
  if (solvent.length <= 1 && s.phase !== 'gameOver') {
    s.winner = solvent.length === 1 ? solvent[0].id : null;
    s.phase = 'gameOver';
    log(s, solvent.length === 1 ? `🏆 ${solvent[0].name} is the last tycoon standing — GAME OVER.` : 'Everyone is bankrupt. The bank wins.', 'event');
    return true;
  }
  return false;
}

function gameOverByWorth(s: GameState): void {
  const standings = s.players.filter(p => !p.bankrupt).sort((a, b) => netWorth(s, b.id) - netWorth(s, a.id));
  s.winner = standings[0]?.id ?? null;
  s.phase = 'gameOver';
  log(s, `🏆 MATCH COMPLETE at round ${s.maxRounds}. Final standings by net worth: ${standings.map(p => `${p.name} (LKR ${fmt(netWorth(s, p.id))})`).join(', ')}.`, 'event');
}

export function fmtMoney(n: number): string {
  return `LKR ${fmt(n)}`;
}

export function squareDef(idx: number): SquareDef {
  return BOARD[idx];
}
