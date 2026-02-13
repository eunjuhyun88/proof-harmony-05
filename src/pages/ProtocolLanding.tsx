import { ScrollReveal } from "@/components/hoot/ScrollReveal";
import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const CAUSAL_CHAIN = [
  {
    num: "01",
    title: "Data provenance is unverifiable",
    desc: "There is no way for a third party to verify the authenticity of AI training data.",
    details: "Screenshots → $0, forgeable in 1 minute. API logs → private. Self-declaration → Sybil-vulnerable.",
  },
  {
    num: "02",
    title: "Agents cannot be trusted",
    desc: "There is no basis for evaluating the trustworthiness of agents trained on unverified data.",
    details: "Moltbook — 1.2M agents registered in one week, most unverified. 30K+ ERC-8004 agents with zero trust verification.",
  },
  {
    num: "03",
    title: "Agent economy doesn't work",
    desc: "Without a trust layer, agent-to-agent payments and delegation are vulnerable to fraud.",
    details: "x402 Protocol — 100M+ payments processed. Trust verification layer: none. → Solve data provenance first, and the rest follows.",
  },
];

const OUTPUTS = [
  {
    title: "PPAP",
    subtitle: "Verified Learning Data",
    desc: "Captures AI sessions, generates cryptographic proof via zkTLS, signs with FROST 5-of-5 node consensus, and mints as on-chain NFT.",
    specs: ["ERC-721", "Arbitrum One", "Forgery 2⁻¹²⁸", "CQS Quality Grade"],
    layers: [
      { id: "L1", name: "Prompt", value: "User commands", synth: "Partial" },
      { id: "L2", name: "Response", value: "AI outputs", synth: "Possible" },
      { id: "L3", name: "Orchestration", value: "Tool-call sequences", synth: "Impossible" },
      { id: "L4", name: "Feedback", value: "User corrections", synth: "Impossible" },
    ],
  },
  {
    title: "HumanPassport",
    subtitle: "Verified Human Identity",
    desc: "MOLTVC 5-axis verification engine cross-validates human creators across Identity, Activity, Data Quality, Reputation, and Compliance.",
    specs: ["Soulbound Token", "ERC-4337 Wallet", "HTS 0.5x–2.0x multiplier"],
    layers: null,
  },
  {
    title: "Agent Credential",
    subtitle: "Verified Agent Trust",
    desc: "Agents inherit trust from their owner's HumanPassport. External ERC-8004 agents undergo 4-axis technical verification: Code, Security, Performance, On-chain.",
    specs: ["ERC-721 (ERC-8004)", "Trust-Gated x402", "50–300 HOOTS"],
    layers: null,
  },
];

function TrustDiagram() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="flex flex-col items-center gap-0">
      {/* Human */}
      <motion.div
        className="bg-card border-2 border-primary rounded-xl px-8 py-5 text-center max-w-md w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="text-xs font-bold text-primary tracking-wider uppercase mb-1">Human</div>
        <div className="font-display text-xl text-foreground">HumanPassport</div>
        <div className="text-xs text-muted-foreground mt-1">MOLTVC 5-axis · Soulbound · HTS Score</div>
      </motion.div>

      {/* Arrow down */}
      <motion.div
        className="text-primary text-2xl py-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
      >
        ↓ Trust Inheritance (one-way)
      </motion.div>

      {/* PPAP + Agent */}
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
        <motion.div
          className="flex-1 bg-card border border-border rounded-xl px-6 py-4 text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <div className="font-display text-lg text-foreground">PPAP</div>
          <div className="text-xs text-muted-foreground mt-1">CQS × HTS multiplier</div>
        </motion.div>

        <motion.div
          className="flex-1 bg-card border border-border rounded-xl px-6 py-4 text-center"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <div className="font-display text-lg text-foreground">Agent</div>
          <div className="text-xs text-muted-foreground mt-1">trustBonus = floor(HTS/10)</div>
        </motion.div>
      </div>

      {/* Arrow to x402 */}
      <motion.div
        className="text-primary text-2xl py-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
      >
        ↓
      </motion.div>

      <motion.div
        className="bg-primary/5 border border-primary/15 rounded-xl px-8 py-4 text-center max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <div className="font-display text-lg text-foreground">x402 Economy</div>
        <div className="text-xs text-muted-foreground mt-1">Only verified agents process payments</div>
      </motion.div>

      <motion.p
        className="text-xs text-muted-foreground mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.1 }}
      >
        Rule: One-way only. Human → PPAP, Human → Agent. No reverse inheritance.
      </motion.p>
    </div>
  );
}

