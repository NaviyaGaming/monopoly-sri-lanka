// ─── Bot tycoons: Kasun, Nimali, Roshan & Dilani ─────────────────────────
// Ported from the author's AI design. Bots call the same engine functions
// the human UI does — one rules path, no cheating.

import type { GameState, TradeOffer } from './types';
import { BOARD, GROUP_SQUARES, PERSONAS } from './config';
import {
  applyTrade, auctionBid, auctionCurrentBidder, auctionPass, buyCurrent,
  buyShield, canBuildAt, canUnmortgageSquare, cur, declineCurrent, doBuild,
  endTurn, maintainSquare, payBail, repairSquare, takeTurnRoll,
  unmortgageSquare, validTrade,
} from './engine';
import { buildCostOf, ownsMonopoly, squareValue } from './economy';

export function botToAct(s: GameState): boolean {
  switch (s.phase) {
    case 'auction': return s.players[auctionCurrentBidder(s)].kind === 'bot';
    case 'gameOver': return false;
    default: return s.players[s.current].kind === 'bot';
  }
}

export function botAct(s: GameState): void {
  switch (s.phase) {
    case 'preRoll': {
      const p = cur(s);
      if (p.kind !== 'bot') return;
      if (p.inJail && p.cash > 6000) payBail(s);
      takeTurnRoll(s);
      return;
    }
    case 'decideBuy': {
      if (cur(s).kind !== 'bot') return;
      if (botWantsBuy(s)) buyCurrent(s);
      else declineCurrent(s);
      return;
    }
    case 'auction': {
      if (s.players[auctionCurrentBidder(s)].kind !== 'bot') return;
      if (botWantsBid(s) && auctionBid(s)) return;
      auctionPass(s);
      return;
    }
    case 'postRoll': {
      if (cur(s).kind !== 'bot') return;
      botDevelop(s);
      botTryTrading(s);
      endTurn(s);
      return;
    }
  }
}

// ─── Purchase decisions ───────────────────────────────────────────────────

function botWantsBuy(s: GameState): boolean {
  if (s.pendingBuy === null) return false;
  const p = cur(s);
  const price = squareValue(s, s.pendingBuy);
  if (p.cash < price) return false;
  switch (p.persona) {
    case 'aggressive': return p.cash - price >= 1500;
    case 'conservative': return p.cash - price >= p.cash * 0.45;
    case 'risk': return true;
    case 'opportunist': return p.cash - price >= 3000;
  }
}

function botWantsBid(s: GameState): boolean {
  const a = s.auction!;
  const bidder = s.players[auctionCurrentBidder(s)];
  const nextMin = a.leader === null ? a.opening : a.currentBid + 250;
  let maxWilling = a.listPrice * 0.9;
  switch (bidder.persona) {
    case 'aggressive': maxWilling = a.listPrice * 1.25; break;
    case 'conservative': maxWilling = Math.min(bidder.cash * 0.55, a.listPrice * 0.85); break;
    case 'risk': maxWilling = bidder.cash - 1000; break;
    case 'opportunist': maxWilling = a.listPrice * 0.95; break;
  }
  const def = BOARD[a.square];
  if (def.group) {
    const groupSqs = GROUP_SQUARES[def.group];
    const owned = groupSqs.filter(i => s.squares[i].owner === bidder.id).length;
    if (owned >= groupSqs.length - 1) maxWilling *= 1.35; // completing a district
  }
  return nextMin <= maxWilling && bidder.cash >= nextMin;
}

// ─── Development: repairs, construction, shields ─────────────────────────

function botDevelop(s: GameState): void {
  const p = cur(s);
  if (p.bankrupt) return;

  // 1. Repair damaged estates
  s.squares.forEach((st, i) => {
    if (st.owner === p.id && st.damaged && p.cash >= 1600) repairSquare(s, i);
  });

  // 2. Maintain degrading buildings (Rule-LK 27)
  s.squares.forEach((st, i) => {
    if (st.owner === p.id && st.buildings > 0 && (st.condition ?? 100) < 75 && p.cash >= 3000) {
      maintainSquare(s, i);
    }
  });

  // 3. Unmortgage properties when cash reserves are healthy
  if (p.cash >= 12000) {
    s.squares.forEach((st, i) => {
      if (st.owner === p.id && st.mortgaged && canUnmortgageSquare(s, i)) {
        unmortgageSquare(s, i);
      }
    });
  }

  // 4. Build on monopolies evenly (conservative keeps a larger reserve).
  for (let guard = 0; guard < 40; guard++) {
    let built = false;
    s.squares.forEach((st, i) => {
      if (built || st.owner !== p.id || BOARD[i].kind !== 'property') return;
      if (!BOARD[i].group || !ownsMonopoly(s, p.id, BOARD[i].group!) || st.buildings >= 5) return;
      const reserve = p.persona === 'conservative' ? 6000 : 2000;
      if (p.cash - buildCostOf(s, i) >= reserve && canBuildAt(s, i)) {
        if (doBuild(s, i)) built = true;
      }
    });
    if (!built) break;
  }

  // 5. Cautious tycoons shield developed properties.
  if (p.persona === 'conservative' || p.persona === 'opportunist') {
    s.squares.forEach((st, i) => {
      if (st.owner === p.id && st.buildings >= 2 && st.shield === 0 && p.cash >= 5000) {
        buyShield(s, i, st.buildings === 5 ? 3 : 2);
      }
    });
  }
}

