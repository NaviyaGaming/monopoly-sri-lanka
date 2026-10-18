// ─── POLA (Monopoly Sri Lanka) renderer ──────────────────────────────────
// Full DOM re-render from GameState after every action. Emerald/gold island
// theme, 3D pedestal tokens, contextual center-hub cards, tabbed desk.

import type { GameState, GroupId, Player } from '../engine/types';
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
import { confetti, sfx } from './fx';
import { cycleName, getLang, squareName, t } from './i18n';
import { loadCareer, getTycoonRank, recordMatchResult } from '../engine/career';
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

let tradePartnerId: number | null = null;
let tradeGiveSquare: number | null = null;
let tradeWantSquare: number | null = null;
let tradeGiveCash = 0;
let tradeWantCash = 0;

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

let lastRenderedState: GameState | null = null;
let lastRenderedHandlers: Handlers | null = null;

export function render(s: GameState, h: Handlers, myId?: number | null): void {
  if (myId !== undefined) localPlayerId = myId;
  lastRenderedState = s;
  lastRenderedHandlers = h;
  renderHeader(s);
  renderBoard(s, h);
  renderScoreboard(s, h);
  renderTabs(s, h);
  renderOverlay(s, h);
}

window.addEventListener('resize', () => {
  if (lastRenderedState && lastRenderedHandlers) {
    updateMobileActionDock(lastRenderedState, lastRenderedHandlers);
  }
});

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
    const isCorner = i % 10 === 0;

    let edgeClass = 'edge-bottom';
    if (isCorner) {
      edgeClass = 'edge-corner';
    } else if (i > 10 && i < 20) {
      edgeClass = 'edge-left';
    } else if (i > 20 && i < 30) {
      edgeClass = 'edge-top';
    } else if (i > 30 && i < 40) {
      edgeClass = 'edge-right';
    }

    const owner = st.owner !== null ? s.players[st.owner] : null;
    const isOwnerCell = owner !== null;
    cell.className = `board-cell ${edgeClass}${isCorner ? ' corner-cell' : ''}${isHere ? ' active-player-cell' : ''}${isSelected ? ' selected-cell' : ''}${i === landedSquare ? ' landed' : ''}${st.mortgaged ? ' is-mortgaged' : ''}${isOwnerCell ? ' is-owned' : ''}`;
    if (isOwnerCell) {
      cell.style.setProperty('--owner-bg', `${owner.color}24`);
      cell.style.setProperty('--owner-border', `${owner.color}aa`);
    }
    cell.style.gridRow = String(pos.row);
    cell.style.gridColumn = String(pos.col);
    cell.dataset.idx = String(i);

    // Dynamic hover tooltip text
    const rentDetails = def.rents ? `Rent: LKR ${st.buildings > 0 ? def.rents[st.buildings] : def.rents[0]}` : (def.price ? `Price: LKR ${def.price}` : '');
    cell.title = `${def.name}\n${owner ? `Owner: ${owner.name}` : (def.price ? `Unowned · LKR ${def.price}` : '')}\n${rentDetails}`;

    // 3D pedestal tokens standing here
    const tokensHere = s.players
      .filter(p => !p.bankrupt && p.position === i)
      .map(p => {
        const av = TOKEN_AVATARS[p.tokenKey];
        return `<span class="token-3d-wrap${isHere && active?.id === p.id ? ' token-active' : ''}" title="${p.name} (${av.names[getLang()]})">${av.svg(p.color)}</span>`;
      })
      .join('');
    const tokenDock = tokensHere ? `<div class="cell-tokens-dock">${tokensHere}</div>` : '';

    const hint = priceHint(s, i);
    const pricePill = hint ? `<span class="cell-pill price-pill">${hint}</span>` : '<span class="cell-pill empty"></span>';
    const nameText = squareName(i, true, def.name, def.short);
    const ownerDot = owner ? `<span class="cell-owner-dot" style="background:${owner.color}" title="Owner: ${owner.name}"></span>` : '';

    if (isCorner) {
      let cornerIcon = def.icon ?? '🏛️';
      let cornerTitle = '';
      let cornerSub = '';
      if (i === 0) {
        cornerIcon = '🎊';
        cornerTitle = 'START';
        cornerSub = `+${(startBonus(s) / 1000).toFixed(1)}k`;
      } else if (i === 10) {
        cornerIcon = '⚖️';
        cornerTitle = 'CID VISIT';
        cornerSub = 'Visiting';
      } else if (i === 20) {
        cornerIcon = '🌕';
        cornerTitle = 'POYA POOL';
        cornerSub = `+${((s.poyaPool || 1000) / 1000).toFixed(1)}k`;
      } else if (i === 30) {
        cornerIcon = '🚨';
        cornerTitle = 'GO TO CID';
        cornerSub = 'Audit';
      }
      cell.innerHTML = `
        <div class="corner-head">
          <span class="corner-icon">${cornerIcon}</span>
        </div>
        <div class="corner-title">${cornerTitle}</div>
        <div class="corner-sub">${cornerSub}</div>
        <div class="corner-tokens-dock">${tokensHere}</div>
      `;
    } else {
      let topBarHtml = '';
      if (def.group && def.kind === 'property') {
        const buildIcons = st.buildings === 5 ? '🏨' : st.buildings > 0 ? `${'🏠'.repeat(st.buildings)}` : '';
        const statusIcons = `${def.coastal ? '🌊' : ''}${st.shield ? '🛡️' : ''}${st.damaged ? '⚠️' : ''}${st.mortgaged ? '🔒' : ''}`;
        topBarHtml = `
          <div class="cell-bar" style="background:${GROUPS[def.group].color}" title="${GROUPS[def.group].name}">
            <span class="badge-houses">${buildIcons}</span>
            <span class="badge-status">${statusIcons}</span>
          </div>
        `;
      } else {
        topBarHtml = `<div class="cell-special-icon">${st.mortgaged ? '🔒' : def.icon ?? ''}</div>`;
      }

      cell.innerHTML = `
        ${topBarHtml}
        <div class="cell-name-box">
          ${ownerDot}
          <span class="cell-name-text">${nameText}</span>
        </div>
        <div class="cell-foot">
          ${pricePill}
          ${tokenDock}
        </div>
      `;
    }

    cell.addEventListener('click', () => {
      s.selectedSquare = i;
      activeTab = 'deed';
      render(s, h);
      h.onSelectSquare(i);
      openMobileTileSheet(s, i, h);
    });
    grid.appendChild(cell);
  }

  // ── Center hub (Richup.io Style) ──
  const center = document.createElement('div');
  center.id = 'board-center';
  center.innerHTML = `
    <div class="richup-center-wrapper">
      <div id="turn-timer-badge" class="turn-timer-badge" style="display: ${currentTimerVisible ? 'inline-flex' : 'none'};">
        <span class="timer-icon">⏱️</span>
        <span id="turn-timer-val">${currentTimerVal}s</span>
      </div>
      <div class="dice-row" id="dice-holder"></div>
      <div class="hub-actions" id="hub-actions"></div>
      <div class="center-activity-feed" id="center-activity-feed"></div>
      <div id="popups"></div>
    </div>
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
  const actions = document.getElementById('hub-actions');
  const feed = document.getElementById('center-activity-feed');
  const popups = document.getElementById('popups');
  if (!actions) return;
  actions.innerHTML = '';

  // 1. Center Activity Feed (Directly below buttons)
  if (feed) {
    const recent = s.log.slice(-3);
    feed.innerHTML = recent.map(entry => `
      <div class="feed-entry">${entry.text}</div>
    `).join('');
  }

  // 2. Card popup handler
  if (popups) {
    if (s.cardJustDrawn) {
      const isMyTurn = (localPlayerId === null) || (s.current === localPlayerId);
      popups.innerHTML = cardPopupHtml(s, isMyTurn);
      if (isMyTurn) {
        document.getElementById('btn-card-ok')?.addEventListener('click', h.onCardOk);
      }
    } else {
      popups.innerHTML = '';
    }
  }

  if (s.phase === 'gameOver') {
    actions.innerHTML = `<button class="btn btn-richup-pill primary" id="btn-restart">🏆 Play Again</button>`;
    bind('btn-restart', () => { sfx('click'); h.onRestart(); });
    return;
  }

  const p = cur(s);
  const isMyTurn = (localPlayerId === null) || (s.current === localPlayerId);

  switch (s.phase) {
    case 'preRoll': {
      if (!isMyTurn) {
        actions.innerHTML = `
          <div class="richup-turn-status">
            <span class="player-avatar-mini" style="background:${p.color}">${TOKENS[p.tokenKey].icon}</span>
            <span><b>${p.name}</b> is rolling...</span>
          </div>`;
        break;
      }
      if (p.inJail) {
        actions.innerHTML = `
          <button class="btn btn-richup-pill primary" id="btn-roll">🎲 Roll the dice</button>
          <button class="btn btn-richup-pill outline" id="btn-bail" ${p.cash < 500 ? 'disabled' : ''}>⚖️ Pay bail ($500)</button>`;
        bind('btn-roll', () => { sfx('dice'); h.onRoll(); });
        bind('btn-bail', () => { sfx('click'); h.onBail(); });
      } else {
        actions.innerHTML = `
          <button class="btn btn-richup-pill primary hero" id="btn-roll">🎲 Roll the dice</button>`;
        bind('btn-roll', () => { sfx('dice'); h.onRoll(); });
      }
      break;
    }
    case 'decideBuy': {
      const bi = s.pendingBuy!;
      const price = squareValue(s, bi);
      const afford = p.cash >= price;
      if (!isMyTurn) {
        actions.innerHTML = `
          <div class="richup-turn-status">
            <span class="player-avatar-mini" style="background:${p.color}">${TOKENS[p.tokenKey].icon}</span>
            <span><b>${p.name}</b> is deciding...</span>
          </div>`;
      } else {
        actions.innerHTML = `
          <button class="btn btn-richup-pill outline" id="btn-pass">🔨 Auction</button>
          <button class="btn btn-richup-pill primary" id="btn-buy" ${afford ? '' : 'disabled'}>🏷️ Buy for LKR ${fmt(price)}</button>`;
        bind('btn-buy', () => { sfx('buy'); h.onBuy(); });
        bind('btn-pass', () => { sfx('gavel'); h.onPass(); });
      }
      break;
    }
    case 'postRoll': {
      if (s.cardJustDrawn) {
        if (isMyTurn) {
          actions.innerHTML = `
            <button class="btn btn-richup-pill primary" id="btn-card-ok-main">Collect & Continue ➜</button>`;
          bind('btn-card-ok-main', () => { sfx('click'); h.onCardOk(); });
        } else {
          actions.innerHTML = `
            <div class="richup-turn-status">
              <span class="player-avatar-mini" style="background:${p.color}">${TOKENS[p.tokenKey].icon}</span>
              <span><b>${p.name}</b> drew a card...</span>
            </div>`;
        }
        break;
      }

      if (!isMyTurn) {
        actions.innerHTML = `
          <div class="richup-turn-status">
            <span class="player-avatar-mini" style="background:${p.color}">${TOKENS[p.tokenKey].icon}</span>
            <span><b>${p.name}</b> is playing...</span>
          </div>`;
      } else {
        const endBtnText = s.hasBonusRoll ? '🎲 Roll again' : '➜ End turn';
        actions.innerHTML = `
          <button class="btn btn-richup-pill primary" id="btn-end">${endBtnText}</button>`;
        bind('btn-end', () => { sfx('click'); h.onEndTurn(); });
      }
      break;
    }
  }

  updateMobileActionDock(s, h);
}

function updateMobileActionDock(s: GameState, h: Handlers): void {
  const dock = document.getElementById('mobile-action-dock');
  if (!dock) return;

  const isGameView = !document.getElementById('layout')?.classList.contains('hidden');
  if (!isGameView || s.phase === 'gameOver' || window.innerWidth > 900) {
    dock.classList.add('hidden');
    dock.innerHTML = '';
    return;
  }

  dock.classList.remove('hidden');

  if (s.cardJustDrawn) {
    dock.innerHTML = `
      <button class="btn btn-dock primary hero" id="dock-btn-card-ok">✨ Collect & Continue ➜</button>
    `;
    document.getElementById('dock-btn-card-ok')?.addEventListener('click', h.onCardOk);
    return;
  }

  const p = cur(s);
  const isMyTurn = (localPlayerId === null) || (s.current === localPlayerId);

  if (!isMyTurn) {
    dock.innerHTML = `
      <div class="dock-waiting-pill"><span class="pulse-dot"></span> ⏳ Waiting for <b>${p.name}</b>...</div>
    `;
    return;
  }

  switch (s.phase) {
    case 'preRoll': {
      if (p.inJail) {
        dock.innerHTML = `
          <button class="btn btn-dock primary hero" id="dock-btn-roll">🎲 ROLL DICE</button>
          <button class="btn btn-dock amber" id="dock-btn-bail" ${p.cash < 500 ? 'disabled' : ''}>⚖️ PAY BAIL</button>
        `;
        document.getElementById('dock-btn-roll')?.addEventListener('click', h.onRoll);
        document.getElementById('dock-btn-bail')?.addEventListener('click', h.onBail);
      } else {
        dock.innerHTML = `
          <button class="btn btn-dock primary hero" id="dock-btn-roll">🎲 ROLL DICE</button>
        `;
        document.getElementById('dock-btn-roll')?.addEventListener('click', h.onRoll);
      }
      break;
    }
    case 'decideBuy': {
      const bi = s.pendingBuy!;
      const price = squareValue(s, bi);
      const afford = p.cash >= price;
      dock.innerHTML = `
        <button class="btn btn-dock primary hero" id="dock-btn-buy" ${afford ? '' : 'disabled'}>🏠 BUY · LKR ${fmt(price)}</button>
        <button class="btn btn-dock danger" id="dock-btn-pass">🔨 AUCTION</button>
      `;
      document.getElementById('dock-btn-buy')?.addEventListener('click', h.onBuy);
      document.getElementById('dock-btn-pass')?.addEventListener('click', h.onPass);
      break;
    }
    case 'postRoll': {
      const endBtnText = s.hasBonusRoll ? '🎲 ROLL AGAIN (Doubles!)' : '➜ END TURN';
      dock.innerHTML = `
        <button class="btn btn-dock primary${s.hasBonusRoll ? ' gold' : ''} hero" id="dock-btn-end">${endBtnText}</button>
      `;
      document.getElementById('dock-btn-end')?.addEventListener('click', h.onEndTurn);
      break;
    }
    case 'auction': {
      const currentBidder = auctionCurrentBidder(s);
      if (currentBidder === localPlayerId) {
        dock.innerHTML = `
          <button class="btn btn-dock primary hero" id="dock-btn-bid">💰 BID +LKR 200</button>
          <button class="btn btn-dock danger" id="dock-btn-withdraw">✕ PASS</button>
        `;
        document.getElementById('dock-btn-bid')?.addEventListener('click', () => h.onBid(200));
        document.getElementById('dock-btn-withdraw')?.addEventListener('click', h.onWithdraw);
      } else {
        dock.innerHTML = `<div class="dock-waiting-pill"><span class="pulse-dot"></span> 🔨 Auction in progress...</div>`;
      }
      break;
    }
    default:
      dock.classList.add('hidden');
      dock.innerHTML = '';
      break;
  }
}

export function openMobileTileSheet(s: GameState, idx: number, h: Handlers): void {
  const sheet = document.getElementById('mobile-tile-sheet');
  const body = document.getElementById('sheet-body-content');
  const scrim = document.getElementById('sheet-scrim');
  if (!sheet || !body) return;
  sfx('cardflip');

  const def = BOARD[idx];
  const st = s.squares[idx];
  const owner = st.owner !== null ? s.players[st.owner] : null;
  const isMe = localPlayerId !== null && st.owner === localPlayerId;
  const gcolor = def.group ? GROUPS[def.group].color : '#64748b';
  const val = squareValue(s, idx);
  const isProp = def.kind === 'property';

  let rentRows = '';
  if (def.rents) {
    rentRows = `
      <div class="sheet-rent-table">
        <div class="sheet-rent-row ${st.buildings === 0 ? 'active' : ''}"><span>Base Rent</span><span>LKR ${fmt(def.rents[0])}</span></div>
        <div class="sheet-rent-row ${st.buildings === 1 ? 'active' : ''}"><span>1 House 🏠</span><span>LKR ${fmt(def.rents[1])}</span></div>
        <div class="sheet-rent-row ${st.buildings === 2 ? 'active' : ''}"><span>2 Houses 🏠🏠</span><span>LKR ${fmt(def.rents[2])}</span></div>
        <div class="sheet-rent-row ${st.buildings === 3 ? 'active' : ''}"><span>3 Houses 🏠🏠🏠</span><span>LKR ${fmt(def.rents[3])}</span></div>
        <div class="sheet-rent-row ${st.buildings === 4 ? 'active' : ''}"><span>4 Houses 🏠🏠🏠🏠</span><span>LKR ${fmt(def.rents[4])}</span></div>
        <div class="sheet-rent-row ${st.buildings === 5 ? 'active' : ''}"><span>Boutique Hotel 🏨</span><span>LKR ${fmt(def.rents[5])}</span></div>
      </div>`;
  }

  const perkText = def.group ? GROUPS[def.group].perk : (def.desc || '');
  const perkSection = perkText ? `<div class="sheet-perk-box">🌟 <b>District Perk:</b> ${perkText}</div>` : '';

  let actionsHtml = '';
  if (isMe) {
    const curP = s.players[localPlayerId!];
    const canBuild = isProp && def.group && ownsMonopoly(s, curP.id, def.group) && st.buildings < 5 && !st.mortgaged && !st.damaged && curP.cash >= buildCostOf(s, idx);
    const canRepair = st.damaged && curP.cash >= 800;
    const canShield = isProp && st.shield < 3 && !st.mortgaged;
    const canMort = canMortgageSquare(s, idx);
    const canUnmort = canUnmortgageSquare(s, idx);
    const canDemol = canSellBuildingAt(s, idx);

    actionsHtml = `
      <div class="sheet-action-buttons">
        ${canBuild ? `<button class="btn btn-richup-pill primary" id="sheet-btn-build">🏗️ Build (LKR ${fmt(buildCostOf(s, idx))})</button>` : ''}
        ${canRepair ? `<button class="btn btn-richup-pill gold" id="sheet-btn-repair">🔧 Repair (LKR 800)</button>` : ''}
        ${canShield ? `<button class="btn btn-richup-pill outline" id="sheet-btn-shield">🛡️ Shield</button>` : ''}
        ${canMort ? `<button class="btn btn-richup-pill outline" id="sheet-btn-mortgage">📜 Mortgage (+LKR ${fmt(def.mortgageValue ?? 1000)})</button>` : ''}
        ${canUnmort ? `<button class="btn btn-richup-pill outline" id="sheet-btn-unmortgage">🔓 Unmortgage (-LKR ${fmt(Math.round((def.mortgageValue ?? 1000) * 1.1))})</button>` : ''}
        ${canDemol ? `<button class="btn btn-richup-pill danger" id="sheet-btn-demolish">🏚️ Sell Building</button>` : ''}
      </div>`;
  }

  body.innerHTML = `
    <div class="sheet-card-header" style="background:${gcolor}">
      <div class="sheet-card-title">
        <span class="sheet-icon">${def.icon || '🏠'}</span>
        <div>
          <h4>${squareName(idx, false, def.name, def.short)}</h4>
          <span class="sheet-sub">${def.group ? GROUPS[def.group].name : def.kind.toUpperCase()}</span>
        </div>
      </div>
      <button class="sheet-close-x" id="sheet-btn-close">✕</button>
    </div>

    <div class="sheet-card-body">
      <div class="sheet-meta-grid">
        <div class="sheet-meta-pill">
          <span class="label">Status</span>
          <span class="val">${owner ? `<b style="color:${owner.color}">${owner.name}</b>` : '<b class="green">For Sale</b>'}</span>
        </div>
        <div class="sheet-meta-pill">
          <span class="label">Current Value</span>
          <span class="val">LKR ${fmt(val)}</span>
        </div>
        <div class="sheet-meta-pill">
          <span class="label">Protection</span>
          <span class="val">${st.shield > 0 ? `Level ${st.shield} 🛡️` : 'None'}</span>
        </div>
      </div>

      ${rentRows}
      ${perkSection}
      ${actionsHtml}
    </div>
  `;

  sheet.classList.remove('hidden');

  document.getElementById('sheet-btn-close')?.addEventListener('click', () => {
    sfx('click');
    sheet.classList.add('hidden');
  });
  if (scrim) {
    scrim.onclick = () => {
      sfx('click');
      sheet.classList.add('hidden');
    };
  }

  document.getElementById('sheet-btn-build')?.addEventListener('click', () => {
    sfx('click');
    h.onBuild(idx);
    sheet.classList.add('hidden');
  });
  document.getElementById('sheet-btn-repair')?.addEventListener('click', () => {
    sfx('click');
    h.onRepair(idx);
    sheet.classList.add('hidden');
  });
  document.getElementById('sheet-btn-shield')?.addEventListener('click', () => {
    sfx('click');
    h.onShield(idx, 1);
    sheet.classList.add('hidden');
  });
  document.getElementById('sheet-btn-mortgage')?.addEventListener('click', () => {
    sfx('click');
    h.onMortgage(idx);
    sheet.classList.add('hidden');
  });
  document.getElementById('sheet-btn-unmortgage')?.addEventListener('click', () => {
    sfx('click');
    h.onUnmortgage(idx);
    sheet.classList.add('hidden');
  });
  document.getElementById('sheet-btn-demolish')?.addEventListener('click', () => {
    sfx('click');
    h.onSellBuilding(idx);
    sheet.classList.add('hidden');
  });
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
    const career = isMe ? loadCareer() : null;
    const rank = career ? getTycoonRank(career) : null;
    const rankTag = rank ? `<span class="rank-tag ${rank.borderClass}" title="${rank.desc}">${rank.badge} ${rank.title}</span>` : '';
    const isCurrent = i === s.current && s.phase !== 'gameOver';
    return `
      <div class="pcard richup-player-row${isCurrent ? ' active-turn current' : ''}${p.bankrupt ? ' bankrupt' : ''}${isMe ? ' is-me' : ''}" style="--pc:${p.color}">
        <div class="player-left">
          <div class="player-avatar" style="border-color:${p.color}; background:${p.color}28;">
            <span>${TOKENS[p.tokenKey].icon}</span>
          </div>
          <div class="pinfo">
            <div class="pname">${p.name}${youTag}${crown} <span class="pbadges">${badges}</span></div>
            <div class="psub">${p.kind === 'bot' ? PERSONAS[p.persona].label : (isMe ? `${rankTag}` : 'Tycoon')} · ${props} props · Net LKR ${fmt(netWorth(s, p.id))}</div>
          </div>
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

  if (tradePartnerId === null || !partners.some(x => x.id === tradePartnerId)) {
    tradePartnerId = partners[0].id;
    tradeWantSquare = null;
    tradeWantCash = 0;
  }

  const partner = s.players[tradePartnerId];
  const myProps = s.squares.map((st, i) => ({ st, i })).filter(o => o.st.owner === p.id && !o.st.loanLocked && BOARD[o.i].price);
  const theirProps = s.squares.map((st, i) => ({ st, i })).filter(o => o.st.owner === partner.id && !o.st.loanLocked && BOARD[o.i].price);

  const giveVal = (tradeGiveSquare !== null ? squareValue(s, tradeGiveSquare) : 0) + tradeGiveCash;
  const wantVal = (tradeWantSquare !== null ? squareValue(s, tradeWantSquare) : 0) + tradeWantCash;
  const diff = giveVal - wantVal;
  const balanceLabel = Math.abs(diff) < 500
    ? '⚖️ Fair & Balanced Deal'
    : diff > 0
      ? `🎁 Generous Offer (+LKR ${fmt(diff)} for ${partner.name})`
      : `💎 Ambitious Request (+LKR ${fmt(-diff)} for You)`;
  const balanceClass = Math.abs(diff) < 500 ? 'fair' : diff > 0 ? 'generous' : 'ambitious';

  box.innerHTML = `
    <div class="visual-trade-desk">
      <!-- Partner Selection Pills -->
      <div class="trade-partner-picker">
        <span class="dim">Partner:</span>
        <div class="partner-pills-row">
          ${partners.map(x => `
            <button class="partner-pill ${x.id === tradePartnerId ? 'active' : ''}" data-pid="${x.id}">
              <span class="p-icon">${TOKENS[x.tokenKey].icon}</span>
              <b>${x.name}</b>
              <span class="p-cash">LKR ${fmt(x.cash)}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Live Interactive Trading Floor -->
      <div class="trade-grid-visual">
        <!-- Left: Offering -->
        <div class="trade-shelf offering">
          <div class="shelf-head">
            <b>Your Offer</b>
            <span class="shelf-val">Val: LKR ${fmt(giveVal)}</span>
          </div>

          <div class="trade-cash-box">
            <div class="cash-input-row">
              <span class="cash-icon">💵</span>
              <input type="number" id="trade-give-cash" min="0" max="${p.cash}" step="250" value="${tradeGiveCash}" placeholder="Cash amount" />
            </div>
            <div class="quick-cash-chips">
              <button class="chip-btn" data-add-give="500">+500</button>
              <button class="chip-btn" data-add-give="1000">+1k</button>
              <button class="chip-btn" data-add-give="5000">+5k</button>
              <button class="chip-btn clear" data-clear-give="1">✕</button>
            </div>
          </div>

          <div class="shelf-items-label">Select Property to Offer:</div>
          <div class="trade-props-scroller">
            ${myProps.length === 0 ? '<div class="dim empty-shelf">No tradeable unpledged land</div>' : myProps.map(o => {
              const def = BOARD[o.i];
              const gcolor = def.group ? GROUPS[def.group].color : '#10b981';
              const isSel = tradeGiveSquare === o.i;
              return `
                <div class="trade-deed-chip ${isSel ? 'selected' : ''}" data-give-sq="${o.i}" style="--dc:${gcolor}">
                  <div class="chip-color-bar"></div>
                  <div class="chip-title">${def.short}</div>
                  <div class="chip-price">LKR ${fmt(squareValue(s, o.i))}</div>
                  ${isSel ? '<span class="chip-check">✓</span>' : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Right: Requesting -->
        <div class="trade-shelf requesting">
          <div class="shelf-head">
            <b>You Request</b>
            <span class="shelf-val">Val: LKR ${fmt(wantVal)}</span>
          </div>

          <div class="trade-cash-box">
            <div class="cash-input-row">
              <span class="cash-icon">💵</span>
              <input type="number" id="trade-want-cash" min="0" max="${partner.cash}" step="250" value="${tradeWantCash}" placeholder="Cash amount" />
            </div>
            <div class="quick-cash-chips">
              <button class="chip-btn" data-add-want="500">+500</button>
              <button class="chip-btn" data-add-want="1000">+1k</button>
              <button class="chip-btn" data-add-want="5000">+5k</button>
              <button class="chip-btn clear" data-clear-want="1">✕</button>
            </div>
          </div>

          <div class="shelf-items-label">Select Partner's Land:</div>
          <div class="trade-props-scroller">
            ${theirProps.length === 0 ? '<div class="dim empty-shelf">Partner has no tradeable land</div>' : theirProps.map(o => {
              const def = BOARD[o.i];
              const gcolor = def.group ? GROUPS[def.group].color : '#10b981';
              const isSel = tradeWantSquare === o.i;
              return `
                <div class="trade-deed-chip ${isSel ? 'selected' : ''}" data-want-sq="${o.i}" style="--dc:${gcolor}">
                  <div class="chip-color-bar"></div>
                  <div class="chip-title">${def.short}</div>
                  <div class="chip-price">LKR ${fmt(squareValue(s, o.i))}</div>
                  ${isSel ? '<span class="chip-check">✓</span>' : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- Live Value Balance Meter -->
      <div class="trade-balance-pill ${balanceClass}">
        ${balanceLabel}
      </div>

      <button class="btn gold btn-large btn-propose-trade" id="btn-propose-trade">
        🤝 Propose Trade Deal
      </button>
      <div class="dim note" id="trade-feedback"></div>
    </div>
  `;

  // Attach event handlers
  box.querySelectorAll<HTMLButtonElement>('.partner-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      tradePartnerId = Number(btn.dataset.pid);
      tradeWantSquare = null;
      tradeWantCash = 0;
      renderTradeTab(s, h);
    });
  });

  box.querySelectorAll<HTMLElement>('[data-give-sq]').forEach(el => {
    el.addEventListener('click', () => {
      const sq = Number(el.dataset.giveSq);
      tradeGiveSquare = tradeGiveSquare === sq ? null : sq;
      renderTradeTab(s, h);
    });
  });

  box.querySelectorAll<HTMLElement>('[data-want-sq]').forEach(el => {
    el.addEventListener('click', () => {
      const sq = Number(el.dataset.wantSq);
      tradeWantSquare = tradeWantSquare === sq ? null : sq;
      renderTradeTab(s, h);
    });
  });

  const giveInput = document.getElementById('trade-give-cash') as HTMLInputElement;
  giveInput?.addEventListener('input', () => {
    tradeGiveCash = Math.min(p.cash, Math.max(0, Number(giveInput.value) || 0));
  });

  const wantInput = document.getElementById('trade-want-cash') as HTMLInputElement;
  wantInput?.addEventListener('input', () => {
    tradeWantCash = Math.min(partner.cash, Math.max(0, Number(wantInput.value) || 0));
  });

  box.querySelectorAll<HTMLButtonElement>('[data-add-give]').forEach(btn => {
    btn.addEventListener('click', () => {
      tradeGiveCash = Math.min(p.cash, tradeGiveCash + Number(btn.dataset.addGive));
      renderTradeTab(s, h);
    });
  });

  box.querySelectorAll<HTMLButtonElement>('[data-clear-give]').forEach(btn => {
    btn.addEventListener('click', () => {
      tradeGiveCash = 0;
      renderTradeTab(s, h);
    });
  });

  box.querySelectorAll<HTMLButtonElement>('[data-add-want]').forEach(btn => {
    btn.addEventListener('click', () => {
      tradeWantCash = Math.min(partner.cash, tradeWantCash + Number(btn.dataset.addWant));
      renderTradeTab(s, h);
    });
  });

  box.querySelectorAll<HTMLButtonElement>('[data-clear-want]').forEach(btn => {
    btn.addEventListener('click', () => {
      tradeWantCash = 0;
      renderTradeTab(s, h);
    });
  });

  document.getElementById('btn-propose-trade')?.addEventListener('click', () => {
    h.onTradeSubmit(tradePartnerId!, tradeGiveSquare, tradeGiveCash, tradeWantSquare, tradeWantCash);
  });
}

function renderLogTab(s: GameState): void {
  const box = document.getElementById('log-content')!;
  box.innerHTML = s.log.slice(-90).reverse().map(e =>
    `<div class="log-entry k-${e.kind}"><span class="r">R${e.round}</span>${e.text}</div>`
  ).join('');
}

function generateNetWorthSvg(s: GameState): string {
  const history = s.netWorthHistory;
  if (!history || history.length < 2) return '';

  const w = 460;
  const h = 170;
  const padL = 40;
  const padR = 20;
  const padT = 18;
  const padB = 26;

  const maxVal = Math.max(30000, ...history.flatMap(pt => pt.values));
  const rounds = history.length;

  const scaleX = (rIndex: number) => padL + (rIndex / (rounds - 1)) * (w - padL - padR);
  const scaleY = (val: number) => padT + (1 - Math.max(0, val) / maxVal) * (h - padT - padB);

  // Horizontal grid lines
  const gridLines = [0, 0.5, 1].map(pct => {
    const y = scaleY(maxVal * pct);
    const valText = `${Math.round((maxVal * pct) / 1000)}k`;
    return `
      <line x1="${padL}" y1="${y}" x2="${w - padR}" y2="${y}" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3" />
      <text x="${padL - 6}" y="${y + 3}" fill="#94a3b8" font-size="8.5" text-anchor="end">${valText}</text>
    `;
  }).join('');

  // Polylines for each player
  const linesHtml = s.players.map((p) => {
    const pts = history.map((pt, i) => `${scaleX(i).toFixed(1)},${scaleY(pt.values[p.id] ?? 0).toFixed(1)}`).join(' ');
    const lastX = scaleX(rounds - 1).toFixed(1);
    const lastY = scaleY(history[rounds - 1].values[p.id] ?? 0).toFixed(1);
    return `
      <polyline points="${pts}" fill="none" stroke="${p.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="${p.bankrupt ? '0.35' : '0.95'}" />
      <circle cx="${lastX}" cy="${lastY}" r="3.5" fill="${p.color}" />
    `;
  }).join('');

  return `
    <div class="chart-container">
      <div class="chart-header">
        <span class="chart-title">📈 Island Net Worth Timeline</span>
        <span class="dim small">Round 1 ➔ Round ${history[rounds - 1].round}</span>
      </div>
      <svg viewBox="0 0 ${w} ${h}" class="net-worth-svg">
        ${gridLines}
        ${linesHtml}
        <text x="${padL}" y="${h - 6}" fill="#64748b" font-size="8.5">R1</text>
        <text x="${w - padR}" y="${h - 6}" fill="#64748b" font-size="8.5" text-anchor="end">R${history[rounds - 1].round}</text>
      </svg>
      <div class="chart-legend">
        ${s.players.map(p => `
          <span class="legend-item" style="--lc:${p.color}">
            <span class="dot" style="background:${p.color}"></span>
            ${p.name}: LKR ${fmt(netWorth(s, p.id))}
          </span>
        `).join('')}
      </div>
    </div>
  `;
}

function generateAccoladesHtml(s: GameState): string {
  if (!s.matchStats) return '';
  const { rentCollected, loansTaken, doublesRolled, shieldsBought } = s.matchStats;

  const maxRent = Math.max(...rentCollected);
  const maxLoan = Math.max(...loansTaken);
  const maxDoubles = Math.max(...doublesRolled);
  const maxShield = Math.max(...shieldsBought);

  const topRent = rentCollected.indexOf(maxRent);
  const topLoan = loansTaken.indexOf(maxLoan);
  const topDoubles = doublesRolled.indexOf(maxDoubles);
  const topShield = shieldsBought.indexOf(maxShield);

  return `
    <div class="accolades-section">
      <div class="section-title">🏆 Match Accolades & Records</div>
      <div class="accolades-grid">
        ${maxRent > 0 ? `
          <div class="accolade-card">
            <span class="acc-icon">🏰</span>
            <div class="acc-info">
              <b>Grand Landlord</b>
              <div class="acc-sub">${s.players[topRent].name} · LKR ${fmt(maxRent)} rent</div>
            </div>
          </div>
        ` : ''}
        ${maxLoan > 0 ? `
          <div class="accolade-card">
            <span class="acc-icon">🏦</span>
            <div class="acc-info">
              <b>Serendib VIP</b>
              <div class="acc-sub">${s.players[topLoan].name} · LKR ${fmt(maxLoan)} credit</div>
            </div>
          </div>
        ` : ''}
        ${maxDoubles > 0 ? `
          <div class="accolade-card">
            <span class="acc-icon">🎲</span>
            <div class="acc-info">
              <b>Lucky Roller</b>
              <div class="acc-sub">${s.players[topDoubles].name} · ${maxDoubles} doubles</div>
            </div>
          </div>
        ` : ''}
        ${maxShield > 0 ? `
          <div class="accolade-card">
            <span class="acc-icon">🛡️</span>
            <div class="acc-info">
              <b>Disaster Prepared</b>
              <div class="acc-sub">${s.players[topShield].name} · ${maxShield} policies</div>
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

export function renderCareerModal(): void {
  const career = loadCareer();
  const rank = getTycoonRank(career);
  const winRate = career.matchesPlayed > 0 ? Math.round((career.matchesWon / career.matchesPlayed) * 100) : 0;

  const rankCard = document.getElementById('career-rank-card');
  if (rankCard) {
    rankCard.innerHTML = `
      <div class="rank-card-inner ${rank.borderClass}">
        <div class="rank-icon-big">${rank.badge}</div>
        <div class="rank-details">
          <span class="rank-lvl">TYCOON RANK LEVEL ${rank.level}</span>
          <h2>${rank.title}</h2>
          <p class="dim">${rank.desc}</p>
        </div>
      </div>
    `;
  }

  const statsSummary = document.getElementById('career-stats-summary');
  if (statsSummary) {
    statsSummary.innerHTML = `
      <div class="career-stat-card">
        <span class="stat-num">${career.matchesWon}</span>
        <span class="stat-lbl">Victories</span>
      </div>
      <div class="career-stat-card">
        <span class="stat-num">${career.matchesPlayed}</span>
        <span class="stat-lbl">Total Matches</span>
      </div>
      <div class="career-stat-card">
        <span class="stat-num">${winRate}%</span>
        <span class="stat-lbl">Win Rate</span>
      </div>
      <div class="career-stat-card">
        <span class="stat-num">LKR ${fmt(career.totalRentCollected)}</span>
        <span class="stat-lbl">Rent Collected</span>
      </div>
      <div class="career-stat-card">
        <span class="stat-num">LKR ${fmt(career.highestNetWorth)}</span>
        <span class="stat-lbl">Peak Net Worth</span>
      </div>
    `;
  }

  const historyList = document.getElementById('career-history-list');
  if (historyList) {
    if (career.history.length === 0) {
      historyList.innerHTML = '<p class="dim note">No matches played yet. Start a match to forge your island empire!</p>';
    } else {
      historyList.innerHTML = career.history.map(m => `
        <div class="match-history-row ${m.won ? 'victory' : 'defeat'}">
          <span class="match-res">${m.won ? '🏆 VICTORY' : '💀 DEFEAT'}</span>
          <span class="match-worth">Net: LKR ${fmt(m.netWorth)}</span>
          <span class="match-rent">Rent: LKR ${fmt(m.rentCollected)}</span>
          <span class="match-date dim">${m.date}</span>
        </div>
      `).join('');
    }
  }
}

// ─── Overlays: auction, trade confirm, game over ─────────────────────────

let hasRecordedCareerThisMatch = false;

function renderOverlay(s: GameState, h: Handlers): void {
  const ov = el('overlay');

  if (s.phase === 'gameOver') {
    const standings = s.players.filter(p => !p.bankrupt).sort((a, b) => netWorth(s, b.id) - netWorth(s, a.id));

    // Record career progression once per match
    if (!hasRecordedCareerThisMatch) {
      hasRecordedCareerThisMatch = true;
      const me = localPlayerId !== null ? s.players[localPlayerId] : s.players[0];
      const isWinner = s.winner === me.id;
      const myNet = netWorth(s, me.id);
      const myRent = s.matchStats ? (s.matchStats.rentCollected[me.id] || 0) : 0;
      recordMatchResult(isWinner, myNet, myRent);
    }

    const career = loadCareer();
    const rank = getTycoonRank(career);

    ov.classList.remove('hidden');
    ov.innerHTML = `
      <div class="dialog pop game-over-dialog">
        <div class="studio">POLA : MONOPOLY SRI LANKA</div>
        <h1>${t('champion')}</h1>
        <p class="winner-line">${s.winner !== null ? `👑 <strong>${s.players[s.winner].name}</strong> dominates the island with LKR ${fmt(netWorth(s, s.winner))}!` : 'Everyone went bankrupt — the bank wins.'}</p>

        <!-- 🏆 Richup-Style Victory Podium -->
        <div class="podium-container">
          ${standings[1] ? `
            <div class="podium-slot slot-2">
              <div class="podium-avatar" style="border-color:${standings[1].color}; background:${standings[1].color}24;">
                ${TOKENS[standings[1].tokenKey].icon}
              </div>
              <div class="podium-name">${standings[1].name}</div>
              <div class="podium-net">LKR ${fmt(netWorth(s, standings[1].id))}</div>
              <div class="podium-pedestal p2">
                <span class="podium-badge">🥈 2nd</span>
              </div>
            </div>` : ''}
          ${standings[0] ? `
            <div class="podium-slot slot-1">
              <div class="podium-crown">👑</div>
              <div class="podium-avatar" style="border-color:${standings[0].color}; background:${standings[0].color}24;">
                ${TOKENS[standings[0].tokenKey].icon}
              </div>
              <div class="podium-name">${standings[0].name}</div>
              <div class="podium-net">LKR ${fmt(netWorth(s, standings[0].id))}</div>
              <div class="podium-pedestal p1">
                <span class="podium-badge">🥇 1st</span>
              </div>
            </div>` : ''}
          ${standings[2] ? `
            <div class="podium-slot slot-3">
              <div class="podium-avatar" style="border-color:${standings[2].color}; background:${standings[2].color}24;">
                ${TOKENS[standings[2].tokenKey].icon}
              </div>
              <div class="podium-name">${standings[2].name}</div>
              <div class="podium-net">LKR ${fmt(netWorth(s, standings[2].id))}</div>
              <div class="podium-pedestal p3">
                <span class="podium-badge">🥉 3rd</span>
              </div>
            </div>` : ''}
        </div>

        <!-- Career Rank Banner -->
        <div class="game-over-rank-banner ${rank.borderClass}">
          <span class="rank-icon">${rank.badge}</span>
          <div class="rank-info">
            <b>Your Rank: ${rank.title}</b>
            <div class="dim small">${career.matchesWon} Wins · ${career.matchesPlayed} Matches (${career.matchesPlayed > 0 ? Math.round((career.matchesWon / career.matchesPlayed) * 100) : 0}% Win Rate)</div>
          </div>
        </div>

        <div class="standings">${standings.map((p, i) => `
          <div class="standing-row${i === 0 ? ' winner' : ''}">
            <span><span class="rank">#${i + 1}</span> ${TOKENS[p.tokenKey].icon} ${p.name}</span>
            <span>LKR ${fmt(netWorth(s, p.id))}</span>
          </div>`).join('')}</div>

        <!-- 📈 Net Worth Timeline Progression Graph -->
        ${generateNetWorthSvg(s)}

        <!-- 🏆 Match Accolades -->
        ${generateAccoladesHtml(s)}

        ${s.players.some(p => p.bankrupt) ? `<p class="dim fell-along">Fell along the way: ${s.players.filter(p => p.bankrupt).map(p => p.name).join(', ')}.</p>` : ''}
        <button class="btn btn-richup-pill primary hero btn-large" id="btn-restart" style="margin: 12px auto 0; display: inline-flex;">${t('playAgain')}</button>
      </div>`;
    confetti(ov);
    bind('btn-restart', () => {
      sfx('click');
      hasRecordedCareerThisMatch = false;
      h.onRestart();
    });
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
      bind('btn-bid-250', () => { sfx('gavel'); h.onBid(250); });
      bind('btn-bid-500', () => { sfx('gavel'); h.onBid(500); });
      bind('btn-bid-1000', () => { sfx('gavel'); h.onBid(1000); });
      bind('btn-auction-pass', () => { sfx('click'); h.onWithdraw(); });
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
