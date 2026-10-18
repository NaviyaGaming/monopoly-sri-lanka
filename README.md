# POLA 🏪 — Sri Lankan Property Trading Game

**A high-stakes Sri Lankan property trading and economic simulation game — crafted by PixalAI.**

Buy the island, navigate economic cycles, trade estates, and bankrupt your rivals!  
**POLA** (*පොළ* — marketplace) is a modern web-based property game inspired by the Sri Lankan economy. It combines classic property trading with dynamic macroeconomic cycles (inflation, district booms & busts, fuel crises, government regulations), intelligent AI tycoons, and peer-to-peer online multiplayer.

---

## 🌟 Key Features

### 🌿 Sri Lankan Emerald & Gold Aesthetic
- **Distraction-Free Elegance:** Clean, modern, high-contrast dark palette (`#0b1914` background, deep emerald `#0f2920` panels, `#10b981` accents, and `#fbbf24` gold highlights).
- **Full Unbroken Place Names:** Unwrapped, clean, legible Sri Lankan district labels across all 40 tiles with bottom-docked player tokens that never obscure location names.
- **Zero-Glow Minimalist Polish:** Subtle borders and crisp typography optimized for clarity and speed without blinding glow effects.

### 🌟 Cinematic Ceylon Splash Screen
- **Authentic Island Lore:** Animated dual-orbit gold emblem rings, floating sparkles, bouncing Tuk-Tuk `🛺`, and tumbling dice.
- **Rotating Economic Trivia:** Real-time progress calibration paired with insightful Sri Lankan trading tips and cultural trivia.

### 💬 AI Tycoon Banter & Speech Bubbles
- **Contextual In-Game Speech:** Bots react dynamically to doubles rolls, aggressive buyouts, hefty rent payments, CID arrests, and auction battles with speech bubbles over their player cards.
- **Interactive Emotes:** Send one-tap emoji reactions (😂, 💸, 🛺, 👑, 💀, 🔥) that pop up directly on player cards for both local bots and live P2P opponents.

### 📲 1-Tap WhatsApp Room Invites
- **Instant Social Play:** One-click WhatsApp sharing from both the waiting lobby and the in-game chat header with auto-formatted game links and room codes.

### 🎲 Tactile White Dice & Direct Action Hub
- **Tactile 3D White Dice:** Beautifully weighted, rounded white cubes with contrast pips, authentic tumble physics, and subtle resting tilt.
- **Direct Action Pills:** Sleek, accessible action buttons (Roll, End Turn, Buy, Auction) positioned directly in the center hub.
- **Center Activity Feed:** Real-time, legible ticker capturing rents paid, property deals, summons, and economic shifts.

### 👥 Right-Side Player Cards & Status Dock
- **Circular Player Avatars:** Distinct color-coded tokens, active turn indicators, and real-time cash balances.
- **Deed Badges:** Immediate visual breakdown of owned districts, utilities, and railway lines.
- **Universal Deed Inspector:** Tap any property cell on the board or in player cards to open the complete property deed sheet with full rent tiers and mortgage details.

### 🏦 Bank of Serendib & Disaster Shields
- **Collateral Loans:** Borrow up to 50% of your real estate equity from the Bank of Serendib to survive rent crunches.
- **Disaster Shielding:** Fortify properties against monsoon storms, power cuts, and municipal tariffs with Tier 1–3 insurance shields.

### 🌐 Peer-to-Peer Online Multiplayer
- **Instant Rooms:** Create a private room or join via a 4-letter room code.
- **Direct WebRTC P2P:** Zero-latency peer-to-peer gameplay powered by PeerJS.
- **Live In-Game Chat:** Taunt opponents or negotiate deals in real time with quick-share WhatsApp integration.

### 🤝 Bilateral Visual Trade Desk
- Select any player to propose custom trades: package deeds and cash sweeteners with instant bot or human evaluation.

### 🔨 Split Live Auction Bidding Room
- Properties passed by landing players trigger a live auction with AI tycoons or human peers. Real-time incremental bids (+LKR 250) until the hammer drops.

### 🏆 Match Victory Podium & Career XP
- **Post-Match Podium:** 1st, 2nd, 3rd, and 4th place ranking based on liquidated net worth.
- **Timeline Graph:** Interactive canvas charting net worth progression round-by-round.
- **Player Accolades:** Special awards (e.g. *Monopoly King*, *Rail Baron*, *Economy Survivor*).
- **Career Leveling:** Persistent XP and Tycoon Rank saved across browser sessions.

---

## 🕹️ How to Play

1. **Setup Match:** Enter your name, choose opponents (any mix of 4 distinct AI personalities or invite friends via online room), and pick your game duration.
2. **Roll & Move:** Roll the pair of white dice. Rolling doubles gives you a bonus turn (beware: 3 consecutive doubles sends you to the Rest House!).
3. **Acquire & Auction:** Land on unowned locations (Galle Face, Kandy Lake, Nuwara Eliya, etc.) to purchase them outright. Passing sends the deed to an open live auction.
4. **Develop Districts:** Complete a color set to build houses and luxury hotels, dramatically multiplying rents.
5. **Weather the Economy:** Adapt to 10-round inflation adjustments, district booms/busts, and Sri Lankan national event cards.
6. **Victory:** Force your opponents into bankruptcy, or hold the highest net worth when the round limit expires!