// ─── Proactive bot trading: complete monopolies ───────────────────────────

function botTryTrading(s: GameState): void {
  const p = cur(s);
  if (p.bankrupt || s.pendingTrade) return;

  for (const [groupId, sqs] of Object.entries(GROUP_SQUARES)) {
    const myOwned = sqs.filter(i => s.squares[i].owner === p.id);
    // If bot has all but 1 property in this group
    if (myOwned.length === sqs.length - 1) {
      const missingSq = sqs.find(i => s.squares[i].owner !== p.id)!;
      const targetOwner = s.squares[missingSq].owner;
      if (targetOwner === null || targetOwner === p.id || s.squares[missingSq].loanLocked) continue;

      // Find a square to offer in exchange (where bot does not have a monopoly)
      let giveSquare: number | null = null;
      for (const i of s.squares.map((st, idx) => ({ st, idx }))) {
        if (i.st.owner === p.id && !i.st.loanLocked && !i.st.mortgaged && BOARD[i.idx].price) {
          const g = BOARD[i.idx].group;
          if (g && !ownsMonopoly(s, p.id, g) && g !== groupId && i.st.buildings === 0) {
            giveSquare = i.idx;
            break;
          }
        }
      }

      const missingVal = squareValue(s, missingSq);
      const giveVal = giveSquare !== null ? squareValue(s, giveSquare) : 0;
      let cashOffer = 0;
      if (giveVal < missingVal) {
        cashOffer = Math.min(p.cash - 2000, Math.round((missingVal - giveVal) * 1.2 / 250) * 250);
      }
      if (cashOffer < 0) cashOffer = 0;

      const offer: TradeOffer = {
        fromId: p.id,
        toId: targetOwner,
        giveSquare,
        giveCash: cashOffer,
        wantSquare: missingSq,
        wantCash: 0,
      };

      if (!validTrade(s, offer)) {
        if (s.players[targetOwner].kind === 'bot') {
          if (botEvaluateTrade(s, offer)) {
            applyTrade(s, offer);
            return;
          }
        } else {
          // Propose trade to human!
          s.pendingTrade = offer;
          return;
        }
      }
    }
  }
}

// ─── Trade evaluation ─────────────────────────────────────────────────────

export function botEvaluateTrade(s: GameState, o: TradeOffer): boolean {
  const bot = s.players[o.toId];
  if (bot.kind !== 'bot') return false;
  const giveValue =
    (o.wantSquare !== null ? squareValue(s, o.wantSquare) * 1.1 : 0) + o.wantCash;
  const getValue =
    (o.giveSquare !== null ? squareValue(s, o.giveSquare) * 0.9 : 0) + o.giveCash;
  if (giveValue <= 0) return false;

  let factor = 1.0;
  switch (bot.persona) {
    case 'conservative': factor = 1.15; break;
    case 'opportunist': factor = 1.05; break;
    case 'aggressive': factor = 1.0; break;
    case 'risk': factor = 0.95; break;
  }
  // Completing a district makes any tycoon hungrier.
  const wantsGroup = o.giveSquare !== null ? BOARD[o.giveSquare].group : null;
  if (wantsGroup) {
    const sqs = GROUP_SQUARES[wantsGroup];
    const owned = sqs.filter(i => s.squares[i].owner === bot.id).length;
    if (owned >= sqs.length - 1) factor -= 0.25;
  }
  return getValue >= giveValue * factor;
}

export function botConsiderTrade(s: GameState): void {
  const o = s.pendingTrade;
  if (!o) return;
  if (botEvaluateTrade(s, o)) {
    applyTrade(s, o);
  }
  s.pendingTrade = null;
}

export function personaName(persona: keyof typeof PERSONAS): string {
  return PERSONAS[persona].name;
}

export { validTrade };
