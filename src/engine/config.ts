// ─── Serendib Tycoon static data: board, groups, cycles, cards ───────────
// Recreated from the author's "Serendib Tycoon: Island Empire" design
// (commercial prototype): 25-round sprints, macro-economic cycles, regional
// monopoly perks, flat-rate loans, one-time shields, Poya welfare pool,
// express transit and trilingual localisation.

import type { CycleDef, GroupId, Persona, SquareDef, TokenKey } from './types';

export const BOARD_SIZE = 40;
export const START_CASH = 30_000;
export const START_BONUS = 3_000;      // Avurudu Start (3,450 during inflation)
export const TEA_DIVIDEND = 1_000;     // Dark Blue monopoly perk on passing Start
export const BAIL = 500;               // paid into the Poya Pool
export const REPAIR_COST = 800;
export const EXPRESS_FARE = 500;
export const EXPRESS_ORANGE_DIVIDEND = 400;
export const POYA_FESTIVAL_BONUS = 1_000;
export const POYA_POOL_SHARE = 0.5;
export const MAX_JAIL_TURNS = 3;
export const LOAN_DURATION = 8;
export const LOAN_RATE_ON_SQUARE = 10; // Bank of Serendib preferential rate
export const LOAN_RATE_REMOTE = 15;
export const LOAN_RATE_MIN = 5;
export const LOAN_COLLATERAL_RATIO = 0.75;
export const CYCLE_LENGTH = 5;
export const COMPREHENSIVE_CLAIM = 1_500;

export interface GroupDef {
  id: GroupId;
  name: string;
  color: string;
  perk: string;
}

export const GROUPS: Record<GroupId, GroupDef> = {
  brown:     { id: 'brown',     name: 'Old Colombo Trade',     color: '#92400e', perk: '+20% base rent & +LKR 500 on Community Fund cards.' },
  lightblue: { id: 'lightblue', name: 'Coastal Commuter Line', color: '#38bdf8', perk: '+25% rent when owner also holds at least 1 Railway Station.' },
  pink:      { id: 'pink',      name: 'Suburban Tech Belt',    color: '#ec4899', perk: 'House & Hotel construction costs 20% less.' },
  orange:    { id: 'orange',    name: 'Airport Corridor',      color: '#f97316', perk: 'Owner collects LKR 400 whenever any player uses Express Transit.' },
  red:       { id: 'red',       name: 'Kandy Cultural Hub',    color: '#ef4444', perk: '+50% bonus rent during Tourism & Export Boom cycles.' },
  yellow:    { id: 'yellow',    name: 'Southern Beach Resorts',color: '#eab308', perk: 'Immune to Monsoon rent drops; +40% hotel rent in Tourism Booms.' },
  green:     { id: 'green',     name: 'Northern & Eastern Ports', color: '#22c55e', perk: 'Property market valuation increases +25% once monopolized.' },
  darkblue:  { id: 'darkblue',  name: 'Hill Country & Capital Estates', color: '#3b82f6', perk: 'Generates +LKR 1,000 Tea Export dividend every time owner passes Start.' },
};

export const GROUP_KEYS = Object.keys(GROUPS) as GroupId[];

function prop(
  index: number, name: string, short: string, group: GroupId,
  price: number, rents: number[], buildCost: number, mortgage: number, coastal = false,
): SquareDef {
  return { index, kind: 'property', name, short, group, price, rents, buildCost, mortgageValue: mortgage, coastal };
}

export const RAIL_PRICE = 4_000;
export const RAIL_MORTGAGE = 2_000;
export const UTIL_PRICE = 3_000;
export const UTIL_MORTGAGE = 1_500;

