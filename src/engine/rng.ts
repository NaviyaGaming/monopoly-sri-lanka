// Seeded RNG (mulberry32). State lives inside GameState so matches are
// deterministic and replayable from a single seed number.
import type { GameState } from './types';

export function seedRng(seed: number): number {
  return seed | 0;
}

export function nextRand(s: GameState): number {
  s.rngState = (s.rngState + 0x6d2b79f5) | 0;
  let t = s.rngState;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

export function randInt(s: GameState, n: number): number {
  return Math.floor(nextRand(s) * n);
}

export function rollDice(s: GameState): [number, number] {
  return [1 + randInt(s, 6), 1 + randInt(s, 6)];
}

export function shuffle<T>(s: GameState, arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = randInt(s, i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
