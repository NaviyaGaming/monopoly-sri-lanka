// ─── POLA (Monopoly Sri Lanka) renderer ──────────────────────────────────
// Full DOM re-render from GameState after every action. Emerald/gold island
// theme, 3D pedestal tokens, contextual center-hub cards, tabbed desk.

import type { GameState, GroupId } from '../engine/types';
import {
  BOARD, COMMUNITY_CARDS, GROUPS, HEADLINE_CARDS, PERSONAS, TOKENS,
} from '../engine/config';
import {
  buildCostOf, currentCycle, effectiveLoanRate, effectiveRent, effectiveTax,
  fmt, maintenanceCostOf, maxBorrowLimit, netWorth, ownsMonopoly, railwaysOwnedBy, squareValue,
  startBonus, shieldCost,
} from '../engine/economy';
import {
  auctionCurrentBidder, auctionNextAmount, canBuildAt, canSellBuildingAt,
  canMortgageSquare, canUnmortgageSquare, canExpressTransit, cur,
  validTrade,
} from '../engine/engine';
import { renderDice } from './dice';
import { TOKEN_AVATARS } from './tokens';
import { confetti } from './fx';
import { cycleName, getLang, squareName, t } from './i18n';
import './styles.css';

export interface Handlers {
  onRoll(): void;
  onBail(): void;
  onBuy(): void;
  onPass(): void;
  onBid(increment: number): void;
  onWithdraw(): void;
  onEndTurn(): void;
  onBuild(idx: number): void;
  onSellBuilding(idx: number): void;
  onMortgage(idx: number): void;
  onUnmortgage(idx: number): void;
  onMaintain(idx: number): void;
  onShield(idx: number, tier: 1 | 2 | 3): void;
  onRepair(idx: number): void;
  onLoan(amount: number): void;
  onRepay(amount: number): void;
  onTransit(kind: 'unowned' | 'bank'): void;
  onTradeSubmit(partner: number, giveSq: number | null, giveCash: number, wantSq: number | null, wantCash: number): void;
  onTradeAccept(): void;
  onTradeDecline(): void;
  onCardOk(): void;
  onRestart(): void;
  onSelectSquare(idx: number): void;
  onTab(tab: string): void;
  onEmote(emoji: string): void;
}

export type TabId = 'deed' | 'bank' | 'insure' | 'trade' | 'log';

let activeTab: TabId = 'deed';
let diceClickHandler: (() => void) | null = null;
let landedSquare: number | null = null;
let localPlayerId: number | null = null;
let currentTimerVal = 25;
let currentTimerUrgent = false;
let currentTimerVisible = false;

export function setTimerDisplay(seconds: number, urgent: boolean, visible: boolean): void {
  currentTimerVal = seconds;
  currentTimerUrgent = urgent;
  currentTimerVisible = visible;
  const badge = document.getElementById('turn-timer-badge');
  const val = document.getElementById('turn-timer-val');
  if (badge && val) {
    badge.style.display = visible ? 'inline-flex' : 'none';
    val.textContent = `${seconds}s`;
    badge.classList.toggle('urgent', urgent);
  }
}

export function setActiveTab(tab: string): void {
  if (['deed', 'bank', 'insure', 'trade', 'log'].includes(tab)) {
    activeTab = tab as TabId;
  }
}

export function setLocalPlayerId(id: number | null): void {
  localPlayerId = id;
}

export function getLocalPlayerId(): number | null {
  return localPlayerId;
}

export function setDiceClickHandler(fn: (() => void) | null): void {
  diceClickHandler = fn;
}

export function markLanded(idx: number): void {
  landedSquare = idx;
}

function el(id: string): HTMLElement {
  return document.getElementById(id)!;
}

function bind(id: string, fn: () => void): void {
  const b = document.getElementById(id);
  if (b) b.addEventListener('click', fn);
}

// Board index → grid cell. Square 0 bottom-right, play runs counter-clockwise.
function gridPos(i: number): { row: number; col: number } {
  if (i <= 10) return { row: 11, col: 11 - i };
  if (i <= 20) return { row: 11 - (i - 10), col: 1 };
  if (i <= 30) return { row: 1, col: 1 + (i - 20) };
  return { row: 1 + (i - 30), col: 11 };
}

// ─── Full render ──────────────────────────────────────────────────────────

export function render(s: GameState, h: Handlers, myId?: number | null): void {
  if (myId !== undefined) localPlayerId = myId;
  renderHeader(s);
  renderBoard(s, h);
  renderScoreboard(s, h);
  renderTabs(s, h);
  renderOverlay(s, h);
}

// ─── Header ───────────────────────────────────────────────────────────────

function renderHeader(s: GameState): void {
  const cyc = currentCycle(s);
  el('hdr-round').textContent = `${Math.min(s.round, s.maxRounds)} / ${s.maxRounds}`;
  el('hdr-cycle-icon').textContent = cyc.icon;
  el('hdr-cycle-name').textContent = cycleName(cyc.id, cyc.name);
  el('hdr-cycle-timer').textContent = `${s.cycleRoundsLeft}R left`;
  el('hdr-poya-pool').textContent = `LKR ${fmt(s.poyaPool)}`;
}

// ─── Board ────────────────────────────────────────────────────────────────

function priceHint(s: GameState, idx: number): string {
  const st = s.squares[idx];
  if (st.mortgaged) return 'MORTGAGED';
  const def = BOARD[idx];
  const k = (n: number) => `${(n / 1000).toFixed(1)}k`;
  if (def.price) return k(squareValue(s, idx));
  switch (def.kind) {
    case 'start': return `+${(startBonus(s) / 1000).toFixed(1)}k`;
    case 'tax': return `-${(effectiveTax(s) / 1000).toFixed(1)}k`;
    case 'poya': return '+Pool';
    case 'bank': return '10% Loan';
    case 'insurance': return 'Shield';
    default: return '';
  }
}