export const BOARD: SquareDef[] = [
  { index: 0,  kind: 'start',     name: 'Avurudu Start', short: 'START', icon: '🎊', desc: 'Collect LKR 3,000 every time you pass or land here (plus Dark Blue Tea Dividends).' },
  prop(1, 'Pettah', 'Pettah', 'brown', 1500, [150, 300, 450, 750, 1050, 1500], 500, 750),
  { index: 2,  kind: 'community', name: 'Community Fund', short: 'Civic Fund', icon: '🪷', desc: 'Draw a Sri Lankan Community Development card.' },
  prop(3, 'Maradana', 'Maradana', 'brown', 1500, [180, 360, 540, 900, 1260, 1800], 500, 750),
  { index: 4,  kind: 'tax',       name: 'Inland Revenue Tax', short: 'Tax 1.5k', icon: '🏛️', taxAmount: 1500, desc: 'Pay LKR 1,500 into the Poya Day Holiday Welfare Pool.' },
  { index: 5,  kind: 'railway',   name: 'Colombo Fort Station', short: 'Fort Rail', icon: '🚂', price: RAIL_PRICE, mortgageValue: RAIL_MORTGAGE },
  prop(6, 'Bambalapitiya', 'Bambalapitiya', 'lightblue', 2500, [250, 500, 750, 1250, 1750, 2500], 750, 1250),
  { index: 7,  kind: 'event',     name: 'Island Headline', short: 'Headline', icon: '📰', desc: 'Draw a National Economic Event card.' },
  prop(8, 'Wellawatte', 'Wellawatte', 'lightblue', 2500, [250, 500, 750, 1250, 1750, 2500], 750, 1250),
  prop(9, 'Mount Lavinia', 'Mt Lavinia', 'lightblue', 2800, [300, 600, 900, 1500, 2100, 3000], 750, 1400, true),
  { index: 10, kind: 'jail',      name: 'CID Inquiry', short: 'CID / Visit', icon: '⚖️', desc: 'Just Visiting unless summoned. Jailed players can pay LKR 500 bail or roll doubles.' },
  prop(11, 'Nugegoda', 'Nugegoda', 'pink', 3500, [350, 700, 1050, 1750, 2450, 3500], 1000, 1750),
  { index: 12, kind: 'utility',   name: 'Ceylon Electricity Board (CEB)', short: 'CEB Power', icon: '⚡', price: UTIL_PRICE, mortgageValue: UTIL_MORTGAGE },
  prop(13, 'Maharagama', 'Maharagama', 'pink', 3500, [350, 700, 1050, 1750, 2450, 3500], 1000, 1750),
  prop(14, 'Kottawa', 'Kottawa', 'pink', 3800, [400, 800, 1200, 2000, 2800, 4000], 1000, 1900),
  { index: 15, kind: 'railway',   name: 'Kandy Railway Station', short: 'Kandy Rail', icon: '🚂', price: RAIL_PRICE, mortgageValue: RAIL_MORTGAGE },
  prop(16, 'Negombo', 'Negombo', 'orange', 4500, [450, 900, 1350, 2250, 3150, 4500], 1250, 2250, true),
  { index: 17, kind: 'insurance', name: 'Sri Lanka Insurance (SLIC)', short: 'SLIC Ins.', icon: '🛡️', desc: 'Purchase Disaster Insurance Policies (20% discount when standing here).' },
  prop(18, 'Katunayake', 'Katunayake', 'orange', 4500, [450, 900, 1350, 2250, 3150, 4500], 1250, 2250),
  prop(19, 'Ja-Ela', 'Ja-Ela', 'orange', 4800, [500, 1000, 1500, 2500, 3500, 5000], 1250, 2400),
  { index: 20, kind: 'poya',      name: 'Poya Day Holiday', short: 'Poya Pool', icon: '🌕', desc: 'Collect LKR 1,000 Festival Bonus + 50% of the Poya Welfare Pool!' },
  prop(21, 'Kandy City', 'Kandy City', 'red', 5500, [550, 1100, 1650, 2750, 3850, 5500], 1500, 2750),
  { index: 22, kind: 'event',     name: 'National Event Card', short: 'Natl Event', icon: '📰', desc: 'Draw a National Economic Event card.' },
  prop(23, 'Peradeniya', 'Peradeniya', 'red', 5500, [550, 1100, 1650, 2750, 3850, 5500], 1500, 2750),
  prop(24, 'Katugastota', 'Katugastota', 'red', 5800, [600, 1200, 1800, 3000, 4200, 6000], 1500, 2900),
  { index: 25, kind: 'railway',   name: 'Galle Railway Station', short: 'Galle Rail', icon: '🚂', price: RAIL_PRICE, mortgageValue: RAIL_MORTGAGE },
  prop(26, 'Galle Fort', 'Galle Fort', 'yellow', 6500, [650, 1300, 1950, 3250, 4550, 6500], 2000, 3250, true),
  prop(27, 'Unawatuna', 'Unawatuna', 'yellow', 6500, [650, 1300, 1950, 3250, 4550, 6500], 2000, 3250, true),
  { index: 28, kind: 'utility',   name: 'National Water Supply Board (NWSDB)', short: 'NWSDB Water', icon: '💧', price: UTIL_PRICE, mortgageValue: UTIL_MORTGAGE },
  prop(29, 'Hikkaduwa', 'Hikkaduwa', 'yellow', 6800, [700, 1400, 2100, 3500, 4900, 7000], 2000, 3400, true),
  { index: 30, kind: 'gotojail',  name: 'Summoned to CID', short: 'Go To CID', icon: '🚨', desc: 'Financial audit triggered! Move to CID Inquiry without collecting Start bonus.' },
  prop(31, 'Jaffna Town', 'Jaffna Town', 'green', 8000, [800, 1600, 2400, 4000, 5600, 8000], 2500, 4000),
  prop(32, 'Nallur', 'Nallur', 'green', 8000, [800, 1600, 2400, 4000, 5600, 8000], 2500, 4000),
  { index: 33, kind: 'insurance', name: 'Ceylinco Insurance', short: 'Ceylinco Ins.', icon: '🛡️', desc: 'Purchase Disaster Insurance Policies (20% discount when standing here).' },
  prop(34, 'Trincomalee', 'Trincomalee', 'green', 8500, [850, 1700, 2550, 4250, 5950, 8500], 2500, 4250, true),
  { index: 35, kind: 'railway',   name: 'Jaffna Railway Station', short: 'Jaffna Rail', icon: '🚂', price: RAIL_PRICE, mortgageValue: RAIL_MORTGAGE },
  { index: 36, kind: 'event',     name: 'National Event Card', short: 'Natl Event', icon: '📰', desc: 'Draw a National Economic Event card.' },
  prop(37, 'Nuwara Eliya', 'Nuwara Eliya', 'darkblue', 9500, [950, 1900, 2850, 4750, 6650, 9500], 3000, 4750),
  { index: 38, kind: 'bank',      name: 'Bank of Ceylon (BOC)', short: 'BOC Bank', icon: '🏦', desc: 'Preferential 10% fixed-term collateral loan rate when standing directly here.' },
  prop(39, 'Galle Face', 'Galle Face', 'darkblue', 10000, [1000, 2000, 3000, 5000, 7000, 10000], 3000, 5000, true),
];

