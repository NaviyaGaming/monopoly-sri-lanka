// ─── Serendib Tycoon driver: setup, animation pipeline, bot pacing ───────
// The engine resolves instantly and deterministically; the driver then plays
// the cosmetic sequence — dice tumble, 3D token hop with character sound,
// popups, floaters — before re-rendering. One rules path for everyone.

import './ui/styles.css';
import type { GameState, LogEntry, PlayerSetup, TokenKey } from './engine/types';
import { PERSONAS, SEAT_COLORS, TOKENS } from './engine/config';
import {
  applyTrade, auctionBid, auctionPass, buyCurrent, buyShield, createGame,
  declineCurrent, doBuild, endTurn, expressTransit, maintainSquare, mortgageSquare,
  payBail, repairSquare, repayLoan, sellBuilding, takeLoan, takeTurnRoll,
  unmortgageSquare, validTrade,
} from './engine/engine';
import { botAct, botConsiderTrade, botToAct } from './engine/bots';
import { render, setActiveTab, showSetup, markLanded, setDiceClickHandler, type Handlers, type StartConfig } from './ui/render';
import { renderDice } from './ui/dice';
import { TOKEN_AVATARS } from './ui/tokens';
import { ensureAudio, floatCash, isMuted, popup, sfx, toast, toggleMute, tokenSfx } from './ui/fx';
import { setLang, t } from './ui/i18n';
import { createOnlineRoom, joinOnlineRoom, broadcastMessage, sendToHost, isOnlineHost, isOnlineClient } from './network/p2p';

let S: GameState | null = null;
let busy = false;
let fastMode = localStorage.getItem('st-fast') === '1';
const BOT_STEP_MS = 650;

interface Snapshot {
  actor: number;
  pos: number[];
  cash: number[];
  logLen: number;
  roll: [number, number] | null;
}

function snap(s: GameState): Snapshot {
  return {
    actor: s.current,
    pos: s.players.map(p => p.position),
    cash: s.players.map(p => p.cash),
    logLen: s.log.length,
    roll: s.lastRoll ? [...s.lastRoll] as [number, number] : null,
  };
}

async function perform(fn: (s: GameState) => void): Promise<void> {
  if (!S || busy || S.phase === 'gameOver') return;
  busy = true;
  try {
    const before = snap(S);
    fn(S);
    const s = S;
    const rolled = s.lastRoll !== null
      && (before.roll === null || s.lastRoll[0] !== before.roll[0] || s.lastRoll[1] !== before.roll[1]);

    if (rolled) {
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
      if (d !== 0) floatCash(i, d);
    });

    render(s, handlers);

    if (s.phase === 'gameOver' && s.winner !== null) sfx('win');
    // Human card popup pauses bot pacing until OK is clicked.
    if (s.cardJustDrawn && s.players[s.current].kind === 'human') return;
  } finally {
    busy = false;
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

// ─── Bot scheduling (pauses while a human card popup is open) ─────────────

function scheduleBot(): void {
  if (!S || busy || S.phase === 'gameOver') return;
  if (S.cardJustDrawn && S.players[S.current].kind === 'human') return;
  if (!botToAct(S)) return;
  window.setTimeout(async () => {
    if (!S || busy || S.phase === 'gameOver' || !botToAct(S)) return;
    await perform(s => botAct(s));
  }, fastMode ? 220 : BOT_STEP_MS);
}

// ─── Handlers ─────────────────────────────────────────────────────────────

const handlers: Handlers = {
  onRoll: () => void perform(s => takeTurnRoll(s)),
  onBail: () => void perform(s => payBail(s)),
  onBuy: () => void perform(s => { buyCurrent(s); }),
  onPass: () => void perform(s => declineCurrent(s)),
  onBid: (inc: number) => void perform(s => { auctionBid(s, inc); }),
  onWithdraw: () => void perform(s => auctionPass(s)),
  onEndTurn: () => void perform(s => { s.cardJustDrawn = null; endTurn(s); }),
  onBuild: (idx: number) => void perform(s => { doBuild(s, idx); }),
  onSellBuilding: (idx: number) => void perform(s => { sellBuilding(s, idx); }),
  onMortgage: (idx: number) => void perform(s => { mortgageSquare(s, idx); }),
  onUnmortgage: (idx: number) => void perform(s => { unmortgageSquare(s, idx); }),
  onMaintain: (idx: number) => void perform(s => { maintainSquare(s, idx); }),
  onShield: (idx: number, tier: 1 | 2 | 3) => void perform(s => { buyShield(s, idx, tier); }),
  onRepair: (idx: number) => void perform(s => { repairSquare(s, idx); }),
  onLoan: (amount: number) => void perform(s => { takeLoan(s, amount); }),
  onRepay: (amount: number) => void perform(s => { repayLoan(s, amount); }),
  onTransit: (kind: 'unowned' | 'bank') => void perform(s => expressTransit(s, kind)),
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
      // Human partners see the accept/decline modal via pendingTrade state.
    });
  },
  onTradeAccept: () => void perform(s => {
    if (!s.pendingTrade) return;
    applyTrade(s, s.pendingTrade);
    s.pendingTrade = null;
  }),
  onTradeDecline: () => void perform(s => { s.pendingTrade = null; }),
  onCardOk: () => void perform(s => {
    sfx('cardflip');
    s.cardJustDrawn = null;
  }),
  onRestart: () => start(),
  onSelectSquare: () => {},
  onTab: () => {},
  onEmote: (emoji: string) => {
    if (!S) return;
    sfx('emote');
    const p = S.players[S.current];
    popup(`${p.name}: ${emoji}`, 'reaction', 'amber');
    toast(`${p.name} reacted with ${emoji}`, 'emerald');
  },
};

