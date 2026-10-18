// ─── Economy: cycle-driven rents, values, collateral, net worth ──────────
// Recreated from the author's design: macro cycles replace the old
// modifier/inflation stack. All prices flow through these getters.

import type { GameState, GroupId } from './types';
import { BOARD, GROUP_SQUARES, MACRO_CYCLES, START_BONUS } from './config';

export function currentCycle(s: GameState) {
  return MACRO_CYCLES[s.cycleIndex] ?? MACRO_CYCLES[0];
}

export function ownsMonopoly(s: GameState, playerId: number, group: GroupId): boolean {
  const sqs = GROUP_SQUARES[group];
  return sqs.length > 0 && sqs.every(i => s.squares[i].owner === playerId);
}

export function groupOwnerOf(s: GameState, group: GroupId): number | null {
  const sqs = GROUP_SQUARES[group];
  let owner: number | null = null;
  for (const i of sqs) {
    const o = s.squares[i].owner;
    if (o === null) return null;
    if (owner === null) owner = o;
    else if (owner !== o) return null;
  }
  return owner;
}

export function railwaysOwnedBy(s: GameState, playerId: number): number {
  return BOARD.filter((b, i) => b.kind === 'railway' && s.squares[i].owner === playerId).length;
}

export function startBonus(s: GameState): number {
  return currentCycle(s).id === 'inflation'
    ? Math.round(START_BONUS * 1.15)
    : START_BONUS;
}

// Market value of a square (inflation +15%, tourism Southern/Kandy +15%,
// Green Ports perk +25% once monopolized).
export function squareValue(s: GameState, idx: number): number {
  const def = BOARD[idx];
  if (!def.price) return 0;
  let val = def.price;
  const cyc = currentCycle(s).id;
  if (cyc === 'inflation') val = Math.round(val * 1.15);
  if (cyc === 'tourism' && (def.group === 'yellow' || def.group === 'red')) val = Math.round(val * 1.15);
  if (def.group === 'green' && s.squares[idx].owner !== null && ownsMonopoly(s, s.squares[idx].owner!, 'green')) {
    val = Math.round(val * 1.25);
  }
  return val;
}

export function buildingLevel(idx: number, s: GameState): number {
  return s.squares[idx].buildings;
}

export function effectiveRent(s: GameState, idx: number, diceSum: number): number {
  const def = BOARD[idx];
  const st = s.squares[idx];
  if (st.owner === null || st.damaged || st.mortgaged) return 0;
  const cyc = currentCycle(s).id;

  if (def.kind === 'railway') {
    const count = railwaysOwnedBy(s, st.owner);
    let rent = 400 * Math.pow(2, Math.max(0, count - 1));
    if (cyc === 'fuel') rent *= 2;
    return rent;
  }

  if (def.kind === 'utility') {
    const count = BOARD.filter((b, i) => b.kind === 'utility' && s.squares[i].owner === st.owner).length;
    let mult = count >= 2 ? 200 : 80;
    if (cyc === 'fuel') mult *= 2;
    return mult * diceSum;
  }

  if (def.kind === 'property' && def.rents && def.group) {
    let rent = def.rents[st.buildings] ?? def.rents[0];
    const mono = ownsMonopoly(s, st.owner, def.group);
    if (mono && st.buildings === 0) rent = Math.round(rent * 1.5); // unimproved monopoly bonus
    if (mono && def.group === 'brown') rent = Math.round(rent * 1.2);
    if (mono && def.group === 'lightblue' && railwaysOwnedBy(s, st.owner) > 0) rent = Math.round(rent * 1.25);
    if (cyc === 'tourism') {
      if (def.group === 'red') rent = Math.round(rent * 1.5);
      else if (st.buildings === 5) {
        rent = Math.round(rent * (def.group === 'yellow' ? 1.4 : 1.3));
      }
    }
    if (cyc === 'inflation') rent = Math.round(rent * 1.15);
    if (cyc === 'monsoon' && def.group !== 'yellow') rent = Math.round(rent * 0.95);

    // Rule-LK 26 Building Condition Table
    if (st.buildings > 0 && typeof st.condition === 'number') {
      if (st.condition < 25) {
        return 0; // Building Closed
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

// Construction cost: Pink perk −20%, inflation +15%, fuel +20%.
export function buildCostOf(s: GameState, idx: number): number {
  const def = BOARD[idx];
  if (!def.buildCost) return 0;
  let cost = def.buildCost;
  if (def.group === 'pink') cost = Math.round(cost * 0.8);
  const cyc = currentCycle(s).id;
  if (cyc === 'inflation') cost = Math.round(cost * 1.15);
  if (cyc === 'fuel') cost = Math.round(cost * 1.2);
  return cost;
}

// Rule-LK 27 Maintenance Cost
export function maintenanceCostOf(s: GameState, idx: number): number {
  const def = BOARD[idx];
  const st = s.squares[idx];
  if (!def.buildCost || st.buildings === 0) return 0;
  const baseCost = buildCostOf(s, idx);
  if (st.buildings === 5) return Math.round(baseCost * 0.08); // Hotel: 8%
  return Math.round(baseCost * 0.05 * st.buildings);          // Houses: 5% each
}

export function shieldCost(s: GameState, idx: number, tier: 1 | 2 | 3): number {
  const def = BOARD[idx];
  if (!def.price) return 0;
  const onInsuranceSquare = BOARD[s.players[s.current].position]?.kind === 'insurance';
  const discount = onInsuranceSquare ? 0.8 : 1;
  const rate = tier === 3 ? 0.15 : tier === 2 ? 0.10 : 0.05;
  return Math.round(def.price * rate * discount);
}

export function maxBorrowLimit(s: GameState, playerId: number): number {
  let total = 0;
  s.squares.forEach((st, i) => {
    if (st.owner === playerId && !st.loanLocked && !st.mortgaged && BOARD[i].mortgageValue) {
      total += BOARD[i].mortgageValue!;
    }
  });
  return Math.floor((total * 0.75) / 100) * 100;
}

export function effectiveLoanRate(s: GameState): number {
  const onBank = BOARD[s.players[s.current].position]?.kind === 'bank';
  const base = onBank ? 10 : 15;
  return Math.max(5, base + currentCycle(s).loanRateMod);
}

export function effectiveTax(s: GameState): number {
  const def = BOARD[4];
  return def.taxAmount ?? 1500;
}

export function netWorth(s: GameState, playerId: number): number {
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

export function log(s: GameState, text: string, kind: 'info' | 'money' | 'danger' | 'event' | 'auction' | 'cycle' = 'info'): void {
  s.log.push({ round: s.round, text, kind });
  if (s.log.length > 400) s.log.splice(0, s.log.length - 400);
}

export function fmt(n: number): string {
  return n.toLocaleString('en-US');
}
