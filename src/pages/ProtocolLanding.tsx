import { ScrollReveal } from "@/components/hoot/ScrollReveal";
import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const CAUSAL_CHAIN = [
  {
    num: "01",
    title: "DATA PROVENANCE IS UNVERIFIABLE",
    desc: "There is no way for a third party to verify the authenticity of AI training data.",
    details: "Screenshots → $0, forgeable in 1 minute. API logs → private. Self-declaration → Sybil-vulnerable.",
  },
  {
    num: "02",
    title: "AGENTS CANNOT BE TRUSTED",
    desc: "There is no basis for evaluating the trustworthiness of agents trained on unverified data.",
    details: "Moltbook — 1.2M agents registered in one week, most unverified. 30K+ ERC-8004 agents with zero trust verification.",
  },
  {
    num: "03",
    title: "AGENT ECONOMY DOESN'T WORK",
    desc: "Without a trust layer, agent-to-agent payments and delegation are vulnerable to fraud.",
    details: "x402 Protocol — 100M+ payments processed. Trust verification layer: none. → Solve data provenance first, and the rest follows.",
  },
];

const OUTPUTS = [
  {
    title: "PPAP",
    subtitle: "VERIFIED_LEARNING_DATA",
    desc: "Captures AI sessions, generates cryptographic proof via zkTLS, signs with FROST 5-of-5 node consensus, and mints as on-chain NFT.",
    specs: ["ERC-721", "ARBITRUM_ONE", "FORGERY_2⁻¹²⁸", "CQS_GRADE"],
    layers: [
      { id: "L1", name: "Prompt", value: "User commands", synth: "PARTIAL" },
      { id: "L2", name: "Response", value: "AI outputs", synth: "POSSIBLE" },
      { id: "L3", name: "Orchestration", value: "Tool-call sequences", synth: "IMPOSSIBLE" },
      { id: "L4", name: "Feedback", value: "User corrections", synth: "IMPOSSIBLE" },
    ],
  },
  {
    title: "HUMANPASSPORT",
    subtitle: "VERIFIED_HUMAN_IDENTITY",
    desc: "MOLTVC 5-axis verification engine cross-validates human creators across Identity, Activity, Data Quality, Reputation, and Compliance.",
    specs: ["SOULBOUND", "ERC-4337", "HTS_0.5x–2.0x"],
    layers: null,
  },
  {
    title: "AGENT CREDENTIAL",
    subtitle: "VERIFIED_AGENT_TRUST",
    desc: "Agents inherit trust from their owner's HumanPassport. External ERC-8004 agents undergo 4-axis technical verification: Code, Security, Performance, On-chain.",
    specs: ["ERC-721", "TRUST_GATED", "50–300_HOOTS"],
    layers: null,
  },
];

function TrustDiagram() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="flex flex-col items-center gap-0 max-w-2xl mx-auto">
      <motion.div
        className="border-2 border-foreground p-6 text-center w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="font-mono text-[10px] text-muted-foreground tracking-wider">ENTITY</div>
        <div className="text-2xl font-bold text-foreground uppercase">HUMAN</div>
        <div className="font-mono text-[10px] text-muted-foreground mt-1">MOLTVC 5-axis · Soulbound · HTS Score</div>
      </motion.div>

      <motion.div
        className="font-mono text-xs text-foreground/30 py-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
      >
        ↓ TRUST_INHERITANCE
      </motion.div>

      <div className="grid grid-cols-2 gap-0 w-full">
        <motion.div
          className="border border-foreground/10 p-5 text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <div className="text-lg font-bold text-foreground">PPAP</div>
          <div className="font-mono text-[10px] text-muted-foreground mt-1">CQS × HTS multiplier</div>
        </motion.div>

        <motion.div
          className="border border-foreground/10 border-l-0 p-5 text-center"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <div className="text-lg font-bold text-foreground">AGENT</div>
          <div className="font-mono text-[10px] text-muted-foreground mt-1">trustBonus = floor(HTS/10)</div>
        </motion.div>
      </div>

      <motion.div
        className="font-mono text-xs text-foreground/30 py-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
      >↓</motion.div>

      <motion.div
        className="border border-foreground/10 p-5 text-center max-w-sm w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <div className="text-lg font-bold text-foreground">x402 ECONOMY</div>
        <div className="font-mono text-[10px] text-muted-foreground mt-1">Only verified agents process payments</div>
      </motion.div>

      <motion.p
        className="font-mono text-[10px] text-muted-foreground mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.1 }}
      >
        RULE: ONE-WAY ONLY. HUMAN → PPAP, HUMAN → AGENT. NO REVERSE.
      </motion.p>
    </div>
  );
}