export const GROUP_SQUARES: Record<GroupId, number[]> = (() => {
  const map = {} as Record<GroupId, number[]>;
  for (const sq of BOARD) {
    if (sq.group) (map[sq.group] ??= []).push(sq.index);
  }
  return map;
})();

// ─── Macro-economic cycles (rotate every 5 rounds) ────────────────────────
export const MACRO_CYCLES: CycleDef[] = [
  { id: 'stable',   name: 'Stable Island Economy',    icon: '☀️', desc: 'Standard rents, construction costs and loan rates.', loanRateMod: 0 },
  { id: 'tourism',  name: 'Tourism & Export Boom',    icon: '🏖️', desc: 'Kandy rents +50%, hotels +30% (Southern +40%); loan rate −3%.', loanRateMod: -3 },
  { id: 'inflation',name: 'Inflation Surge (+15%)',   icon: '📈', desc: 'Rents, prices, build costs and the Avurudu bonus +15%; loan +2%.', loanRateMod: 2 },
  { id: 'monsoon',  name: 'Southwest Monsoon',        icon: '🌧️', desc: 'Rents −5% (Southern resorts immune); storm damage risk.', loanRateMod: 0 },
  { id: 'fuel',     name: 'Fuel & Energy Crunch',     icon: '⛽', desc: 'Railway & utility rents ×2; construction +20%; loan +3%.', loanRateMod: 3 },
];

// ─── Card decks ───────────────────────────────────────────────────────────
export interface CommunityCard {
  title: string;
  text: string;
  cash: number;       // signed
  toPool?: boolean;   // negative amounts go to the Poya Pool
}

export const COMMUNITY_CARDS: CommunityCard[] = [
  { title: 'Foreign Remittance Inflow', text: 'Family remittance arrives from overseas! Collect LKR 2,000.', cash: 2000 },
  { title: 'Vesak Dansala Sponsorship', text: 'You sponsor a grand neighbourhood Dansala. Pay LKR 800 to the Poya Welfare Pool.', cash: -800, toPool: true },
  { title: 'BOI SME Export Grant', text: 'Board of Investment approves your export venture! Collect LKR 2,500.', cash: 2500 },
  { title: 'Dengue Prevention Fine', text: 'Municipal inspection fine for unmaintained premises. Pay LKR 600 to the Pool.', cash: -600, toPool: true },
  { title: 'Ceylon Cinnamon Harvest Bonus', text: 'Record spice export prices! Collect LKR 1,800.', cash: 1800 },
  { title: 'Colombo Port Customs Rebate', text: 'Import duty refund processed! Collect LKR 1,500.', cash: 1500 },
  { title: 'Agricultural Fertilizer Subsidy', text: 'State agricultural grant distributed. Collect LKR 1,200.', cash: 1200 },
  { title: 'Temple Perahera Contribution', text: 'Community cultural festival contribution. Pay LKR 500 to the Pool.', cash: -500, toPool: true },
  { title: 'Microfinance Dividend', text: 'Local cooperative bank pays out annual profits! Collect LKR 1,600.', cash: 1600 },
];

