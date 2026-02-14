import { ScrollReveal, TextReveal, StaggerContainer, StaggerItem } from "@/components/hoot/ScrollReveal";
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
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center px-6 md:px-10 border-b border-foreground/10 overflow-hidden">
      <motion.div className="max-w-[1400px] mx-auto w-full" style={{ y, opacity }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-6">
            [ PROOF_PROTOCOL_ACTIVE ]
          </div>
        </motion.div>

        <TextReveal
          text="THE PROOF PROTOCOL FOR THE AI ERA."
          as="h1"
          className="text-5xl md:text-7xl lg:text-[96px] font-bold text-foreground leading-[0.95] mb-8 max-w-5xl uppercase tracking-tight"
          staggerDelay={0.05}
          delay={0.3}
        />

        <motion.p
          className="text-base text-muted-foreground max-w-xl leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Prove your data is real. Prove your agent is trustworthy.
          Own what you create.
        </motion.p>

        <motion.div
          className="flex gap-3 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <a href="#" className="px-6 py-3 bg-foreground text-background font-bold text-xs tracking-wider hover:bg-foreground/90 transition-colors">
            TRY_BROWSER
          </a>
          <a href="#" className="px-6 py-3 border border-foreground text-foreground font-bold text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors">
            READ_DOCS
          </a>
        </motion.div>

        <motion.div
          className="mt-14 pt-6 border-t border-foreground/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-3">BUILDING_WITH</div>
          <div className="flex flex-wrap gap-6 items-center">
            {PARTNERS.map((p) => (
              <span key={p} className="text-xs font-mono text-muted-foreground/50 tracking-wider">{p}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="font-mono text-[9px] text-muted-foreground tracking-widest">SCROLL</span>
        <motion.div
          className="w-px h-8 bg-foreground/20"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
            <div className="font-mono text-[10px] text-destructive tracking-wider mb-4">[ CRITICAL_GAP ]</div>
            <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-foreground leading-[0.95] mb-8 max-w-4xl uppercase tracking-tight">
              YOUR AI WORK<br />HAS NO PROOF.
            </h2>
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
              Every day you prompt, refine, correct, and orchestrate AI tools.
              That work produces some of the most valuable training data in existence.
              None of it is yours.
            </p>
          </div>
        </div>
      ),
    },
    {
      label: "CRISIS",
      content: (
        <div className="px-6 md:px-10 w-full">
          <div className="max-w-[1400px] mx-auto">
            <div className="font-mono text-[10px] text-destructive tracking-wider mb-4">[ DATA_CRISIS ]</div>
            <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-foreground leading-[0.95] mb-8 max-w-4xl uppercase tracking-tight">
              TRAINING DATA<br />IS RUNNING OUT.
            </h2>
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
              AI companies face a crisis: synthetic alternatives degrade models,
              and the agent economy is scaling with no trust infrastructure.
              That's the gap Hoot fills.
            </p>
          </div>
        </div>
      ),
    },
    {
      label: "THREE_PROOFS",
      content: (
        <div className="px-6 md:px-10 w-full">
          <div className="max-w-[1400px] mx-auto">
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">[ THREE_PROOFS ]</div>
            <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-foreground leading-[0.95] mb-10 max-w-4xl uppercase tracking-tight">
              THREE PROOFS.<br />ONE PROTOCOL.
            </h2>
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
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">[ SCENARIO_CREATOR ]</div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight">
              SARAH USES AI<br />EVERY DAY.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">Now her work has proof.</p>
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
          </div>
        </div>
      ),
    },
    {
      label: "JAE",
      content: (
        <div className="px-6 md:px-10 w-full">
          <div className="max-w-[1400px] mx-auto">
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">[ SCENARIO_AI_COMPANY ]</div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight">
              JAE NEEDS DATA<br />HE CAN TRUST.
            </h2>
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
          </div>
        </div>
      ),
    },
    {
      label: "MIN",
      content: (
        <div className="px-6 md:px-10 w-full">
          <div className="max-w-[1400px] mx-auto">
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">[ SCENARIO_AGENT_BUILDER ]</div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight">
              MIN BUILDS<br />AGENTS.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">Now they carry his reputation.</p>
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

/* ── Trust Model with sticky diagram ── */
function TrustModelSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const arrowScale = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const dataX = useTransform(scrollYProgress, [0.3, 0.5], [-60, 0]);
  const agentX = useTransform(scrollYProgress, [0.3, 0.5], [60, 0]);
  const sideOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section ref={ref} className="py-20 px-6 md:px-10 border-b border-foreground/10">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">[ TRUST_MODEL ]</div>
        </ScrollReveal>

        <TextReveal
          text="TRUST FLOWS ONE DIRECTION."
          as="h2"
          className="text-4xl md:text-6xl font-bold text-foreground mb-6 uppercase tracking-tight max-w-4xl"
        />

        <ScrollReveal delay={0.3} distance={30}>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Humans create trust. That trust determines the value of data.
            Agents operate on top of that data. Agents cannot elevate a human's trust.
          </p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <ScrollReveal scale>
            <div className="border-2 border-foreground p-6 text-center">
              <div className="font-mono text-[10px] text-muted-foreground tracking-wider">ENTITY</div>
              <div className="text-2xl font-bold text-foreground uppercase">HUMAN</div>
              <div className="font-mono text-[10px] text-muted-foreground mt-1">Creates trust</div>
            </div>
          </ScrollReveal>

          <motion.div
            className="text-center py-2 text-foreground/30 text-lg overflow-hidden"
            style={{ scaleY: arrowScale, transformOrigin: "top" }}
          >
            ↓ TRUST_INHERITANCE (one-way)
          </motion.div>

          <div className="grid grid-cols-2 gap-0">
            <motion.div className="border border-foreground/10 p-5 text-center" style={{ x: dataX, opacity: sideOpacity }}>
              <div className="text-lg font-bold text-foreground uppercase">DATA</div>
              <div className="font-mono text-[10px] text-muted-foreground mt-1">CQS × HTS multiplier</div>
            </motion.div>
            <motion.div className="border border-foreground/10 border-l-0 p-5 text-center" style={{ x: agentX, opacity: sideOpacity }}>
              <div className="text-lg font-bold text-foreground uppercase">AGENT</div>
              <div className="font-mono text-[10px] text-muted-foreground mt-1">trustBonus = floor(HTS/10)</div>
            </motion.div>
          </div>

          <ScrollReveal delay={0.5} distance={20}>
            <div className="font-mono text-[10px] text-muted-foreground text-center mt-4">
              RULE: ONE-WAY ONLY. NO REVERSE INHERITANCE.
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO: full viewport with parallax ── */}
      <HeroSection />

      {/* ── NARRATIVE: sticky scroll — Problem → Crisis → Three Proofs ── */}
      <NarrativeSection />

      {/* ── SCENARIOS: sticky scroll — Sarah → Jae → Min ── */}
      <ScenariosSection />

      {/* ── TRUST MODEL ── */}
      <TrustModelSection />

      {/* ── UNDER THE HOOD ── */}
      <section className="py-12 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">[ UNDER_THE_HOOD ]</div>
          </ScrollReveal>
          <StaggerContainer className="flex flex-wrap gap-2 mb-4" stagger={0.08}>
            {TECH_STACK.map((t) => (
              <StaggerItem key={t}>
                <span className="font-mono text-xs font-bold text-foreground border border-foreground/10 px-3 py-1.5 inline-block">{t}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal delay={0.4} distance={20}>
            <p className="text-sm text-muted-foreground">
              The cryptographic stack behind every proof.{" "}
              <Link to="/protocol" className="text-foreground underline underline-offset-4 hover:text-muted-foreground">READ_DOCS →</Link>
              {" · "}
              <a href="#" className="text-foreground underline underline-offset-4 hover:text-muted-foreground">WHITEPAPER →</a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── LIVE DEMO ── */}
      <section className="py-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">[ LIVE_DEMO ]</div>
          </ScrollReveal>
          <TextReveal
            text="ONE COMMAND, VERIFIED PROOF."
            as="h2"
            className="text-4xl md:text-6xl font-bold text-foreground mb-2 uppercase tracking-tight"
          />
          <ScrollReveal delay={0.3} distance={30}>
            <p className="text-base text-muted-foreground max-w-lg mb-10">
              Watch a real orchestration — and see how every interaction becomes cryptographically yours.
            </p>
          </ScrollReveal>
          <ScrollReveal distance={50} duration={1}>
            <BrowserDemo />
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="waitlist" className="py-20 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto text-center">
          <TextReveal
            text="YOUR DATA. YOUR AGENTS. YOUR PROOF."
            as="h2"
            className="text-5xl md:text-7xl font-bold text-foreground uppercase tracking-tight mb-6"
            staggerDelay={0.06}
          />
          <ScrollReveal delay={0.5} distance={30}>
            <div className="flex gap-3 justify-center flex-wrap mt-8">
              <a href="#" className="px-8 py-3.5 bg-foreground text-background font-bold text-xs tracking-wider hover:bg-foreground/90 transition-colors">
                TRY_BROWSER
              </a>
              <a href="#" className="px-8 py-3.5 border border-foreground text-foreground font-bold text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors">
                READ_DOCS
              </a>
            </div>
          </ScrollReveal>

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