setDiceClickHandler(() => {
  if (S && S.phase === 'preRoll' && S.players[S.current].kind === 'human' && !busy) {
    void perform(s => takeTurnRoll(s));
  }
});

// ─── Header controls: language, mute, tabs ────────────────────────────────

function refreshHeader(): void {
  const muteBtn = document.getElementById('btn-mute')!;
  muteBtn.textContent = isMuted() ? '🔇' : '🔊';
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
    if (S) render(S, handlers);
  });
}
document.getElementById('btn-mute')!.addEventListener('click', () => { toggleMute(); refreshHeader(); });
document.addEventListener('pointerdown', ensureAudio);

for (const btn of document.querySelectorAll<HTMLButtonElement>('.tab-trigger')) {
  btn.addEventListener('click', () => {
    setActiveTab(btn.id.replace('tab-btn-', ''));
    if (S) render(S, handlers);
  });
}

// ─── Live Chat & Activity Stream (Richup Style) ───────────────────────────

function appendChatMessage(sender: string, text: string, isSelf = false, isSystem = false): void {
  const container = document.getElementById('live-chat-messages');
  if (!container) return;
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${isSystem ? 'system' : isSelf ? 'self' : 'other'}`;
  msgDiv.innerHTML = isSystem
    ? `<span class="msg-author">${sender}:</span> ${text}`
    : `<span class="msg-author">${sender}:</span> ${text}`;
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

refreshHeader();

// ─── Game start ───────────────────────────────────────────────────────────

function lineupPlayers(cfg: StartConfig): PlayerSetup[] {
  const personas: (keyof typeof PERSONAS)[] = ['aggressive', 'conservative', 'risk', 'opportunist', 'aggressive', 'conservative'];
  const count = cfg.playerCount || cfg.names.length || 4;

  return Array.from({ length: count }, (_, i) => {
    const isHuman =
      cfg.lineup === 'allhumans' ? true :
      cfg.lineup === 'allbots' ? false :
      i === 0; // 1human mode

    const name = cfg.names[i] || `Player ${i + 1}`;
    const tokenKey = (cfg.tokens[i] in TOKENS ? cfg.tokens[i] : Object.keys(TOKENS)[i % Object.keys(TOKENS).length]) as TokenKey;

    return {
      name,
      kind: isHuman ? 'human' : 'bot',
      persona: personas[i % personas.length],
      tokenKey,
    };
  });
}

function start(): void {
  S = null;
  showSetup((cfg: StartConfig) => {
    ensureAudio();
    sfx('click');
    S = createGame({
      players: lineupPlayers(cfg),
      seed: (Date.now() % 2147483647) | 0,
      maxRounds: cfg.maxRounds,
    });
    if (cfg.onlineAction === 'create') {
      const hostName = cfg.names[0] || 'Host';
      void createOnlineRoom(
        hostName,
        (conn, data) => {
          if (!S) return;
          sfx('cash');
          toast(`👋 ${data.name} joined your room!`, 'emerald');
          const newPlayerId = S.players.length;
          S.players.push({
            id: newPlayerId,
            name: data.name,
            kind: 'human',
            persona: 'aggressive',
            tokenKey: (data.tokenKey in TOKENS ? data.tokenKey : 'tuktuk') as TokenKey,
            color: SEAT_COLORS[newPlayerId % SEAT_COLORS.length],
            cash: 30000,
            position: 0,
            inJail: false,
            jailTurns: 0,
            bankrupt: false,
            loan: 0,
            loanRoundsLeft: 0,
          });
          conn.send({ type: 'welcome', playerId: newPlayerId, state: S });
          broadcastMessage({ type: 'state', state: S });
          render(S, handlers);
        },
        (msg) => {
          if (msg.type === 'action' && S) {
            // Client triggered an engine action
            const actionFn = (handlers as any)[msg.fnName];
            if (typeof actionFn === 'function') actionFn(...msg.args);
          } else if (msg.type === 'emote' && S) {
            sfx('emote');
            popup(`${msg.sender}: ${msg.emoji}`, 'reaction', 'amber');
          } else if (msg.type === 'chat') {
            appendChatMessage(msg.sender, msg.text, false);
            broadcastMessage(msg); // re-broadcast to other players
          }
        }
      ).then((roomId) => {
        popup(`Room Created! Code: ${roomId}`, 'share with friends', 'emerald');
        const shareUrl = `${window.location.origin}${window.location.pathname}?room=${roomId}`;
        appendChatMessage('System', `Room ${roomId} created! Share this link with your friends: ${shareUrl}`, false, true);
      });
    } else if (cfg.onlineAction === 'join' && cfg.onlineRoomCode) {
      toast(`Connecting to room ${cfg.onlineRoomCode}...`, 'amber');
      void joinOnlineRoom(
        cfg.onlineRoomCode,
        cfg.names[0] || 'Player',
        cfg.tokens[0] || 'dancer',
        (msg) => {
          if (msg.type === 'welcome') {
            sfx('fanfare');
            toast(`Connected to ${cfg.onlineRoomCode}!`, 'emerald');
            S = msg.state;
            render(S, handlers);
            appendChatMessage('System', `Connected to room ${cfg.onlineRoomCode}!`, false, true);
          } else if (msg.type === 'state') {
            S = msg.state;
            render(S, handlers);
          } else if (msg.type === 'emote') {
            sfx('emote');
            popup(`${msg.sender}: ${msg.emoji}`, 'reaction', 'amber');
          } else if (msg.type === 'chat') {
            appendChatMessage(msg.sender, msg.text, false);
          }
        }
      );
    }

    render(S, handlers);
    scheduleBot();
  });
}

document.getElementById('btn-rooms')?.addEventListener('click', () => {
  start();
});

start();
