import { useState } from "react";
import { ScrollReveal } from "@/components/hoot/ScrollReveal";
import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PARTNERS = ["NVIDIA Inception", "Google for Startups", "Alchemy", "Arbitrum"];

const SCENARIOS = [
  {
    tab: "Crypto Analysis + Data Assets",
    mockup: [
      { role: "user", text: '"Should I buy SOL now?"' },
      {
        role: "ai",
        lines: [
          "Zone Analysis: RANGE_HIGH · CROWDED_LONG",
          "7-Layer Score: Entry LONG 28 / SHORT 72",
          "Recommendation: Hold. Short positions overcrowded.",
        ],
      },
    ],
    statusBar: "PPAP auto-generating... ✓ Data assets created today: 12",
    desc: [
      "Ask AI for trading analysis.",
      "Your conversations automatically become verified data assets.",
      "Analysis + asset building, simultaneously.",
    ],
  },
  {
    tab: "AI Orchestration + Data Assets",
    mockup: [
      { role: "user", text: '"Write this week\'s report"' },
      {
        role: "ai",
        lines: [
          "Starting workflow.",
          "Step 1: Perplexity → Collect latest market data ✓",
          "Step 2: Claude → Draft report ✓",
          "Step 3: Gmail → Send to team ✓",
        ],
      },
    ],
    statusBar: "3 AI Skills used · 3 PPAPs generated · HootClaw 700+ Skills",
    desc: [
      "Connect multiple AIs in one browser.",
      "Data assets are auto-generated every session.",
      "AI productivity + data ownership.",
    ],
  },
];

const STEPS = [
  {
    num: "01",
    title: "Use AI as usual",
    desc: "Use any AI service — ChatGPT, Claude, Gemini, Perplexity — inside Hoots Browser. No extra steps.",
    icon: "🌐",
    link: null,
  },
  {
    num: "02",
    title: "Automatically verified",
    desc: "Your AI sessions are cryptographically proven in a tamper-proof way. No one can see your conversation content.",
    icon: "🔒",
    link: { label: "How verification works →", to: "/protocol" },
  },
  {
    num: "03",
    title: "Becomes your asset",
    desc: "Verified data is minted as an on-chain asset (PPAP) owned by you. License it to AI companies as training data.",
    icon: "💎",
    link: { label: "Revenue structure →", to: "/protocol#data-hub" },
  },
];

const TRUST_BLOCKS = [
  {
    title: "Already Proven",
    items: ["400K users in Phase 0", "80% daily retention", "Browser + Protocol implemented"],
  },
  {
    title: "Partnerships",
    items: ["NVIDIA Inception", "Google for Startups", "Alchemy", "Arbitrum"],
  },
  {
    title: "Technical Safety",
    items: ["Forgery probability 2⁻¹²⁸", "5 independent node consensus", "Ethereum-inherited security"],
  },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Hoots Browser
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-6 max-w-4xl">
              Use AI,<br />
              <span className="italic text-primary">build data assets.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
              ChatGPT, Claude, Perplexity — use them as you always do.
              Inside Hoots Browser, your AI sessions are automatically
              converted into verified data assets.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#waitlist"
                className="px-7 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Join Waitlist
              </a>
              <a
                href="#scenarios"
                className="px-7 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Watch 30s Demo ↓
              </a>
            </div>
          </ScrollReveal>

          {/* Trust bar */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 pt-8 border-t border-border">
              <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-4">
                Powered by Hoots Protocol
              </div>
              <div className="flex flex-wrap gap-6 items-center">
                {PARTNERS.map((p) => (
                  <span key={p} className="text-sm font-semibold text-muted-foreground/60 tracking-wide">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── USE SCENARIOS ── */}
      <section id="scenarios" className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Use Cases</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              See how it <span className="italic text-primary">works</span>
            </h2>
          </ScrollReveal>

          {/* Tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex gap-2 mb-6">
              {SCENARIOS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === i
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.tab}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Browser Mockup */}
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  {/* Title bar */}
                  <div className="bg-secondary px-4 py-2.5 flex items-center gap-3 border-b border-border">
                    <div className="flex gap-1.5">
                      {["bg-destructive", "bg-hoot-orange", "bg-hoot-green"].map((c, i) => (
                        <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                      ))}
                    </div>
                    <div className="text-xs font-bold text-foreground tracking-tight">HOOTS BROWSER</div>
                  </div>
                  {/* Chat */}
                  <div className="p-5 space-y-4">
                    {SCENARIOS[activeTab].mockup.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.3, duration: 0.4 }}
                      >
                        {msg.role === "user" ? (
                          <div className="bg-primary/5 border border-primary/15 rounded-xl px-4 py-3">
                            <div className="text-[10px] font-bold text-primary mb-1">YOU</div>
                            <div className="text-sm text-foreground">{msg.text}</div>
                          </div>
                        ) : (
                          <div className="bg-secondary rounded-xl px-4 py-3">
                            <div className="text-[10px] font-bold text-muted-foreground mb-1">HOOTS AI</div>
                            <div className="space-y-1">
                              {msg.lines.map((line, j) => (
                                <motion.div
                                  key={j}
                                  className="text-sm text-foreground font-mono"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.5 + j * 0.2 }}
                                >
                                  {line}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                    {/* Status bar */}
                    <motion.div
                      className="bg-primary/5 border border-primary/15 rounded-lg px-3 py-2 flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary animate-blink" />
                      <span className="text-[11px] text-primary font-semibold">
                        {SCENARIOS[activeTab].statusBar}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col justify-center">
                  <div className="space-y-4">
                    {SCENARIOS[activeTab].desc.map((line, i) => (
                      <motion.p
                        key={i}
                        className="text-lg text-foreground leading-relaxed"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── HOW IT WORKS — 3 STEPS ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">How It Works</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12">
              Three steps. <span className="italic text-primary">Zero effort.</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {STEPS.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-3xl">{s.icon}</span>
                    <span className="text-xs font-bold text-primary bg-primary/5 px-2.5 py-1 rounded">{s.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">{s.desc}</p>
                    {s.link && (
                      <Link to={s.link.to} className="text-xs font-semibold text-primary hover:underline">
                        {s.link.label}
                      </Link>
                    )}
                  </div>
                  {/* Connecting arrow */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block text-muted-foreground/20 text-2xl self-center">↓</div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST + CTA ── */}
      <section id="waitlist" className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Why Trust Hoots</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              Built, <span className="italic text-primary">not promised.</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {TRUST_BLOCKS.map((block, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <h3 className="font-display text-xl text-foreground mb-4">{block.title}</h3>
                  <ul className="space-y-2">
                    {block.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
                Browse. Analyze.<br />
                <span className="italic text-primary">Verify. Own.</span>
              </h2>
              <div className="flex gap-3 justify-center flex-wrap mt-8">
                <a
                  href="#"
                  className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
                >
                  Join Waitlist
                </a>
                <a
                  href="#"
                  className="px-8 py-3.5 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
                >
                  Read Whitepaper
                </a>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Powered by{" "}
                <Link to="/protocol" className="text-primary hover:underline font-semibold">
                  Hoots Protocol
                </Link>{" "}
                — The Proof Layer for AI Data
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
