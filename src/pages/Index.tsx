import { ScrollReveal } from "@/components/hoot/ScrollReveal";
import { BrowserDemo } from "@/components/hoot/BrowserDemo";
import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { Link } from "react-router-dom";

const PARTNERS = ["NVIDIA", "0G Labs", "Arbitrum", "Base", "Alchemy", "Google", "AppWorks", "Seedify"];

const ASSETS = [
  {
    title: "PPAP",
    subtitle: "Proof of AI Provenance",
    desc: "Cryptographically verified AI learning data. ERC-721 NFT registered on-chain with zkTLS proof.",
    icon: "💎",
  },
  {
    title: "HumanPassport",
    subtitle: "5-Axis Trust Identity",
    desc: "Soulbound Token measuring Identity, Activity, Quality, Reputation, and Compliance.",
    icon: "🛡",
  },
  {
    title: "Agent Credential",
    subtitle: "Inherited Trust Score",
    desc: "ERC-8004 + metadata. Agents inherit trust from their verified human creator.",
    icon: "🤖",
  },
];

const CRISES = [
  {
    num: "01",
    title: "Data Exhaustion",
    desc: "High-quality human training data runs out 2026–2028. AI companies paying hundreds of millions. Creators received $0.",
    metrics: [
      { label: "Reddit licensing deal", value: "$203M" },
      { label: "Scale AI round", value: "$870M" },
      { label: "Creator revenue", value: "$0" },
    ],
  },
  {
    num: "02",
    title: "Model Collapse",
    desc: "AI training on AI output degrades quality ~50% by 5th generation. ~60% of web text already synthetic.",
    metrics: [
      { label: "5th gen quality loss", value: "~50%" },
      { label: "Synthetic web content", value: "~60%" },
      { label: "EU Art.53 deadline", value: "Aug 2026" },
    ],
  },
  {
    num: "03",
    title: "Agent Trust Gap",
    desc: "Agents execute tasks without trust verification. Moltbook: 1.2M fake agents in one week.",
    metrics: [
      { label: "ERC-8004 agents", value: "30K+" },
      { label: "x402 payments", value: "100M+" },
      { label: "Moltbook fakes", value: "1.2M/week" },
    ],
  },
];

const PIPELINE = [
  { step: "01", name: "Session Capture", tech: "zkTLS 2PC-HMAC" },
  { step: "02", name: "Content Hash", tech: "SHA-256" },
  { step: "03", name: "Notary Selection", tech: "Chainlink VRF" },
  { step: "04", name: "Proof Verify", tech: "zkTLS verification" },
  { step: "05", name: "Consensus", tech: "FROST 5-of-5" },
  { step: "06", name: "Quality Score", tech: "CQS SLM Estimator" },
  { step: "07", name: "On-chain Register", tech: "Arbitrum L2" },
  { step: "08", name: "Data Storage", tech: "0G Labs" },
  { step: "09", name: "Challenge Window", tech: "72h open" },
  { step: "10", name: "Marketplace List", tech: "DATA HUB" },
];

const CQS_GRADES = [
  { grade: "REJECTED", range: "0–0.19", chars: "Spam, gibberish", mult: "0x" },
  { grade: "BASIC", range: "0.20–0.39", chars: "Simple Q&A", mult: "0.5x" },
  { grade: "STANDARD", range: "0.40–0.59", chars: "Substantive depth", mult: "1.0x" },
  { grade: "GOLD", range: "0.60–0.79", chars: "Multi-turn, domain expertise", mult: "2.0x" },
  { grade: "ELITE", range: "0.80–0.94", chars: "Complex workflow", mult: "2.0x" },
  { grade: "MASTER", range: "0.95–1.00", chars: "Expert multi-agent", mult: "2.0x" },
];

const PASSPORT_AXES = [
  { axis: "Identity", weight: "20%", measures: "Wallet age, DID, social links" },
  { axis: "Activity", weight: "15%", measures: "PPAP frequency, session diversity" },
  { axis: "Quality", weight: "30%", measures: "Average CQS, GOLD+ ratio" },
  { axis: "Reputation", weight: "20%", measures: "Buyer ratings, challenge success" },
  { axis: "Compliance", weight: "15%", measures: "Metadata completeness, Art.53" },
];