function renderBoard(s: GameState, h: Handlers): void {
  const grid = el('board-grid');
  grid.innerHTML = '';
  const active = s.phase !== 'gameOver' ? s.players[s.current] : null;

  for (let i = 0; i < BOARD.length; i++) {
    const def = BOARD[i];
    const st = s.squares[i];
    const pos = gridPos(i);
    const cell = document.createElement('div');
    const isHere = active !== null && !active.bankrupt && active.position === i;
    const isSelected = s.selectedSquare === i && !isHere;
    cell.className = `board-cell${i % 10 === 0 ? ' corner-cell' : ''}${isHere ? ' active-player-cell' : ''}${isSelected ? ' selected-cell' : ''}${i === landedSquare ? ' landed' : ''}${st.mortgaged ? ' is-mortgaged' : ''}`;
    cell.style.gridRow = String(pos.row);
    cell.style.gridColumn = String(pos.col);
    cell.dataset.idx = String(i);

    const owner = st.owner !== null ? s.players[st.owner] : null;
    const isOwnerCell = owner !== null;
    cell.className = `board-cell${i % 10 === 0 ? ' corner-cell' : ''}${isHere ? ' active-player-cell' : ''}${isSelected ? ' selected-cell' : ''}${i === landedSquare ? ' landed' : ''}${st.mortgaged ? ' is-mortgaged' : ''}${isOwnerCell ? ' is-owned' : ''}`;
    if (isOwnerCell) {
      cell.style.setProperty('--owner-bg', `${owner.color}24`);
      cell.style.setProperty('--owner-border', `${owner.color}88`);
    }
    cell.style.gridRow = String(pos.row);
    cell.style.gridColumn = String(pos.col);
    cell.dataset.idx = String(i);

    // Dynamic hover tooltip text
    const rentDetails = def.rents ? `Rent: LKR ${st.buildings > 0 ? def.rents[st.buildings] : def.rents[0]}` : (def.price ? `Price: LKR ${def.price}` : '');
    cell.title = `${def.name}\n${owner ? `Owner: ${owner.name}` : (def.price ? `Unowned · LKR ${def.price}` : '')}\n${rentDetails}`;

    // Top color bar with build/shield/damage/mortgage icons.
    let topBar = '';
    if (def.group && def.kind === 'property') {
      const buildIcons = st.buildings === 5 ? '🏨' : st.buildings > 0 ? '🏠'.repeat(st.buildings) : '';
      const shieldIcon = st.shield === 3 ? '👑' : st.shield === 2 ? '🔰' : st.shield === 1 ? '🛡️' : '';
      const statusIcons = `${shieldIcon}${st.damaged ? '⚠️' : ''}${st.mortgaged ? '🔒' : ''}`;
      topBar = `<div class="cell-bar" style="background:${GROUPS[def.group].color}"><span>${buildIcons}</span><span>${statusIcons}</span></div>`;
    } else {
      topBar = `<div class="cell-icon">${st.mortgaged ? '🔒' : def.icon ?? ''}</div>`;
    }

    // 3D pedestal tokens standing here.
    const tokensHere = s.players
      .filter(p => !p.bankrupt && p.position === i)
      .map(p => {
        const av = TOKEN_AVATARS[p.tokenKey];
        return `<span class="token-3d-wrap${isHere && active?.id === p.id ? ' token-active' : ''}" title="${p.name} (${av.names[getLang()]})">${av.svg(p.color)}</span>`;
      })
      .join('');

    const hint = priceHint(s, i);
    const coastalBadge = def.coastal ? '<span class="coastal-dot" title="Coastal Resort">🌊</span>' : '';
    const nameHtml = `<div class="cell-name">${squareName(i, true, def.name, def.short)}${coastalBadge}</div>`;
    const ownerHtml = owner
      ? `<div class="cell-owner" style="color:${owner.color}"><span>${owner.tokenKey ? TOKENS[owner.tokenKey].icon : ''}</span><span>${hint}</span></div><div class="owner-stripe" style="background:${owner.color}"></div>`
      : `<div class="cell-price">${hint}</div>`;

    cell.innerHTML = `${topBar}${nameHtml}<div class="cell-tokens">${tokensHere}</div>${ownerHtml}`;
    cell.addEventListener('click', () => {
      s.selectedSquare = i;
      activeTab = 'deed';
      render(s, h);
      h.onSelectSquare(i);
    });
    grid.appendChild(cell);
  }

  // ── Center hub ──
  const center = document.createElement('div');
  center.id = 'board-center';
  const cyc = currentCycle(s);
  center.innerHTML = `
    <div class="hub-top">
      <div class="hub-header-row">
        <div class="hub-title">POLA · MONOPOLY LK</div>
        <div id="turn-timer-badge" class="turn-timer-badge" title="Turn countdown timer" style="display: ${currentTimerVisible ? 'inline-flex' : 'none'};">
          <span class="timer-icon">⏱️</span>
          <span id="turn-timer-val">${currentTimerVal}s</span>
        </div>
      </div>
      <div class="hub-cycle" title="${cyc.desc}">${cyc.icon} ${cycleName(cyc.id, cyc.name)} · ${s.cycleRoundsLeft}R</div>
    </div>
    <div class="hub-middle">
      <div class="dice-row" id="dice-holder"></div>
      <div id="popups"></div>
      <div class="hub-card" id="hub-card"></div>
    </div>
    <div class="hub-actions" id="hub-actions"></div>
  `;
  grid.appendChild(center);

  const timerBadge = center.querySelector<HTMLElement>('#turn-timer-badge');
  if (timerBadge && currentTimerUrgent) {
    timerBadge.classList.add('urgent');
  }

  const holder = center.querySelector<HTMLElement>('#dice-holder')!;
  void renderDice(holder, s.lastRoll);
  const isMyTurn = (localPlayerId === null) || (s.current === localPlayerId);
  const humanPreRoll = s.phase === 'preRoll' && cur(s).kind === 'human' && isMyTurn;
  if (humanPreRoll && diceClickHandler) {
    holder.classList.add('clickable');
    holder.title = '🎲 Click dice to roll!';
    holder.addEventListener('click', () => diceClickHandler!());
  } else {
    holder.classList.remove('clickable');
    holder.title = isMyTurn ? '' : `⏳ ${cur(s).name}'s turn`;
  }

  renderHubCard(s, h);
  landedSquare = null;
}

