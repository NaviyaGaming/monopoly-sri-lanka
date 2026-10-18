// ─── POLA Sri Lanka Driver: Multi-View Router, Richup Lobby, P2P & Board ───

import './ui/styles.css';
import type { GameState, LogEntry, PlayerSetup, TokenKey } from './engine/types';
import { PERSONAS, SEAT_COLORS, TOKENS } from './engine/config';
import {
  applyTrade, auctionBid, auctionCurrentBidder, auctionPass, buyCurrent, buyShield, createGame,
  declineCurrent, doBuild, endTurn, expressTransit, maintainSquare, mortgageSquare,
  payBail, repairSquare, repayLoan, sellBuilding, takeLoan, takeTurnRoll,
  unmortgageSquare, validTrade,
} from './engine/engine';
import { botAct, botConsiderTrade, botToAct } from './engine/bots';
import { render, renderCareerModal, setActiveTab, markLanded, setDiceClickHandler, setLocalPlayerId, setTimerDisplay, type Handlers } from './ui/render';
import { renderDice } from './ui/dice';
import { TOKEN_AVATARS } from './ui/tokens';
import { ensureAudio, floatCash, flyingCash, isMuted, popup, sfx, toast, toggleMute, tokenSfx } from './ui/fx';
import { isMusicPlaying, toggleMusic, initMusicFromPreferences } from './ui/music';
import { setLang, t } from './ui/i18n';
import {
  createOnlineRoom, joinOnlineRoom, broadcastMessage, sendToHost,
  isOnlineHost, isOnlineClient, disconnectOnline,
  type LobbyPlayer, type LobbySettings,
} from './network/p2p';

let S: GameState | null = null;
let busy = false;
let fastMode = localStorage.getItem('st-fast') === '1';
const BOT_STEP_MS = 650;
let myPlayerId = 0;

// ─── View Routing (Home | Lobby | Game) ────────────────────────────────────

type ViewType = 'home' | 'lobby' | 'game';

function showView(view: ViewType): void {
  const vHome = document.getElementById('view-home');
  const vLobby = document.getElementById('view-lobby');
  const vGame = document.getElementById('layout');
  const gameHdr = document.getElementById('game-hdr-pills');
  const leaveBtn = document.getElementById('btn-leave-game');

  if (vHome) vHome.classList.toggle('hidden', view !== 'home');
  if (vLobby) vLobby.classList.toggle('hidden', view !== 'lobby');
  if (vGame) vGame.classList.toggle('hidden', view !== 'game');

  if (gameHdr) gameHdr.style.display = view === 'game' ? 'flex' : 'none';
  if (leaveBtn) leaveBtn.style.display = view === 'game' ? 'inline-flex' : 'none';

  if (view === 'home') {
    const url = new URL(window.location.href);
    if (url.searchParams.has('room')) {
      url.searchParams.delete('room');
      window.history.replaceState({}, '', url.pathname);
    }
  }
}

// ─── Snapshot & Execution Pipeline ────────────────────────────────────────

interface Snapshot {
  actor: number;
  pos: number[];
  cash: number[];
  logLen: number;
  roll: [number, number] | null;
  totalRolls: number;
}

function snap(s: GameState): Snapshot {
  return {
    actor: s.current,
    pos: s.players.map(p => p.position),
    cash: s.players.map(p => p.cash),
    logLen: s.log.length,
    roll: s.lastRoll ? [...s.lastRoll] as [number, number] : null,
    totalRolls: s.totalRolls ?? 0,
  };
}

async function perform(fn: (s: GameState) => void): Promise<void> {
  if (!S || busy || S.phase === 'gameOver') return;
  busy = true;
  try {
    const before = snap(S);
    fn(S);
    const s = S;
    const rolled = (s.totalRolls ?? 0) > before.totalRolls;

    if (rolled && s.lastRoll) {
      sfx('dice');
      const holder = document.getElementById('dice-holder');
      if (holder) await renderDice(holder, s.lastRoll, fastMode ? 300 : 720);
    }

    const from = before.pos[before.actor];
    const to = s.players[before.actor].position;
    if (from !== to && !s.players[before.actor].bankrupt) {
      tokenSfx(TOKEN_AVATARS[s.players[before.actor].tokenKey].sound);
      await animateMovement(before.actor, from, to);
      markLanded(to);
    }

    playOutcome(s.log.slice(before.logLen));
    s.players.forEach((p, i) => {
      const d = p.cash - before.cash[i];
      if (d !== 0) {
        floatCash(i, d);
        if (i === myPlayerId || i === before.actor) {
          flyingCash(d, d > 0);
        }
      }
    });

    render(s, handlers, myPlayerId);
    resetTurnTimer();

    if (isOnlineHost()) {
      broadcastMessage({ type: 'state', state: s });
    }

    if (s.phase === 'gameOver' && s.winner !== null) {
      stopTurnTimer();
      sfx('win');
    }
    // Human card popup pauses bot pacing until OK is clicked.
    if (s.cardJustDrawn && s.players[s.current].kind === 'human') return;
  } finally {
    busy = false;
    if (S && (S as any).phase === 'gameOver') stopTurnTimer();
    scheduleBot();
  }
}

// ─── Token movement animation ─────────────────────────────────────────────

