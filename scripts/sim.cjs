"use strict";

// src/engine/config.ts
var START_CASH = 3e4;
var START_BONUS = 3e3;
var TEA_DIVIDEND = 1e3;
var BAIL = 500;
var REPAIR_COST = 800;
var POYA_FESTIVAL_BONUS = 1e3;
var POYA_POOL_SHARE = 0.5;
var MAX_JAIL_TURNS = 3;
var LOAN_DURATION = 8;
var CYCLE_LENGTH = 5;
var COMPREHENSIVE_CLAIM = 1500;
var GROUPS = {
  brown: { id: "brown", name: "Old Colombo Trade", color: "#92400e", perk: "+20% base rent & +LKR 500 on Community Fund cards." },
  lightblue: { id: "lightblue", name: "Coastal Commuter Line", color: "#38bdf8", perk: "+25% rent when owner also holds at least 1 Railway Station." },
  pink: { id: "pink", name: "Suburban Tech Belt", color: "#ec4899", perk: "House & Hotel construction costs 20% less." },
  orange: { id: "orange", name: "Airport Corridor", color: "#f97316", perk: "Owner collects LKR 400 whenever any player uses Express Transit." },
  red: { id: "red", name: "Kandy Cultural Hub", color: "#ef4444", perk: "+50% bonus rent during Tourism & Export Boom cycles." },
  yellow: { id: "yellow", name: "Southern Beach Resorts", color: "#eab308", perk: "Immune to Monsoon rent drops; +40% hotel rent in Tourism Booms." },
  green: { id: "green", name: "Northern & Eastern Ports", color: "#22c55e", perk: "Property market valuation increases +25% once monopolized." },
  darkblue: { id: "darkblue", name: "Hill Country & Capital Estates", color: "#3b82f6", perk: "Generates +LKR 1,000 Tea Export dividend every time owner passes Start." }
};
var GROUP_KEYS = Object.keys(GROUPS);
function prop(index, name, short, group, price, rents, buildCost, mortgage, coastal = false) {
  return { index, kind: "property", name, short, group, price, rents, buildCost, mortgageValue: mortgage, coastal };
}
var RAIL_PRICE = 4e3;
var RAIL_MORTGAGE = 2e3;
var UTIL_PRICE = 3e3;
var UTIL_MORTGAGE = 1500;
var BOARD = [
  { index: 0, kind: "start", name: "Avurudu Start", short: "START", icon: "\u{1F38A}", desc: "Collect LKR 3,000 every time you pass or land here (plus Dark Blue Tea Dividends)." },
  prop(1, "Pettah", "Pettah", "brown", 1500, [150, 300, 450, 750, 1050, 1500], 500, 750),
  { index: 2, kind: "community", name: "Community Fund", short: "Civic Fund", icon: "\u{1FAB7}", desc: "Draw a Sri Lankan Community Development card." },
  prop(3, "Maradana", "Maradana", "brown", 1500, [180, 360, 540, 900, 1260, 1800], 500, 750),
  { index: 4, kind: "tax", name: "Inland Revenue Tax", short: "Tax 1.5k", icon: "\u{1F3DB}\uFE0F", taxAmount: 1500, desc: "Pay LKR 1,500 into the Poya Day Holiday Welfare Pool." },
  { index: 5, kind: "railway", name: "Colombo Fort Station", short: "Fort Rail", icon: "\u{1F682}", price: RAIL_PRICE, mortgageValue: RAIL_MORTGAGE },
  prop(6, "Bambalapitiya", "Bamba", "lightblue", 2500, [250, 500, 750, 1250, 1750, 2500], 750, 1250),
  { index: 7, kind: "event", name: "Island Headline", short: "Headline", icon: "\u{1F4F0}", desc: "Draw a National Economic Event card." },
  prop(8, "Wellawatte", "Wella", "lightblue", 2500, [250, 500, 750, 1250, 1750, 2500], 750, 1250),
  prop(9, "Mount Lavinia", "Mt Lavinia", "lightblue", 2800, [300, 600, 900, 1500, 2100, 3e3], 750, 1400, true),
  { index: 10, kind: "jail", name: "CID Inquiry", short: "CID / Visit", icon: "\u2696\uFE0F", desc: "Just Visiting unless summoned. Jailed players can pay LKR 500 bail or roll doubles." },
  prop(11, "Nugegoda", "Nugegoda", "pink", 3500, [350, 700, 1050, 1750, 2450, 3500], 1e3, 1750),
  { index: 12, kind: "utility", name: "Ceylon Electricity Board (CEB)", short: "CEB Power", icon: "\u26A1", price: UTIL_PRICE, mortgageValue: UTIL_MORTGAGE },
  prop(13, "Maharagama", "Maharagama", "pink", 3500, [350, 700, 1050, 1750, 2450, 3500], 1e3, 1750),
  prop(14, "Kottawa", "Kottawa", "pink", 3800, [400, 800, 1200, 2e3, 2800, 4e3], 1e3, 1900),
  { index: 15, kind: "railway", name: "Kandy Railway Station", short: "Kandy Rail", icon: "\u{1F682}", price: RAIL_PRICE, mortgageValue: RAIL_MORTGAGE },
  prop(16, "Negombo", "Negombo", "orange", 4500, [450, 900, 1350, 2250, 3150, 4500], 1250, 2250, true),
  { index: 17, kind: "insurance", name: "Sri Lanka Insurance (SLIC)", short: "SLIC Ins.", icon: "\u{1F6E1}\uFE0F", desc: "Purchase Disaster Insurance Policies (20% discount when standing here)." },
  prop(18, "Katunayake", "Katunayake", "orange", 4500, [450, 900, 1350, 2250, 3150, 4500], 1250, 2250),
  prop(19, "Ja-Ela", "Ja-Ela", "orange", 4800, [500, 1e3, 1500, 2500, 3500, 5e3], 1250, 2400),
  { index: 20, kind: "poya", name: "Poya Day Holiday", short: "Poya Pool", icon: "\u{1F315}", desc: "Collect LKR 1,000 Festival Bonus + 50% of the Poya Welfare Pool!" },
  prop(21, "Kandy City", "Kandy City", "red", 5500, [550, 1100, 1650, 2750, 3850, 5500], 1500, 2750),
  { index: 22, kind: "event", name: "National Event Card", short: "Natl Event", icon: "\u{1F4F0}", desc: "Draw a National Economic Event card." },
  prop(23, "Peradeniya", "Peradeniya", "red", 5500, [550, 1100, 1650, 2750, 3850, 5500], 1500, 2750),
  prop(24, "Katugastota", "Katugastota", "red", 5800, [600, 1200, 1800, 3e3, 4200, 6e3], 1500, 2900),
  { index: 25, kind: "railway", name: "Galle Railway Station", short: "Galle Rail", icon: "\u{1F682}", price: RAIL_PRICE, mortgageValue: RAIL_MORTGAGE },
  prop(26, "Galle Fort", "Galle Fort", "yellow", 6500, [650, 1300, 1950, 3250, 4550, 6500], 2e3, 3250, true),
  prop(27, "Unawatuna", "Unawatuna", "yellow", 6500, [650, 1300, 1950, 3250, 4550, 6500], 2e3, 3250, true),
  { index: 28, kind: "utility", name: "National Water Supply Board (NWSDB)", short: "NWSDB Water", icon: "\u{1F4A7}", price: UTIL_PRICE, mortgageValue: UTIL_MORTGAGE },
  prop(29, "Hikkaduwa", "Hikkaduwa", "yellow", 6800, [700, 1400, 2100, 3500, 4900, 7e3], 2e3, 3400, true),
  { index: 30, kind: "gotojail", name: "Summoned to CID", short: "Go To CID", icon: "\u{1F6A8}", desc: "Financial audit triggered! Move to CID Inquiry without collecting Start bonus." },
  prop(31, "Jaffna Town", "Jaffna Town", "green", 8e3, [800, 1600, 2400, 4e3, 5600, 8e3], 2500, 4e3),
  prop(32, "Nallur", "Nallur", "green", 8e3, [800, 1600, 2400, 4e3, 5600, 8e3], 2500, 4e3),
  { index: 33, kind: "insurance", name: "Ceylinco Insurance", short: "Ceylinco Ins.", icon: "\u{1F6E1}\uFE0F", desc: "Purchase Disaster Insurance Policies (20% discount when standing here)." },
  prop(34, "Trincomalee", "Trinco", "green", 8500, [850, 1700, 2550, 4250, 5950, 8500], 2500, 4250, true),
  { index: 35, kind: "railway", name: "Jaffna Railway Station", short: "Jaffna Rail", icon: "\u{1F682}", price: RAIL_PRICE, mortgageValue: RAIL_MORTGAGE },
  { index: 36, kind: "event", name: "National Event Card", short: "Natl Event", icon: "\u{1F4F0}", desc: "Draw a National Economic Event card." },
  prop(37, "Nuwara Eliya", "Nuwara Eliya", "darkblue", 9500, [950, 1900, 2850, 4750, 6650, 9500], 3e3, 4750),
  { index: 38, kind: "bank", name: "Bank of Ceylon (BOC)", short: "BOC Bank", icon: "\u{1F3E6}", desc: "Preferential 10% fixed-term collateral loan rate when standing directly here." },
  prop(39, "Galle Face", "Galle Face", "darkblue", 1e4, [1e3, 2e3, 3e3, 5e3, 7e3, 1e4], 3e3, 5e3, true)
];
var GROUP_SQUARES = (() => {
  const map = {};
  for (const sq of BOARD) {
    if (sq.group) (map[sq.group] ??= []).push(sq.index);
  }
  return map;
})();
var MACRO_CYCLES = [
  { id: "stable", name: "Stable Island Economy", icon: "\u2600\uFE0F", desc: "Standard rents, construction costs and loan rates.", loanRateMod: 0 },
  { id: "tourism", name: "Tourism & Export Boom", icon: "\u{1F3D6}\uFE0F", desc: "Kandy rents +50%, hotels +30% (Southern +40%); loan rate \u22123%.", loanRateMod: -3 },
  { id: "inflation", name: "Inflation Surge (+15%)", icon: "\u{1F4C8}", desc: "Rents, prices, build costs and the Avurudu bonus +15%; loan +2%.", loanRateMod: 2 },
  { id: "monsoon", name: "Southwest Monsoon", icon: "\u{1F327}\uFE0F", desc: "Rents \u22125% (Southern resorts immune); storm damage risk.", loanRateMod: 0 },
  { id: "fuel", name: "Fuel & Energy Crunch", icon: "\u26FD", desc: "Railway & utility rents \xD72; construction +20%; loan +3%.", loanRateMod: 3 }
];
var COMMUNITY_CARDS = [
  { title: "Foreign Remittance Inflow", text: "Family remittance arrives from overseas! Collect LKR 2,000.", cash: 2e3 },
  { title: "Vesak Dansala Sponsorship", text: "You sponsor a grand neighbourhood Dansala. Pay LKR 800 to the Poya Welfare Pool.", cash: -800, toPool: true },
  { title: "BOI SME Export Grant", text: "Board of Investment approves your export venture! Collect LKR 2,500.", cash: 2500 },
  { title: "Dengue Prevention Fine", text: "Municipal inspection fine for unmaintained premises. Pay LKR 600 to the Pool.", cash: -600, toPool: true },
  { title: "Ceylon Cinnamon Harvest Bonus", text: "Record spice export prices! Collect LKR 1,800.", cash: 1800 },
  { title: "Colombo Port Customs Rebate", text: "Import duty refund processed! Collect LKR 1,500.", cash: 1500 },
  { title: "Agricultural Fertilizer Subsidy", text: "State agricultural grant distributed. Collect LKR 1,200.", cash: 1200 },
  { title: "Temple Perahera Contribution", text: "Community cultural festival contribution. Pay LKR 500 to the Pool.", cash: -500, toPool: true },
  { title: "Microfinance Dividend", text: "Local cooperative bank pays out annual profits! Collect LKR 1,600.", cash: 1600 }
];
var HEADLINE_CARDS = [
  { title: "Southern Highway Expansion", text: "Coastal access surges! Every player owning a Southern or Coastal property collects LKR 1,500.", effect: { type: "groupBonus", groups: ["yellow", "lightblue"], amount: 1500 } },
  { title: "Flash Monsoon Squall", text: "Sudden storm hits a random developed or coastal property!", effect: { type: "disaster", hazard: "Monsoon Flood" } },
  { title: "Central Bank Tax Amnesty", text: "Economic stimulus package! Every solvent player receives LKR 1,500.", effect: { type: "allCash", amount: 1500 } },
  { title: "Grid Transformer Fault", text: "Electrical surge hits a random owned property!", effect: { type: "disaster", hazard: "Electrical Fire" } },
  { title: "IT & Apparel Export Surge", text: "You close an international contract! Collect LKR 2,200 immediately.", effect: { type: "selfCash", amount: 2200 } },
  { title: "Tea Auction Record in Colombo", text: "Owners of Kandy or Hill Country properties receive a LKR 2,000 export dividend!", effect: { type: "groupBonus", groups: ["red", "darkblue"], amount: 2e3 } },
  { title: "Port City Investment Inflow", text: "Foreign direct investment surges! Pettah and Maradana owners collect LKR 1,800.", effect: { type: "groupBonus", groups: ["brown"], amount: 1800 } },
  { title: "Northern Development Grant", text: "Reconstruction subsidies awarded! Green district owners collect LKR 2,000.", effect: { type: "groupBonus", groups: ["green"], amount: 2e3 } }
];
var SEAT_COLORS = ["#10b981", "#0ea5e9", "#f43f5e", "#a855f7"];