function renderHubCard(s: GameState, h: Handlers): void {
  const card = document.getElementById('hub-card');
  const actions = document.getElementById('hub-actions');
  const hubMiddle = document.querySelector<HTMLElement>('.hub-middle');
  const diceHolder = document.getElementById('dice-holder');
  if (!card || !actions) return;
  card.innerHTML = '';
  actions.innerHTML = '';

  const hasCard = s.phase !== 'preRoll' && s.phase !== 'gameOver';
  if (hubMiddle) hubMiddle.classList.toggle('has-card', hasCard);
  if (diceHolder) diceHolder.classList.toggle('compact', hasCard);

  if (s.phase === 'gameOver') return;

  const p = cur(s);
  const isMyTurn = (localPlayerId === null) || (s.current === localPlayerId);
  if (p.kind === 'bot') {
    card.innerHTML = `<div class="ctx-card ai"><span class="ai-icon">${TOKENS[p.tokenKey].icon}</span><div><b>${p.name}</b><span class="dim">${t('aiThinking')}</span></div></div>`;
    return;
  }

  const idx = p.position;
  const def = BOARD[idx];
  const st = s.squares[idx];

  switch (s.phase) {
    case 'preRoll': {
      if (!isMyTurn) {
        card.innerHTML = `<div class="ctx-card"><div><b>🎲 ${p.name}'s Turn</b><span class="dim">Waiting for ${p.name} to roll the dice...</span></div></div>`;
        actions.innerHTML = `<div class="waiting-turn-banner"><span class="pulse-dot"></span> Waiting for <b>${p.name}</b> to roll...</div>`;
        break;
      }
      if (p.inJail) {
        card.innerHTML = `<div class="ctx-card amber"><div><b>⚖️ CID Inquiry</b><span class="dim">Attempt ${p.jailTurns}/3 — roll doubles or pay bail.</span></div></div>`;
        actions.innerHTML = `
          <button class="btn btn-roll-hero" id="btn-roll"><span class="roll-icon">🎲</span> ${t('rollDice')}</button>
          <button class="btn" id="btn-bail" ${p.cash < 500 ? 'disabled' : ''}>${t('payBail')}</button>`;
        bind('btn-roll', h.onRoll);
        bind('btn-bail', h.onBail);
      } else {
        card.innerHTML = `<div class="ctx-card"><div><b>🎲 ${p.name}'s Turn</b><span class="dim">Roll the dice to navigate Sri Lanka!</span></div></div>`;
        actions.innerHTML = `
          <button class="btn btn-roll-hero" id="btn-roll"><span class="roll-icon">🎲</span> ${t('rollDice')}</button>`;
        bind('btn-roll', h.onRoll);
      }
      break;
    }
    case 'decideBuy': {
      const bi = s.pendingBuy!;
      const bdef = BOARD[bi];
      const price = squareValue(s, bi);
      const gcolor = bdef.group ? GROUPS[bdef.group].color : '#10b981';
      const perk = bdef.group ? GROUPS[bdef.group].perk : (bdef.kind === 'railway' ? 'Rent doubles with each station: 400 → 800 → 1,600 → 3,200.' : 'Rent = 80× dice (200× with both grids).');
      const afford = p.cash >= price;
      const rentLine = bdef.rents
        ? `Base rent: <b>LKR ${fmt(bdef.rents[0])}</b>${bdef.buildCost ? ` · House: <b>LKR ${fmt(buildCostOf(s, bi))}</b>` : ''}`
        : perk;
      card.innerHTML = `
        <div class="ctx-card deed">
          <div class="deed-head" style="background:${gcolor}"><span>🏠 ${squareName(bi, false, bdef.name, bdef.short)}</span><span class="pill">LKR ${fmt(price)}</span></div>
          <div class="deed-body">
            <div>${rentLine}</div>
            <div class="dim perk">🌟 ${perk}</div>
          </div>
        </div>`;
      if (!isMyTurn) {
        actions.innerHTML = `<div class="waiting-turn-banner"><span class="pulse-dot"></span> Waiting for <b>${p.name}</b> to buy or auction...</div>`;
      } else {
        actions.innerHTML = `
          <button class="btn primary" id="btn-buy" ${afford ? '' : 'disabled'}>🏠 ${t('buyProp')} · LKR ${fmt(price)}</button>
          <button class="btn danger" id="btn-pass">🔨 ${t('auctionInstead')}</button>`;
        bind('btn-buy', h.onBuy);
        bind('btn-pass', h.onPass);
      }
      break;
    }
    case 'postRoll': {
      let ctx = '';
      if (def.kind === 'bank' && p.loan === 0) {
        const maxB = maxBorrowLimit(s, p.id);
        ctx = `<div class="ctx-card amber"><div><b>🏦 Bank of Serendib — 10% preferential rate!</b><span class="dim">Credit line LKR ${fmt(maxB)} · 8-round fixed term</span></div></div>`;
      } else if (def.kind === 'insurance') {
        const unshielded = s.squares.map((x, i) => ({ x, i })).filter(o => o.x.owner === p.id && BOARD[o.i].kind === 'property' && o.x.shield === 0);
        ctx = `<div class="ctx-card sky"><div><b>🛡️ Assurance Hub — 20% discount!</b><span class="dim">${unshielded.length > 0 ? `Protect ${BOARD[unshielded[0].i].name} (LKR ${fmt(Math.round(BOARD[unshielded[0].i].price! * 0.08))})` : 'Open the Shield tab to manage protection'}</span></div></div>`;
      } else if (st.damaged && st.owner === p.id) {
        ctx = `<div class="ctx-card rose"><div><b>⚠️ ${def.name} is storm-damaged</b><span class="dim">Rent suspended — repair for LKR 800 (Deed tab).</span></div></div>`;
      } else if (s.cardJustDrawn) {
        ctx = cardPopupHtml(s, isMyTurn);
      } else {
        ctx = `<div class="ctx-card"><div><b>${TOKENS[p.tokenKey].icon} ${p.name}'s turn</b><span class="dim">${isMyTurn ? 'Build, shield, bank or trade — then end your turn.' : `${p.name} is managing their empire...`}</span></div></div>`;
      }
      card.innerHTML = ctx;

      if (!isMyTurn) {
        actions.innerHTML = `<div class="waiting-turn-banner"><span class="pulse-dot"></span> Waiting for <b>${p.name}</b> to finish turn...</div>`;
      } else {
        let transit = '';
        if (canExpressTransit(s)) {
          transit = `<button class="btn small" id="btn-transit-unowned">🛺 → Unowned</button><button class="btn small" id="btn-transit-bank">🏦 → Bank</button>`;
        }
        const endBtnText = s.hasBonusRoll ? '🎲 Roll Again (Doubles Bonus!)' : t('endTurn');
        actions.innerHTML = `${transit}<button class="btn primary${s.hasBonusRoll ? ' gold' : ''}" id="btn-end">${endBtnText}</button>`;
        bind('btn-end', h.onEndTurn);
        bind('btn-transit-unowned', () => h.onTransit('unowned'));
        bind('btn-transit-bank', () => h.onTransit('bank'));
        if (s.cardJustDrawn) {
          const ok = document.getElementById('btn-card-ok');
          ok?.addEventListener('click', h.onCardOk);
        }
      }
      break;
    }
  }
}

function cardPopupHtml(s: GameState, isMyTurn = true): string {
  const c = s.cardJustDrawn!;
  const isCommunity = c.deck === 'community';
  const card = isCommunity ? COMMUNITY_CARDS[c.index] : HEADLINE_CARDS[c.index];
  const deltaText = isCommunity && c.delta !== 0 ? `<div class="card-delta ${c.delta > 0 ? 'up' : 'down'}">${c.delta > 0 ? '+' : ''}LKR ${fmt(c.delta)}</div>` : '';
  const okBtn = isMyTurn
    ? `<button class="btn btn-card-claim" id="btn-card-ok">Collect & Continue ➜</button>`
    : `<button class="btn btn-card-claim" disabled style="opacity:0.6;cursor:default;">Waiting for ${cur(s).name}...</button>`;
  return `
    <div class="deck-flip-wrapper">
      <div class="flip-card-inner is-flipped">
        <div class="flip-card-front ${isCommunity ? 'front-community' : 'front-headline'}">
          <div class="seal-ring">${isCommunity ? '🪷' : '📰'}</div>
          <div class="seal-label">${isCommunity ? 'COMMUNITY FUND' : 'ISLAND HEADLINE'}</div>
          <div class="seal-sub">GOVERNMENT OF SRI LANKA</div>
        </div>
        <div class="flip-card-back ${isCommunity ? 'back-community' : 'back-headline'}">
          <div class="card-category">${isCommunity ? '🪷 National Welfare Fund' : '📰 Economic Bulletin'}</div>
          <h3 class="card-headline-title">${card.title}</h3>
          <p class="card-desc">${card.text}</p>
          ${deltaText}
          ${okBtn}
        </div>
      </div>
    </div>`;
}

// ─── Scoreboard ───────────────────────────────────────────────────────────