async function animateMovement(actor: number, from: number, to: number): Promise<void> {
  const board = document.getElementById('board-grid');
  if (!board || !S) return;
  const steps = (to - from + 40) % 40;
  if (steps === 0) return;

  const token = document.createElement('div');
  token.className = 'move-token hopping';
  token.style.background = S.players[actor].color;
  board.appendChild(token);

  const place = (idx: number) => {
    const sq = board.querySelector<HTMLElement>(`.board-cell[data-idx="${idx}"]`);
    if (!sq) return;
    token.style.left = `${sq.offsetLeft + sq.offsetWidth / 2 - 13}px`;
    token.style.top = `${sq.offsetTop + sq.offsetHeight / 2 - 13}px`;
  };

  if (fastMode || steps > 14) {
    token.style.transition = 'left .4s ease-in-out, top .4s ease-in-out';
    place(from);
    void board.offsetWidth;
    place(to);
    await new Promise(r => setTimeout(r, 440));
  } else {
    token.style.transition = `left ${fastMode ? 70 : 115}ms ease, top ${fastMode ? 70 : 115}ms ease`;
    place(from);
    void board.offsetWidth;
    for (let k = 1; k <= steps; k++) {
      place((from + k) % 40);
      sfx('step');
      await new Promise(r => setTimeout(r, fastMode ? 78 : 130));
    }
    await new Promise(r => setTimeout(r, 80));
  }
  token.remove();
}

// ─── Outcome sounds & popups from new log entries ─────────────────────────

function playOutcome(entries: LogEntry[]): void {
  if (entries.length === 0) return;
  const text = entries.map(e => e.text).join(' | ');
  for (const e of entries) {
    if (/passed Avurudu Start/.test(e.text)) popup('🎊 Avurudu Bonus', 'Start collected', 'amber');
    if (/Poya Day Holiday/.test(e.text)) popup('🌕 Poya Holiday!', 'Welfare pool payout', 'amber');
    if (/CID Inquiry!$/.test(e.text)) popup('🚨 CID Summons', 'Go to Square 10', 'rose');
    if (/BANKRUPTCY/.test(e.text)) popup('💥 Bankruptcy!', 'Eliminated', 'rose');
    if (/FORECLOSED|foreclosed/.test(e.text)) popup('🚨 Loan Default', 'Collateral seized', 'rose');
    if (/MONOPOLY UNLOCKED/.test(e.text)) popup('🌟 Monopoly!', 'District perk active', 'emerald');
    if (/damaged /.test(e.text)) popup('⛈️ Disaster!', 'Repair needed', 'rose');
  }
  if (entries.some(e => e.kind === 'danger')) { sfx('alert'); return; }
  if (/ wins? the auction|AUCTION WON/.test(text)) { sfx('gavel'); return; }
  if (/ purchased | constructed | equipped /.test(text)) { sfx('buy'); return; }
  if (/MACRO SHIFT/.test(text)) { sfx('fanfare'); toast(text.slice(0, 90), 'amber'); return; }
  if (/passed Avurudu Start/.test(text)) { sfx('fanfare'); return; }
  if (/ rent |Tax|bail|repaid|borrowed|collected .*Dividend/.test(text)) { sfx('cash'); return; }
  if (entries.some(e => e.kind === 'event')) { sfx('buy'); return; }
}

// ─── Bot scheduling ───────────────────────────────────────────────────────

function scheduleBot(): void {
  if (!S || busy || S.phase === 'gameOver') return;
  if (S.cardJustDrawn && S.players[S.current].kind === 'human') return;
  if (!botToAct(S)) return;
  window.setTimeout(async () => {
    if (!S || busy || S.phase === 'gameOver' || !botToAct(S)) return;
    await perform(s => botAct(s));
  }, fastMode ? 220 : BOT_STEP_MS);
}

// ─── Turn Countdown Timer (25s AFK & Pacing Protection) ───────────────────

let turnTimerSeconds = 25;
let turnTimerInterval: number | null = null;

function stopTurnTimer(): void {
  if (turnTimerInterval !== null) {
    clearInterval(turnTimerInterval);
    turnTimerInterval = null;
  }
  setTimerDisplay(25, false, false);
}

function resetTurnTimer(): void {
  stopTurnTimer();
  if (!S || S.phase === 'gameOver') return;

  const activeP = S.phase === 'auction' && S.auction ? S.players[auctionCurrentBidder(S)] : S.players[S.current];
  // If active player is a bot, hide timer
  if (activeP.kind === 'bot') {
    setTimerDisplay(0, false, false);
    return;
  }

  // Active human player
  const duration = S.phase === 'auction' ? 12 : 25;
  turnTimerSeconds = duration;
  setTimerDisplay(turnTimerSeconds, false, true);

  turnTimerInterval = window.setInterval(() => {
    if (!S || S.phase === 'gameOver' || busy) return;
    turnTimerSeconds--;

    if (turnTimerSeconds <= 5 && turnTimerSeconds > 0) {
      sfx('tick');
      setTimerDisplay(turnTimerSeconds, true, true);
    } else if (turnTimerSeconds > 5) {
      setTimerDisplay(turnTimerSeconds, false, true);
    } else if (turnTimerSeconds <= 0) {
      stopTurnTimer();
      handleTurnTimeout();
    }
  }, 1000);
}