---

## 📊 The Dynamic Economy Ruleset

| System | Cadence | Economic Impact |
|---|---|---|
| **Inflation / Deflation** | Every 10 rounds | Compounding −3% to +12% shift on all board prices, rents, and building costs |
| **District Booms & Busts** | Every 10 rounds | One random district surges (+15% price / +25% rent) while another declines (−15% / −20%) |
| **National Event Cards** | On 📜 Squares | 20 unique Ceylon scenarios: Tourism surges, Colombo port expansion, fuel rations, tax amnesties |
| **Government Regulations** | Every 20 rounds | Railway modernization subsidies, green energy tariffs, housing acts, and luxury levies |

*(The **Classic** ruleset can be selected during setup for a traditional, pure-trading experience).*

---

## 🤖 The AI Personalities

- 🔴 **The Aggressive Investor:** Hyper-expansionist. Bids up to 120% of market value, develops monopolies immediately, and refuses to sell.
- 🔵 **The Conservative Banker:** Safety-first. Keeps large cash reserves, prioritizes utilities and railways, and avoids reckless debt.
- 🟠 **The Risk Taker:** Speculative gambler. Buys every property it lands on and bids until cash runs out.
- 🟢 **The Opportunistic Trader:** Market timer. Exploits district declines to snap up cheap deeds and halts construction during high inflation.

---

## 🛠️ Architecture & Tech Stack

```
pola/
  ├── src/
  │   ├── engine/          # Pure TypeScript deterministic game simulation
  │   │   ├── types.ts     # Game state, player models, modifiers, actions
  │   │   ├── config.ts    # Board layout (40 squares), rent tables, cards, personas
  │   │   ├── rng.ts       # Seeded Mulberry32 RNG (reproducible replays & sync)
  │   │   ├── economy.ts   # Dynamic modifier calculations (prices, rents, inflation)
  │   │   ├── engine.ts    # Finite state machine (turns, auctions, debts, trades)
  │   │   └── bots.ts      # AI persona heuristic decision engines
  │   ├── net/             # WebRTC PeerJS multiplayer room & signaling
  │   │   └── p2p.ts       # Host/client message dispatch & state sync
  │   ├── ui/              # Reactive UI rendering & animations
  │   │   ├── render.ts    # DOM generation, center hub, action pills, modals
  │   │   ├── styles.css   # Sri Lankan Emerald & Gold design system
  │   │   ├── dice.ts      # Tactile white dice tumble animations & audio triggers
  │   │   ├── sfx.ts       # Synthesized procedural WebAudio sound engine
  │   │   ├── trade.ts     # Visual trade desk modal
  │   │   └── auction.ts   # Live auction bidding room
  │   └── main.ts          # Application entrypoint & game loop
  └── index.html           # Single-page shell
```

- **Zero-Dependency Engine:** Fully deterministic state machine with seeded RNG, making multiplayer synchronization and replays seamless.
- **WebAudio Sound Engine:** Zero external audio assets. All sound effects (dice rolls, cash chimes, bankruptcy gongs) are procedurally synthesized in real time.

---

## 🚀 Getting Started

### Local Development
```bash
cd pola
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Headless Engine Verification
Test the simulation engine across automated AI matches:
```bash
npx esbuild scripts/sim.ts --bundle --platform=node --outfile=scripts/sim.cjs
node scripts/sim.cjs
```

### Production Build & Deploy
```bash
npm run build      # Builds to dist/
npm run deploy     # Deploys dist/ to GitHub Pages
```

---

## 🗺️ Roadmap & Milestones

- [x] **Phase 1: Foundation & Economy Engine** — Deterministic 40-tile Sri Lankan board, 4 bot personas, and dynamic macro-economy.
- [x] **Phase 2: Minimalist UI Overhaul** — Tactile white dice, center action pills, right-side player cards, unbroken names, and Sri Lankan Emerald & Gold palette.
- [x] **Phase 3: Multiplayer & Interaction** — P2P WebRTC online rooms, live auction hall, 1-tap WhatsApp sharing, and visual trade desk.
- [x] **Phase 4: Analytics & Victory** — Interactive net-worth timeline chart, podium accolades, and persistent career XP.
- [x] **Phase 5: Bank of Serendib & Risk Hedging** — Mortgages, collateral debt restructuring, and Tier 1–3 disaster shields.
- [x] **Phase 6: Immersion & Social Banter** — Cinematic Ceylon splash loader, AI tycoon speech bubbles, and live player emoji reactions.
- [ ] **Phase 7: Native Mobile & Multi-Language** — Sinhala / Tamil localization and Capacitor mobile wrappers.

---

*Developed with ❤️ for Sri Lanka.*