export default function ProtocolLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Hoots Protocol
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-6 max-w-4xl">
              The Proof Layer<br />
              <span className="italic text-primary">for AI Data</span><br />
              and Agents.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
              An infrastructure protocol that cryptographically proves the provenance
              of AI training data and verifies the trust of agents.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                className="px-7 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Build with Hoots
              </a>
              <a
                href="#"
                className="px-7 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Read Whitepaper
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY NOW — CAUSAL CHAIN ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-destructive mb-3">Why Now</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 max-w-2xl">
              A causal chain of <span className="italic text-destructive">three failures</span>.
            </h2>
            <p className="text-muted-foreground max-w-lg mb-12">
              If #1 isn't solved, #2 is impossible. If #2 isn't solved, #3 is impossible.
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {CAUSAL_CHAIN.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="bg-card border border-border rounded-xl p-6 md:p-8 relative">
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-bold text-destructive bg-destructive/10 px-2.5 py-1 rounded shrink-0">
                      {c.num}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-foreground mb-2">{c.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">{c.desc}</p>
                      <p className="text-xs text-muted-foreground/70 leading-relaxed">{c.details}</p>
                    </div>
                  </div>
                  {i < CAUSAL_CHAIN.length - 1 && (
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-destructive/30 text-xl z-10">↓</div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT HOOTS PROVES ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">What Hoots Proves</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12">
              Three outputs. <span className="italic text-primary">One trust model.</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {OUTPUTS.map((o, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="text-xs font-bold text-primary tracking-wider uppercase mb-1">{o.subtitle}</div>
                      <h3 className="font-display text-3xl text-foreground mb-3">{o.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{o.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {o.specs.map((spec, j) => (
                          <span key={j} className="text-[10px] font-bold bg-primary/5 text-primary px-2 py-0.5 rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* PPAP Layers detail */}
                    {o.layers && (
                      <div className="md:w-80 shrink-0">
                        <div className="text-[10px] font-bold text-muted-foreground tracking-wider uppercase mb-2">
                          4 Data Layers
                        </div>
                        {o.layers.map((l, j) => (
                          <div key={j} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                            <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                              l.synth === "Impossible"
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-muted-foreground"
                            }`}>
                              {l.id}
                            </span>
                            <div className="flex-1">
                              <div className="text-xs font-semibold text-foreground">{l.name}</div>
                              <div className="text-[10px] text-muted-foreground">{l.value}</div>
                            </div>
                            <span className={`text-[9px] font-bold ${
                              l.synth === "Impossible" ? "text-primary" : "text-muted-foreground/50"
                            }`}>
                              Synth: {l.synth}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST ARCHITECTURE ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Trust Architecture</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12">
              One-way <span className="italic text-primary">trust flow</span>.
            </h2>
          </ScrollReveal>
          <TrustDiagram />
        </div>
      </section>

      {/* ── BUILD + CTA ── */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
              Verified data.<br />
              Trusted agents.<br />
              <span className="italic text-primary">Built on Hoots.</span>
            </h2>
            <div className="flex gap-3 justify-center flex-wrap mt-8">
              <a href="#" className="px-7 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
                Developer Docs
              </a>
              <a href="#" className="px-7 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors">
                Agent SDK
              </a>
              <a href="#" className="px-7 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors">
                Read Whitepaper
              </a>
              <a href="#" className="px-7 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors">
                Request Deck
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-4 justify-center text-xs text-muted-foreground">
              <span>NVIDIA Inception</span>
              <span>·</span>
              <span>Google for Startups</span>
              <span>·</span>
              <span>Alchemy</span>
              <span>·</span>
              <span>Arbitrum</span>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              zkTLS (2⁻¹²⁸) · FROST 5-of-5 · ERC-8004 · Arbitrum One
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
