// ─── Core types for the Serendib Tycoon engine ───────────────────────────
// Pure TypeScript: no DOM, no network. All randomness flows through the
// seeded RNG in game state, so any match replays exactly from its seed.

export type Persona = 'aggressive' | 'conservative' | 'risk' | 'opportunist';
export type PlayerKind = 'human' | 'bot';
export type TokenKey = 'tuktuk' | 'dancer' | 'elephant' | 'train' | 'gem' | 'ship';
export type Lang = 'en' | 'si' | 'ta';

export interface Player {
  id: number;
  name: string;
  kind: PlayerKind;
  persona: Persona;
  tokenKey: TokenKey;
  color: string;
  cash: number;
  position: number;
  inJail: boolean;
  jailTurns: number;
  bankrupt: boolean;
  loan: number;           // outstanding payback (principal + flat interest)
  loanRoundsLeft: number; // rounds until maturity (8 at issue)
}

export type GroupId =
  | 'brown' | 'lightblue' | 'pink' | 'orange'
  | 'red' | 'yellow' | 'green' | 'darkblue';

export type SquareKind =
  | 'start' | 'property' | 'railway' | 'utility' | 'tax'
  | 'community' | 'event' | 'jail' | 'poya' | 'gotojail'
  | 'bank' | 'insurance';

export interface SquareDef {
  index: number;
  kind: SquareKind;
  name: string;
  short: string;
  icon?: string;
  desc?: string;
  group?: GroupId;
  price?: number;
  rents?: number[];       // [base, 1h, 2h, 3h, 4h, hotel]
  buildCost?: number;
  mortgageValue?: number;
  taxAmount?: number;
  coastal?: boolean;
}

export interface SquareState {
  owner: number | null;
  buildings: number;      // 0..4 houses, 5 = boutique hotel
  shield: number;         // 0 none, 1 basic, 2 comprehensive, 3 business interruption
  damaged: boolean;       // storm/fire hit without shield; no rent until repaired
  loanLocked: boolean;    // pledged as loan collateral; cannot be traded
  mortgaged: boolean;     // mortgaged to bank; cannot collect rent or build
  condition: number;      // 0..100 condition rating (Rule-LK 25-26)
}

export type CycleId = 'stable' | 'tourism' | 'inflation' | 'monsoon' | 'fuel';

export interface CycleDef {
  id: CycleId;
  name: string;
  icon: string;
  desc: string;
  loanRateMod: number;
}

export type Phase =
  | 'preRoll'      // waiting for current player to roll (bail optional if jailed)
  | 'decideBuy'    // landed on unowned purchasable square
  | 'auction'      // auction in progress
  | 'postRoll'     // action phase: build/shield/loan/repair/transit/trade, then end turn
  | 'gameOver';

export interface AuctionState {
  square: number;
  listPrice: number;
  opening: number;
  currentBid: number;
  leader: number | null;
  participants: number[];
  turn: number;
}

export interface LogEntry {
  round: number;
  text: string;
  kind: 'info' | 'money' | 'danger' | 'event' | 'auction' | 'cycle';
}

export interface TradeOffer {
  fromId: number;
  toId: number;
  giveSquare: number | null;
  giveCash: number;
  wantSquare: number | null;
  wantCash: number;
}

export interface GameState {
  rngState: number;
  round: number;
  maxRounds: number;
  poyaPool: number;
  cycleIndex: number;
  cycleRoundsLeft: number;
  players: Player[];
  squares: SquareState[];
  current: number;
  phase: Phase;
  communityDeck: number[];
  headlineDeck: number[];
  auction: AuctionState | null;
  pendingBuy: number | null;
  lastRoll: [number, number] | null;
  totalRolls?: number;
  selectedSquare: number;
  cardJustDrawn: { deck: 'community' | 'headline'; index: number; delta: number } | null;
  pendingTrade: TradeOffer | null; // awaiting human partner decision (pass & play)
  consecutiveDoubles: number;      // 0..2, 3rd sends to CID Inquiry (Jail)
  hasBonusRoll: boolean;           // rolled doubles, can roll again
  log: LogEntry[];
  winner: number | null;
  matchStats?: {
    rentCollected: number[];
    rentPaid: number[];
    loansTaken: number[];
    doublesRolled: number[];
    shieldsBought: number[];
  };
  netWorthHistory?: { round: number; values: number[] }[];
}

export interface PlayerSetup {
  name: string;
  kind: PlayerKind;
  persona: Persona;
  tokenKey: TokenKey;
}
