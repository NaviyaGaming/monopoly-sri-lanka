// ─── AI Tycoon Banter & Speech Bubbles ─────────────────────────────────────
// Contextual personality dialogue popping up over player cards

import type { Persona } from '../engine/types';

export type BanterEvent =
  | 'roll_doubles'
  | 'buy'
  | 'rent_pay'
  | 'rent_collect'
  | 'jail'
  | 'auction_bid'
  | 'auction_pass'
  | 'bankrupt';

const QUOTES: Record<Persona, Partial<Record<BanterEvent, string[]>>> = {
  aggressive: {
    roll_doubles: [
      'Tuk-tuk nitro engaged! Rolling again! 🛺',
      'Doubles! The road to Colombo is clear!',
      'Speeding past everyone! Bonus turn!',
    ],
    buy: [
      'Ado, another one for my fleet! Colombo is mine!',
      'Signed and sealed! Don’t even try to bid against me!',
      'Prime location acquired! Luxury tariffs coming soon!',
    ],
    rent_pay: [
      'Machan, your meter is running too fast! Take the cash!',
      'Ado! That rent hurts, but my cash flow will recover!',
      'Expensive stop! Next time I take the bypass road!',
    ],
    rent_collect: [
      'Bohoma sthuthi! Fuel prices are up, thanks for the fare! 💸',
      'Welcome to my estate! Premium tariffs apply!',
      'Another visitor, another harvest! Cha-ching! ✨',
    ],
    jail: [
      'CID inquiry?! Call my lawyer in Hultsdorf immediately! ⚖️',
      'Ado, who tipped off the Inland Revenue?!',
      'Just taking a tea break at the station, I’ll bail out soon!',
    ],
    auction_bid: [
      'Raise the bid! If you don’t have cash, step aside! 🔨',
      'I’ll go higher! Who wants to challenge the Tuk Tycoon?!',
    ],
    auction_pass: [
      'Not worth my hard-earned cash. You can keep it!',
      'Overpriced rubbish. I pass!',
    ],
    bankrupt: [
      'My tuk-tuk ran out of fuel... You won this round, machan! 💀',
      'Bankrupt! The Ceylon market defeated me today!',
    ],
  },
  conservative: {
    roll_doubles: [
      'Double roll. A favorable turn according to Serendib rules.',
      'Bonus movement granted with zero additional risk.',
    ],
    buy: [
      'A prudent asset acquisition with dependable dividend yield. 📜',
      'Added to the portfolio. Safe and stable like Ceylon tea.',
      'Secured within budgetary allocation.',
    ],
    rent_pay: [
      'An operational expense, duly settled from cash reserves.',
      'A minor cost of conducting enterprise on this island.',
    ],
    rent_collect: [
      'Tenant dividend collected per agreement terms. 💼',
      'Prudent investment bearing steady interest.',
    ],
    jail: [
      'A routine regulatory audit. My accounts are spotless.',
      'Just consulting with legal counsel. All completely above board.',
    ],
    auction_bid: [
      'A disciplined increment within fair market valuation.',
      'I bid conservatively up to the asset reserve value.',
    ],
    auction_pass: [
      'The risk-to-yield ratio is unfavorable. I withdraw.',
      'Exceeds prudent valuation. Passing.',
    ],
    bankrupt: [
      'Insolvency declared. Prudence dictates orderly liquidation.',
      'A challenging economic cycle. Well played, tycoons.',
    ],
  },
  risk: {
    roll_doubles: [
      'Double sixes! Fortune always favors the bold! 🎲🎲',
      'High speed, high stakes! Rolling again!',
    ],
    buy: [
      'Sign the deed! If you don’t take risks, you don’t build empires! 🏛️',
      'Another port under my flag! Galle to Trinco will be mine!',
      'Cash is meant to be spent! Mine!',
    ],
    rent_pay: [
      'Heavy tariff! But fortune swings back fast!',
      'Just a temporary liquidity dip! We sail on!',
    ],
    rent_collect: [
      'Welcome to luxury harbor living! Pay up! 💰',
      'High risk, massive rewards! Thank you for the rent!',
    ],
    jail: [
      'Financial audit? I declare nothing! Free enterprise! 🚨',
      'They can’t hold a tycoon for long!',
    ],
    auction_bid: [
      'Higher! Who has the nerve to match me?! 🔨🔥',
      'All in! Let’s see who blinks first!',
    ],
    auction_pass: [
      'I’m saving my firepower for the grand estates!',
      'Small fish. Moving on!',
    ],
    bankrupt: [
      'Shipwrecked! But what a glorious voyage! 🚢💥',
      'Took the biggest risks, paid the ultimate price! GG!',
    ],
  },
  opportunist: {
    roll_doubles: [
      'Bonus roll! Exploiting this opening immediately!',
      'The market trends in our favor! Rolling again!',
    ],
    buy: [
      'Acquired at an optimal valuation discount! 📊',
      'Snagged before the next district boom cycle hits!',
      'A tactical acquisition to block rival monopolies!',
    ],
    rent_pay: [
      'Unfavorable market timing, but my liquidity handles it.',
      'Paid. I will recover this on my next turn.',
    ],
    rent_collect: [
      'Market timing pays off! Enjoy your stay on my land! ✨',
      'Monopoly dividends delivered right on schedule!',
    ],
    jail: [
      'A brief timeout. The market will wait for me.',
      'Strategizing from within the inquiry room.',
    ],
    auction_bid: [
      'Bidding at an opportunistic margin! 📈',
      'Underpriced asset detected — bidding!',
    ],
    auction_pass: [
      'Over-inflated hype. I’ll wait for the distress sale.',
      'Passing. Better opportunities await.',
    ],
    bankrupt: [
      'The macroeconomic cycle was unforgiving today. Well played!',
      'Liquidity dried up. A masterclass match!',
    ],
  },
};

export function showSpeechBubble(playerId: number, text: string): void {
  const panel = document.getElementById('players-scoreboard');
  if (!panel) return;

  const rows = panel.querySelectorAll<HTMLElement>('.richup-player-row');
  const targetRow = rows[playerId];
  if (!targetRow) return;

  // Remove existing bubble if any
  targetRow.querySelector('.bot-speech-bubble')?.remove();

  const bubble = document.createElement('div');
  bubble.className = 'bot-speech-bubble';
  bubble.textContent = `"${text}"`;
  targetRow.appendChild(bubble);

  setTimeout(() => {
    bubble.classList.add('fade-out');
    setTimeout(() => bubble.remove(), 350);
  }, 3400);
}

export function triggerBotBanter(persona: Persona, playerId: number, event: BanterEvent): void {
  const pool = QUOTES[persona]?.[event];
  if (!pool || pool.length === 0) return;
  const quote = pool[Math.floor(Math.random() * pool.length)];
  showSpeechBubble(playerId, quote);
}