export type HeadlineEffect =
  | { type: 'groupBonus'; groups: GroupId[]; amount: number }
  | { type: 'allCash'; amount: number }
  | { type: 'selfCash'; amount: number }
  | { type: 'disaster'; hazard: string };

export interface HeadlineCard {
  title: string;
  text: string;
  effect: HeadlineEffect;
}

export const HEADLINE_CARDS: HeadlineCard[] = [
  { title: 'Southern Highway Expansion', text: 'Coastal access surges! Every player owning a Southern or Coastal property collects LKR 1,500.', effect: { type: 'groupBonus', groups: ['yellow', 'lightblue'], amount: 1500 } },
  { title: 'Flash Monsoon Squall', text: 'Sudden storm hits a random developed or coastal property!', effect: { type: 'disaster', hazard: 'Monsoon Flood' } },
  { title: 'Central Bank Tax Amnesty', text: 'Economic stimulus package! Every solvent player receives LKR 1,500.', effect: { type: 'allCash', amount: 1500 } },
  { title: 'Grid Transformer Fault', text: 'Electrical surge hits a random owned property!', effect: { type: 'disaster', hazard: 'Electrical Fire' } },
  { title: 'IT & Apparel Export Surge', text: 'You close an international contract! Collect LKR 2,200 immediately.', effect: { type: 'selfCash', amount: 2200 } },
  { title: 'Tea Auction Record in Colombo', text: 'Owners of Kandy or Hill Country properties receive a LKR 2,000 export dividend!', effect: { type: 'groupBonus', groups: ['red', 'darkblue'], amount: 2000 } },
  { title: 'Port City Investment Inflow', text: 'Foreign direct investment surges! Pettah and Maradana owners collect LKR 1,800.', effect: { type: 'groupBonus', groups: ['brown'], amount: 1800 } },
  { title: 'Northern Development Grant', text: 'Reconstruction subsidies awarded! Green district owners collect LKR 2,000.', effect: { type: 'groupBonus', groups: ['green'], amount: 2000 } },
];

// ─── Personas & tokens ────────────────────────────────────────────────────
export interface PersonaDef {
  id: Persona;
  name: string;      // default AI character name
  label: string;     // description for setup UI
  tagline: string;
  color: string;
}

export const PERSONAS: Record<Persona, PersonaDef> = {
  aggressive:   { id: 'aggressive',   name: 'Kasun',  label: 'Aggressive Investor', tagline: 'Expands fast, builds faster.', color: '#10b981' },
  conservative: { id: 'conservative', name: 'Nimali', label: 'Conservative Banker', tagline: 'Cash reserves first.', color: '#0ea5e9' },
  risk:         { id: 'risk',         name: 'Roshan', label: 'Risk Taker', tagline: 'Maximum debt, maximum drama.', color: '#f43f5e' },
  opportunist:  { id: 'opportunist',  name: 'Dilani', label: 'Opportunistic Trader', tagline: 'Times the market.', color: '#a855f7' },
};

export interface TokenDef {
  key: TokenKey;
  icon: string;
  name: string;
}

export const TOKENS: Record<TokenKey, TokenDef> = {
  tuktuk:   { key: 'tuktuk',   icon: '🛺', name: 'Colombo Tuk-Tuk' },
  dancer:   { key: 'dancer',   icon: '💃', name: 'Kandyan Dancer' },
  elephant: { key: 'elephant', icon: '🐘', name: 'Ceylon Elephant' },
  train:    { key: 'train',    icon: '🚂', name: 'Yal Devi Express' },
  gem:      { key: 'gem',      icon: '💎', name: 'Ceylon Blue Sapphire' },
  ship:     { key: 'ship',     icon: '⛵', name: 'Trinco Ocean Clipper' },
};

export const SEAT_COLORS = ['#10b981', '#0ea5e9', '#f43f5e', '#a855f7', '#f59e0b', '#06b6d4'];
