import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";

export default function AgentsLanding() {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3 });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-[700px]">
          <motion.div
            className="font-mono text-[11px] text-primary tracking-[0.3em] mb-6"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            AGENT CREDENTIALS
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-foreground tracking-[-2px] mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Build agents<br />people can trust.
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-lg mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            30,000+ agents on ERC-8004. Most can't prove who built them. Yours can.
          </motion.p>
          <motion.div
            className="flex gap-3 justify-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <a href="#" className="px-7 py-3 bg-primary text-primary-foreground font-semibold text-sm">Register Agent</a>
            <a href="#" className="px-7 py-3 border border-border text-foreground text-sm">Get Credential</a>
          </motion.div>
        </div>
      </section>

      {/* Credential Demo */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Agent Credential</h2>
          <div className="bg-hoot-terminal border border-border rounded-[14px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="px-4 py-3 flex items-center gap-2 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-hoot-red/70" />
                <div className="w-3 h-3 rounded-full bg-hoot-amber/70" />
                <div className="w-3 h-3 rounded-full bg-hoot-green/70" />
              </div>
              <span className="font-mono text-[11px] text-muted-foreground ml-2">Agent Credential</span>
            </div>
            <div className="p-5 font-mono text-[12px] leading-relaxed space-y-3">
              <div>
                <span className="text-muted-foreground">Agent: </span>
                <span className="text-foreground font-bold">SupportBot-v3</span>
              </div>
              <div>
                <span className="text-muted-foreground">Owner: </span>
                <span className="text-foreground">did:hoot:human:0xA3...7F</span>
              </div>
              <div className="border-t border-border pt-3 mt-3">
                <div className="text-muted-foreground mb-2">Technical Verification:</div>
                <div className="grid grid-cols-2 gap-1 ml-2">
                  <span>Code: <span className="text-hoot-green font-bold">88/100</span></span>
                  <span>Security: <span className="text-hoot-green font-bold">91/100</span></span>
                  <span>Performance: <span className="text-hoot-green font-bold">85</span></span>
                  <span>On-chain: <span className="text-muted-foreground">NEW</span></span>
                </div>
              </div>
              <div className="border-t border-border pt-3">
                <div className="text-muted-foreground mb-1">Human Trust (inherited):</div>
                <div className="ml-2">
                  Owner HTS: <span className="text-hoot-green font-bold">82 (GOLD)</span> → trustBonus: <span className="text-primary">+8</span>
                </div>
              </div>
              <div className="border-t border-border pt-3 text-muted-foreground">
                <div>Trust-Gated: <span className="text-foreground">Eligible for high-value tx</span></div>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
            4-axis technical verification + human trust inheritance. Your reputation becomes your agent's credential.
          </p>
        </div>
      </section>

      {/* Trust Flow */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-[500px] mx-auto text-center">
          <h2 className="text-xl font-bold text-foreground mb-4 tracking-tight">Trust flows one direction.</h2>
          <p className="text-base text-muted-foreground mb-6">
            Human → Data → Agent. Never backwards.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your agent can't inflate your trust score. Only you can build your reputation through consistent, high-quality interactions.
          </p>
          <div className="flex gap-3 justify-center mt-8">
            <a href="#" className="px-7 py-3 bg-primary text-primary-foreground font-semibold text-sm">Register Agent</a>
            <Link to="/" className="px-7 py-3 border border-border text-foreground text-sm">Download Browser</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
