# POLA 🏪

**A Sri Lankan property trading game — by PixalAI.**

Buy the island, survive the economy, send your friends to the Rest House.
POLA is a web-based property game inspired by the MONOPOLY-LK design, rebuilt
as a real product: you play against four AI opponents with distinct investment
personalities, on a board that behaves like the Sri Lankan economy — inflation
cycles, property booms and busts, national event cards, and government
regulations.

> **Why "Pola"?** *Pola* (පොළ) is the Sinhala word for marketplace. It's short,
> brandable, and legally clean — no Hasbro trademarks anywhere.

---

## Run it

```bash
cd pola
npm install
npm run dev        # → http://localhost:5173
```

Production build: `npm run build` (outputs to `dist/`, deploy anywhere static).

Headless engine check (4 bots, 5 seeds, no browser):

```bash
npx esbuild scripts/sim.ts --bundle --platform=node --outfile=scripts/sim.cjs
node scripts/sim.cjs
```

## How to play

1. **Setup** — enter your name, pick opponents (any mix of the four bots),
   choose a ruleset and game length.
2. **Roll** — two dice, move clockwise. Doubles grant a bonus roll; three
   doubles in a row earns a court summons.
3. **Buy or pass** — unowned squares you land on can be bought at the listed
   price, or passed to a **live auction** (opening bid 50% of market value,
   LKR 250 increments — you bid against the bots).
4. **Build** — own every square of a colour group to build houses (evenly,
   max 4) and then a hotel. Rents scale 1× → 2× → 3× → 5× → 7× → 10×.
5. **Survive** — pass Start for LKR 2,000, pay Income Tax, dodge the Court
   Summons. Cash short? The game auto-liquidates your buildings (half price)
   and mortgages properties before declaring bankruptcy.
6. **Win** — last player solvent, or highest net worth when the round limit
   hits. Net worth = cash + properties + buildings (market-adjusted).

## The Economy ruleset

| System | Cadence | Effect |
|---|---|---|
| Inflation / deflation | every 10 rounds | −3% … +12%, **compounds** into every price, rent, and cost |
| Market boom / decline | every 10 rounds | one random district +15% price / +25% rent, another −15% / −20%, for 10 rounds |
| National Event cards | landing on 📜 | 20-card deck: tourism hype, fuel shortages, floods, tax amnesties, disasters… |
| Government regulations | every 20 rounds | railway modernisation, electricity tariffs, housing subsidies, tax hikes |

The **Classic** ruleset disables all four for pure property trading — use it
to teach new players, and as the balance baseline.

## The four bots

| Bot | Style | Tells |
|---|---|---|
| 🔴 The Aggressive Investor | Expansion | bids to 120% of market, builds the moment a monopoly lands, hates selling |
| 🔵 The Conservative Banker | Safety | only spends half its cash, loves railways & utilities, huge reserves |
| 🟠 The Risk Taker | Speculation | buys everything it can afford, bids till cash runs out |
| 🟢 The Opportunistic Trader | Market timing | hunts discounts during declines, pauses construction during inflation |

Bots call the exact same engine functions the human UI does — one rules path,
no cheating.

## Architecture

```
src/
  engine/          ← pure TypeScript, zero DOM, deterministic
    types.ts       GameState, phases, modifiers
    config.ts      board (40 squares), groups, rent tables, cards, personas
    rng.ts         seeded mulberry32 — every match replays from its seed
    economy.ts     modifier system + all value getters (price/rent/net worth)
    engine.ts      turn state machine: roll, land, buy, auction, build, jail,
                   debt liquidation, bankruptcy, round ticks
    bots.ts        persona decision functions (buy / bid / build / jail)
  ui/
    render.ts      DOM renderer + setup screen, card popup, game-over dialog
    styles.css     dark board theme
  main.ts          driver: human actions from UI, bot actions on a timer
scripts/sim.ts     headless full-game verification (terminates, winner, sane)
```

**Design decisions worth knowing**

- *Deterministic core.* All randomness flows through `GameState.rngState`
  (mulberry32). Same seed → identical match. This is the foundation for
  replays, spectating, server-authoritative multiplayer, and anti-cheat later.
- *Juice is a layer, not a rule change.* 3D dice (CSS cubes), token hop
  animations, WebAudio sound effects, money floaters, landing pulses and the
  win confetti all live in `src/ui/` (`dice.ts`, `fx.ts`) and are driven by
  the same `perform()` pipeline in `main.ts` — the engine stays pure and
  synchronous. Fast mode (⚡) and mute (🔊) persist in localStorage.
- *Modifiers as data.* Booms, cards, and regulations all compile to one
  `Modifier` list (`target × stat × multiplier × rounds`). Adding an effect
  never means touching the rent function.
- *Spec stays the source of truth.* Board layout, group prices, rent
  multipliers, auction and jail rules follow the original MONOPOLY-LK spec;
  the two deliberate deviations are documented in `config.ts`:
  company names are fictionalised (trademark safety) and utility rent is
  scaled ×25 so "4× dice" lands on the same LKR scale as everything else.

## Roadmap

- [x] **Phase 1** — playable web prototype: 1 human + bots, Economy ruleset
- [ ] Loans & insurance (the Bank of Serendib and the two insurers are already
      on the board; the spec's Rule-LK 1–11 defines them)
- [ ] Online multiplayer rooms (Colyseus, server-authoritative, seeded RNG)
- [ ] Async turns with notifications — the diaspora feature
- [ ] Sinhala / Tamil localisation, mobile wrappers (Capacitor)
- [ ] Cosmetics: tokens (tuk-tuk, elephant, cricket bat), themed boards