function handleTurnTimeout(): void {
  if (!S || busy || S.phase === 'gameOver') return;

  // If this is an online client, send the timeout action for their own turn to host
  if (isOnlineClient()) {
    const activeId = S.phase === 'auction' && S.auction ? auctionCurrentBidder(S) : S.current;
    if (activeId === myPlayerId) {
      if (S.phase === 'preRoll') {
        handlers.onRoll();
      } else if (S.phase === 'decideBuy') {
        handlers.onPass();
      } else if (S.phase === 'postRoll') {
        handlers.onEndTurn();
      } else if (S.phase === 'auction') {
        handlers.onWithdraw();
      }
    }
    return;
  }

  // Host or solo authoritative execution
  if (S.phase === 'preRoll') {
    toast(`⏱️ Turn timer expired — auto-rolling!`, 'amber');
    void perform(s => takeTurnRoll(s));
  } else if (S.phase === 'decideBuy') {
    toast(`⏱️ Decision timer expired — property sent to auction!`, 'amber');
    void perform(s => declineCurrent(s));
  } else if (S.phase === 'postRoll') {
    toast(`⏱️ Turn timer expired — ending turn!`, 'amber');
    void perform(s => { s.cardJustDrawn = null; endTurn(s); });
  } else if (S.phase === 'auction') {
    toast(`⏱️ Auction timer expired — passing!`, 'amber');
    void perform(s => auctionPass(s));
  }
}

// ─── Client Action Delegation (WebRTC sync) ───────────────────────────────

function actionOrSend(fnName: string, localFn: () => void, ...args: any[]): void {
  if (!S) return;

  // Turn authorization: prevent players from controlling someone else's turn/dices!
  if (S.phase === 'auction') {
    const currentBidder = auctionCurrentBidder(S);
    if (currentBidder !== myPlayerId) {
      toast('⏳ Please wait for your turn to bid!', 'amber');
      return;
    }
  } else if (fnName === 'onTradeAccept' || fnName === 'onTradeDecline') {
    if (S.pendingTrade?.toId !== myPlayerId) {
      return;
    }
  } else {
    if (S.current !== myPlayerId) {
      toast('⏳ Not your turn to roll or act!', 'amber');
      return;
    }
  }

  if (isOnlineClient()) {
    sendToHost({ type: 'action', fnName, args, playerId: myPlayerId });
  } else {
    localFn();
  }
}

// ─── Handlers ─────────────────────────────────────────────────────────────

const handlers: Handlers = {
  onRoll: () => actionOrSend('onRoll', () => void perform(s => takeTurnRoll(s))),
  onBail: () => actionOrSend('onBail', () => void perform(s => payBail(s))),
  onBuy: () => actionOrSend('onBuy', () => void perform(s => { buyCurrent(s); })),
  onPass: () => actionOrSend('onPass', () => void perform(s => declineCurrent(s))),
  onBid: (inc: number) => actionOrSend('onBid', () => void perform(s => { auctionBid(s, inc); }), inc),
  onWithdraw: () => actionOrSend('onWithdraw', () => void perform(s => auctionPass(s))),
  onEndTurn: () => actionOrSend('onEndTurn', () => void perform(s => { s.cardJustDrawn = null; endTurn(s); })),
  onBuild: (idx: number) => actionOrSend('onBuild', () => void perform(s => { doBuild(s, idx); }), idx),
  onSellBuilding: (idx: number) => actionOrSend('onSellBuilding', () => void perform(s => { sellBuilding(s, idx); }), idx),
  onMortgage: (idx: number) => actionOrSend('onMortgage', () => void perform(s => { mortgageSquare(s, idx); }), idx),
  onUnmortgage: (idx: number) => actionOrSend('onUnmortgage', () => void perform(s => { unmortgageSquare(s, idx); }), idx),
  onMaintain: (idx: number) => actionOrSend('onMaintain', () => void perform(s => { maintainSquare(s, idx); }), idx),
  onShield: (idx: number, tier: 1 | 2 | 3) => actionOrSend('onShield', () => void perform(s => { buyShield(s, idx, tier); }), idx, tier),
  onRepair: (idx: number) => actionOrSend('onRepair', () => void perform(s => { repairSquare(s, idx); }), idx),
  onLoan: (amount: number) => actionOrSend('onLoan', () => void perform(s => { takeLoan(s, amount); }), amount),
  onRepay: (amount: number) => actionOrSend('onRepay', () => void perform(s => { repayLoan(s, amount); }), amount),
  onTransit: (kind: 'unowned' | 'bank') => actionOrSend('onTransit', () => void perform(s => expressTransit(s, kind)), kind),
  onTradeSubmit: (partner, giveSq, giveCash, wantSq, wantCash) => {
    if (!S) return;
    const offer = { fromId: S.current, toId: partner, giveSquare: giveSq, giveCash, wantSquare: wantSq, wantCash };
    const err = validTrade(S, offer);
    const fb = document.getElementById('trade-feedback');
    if (err) {
      if (fb) fb.textContent = `❌ ${err}`;
      return;
    }
    void perform(s => {
      s.pendingTrade = offer;
      if (s.players[partner].kind === 'bot') {
        const before = s.log.length;
        botConsiderTrade(s);
        const result = s.log.slice(before).map(e => e.text).join(' ');
        if (/TRADE:/.test(result)) toast('🤝 Trade accepted!', 'emerald');
        else toast('🤝 Trade declined — offer more value.', 'rose');
      }
    });
  },
  onTradeAccept: () => actionOrSend('onTradeAccept', () => void perform(s => {
    if (!s.pendingTrade) return;
    applyTrade(s, s.pendingTrade);
    s.pendingTrade = null;
  })),
  onTradeDecline: () => actionOrSend('onTradeDecline', () => void perform(s => { s.pendingTrade = null; })),
  onCardOk: () => actionOrSend('onCardOk', () => void perform(s => {
    sfx('cardflip');
    s.cardJustDrawn = null;
  })),
  onRestart: () => {
    if (confirm('Start a new game?')) {
      stopTurnTimer();
      disconnectOnline();
      S = null;
      showView('home');
    }
  },
  onSelectSquare: () => {},
  onTab: () => {},
  onEmote: (emoji: string) => {
    if (!S) return;
    sfx('emote');
    const p = S.players[S.current];
    popup(`${p.name}: ${emoji}`, 'reaction', 'amber');
    if (isOnlineHost()) broadcastMessage({ type: 'emote', sender: p.name, emoji });
    else if (isOnlineClient()) sendToHost({ type: 'emote', sender: p.name, emoji });
  },
};