// src/engine/rng.ts
function seedRng(seed) {
  return seed | 0;
}
function nextRand(s) {
  s.rngState = s.rngState + 1831565813 | 0;
  let t = s.rngState;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function randInt(s, n) {
  return Math.floor(nextRand(s) * n);
}
function rollDice(s) {
  return [1 + randInt(s, 6), 1 + randInt(s, 6)];
}
function shuffle(s, arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = randInt(s, i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// src/engine/economy.ts
function currentCycle(s) {
  return MACRO_CYCLES[s.cycleIndex] ?? MACRO_CYCLES[0];
}
function ownsMonopoly(s, playerId, group) {
  const sqs = GROUP_SQUARES[group];
  return sqs.length > 0 && sqs.every((i) => s.squares[i].owner === playerId);
}
function railwaysOwnedBy(s, playerId) {
  return BOARD.filter((b, i) => b.kind === "railway" && s.squares[i].owner === playerId).length;
}
function startBonus(s) {
  return currentCycle(s).id === "inflation" ? Math.round(START_BONUS * 1.15) : START_BONUS;
}
function squareValue(s, idx) {
  const def = BOARD[idx];
  if (!def.price) return 0;
  let val = def.price;
  const cyc = currentCycle(s).id;
  if (cyc === "inflation") val = Math.round(val * 1.15);
  if (cyc === "tourism" && (def.group === "yellow" || def.group === "red")) val = Math.round(val * 1.15);
  if (def.group === "green" && s.squares[idx].owner !== null && ownsMonopoly(s, s.squares[idx].owner, "green")) {
    val = Math.round(val * 1.25);
  }
  return val;
}
function effectiveRent(s, idx, diceSum) {
  const def = BOARD[idx];
  const st = s.squares[idx];
  if (st.owner === null || st.damaged || st.mortgaged) return 0;
  const cyc = currentCycle(s).id;
  if (def.kind === "railway") {
    const count = railwaysOwnedBy(s, st.owner);
    let rent = 400 * Math.pow(2, Math.max(0, count - 1));
    if (cyc === "fuel") rent *= 2;
    return rent;
  }
  if (def.kind === "utility") {
    const count = BOARD.filter((b, i) => b.kind === "utility" && s.squares[i].owner === st.owner).length;
    let mult = count >= 2 ? 200 : 80;
    if (cyc === "fuel") mult *= 2;
    return mult * diceSum;
  }
  if (def.kind === "property" && def.rents && def.group) {
    let rent = def.rents[st.buildings] ?? def.rents[0];
    const mono = ownsMonopoly(s, st.owner, def.group);
    if (mono && st.buildings === 0) rent = Math.round(rent * 1.5);
    if (mono && def.group === "brown") rent = Math.round(rent * 1.2);
    if (mono && def.group === "lightblue" && railwaysOwnedBy(s, st.owner) > 0) rent = Math.round(rent * 1.25);
    if (cyc === "tourism") {
      if (def.group === "red") rent = Math.round(rent * 1.5);
      else if (st.buildings === 5) {
        rent = Math.round(rent * (def.group === "yellow" ? 1.4 : 1.3));
      }
    }
    if (cyc === "inflation") rent = Math.round(rent * 1.15);
    if (cyc === "monsoon" && def.group !== "yellow") rent = Math.round(rent * 0.95);
    if (st.buildings > 0 && typeof st.condition === "number") {
      if (st.condition < 25) {
        return 0;
      } else if (st.condition < 50) {
        rent = Math.round(rent * 0.5);
      } else if (st.condition < 75) {
        rent = Math.round(rent * 0.75);
      } else if (st.condition < 90) {
        rent = Math.round(rent * 0.9);
      }
    }
    return Math.round(rent / 10) * 10;
  }
  return 0;
}
function buildCostOf(s, idx) {
  const def = BOARD[idx];
  if (!def.buildCost) return 0;
  let cost = def.buildCost;
  if (def.group === "pink") cost = Math.round(cost * 0.8);
  const cyc = currentCycle(s).id;
  if (cyc === "inflation") cost = Math.round(cost * 1.15);
  if (cyc === "fuel") cost = Math.round(cost * 1.2);
  return cost;
}
function maintenanceCostOf(s, idx) {
  const def = BOARD[idx];
  const st = s.squares[idx];
  if (!def.buildCost || st.buildings === 0) return 0;
  const baseCost = buildCostOf(s, idx);
  if (st.buildings === 5) return Math.round(baseCost * 0.08);
  return Math.round(baseCost * 0.05 * st.buildings);
}
function shieldCost(s, idx, tier) {
  const def = BOARD[idx];
  if (!def.price) return 0;
  const onInsuranceSquare = BOARD[s.players[s.current].position]?.kind === "insurance";
  const discount = onInsuranceSquare ? 0.8 : 1;
  const rate = tier === 3 ? 0.15 : tier === 2 ? 0.1 : 0.05;
  return Math.round(def.price * rate * discount);
}
function maxBorrowLimit(s, playerId) {
  let total = 0;
  s.squares.forEach((st, i) => {
    if (st.owner === playerId && !st.loanLocked && !st.mortgaged && BOARD[i].mortgageValue) {
      total += BOARD[i].mortgageValue;
    }
  });
  return Math.floor(total * 0.75 / 100) * 100;
}
function effectiveLoanRate(s) {
  const onBank = BOARD[s.players[s.current].position]?.kind === "bank";
  const base = onBank ? 10 : 15;
  return Math.max(5, base + currentCycle(s).loanRateMod);
}
function netWorth(s, playerId) {
  const p = s.players[playerId];
  if (p.bankrupt) return 0;
  let propVal = 0;
  let buildVal = 0;
  s.squares.forEach((st, i) => {
    if (st.owner !== playerId) return;
    propVal += squareValue(s, i);
    if (st.buildings > 0 && BOARD[i].buildCost) buildVal += st.buildings * BOARD[i].buildCost;
  });
  return Math.max(0, p.cash + propVal + buildVal - p.loan);
}
function log(s, text, kind = "info") {
  s.log.push({ round: s.round, text, kind });
  if (s.log.length > 400) s.log.splice(0, s.log.length - 400);
}
function fmt(n) {
  return n.toLocaleString("en-US");
}

// src/engine/engine.ts
function cur(s) {
  return s.players[s.current];
}
function createGame(opts) {
  const players = opts.players.map((p, i) => ({
    id: i,
    name: p.name,
    kind: p.kind,
    persona: p.persona,
    tokenKey: p.tokenKey,
    color: SEAT_COLORS[i % SEAT_COLORS.length],
    cash: START_CASH,
    position: 0,
    inJail: false,
    jailTurns: 0,
    bankrupt: false,
    loan: 0,
    loanRoundsLeft: 0
  }));
  const s = {
    rngState: seedRng(opts.seed),
    round: 1,
    maxRounds: opts.maxRounds,
    poyaPool: 1e3,
    cycleIndex: 0,
    cycleRoundsLeft: CYCLE_LENGTH,
    players,
    squares: BOARD.map(() => ({
      owner: null,
      buildings: 0,
      shield: 0,
      damaged: false,
      loanLocked: false,
      mortgaged: false,
      condition: 100
    })),
    current: 0,
    phase: "preRoll",
    communityDeck: [],
    headlineDeck: [],
    auction: null,
    pendingBuy: null,
    lastRoll: null,
    selectedSquare: 0,
    cardJustDrawn: null,
    pendingTrade: null,
    consecutiveDoubles: 0,
    hasBonusRoll: false,
    log: [],
    winner: null
  };
  s.communityDeck = shuffle(s, COMMUNITY_CARDS.map((_, i) => i));
  s.headlineDeck = shuffle(s, HEADLINE_CARDS.map((_, i) => i));
  log(s, `\u{1F38A} Welcome to POLA: Monopoly Sri Lanka! Each player starts with LKR ${fmt(START_CASH)} at Avurudu Start. First to round ${opts.maxRounds} or last solvent tycoon wins.`, "event");
  log(s, `Turn order: ${players.map((p) => p.name).join(" \u2192 ")}.`, "info");
  return s;
}
function chargeCash(s, playerId, amount, to) {
  const p = s.players[playerId];
  if (amount <= 0) return true;
  p.cash -= amount;
  if (to.type === "player") s.players[to.id].cash += amount;
  else if (to.type === "pool") s.poyaPool += amount;
  if (p.cash >= 0) return true;
  if (p.loan === 0) {
    const maxBorrow = maxBorrowLimit(s, playerId);
    if (maxBorrow > 0) {
      takeLoan(s, maxBorrow, playerId);
      if (p.cash >= 0) return true;
    }
  }
  s.squares.forEach((st, i) => {
    if (st.owner !== playerId || p.cash >= 0 || st.mortgaged || st.loanLocked) return;
    const def = BOARD[i];
    if (def.group && GROUP_SQUARES[def.group].some((sqIdx) => s.squares[sqIdx].buildings > 0)) return;
    if (def.mortgageValue) {
      st.mortgaged = true;
      p.cash += def.mortgageValue;
      log(s, `\u{1F4DC} ${p.name} mortgaged ${def.name} for emergency cash (+LKR ${fmt(def.mortgageValue)}).`, "danger");
    }
  });
  if (p.cash >= 0) return true;
  s.squares.forEach((st, i) => {
    if (st.owner !== playerId || p.cash >= 0) return;
    if (st.buildings > 0 && BOARD[i].buildCost) {
      const refund = Math.round(st.buildings * BOARD[i].buildCost * 0.5);
      st.buildings = 0;
      st.condition = 100;
      p.cash += refund;
      log(s, `\u26A0\uFE0F ${p.name} liquidated buildings on ${BOARD[i].name} for LKR ${fmt(refund)}.`, "danger");
    }
  });
  s.squares.forEach((st, i) => {
    if (st.owner !== playerId || p.cash >= 0) return;
    if (st.loanLocked) return;
    const val = BOARD[i].mortgageValue ?? Math.round((BOARD[i].price ?? 2e3) * 0.5);
    st.owner = null;
    st.buildings = 0;
    st.shield = 0;
    st.loanLocked = false;
    st.damaged = false;
    st.mortgaged = false;
    p.cash += val;
    log(s, `\u26A0\uFE0F ${p.name} surrendered ${BOARD[i].name} to the bank for LKR ${fmt(val)}.`, "danger");
  });
  if (p.cash < 0) {
    p.bankrupt = true;
    p.cash = 0;
    p.loan = 0;
    p.loanRoundsLeft = 0;
    s.squares.forEach((st) => {
      if (st.owner === playerId) {
        st.owner = null;
        st.buildings = 0;
        st.shield = 0;
        st.loanLocked = false;
        st.damaged = false;
        st.mortgaged = false;
      }
    });
    if (s.auction && s.auction.participants.includes(playerId)) {
      s.auction.participants = s.auction.participants.filter((id) => id !== playerId);
    }
    log(s, `\u{1F4A5} BANKRUPTCY! ${p.name} has been eliminated from the island economy.`, "danger");
    checkGameOver(s);
    return false;
  }
  return true;
}
function takeTurnRoll(s) {
  const p = cur(s);
  const d = rollDice(s);
  s.lastRoll = d;
  const sum = d[0] + d[1];
  const isDouble = d[0] === d[1];
  log(s, `${p.name} rolls ${d[0]} + ${d[1]} = ${sum}${isDouble ? " (DOUBLES! \u{1F3B2}\u{1F3B2})" : ""}.`, "info");
  if (p.inJail) {
    s.consecutiveDoubles = 0;
    s.hasBonusRoll = false;
    if (isDouble) {
      p.inJail = false;
      p.jailTurns = 0;
      log(s, `\u2696\uFE0F ${p.name} rolled doubles and was released from CID Inquiry!`, "event");
      movePlayer(s, sum);
      resolveLanding(s);
    } else {
      p.jailTurns++;
      if (p.jailTurns >= MAX_JAIL_TURNS) {
        log(s, `\u2696\uFE0F ${p.name} completed ${MAX_JAIL_TURNS} turns in CID Inquiry \u2014 forced LKR ${fmt(BAIL)} bail.`, "danger");
        chargeCash(s, p.id, BAIL, { type: "pool" });
        if (p.bankrupt) {
          endTurn(s);
          return;
        }
        p.inJail = false;
        p.jailTurns = 0;
        movePlayer(s, sum);
        resolveLanding(s);
      } else {
        log(s, `\u2696\uFE0F ${p.name} remains in CID Inquiry (attempt ${p.jailTurns}/${MAX_JAIL_TURNS}).`, "info");
        endTurn(s);
      }
    }
    return;
  }
  if (isDouble) {
    s.consecutiveDoubles = (s.consecutiveDoubles || 0) + 1;
    if (s.consecutiveDoubles >= 3) {
      log(s, `\u{1F6A8} SPEEDING AUDIT! ${p.name} rolled 3 doubles in a row! Summoned to CID Inquiry immediately!`, "danger");
      s.consecutiveDoubles = 0;
      s.hasBonusRoll = false;
      p.position = 10;
      p.inJail = true;
      p.jailTurns = 0;
      s.selectedSquare = 10;
      endTurn(s);
      return;
    }
    s.hasBonusRoll = true;
    log(s, `\u{1F3B2} DOUBLES! ${p.name} gets a bonus roll after completing their turn!`, "event");
  } else {
    s.consecutiveDoubles = 0;
    s.hasBonusRoll = false;
  }
  movePlayer(s, sum);
  resolveLanding(s);
}
function payBail(s) {
  const p = cur(s);
  if (!p.inJail || p.cash < BAIL) return;
  chargeCash(s, p.id, BAIL, { type: "pool" });
  p.inJail = false;
  p.jailTurns = 0;
  log(s, `\u2696\uFE0F ${p.name} paid LKR ${fmt(BAIL)} bail to exit CID Inquiry early.`, "money");
}
function movePlayer(s, steps) {
  const p = cur(s);
  const from = p.position;
  if (from + steps >= BOARD.length) grantStartBonus(s);
  p.position = (from + steps) % BOARD.length;
  log(s, `${p.name} moves to ${BOARD[p.position].name}.`, "info");
}
function grantStartBonus(s) {
  const p = cur(s);
  const bonus = startBonus(s);
  const tea = ownsMonopoly(s, p.id, "darkblue") ? TEA_DIVIDEND : 0;
  p.cash += bonus + tea;
  log(s, `\u{1F38A} ${p.name} passed Avurudu Start and collected LKR ${fmt(bonus + tea)}${tea ? " (incl. LKR 1,000 Tea Export Dividend!)" : ""}.`, "money");
}
function resolveLanding(s) {
  const p = cur(s);
  const idx = p.position;
  const def = BOARD[idx];
  const st = s.squares[idx];
  const diceSum = s.lastRoll ? s.lastRoll[0] + s.lastRoll[1] : 7;
  s.selectedSquare = idx;
  switch (def.kind) {
    case "property":
    case "railway":
    case "utility": {
      if (st.owner === null) {
        s.pendingBuy = idx;
        s.phase = "decideBuy";
      } else if (st.owner !== p.id) {
        const owner = s.players[st.owner];
        if (st.damaged) {
          log(s, `\u26A0\uFE0F ${def.name} is storm-damaged! No rent until it is repaired.`, "danger");
        } else {
          const rent = effectiveRent(s, idx, diceSum);
          log(s, `\u{1F4B8} ${p.name} paid LKR ${fmt(rent)} rent to ${owner.name} at ${def.name}.`, "money");
          chargeCash(s, p.id, rent, { type: "player", id: owner.id });
        }
        goPostRoll(s);
      } else {
        log(s, `${p.name} inspects their own ${def.name}.`, "info");
        goPostRoll(s);
      }
      break;
    }
    case "tax": {
      const tax = def.taxAmount ?? 1500;
      log(s, `\u{1F3DB}\uFE0F ${p.name} paid LKR ${fmt(tax)} Inland Revenue Tax into the Poya Welfare Pool.`, "money");
      chargeCash(s, p.id, tax, { type: "pool" });
      goPostRoll(s);
      break;
    }
    case "poya": {
      const share = Math.floor(s.poyaPool * POYA_POOL_SHARE);
      const total = POYA_FESTIVAL_BONUS + share;
      s.poyaPool -= share;
      p.cash += total;
      log(s, `\u{1F315} ${p.name} celebrates the Poya Day Holiday and collects LKR ${fmt(total)} (incl. 50% of the Welfare Pool)!`, "money");
      goPostRoll(s);
      break;
    }
    case "gotojail": {
      p.position = 10;
      p.inJail = true;
      p.jailTurns = 0;
      s.selectedSquare = 10;
      log(s, `\u{1F6A8} ${p.name} was summoned to CID Inquiry!`, "danger");
      endTurn(s);
      break;
    }
    case "community":
      drawCommunityCard(s);
      goPostRoll(s);
      break;
    case "event":
      drawHeadlineCard(s);
      goPostRoll(s);
      break;
    case "start":
      grantStartBonus(s);
      goPostRoll(s);
      break;
    case "jail":
      log(s, `${p.name} is just visiting the CID Inquiry.`, "info");
      goPostRoll(s);
      break;
    case "bank":
      log(s, `\u{1F3E6} ${p.name} visits the Bank of Serendib \u2014 preferential 10% loan rate available!`, "info");
      goPostRoll(s);
      break;
    case "insurance":
      log(s, `\u{1F6E1}\uFE0F ${p.name} visits ${def.name} \u2014 Shield Tokens at a 20% discount while standing here.`, "info");
      goPostRoll(s);
      break;
  }
}
function goPostRoll(s) {
  if (s.phase !== "gameOver") s.phase = "postRoll";
}
function drawCommunityCard(s) {
  const p = cur(s);
  const ci = s.communityDeck.shift();
  s.communityDeck.push(ci);
  const card = COMMUNITY_CARDS[ci];
  let delta = card.cash;
  if (delta > 0 && ownsMonopoly(s, p.id, "brown")) delta += 500;
  p.cash += delta;
  if (card.toPool && delta < 0) s.poyaPool += Math.abs(delta);
  log(s, `\u{1FAB7} Community Fund [${card.title}]: ${card.text} (${delta >= 0 ? "+" : ""}LKR ${fmt(delta)}${delta > card.cash ? " incl. Old Colombo perk" : ""})`, "event");
  if (p.kind === "human") s.cardJustDrawn = { deck: "community", index: ci, delta };
  if (p.cash < 0) chargeCash(s, p.id, 0, { type: "bank" });
}
function drawHeadlineCard(s) {
  const p = cur(s);
  const ci = s.headlineDeck.shift();
  s.headlineDeck.push(ci);
  const card = HEADLINE_CARDS[ci];
  const e = card.effect;
  switch (e.type) {
    case "selfCash":
      p.cash += e.amount;
      log(s, `\u{1F4F0} Headline [${card.title}]: ${card.text} (+LKR ${fmt(e.amount)})`, "event");
      break;
    case "allCash":
      for (const pl of s.players) if (!pl.bankrupt) pl.cash += e.amount;
      log(s, `\u{1F4F0} Headline [${card.title}]: ${card.text}`, "event");
      break;
    case "groupBonus": {
      for (const pl of s.players) {
        if (pl.bankrupt) continue;
        if (s.squares.some((st, i) => st.owner === pl.id && BOARD[i].group && e.groups.includes(BOARD[i].group))) {
          pl.cash += e.amount;
        }
      }
      log(s, `\u{1F4F0} Headline [${card.title}]: ${card.text}`, "event");
      break;
    }
    case "disaster": {
      const owned = s.squares.map((st, i) => ({ st, i })).filter((o) => o.st.owner !== null && BOARD[o.i].kind === "property");
      if (owned.length === 0) {
        log(s, `\u{1F4F0} Headline [${card.title}]: The ${e.hazard.toLowerCase()} passed harmlessly over unowned land.`, "event");
        break;
      }
      const hit = owned[randInt(s, owned.length)];
      const victim = s.players[hit.st.owner];
      if (hit.st.shield === 3) {
        hit.st.shield = 0;
        const hotelRent = BOARD[hit.i].rents ? BOARD[hit.i].rents[5] : 5e3;
        const claim = REPAIR_COST + hotelRent * 5;
        victim.cash += claim;
        log(s, `\u{1F6E1}\uFE0F ${e.hazard} struck ${BOARD[hit.i].name}, but ${victim.name}'s Business Interruption Policy covered repairs AND paid LKR ${fmt(claim)} in lost hotel revenue!`, "event");
      } else if (hit.st.shield === 2) {
        hit.st.shield = 0;
        victim.cash += COMPREHENSIVE_CLAIM;
        log(s, `\u{1F6E1}\uFE0F ${e.hazard} struck ${BOARD[hit.i].name}, but ${victim.name}'s Comprehensive Insurance absorbed the disaster and paid a LKR ${fmt(COMPREHENSIVE_CLAIM)} claim!`, "event");
      } else if (hit.st.shield === 1) {
        hit.st.shield = 0;
        const claim = Math.round(REPAIR_COST * 0.8);
        victim.cash += claim;
        hit.st.damaged = true;
        log(s, `\u{1F6E1}\uFE0F ${e.hazard} struck ${BOARD[hit.i].name}! ${victim.name}'s Basic Property Insurance paid an 80% claim of LKR ${fmt(claim)} toward repairs.`, "event");
      } else {
        hit.st.damaged = true;
        hit.st.condition = Math.max(0, (hit.st.condition ?? 100) - 30);
        log(s, `\u26C8\uFE0F ${e.hazard} damaged ${BOARD[hit.i].name} (owned by ${victim.name})! Rent suspended until repaired (LKR ${fmt(REPAIR_COST)}).`, "danger");
      }
      break;
    }
  }
  if (p.kind === "human") s.cardJustDrawn = { deck: "headline", index: ci, delta: 0 };
}
function buyCurrent(s) {
  if (s.phase !== "decideBuy" || s.pendingBuy === null) return false;
  const idx = s.pendingBuy;
  const p = cur(s);
  const price = squareValue(s, idx);
  if (p.cash < price) return false;
  p.cash -= price;
  s.squares[idx].owner = p.id;
  s.squares[idx].mortgaged = false;
  s.squares[idx].condition = 100;
  s.pendingBuy = null;
  log(s, `\u{1F3E0} ${p.name} purchased ${BOARD[idx].name} for LKR ${fmt(price)}.`, "money");
  if (BOARD[idx].group && ownsMonopoly(s, p.id, BOARD[idx].group)) {
    log(s, `\u{1F31F} MONOPOLY UNLOCKED! ${p.name} completed the ${GROUPS[BOARD[idx].group].name} district \u2014 perk: ${GROUPS[BOARD[idx].group].perk}`, "event");
  }
  goPostRoll(s);
  return true;
}
function declineCurrent(s) {
  if (s.phase !== "decideBuy" || s.pendingBuy === null) return;
  const idx = s.pendingBuy;
  s.pendingBuy = null;
  log(s, `\u{1F528} ${cur(s).name} declined ${BOARD[idx].name} at list price \u2014 public auction!`, "auction");
  startAuction(s, idx);
}
function startAuction(s, idx) {
  const listPrice = squareValue(s, idx);
  const opening = Math.max(250, Math.floor(listPrice * 0.5 / 250) * 250);
  const participants = s.players.filter((p) => !p.bankrupt && p.cash >= opening).map((p) => p.id);
  if (participants.length === 0) {
    log(s, `\u{1F528} No player could bid on ${BOARD[idx].name}. It stays with the bank.`, "auction");
    goPostRoll(s);
    return;
  }
  s.auction = { square: idx, listPrice, opening, currentBid: opening, leader: null, participants, turn: 0 };
  s.phase = "auction";
  log(s, `\u{1F528} Auction opens: ${BOARD[idx].name}. List LKR ${fmt(listPrice)}, floor LKR ${fmt(opening)}.`, "auction");
}
function auctionCurrentBidder(s) {
  const a = s.auction;
  return a.participants[a.turn];
}
function auctionBid(s, increment = 250) {
  const a = s.auction;
  if (!a) return false;
  const bidder = auctionCurrentBidder(s);
  const amount = a.leader === null ? a.opening + increment - 250 : a.currentBid + increment;
  if (s.players[bidder].cash < amount) return false;
  a.currentBid = amount;
  a.leader = bidder;
  a.turn = (a.turn + 1) % a.participants.length;
  log(s, `\u{1F528} ${s.players[bidder].name} bids LKR ${fmt(amount)}.`, "auction");
  advanceAuction(s);
  return true;
}
function auctionPass(s) {
  const a = s.auction;
  if (!a) return;
  const bidder = auctionCurrentBidder(s);
  a.participants.splice(a.turn, 1);
  if (a.turn >= a.participants.length) a.turn = 0;
  log(s, `${s.players[bidder].name} withdraws from the auction.`, "auction");
  advanceAuction(s);
}
function advanceAuction(s) {
  const a = s.auction;
  if (a.participants.length === 0) {
    finishAuction(s);
    return;
  }
  if (a.participants.length === 1 && a.leader === a.participants[0]) {
    finishAuction(s);
    return;
  }
  a.turn = a.turn % a.participants.length;
  const bidder = a.participants[a.turn];
  if (bidder === a.leader) {
    if (a.participants.length > 1) {
      a.turn = (a.turn + 1) % a.participants.length;
      advanceAuction(s);
      return;
    } else {
      finishAuction(s);
      return;
    }
  }
  const nextMin = a.leader === null ? a.opening : a.currentBid + 250;
  if (s.players[bidder].cash < nextMin) {
    log(s, `${s.players[bidder].name} lacks cash for LKR ${fmt(nextMin)} and withdraws.`, "auction");
    a.participants.splice(a.turn, 1);
    if (a.turn >= a.participants.length) a.turn = 0;
    advanceAuction(s);
    return;
  }
}
function finishAuction(s) {
  const a = s.auction;
  if (a.leader !== null) {
    const winner = s.players[a.leader];
    winner.cash -= a.currentBid;
    s.squares[a.square].owner = a.leader;
    s.squares[a.square].mortgaged = false;
    s.squares[a.square].condition = 100;
    log(s, `\u{1F528} AUCTION WON! ${winner.name} acquired ${BOARD[a.square].name} for LKR ${fmt(a.currentBid)}.`, "auction");
  } else {
    log(s, `\u{1F528} No bids on ${BOARD[a.square].name} \u2014 it stays with the bank.`, "auction");
  }
  s.auction = null;
  goPostRoll(s);
}
function canBuildAt(s, idx) {
  const def = BOARD[idx];
  const st = s.squares[idx];
  const p = cur(s);
  if (def.kind !== "property" || !def.group) return false;
  if (st.owner !== p.id || st.buildings >= 5 || st.mortgaged || st.damaged) return false;
  if (!ownsMonopoly(s, p.id, def.group)) return false;
  const groupSqs = GROUP_SQUARES[def.group];
  if (groupSqs.some((i) => s.squares[i].mortgaged)) return false;
  const minBuildings = Math.min(...groupSqs.map((i) => s.squares[i].buildings));
  if (st.buildings > minBuildings) return false;
  return p.cash >= buildCostOf(s, idx);
}
function doBuild(s, idx) {
  if (!canBuildAt(s, idx)) return false;
  const p = cur(s);
  const cost = buildCostOf(s, idx);
  p.cash -= cost;
  s.squares[idx].buildings++;
  s.squares[idx].condition = 100;
  const st = s.squares[idx];
  log(s, `\u{1F3D7}\uFE0F ${p.name} constructed ${st.buildings === 5 ? "a Boutique Hotel \u{1F3E8}" : `House #${st.buildings} \u{1F3E0}`} on ${BOARD[idx].name} for LKR ${fmt(cost)}.`, "money");
  return true;
}
function canUnmortgageSquare(s, idx) {
  const def = BOARD[idx];
  const st = s.squares[idx];
  const p = cur(s);
  if (st.owner !== p.id || !st.mortgaged) return false;
  const cost = Math.round((def.mortgageValue ?? Math.round((def.price ?? 2e3) * 0.5)) * 1.1);
  return p.cash >= cost;
}
function unmortgageSquare(s, idx) {
  if (!canUnmortgageSquare(s, idx)) return false;
  const p = cur(s);
  const def = BOARD[idx];
  const cost = Math.round((def.mortgageValue ?? Math.round((def.price ?? 2e3) * 0.5)) * 1.1);
  p.cash -= cost;
  s.squares[idx].mortgaged = false;
  log(s, `\u{1F4DC} ${p.name} unmortgaged ${def.name} for LKR ${fmt(cost)} (includes 10% interest). Rent restored!`, "money");
  return true;
}
function maintainSquare(s, idx) {
  const def = BOARD[idx];
  const st = s.squares[idx];
  const p = cur(s);
  if (st.owner !== p.id || st.buildings === 0 || (st.condition ?? 100) >= 100) return false;
  const cost = maintenanceCostOf(s, idx);
  if (p.cash < cost) return false;
  p.cash -= cost;
  st.condition = 100;
  log(s, `\u{1F6E0}\uFE0F ${p.name} performed maintenance on ${def.name} for LKR ${fmt(cost)} \u2014 Condition restored to 100%!`, "money");
  return true;
}
function buyShield(s, idx, tier) {
  const p = cur(s);
  const st = s.squares[idx];
  if (st.owner !== p.id || BOARD[idx].kind !== "property" || st.shield >= tier) return false;
  if (tier === 3 && st.buildings !== 5) return false;
  const cost = shieldCost(s, idx, tier);
  if (p.cash < cost) return false;
  p.cash -= cost;
  st.shield = tier;
  const label = tier === 3 ? "Business Interruption Policy" : tier === 2 ? "Comprehensive Insurance" : "Basic Property Insurance";
  log(s, `\u{1F6E1}\uFE0F ${p.name} equipped ${label} on ${BOARD[idx].name} for LKR ${fmt(cost)}.`, "money");
  return true;
}
function repairSquare(s, idx) {
  const p = cur(s);
  const st = s.squares[idx];
  if (st.owner !== p.id || !st.damaged || p.cash < REPAIR_COST) return false;
  p.cash -= REPAIR_COST;
  st.damaged = false;
  st.condition = Math.max(75, st.condition ?? 100);
  log(s, `\u{1F527} ${p.name} repaired damage on ${BOARD[idx].name} \u2014 rent collection restored.`, "money");
  return true;
}
function takeLoan(s, amount, playerId) {
  const pid = playerId ?? s.current;
  const p = s.players[pid];
  if (p.loan > 0) return false;
  const max = maxBorrowLimit(s, p.id);
  const principal = Math.min(amount, max);
  if (principal <= 0) return false;
  const rate = effectiveLoanRate(s);
  const payback = Math.round(principal * (1 + rate / 100));
  p.cash += principal;
  p.loan = payback;
  p.loanRoundsLeft = LOAN_DURATION;
  s.squares.forEach((st, i) => {
    if (st.owner === p.id && BOARD[i].mortgageValue && !st.loanLocked && !st.mortgaged) st.loanLocked = true;
  });
  log(s, `\u{1F3E6} ${p.name} borrowed LKR ${fmt(principal)} from Bank of Ceylon (${rate}% flat; LKR ${fmt(payback)} due in ${LOAN_DURATION} rounds). Collateral locked.`, "money");
  return true;
}
function validTrade(s, o) {
  const from = s.players[o.fromId];
  const to = s.players[o.toId];
  if (o.fromId === o.toId) return "Pick a different partner.";
  if (o.giveCash < 0 || o.wantCash < 0) return "Cash amounts cannot be negative.";
  if (o.giveCash > from.cash) return "You cannot offer more cash than you have.";
  if (o.wantCash > to.cash) return "Your partner cannot pay that much cash.";
  if (o.giveSquare !== null) {
    const st = s.squares[o.giveSquare];
    if (st.owner !== o.fromId) return "You do not own the offered property.";
    if (st.loanLocked) return "The offered property is loan-locked as collateral.";
    const g = BOARD[o.giveSquare].group;
    if (g && GROUP_SQUARES[g].some((i) => s.squares[i].buildings > 0)) {
      return "Must sell all buildings in the district before trading this property.";
    }
  }
  if (o.wantSquare !== null) {
    const st = s.squares[o.wantSquare];
    if (st.owner !== o.toId) return "Your partner does not own the requested property.";
    if (st.loanLocked) return "The requested property is loan-locked as collateral.";
    const g = BOARD[o.wantSquare].group;
    if (g && GROUP_SQUARES[g].some((i) => s.squares[i].buildings > 0)) {
      return "Your partner must sell buildings in the district before trading.";
    }
  }
  if (o.giveSquare === null && o.giveCash === 0 && o.wantSquare === null && o.wantCash === 0) {
    return "An empty trade is not a trade.";
  }
  return null;
}
function applyTrade(s, o) {
  const from = s.players[o.fromId];
  const to = s.players[o.toId];
  if (o.giveSquare !== null) s.squares[o.giveSquare].owner = o.toId;
  if (o.wantSquare !== null) s.squares[o.wantSquare].owner = o.fromId;
  if (o.giveCash > 0) {
    from.cash -= o.giveCash;
    to.cash += o.giveCash;
  }
  if (o.wantCash > 0) {
    to.cash -= o.wantCash;
    from.cash += o.wantCash;
  }
  const giveName = o.giveSquare !== null ? BOARD[o.giveSquare].name : null;
  const wantName = o.wantSquare !== null ? BOARD[o.wantSquare].name : null;
  log(s, `\u{1F91D} TRADE: ${from.name} gave ${giveName ? giveName : ""}${giveName && o.giveCash ? " + " : ""}${o.giveCash ? `LKR ${fmt(o.giveCash)}` : ""} \u2192 ${to.name} for ${wantName ? wantName : ""}${wantName && o.wantCash ? " + " : ""}${o.wantCash ? `LKR ${fmt(o.wantCash)}` : ""}.`, "event");
  for (const g of Object.values(GROUPS)) {
    const owner = ownsMonopoly(s, o.fromId, g.id) ? o.fromId : ownsMonopoly(s, o.toId, g.id) ? o.toId : null;
    if (owner !== null) {
      log(s, `\u{1F31F} ${s.players[owner].name} now holds the ${GROUPS[g.id].name} monopoly!`, "event");
    }
  }
}
function endTurn(s) {
  if (s.phase === "gameOver") return;
  s.lastRoll = null;
  s.pendingTrade = null;
  if (s.hasBonusRoll && !cur(s).bankrupt && !cur(s).inJail) {
    s.hasBonusRoll = false;
    s.phase = "preRoll";
    log(s, `\u{1F3B2} ${cur(s).name} rolls again for their DOUBLES bonus!`, "info");
    return;
  }
  s.hasBonusRoll = false;
  s.consecutiveDoubles = 0;
  let i = s.current;
  for (let n = 0; n < s.players.length; n++) {
    i = (i + 1) % s.players.length;
    if (!s.players[i].bankrupt) break;
  }
  const wrapped = i !== s.current && i <= s.current;
  s.current = i;
  if (checkGameOver(s)) return;
  if (wrapped) processEndOfRound(s);
  if (!isOver(s)) s.phase = "preRoll";
}
function isOver(s) {
  return s.phase === "gameOver";
}
function processEndOfRound(s) {
  s.round++;
  if (s.round > s.maxRounds) {
    s.round = s.maxRounds;
    gameOverByWorth(s);
    return;
  }
  s.squares.forEach((st, i) => {
    if (st.owner !== null && st.buildings > 0) {
      st.condition = Math.max(0, (st.condition ?? 100) - 2);
      if (st.condition === 24) {
        log(s, `\u{1F3DA}\uFE0F ${BOARD[i].name}'s buildings fell below 25% condition and are CLOSED until maintained!`, "danger");
      }
    }
  });
  for (const p of s.players) {
    if (p.bankrupt || p.loan <= 0) continue;
    p.loanRoundsLeft--;
    if (p.loanRoundsLeft <= 0) {
      if (p.cash >= p.loan) {
        p.cash -= p.loan;
        p.loan = 0;
        s.squares.forEach((st) => {
          if (st.owner === p.id) st.loanLocked = false;
        });
        log(s, `\u{1F3E6} ${p.name} auto-settled their maturing Bank loan at deadline.`, "money");
      } else {
        p.loan = 0;
        s.squares.forEach((st, i) => {
          if (st.owner === p.id && st.loanLocked) {
            st.owner = null;
            st.buildings = 0;
            st.shield = 0;
            st.loanLocked = false;
            st.damaged = false;
            st.mortgaged = false;
            st.condition = 100;
          }
        });
        log(s, `\u{1F6A8} LOAN DEFAULT! The Bank of Ceylon foreclosed ${p.name}'s pledged collateral.`, "danger");
      }
    }
  }
  s.cycleRoundsLeft--;
  if (s.cycleRoundsLeft <= 0) {
    s.cycleIndex = (s.cycleIndex + 1) % MACRO_CYCLES.length;
    s.cycleRoundsLeft = CYCLE_LENGTH;
    const cyc = MACRO_CYCLES[s.cycleIndex];
    log(s, `\u{1F30F} MACRO SHIFT: ${cyc.icon} ${cyc.name} active for ${CYCLE_LENGTH} rounds! (${cyc.desc})`, "cycle");
  }
}
function checkGameOver(s) {
  const solvent = s.players.filter((p) => !p.bankrupt);
  if (solvent.length <= 1 && s.phase !== "gameOver") {
    s.winner = solvent.length === 1 ? solvent[0].id : null;
    s.phase = "gameOver";
    log(s, solvent.length === 1 ? `\u{1F3C6} ${solvent[0].name} is the last tycoon standing \u2014 GAME OVER.` : "Everyone is bankrupt. The bank wins.", "event");
    return true;
  }
  return false;
}
function gameOverByWorth(s) {
  const standings = s.players.filter((p) => !p.bankrupt).sort((a, b) => netWorth(s, b.id) - netWorth(s, a.id));
  s.winner = standings[0]?.id ?? null;
  s.phase = "gameOver";
  log(s, `\u{1F3C6} MATCH COMPLETE at round ${s.maxRounds}. Final standings by net worth: ${standings.map((p) => `${p.name} (LKR ${fmt(netWorth(s, p.id))})`).join(", ")}.`, "event");
}

// src/engine/bots.ts
function botToAct(s) {
  switch (s.phase) {
    case "auction":
      return s.players[auctionCurrentBidder(s)].kind === "bot";
    case "gameOver":
      return false;
    default:
      return s.players[s.current].kind === "bot";
  }
}
function botAct(s) {
  switch (s.phase) {
    case "preRoll": {
      const p = cur(s);
      if (p.kind !== "bot") return;
      if (p.inJail && p.cash > 6e3) payBail(s);
      takeTurnRoll(s);
      return;
    }
    case "decideBuy": {
      if (cur(s).kind !== "bot") return;
      if (botWantsBuy(s)) buyCurrent(s);
      else declineCurrent(s);
      return;
    }
    case "auction": {
      if (s.players[auctionCurrentBidder(s)].kind !== "bot") return;
      if (botWantsBid(s) && auctionBid(s)) return;
      auctionPass(s);
      return;
    }
    case "postRoll": {
      if (cur(s).kind !== "bot") return;
      botDevelop(s);
      botTryTrading(s);
      endTurn(s);
      return;
    }
  }
}
function botWantsBuy(s) {
  if (s.pendingBuy === null) return false;
  const p = cur(s);
  const price = squareValue(s, s.pendingBuy);
  if (p.cash < price) return false;
  switch (p.persona) {
    case "aggressive":
      return p.cash - price >= 1500;
    case "conservative":
      return p.cash - price >= p.cash * 0.45;
    case "risk":
      return true;
    case "opportunist":
      return p.cash - price >= 3e3;
  }
}
function botWantsBid(s) {
  const a = s.auction;
  const bidder = s.players[auctionCurrentBidder(s)];
  const nextMin = a.leader === null ? a.opening : a.currentBid + 250;
  let maxWilling = a.listPrice * 0.9;
  switch (bidder.persona) {
    case "aggressive":
      maxWilling = a.listPrice * 1.25;
      break;
    case "conservative":
      maxWilling = Math.min(bidder.cash * 0.55, a.listPrice * 0.85);
      break;
    case "risk":
      maxWilling = bidder.cash - 1e3;
      break;
    case "opportunist":
      maxWilling = a.listPrice * 0.95;
      break;
  }
  const def = BOARD[a.square];
  if (def.group) {
    const groupSqs = GROUP_SQUARES[def.group];
    const owned = groupSqs.filter((i) => s.squares[i].owner === bidder.id).length;
    if (owned >= groupSqs.length - 1) maxWilling *= 1.35;
  }
  return nextMin <= maxWilling && bidder.cash >= nextMin;
}
function botDevelop(s) {
  const p = cur(s);
  if (p.bankrupt) return;
  s.squares.forEach((st, i) => {
    if (st.owner === p.id && st.damaged && p.cash >= 1600) repairSquare(s, i);
  });
  s.squares.forEach((st, i) => {
    if (st.owner === p.id && st.buildings > 0 && (st.condition ?? 100) < 75 && p.cash >= 3e3) {
      maintainSquare(s, i);
    }
  });
  if (p.cash >= 12e3) {
    s.squares.forEach((st, i) => {
      if (st.owner === p.id && st.mortgaged && canUnmortgageSquare(s, i)) {
        unmortgageSquare(s, i);
      }
    });
  }
  for (let guard = 0; guard < 40; guard++) {
    let built = false;
    s.squares.forEach((st, i) => {
      if (built || st.owner !== p.id || BOARD[i].kind !== "property") return;
      if (!BOARD[i].group || !ownsMonopoly(s, p.id, BOARD[i].group) || st.buildings >= 5) return;
      const reserve = p.persona === "conservative" ? 6e3 : 2e3;
      if (p.cash - buildCostOf(s, i) >= reserve && canBuildAt(s, i)) {
        if (doBuild(s, i)) built = true;
      }
    });
    if (!built) break;
  }
  if (p.persona === "conservative" || p.persona === "opportunist") {
    s.squares.forEach((st, i) => {
      if (st.owner === p.id && st.buildings >= 2 && st.shield === 0 && p.cash >= 5e3) {
        buyShield(s, i, st.buildings === 5 ? 3 : 2);
      }
    });
  }
}
function botTryTrading(s) {
  const p = cur(s);
  if (p.bankrupt || s.pendingTrade) return;
  for (const [groupId, sqs] of Object.entries(GROUP_SQUARES)) {
    const myOwned = sqs.filter((i) => s.squares[i].owner === p.id);
    if (myOwned.length === sqs.length - 1) {
      const missingSq = sqs.find((i) => s.squares[i].owner !== p.id);
      const targetOwner = s.squares[missingSq].owner;
      if (targetOwner === null || targetOwner === p.id || s.squares[missingSq].loanLocked) continue;
      let giveSquare = null;
      for (const i of s.squares.map((st, idx) => ({ st, idx }))) {
        if (i.st.owner === p.id && !i.st.loanLocked && !i.st.mortgaged && BOARD[i.idx].price) {
          const g = BOARD[i.idx].group;
          if (g && !ownsMonopoly(s, p.id, g) && g !== groupId && i.st.buildings === 0) {
            giveSquare = i.idx;
            break;
          }
        }
      }
      const missingVal = squareValue(s, missingSq);
      const giveVal = giveSquare !== null ? squareValue(s, giveSquare) : 0;
      let cashOffer = 0;
      if (giveVal < missingVal) {
        cashOffer = Math.min(p.cash - 2e3, Math.round((missingVal - giveVal) * 1.2 / 250) * 250);
      }
      if (cashOffer < 0) cashOffer = 0;
      const offer = {
        fromId: p.id,
        toId: targetOwner,
        giveSquare,
        giveCash: cashOffer,
        wantSquare: missingSq,
        wantCash: 0
      };
      if (!validTrade(s, offer)) {
        if (s.players[targetOwner].kind === "bot") {
          if (botEvaluateTrade(s, offer)) {
            applyTrade(s, offer);
            return;
          }
        } else {
          s.pendingTrade = offer;
          return;
        }
      }
    }
  }
}
function botEvaluateTrade(s, o) {
  const bot = s.players[o.toId];
  if (bot.kind !== "bot") return false;
  const giveValue = (o.wantSquare !== null ? squareValue(s, o.wantSquare) * 1.1 : 0) + o.wantCash;
  const getValue = (o.giveSquare !== null ? squareValue(s, o.giveSquare) * 0.9 : 0) + o.giveCash;
  if (giveValue <= 0) return false;
  let factor = 1;
  switch (bot.persona) {
    case "conservative":
      factor = 1.15;
      break;
    case "opportunist":
      factor = 1.05;
      break;
    case "aggressive":
      factor = 1;
      break;
    case "risk":
      factor = 0.95;
      break;
  }
  const wantsGroup = o.giveSquare !== null ? BOARD[o.giveSquare].group : null;
  if (wantsGroup) {
    const sqs = GROUP_SQUARES[wantsGroup];
    const owned = sqs.filter((i) => s.squares[i].owner === bot.id).length;
    if (owned >= sqs.length - 1) factor -= 0.25;
  }
  return getValue >= giveValue * factor;
}

// scripts/sim.ts
var seeds = [1, 42, 2026, 777, 99999];
var failures = 0;
var lineup = [
  { name: "Kasun", kind: "bot", persona: "aggressive", tokenKey: "tuktuk" },
  { name: "Nimali", kind: "bot", persona: "conservative", tokenKey: "elephant" },
  { name: "Roshan", kind: "bot", persona: "risk", tokenKey: "train" },
  { name: "Dilani", kind: "bot", persona: "opportunist", tokenKey: "dancer" }
];
for (const seed of seeds) {
  const s = createGame({ players: lineup, seed, maxRounds: 25 });
  let steps = 0;
  let stuck = false;
  while (s.phase !== "gameOver" && steps < 5e5) {
    if (botToAct(s)) {
      botAct(s);
    } else {
      stuck = true;
      break;
    }
    steps++;
  }
  const winner = s.winner !== null ? s.players[s.winner].name : "none";
  const cyclesSeen = s.cycleIndex;
  const ok = !stuck && s.phase === "gameOver" && s.winner !== null;
  if (!ok) failures++;
  console.log(`seed=${seed} ${ok ? "OK " : "FAIL"} rounds=${s.round} steps=${steps} phase=${s.phase} winner=${winner} cyclesReached=${cyclesSeen} poyaPool=${s.poyaPool}`);
  for (const p of s.players) {
    const props = s.squares.filter((x) => x.owner === p.id).length;
    const built = s.squares.filter((x) => x.owner === p.id && x.buildings > 0).length;
    const shielded = s.squares.filter((x) => x.owner === p.id && x.shield > 0).length;
    console.log(`   ${p.name.padEnd(7)} bankrupt=${p.bankrupt ? "Y" : "n"} net=${netWorth(s, p.id).toLocaleString()} cash=${p.cash.toLocaleString()} props=${props} built=${built} shields=${shielded} loan=${p.loan}`);
  }
  const unowned = s.squares.filter((x, i) => x.owner === null && [1, 3, 5, 6, 8, 9, 11, 12, 13, 14, 15, 16, 18, 19, 21, 23, 24, 25, 26, 27, 28, 29, 31, 32, 34, 35, 37, 39].includes(i)).length;
  console.log(`   unowned purchasable: ${unowned}/28`);
}
console.log(failures === 0 ? "ALL SIMULATIONS PASSED" : `${failures} SIMULATIONS FAILED`);
process.exit(failures === 0 ? 0 : 1);