const TRACTION = [
  { label: "Phase 0 Users", value: "400K+" },
  { label: "Daily Retention", value: "80%" },
  { label: "B2B Revenue", value: "$22.5K" },
  { label: "IP Models Built", value: "10+" },
  { label: "Core Tech", value: "Implemented" },
  { label: "Partners", value: "8+" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              The Proof Protocol for the AI Era
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-6 max-w-4xl">
              USE AI,<br />
              <span className="italic text-primary">GENERATE</span><br />
              TRAINING DATA.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
              Cryptographically prove AI data is real. Score its quality. Verify the humans and agents behind it.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/browser"
                className="px-7 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Try Browser
              </Link>
              <a
                href="#"
                className="px-7 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Read Whitepaper
              </a>
            </div>
          </ScrollReveal>

          {/* Trust bar */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 pt-8 border-t border-border">
              <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-4">
                Backed by
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

      {/* ── CORE ASSETS ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Core Assets</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Three digital assets.<br />
              <span className="italic text-primary">One trust model.</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mb-12">
              Human → Data → Agent. Trust flows in one direction.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4">
            {ASSETS.map((a, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors h-full">
                  <div className="text-3xl mb-4">{a.icon}</div>
                  <h3 className="font-display text-2xl text-foreground mb-1">{a.title}</h3>
                  <div className="text-xs font-semibold text-primary tracking-wide uppercase mb-3">{a.subtitle}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE CRISES ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-destructive mb-3">Three Crises</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 max-w-2xl">
              Three things breaking <span className="italic text-destructive">simultaneously</span>.
            </h2>
            <p className="text-muted-foreground max-w-lg mb-12">
              Any one is a problem. Together they threaten the AI economy.
            </p>
          </ScrollReveal>
          <div className="space-y-6">
            {CRISES.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded">
                          {c.num}
                        </span>
                        <h3 className="font-display text-2xl text-foreground">{c.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                    </div>
                    <div className="md:w-64 shrink-0">
                      {c.metrics.map((m, j) => (
                        <div key={j} className="flex justify-between py-2 border-b border-border last:border-0">
                          <span className="text-xs text-muted-foreground">{m.label}</span>
                          <span className="text-xs font-bold text-foreground">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BROWSER DEMO ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Live Demo</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2 max-w-2xl">
              One command,<br />
              <span className="italic text-primary">multiple agents</span>,<br />
              verified data.
            </h2>
            <p className="text-muted-foreground max-w-lg mb-10">
              Watch a real orchestration: a user asks one question — the Browser routes to three skills — and a PPAP captures the entire journey.
            </p>
          </ScrollReveal>
          <BrowserDemo />
        </div>
      </section>

      {/* ── 5-STEP PROOF STACK ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">How It Works</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              5-Step <span className="italic text-primary">Proof Stack</span>
            </h2>
            <div className="flex flex-wrap gap-2 items-center mb-4">
              {["01 Capture", "02 Verify", "03 Score", "04 Register", "05 Trade"].map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 bg-primary/5 border border-primary/15 rounded-lg text-xs font-bold text-primary">
                    {s}
                  </span>
                  {i < 4 && <span className="text-muted-foreground/30">→</span>}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-12">
              Total: ~6 seconds · $0.013 · Forgery: 2⁻¹²⁸
            </p>
          </ScrollReveal>

          {/* CQS Grade Table */}
          <ScrollReveal>
            <h3 className="font-display text-2xl text-foreground mb-4">CQS Grade Table</h3>
            <div className="bg-card border border-border rounded-xl overflow-hidden mb-12">
              <div className="grid grid-cols-4 gap-0 text-xs font-bold text-muted-foreground bg-secondary p-3 border-b border-border">
                <div>Grade</div><div>Range</div><div>Characteristics</div><div>Multiplier</div>
              </div>
              {CQS_GRADES.map((g, i) => (
                <div key={i} className="grid grid-cols-4 gap-0 text-sm p-3 border-b border-border last:border-0">
                  <div className="font-bold text-foreground">{g.grade}</div>
                  <div className="text-muted-foreground">{g.range}</div>
                  <div className="text-muted-foreground">{g.chars}</div>
                  <div className="font-semibold text-foreground">{g.mult}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* HumanPassport 5-Axis */}
          <ScrollReveal>
            <h3 className="font-display text-2xl text-foreground mb-4">
              HumanPassport <span className="italic text-primary">5-Axis</span>
            </h3>
            <div className="bg-card border border-border rounded-xl overflow-hidden mb-6">
              <div className="grid grid-cols-3 gap-0 text-xs font-bold text-muted-foreground bg-secondary p-3 border-b border-border">
                <div>Axis</div><div>Weight</div><div>Measures</div>
              </div>
              {PASSPORT_AXES.map((a, i) => (
                <div key={i} className="grid grid-cols-3 gap-0 text-sm p-3 border-b border-border last:border-0">
                  <div className="font-semibold text-foreground">{a.axis}</div>
                  <div className="text-primary font-bold">{a.weight}</div>
                  <div className="text-muted-foreground">{a.measures}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-12">
              {["BASIC 1.0x", "SILVER 1.25x", "GOLD 1.5x", "MASTER 2.0x"].map((t) => (
                <span key={t} className="px-3 py-1.5 text-xs font-bold border border-border rounded-lg text-foreground bg-secondary">
                  {t}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 10-STEP PIPELINE ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Technical Pipeline</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              The 10-Step <span className="italic text-primary">Pipeline</span>
            </h2>
          </ScrollReveal>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-3 min-w-max">
              {PIPELINE.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="w-[130px] bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors">
                    <div className="text-xs font-bold text-primary mb-2">{p.step}</div>
                    <div className="text-sm font-semibold text-foreground mb-1">{p.name}</div>
                    <div className="text-[10px] text-muted-foreground">{p.tech}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRACTION ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Traction</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              Why trust <span className="italic text-primary">Hoot</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {TRACTION.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-card border border-border rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-foreground mb-1">{t.value}</div>
                  <div className="text-xs text-muted-foreground">{t.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">HOOTS Token</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    ERC-20 on Arbitrum. 1B fixed supply. 7 utility types. Pre-Seed FDV $40M at $0.04.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Verification Nodes</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    4 tiers. Genesis (50 × $6K), Early (100 × $4.5K). Runs inside browser, no GPU. Total presale: $750K.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
              ENTER THE<br />
              <span className="italic text-primary">HOOT ECOSYSTEM</span>
            </h2>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                to="/browser"
                className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Download Browser
              </Link>
              <a
                href="#"
                className="px-8 py-3.5 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Read Docs
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