setDiceClickHandler(() => {
  if (S && S.phase === 'preRoll' && S.players[S.current].kind === 'human' && !busy) {
    if (S.current === myPlayerId) {
      handlers.onRoll();
    } else {
      toast('⏳ Wait for your turn to roll the dice!', 'amber');
    }
  }
});

function updateMusicButton(): void {
  const musicBtn = document.getElementById('btn-music');
  if (musicBtn) {
    musicBtn.textContent = isMusicPlaying() ? '🎵 Music: ON' : '🔇 Music: OFF';
    musicBtn.classList.toggle('active', isMusicPlaying());
  }
}

function refreshHeader(): void {
  const muteBtn = document.getElementById('btn-mute')!;
  muteBtn.textContent = isMuted() ? '🔇' : '🔊';
  updateMusicButton();
  document.getElementById('lbl-round')!.textContent = t('round');
  document.getElementById('subtitle-line')!.textContent = t('subtitle');
  document.getElementById('lbl-tycoons')!.textContent = t('tycoons');
  document.getElementById('lbl-tab-deed')!.textContent = t('tabDeed').replace(/^[^\s]+ /, '');
  document.getElementById('lbl-tab-bank')!.textContent = t('tabBank').replace(/^[^\s]+ /, '');
  document.getElementById('lbl-tab-insure')!.textContent = t('tabInsure').replace(/^[^\s]+ /, '');
  document.getElementById('lbl-tab-trade')!.textContent = t('tabTrade').replace(/^[^\s]+ /, '');
  document.getElementById('lbl-tab-log')!.textContent = t('tabLog').replace(/^[^\s]+ /, '');
}

for (const btn of document.querySelectorAll<HTMLButtonElement>('#topbar .lang-toggle button')) {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang as 'en' | 'si' | 'ta';
    setLang(lang);
    for (const b of document.querySelectorAll<HTMLButtonElement>('#topbar .lang-toggle button')) {
      b.classList.toggle('active', b === btn);
    }
    refreshHeader();
    if (S) render(S, handlers, myPlayerId);
  });
}
document.getElementById('btn-mute')!.addEventListener('click', () => { toggleMute(); refreshHeader(); });
document.getElementById('btn-music')?.addEventListener('click', () => { toggleMusic(); updateMusicButton(); });
document.addEventListener('pointerdown', ensureAudio);

const careerModal = document.getElementById('modal-career');
document.getElementById('btn-open-career')?.addEventListener('click', () => {
  renderCareerModal();
  sfx('cardflip');
  careerModal?.classList.remove('hidden');
});
document.getElementById('btn-close-career')?.addEventListener('click', () => {
  careerModal?.classList.add('hidden');
});
careerModal?.addEventListener('click', (e) => {
  if (e.target === careerModal) careerModal.classList.add('hidden');
});

for (const btn of document.querySelectorAll<HTMLButtonElement>('.tab-trigger')) {
  btn.addEventListener('click', () => {
    setActiveTab(btn.id.replace('tab-btn-', ''));
    if (S) render(S, handlers, myPlayerId);
  });
}

// ─── Live In-Game Chat ────────────────────────────────────────────────────

