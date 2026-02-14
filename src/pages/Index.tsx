import { ScrollReveal, TextReveal, StaggerContainer, StaggerItem } from "@/components/hoot/ScrollReveal";
import { StrikethroughReveal, StrikethroughList, FadeReveal } from "@/components/hoot/StrikethroughReveal";
import { StickySteps } from "@/components/hoot/StickyScroll";
import { BrowserDemo } from "@/components/hoot/BrowserDemo";
import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PARTNERS = ["NVIDIA INCEPTION", "0G LABS", "ARBITRUM", "GOOGLE STARTUPS", "APPWORKS"];

const TRUST_BLOCKS = [
  {
    title: "ALREADY PROVEN",
    items: ["400K users in Phase 0", "80% daily retention", "Browser + Protocol implemented"],
  },
  {
    title: "PARTNERSHIPS",
    items: ["NVIDIA Inception", "Google for Startups", "Alchemy", "Arbitrum"],
  },
  {
    title: "TECHNICAL SAFETY",
    items: ["Forgery probability 2⁻¹²⁸", "5 independent node consensus", "Ethereum-inherited security"],
  },
];

const TECH_STACK = ["zkTLS_2PC", "FROST_5-of-5", "CQS_4-AXIS", "ERC-8004", "ARBITRUM_L2"];

