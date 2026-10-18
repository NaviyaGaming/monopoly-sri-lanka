// ─── Procedural Ceylon Ambient Soundscape & Music Synthesizer ─────────────
// Synthesizes relaxing Sri Lankan island vibes (ocean breeze + acoustic plucked melodies)
// using 100% native Web Audio API (zero audio files needed, zero loading delay).

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let breezeGain: GainNode | null = null;
let isPlaying = false;
let musicTimer: number | null = null;
let currentVolume = 0.35;

// Sri Lankan serene pentatonic notes (frequencies in Hz)
const NOTES = [
  261.63, // C4 (Sa)
  293.66, // D4 (Ri)
  329.63, // E4 (Ga)
  392.00, // G4 (Pa)
  440.00, // A4 (Dha)
  523.25, // C5 (Sa')
  587.33, // D5 (Ri')
  659.25, // E5 (Ga')
];

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioCtx = new AudioContextClass();
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(currentVolume, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);
  }
  if (audioCtx.state === 'suspended') {
    void audioCtx.resume();
  }
  return audioCtx;
}

// ── Tropical Ocean Breeze Generator ──
function startBreeze(ctx: AudioContext): void {
  try {
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    // Pink noise approximation
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2) * 0.07;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter to simulate ocean surf
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(380, ctx.currentTime);

    // LFO to slowly swell and recede like waves
    const lfo = ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // ~8s wave period
    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(180, ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    breezeGain = ctx.createGain();
    breezeGain.gain.setValueAtTime(0.18, ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(breezeGain);
    breezeGain.connect(masterGain!);

    whiteNoise.start();
    lfo.start();
  } catch {}
}

// ── Gentle Plucked Ceylon Melodic Notes ──
function playPluckNote(freq: number, time: number): void {
  if (!audioCtx || !masterGain || !isPlaying) return;
  try {
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const noteGain = audioCtx.createGain();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, time);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 1.002, time); // warm chorus detune

    // Pluck envelope: sharp attack, smooth warm decay
    noteGain.gain.setValueAtTime(0.0001, time);
    noteGain.gain.linearRampToValueAtTime(0.14, time + 0.035);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, time + 2.4);

    osc1.connect(noteGain);
    osc2.connect(noteGain);
    noteGain.connect(masterGain);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + 2.5);
    osc2.stop(time + 2.5);
  } catch {}
}

// ── Relaxed Melodic Sequence Loop ──
function scheduleNextMotif(): void {
  if (!isPlaying || !audioCtx) return;
  const now = audioCtx.currentTime;

  // Pick 3-4 notes from the serene scale to arpeggiate
  const count = 3 + Math.floor(Math.random() * 2);
  let stepTime = 0.28 + Math.random() * 0.1;

  for (let i = 0; i < count; i++) {
    const note = NOTES[Math.floor(Math.random() * NOTES.length)];
    playPluckNote(note, now + i * stepTime);
  }

  // Next motif in 2.2 to 4.2 seconds
  const delay = 2200 + Math.random() * 2000;
  musicTimer = window.setTimeout(scheduleNextMotif, delay);
}

// ─── Public API ───────────────────────────────────────────────────────────

export function isMusicPlaying(): boolean {
  return isPlaying;
}

export function startMusic(): void {
  if (isPlaying) return;
  try {
    const ctx = getAudioContext();
    isPlaying = true;
    localStorage.setItem('pola_music_enabled', '1');
    startBreeze(ctx);
    scheduleNextMotif();
  } catch {}
}

export function stopMusic(): void {
  isPlaying = false;
  localStorage.setItem('pola_music_enabled', '0');
  if (musicTimer !== null) {
    clearTimeout(musicTimer);
    musicTimer = null;
  }
  if (breezeGain && audioCtx) {
    try {
      breezeGain.gain.setValueAtTime(0, audioCtx.currentTime);
    } catch {}
  }
}

export function toggleMusic(): boolean {
  if (isPlaying) {
    stopMusic();
    return false;
  } else {
    startMusic();
    return true;
  }
}

export function setMusicVolume(vol: number): void {
  currentVolume = Math.max(0, Math.min(1, vol));
  if (masterGain && audioCtx) {
    masterGain.gain.setValueAtTime(currentVolume, audioCtx.currentTime);
  }
}

export function initMusicFromPreferences(): void {
  const pref = localStorage.getItem('pola_music_enabled');
  if (pref === '1') {
    // Will start on first user interaction due to browser autoplay policies
    const resumeOnTouch = () => {
      startMusic();
      document.removeEventListener('pointerdown', resumeOnTouch);
    };
    document.addEventListener('pointerdown', resumeOnTouch, { once: true });
  }
}
