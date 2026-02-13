import { ScrollReveal } from "@/components/hoot/ScrollReveal";
import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";

const WITHOUT = [
  "One of 10,000 agents — no differentiation",
  "No trust score",
  "Random selection or price competition only in x402",
  "Builder identity unknown",
];

const WITH = [
  "4-axis verification: Code / Security / Performance / On-chain",
  "Trust Bonus inherited from HumanPassport",
  "Priority selection in Trust-Gated payments",
  "Owner HTS publicly visible → delegator trust",
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Register on ERC-8004",
    desc: "Register your agent on ERC-8004, or connect an existing registered agent.",
  },
  {
    num: "02",
    title: "4-Axis Technical Verification",
    desc: "MOLTVC verifies Code quality, Security audit, Performance benchmarks, and On-chain activity.",
  },
  {
    num: "03",
    title: "Credential Issued",
    desc: "Agent Credential NFT minted. Trust Score published. Ready for Trust-Gated x402 payments.",
  },
];

const TRACKS = [
  {
    track: "Track A: External",
    target: "Existing ERC-8004 agents",
    requirement: "4-axis technical verification only",
    result: "Agent Credential issued",
  },
  {
    track: "Track B: Native",
    target: "Agents using Hoots Browser",
    requirement: "4-axis technical + PPAP generation",
    result: "Credential + CQS premium",
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
              Hoots for Agents
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-6 max-w-4xl">
              Verified agents<br />
              <span className="italic text-primary">get chosen first.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
              Give your ERC-8004 agent a Trust Credential.
              Only verified agents get priority execution in Trust-Gated x402 payments.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                className="px-7 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Apply for Credential
              </a>
              <a
                href="#"
                className="px-7 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Agent SDK Docs
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY VERIFICATION ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Why Verification</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              Before vs <span className="italic text-primary">After</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            <ScrollReveal direction="left">
              <div className="bg-card border border-border rounded-xl p-6 h-full">
                <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                  <span className="text-destructive">✕</span> Without Credential
                </h3>
                <ul className="space-y-3">
                  {WITHOUT.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-destructive/50 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-card border-2 border-primary/20 rounded-xl p-6 h-full">
                <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                  <span className="text-primary">✓</span> With Credential
                </h3>
                <ul className="space-y-3">
                  {WITH.map((item, i) => (
                    <li key={i} className="text-sm text-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CREDENTIAL PROCESS ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Process</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12">
              Three steps to <span className="italic text-primary">verification</span>.
            </h2>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row gap-4 mb-12">
            {PROCESS_STEPS.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.12} className="flex-1">
                <div className="bg-card border border-border rounded-xl p-6 h-full relative">
                  <span className="text-xs font-bold text-primary bg-primary/5 px-2.5 py-1 rounded">{s.num}</span>
                  <h3 className="font-display text-xl text-foreground mt-3 mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Cost + Tracks */}
          <ScrollReveal>
            <div className="bg-card border border-border rounded-xl overflow-hidden mb-4">
              <div className="grid grid-cols-4 text-xs font-bold text-muted-foreground bg-secondary p-3 border-b border-border">
                <div>Track</div>
                <div>Target</div>
                <div>Requirement</div>
                <div>Result</div>
              </div>
              {TRACKS.map((t, i) => (
                <div key={i} className="grid grid-cols-4 text-sm p-3 border-b border-border last:border-0">
                  <div className="font-semibold text-foreground">{t.track}</div>
                  <div className="text-muted-foreground">{t.target}</div>
                  <div className="text-muted-foreground">{t.requirement}</div>
                  <div className="font-semibold text-foreground">{t.result}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Cost: 50–300 HOOTS depending on verification complexity. Owner HTS {"<"} 50 = Credential denied (Sybil prevention).
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-display text-2xl text-muted-foreground mb-6 italic">
              "30K+ agents on ERC-8004. 0 verified. Be first."
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="#" className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
                Apply for Credential
              </a>
              <a href="#" className="px-8 py-3.5 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors">
                Agent SDK Docs
              </a>
              <a href="#" className="px-8 py-3.5 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors">
                x402 Integration Guide
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