function appendChatMessage(sender: string, text: string, isSelf = false, isSystem = false): void {
  const container = document.getElementById('live-chat-messages');
  if (!container) return;
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${isSystem ? 'system' : isSelf ? 'self' : 'other'}`;
  msgDiv.innerHTML = `<span class="msg-author">${sender}:</span> ${text}`;
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

const chatForm = document.getElementById('chat-form') as HTMLFormElement;
const chatInput = document.getElementById('chat-input') as HTMLInputElement;

chatForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text || !S) return;
  const selfName = S.players[S.current].name;
  appendChatMessage(selfName, text, true);
  sfx('step');
  chatInput.value = '';

  const msgPayload = {
    type: 'chat' as const,
    sender: selfName,
    text,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  if (isOnlineHost()) broadcastMessage(msgPayload);
  else if (isOnlineClient()) sendToHost(msgPayload);
});

document.getElementById('btn-copy-room-link')?.addEventListener('click', () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    toast('📋 Link copied to clipboard! Share with friends.', 'emerald');
    sfx('cash');
  });
});

// ─── Lobby State & UI Logic ───────────────────────────────────────────────

let currentLobbyPlayers: LobbyPlayer[] = [];
let currentLobbySettings: LobbySettings = {
  startingCash: 30000,
  maxRounds: 25,
};
let myPlayerName = 'Navindu';
let myTokenKey: TokenKey = 'tuktuk';

function appendLobbyChat(sender: string, text: string, isSystem = false): void {
  const container = document.getElementById('lobby-chat-messages');
  if (!container) return;
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${isSystem ? 'system' : ''}`;
  msgDiv.innerHTML = `<span class="msg-author">${sender}:</span> ${text}`;
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

function broadcastLobbyUpdate(): void {
  if (!isOnlineHost()) return;
  broadcastMessage({
    type: 'lobby_update',
    players: currentLobbyPlayers,
    settings: currentLobbySettings,
  });
}

function updateLobbyUI(): void {
  const countEl = document.getElementById('lobby-players-count');
  if (countEl) countEl.textContent = String(currentLobbyPlayers.length);

  const statusEl = document.getElementById('lobby-status-pill');
  if (statusEl) {
    if (currentLobbyPlayers.length < 2) {
      statusEl.textContent = 'Waiting for players (min 2)...';
      statusEl.className = 'pill amber';
    } else {
      statusEl.textContent = 'Ready to launch!';
      statusEl.className = 'pill teal';
    }
  }

  const slotsCont = document.getElementById('lobby-slots-container');
  if (slotsCont) {
    slotsCont.innerHTML = '';
    for (let i = 0; i < 6; i++) {
      const p = currentLobbyPlayers[i];
      const slotEl = document.createElement('div');
      slotEl.className = `lobby-slot ${p ? 'occupied' : 'empty'}`;

      if (p) {
        const avatar = TOKEN_AVATARS[p.tokenKey as TokenKey] || { icon: '🛺' };
        slotEl.innerHTML = `
          <div class="slot-avatar" style="border-color: ${SEAT_COLORS[i % SEAT_COLORS.length]};">
            <span class="slot-emoji">${avatar.icon}</span>
          </div>
          <div class="slot-info">
            <div class="slot-name">${p.name}</div>
            <div class="slot-badges">
              ${p.isHost ? '<span class="badge host">👑 HOST</span>' : ''}
              ${p.isBot ? '<span class="badge bot">🤖 BOT</span>' : '<span class="badge ready">READY</span>'}
            </div>
          </div>
          ${isOnlineHost() && p.isBot ? `<button class="btn-remove-bot" data-slot="${i}" title="Remove bot">✕</button>` : ''}
        `;
        if (isOnlineHost() && p.isBot) {
          slotEl.querySelector('.btn-remove-bot')?.addEventListener('click', () => {
            currentLobbyPlayers.splice(i, 1);
            broadcastLobbyUpdate();
            updateLobbyUI();
          });
        }
      } else {
        slotEl.innerHTML = `
          <div class="slot-avatar empty">
            <span class="slot-emoji">➕</span>
          </div>
          <div class="slot-info">
            <div class="slot-name dim">Slot ${i + 1} Open</div>
            <div class="slot-badges"><span class="badge empty">Waiting...</span></div>
          </div>
        `;
      }
      slotsCont.appendChild(slotEl);
    }
  }

  // Host controls vs Client view
  const hostCtrls = document.getElementById('lobby-host-controls');
  const startBtn = document.getElementById('lobby-btn-start-game') as HTMLButtonElement;
  const addBotBtn = document.getElementById('lobby-btn-add-bot') as HTMLButtonElement;
  const cashSel = document.getElementById('lobby-set-cash') as HTMLSelectElement;
  const roundsSel = document.getElementById('lobby-set-rounds') as HTMLSelectElement;

  if (isOnlineHost()) {
    if (hostCtrls) hostCtrls.style.display = 'block';
    if (startBtn) {
      startBtn.disabled = currentLobbyPlayers.length < 2;
      startBtn.textContent = currentLobbyPlayers.length < 2 ? '⏳ Waiting for 2+ Players...' : '🚀 START GAME';
    }
    if (addBotBtn) {
      addBotBtn.style.display = currentLobbyPlayers.length >= 6 ? 'none' : 'inline-block';
    }
    if (cashSel) cashSel.disabled = false;
    if (roundsSel) roundsSel.disabled = false;
  } else {
    if (hostCtrls) hostCtrls.style.display = 'block';
    if (startBtn) {
      startBtn.disabled = true;
      startBtn.textContent = '⏳ Waiting for Host to Start...';
    }
    if (addBotBtn) addBotBtn.style.display = 'none';
    if (cashSel) cashSel.disabled = true;
    if (roundsSel) roundsSel.disabled = true;
  }
}

// ─── Multiplayer Actions ──────────────────────────────────────────────────

async function handleCreateRoom(): Promise<void> {
  const nameInput = document.getElementById('home-host-name') as HTMLInputElement;
  const hostName = nameInput?.value.trim() || 'Navindu';
  myPlayerName = hostName;

  showView('lobby');
  appendLobbyChat('Central', 'Initializing private multiplayer room on WebRTC network...', true);

  try {
    const roomId = await createOnlineRoom(
      hostName,
      // onPlayerJoin
      (conn, data) => {
        if (currentLobbyPlayers.length >= 6) {
          conn.send({ type: 'lobby_chat', sender: 'System', text: 'Room is full!', time: '' });
          conn.close();
          return;
        }
        sfx('cash');
        toast(`👋 ${data.name} joined the lobby!`, 'emerald');
        const newPlayerId = currentLobbyPlayers.length;
        currentLobbyPlayers.push({
          id: newPlayerId,
          name: data.name,
          tokenKey: (data.tokenKey in TOKENS ? data.tokenKey : 'tuktuk'),
          isHost: false,
          isBot: false,
        });
        conn.send({ type: 'welcome', playerId: newPlayerId, state: S });
        appendLobbyChat('System', `${data.name} joined the lobby.`, true);
        broadcastLobbyUpdate();
        updateLobbyUI();
      },
      // onMessage
      (msg) => {
        if (msg.type === 'action' && S) {
          const senderId = msg.playerId;
          if (typeof senderId === 'number') {
            if (S.phase === 'auction') {
              if (auctionCurrentBidder(S) !== senderId) return;
            } else if (msg.fnName === 'onTradeAccept' || msg.fnName === 'onTradeDecline') {
              if (S.pendingTrade?.toId !== senderId) return;
            } else {
              if (S.current !== senderId) return;
            }
          }
          const actionFn = (handlers as any)[msg.fnName];
          if (typeof actionFn === 'function') actionFn(...msg.args);
        } else if (msg.type === 'lobby_chat') {
          appendLobbyChat(msg.sender, msg.text);
          broadcastMessage(msg);
        } else if (msg.type === 'chat') {
          appendChatMessage(msg.sender, msg.text, false);
          broadcastMessage(msg);
        } else if (msg.type === 'emote') {
          sfx('emote');
          popup(`${msg.sender}: ${msg.emoji}`, 'reaction', 'amber');
          broadcastMessage(msg);
        }
      },
      // onPlayerLeave
      () => {
        appendLobbyChat('System', 'A player disconnected.', true);
        toast('A player disconnected from lobby', 'rose');
      }
    );

    myPlayerId = 0;
    setLocalPlayerId(0);

    currentLobbyPlayers = [{
      id: 0,
      name: hostName,
      tokenKey: myTokenKey,
      isHost: true,
      isBot: false,
    }];

    const codeTag = document.getElementById('lobby-code-display');
    if (codeTag) codeTag.textContent = roomId.toUpperCase();

    const shareUrl = `${window.location.origin}${window.location.pathname}?room=${roomId}`;
    const linkInput = document.getElementById('lobby-link-copy-val') as HTMLInputElement;
    if (linkInput) linkInput.value = shareUrl;

    window.history.replaceState({}, '', `?room=${roomId}`);

    appendLobbyChat('Central Bank', `Room created with code ${roomId.toUpperCase()}! Share link with friends.`, true);
    toast(`🎉 Room ${roomId.toUpperCase()} created!`, 'emerald');
    updateLobbyUI();
  } catch (err: any) {
    alert(`Could not create room: ${err.message || err}`);
    showView('home');
  }
}

async function handleJoinRoom(): Promise<void> {
  const codeInput = document.getElementById('home-room-code') as HTMLInputElement;
  const nameInput = document.getElementById('home-join-name') as HTMLInputElement;

  let raw = codeInput?.value.trim() || '';
  if (!raw) {
    toast('Please enter a room code or paste an invite link', 'amber');
    return;
  }

  if (raw.includes('room=')) {
    try {
      const u = new URL(raw.startsWith('http') ? raw : `http://x/${raw}`);
      const r = u.searchParams.get('room');
      if (r) raw = r;
    } catch {}
  }
  raw = raw.toLowerCase().trim();

  const playerName = nameInput?.value.trim() || 'Player';
  myPlayerName = playerName;

  showView('lobby');
  appendLobbyChat('Central', `Connecting to room ${raw.toUpperCase()}...`, true);

  const codeTag = document.getElementById('lobby-code-display');
  if (codeTag) codeTag.textContent = raw.toUpperCase();
  const linkInput = document.getElementById('lobby-link-copy-val') as HTMLInputElement;
  if (linkInput) linkInput.value = `${window.location.origin}${window.location.pathname}?room=${raw}`;

  try {
    await joinOnlineRoom(
      raw,
      playerName,
      myTokenKey,
      (msg) => {
        if (msg.type === 'welcome') {
          myPlayerId = msg.playerId;
          setLocalPlayerId(msg.playerId);
          if (msg.state) {
            S = msg.state;
            render(S, handlers, myPlayerId);
          }
        } else if (msg.type === 'lobby_update') {
          currentLobbyPlayers = msg.players;
          currentLobbySettings = msg.settings;
          const me = msg.players.find(p => p.name === myPlayerName);
          if (me && typeof me.id === 'number') {
            myPlayerId = me.id;
            setLocalPlayerId(me.id);
          }
          updateLobbyUI();
        } else if (msg.type === 'start_game') {
          sfx('fanfare');
          toast('Match started by host!', 'emerald');
          S = msg.state;
          showView('game');
          render(S, handlers, myPlayerId);
          resetTurnTimer();
        } else if (msg.type === 'state') {
          S = msg.state;
          render(S, handlers, myPlayerId);
          resetTurnTimer();
        } else if (msg.type === 'lobby_chat') {
          appendLobbyChat(msg.sender, msg.text);
        } else if (msg.type === 'chat') {
          appendChatMessage(msg.sender, msg.text, false);
        } else if (msg.type === 'emote') {
          sfx('emote');
          popup(`${msg.sender}: ${msg.emoji}`, 'reaction', 'amber');
        }
      },
      () => {
        toast('Disconnected from host', 'rose');
        appendLobbyChat('System', 'Disconnected from host.', true);
      }
    );

    toast(`Connected to ${raw.toUpperCase()}!`, 'emerald');
    appendLobbyChat('System', `Connected to lobby ${raw.toUpperCase()}! Waiting for host to start...`, true);
    updateLobbyUI();
  } catch (err: any) {
    alert(`Could not connect to room: ${err.message || err}`);
    showView('home');
  }
}

// ─── Attach Lobby Controls ────────────────────────────────────────────────

document.getElementById('lobby-btn-add-bot')?.addEventListener('click', () => {
  if (!isOnlineHost()) return;
  if (currentLobbyPlayers.length >= 6) {
    toast('Room is already full (6 players max)!', 'amber');
    return;
  }
  const botNames = ['Sunil Tuk-Tuk', 'Anura Tea', 'Kamal Clipper', 'Nimal Gem', 'Priyani Dancer', 'Rohan Train'];
  const tokenKeys: TokenKey[] = ['elephant', 'dancer', 'train', 'gem', 'ship', 'tuktuk'];

  const usedTokens = new Set(currentLobbyPlayers.map(p => p.tokenKey));
  const availableToken = tokenKeys.find(t => !usedTokens.has(t)) || 'elephant';

  const usedNames = new Set(currentLobbyPlayers.map(p => p.name));
  const availableName = botNames.find(n => !usedNames.has(n)) || `AI Bot ${currentLobbyPlayers.length}`;

  currentLobbyPlayers.push({
    id: currentLobbyPlayers.length,
    name: availableName,
    tokenKey: availableToken,
    isHost: false,
    isBot: true,
  });

  sfx('click');
  broadcastLobbyUpdate();
  updateLobbyUI();
});

document.getElementById('lobby-btn-start-game')?.addEventListener('click', () => {
  if (!isOnlineHost()) return;
  if (currentLobbyPlayers.length < 2) {
    toast('Need at least 2 players to start! Add an AI Bot or invite a friend.', 'amber');
    return;
  }

  ensureAudio();
  sfx('fanfare');

  const cashSel = document.getElementById('lobby-set-cash') as HTMLSelectElement;
  const roundsSel = document.getElementById('lobby-set-rounds') as HTMLSelectElement;
  const startingCash = cashSel ? parseInt(cashSel.value, 10) : 30000;
  const maxRounds = roundsSel ? parseInt(roundsSel.value, 10) : 25;

  const personas: (keyof typeof PERSONAS)[] = ['aggressive', 'conservative', 'risk', 'opportunist', 'aggressive', 'conservative'];

  const players: PlayerSetup[] = currentLobbyPlayers.map((p, idx) => ({
    name: p.name,
    kind: p.isBot ? 'bot' : 'human',
    persona: personas[idx % personas.length],
    tokenKey: (p.tokenKey in TOKENS ? p.tokenKey : 'tuktuk') as TokenKey,
  }));

  S = createGame({
    players,
    seed: (Date.now() % 2147483647) | 0,
    maxRounds,
    startingCash,
  });

  broadcastMessage({ type: 'start_game', state: S });
  showView('game');
  render(S, handlers, myPlayerId);
  resetTurnTimer();
  scheduleBot();
  toast('🎮 Match launched! May the best tycoon win!', 'emerald');
});

const lobbyChatForm = document.getElementById('lobby-chat-form') as HTMLFormElement;
const lobbyChatInput = document.getElementById('lobby-chat-input') as HTMLInputElement;

lobbyChatForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = lobbyChatInput?.value.trim();
  if (!text) return;
  appendLobbyChat(myPlayerName, text);
  sfx('step');
  lobbyChatInput.value = '';

  const msgPayload = {
    type: 'lobby_chat' as const,
    sender: myPlayerName,
    text,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  if (isOnlineHost()) broadcastMessage(msgPayload);
  else if (isOnlineClient()) sendToHost(msgPayload);
});

