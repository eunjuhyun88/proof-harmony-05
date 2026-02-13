import { ScrollReveal } from "@/components/hoot/ScrollReveal";
import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { Link } from "react-router-dom";

const BEFORE_AFTER = [
  { before: "12+ browser tabs open", after: "One sidebar, all AIs" },
  { before: "Copy-paste between AI tools", after: "MCP orchestration across tools" },
  { before: "Manual workflow, no automation", after: "700+ Skills, automated workflows" },
  { before: "AI history lost across services", after: "Local memory, cross-model context" },
  { before: "Your data earns $0", after: "60% revenue from verified data" },
];

const EXAMPLES = [
  {
    command: "Summarize yesterday's emails, draft responses, post status to Slack",
    skills: ["Gmail", "Claude", "Slack"],
    count: 3,
    time: "~8 seconds",
  },
  {
    command: "Research competitors, create comparison table in Notion",
    skills: ["Perplexity", "GPT-4", "Notion"],
    count: 3,
    time: "~15 seconds",
  },
  {
    command: "Review this PR, suggest fixes, update the ticket in Linear",
    skills: ["GitHub", "Claude", "Linear"],
    count: 3,
    time: "~12 seconds",
  },
];

const REVENUE = [
  { level: "Light", ppaps: "10", revenue: "~$12" },
  { level: "Standard", ppaps: "50", revenue: "~$85" },
  { level: "Power", ppaps: "200", revenue: "~$280" },
];

const AGENT_STEPS = ["Create", "Register (ERC-8004)", "Inherit trust", "Deploy (x402 ready)"];

const NODE_CARDS = [
  {
    title: "Run a Node",
    desc: "Enable in Settings → Stake → Verify → Earn. No hardware required.",
    icon: "⚡",
    cta: "Node tiers →",
  },
  {
    title: "GPU Training",
    desc: "Local SLM fine-tuning. QLoRA, SFT, DPO. Legal, medical, code domains.",
    icon: "🧠",
    cta: "Training guide →",
  },
  {
    title: "Persistent Memory",
    desc: "Local Vector DB + SQLite. Cross-model context. Works offline.",
    icon: "💾",
    cta: "Learn more →",
  },
];

export default function BrowserLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Hoot Browser
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-6 max-w-3xl">
              Every AI,<br />
              <span className="italic text-primary">one browser.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
              ChatGPT + Claude + Gemini orchestrated in one sidebar. 700+ MCP Skills. Your data stays yours — and earns for you.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                className="px-7 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Download Browser
              </a>
              <Link
                to="/"
                className="px-7 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Powered by Hoot Protocol →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BEFORE VS AFTER ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Comparison</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              Before vs <span className="italic text-primary">After</span>
            </h2>
          </ScrollReveal>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 text-xs font-bold text-muted-foreground bg-secondary p-4 border-b border-border">
              <div>Without Hoot</div>
              <div>With Hoot Browser</div>
            </div>
            {BEFORE_AFTER.map((row, i) => (
              <ScrollReveal key={i} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="grid grid-cols-2 border-b border-border last:border-0">
                  <div className="p-4 text-sm text-muted-foreground">{row.before}</div>
                  <div className="p-4 text-sm text-foreground font-medium border-l border-border">{row.after}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORCHESTRATION EXAMPLES ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Orchestration</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              Real <span className="italic text-primary">workflows</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4">
            {EXAMPLES.map((ex, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col">
                  <p className="text-sm text-foreground font-medium mb-4 flex-1 leading-relaxed">"{ex.command}"</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {ex.skills.map((s) => (
                      <span key={s} className="text-[10px] font-bold bg-primary/5 text-primary px-2 py-0.5 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{ex.count} Skills</span>
                    <span className="font-semibold text-foreground">{ex.time}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DATA SOVEREIGNTY ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Data Sovereignty</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Your data, <span className="italic text-primary">your revenue.</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mb-8">
              AES-256-GCM encrypted on device. Monetization is OFF by default — toggle ON when you choose.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-card border border-border rounded-xl overflow-hidden mb-4">
              <div className="grid grid-cols-3 text-xs font-bold text-muted-foreground bg-secondary p-3 border-b border-border">
                <div>Usage Level</div>
                <div>PPAPs/month</div>
                <div>Est. Revenue</div>
              </div>
              {REVENUE.map((r, i) => (
                <div key={i} className="grid grid-cols-3 text-sm p-3 border-b border-border last:border-0">
                  <div className="font-semibold text-foreground">{r.level}</div>
                  <div className="text-muted-foreground">{r.ppaps}</div>
                  <div className="font-bold text-foreground">{r.revenue}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-destructive font-semibold">
              <span className="bg-destructive/10 px-2 py-0.5 rounded">⚠</span>
              Revenue estimates are projections. DATA HUB not launched.
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CREATE AGENTS ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">New Feature</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Create agents<br />
              <span className="italic text-primary">from your browser.</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mb-8">
              Build, register, and deploy agents directly from the browser. Your HumanPassport trust flows to every agent you create.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 items-center">
              {AGENT_STEPS.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="px-4 py-2.5 bg-card border border-border rounded-xl text-sm font-semibold text-foreground">
                    {s}
                  </span>
                  {i < AGENT_STEPS.length - 1 && <span className="text-muted-foreground/30 text-lg">→</span>}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── NODE + GPU + MEMORY ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Infrastructure</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              Node + GPU + <span className="italic text-primary">Memory</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4">
            {NODE_CARDS.map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="font-display text-xl text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{card.desc}</p>
                  <a href="#" className="text-xs font-semibold text-primary hover:underline">{card.cta}</a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
              START <span className="italic text-primary">BROWSING</span>
            </h2>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href="#"
                className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Download Browser
              </a>
              <a
                href="#"
                className="px-8 py-3.5 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Run a Node
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
