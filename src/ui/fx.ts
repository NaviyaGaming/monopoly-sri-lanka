// ─── Juice: synthesized SFX voices, center popups, toasts, confetti ──────
// All sounds generated live with WebAudio oscillators — no assets. Voice
// design ported from the author's prototype (tuktuk horn, geta bera drum,
// perahera elephant, Yal Devi whistle, gavel, fanfare).

let audio: AudioContext | null = null;
let muted = localStorage.getItem('st-muted') === '1';

export function isMuted(): boolean {
  return muted;
}

export function toggleMute(): boolean {
  muted = !muted;
  localStorage.setItem('st-muted', muted ? '1' : '0');
  return muted;
}

export function ensureAudio(): void {
  try {
    if (!audio) audio = new AudioContext();
    if (audio.state === 'suspended') void audio.resume();
  } catch {
    audio = null;
  }
}

function voice(
  oscType: OscillatorType, freqStart: number, freqEnd: number,
  at: number, dur: number, peak: number,
): void {
  if (!audio || muted) return;
  const t0 = audio.currentTime + at;
  const o = audio.createOscillator();
  const g = audio.createGain();
  o.type = oscType;
  o.frequency.setValueAtTime(freqStart, t0);
  if (freqEnd !== freqStart) o.frequency.exponentialRampToValueAtTime(Math.max(20, freqEnd), t0 + dur);
  g.gain.setValueAtTime(0.001, t0);
  g.gain.linearRampToValueAtTime(peak, t0 + 0.012);
  g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
  o.connect(g);
  g.connect(audio.destination);
  o.start(t0);
  o.stop(t0 + dur + 0.02);
}

export type SfxName =
  | 'dice' | 'step' | 'tuktuk' | 'dancer' | 'elephant' | 'train'
  | 'buy' | 'cash' | 'gavel' | 'fanfare' | 'alert' | 'click' | 'win'
  | 'cardflip' | 'tuktuk_ride' | 'emote' | 'gem' | 'tick';

export function sfx(name: SfxName): void {
  if (!audio || muted) return;
  switch (name) {
    case 'tick': // countdown tick
      voice('sine', 920, 920, 0, 0.035, 0.05);
      break;
    case 'dice': // multi-clack tumble
      [0, 0.06, 0.13, 0.21, 0.3, 0.42].forEach((offset, i) => {
        voice('triangle', 220 + i * 55, 480 + i * 40, offset, 0.055, 0.11);
        voice('square', 140 + i * 25, 95, offset, 0.04, 0.04);
      });
      break;
    case 'step': // token hop footstep
      voice('sine', 340, 590, 0, 0.065, 0.09);
      break;
    case 'tuktuk': // classic double beep-beep horn
      voice('sawtooth', 440, 465, 0, 0.11, 0.09);
      voice('square', 880, 910, 0, 0.11, 0.05);
      voice('sawtooth', 445, 470, 0.14, 0.15, 0.1);
      voice('square', 890, 920, 0.14, 0.15, 0.05);
      break;
    case 'dancer': // geta bera drum + jingle
      voice('triangle', 145, 78, 0, 0.14, 0.16);
      voice('triangle', 195, 110, 0.12, 0.16, 0.14);
      voice('sine', 1320, 1760, 0.12, 0.12, 0.05);
      break;
    case 'elephant': // perahera brass/bell chime
      voice('sawtooth', 260, 390, 0, 0.24, 0.09);
      voice('sine', 1046.5, 1046.5, 0.05, 0.28, 0.08);
      break;
    case 'train': // Yal Devi dual-tone whistle
      voice('triangle', 587.33, 587.33, 0, 0.28, 0.1);
      voice('triangle', 783.99, 783.99, 0, 0.28, 0.1);
      voice('sine', 880, 920, 0.08, 0.24, 0.06);
      break;
    case 'buy': // major triad arpeggio
      voice('sine', 523.25, 523.25, 0, 0.18, 0.13);
      voice('sine', 659.25, 659.25, 0.07, 0.2, 0.13);
      voice('sine', 783.99, 783.99, 0.14, 0.24, 0.14);
      voice('triangle', 1046.5, 1046.5, 0.21, 0.3, 0.12);
      break;
    case 'cash': // register cha-ching
      voice('sine', 987.77, 987.77, 0, 0.09, 0.12);
      voice('sine', 1318.51, 1318.51, 0.08, 0.26, 0.14);
      voice('triangle', 2637.02, 2637.02, 0.08, 0.18, 0.05);
      break;
    case 'gavel': // auction knock
      voice('triangle', 190, 68, 0, 0.09, 0.16);
      voice('square', 420, 140, 0, 0.05, 0.07);
      break;
    case 'cardflip': // paper whoosh
      voice('sine', 480, 240, 0, 0.12, 0.08);
      voice('triangle', 360, 520, 0.04, 0.14, 0.09);
      break;
    case 'tuktuk_ride': // engine vroom
      voice('sawtooth', 110, 180, 0, 0.35, 0.14);
      voice('square', 220, 360, 0.05, 0.32, 0.08);
      break;
    case 'emote': // bubble pop
      voice('sine', 587, 880, 0, 0.08, 0.12);
      break;
    case 'gem': // crystal shimmer
      [784, 988, 1175, 1568, 1976].forEach((f, i) => voice('sine', f, f, i * 0.05, 0.22, 0.08));
      break;
    case 'fanfare':
      [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => voice('triangle', f, f, i * 0.08, 0.28, 0.13));
      break;
    case 'alert': // siren
      voice('sawtooth', 260, 145, 0, 0.28, 0.12);
      voice('sawtooth', 180, 110, 0.12, 0.24, 0.1);
      break;
    case 'click':
      voice('sine', 660, 660, 0, 0.05, 0.05);
      break;
    case 'win':
      [523.25, 659.25, 783.99, 1046.5, 1318.5, 1568].forEach((f, i) => voice('triangle', f, f, i * 0.12, 0.3, 0.08));
      break;
  }
}