document.getElementById('lobby-btn-copy-link')?.addEventListener('click', () => {
  const linkInput = document.getElementById('lobby-link-copy-val') as HTMLInputElement;
  const url = linkInput?.value || window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    toast('📋 Room invite link copied! Share with friends.', 'emerald');
    sfx('cash');
  }).catch(() => {
    prompt('Copy this link to invite friends:', url);
  });
});

document.getElementById('lobby-btn-leave')?.addEventListener('click', () => {
  stopTurnTimer();
  disconnectOnline();
  currentLobbyPlayers = [];
  showView('home');
});

document.getElementById('btn-leave-game')?.addEventListener('click', () => {
  if (confirm('Leave match and return to Home? Your match progress will be lost.')) {
    stopTurnTimer();
    disconnectOnline();
    S = null;
    showView('home');
  }
});

document.getElementById('brand-link')?.addEventListener('click', () => {
  if (S) {
    if (confirm('Exit current match to Home?')) {
      stopTurnTimer();
      disconnectOnline();
      S = null;
      showView('home');
    }
  } else {
    stopTurnTimer();
    disconnectOnline();
    showView('home');
  }
});

// ─── Attach Home Controls ─────────────────────────────────────────────────

document.querySelectorAll<HTMLButtonElement>('#home-token-selector .token-pill').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#home-token-selector .token-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    myTokenKey = (btn.dataset.token || 'tuktuk') as TokenKey;
    sfx('click');
  });
});

