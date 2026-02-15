import { TextReveal, ClipReveal, CountUp } from "@/components/hoot/ScrollReveal";
import { FadeReveal, StrikethroughList } from "@/components/hoot/StrikethroughReveal";
import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const SNAP = [0.16, 1, 0.3, 1] as const;

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
      <ClipReveal direction="up">
        <div className="border-2 border-foreground p-6 text-center w-full">
          <div className="font-mono text-[10px] text-muted-foreground tracking-wider">ENTITY</div>
          <CountUp value="HUMAN" className="text-2xl font-bold text-foreground uppercase block" />
          <div className="font-mono text-[10px] text-muted-foreground mt-1">MOLTVC 5-axis · Soulbound · HTS Score</div>
        </div>
      </ClipReveal>

      <motion.div
        className="font-mono text-xs text-foreground/30 py-2"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={inView ? { opacity: 1, scaleY: 1 } : {}}
        transition={{ delay: 0.3, ease: SNAP }}
        style={{ transformOrigin: "top" }}
      >
        ↓ TRUST_INHERITANCE
      </motion.div>

      <ClipReveal delay={0.4} direction="up">
        <div className="grid grid-cols-2 gap-0 w-full">
          <div className="border border-foreground/10 p-5 text-center">
            <div className="text-lg font-bold text-foreground">PPAP</div>
            <div className="font-mono text-[10px] text-muted-foreground mt-1">CQS × HTS multiplier</div>
          </div>
          <div className="border border-foreground/10 border-l-0 p-5 text-center">
            <div className="text-lg font-bold text-foreground">AGENT</div>
            <div className="font-mono text-[10px] text-muted-foreground mt-1">trustBonus = floor(HTS/10)</div>
          </div>
        </div>
      </ClipReveal>

      <motion.div
        className="font-mono text-xs text-foreground/30 py-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
      >↓</motion.div>

      <ClipReveal delay={0.8} direction="up">
        <div className="border border-foreground/10 p-5 text-center max-w-sm w-full">
          <div className="text-lg font-bold text-foreground">x402 ECONOMY</div>
          <div className="font-mono text-[10px] text-muted-foreground mt-1">Only verified agents process payments</div>
        </div>
      </ClipReveal>

      <motion.p
        className="font-mono text-[10px] text-muted-foreground mt-4 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.1, ease: SNAP }}
      >
        RULE: ONE-WAY ONLY. HUMAN → PPAP, HUMAN → AGENT. NO REVERSE.
      </motion.p>
    </div>
  );
}