function renderScoreboard(s: GameState, h: Handlers): void {
  const panel = el('players-scoreboard');
  const alive = s.players.filter(p => !p.bankrupt);
  const topNet = alive.length > 1 ? Math.max(...alive.map(p => netWorth(s, p.id))) : 0;
  const cardsHtml = s.players.map((p, i) => {
    const isMe = localPlayerId !== null && i === localPlayerId;
    const props = s.squares.filter(st => st.owner === p.id).length;
    const crown = !p.bankrupt && topNet > 0 && netWorth(s, p.id) === topNet ? ' 👑' : '';
    const youTag = isMe ? '<span class="you-badge">YOU</span>' : '';
    const badges = `${p.inJail ? '🚔' : ''}${p.loan > 0 ? `🏦${p.loanRoundsLeft}R` : ''}${p.bankrupt ? ' 💀' : ''}`;
    return `
      <div class="pcard${i === s.current && s.phase !== 'gameOver' ? ' current' : ''}${p.bankrupt ? ' bankrupt' : ''}${isMe ? ' is-me' : ''}" style="--pc:${p.color}">
        <span class="picon">${TOKENS[p.tokenKey].icon}</span>
        <div class="pinfo">
          <div class="pname">${p.name}${youTag}${crown} <span class="pbadges">${badges}</span></div>
          <div class="psub">${p.kind === 'bot' ? PERSONAS[p.persona].label : (isMe ? 'You (Tycoon)' : 'Tycoon')} · ${props} props · Net LKR ${fmt(netWorth(s, p.id))}</div>
        </div>
        <div class="pcash">LKR ${fmt(p.cash)}</div>
      </div>
    `;
  }).join('');

  const emoteBar = `
    <div class="emote-bar" title="Send live reaction">
      <span class="emote-label">Reactions:</span>
      <button class="btn-emote" data-em="😂">😂</button>
      <button class="btn-emote" data-em="💸">💸</button>
      <button class="btn-emote" data-em="🛺">🛺</button>
      <button class="btn-emote" data-em="👑">👑</button>
      <button class="btn-emote" data-em="💀">💀</button>
      <button class="btn-emote" data-em="🔥">🔥</button>
    </div>`;

  panel.innerHTML = cardsHtml + emoteBar;

  panel.querySelectorAll<HTMLButtonElement>('.btn-emote').forEach(btn => {
    btn.addEventListener('click', () => {
      const em = btn.dataset.em;
      if (em) h.onEmote(em);
    });
  });
}

// ─── Tabbed management panel ──────────────────────────────────────────────

function renderTabs(s: GameState, h: Handlers): void {
  const tabs: TabId[] = ['deed', 'bank', 'insure', 'trade', 'log'];
  for (const tab of tabs) {
    const btn = document.getElementById(`tab-btn-${tab}`);
    if (btn) btn.className = `tab-trigger${activeTab === tab ? ' active' : ''}`;
    const panel = document.getElementById(`tab-panel-${tab}`);
    if (panel) panel.classList.toggle('hidden', activeTab !== tab);
  }
  switch (activeTab) {
    case 'deed': renderDeedTab(s, h); break;
    case 'bank': renderBankTab(s, h); break;
    case 'insure': renderShieldTab(s, h); break;
    case 'trade': renderTradeTab(s, h); break;
    case 'log': renderLogTab(s); break;
  }
}

function renderDeedTab(s: GameState, h: Handlers): void {
  const box = document.getElementById('deed-content')!;
  const idx = s.selectedSquare;
  const def = BOARD[idx];
  const st = s.squares[idx];
  const owner = st.owner !== null ? s.players[st.owner] : null;
  const p = cur(s);
  const isMyTurn = (localPlayerId === null) || (s.current === localPlayerId);
  const isOwner = s.phase === 'postRoll' && p.kind === 'human' && st.owner === p.id && isMyTurn;

  if (def.kind === 'property' && def.rents && def.group) {
    const g = GROUPS[def.group];
    const hasMono = owner && ownsMonopoly(s, owner.id, def.group);
    const cond = st.condition ?? 100;
    const shieldLabel = st.shield === 3 ? ' · 👑 Business Policy' : st.shield === 2 ? ' · 🔰 Comprehensive' : st.shield === 1 ? ' · 🛡️ Basic Shield' : '';
    const mortgageLabel = st.mortgaged ? ' · 📜 Mortgaged (No Rent)' : '';
    const conditionLabel = st.buildings > 0 ? ` · Condition: ${cond}%` : '';

    box.innerHTML = `
      <div class="deed-tab">
        <div class="deed-head" style="background:${g.color}"><span>🏠 ${squareName(idx, false, def.name, def.short)}</span><span class="pill">${st.owner === null ? `LKR ${fmt(squareValue(s, idx))}` : (st.mortgaged ? 'MORTGAGED' : '')}</span></div>
        <div class="deed-tab-body">
          <div class="row"><span class="dim">${g.name} district</span><span>${owner ? `<b style="color:${owner.color}">${TOKENS[owner.tokenKey].icon} ${owner.name}</b>${hasMono ? ' 🌟' : ''}` : 'Unowned (Bank)'}</span></div>
          <div class="row"><span class="dim">Development</span><span><b>${st.buildings === 5 ? '🏨 Boutique Hotel' : `${st.buildings} Houses`}</b>${shieldLabel}${st.damaged ? ' · ⚠️ Damaged' : ''}${mortgageLabel}${conditionLabel}${st.loanLocked ? ' · 🔒 Loan-locked' : ''}</span></div>
          <div class="rent-grid">
            ${def.rents.map((r, i) => `<div class="${i === 5 ? 'gold' : ''}"><span>${['Base', '1 House', '2 Houses', '3 Houses', '4 Houses', 'Hotel'][i]}</span><b>LKR ${fmt(r)}</b></div>`).join('')}
          </div>
          <div class="perk-box"><b>🌟 ${g.name} Perk:</b> ${g.perk}</div>
          ${isOwner ? `
            <div class="btnrow wrap">
              <button class="btn small" id="btn-deed-build" ${canBuildAt(s, idx) ? '' : 'disabled'}>🏗️ ${t('build')} — LKR ${fmt(buildCostOf(s, idx))}</button>
              ${st.buildings > 0 ? `<button class="btn small" id="btn-deed-demolish" ${canSellBuildingAt(s, idx) ? '' : 'disabled'}>${t('sellBuilding')} (+LKR ${fmt(Math.round(buildCostOf(s, idx) * 0.5))})</button>` : ''}
              ${!st.mortgaged ? `<button class="btn small" id="btn-deed-mortgage" ${canMortgageSquare(s, idx) ? '' : 'disabled'}>${t('mortgage')} (+LKR ${fmt(def.mortgageValue ?? 1000)})</button>` : `<button class="btn small gold" id="btn-deed-unmortgage" ${canUnmortgageSquare(s, idx) ? '' : 'disabled'}>${t('unmortgage')} (-LKR ${fmt(Math.round((def.mortgageValue ?? 1000) * 1.1))})</button>`}
              ${st.buildings > 0 && cond < 100 ? `<button class="btn small" id="btn-deed-maintain" ${p.cash >= maintenanceCostOf(s, idx) ? '' : 'disabled'}>${t('maintain')} (-LKR ${fmt(maintenanceCostOf(s, idx))})</button>` : ''}
              ${st.damaged ? `<button class="btn small gold" id="btn-deed-repair">🔧 ${t('repair')}</button>` : ''}
              <button class="btn small" id="btn-deed-shield">🛡️ ${t('shield')}</button>
            </div>` : ''}
        </div>
      </div>`;
    bind('btn-deed-build', () => h.onBuild(idx));
    bind('btn-deed-demolish', () => h.onSellBuilding(idx));
    bind('btn-deed-mortgage', () => h.onMortgage(idx));
    bind('btn-deed-unmortgage', () => h.onUnmortgage(idx));
    bind('btn-deed-maintain', () => h.onMaintain(idx));
    bind('btn-deed-shield', () => h.onShield(idx, st.shield === 0 ? 1 : st.shield === 1 ? 2 : 3));
    bind('btn-deed-repair', () => h.onRepair(idx));
  } else if (def.kind === 'railway' || def.kind === 'utility') {
    const rentLine = def.kind === 'railway'
      ? `Rent ladder: 400 → 800 → 1,600 → 3,200 (owner holds ${owner ? railwaysOwnedBy(s, owner.id) : 0} stations)${currentCycle(s).id === 'fuel' ? ' · ×2 Fuel Crunch!' : ''}`
      : 'Rent = 80 × dice (200 × dice with both grids).';
    box.innerHTML = `
      <div class="deed-tab">
        <div class="deed-head plain"><span>${def.icon} ${squareName(idx, false, def.name, def.short)}</span><span class="pill">${st.owner === null ? `LKR ${fmt(squareValue(s, idx))}` : (st.mortgaged ? 'MORTGAGED' : '')}</span></div>
        <div class="deed-tab-body">
          <div class="row"><span class="dim">Owner</span><span>${owner ? `<b style="color:${owner.color}">${owner.name}</b>${st.mortgaged ? ' (Mortgaged)' : ''}` : 'Unowned (Bank)'}</span></div>
          <p class="dim">${rentLine}</p>
          <p class="dim">${def.desc ?? ''}</p>
          ${isOwner ? `
            <div class="btnrow wrap">
              ${!st.mortgaged ? `<button class="btn small" id="btn-deed-mortgage" ${canMortgageSquare(s, idx) ? '' : 'disabled'}>${t('mortgage')} (+LKR ${fmt(def.mortgageValue ?? 1500)})</button>` : `<button class="btn small gold" id="btn-deed-unmortgage" ${canUnmortgageSquare(s, idx) ? '' : 'disabled'}>${t('unmortgage')} (-LKR ${fmt(Math.round((def.mortgageValue ?? 1500) * 1.1))})</button>`}
            </div>` : ''}
        </div>
      </div>`;
    bind('btn-deed-mortgage', () => h.onMortgage(idx));
    bind('btn-deed-unmortgage', () => h.onUnmortgage(idx));
  } else {
    box.innerHTML = `
      <div class="deed-tab">
        <div class="deed-head plain"><span>${def.icon ?? '📍'} ${squareName(idx, false, def.name, def.short)}</span></div>
        <div class="deed-tab-body"><p class="dim">${def.desc ?? ''}</p></div>
      </div>`;
  }
}