/** Play the character sound of a player's 3D token. */
export function tokenSfx(sound: 'tuktuk' | 'dancer' | 'elephant' | 'train'): void {
  sfx(sound);
}

/** Flying banknotes across the board for juice when money changes hands */
export function flyingCash(amount: number, isGain = true): void {
  const board = document.getElementById('board-grid') || document.body;
  const count = Math.min(7, Math.max(3, Math.ceil(Math.abs(amount) / 1000)));

  for (let i = 0; i < count; i++) {
    const bill = document.createElement('div');
    bill.className = `flying-bill ${isGain ? 'gain' : 'loss'}`;
    bill.innerHTML = `💵 <b>${isGain ? '+' : '−'}LKR</b>`;
    bill.style.left = `${45 + (Math.random() - 0.5) * 16}%`;
    bill.style.top = `${50 + (Math.random() - 0.5) * 14}%`;
    bill.style.setProperty('--dx', `${(Math.random() - 0.5) * 240}px`);
    bill.style.setProperty('--dy', `${isGain ? -(70 + Math.random() * 110) : (70 + Math.random() * 110)}px`);
    bill.style.setProperty('--rot', `${(Math.random() - 0.5) * 50}deg`);
    board.appendChild(bill);
    setTimeout(() => bill.remove(), 1250);
  }
}

// ─── Center-stage floating popups ─────────────────────────────────────────

export function popup(label: string, sub = '', tone: 'amber' | 'emerald' | 'rose' = 'amber'): void {
  const holder = document.getElementById('popups');
  if (!holder) return;
  const el = document.createElement('div');
  el.className = `floating-delta tone-${tone}`;
  el.innerHTML = `<span>${label}</span>${sub ? `<span class="sub">• ${sub}</span>` : ''}`;
  holder.appendChild(el);
  setTimeout(() => el.remove(), 2100);
}

// ─── Toasts ───────────────────────────────────────────────────────────────

export function toast(msg: string, tone: 'amber' | 'emerald' | 'rose' = 'emerald'): void {
  const holder = document.getElementById('toast-container');
  if (!holder) return;
  const el = document.createElement('div');
  el.className = `toast tone-${tone}`;
  el.textContent = msg;
  holder.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    setTimeout(() => el.remove(), 320);
  }, 3200);
}

// ─── Money floaters on player cards ───────────────────────────────────────

export function floatCash(playerIndex: number, delta: number): void {
  const cards = document.querySelectorAll<HTMLElement>('#players-scoreboard .pcard');
  const card = cards[playerIndex];
  if (!card || delta === 0) return;
  const span = document.createElement('span');
  span.className = `floater ${delta > 0 ? 'pos' : 'neg'}`;
  span.textContent = `${delta > 0 ? '+' : '−'}LKR ${Math.abs(delta).toLocaleString('en-US')}`;
  card.appendChild(span);
  setTimeout(() => span.remove(), 1500);
}

// ─── Confetti ─────────────────────────────────────────────────────────────

const CONFETTI_COLORS = ['#fbbf24', '#10b981', '#0ea5e9', '#f43f5e', '#a855f7'];

export function confetti(container: HTMLElement, count = 90): void {
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetto';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    piece.style.width = `${6 + Math.random() * 5}px`;
    piece.style.height = `${10 + Math.random() * 6}px`;
    piece.style.animationDuration = `${2.2 + Math.random() * 1.6}s`;
    piece.style.animationDelay = `${Math.random() * 1.2}s`;
    piece.style.setProperty('--dx', `${(Math.random() - 0.5) * 260}px`);
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 5200);
  }
}
