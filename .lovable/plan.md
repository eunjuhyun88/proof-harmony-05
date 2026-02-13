

# Hoot Protocol Landing — 2 Pages, Industrial Grid, Motion-First

## Design System
- **Industrial grid aesthetic**: Black (#0A0A0A), white (#FFFFFF), warm gray (#EDEDEB), accent blue (#0047FF), red (#D93025) — matching the reference images
- **Typography**: Large bold uppercase headlines (industrial feel), clean sans-serif body text
- **Layout**: Grid-based sections with strong borders, monochrome cards, generous whitespace
- **Light theme only** — no dark mode toggle

---

## Page 1: Protocol Home (`/`)

### Section 1 — Hero
- Giant headline: **"USE AI, GENERATE TRAINING DATA."** (industrial uppercase)
- Subheadline explaining the protocol in one sentence
- Two CTAs: **[Try Browser]** and **[Read Whitepaper]**
- Trust bar logos: NVIDIA, 0G Labs, Arbitrum, Base, Alchemy, Google, AppWorks, Seedify
- Subtle scroll-triggered fade-in animation

### Section 2 — Core Asset Breakdown
- 3-column grid cards: **PPAP**, **HumanPassport**, **Agent Credential**
- Each card with icon, title, and short description
- Cards animate in on scroll (staggered fade-up)

### Section 3 — The 3 Crises + Hoot Solution
- Split layout: Left side lists 3 crises (Data Exhaustion, Model Collapse, Agent Trust Gap)
- Right side shows Hoot's 3 solutions (Data Sovereignty, Proof of Provenance, Zero-Knowledge Ops)
- Each crisis has key metric tables that slide in on scroll
- Red accent for crisis severity markers

### Section 4 — Browser Demo (Interactive, Auto-play on Scroll)
- **Full interactive browser mockup** adapted from the uploaded JSX component
- Shows orchestration demo: user command → 3 skills (Gmail → Claude → Notion) → PPAP capture
- Auto-plays when scrolled into viewport using Intersection Observer
- Animated step-by-step: emails scan, agents activate, orchestration log fills, PPAP mints
- After demo completes: shows **Data Layer cards** (L1-L4) and **Verification Pipeline** steps
- Replay button available after completion

### Section 5 — zkTLS Technical Schematic
- Visual diagram of the verification process
- Clean grid layout with step indicators

### Section 6 — CQS Formula
- Display the quality scoring formula with grade table
- Tab-based detail view matching the copy structure

### Section 7 — HumanPassport 5-Axis + B2B Data Hub
- Side-by-side cards: HumanPassport radar visualization, Data Hub marketplace preview
- Tier badges animated on scroll

### Section 8 — The 10-Step Pipeline
- Horizontal scrollable step indicators (like the reference images)
- Each step expandable on click with tech details

### Section 9 — Traction & Trust
- Metrics grid: 400K+ users, 80% retention, $22.5K B2B revenue, etc.
- Partner logos bar
- Token + Node summary with links

### Section 10 — Final CTA
- Large bold: **"ENTER HOOT ECOSYSTEM"**
- Two buttons: **[Download Browser]** + **[Read Docs]**

### Footer
- Minimal footer with links and branding

---

## Page 2: Browser Landing (`/browser`)

### Section 1 — Hero
- Headline: **"Every AI, one browser."**
- Subheadline about ChatGPT + Claude + Gemini orchestration
- **[Download Browser]** CTA + link back to protocol

### Section 2 — Before vs After
- Two-column comparison table with motion: "Without Hoot" vs "With Hoot Browser"
- Items animate in alternating from left/right on scroll

### Section 3 — Orchestration Examples
- 3 real workflow examples with skill badges, time estimates
- Each example card has animated skill icons connecting

### Section 4 — Data Sovereignty
- Encryption details + monetization toggle explanation
- Revenue estimation table (Light/Standard/Power usage tiers)
- Warning badge: "DATA HUB not launched"

### Section 5 — Create Agents from Browser
- Flow visualization: Create → Register → Inherit trust → Deploy
- Link to Agents page (future)

### Section 6 — Node + GPU + Memory
- 3-card grid covering: Run a Node, GPU Training, Persistent Memory
- Each with brief description and CTA link

### Section 7 — CTA
- **[Download Browser]** + **[Run a Node]**

---

## Motion & Animation Strategy
- **Scroll-triggered animations** throughout using Intersection Observer
- **Staggered fade-ups** for grid items and list items
- **Browser demo auto-plays on scroll** — the centerpiece interactive experience
- **Blinking/pulsing indicators** for live status elements (PPAP capture, node status)
- **Smooth counter animations** for metric numbers
- **Horizontal pipeline scroll** with snap points
- All animations respect `prefers-reduced-motion`

---

## Navigation
- Fixed top navbar: HOOT logo + page links (Home, Browser) + CTA button
- Smooth scroll navigation for single-page sections
- Cross-page linking as specified in the copy document