export default function ProtocolLanding() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO with parallax ── */}
      <section ref={heroRef} className="pt-24 pb-16 px-6 md:px-10 border-b border-foreground/10 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-sparse opacity-40" />
        <motion.div className="max-w-[1400px] mx-auto relative z-10" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: SNAP }}
          >
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-6">
              [ PROTOCOL_OVERVIEW ]
            </div>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-[96px] font-bold text-foreground leading-[0.95] mb-2 max-w-5xl uppercase tracking-tight"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: SNAP }}
            >
              THE PROOF LAYER
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-[96px] font-bold text-muted-foreground/30 leading-[0.95] max-w-5xl uppercase tracking-tight"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: SNAP }}
            >
              FOR AI DATA AND AGENTS.
            </motion.h1>
          </div>
          <FadeReveal delay={0.5}>
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed mb-8">
              An infrastructure protocol that cryptographically proves the provenance
              of AI training data and verifies the trust of agents.
            </p>
            <div className="flex gap-3 flex-wrap">
              <motion.a href="#" className="px-6 py-3 bg-foreground text-background font-bold text-xs tracking-wider hover:bg-foreground/90 transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                BUILD_WITH_HOOT
              </motion.a>
              <motion.a href="#" className="px-6 py-3 border border-foreground text-foreground font-bold text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                READ_WHITEPAPER
              </motion.a>
            </div>
          </FadeReveal>
        </motion.div>
      </section>

      {/* ── WHY NOW — CAUSAL CHAIN ── */}
      <section className="py-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <FadeReveal>
            <div className="font-mono text-[10px] text-destructive tracking-wider mb-4">
              [ CAUSAL_CHAIN ]
            </div>
          </FadeReveal>
          <TextReveal
            text="THREE FAILURES."
            as="h2"
            className="text-4xl md:text-6xl font-bold text-foreground mb-4 max-w-3xl uppercase tracking-tight"
            staggerDelay={0.035}
          />
          <FadeReveal delay={0.2}>
            <p className="text-base text-muted-foreground max-w-lg mb-10 font-mono">
              If #1 isn't solved, #2 is impossible. If #2 isn't solved, #3 is impossible.
            </p>
          </FadeReveal>

          <ClipReveal direction="up">
            <div className="space-y-0 border-2 border-foreground">
              {CAUSAL_CHAIN.map((c, i) => (
                <motion.div
                  key={i}
                  className={`p-6 md:p-8 ${i < CAUSAL_CHAIN.length - 1 ? "border-b border-foreground/20" : ""}`}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.5, ease: SNAP }}
                >
                  <div className="flex items-start gap-4">
                    <motion.span
                      className="font-mono text-[10px] font-bold text-destructive border border-destructive px-1.5 py-0.5 shrink-0"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.12, ease: SNAP }}
                    >
                      {c.num}
                    </motion.span>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 uppercase tracking-tight">{c.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">{c.desc}</p>
                      <p className="text-xs text-muted-foreground/70 font-mono leading-relaxed">{c.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ClipReveal>
        </div>
      </section>

      {/* ── WHAT HOOT PROVES ── */}
      <section className="py-16 px-6 md:px-10 border-b border-foreground/10 relative">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <FadeReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">
              [ PROTOCOL_OUTPUTS ]
            </div>
          </FadeReveal>
          <TextReveal
            text="THREE OUTPUTS. ONE TRUST MODEL."
            as="h2"
            className="text-4xl md:text-6xl font-bold text-foreground mb-12 uppercase tracking-tight"
            staggerDelay={0.035}
          />

          <div className="space-y-0 border-2 border-foreground">
            {OUTPUTS.map((o, i) => (
              <motion.div
                key={i}
                className={`p-6 md:p-8 ${i < OUTPUTS.length - 1 ? "border-b border-foreground/20" : ""}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: SNAP }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-1">{o.subtitle}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 uppercase tracking-tight">{o.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{o.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {o.specs.map((spec, j) => (
                        <motion.span
                          key={j}
                          className="font-mono text-[10px] font-bold border border-foreground/10 text-foreground px-2 py-0.5"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + j * 0.06, ease: SNAP }}
                        >
                          {spec}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {o.layers && (
                    <ClipReveal delay={0.2} direction="right" className="md:w-80 shrink-0">
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
                    </ClipReveal>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST ARCHITECTURE ── */}
      <section className="py-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <FadeReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">
              [ TRUST_ARCHITECTURE ]
            </div>
          </FadeReveal>
          <TextReveal
            text="ONE-WAY TRUST FLOW."
            as="h2"
            className="text-4xl md:text-6xl font-bold text-foreground mb-12 uppercase tracking-tight"
            staggerDelay={0.035}
          />
          <TrustDiagram />
        </div>
      </section>

      {/* ── BUILD + CTA ── */}
      <section className="py-20 px-6 md:px-10 border-b border-foreground/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="overflow-hidden">
            <motion.h2
              className="text-5xl md:text-7xl font-bold text-foreground uppercase tracking-tight mb-2"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: SNAP }}
            >
              VERIFIED DATA.
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-5xl md:text-7xl font-bold text-foreground uppercase tracking-tight mb-2"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08, ease: SNAP }}
            >
              TRUSTED AGENTS.
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h2
              className="text-5xl md:text-7xl font-bold text-muted-foreground/30 uppercase tracking-tight"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.16, ease: SNAP }}
            >
              BUILT ON HOOT.
            </motion.h2>
          </div>
          <FadeReveal delay={0.4}>
            <div className="flex gap-3 justify-center flex-wrap mt-8">
              <motion.a href="#" className="px-6 py-3 bg-foreground text-background font-bold text-xs tracking-wider hover:bg-foreground/90 transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                DEVELOPER_DOCS
              </motion.a>
              <motion.a href="#" className="px-6 py-3 border border-foreground text-foreground font-bold text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                AGENT_SDK
              </motion.a>
              <motion.a href="#" className="px-6 py-3 border border-foreground text-foreground font-bold text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                WHITEPAPER
              </motion.a>
              <motion.a href="#" className="px-6 py-3 border border-foreground text-foreground font-bold text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                REQUEST_DECK
              </motion.a>
            </div>
          </FadeReveal>

          <FadeReveal delay={0.5}>
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
          </FadeReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