document.getElementById('home-btn-create-room')?.addEventListener('click', () => {
  void handleCreateRoom();
});

document.getElementById('home-btn-join-room')?.addEventListener('click', () => {
  void handleJoinRoom();
});

document.getElementById('home-btn-start-solo')?.addEventListener('click', () => {
  ensureAudio();
  sfx('click');

  const pCount = parseInt((document.getElementById('home-solo-players') as HTMLSelectElement).value, 10) || 4;
  const rounds = parseInt((document.getElementById('home-solo-rounds') as HTMLSelectElement).value, 10) || 25;
  const cash = parseInt((document.getElementById('home-solo-cash') as HTMLSelectElement).value, 10) || 30000;
  const hostName = (document.getElementById('home-host-name') as HTMLInputElement)?.value.trim() || 'Navindu';

  const botNames = ['Sunil (Tuk Tycoon)', 'Anura (Tea Planter)', 'Kamal (Harbor Mogul)', 'Nimal (Gem Baron)', 'Priyani (Kandy Dancer)', 'Rohan (Train King)'];
  const tokenKeys: TokenKey[] = ['elephant', 'dancer', 'train', 'gem', 'ship', 'tuktuk'];

  myPlayerId = 0;
  setLocalPlayerId(0);

  const players: PlayerSetup[] = [{
    name: hostName,
    kind: 'human',
    persona: 'opportunist',
    tokenKey: myTokenKey,
  }];

  for (let i = 1; i < pCount; i++) {
    players.push({
      name: botNames[(i - 1) % botNames.length],
      kind: 'bot',
      persona: ['aggressive', 'conservative', 'risk', 'opportunist'][i % 4] as any,
      tokenKey: tokenKeys[(i - 1) % tokenKeys.length],
    });
  }

  S = createGame({
    players,
    seed: (Date.now() % 2147483647) | 0,
    maxRounds: rounds,
    startingCash: cash,
  });

  showView('game');
  render(S, handlers, myPlayerId);
  resetTurnTimer();
  scheduleBot();
  toast('🎲 Solo match vs AI started!', 'emerald');
});