export default function ProtocolLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-24 pb-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-6">
              [ PROTOCOL_OVERVIEW ]
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[96px] font-bold text-foreground leading-[0.95] mb-8 max-w-5xl uppercase tracking-tight">
              THE PROOF LAYER<br />FOR AI DATA<br />AND AGENTS.
            </h1>
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed mb-8">
              An infrastructure protocol that cryptographically proves the provenance
              of AI training data and verifies the trust of agents.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="#" className="px-6 py-3 bg-foreground text-background font-bold text-xs tracking-wider hover:bg-foreground/90 transition-colors">
                BUILD_WITH_HOOT
              </a>
              <a href="#" className="px-6 py-3 border border-foreground text-foreground font-bold text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors">
                READ_WHITEPAPER
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY NOW — CAUSAL CHAIN ── */}
      <section className="py-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[10px] text-destructive tracking-wider mb-4">
              [ CAUSAL_CHAIN ]
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 max-w-3xl uppercase tracking-tight">
              THREE FAILURES.
            </h2>
            <p className="text-base text-muted-foreground max-w-lg mb-10 font-mono">
              If #1 isn't solved, #2 is impossible. If #2 isn't solved, #3 is impossible.
            </p>
          </ScrollReveal>

          <div className="space-y-0 border border-foreground/10">
            {CAUSAL_CHAIN.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`p-6 md:p-8 ${i < CAUSAL_CHAIN.length - 1 ? "border-b border-foreground/10" : ""}`}>
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-[10px] font-bold text-destructive border border-destructive px-1.5 py-0.5 shrink-0">
                      {c.num}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 uppercase tracking-tight">{c.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">{c.desc}</p>
                      <p className="text-xs text-muted-foreground/70 font-mono leading-relaxed">{c.details}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT HOOTS PROVES ── */}
      <section className="py-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">
              [ PROTOCOL_OUTPUTS ]
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-12 uppercase tracking-tight">
              THREE OUTPUTS.<br />ONE TRUST MODEL.
            </h2>
          </ScrollReveal>

          <div className="space-y-0 border border-foreground/10">
            {OUTPUTS.map((o, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`p-6 md:p-8 ${i < OUTPUTS.length - 1 ? "border-b border-foreground/10" : ""}`}>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-1">{o.subtitle}</div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 uppercase tracking-tight">{o.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{o.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {o.specs.map((spec, j) => (
                          <span key={j} className="font-mono text-[10px] font-bold border border-foreground/10 text-foreground px-2 py-0.5">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {o.layers && (
                      <div className="md:w-80 shrink-0">
                        <div className="font-mono text-[10px] font-bold text-muted-foreground tracking-wider mb-2">
                          4_DATA_LAYERS
                        </div>
                        <div className="border border-foreground/10">
                          {o.layers.map((l, j) => (
                            <div key={j} className={`flex items-center gap-3 px-3 py-2 ${j < o.layers!.length - 1 ? "border-b border-foreground/10" : ""}`}>
                              <span className={`font-mono text-[10px] font-extrabold px-1.5 py-0.5 ${
                                l.synth === "IMPOSSIBLE"
                                  ? "bg-foreground text-background"
                                  : "bg-secondary text-muted-foreground"
                              }`}>
                                {l.id}
                              </span>
                              <div className="flex-1">
                                <div className="text-xs font-bold text-foreground">{l.name}</div>
                                <div className="font-mono text-[10px] text-muted-foreground">{l.value}</div>
                              </div>
                              <span className={`font-mono text-[9px] font-bold ${
                                l.synth === "IMPOSSIBLE" ? "text-destructive" : "text-muted-foreground/50"
                              }`}>
                                {l.synth}
                              </span>
                            </div>
                          ))}
                        </div>
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
      <section className="py-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">
              [ TRUST_ARCHITECTURE ]
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-12 uppercase tracking-tight">
              ONE-WAY TRUST FLOW.
            </h2>
          </ScrollReveal>
          <TrustDiagram />
        </div>
      </section>

      {/* ── BUILD + CTA ── */}
      <section className="py-20 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground uppercase tracking-tight mb-6">
              VERIFIED DATA.<br />TRUSTED AGENTS.<br />BUILT ON HOOT.
            </h2>
            <div className="flex gap-3 justify-center flex-wrap mt-8">
              <a href="#" className="px-6 py-3 bg-foreground text-background font-bold text-xs tracking-wider hover:bg-foreground/90 transition-colors">
                DEVELOPER_DOCS
              </a>
              <a href="#" className="px-6 py-3 border border-foreground text-foreground font-bold text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors">
                AGENT_SDK
              </a>
              <a href="#" className="px-6 py-3 border border-foreground text-foreground font-bold text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors">
                WHITEPAPER
              </a>
              <a href="#" className="px-6 py-3 border border-foreground text-foreground font-bold text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors">
                REQUEST_DECK
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-4 justify-center font-mono text-[10px] text-muted-foreground">
              <span>NVIDIA_INCEPTION</span>
              <span>·</span>
              <span>GOOGLE_STARTUPS</span>
              <span>·</span>
              <span>ALCHEMY</span>
              <span>·</span>
              <span>ARBITRUM</span>
            </div>
            <p className="mt-4 font-mono text-[10px] text-muted-foreground">
              zkTLS (2⁻¹²⁸) · FROST 5-of-5 · ERC-8004 · ARBITRUM ONE
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