/* ── Hero with parallax ── */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section ref={ref} className="relative h-screen flex items-center px-6 md:px-10 border-b-2 border-foreground overflow-hidden bg-foreground">
      {/* Inverted hero — white on black */}
      <motion.div
        className="max-w-[1400px] mx-auto w-full relative z-10"
        style={{ y, opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="font-mono text-[11px] text-background/50 tracking-[0.3em] mb-8">
            PROOF_PROTOCOL — V1.0
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-[120px] font-bold text-background leading-[0.9] mb-4 max-w-6xl uppercase tracking-tighter"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          THE PROOF
          <br />
          PROTOCOL
        </motion.h1>

        <motion.div
          className="flex items-baseline gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <span className="text-6xl md:text-8xl lg:text-[120px] font-bold text-background/20 leading-[0.9] uppercase tracking-tighter">
            FOR AI.
          </span>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-background/60 max-w-lg leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Prove your data is real. Prove your agent is trustworthy.
          Own what you create.
        </motion.p>

        <motion.div
          className="flex gap-3 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a href="#" className="px-8 py-4 bg-background text-foreground font-bold text-xs tracking-[0.2em] hover:bg-background/90 transition-colors">
            TRY_BROWSER
          </a>
          <a href="#" className="px-8 py-4 border-2 border-background/30 text-background font-bold text-xs tracking-[0.2em] hover:border-background hover:bg-background hover:text-foreground transition-all">
            READ_DOCS
          </a>
        </motion.div>

        <motion.div
          className="mt-16 pt-6 border-t border-background/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-8 items-center">
            {PARTNERS.map((p, i) => (
              <motion.span
                key={p}
                className="text-[11px] font-mono text-background/30 tracking-[0.15em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 + i * 0.08 }}
              >
                {p}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="font-mono text-[9px] text-background/40 tracking-widest">SCROLL</span>
        <motion.div
          className="w-px h-10 bg-background/20"
          animate={{ scaleY: [1, 0.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}

/* ── Main narrative: sticky scroll sections ── */
function NarrativeSection() {
  const steps = [
    {
      label: "CRITICAL_GAP",
      content: (
        <div className="px-6 md:px-10 w-full">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              className="font-mono text-[11px] text-destructive tracking-[0.3em] mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              CRITICAL_GAP
            </motion.div>
            <motion.h2
              className="text-5xl md:text-7xl lg:text-[100px] font-bold text-foreground leading-[0.9] mb-8 max-w-5xl uppercase tracking-tighter"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              YOUR AI WORK
              <br />
              <span className="text-muted-foreground/40">HAS NO PROOF.</span>
            </motion.h2>
            <FadeReveal delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
                Every day you prompt, refine, correct, and orchestrate AI tools.
                That work produces some of the most valuable training data in existence.
              </p>
              <StrikethroughList
                items={[
                  { text: "Screenshots → forgeable in 1 minute", struck: true },
                  { text: "API logs → private, unverifiable", struck: true },
                  { text: "Self-declaration → Sybil-vulnerable", struck: true },
                ]}
                itemClassName="font-mono text-base py-2"
                stagger={0.2}
                delay={0.2}
              />
            </FadeReveal>
          </div>
        </div>
      ),
    },
    {
      label: "CRISIS",
      content: (
        <div className="px-6 md:px-10 w-full">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              className="font-mono text-[11px] text-destructive tracking-[0.3em] mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              DATA_CRISIS
            </motion.div>
            <motion.h2
              className="text-5xl md:text-7xl lg:text-[100px] font-bold text-foreground leading-[0.9] mb-8 max-w-5xl uppercase tracking-tighter"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              TRAINING DATA
              <br />
              <span className="text-muted-foreground/40">IS RUNNING OUT.</span>
            </motion.h2>
            <FadeReveal delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                AI companies face a crisis: synthetic alternatives degrade models,
                and the agent economy is scaling with no trust infrastructure.
                That's the gap Hoot fills.
              </p>
            </FadeReveal>
          </div>
        </div>
      ),
    },
    {
      label: "THREE_PROOFS",
      content: (
        <div className="px-6 md:px-10 w-full">
          <div className="max-w-[1400px] mx-auto">
            <FadeReveal>
              <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">[ THREE_PROOFS ]</div>
            </FadeReveal>
            <TextReveal
              text="THREE PROOFS. ONE PROTOCOL."
              as="h2"
              className="text-4xl md:text-6xl lg:text-[80px] font-bold text-foreground leading-[0.95] mb-10 max-w-4xl uppercase tracking-tight"
              staggerDelay={0.04}
            />
            <FadeReveal delay={0.3}>
              <div className="grid md:grid-cols-3 gap-0 border border-foreground/10 max-w-4xl">
                {[
                  { num: "01", title: "DATA IS REAL.", desc: "Cryptographically verified — that it happened, from a real person." },
                  { num: "02", title: "IDENTITY IS TRUSTWORTHY.", desc: "Your AI usage builds a soulbound cryptographic reputation." },
                  { num: "03", title: "AGENT IS ACCOUNTABLE.", desc: "Your trust becomes your agent's credential. Accountability traces back." },
                ].map((p, i) => (
                  <div key={i} className={`p-5 md:p-6 ${i < 2 ? "md:border-r border-b md:border-b-0 border-foreground/10" : ""}`}>
                    <div className="font-mono text-[10px] text-muted-foreground mb-3">{p.num}</div>
                    <h3 className="text-sm font-bold text-foreground mb-2 uppercase tracking-tight">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </FadeReveal>
          </div>
        </div>
      ),
    },
  ];

  return (
    <StickySteps
      steps={steps}
      className="border-b border-foreground/10"
      stepHeight={1.2}
    />
  );
}

/* ── Scenarios: sticky scroll ── */
function ScenariosSection() {
  const steps = [
    {
      label: "SARAH",
      content: (
        <div className="px-6 md:px-10 w-full">
          <div className="max-w-[1400px] mx-auto">
            <FadeReveal>
              <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">[ SCENARIO_CREATOR ]</div>
            </FadeReveal>
            <TextReveal
              text="SARAH USES AI EVERY DAY."
              as="h2"
              className="text-4xl md:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight"
              staggerDelay={0.04}
            />
            <FadeReveal delay={0.3}>
              <p className="text-lg text-muted-foreground mb-8">Now her work has proof.</p>
            </FadeReveal>
            <FadeReveal delay={0.4}>
              <div className="grid md:grid-cols-2 gap-0 border border-foreground/10 max-w-4xl">
                <div className="p-5 md:border-r border-b md:border-b-0 border-foreground/10">
                  <div className="font-mono text-[10px] font-bold text-hoot-green tracking-wider mb-3">● SESSION_VERIFIED</div>
                  <div className="space-y-2 text-sm text-foreground">
                    <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Cryptographically proven <span className="ml-auto font-mono text-[10px] border border-foreground/10 px-1.5 py-0.5">zkTLS</span></div>
                    <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Quality-scored <span className="ml-auto font-mono text-[10px] border border-foreground/10 px-1.5 py-0.5">GOLD</span></div>
                    <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Registered on-chain as Sarah's</div>
                    <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Encrypted. Only Sarah holds the key.</div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-foreground/10 font-mono text-[10px] text-muted-foreground">
                    MONETIZATION: <span className="font-bold text-foreground">OFF</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Sarah's AI conversation is verified. This proof belongs to her. It's encrypted, and only she holds the key.
                  </p>
                  <p className="text-sm font-bold text-foreground uppercase tracking-tight">
                    Your work. Your proof. Your choice to share.
                  </p>
                </div>
              </div>
            </FadeReveal>
          </div>
        </div>
      ),
    },
    {
      label: "JAE",
      content: (
        <div className="px-6 md:px-10 w-full">
          <div className="max-w-[1400px] mx-auto">
            <FadeReveal>
              <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">[ SCENARIO_AI_COMPANY ]</div>
            </FadeReveal>
            <TextReveal
              text="JAE NEEDS DATA HE CAN TRUST."
              as="h2"
              className="text-4xl md:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight"
              staggerDelay={0.04}
            />
            <FadeReveal delay={0.3}>
              <div className="grid md:grid-cols-2 gap-0 border border-foreground/10 max-w-4xl">
                <div className="p-5 md:border-r border-b md:border-b-0 border-foreground/10">
                  <div className="font-mono text-[10px] font-bold text-muted-foreground tracking-wider mb-2">EVERY DATASET HERE IS:</div>
                  <div className="space-y-2 text-sm text-foreground">
                    <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Created by a verified human</div>
                    <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> From a real AI session (zkTLS proof)</div>
                    <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Quality-scored by independent nodes</div>
                    <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> With full provenance trail</div>
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Data with proven provenance — created by a real person, mathematically verified at every step.
                  </p>
                  <p className="text-sm font-bold text-foreground uppercase tracking-tight">
                    Train on data you can trust — because a real person made it.
                  </p>
                </div>
              </div>
            </FadeReveal>
          </div>
        </div>
      ),
    },
    {
      label: "MIN",
      content: (
        <div className="px-6 md:px-10 w-full">
          <div className="max-w-[1400px] mx-auto">
            <FadeReveal>
              <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">[ SCENARIO_AGENT_BUILDER ]</div>
            </FadeReveal>
            <TextReveal
              text="MIN BUILDS AGENTS."
              as="h2"
              className="text-4xl md:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight"
              staggerDelay={0.04}
            />
            <FadeReveal delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8">Now they carry his reputation.</p>
            </FadeReveal>
            <FadeReveal delay={0.3}>
              <div className="grid md:grid-cols-2 gap-0 border border-foreground/10 max-w-4xl">
                <div className="p-5 md:border-r border-b md:border-b-0 border-foreground/10">
                  <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-1">MIN'S HUMANPASSPORT</div>
                  <div className="flex items-center gap-3 mt-2 mb-3">
                    <span className="font-mono text-[10px] font-bold border border-hoot-green text-hoot-green px-1.5 py-0.5">GOLD</span>
                    <span className="text-sm text-foreground">Trust Score: <span className="font-bold">82</span></span>
                  </div>
                  <div className="space-y-1.5 text-sm text-foreground border-t border-foreground/10 pt-3">
                    <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Code verified</div>
                    <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Security scanned</div>
                    <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Trust inherited from Min: +8</div>
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Min's reputation becomes his agent's trust — a chain of accountability.
                  </p>
                  <p className="text-sm font-bold text-foreground uppercase tracking-tight mb-3">
                    Your reputation follows your agent. Build trust once, deploy everywhere.
                  </p>
                  <Link to="/agents" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
                    LEARN_MORE → /agents
                  </Link>
                </div>
              </div>
            </FadeReveal>
          </div>
        </div>
      ),
    },
  ];

  return (
    <StickySteps
      steps={steps}
      className="border-b border-foreground/10"
      stepHeight={1.2}
    />
  );
}

/* ── Trust Model — bold visual block ── */
function TrustModelSection() {
  return (
    <section className="py-24 px-6 md:px-10 border-b-2 border-foreground relative bg-foreground text-background">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <FadeReveal>
          <div className="font-mono text-[11px] text-background/40 tracking-[0.3em] mb-4">TRUST_MODEL</div>
        </FadeReveal>

        <TextReveal
          text="TRUST FLOWS ONE DIRECTION."
          as="h2"
          className="text-4xl md:text-7xl font-bold text-background mb-6 uppercase tracking-tighter max-w-4xl"
          staggerDelay={0.04}
        />

        <FadeReveal delay={0.3}>
          <p className="text-lg text-background/50 leading-relaxed max-w-2xl mb-12">
            Humans create trust. That trust determines the value of data.
            Agents operate on top of that data. Agents cannot elevate a human's trust.
          </p>
        </FadeReveal>

        <div className="max-w-2xl mx-auto">
          <FadeReveal>
            <div className="border-2 border-background p-8 text-center">
              <div className="font-mono text-[11px] text-background/40 tracking-[0.2em]">ENTITY</div>
              <div className="text-4xl font-bold text-background uppercase tracking-tighter">HUMAN</div>
              <div className="font-mono text-[11px] text-background/40 mt-2">Creates trust</div>
            </div>
          </FadeReveal>

          <FadeReveal delay={0.2}>
            <div className="text-center py-3 text-background/20 text-2xl font-bold">
              ↓
            </div>
          </FadeReveal>

          <FadeReveal delay={0.3}>
            <div className="grid grid-cols-2 gap-0">
              <div className="border border-background/20 p-6 text-center">
                <div className="text-xl font-bold text-background uppercase tracking-tight">DATA</div>
                <div className="font-mono text-[10px] text-background/30 mt-1">CQS × HTS</div>
              </div>
              <div className="border border-background/20 border-l-0 p-6 text-center">
                <div className="text-xl font-bold text-background uppercase tracking-tight">AGENT</div>
                <div className="font-mono text-[10px] text-background/30 mt-1">trustBonus = floor(HTS/10)</div>
              </div>
            </div>
          </FadeReveal>

          <FadeReveal delay={0.4}>
            <div className="font-mono text-[11px] text-background/30 text-center mt-6 tracking-wider">
              RULE: ONE-WAY ONLY. NO REVERSE INHERITANCE.
            </div>
          </FadeReveal>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <NarrativeSection />
      <ScenariosSection />
      <TrustModelSection />

      {/* ── UNDER THE HOOD ── */}
      <section className="py-12 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <FadeReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">[ UNDER_THE_HOOD ]</div>
          </FadeReveal>
          <StaggerContainer className="flex flex-wrap gap-2 mb-4" stagger={0.08}>
            {TECH_STACK.map((t) => (
              <StaggerItem key={t}>
                <span className="font-mono text-xs font-bold text-foreground border border-foreground/10 px-3 py-1.5 inline-block">{t}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeReveal delay={0.3}>
            <p className="text-sm text-muted-foreground">
              The cryptographic stack behind every proof.{" "}
              <Link to="/protocol" className="text-foreground underline underline-offset-4 hover:text-muted-foreground">READ_DOCS →</Link>
              {" · "}
              <a href="#" className="text-foreground underline underline-offset-4 hover:text-muted-foreground">WHITEPAPER →</a>
            </p>
          </FadeReveal>
        </div>
      </section>

      {/* ── LIVE DEMO ── */}
      <section className="py-16 px-6 md:px-10 border-b border-foreground/10 relative">
        <div className="absolute inset-0 dot-grid-sparse opacity-30" />
        <div className="max-w-[1100px] mx-auto relative z-10">
          <FadeReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">[ LIVE_DEMO ]</div>
          </FadeReveal>
          <TextReveal
            text="ONE COMMAND, VERIFIED PROOF."
            as="h2"
            className="text-4xl md:text-6xl font-bold text-foreground mb-2 uppercase tracking-tight"
            staggerDelay={0.04}
          />
          <FadeReveal delay={0.3}>
            <p className="text-base text-muted-foreground max-w-lg mb-10">
              Watch a real orchestration — and see how every interaction becomes cryptographically yours.
            </p>
          </FadeReveal>
          <FadeReveal delay={0.4}>
            <BrowserDemo />
          </FadeReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="waitlist" className="py-28 px-6 md:px-10 border-b-2 border-foreground">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-8xl lg:text-[110px] font-bold text-foreground uppercase tracking-tighter mb-4 leading-[0.9]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            YOUR DATA.
            <br />
            YOUR PROOF.
          </motion.h2>
          <FadeReveal delay={0.3}>
            <div className="flex gap-3 justify-center flex-wrap mt-10">
              <a href="#" className="px-10 py-4 bg-foreground text-background font-bold text-xs tracking-[0.2em] hover:bg-foreground/90 transition-colors">
                TRY_BROWSER
              </a>
              <a href="#" className="px-10 py-4 border-2 border-foreground text-foreground font-bold text-xs tracking-[0.2em] hover:bg-foreground hover:text-background transition-all">
                READ_DOCS
              </a>
            </div>
          </FadeReveal>

          <StaggerContainer className="mt-12 grid md:grid-cols-3 gap-0 border border-foreground/10" stagger={0.12} delay={0.3}>
            {TRUST_BLOCKS.map((block, i) => (
              <StaggerItem key={i}>
                <div className={`p-5 text-left ${i < 2 ? "md:border-r border-b md:border-b-0 border-foreground/10" : ""}`}>
                  <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">{block.title}</h3>
                  <ul className="space-y-1.5">
                    {block.items.map((item, j) => (
                      <li key={j} className="text-xs text-muted-foreground flex items-start gap-2 font-mono">
                        <span className="text-foreground mt-0.5">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
}
