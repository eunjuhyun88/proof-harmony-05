import { ScrollReveal } from "@/components/hoot/ScrollReveal";
import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TRACKS = [
  {
    track: "TRACK_A: EXTERNAL",
    desc: "Any ERC-8004 agent. Technical verification.",
    cost: "50–300 HOOTS",
  },
  {
    track: "TRACK_B: NATIVE",
    desc: "Built in Hoot Browser. Full trust inheritance.",
    cost: "INCLUDED",
  },
];

export default function AgentsLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-24 pb-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-6">
              [ AGENT_VERIFICATION ]
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[96px] font-bold text-foreground leading-[0.95] mb-8 max-w-5xl uppercase tracking-tight">
              TRUST FOR THE<br />AGENT ECONOMY.
            </h1>
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed mb-8">
              Autonomous agents need more than code. They need accountable humans behind them.
              Hoot connects agent capability to human reputation.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="#" className="px-6 py-3 bg-foreground text-background font-bold text-xs tracking-wider hover:bg-foreground/90 transition-colors">
                REGISTER_AGENT
              </a>
              <a href="#" className="px-6 py-3 border border-foreground text-foreground font-bold text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors">
                GET_CREDENTIAL
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── THE GAP ── */}
      <section className="py-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[10px] text-destructive tracking-wider mb-4">
              [ CRITICAL_GAP ]
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 max-w-3xl uppercase tracking-tight">
              1.2 MILLION UNVERIFIED<br />AGENTS IN ONE WEEK.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                The agent economy is growing faster than its trust infrastructure.
                Current solutions verify one thing at a time — identity, or security, or feedback.
                Not the full picture.
              </p>
              <div className="border border-foreground/10 p-4">
                <p className="text-sm font-bold text-foreground uppercase tracking-tight">
                  Hoot verifies the full stack: the code, the security, the performance,
                  the on-chain history — and the human who built it.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SCENARIO ── */}
      <section className="py-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">
              [ SCENARIO_BUILD_TRUST ]
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-10 uppercase tracking-tight">
              BUILD TRUST ONCE.<br />DEPLOY EVERYWHERE.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-0 border border-foreground/10">
            <ScrollReveal>
              <div className="border-b md:border-b-0 md:border-r border-foreground/10">
                <div className="bg-secondary px-4 py-2.5 border-b border-foreground/10">
                  <span className="font-mono text-xs font-bold text-foreground">AGENT_CREDENTIAL</span>
                </div>
                <div className="p-5 space-y-4">
                  <div className="font-mono text-[10px] font-bold text-muted-foreground tracking-wider">YOUR REPUTATION → YOUR AGENT'S TRUST</div>

                  <div className="border border-foreground/10 p-3">
                    <div className="font-mono text-[10px] text-muted-foreground mb-1">14 months of verified AI work</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-foreground">Trust tier:</span>
                      <span className="font-mono text-[10px] font-bold border border-hoot-green text-hoot-green px-1.5 py-0.5">GOLD</span>
                    </div>
                  </div>

                  <div className="border border-foreground/10 p-3">
                    <div className="font-mono text-[10px] text-muted-foreground mb-2">YOUR AGENT:</div>
                    <div className="space-y-1.5 text-sm text-foreground">
                      <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Code verified</div>
                      <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Security scanned</div>
                      <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Performance tested</div>
                      <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Trust inherited from you</div>
                    </div>
                  </div>

                  <motion.div
                    className="border-t border-foreground/10 pt-3 font-mono text-[11px] space-y-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-foreground font-bold">AUTONOMY WITH ACCOUNTABILITY.</p>
                    <p className="text-muted-foreground">Agent succeeds → your trust grows.</p>
                    <p className="text-muted-foreground">Agent fails → your trust is at stake.</p>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-6 md:p-8 flex flex-col justify-center space-y-5">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Other agents and services can verify that your agent is backed
                  by a real, accountable human with a real track record.
                </p>
                <div className="border border-foreground/10 p-4">
                  <p className="text-sm font-bold text-foreground uppercase tracking-tight">
                    Your reputation follows your agent. Build trust once, deploy everywhere.
                  </p>
                </div>

                {/* Two Tracks */}
                <div className="space-y-0 mt-4 border border-foreground/10">
                  <div className="font-mono text-[10px] font-bold text-muted-foreground tracking-wider bg-secondary px-3 py-2 border-b border-foreground/10">
                    TWO_TRACKS
                  </div>
                  {TRACKS.map((t, i) => (
                    <div key={i} className={`flex justify-between items-start p-3 ${i === 0 ? "border-b border-foreground/10" : ""}`}>
                      <div>
                        <div className="text-xs font-bold text-foreground">{t.track}</div>
                        <div className="font-mono text-[10px] text-muted-foreground mt-0.5">{t.desc}</div>
                      </div>
                      <span className="font-mono text-[10px] font-bold text-foreground border border-foreground/10 px-1.5 py-0.5 shrink-0">{t.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto text-center">
          <ScrollReveal>
            <div className="border border-foreground/10 p-8 mb-8 inline-block">
              <p className="font-mono text-base text-muted-foreground">
                30K+ agents on ERC-8004. <span className="text-destructive font-bold">0 verified.</span> Be first.
              </p>
            </div>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="#" className="px-8 py-3.5 bg-foreground text-background font-bold text-xs tracking-wider hover:bg-foreground/90 transition-colors">
                REGISTER_AGENT
              </a>
              <Link to="/" className="px-8 py-3.5 border border-foreground text-foreground font-bold text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors">
                DOWNLOAD_BROWSER
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
