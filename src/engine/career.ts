// ─── Player Career Stats & Tycoon Ranks ──────────────────────────────────
// Persists lifetime match performance in localStorage and assigns prestige ranks.

export interface CareerMatchRecord {
  date: string;
  won: boolean;
  netWorth: number;
  rentCollected: number;
}

export interface CareerData {
  matchesPlayed: number;
  matchesWon: number;
  totalRentCollected: number;
  highestNetWorth: number;
  history: CareerMatchRecord[];
}

export interface TycoonRank {
  level: number;
  title: string;
  badge: string;
  color: string;
  borderClass: string;
  desc: string;
}

const STORAGE_KEY = 'pola_career_v1';

export function loadCareer(): CareerData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        matchesPlayed: parsed.matchesPlayed || 0,
        matchesWon: parsed.matchesWon || 0,
        totalRentCollected: parsed.totalRentCollected || 0,
        highestNetWorth: parsed.highestNetWorth || 0,
        history: Array.isArray(parsed.history) ? parsed.history : [],
      };
    }
  } catch {}
  return {
    matchesPlayed: 0,
    matchesWon: 0,
    totalRentCollected: 0,
    highestNetWorth: 0,
    history: [],
  };
}

export function saveCareer(data: CareerData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

export function recordMatchResult(won: boolean, netWorth: number, rentCollected: number): CareerData {
  const current = loadCareer();
  current.matchesPlayed++;
  if (won) current.matchesWon++;
  current.totalRentCollected += rentCollected;
  if (netWorth > current.highestNetWorth) {
    current.highestNetWorth = netWorth;
  }
  current.history.unshift({
    date: new Date().toLocaleDateString(),
    won,
    netWorth,
    rentCollected,
  });
  if (current.history.length > 20) {
    current.history = current.history.slice(0, 20);
  }
  saveCareer(current);
  return current;
}

export function getTycoonRank(career: CareerData): TycoonRank {
  const wins = career.matchesWon;
  if (wins >= 10) {
    return {
      level: 4,
      title: 'Island Governor',
      badge: '👑',
      color: '#c084fc',
      borderClass: 'rank-governor',
      desc: 'Master of Sri Lanka’s greatest monopolies and financial empire.',
    };
  }
  if (wins >= 5) {
    return {
      level: 3,
      title: 'Colombo Tycoon',
      badge: '🏛️',
      color: '#fbbf24',
      borderClass: 'rank-tycoon',
      desc: 'Feared district monopolist across the commercial capital.',
    };
  }
  if (wins >= 2) {
    return {
      level: 2,
      title: 'Village Landlord',
      badge: '🏠',
      color: '#38bdf8',
      borderClass: 'rank-landlord',
      desc: 'Seasoned property owner with expanding island holdings.',
    };
  }
  return {
    level: 1,
    title: 'Island Apprentice',
    badge: '🌱',
    color: '#34d399',
    borderClass: 'rank-apprentice',
    desc: 'Beginning the journey across the 40 iconic districts.',
  };
}
