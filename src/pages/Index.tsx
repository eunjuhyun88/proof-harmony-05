import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { HooAiDemo } from "@/components/hoot/HooAiDemo";
import { OpenClawDemo } from "@/components/hoot/OpenClawDemo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const PARTNERS = ["NVIDIA Inception", "Google for Startups", "Arbitrum", "AppWorks", "Alchemy", "Onepiece Labs"];
const TECH_CHIPS = ["zkTLS 2PC", "FROST 5/5", "Arbitrum", "ERC-8004"];

/* ── Screen 1: Hero ── */
function HeroSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center px-6 md:px-10 relative">
      <div className="max-w-[800px] w-full text-center">
        <motion.div
          className="font-mono text-[11px] md:text-[12px] text-primary tracking-[0.3em] uppercase mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          THE AI BROWSER
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-[80px] font-bold text-foreground leading-[1] tracking-[-2px] mb-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Use AI.
        </motion.h1>
        <motion.h1
          className="text-5xl md:text-7xl lg:text-[80px] font-light italic text-primary leading-[1] tracking-[-2px] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Train AI.
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          A browser with a built-in crypto AI, 700+ tool orchestration, and automatic data verification.
        </motion.p>

        <motion.div
          className="flex gap-3 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a href="#" className="px-7 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors">
            Download Hoot Browser
          </a>
          <a href="#demo" className="px-7 py-3 border border-border text-muted-foreground font-medium text-sm hover:text-foreground hover:border-muted-foreground transition-all">
            See it work ↓
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="font-mono text-[9px] text-muted-foreground tracking-widest">SCROLL</span>
        <motion.div
          className="w-px h-8 bg-muted-foreground/30"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}

/* ── Screen 4: The Reveal ── */
function RevealSection() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-6 md:px-10 py-20">
      <div className="max-w-[640px] w-full text-center">
        <motion.h2
          className="text-3xl md:text-[40px] lg:text-[48px] font-bold text-foreground leading-[1.1] tracking-[-1px] mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Every interaction inside this browser
        </motion.h2>
        <motion.h2
          className="text-3xl md:text-[40px] lg:text-[48px] font-light italic text-primary leading-[1.1] tracking-[-1px] mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          is verified on-chain.
        </motion.h2>

        <motion.div
          className="space-y-3 text-base md:text-lg text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p>You don't configure it. It just works.</p>
          <p>Your AI work becomes provable training data.</p>
          <p>If you choose to share it, you're compensated.</p>
        </motion.div>

        {/* Tech chips */}
        <motion.div
          className="flex gap-2 justify-center flex-wrap mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          {TECH_CHIPS.map((chip) => (
            <span key={chip} className="font-mono text-[11px] text-muted-foreground border border-border px-3 py-1.5">
              {chip}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-6"
        >
          <a href="#" className="font-mono text-sm text-primary underline underline-offset-4 decoration-1 hover:text-primary/80 transition-colors">
            How it works →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Screen 5: Navigation + CTA + Trust ── */
function CtaSection() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const cards = [
    { title: "Build Agents", desc: "ERC-8004 credentials. Trust-gated.", href: "/agents" },
    { title: "Run a Node", desc: "Verify AI data. Earn rewards.", href: "/node" },
    { title: "Read Docs", desc: "Technical architecture, Whitepaper.", href: "#" },
    { title: "Tokenomics", desc: "HOOTS token economy.", href: "#" },
  ];

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-6 md:px-10 py-20">
      <div className="max-w-[800px] w-full">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          One browser. Everything built in.
        </motion.h2>

        {/* Download CTAs */}
        <motion.div
          className="flex gap-3 justify-center flex-wrap mt-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <a href="#" className="px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors">
            Download for macOS
          </a>
          <a href="#" className="px-6 py-3 border border-border text-foreground font-medium text-sm hover:border-muted-foreground transition-colors">
            Windows
          </a>
          <a href="#" className="px-6 py-3 border border-border text-foreground font-medium text-sm hover:border-muted-foreground transition-colors">
            Linux
          </a>
        </motion.div>

        {/* Navigation cards */}
        <motion.div
          className="grid grid-cols-2 gap-0"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {cards.map((card, i) => (
            <Link
              key={i}
              to={card.href}
              className={`p-6 border border-border hover:bg-muted transition-all duration-250 group ${
                i === 0 ? "border-r-0 border-b-0" : i === 1 ? "border-b-0" : i === 2 ? "border-r-0" : ""
              }`}
            >
              <h3 className="text-base font-bold text-foreground mb-1 group-hover:-translate-y-0.5 transition-transform">
                {card.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">{card.desc}</p>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">→</span>
            </Link>
          ))}
        </motion.div>

        {/* Trust bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
            {PARTNERS.map((p) => (
              <span key={p} className="text-[11px] text-muted-foreground font-mono">{p}</span>
            ))}
          </div>
        </motion.div>

        {/* Under the hood */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <p className="font-mono text-[11px] text-muted-foreground">
            zkTLS 2PC · FROST 5-of-5 · CQS 4-axis · ERC-8004 · Arbitrum L2 · Qwen3-4B + LoRA
          </p>
          <div className="flex gap-4 justify-center mt-3">
            <a href="#" className="font-mono text-[11px] text-primary underline underline-offset-4 decoration-1">Read Docs →</a>
            <a href="#" className="font-mono text-[11px] text-primary underline underline-offset-4 decoration-1">Whitepaper →</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="demo">
        <HooAiDemo />
      </div>
      <OpenClawDemo />
      <RevealSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