function renderBankTab(s: GameState, h: Handlers): void {
  const box = document.getElementById('bank-content')!;
  const p = cur(s);
  const isMyTurn = (localPlayerId === null) || (s.current === localPlayerId);
  const isHumanTurn = p.kind === 'human' && s.phase === 'postRoll' && isMyTurn;
  const rate = effectiveLoanRate(s);
  const maxB = maxBorrowLimit(s, p.id);
  document.getElementById('bank-rate-pill')!.textContent = `${rate}% Flat${BOARD[p.position].kind === 'bank' ? ' (On-Square!)' : ''}`;

  box.innerHTML = `
    <div class="bank-summary">
      <div class="row"><span class="dim">Active tycoon</span><b>${TOKENS[p.tokenKey].icon} ${p.name}</b></div>
      <div class="row"><span class="dim">Credit line (75% collateral)</span><b class="gold">LKR ${fmt(maxB)}</b></div>
      <div class="row"><span class="dim">Outstanding loan</span><b class="${p.loan > 0 ? 'down' : 'up'}">${p.loan > 0 ? `LKR ${fmt(p.loan)} · ${p.loanRoundsLeft}R left` : 'None'}</b></div>
    </div>
    ${isHumanTurn ? `
      <div class="btnrow wrap">
        <button class="btn small gold" id="btn-loan-2500" ${p.loan > 0 || maxB < 1000 ? 'disabled' : ''}>${t('borrow')} 2,500</button>
        <button class="btn small gold" id="btn-loan-5000" ${p.loan > 0 || maxB < 1000 ? 'disabled' : ''}>${t('borrow')} 5,000</button>
        <button class="btn small gold" id="btn-loan-max" ${p.loan > 0 || maxB < 1000 ? 'disabled' : ''}>${t('borrow')} Max</button>
        <button class="btn small" id="btn-repay-half" ${p.loan <= 0 ? 'disabled' : ''}>${t('repay')} 50%</button>
        <button class="btn small" id="btn-repay-full" ${p.loan <= 0 ? 'disabled' : ''}>${t('repay')} Full</button>
      </div>
      <p class="dim note">Flat-rate 8-round term. Rate is ${rate}% (${BOARD[p.position].kind === 'bank' ? 'on-square preferential' : 'remote'}). Default at maturity forecloses all pledged collateral.</p>
    ` : '<p class="dim note">The credit desk opens during your action phase.</p>'}`;
  bind('btn-loan-2500', () => h.onLoan(2500));
  bind('btn-loan-5000', () => h.onLoan(5000));
  bind('btn-loan-max', () => h.onLoan(maxB));
  bind('btn-repay-half', () => h.onRepay(Math.ceil(p.loan / 2 / 100) * 100));
  bind('btn-repay-full', () => h.onRepay(p.loan));
}