// ─── Rules Modal Controller ───────────────────────────────────────────────

function initRulesModal(): void {
  const modal = document.getElementById('modal-rules');
  const openBtn = document.getElementById('btn-open-rules');
  const closeBtn = document.getElementById('btn-close-rules');
  const prevBtn = document.getElementById('rules-prev-btn') as HTMLButtonElement | null;
  const nextBtn = document.getElementById('rules-next-btn') as HTMLButtonElement | null;
  const counterText = document.getElementById('rules-counter-text');
  const tabBtns = document.querySelectorAll<HTMLButtonElement>('.rules-tab-btn');
  const slides = document.querySelectorAll<HTMLElement>('.rules-slide');

  let currentSlide = 0;

  function setSlide(idx: number): void {
    currentSlide = Math.max(0, Math.min(2, idx));
    slides.forEach((sl, i) => sl.classList.toggle('active', i === currentSlide));
    tabBtns.forEach((tb, i) => tb.classList.toggle('active', i === currentSlide));
    if (counterText) counterText.textContent = `Step ${currentSlide + 1} of 3`;
    if (prevBtn) prevBtn.disabled = currentSlide === 0;
    if (nextBtn) {
      nextBtn.textContent = currentSlide === 2 ? 'Done / Play! 🚀' : 'Next Step ▶';
    }
  }

  function openRules(): void {
    if (!modal) return;
    sfx('cardflip');
    setSlide(0);
    modal.classList.remove('hidden');
  }

  function closeRules(): void {
    if (!modal) return;
    modal.classList.add('hidden');
  }

  openBtn?.addEventListener('click', openRules);
  closeBtn?.addEventListener('click', closeRules);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeRules();
  });

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.slide || '0');
      sfx('step');
      setSlide(idx);
    });
  });

  prevBtn?.addEventListener('click', () => {
    if (currentSlide > 0) {
      sfx('step');
      setSlide(currentSlide - 1);
    }
  });

  nextBtn?.addEventListener('click', () => {
    if (currentSlide < 2) {
      sfx('step');
      setSlide(currentSlide + 1);
    } else {
      closeRules();
    }
  });
}

// ─── Initialization on Page Load ──────────────────────────────────────────

refreshHeader();
initRulesModal();
initMusicFromPreferences();

const urlParams = new URLSearchParams(window.location.search);
const roomParam = urlParams.get('room');
if (roomParam) {
  const joinInput = document.getElementById('home-room-code') as HTMLInputElement;
  if (joinInput) joinInput.value = roomParam;
  toast(`Invite detected for room ${roomParam}! Click "Join Room" to enter.`, 'amber');
}

showView('home');
