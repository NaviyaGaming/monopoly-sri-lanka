// Headless full-game simulation: 4 bots, multiple seeds.
// Verifies the Serendib Tycoon engine terminates, produces winners,
// exercises cycles/loans/shields without getting stuck.
import { createGame } from '../src/engine/engine';
import { botAct, botToAct } from '../src/engine/bots';
import { netWorth } from '../src/engine/economy';
import type { PlayerSetup } from '../src/engine/types';

const seeds = [1, 42, 2026, 777, 99999];
let failures = 0;

const lineup: PlayerSetup[] = [
  { name: 'Kasun', kind: 'bot', persona: 'aggressive', tokenKey: 'tuktuk' },
  { name: 'Nimali', kind: 'bot', persona: 'conservative', tokenKey: 'elephant' },
  { name: 'Roshan', kind: 'bot', persona: 'risk', tokenKey: 'train' },
  { name: 'Dilani', kind: 'bot', persona: 'opportunist', tokenKey: 'dancer' },
];

for (const seed of seeds) {
  const s = createGame({ players: lineup, seed, maxRounds: 25 });

  let steps = 0;
  let stuck = false;
  while (s.phase !== 'gameOver' && steps < 500_000) {
    if (botToAct(s)) {
      botAct(s);
    } else {
      stuck = true;
      break;
    }
    steps++;
  }

  const winner = s.winner !== null ? s.players[s.winner].name : 'none';
  const cyclesSeen = s.cycleIndex;
  const ok = !stuck && s.phase === 'gameOver' && s.winner !== null;
  if (!ok) failures++;
  console.log(`seed=${seed} ${ok ? 'OK ' : 'FAIL'} rounds=${s.round} steps=${steps} phase=${s.phase} winner=${winner} cyclesReached=${cyclesSeen} poyaPool=${s.poyaPool}`);
  for (const p of s.players) {
    const props = s.squares.filter(x => x.owner === p.id).length;
    const built = s.squares.filter(x => x.owner === p.id && x.buildings > 0).length;
    const shielded = s.squares.filter(x => x.owner === p.id && x.shield > 0).length;
    console.log(`   ${p.name.padEnd(7)} bankrupt=${p.bankrupt ? 'Y' : 'n'} net=${netWorth(s, p.id).toLocaleString()} cash=${p.cash.toLocaleString()} props=${props} built=${built} shields=${shielded} loan=${p.loan}`);
  }
  const unowned = s.squares.filter((x, i) => x.owner === null && [1, 3, 5, 6, 8, 9, 11, 12, 13, 14, 15, 16, 18, 19, 21, 23, 24, 25, 26, 27, 28, 29, 31, 32, 34, 35, 37, 39].includes(i)).length;
  console.log(`   unowned purchasable: ${unowned}/28`);
}

console.log(failures === 0 ? 'ALL SIMULATIONS PASSED' : `${failures} SIMULATIONS FAILED`);
process.exit(failures === 0 ? 0 : 1);