function renderShieldTab(s: GameState, h: Handlers): void {
  const box = document.getElementById('insure-content')!;
  const p = cur(s);
  const isMyTurn = (localPlayerId === null) || (s.current === localPlayerId);
  const isHumanTurn = p.kind === 'human' && s.phase === 'postRoll' && isMyTurn;
  const owned = s.squares.map((st, i) => ({ st, i })).filter(o => o.st.owner === p.id && BOARD[o.i].kind === 'property');

  if (owned.length === 0) {
    box.innerHTML = '<p class="dim note">Own properties to equip Disaster Insurance Policies.</p>';
    return;
  }
  box.innerHTML = owned.map(({ st, i }) => {
    const shieldTag = st.shield === 3 ? '👑 Business Interruption' : st.shield === 2 ? '🔰 Comprehensive Policy' : st.shield === 1 ? '🛡️ Basic Property Insurance' : 'Uninsured';
    const basicCost = shieldCost(s, i, 1);
    const compCost = shieldCost(s, i, 2);
    const bizCost = shieldCost(s, i, 3);
    return `
      <div class="shield-row">
        <div>
          <b>${BOARD[i].short}</b> <span class="dim">· ${st.buildings === 5 ? '🏨 Boutique Hotel' : st.buildings > 0 ? '🏠'.repeat(st.buildings) : '—'}</span>
          <div class="dim small">${shieldTag}${st.damaged ? ' · ⚠️ Damaged' : ''}</div>
        </div>
        ${isHumanTurn ? `
          <div class="btnrow tight">
            ${st.shield < 1 ? `<button class="btn tiny" data-shield1="${i}" title="Fire & Flood (80% repair claim)">🛡️ Basic ${fmt(basicCost)}</button>` : ''}
            ${st.shield < 2 ? `<button class="btn tiny" data-shield2="${i}" title="All disasters (100% claim)">🔰 Comp ${fmt(compCost)}</button>` : ''}
            ${st.buildings === 5 && st.shield < 3 ? `<button class="btn tiny gold" data-shield3="${i}" title="100% repairs + 5 rounds lost hotel rent">👑 Biz ${fmt(bizCost)}</button>` : ''}
            ${st.damaged ? `<button class="btn tiny gold" data-repair="${i}">🔧 800</button>` : ''}
          </div>` : ''}
      </div>`;
  }).join('') + (isHumanTurn ? '' : '<p class="dim note">Policies can be purchased during your action phase (20% discount on Insurance squares).</p>');

  for (const b of box.querySelectorAll<HTMLButtonElement>('button[data-shield1]')) {
    b.addEventListener('click', () => h.onShield(Number(b.dataset.shield1), 1));
  }
  for (const b of box.querySelectorAll<HTMLButtonElement>('button[data-shield2]')) {
    b.addEventListener('click', () => h.onShield(Number(b.dataset.shield2), 2));
  }
  for (const b of box.querySelectorAll<HTMLButtonElement>('button[data-shield3]')) {
    b.addEventListener('click', () => h.onShield(Number(b.dataset.shield3), 3));
  }
  for (const b of box.querySelectorAll<HTMLButtonElement>('button[data-repair]')) {
    b.addEventListener('click', () => h.onRepair(Number(b.dataset.repair)));
  }
}

function renderTradeTab(s: GameState, h: Handlers): void {
  const box = document.getElementById('trade-content')!;
  const p = cur(s);
  const isMyTurn = (localPlayerId === null) || (s.current === localPlayerId);
  const isHumanTurn = p.kind === 'human' && s.phase === 'postRoll' && isMyTurn;
  if (!isHumanTurn) {
    box.innerHTML = '<p class="dim note">The trade desk opens during your action phase.</p>';
    return;
  }
  const partners = s.players.filter(x => x.id !== p.id && !x.bankrupt);
  if (partners.length === 0) {
    box.innerHTML = '<p class="dim note">No solvent partners available.</p>';
    return;
  }
  const myProps = s.squares.map((st, i) => ({ st, i })).filter(o => o.st.owner === p.id && !o.st.loanLocked && BOARD[o.i].price);
  const theirProps = (pid: number) => s.squares.map((st, i) => ({ st, i })).filter(o => o.st.owner === pid && !o.st.loanLocked && BOARD[o.i].price);

  box.innerHTML = `
    <div class="field"><label>${t('tradePartner')}</label>
      <select id="trade-partner">${partners.map(x => `<option value="${x.id}">${TOKENS[x.tokenKey].icon} ${x.name} (LKR ${fmt(x.cash)})</option>`).join('')}</select>
    </div>
    <div class="trade-cols">
      <div class="trade-col offer">
        <b>${t('youOffer')}</b>
        <select id="trade-give-prop"><option value="">— property —</option>${myProps.map(o => `<option value="${o.i}">${BOARD[o.i].name}</option>`).join('')}</select>
        <input id="trade-give-cash" type="number" min="0" step="250" value="0" />
      </div>
      <div class="trade-col request">
        <b>${t('youRequest')}</b>
        <select id="trade-want-prop"><option value="">— property —</option>${theirProps(partners[0].id).map(o => `<option value="${o.i}">${BOARD[o.i].name}</option>`).join('')}</select>
        <input id="trade-want-cash" type="number" min="0" step="250" value="0" />
      </div>
    </div>
    <button class="btn gold" id="btn-propose-trade">🤝 ${t('proposeTrade')}</button>
    <div class="dim note" id="trade-feedback"></div>`;

  const partnerSel = document.getElementById('trade-partner') as HTMLSelectElement;
  const wantProp = document.getElementById('trade-want-prop') as HTMLSelectElement;
  partnerSel.addEventListener('change', () => {
    const pid = Number(partnerSel.value);
    const keep = wantProp.value;
    wantProp.innerHTML = `<option value="">— property —</option>${theirProps(pid).map(o => `<option value="${o.i}">${BOARD[o.i].name}</option>`).join('')}`;
    wantProp.value = keep;
  });

  document.getElementById('btn-propose-trade')!.addEventListener('click', () => {
    const partner = Number(partnerSel.value);
    const giveSq = (document.getElementById('trade-give-prop') as HTMLSelectElement).value;
    const wantSq = wantProp.value;
    const giveCash = Math.max(0, Number((document.getElementById('trade-give-cash') as HTMLInputElement).value) || 0);
    const wantCash = Math.max(0, Number((document.getElementById('trade-want-cash') as HTMLInputElement).value) || 0);
    h.onTradeSubmit(partner, giveSq ? Number(giveSq) : null, giveCash, wantSq ? Number(wantSq) : null, wantCash);
  });
}

function renderLogTab(s: GameState): void {
  const box = document.getElementById('log-content')!;
  box.innerHTML = s.log.slice(-90).reverse().map(e =>
    `<div class="log-entry k-${e.kind}"><span class="r">R${e.round}</span>${e.text}</div>`
  ).join('');
}

// ─── Overlays: auction, trade confirm, game over ─────────────────────────

