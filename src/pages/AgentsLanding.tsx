import { ScrollReveal } from "@/components/hoot/ScrollReveal";
import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TRACKS = [
  {
    track: "Track A: External",
    desc: "Any ERC-8004 agent. Technical verification.",
    cost: "50–300 HOOTS",
  },
  {
    track: "Track B: Native",
    desc: "Built in Hoot Browser. Full trust inheritance.",
    cost: "Included",
  },
];

export default function AgentsLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Hoot for Agents
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-6 max-w-4xl">
              Trust for the<br />
              <span className="italic text-primary">agent economy.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
              Autonomous agents need more than code. They need accountable humans behind them.
              Hoot connects agent capability to human reputation.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                className="px-7 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Register Agent
              </a>
              <a
                href="#"
                className="px-7 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Get Credential
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── THE GAP ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-destructive mb-3">The Gap</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 max-w-2xl">
              1.2 million <span className="italic text-destructive">unverified agents</span><br />
              in one week.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The agent economy is growing faster than its trust infrastructure.
                Current solutions verify one thing at a time — identity, or security, or feedback.
                Not the full picture.
              </p>
              <p className="text-lg text-foreground font-medium leading-relaxed">
                Hoot verifies the full stack: the code, the security, the performance,
                the on-chain history — and the human who built it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SCENARIO: BUILD TRUST ONCE ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Scenario</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-10 max-w-2xl">
              Build trust once.<br />
              <span className="italic text-primary">Deploy everywhere.</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="bg-secondary px-4 py-2.5 flex items-center gap-3 border-b border-border">
                  <div className="flex gap-1.5">
                    {["bg-destructive", "bg-hoot-orange", "bg-hoot-green"].map((c, i) => (
                      <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                    ))}
                  </div>
                  <div className="text-xs font-bold text-foreground tracking-tight">AGENT CREDENTIAL</div>
                </div>
                <div className="p-5 space-y-4">
                  <div className="text-[10px] font-bold text-muted-foreground tracking-wider">YOUR REPUTATION → YOUR AGENT'S TRUST</div>

                  <div className="border border-border rounded-lg p-3">
                    <div className="text-xs text-muted-foreground mb-1">You: 14 months of verified AI work</div>
                    <div className="text-sm font-semibold text-foreground">Trust tier: <span className="text-primary">GOLD</span></div>
                  </div>

                  <div className="border border-border rounded-lg p-3">
                    <div className="text-xs text-muted-foreground mb-2">Your agent:</div>
                    <div className="space-y-1.5 text-sm text-foreground">
                      <div className="flex items-center gap-2"><span className="text-primary">✓</span> Code verified</div>
                      <div className="flex items-center gap-2"><span className="text-primary">✓</span> Security scanned</div>
                      <div className="flex items-center gap-2"><span className="text-primary">✓</span> Performance tested</div>
                      <div className="flex items-center gap-2"><span className="text-primary">✓</span> Trust inherited from you</div>
                    </div>
                  </div>

                  <motion.div
                    className="border-t border-border pt-3 text-sm text-muted-foreground space-y-1.5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-foreground font-medium">
                      Autonomy with accountability.
                    </p>
                    <p>Agent succeeds → your trust grows.</p>
                    <p>Agent fails → your trust is at stake.</p>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col justify-center space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Other agents and services can verify that your agent is backed
                  by a real, accountable human with a real track record.
                </p>
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  Your reputation follows your agent. Build trust once, deploy everywhere.
                </p>

                {/* Two Tracks */}
                <div className="space-y-3 mt-4">
                  <div className="text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground">Two Tracks</div>
                  {TRACKS.map((t, i) => (
                    <div key={i} className="bg-secondary rounded-lg p-4 flex justify-between items-start">
                      <div>
                        <div className="text-sm font-semibold text-foreground">{t.track}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{t.desc}</div>
                      </div>
                      <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-1 rounded shrink-0">{t.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-display text-2xl text-muted-foreground mb-8 italic max-w-lg mx-auto">
              "30K+ agents on ERC-8004. 0 verified. Be first."
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="#" className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
                Register Agent
              </a>
              <Link to="/" className="px-8 py-3.5 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors">
                Download Browser
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
