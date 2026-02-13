import { ScrollReveal } from "@/components/hoot/ScrollReveal";
import { BrowserDemo } from "@/components/hoot/BrowserDemo";
import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { Link } from "react-router-dom";

const PARTNERS = ["NVIDIA", "0G Labs", "Arbitrum", "Base", "Alchemy", "Google", "AppWorks", "Seedify"];

const STEPS = [
  {
    num: "01",
    title: "Use AI",
    desc: "Browse with ChatGPT, Claude, Gemini — all in one sidebar. Just use AI as you normally would.",
    icon: "🌐",
  },
  {
    num: "02",
    title: "Auto-validate",
    desc: "Your interactions are cryptographically verified via zkTLS in ~6 seconds. Quality scored automatically.",
    icon: "✓",
  },
  {
    num: "03",
    title: "Earn",
    desc: "Verified data is registered on-chain as PPAP. When it sells, you receive 60% — hardcoded in the smart contract.",
    icon: "💰",
  },
];

const TRACTION = [
  { value: "400K+", label: "Users" },
  { value: "80%", label: "Retention" },
  { value: "$22.5K", label: "B2B Revenue" },
  { value: "8+", label: "Partners" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              The Proof Protocol for the AI Era
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-6 max-w-4xl">
              USE AI,<br />
              <span className="italic text-primary">GENERATE</span><br />
              TRAINING DATA.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
              Your AI conversations have real value. Hoot captures, verifies, and lets you earn from them.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/browser"
                className="px-7 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Try Browser
              </Link>
              <a
                href="#"
                className="px-7 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Read Whitepaper
              </a>
            </div>
          </ScrollReveal>

          {/* Trust bar */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 pt-8 border-t border-border">
              <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-4">
                Backed by
              </div>
              <div className="flex flex-wrap gap-6 items-center">
                {PARTNERS.map((p) => (
                  <span key={p} className="text-sm font-semibold text-muted-foreground/60 tracking-wide">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3-STEP FLOW ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">How It Works</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12">
              Three steps. <span className="italic text-primary">That's it.</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4">
            {STEPS.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="bg-card border border-border rounded-xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-primary bg-primary/5 px-2.5 py-1 rounded-lg">
                      {s.num}
                    </span>
                    <span className="text-2xl">{s.icon}</span>
                  </div>
                  <h3 className="font-display text-3xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BROWSER DEMO ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">See It In Action</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2 max-w-2xl">
              One command,<br />
              <span className="italic text-primary">three agents</span>,<br />
              verified proof.
            </h2>
            <p className="text-muted-foreground max-w-lg mb-10">
              Watch how a single request orchestrates multiple AI models — and captures verifiable training data.
            </p>
          </ScrollReveal>
          <BrowserDemo />
        </div>
      </section>

      {/* ── TRACTION ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-10">
              Already <span className="italic text-primary">proven.</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {TRACTION.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{t.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{t.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {PARTNERS.map((p) => (
                <span key={p} className="text-sm font-semibold text-muted-foreground/40 tracking-wide">
                  {p}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
              ENTER THE<br />
              <span className="italic text-primary">HOOT ECOSYSTEM</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Start using AI, generating verified data, and earning from your contributions.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                to="/browser"
                className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Download Browser
              </Link>
              <a
                href="#"
                className="px-8 py-3.5 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Read Docs
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