function renderOverlay(s: GameState, h: Handlers): void {
  const ov = el('overlay');

  if (s.phase === 'gameOver') {
    const standings = s.players.filter(p => !p.bankrupt).sort((a, b) => netWorth(s, b.id) - netWorth(s, a.id));
    ov.classList.remove('hidden');
    ov.innerHTML = `
      <div class="dialog pop">
        <div class="studio">POLA : MONOPOLY SRI LANKA</div>
        <h1>${t('champion')}</h1>
        <p>${s.winner !== null ? `<strong>${s.players[s.winner].name}</strong> takes the island with LKR ${fmt(netWorth(s, s.winner))}.` : 'Everyone went bankrupt — the bank wins.'}</p>
        <div class="standings">${standings.map((p, i) => `
          <div class="standing-row${i === 0 ? ' winner' : ''}">
            <span><span class="rank">#${i + 1}</span> ${TOKENS[p.tokenKey].icon} ${p.name}</span>
            <span>LKR ${fmt(netWorth(s, p.id))}</span>
          </div>`).join('')}</div>
        ${s.players.some(p => p.bankrupt) ? `<p class="dim">Fell along the way: ${s.players.filter(p => p.bankrupt).map(p => p.name).join(', ')}.</p>` : ''}
        <button class="btn gold" id="btn-restart">${t('playAgain')}</button>
      </div>`;
    confetti(ov);
    bind('btn-restart', h.onRestart);
  }

  if (s.phase === 'auction') {
    const a = s.auction!;
    const def = BOARD[a.square];
    const bidder = s.players[auctionCurrentBidder(s)];
    const isMyTurnToBid = (localPlayerId === null) || (bidder.id === localPlayerId);
    const isHumanBidder = bidder.kind === 'human' && isMyTurnToBid;
    const nextMin = auctionNextAmount(s);
    const isLeader = a.leader !== null;
    const gcolor = def.group ? GROUPS[def.group].color : '#10b981';

    ov.classList.remove('hidden');
    ov.innerHTML = `
      <div class="dialog richup-auction">
        <div class="richup-auction-title">🔨 Live Property Auction</div>

        <div class="richup-auction-body">
          <!-- Left side: Current Bidding & Actions -->
          <div class="auction-left">
            <div class="auction-target-name">
              <span class="flag-icon">${def.group ? '🇱🇰' : '🏛️'}</span>
              <h2>${def.name}</h2>
            </div>

            <div class="auction-bid-display">
              <span class="dim">Current Bid</span>
              <div class="current-bid-amount">LKR ${fmt(isLeader ? a.currentBid : a.opening)}</div>
              <div class="auction-leader-pill">
                ${isLeader ? `👑 Leader: <b>${s.players[a.leader!].name}</b>` : 'Opening bid'}
              </div>
            </div>

            <div class="auction-timer-track">
              <div class="auction-timer-fill"></div>
            </div>

            <div class="bidder-status-line">
              ${isHumanBidder ? `⭐ <b>${bidder.name}</b>, your turn to bid!` : `⏳ Waiting for <b>${bidder.name}</b> to bid...`}
            </div>

            ${isHumanBidder ? `
              <div class="auction-bid-buttons">
                <button class="btn btn-bid-choice" id="btn-bid-250" ${bidder.cash < nextMin ? 'disabled' : ''}>
                  <div class="val">+LKR 250</div>
                  <div class="sub-val">Total ${fmt(nextMin)}</div>
                </button>
                <button class="btn btn-bid-choice" id="btn-bid-500" ${bidder.cash < nextMin + 250 ? 'disabled' : ''}>
                  <div class="val">+LKR 500</div>
                  <div class="sub-val">Total ${fmt(nextMin + 250)}</div>
                </button>
                <button class="btn btn-bid-choice" id="btn-bid-1000" ${bidder.cash < nextMin + 750 ? 'disabled' : ''}>
                  <div class="val">+LKR 1,000</div>
                  <div class="sub-val">Total ${fmt(nextMin + 750)}</div>
                </button>
              </div>
              <button class="btn danger btn-auction-pass" id="btn-auction-pass">${t('withdraw')}</button>
            ` : ''}
          </div>

          <!-- Right side: Official Deed Card (Richup card preview) -->
          <div class="auction-right">
            <div class="richup-deed-card">
              <div class="deed-header" style="background:${gcolor}">
                <span>${def.name}</span>
              </div>
              <div class="deed-rents-list">
                ${def.rents ? `
                  <div class="rent-row"><span>Base rent</span><b>LKR ${fmt(def.rents[0])}</b></div>
                  <div class="rent-row"><span>With 1 house</span><b>LKR ${fmt(def.rents[1])}</b></div>
                  <div class="rent-row"><span>With 2 houses</span><b>LKR ${fmt(def.rents[2])}</b></div>
                  <div class="rent-row"><span>With 3 houses</span><b>LKR ${fmt(def.rents[3])}</b></div>
                  <div class="rent-row"><span>With 4 houses</span><b>LKR ${fmt(def.rents[4])}</b></div>
                  <div class="rent-row hotel"><span>With Hotel</span><b>LKR ${fmt(def.rents[5])}</b></div>
                ` : `<p class="dim">${def.desc ?? ''}</p>`}
              </div>
              <div class="deed-footer-stats">
                <div><span>Price:</span> <b>LKR ${fmt(a.listPrice)}</b></div>
                ${def.buildCost ? `<div><span>House:</span> <b>LKR ${fmt(def.buildCost)}</b></div>` : ''}
              </div>
            </div>
          </div>
        </div>
      </div>`;

    if (isHumanBidder) {
      bind('btn-bid-250', () => h.onBid(250));
      bind('btn-bid-500', () => h.onBid(500));
      bind('btn-bid-1000', () => h.onBid(1000));
      bind('btn-auction-pass', h.onWithdraw);
    }
    return;
  }

  if (s.pendingTrade) {
    const o = s.pendingTrade;
    const to = s.players[o.toId];
    const from = s.players[o.fromId];
    const isTargetMe = (localPlayerId === null) || (to.id === localPlayerId);

    if (to.kind === 'human' && isTargetMe) {
      ov.classList.remove('hidden');
      ov.innerHTML = `
        <div class="dialog pop">
          <h2>🤝 Trade Proposal for ${to.name}</h2>
          <p><b>${from.name}</b> offers ${o.giveSquare !== null ? BOARD[o.giveSquare].name : ''}${o.giveSquare !== null && o.giveCash > 0 ? ' + ' : ''}${o.giveCash > 0 ? `LKR ${fmt(o.giveCash)}` : ''}</p>
          <p>in exchange for ${o.wantSquare !== null ? BOARD[o.wantSquare].name : ''}${o.wantSquare !== null && o.wantCash > 0 ? ' + ' : ''}${o.wantCash > 0 ? `LKR ${fmt(o.wantCash)}` : ''}</p>
          <div class="btnrow">
            <button class="btn gold" id="btn-trade-accept">Accept Deal</button>
            <button class="btn danger" id="btn-trade-decline">Decline</button>
          </div>
        </div>`;
      bind('btn-trade-accept', h.onTradeAccept);
      bind('btn-trade-decline', h.onTradeDecline);
      return;
    } else if (localPlayerId !== null && o.fromId === localPlayerId) {
      ov.classList.remove('hidden');
      ov.innerHTML = `
        <div class="dialog pop">
          <h2>🤝 Trade Proposal Sent</h2>
          <p>Waiting for <b>${to.name}</b> to review and accept/decline...</p>
          <div class="waiting-turn-banner"><span class="pulse-dot"></span> Awaiting response...</div>
        </div>`;
      return;
    }
  }

  ov.classList.add('hidden');
  ov.innerHTML = '';
}

// ─── Setup lobby ──────────────────────────────────────────────────────────

export interface StartConfig {
  lineup: string;
  maxRounds: number;
  playerCount: number;
  names: string[];
  tokens: string[];
  onlineAction?: 'create' | 'join';
  onlineRoomCode?: string;
}

export function showSetup(onStart: (cfg: StartConfig) => void): void {
  const ov = el('overlay');
  ov.classList.remove('hidden');

  const defaultNames = ['Navindu', 'Kasun (AI)', 'Nimali (AI)', 'Roshan (AI)', 'Dilani (AI)', 'Chamari (AI)'];
  const defaultTokens = ['tuktuk', 'elephant', 'train', 'dancer', 'gem', 'ship'];

  const seatCard = (n: number) => `
    <div class="seat-card seat-${n}" id="seat-box-${n}">
      <div class="seat-head">Player ${n}</div>
      <input class="seat-name" id="su-name-${n}" value="${defaultNames[n - 1]}" maxlength="20" />
      <select class="seat-token" id="su-token-${n}">
        ${Object.values(TOKENS).map(tk => `<option value="${tk.key}" ${tk.key === defaultTokens[n - 1] ? 'selected' : ''}>${tk.icon} ${tk.name}</option>`).join('')}
      </select>
    </div>`;

  ov.innerHTML = `
    <div class="dialog pop setup">
      <div class="studio">PIXALAI & RICHUP STYLE MULTIPLAYER</div>
      <h1>🛺 POLA: MONOPOLY LK</h1>
      <p>${t('subtitle')}</p>

      <div class="setup-tabs">
        <button class="setup-tab-btn active" id="tab-btn-local">🎮 Local / AI Match</button>
        <button class="setup-tab-btn" id="tab-btn-online">🌐 Online Rooms (Richup Style)</button>
      </div>

      <div id="setup-panel-local">
        <div class="field"><label>Number of Players (2 to 6 Players)</label>
          <select id="su-count">
            <option value="2">2 Players</option>
            <option value="3">3 Players</option>
            <option value="4" selected>4 Players (Classic)</option>
            <option value="5">5 Players</option>
            <option value="6">6 Players (Full Island)</option>
          </select>
        </div>

        <div class="field"><label>${t('lineup')}</label>
          <select id="su-lineup">
            <option value="1human" selected>1 Human + AI Bots</option>
            <option value="allhumans">All Humans (Pass & Play with Friends)</option>
            <option value="allbots">All AI Tycoons (Spectator)</option>
          </select>
        </div>

        <div class="field"><label>${t('matchLength')}</label>
          <select id="su-length">
            <option value="25" selected>Standard Match · 25 Rounds</option>
            <option value="15">Quick Blitz · 15 Rounds</option>
            <option value="50">Island Marathon · 50 Rounds</option>
          </select>
        </div>

        <div class="seats-grid" id="seats-container">
          ${[1, 2, 3, 4, 5, 6].map(n => seatCard(n)).join('')}
        </div>

        <button class="btn gold btn-large" id="su-start">${t('startMatch')}</button>
      </div>

      <div id="setup-panel-online" class="hidden">
        <div class="online-box">
          <div class="online-col create">
            <h3>🔑 Create a Private Game</h3>
            <p class="dim">Generate a shareable room code for you and your friends to join from anywhere.</p>
            <div class="field"><label>Your Display Name</label>
              <input id="online-host-name" value="Navindu" maxlength="18" />
            </div>
            <button class="btn gold" id="btn-create-room">✨ Create Room & Invite Link</button>
          </div>

          <div class="online-col join">
            <h3>👥 Join a Friend's Room</h3>
            <p class="dim">Enter the Room Code shared by your friend (e.g. <code>pola-k8b2</code>):</p>
            <div class="field"><label>Room Code</label>
              <input id="online-room-code" placeholder="pola-xxxx" />
            </div>
            <div class="field"><label>Your Display Name</label>
              <input id="online-join-name" value="Player" maxlength="18" />
            </div>
            <button class="btn primary" id="btn-join-room">🚀 Join Room</button>
          </div>
        </div>
      </div>
    </div>`;

  const countSel = document.getElementById('su-count') as HTMLSelectElement;
  const lineupSel = document.getElementById('su-lineup') as HTMLSelectElement;

  const refreshVisibleSeats = () => {
    const total = Number(countSel.value);
    const lineup = lineupSel.value;
    for (let n = 1; n <= 6; n++) {
      const box = document.getElementById(`seat-box-${n}`);
      const input = document.getElementById(`su-name-${n}`) as HTMLInputElement;
      if (!box || !input) continue;
      box.style.display = n <= total ? 'flex' : 'none';

      if (lineup === '1human') {
        input.disabled = n > 1;
        if (n > 1 && !input.value.includes('(AI)')) input.value = `${defaultNames[n - 1]}`;
      } else if (lineup === 'allhumans') {
        input.disabled = false;
        input.value = input.value.replace(' (AI)', '');
      } else {
        input.disabled = true;
      }
    }
  };

  countSel.addEventListener('change', refreshVisibleSeats);
  lineupSel.addEventListener('change', refreshVisibleSeats);
  refreshVisibleSeats();

  // Tab switching
  const tabLocal = document.getElementById('tab-btn-local')!;
  const tabOnline = document.getElementById('tab-btn-online')!;
  const panelLocal = document.getElementById('setup-panel-local')!;
  const panelOnline = document.getElementById('setup-panel-online')!;

  tabLocal.addEventListener('click', () => {
    tabLocal.classList.add('active');
    tabOnline.classList.remove('active');
    panelLocal.classList.remove('hidden');
    panelOnline.classList.add('hidden');
  });

  tabOnline.addEventListener('click', () => {
    tabOnline.classList.add('active');
    tabLocal.classList.remove('active');
    panelOnline.classList.remove('hidden');
    panelLocal.classList.add('hidden');
  });

  // Local start
  document.getElementById('su-start')!.addEventListener('click', () => {
    const total = Number(countSel.value);
    const names = Array.from({ length: total }, (_, i) =>
      (document.getElementById(`su-name-${i + 1}`) as HTMLInputElement).value.trim() || `Player ${i + 1}`
    );
    const tokens = Array.from({ length: total }, (_, i) =>
      (document.getElementById(`su-token-${i + 1}`) as HTMLSelectElement).value
    );
    onStart({
      lineup: lineupSel.value,
      playerCount: total,
      maxRounds: Number((document.getElementById('su-length') as HTMLSelectElement).value),
      names,
      tokens,
    });
  });

  // Online Create Room
  document.getElementById('btn-create-room')!.addEventListener('click', () => {
    const hostName = (document.getElementById('online-host-name') as HTMLInputElement).value.trim() || 'Host';
    onStart({
      lineup: 'onlineHost',
      playerCount: 4,
      maxRounds: 25,
      names: [hostName],
      tokens: ['tuktuk'],
      onlineAction: 'create',
    });
  });

  // Online Join Room
  document.getElementById('btn-join-room')!.addEventListener('click', () => {
    const code = (document.getElementById('online-room-code') as HTMLInputElement).value.trim();
    const name = (document.getElementById('online-join-name') as HTMLInputElement).value.trim() || 'Player';
    if (!code) {
      alert('Please enter a room code');
      return;
    }
    onStart({
      lineup: 'onlineClient',
      playerCount: 4,
      maxRounds: 25,
      names: [name],
      tokens: ['dancer'],
      onlineAction: 'join',
      onlineRoomCode: code,
    });
  });
}
