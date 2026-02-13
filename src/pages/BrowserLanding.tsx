import { ScrollReveal } from "@/components/hoot/ScrollReveal";
import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { Link } from "react-router-dom";

const BEFORE_AFTER = [
  { before: "12+ tabs open", after: "One sidebar, all AIs" },
  { before: "Copy-paste between tools", after: "Orchestrated automatically" },
  { before: "Your data earns $0", after: "60% revenue share" },
];

const EXAMPLES = [
  {
    command: "Summarize emails, draft replies, post to Slack",
    skills: ["Gmail", "Claude", "Slack"],
    time: "~8s",
  },
  {
    command: "Research competitors, create table in Notion",
    skills: ["Perplexity", "GPT-4", "Notion"],
    time: "~15s",
  },
  {
    command: "Review PR, suggest fixes, update Linear ticket",
    skills: ["GitHub", "Claude", "Linear"],
    time: "~12s",
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
              ChatGPT + Claude + Gemini in one sidebar. 700+ Skills. Your data stays yours — and earns for you.
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
                What is Hoot Protocol? →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BEFORE VS AFTER ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 text-center">
              Before vs <span className="italic text-primary">After</span>
            </h2>
          </ScrollReveal>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 text-xs font-bold text-muted-foreground bg-secondary p-4 border-b border-border">
              <div>Without Hoot</div>
              <div>With Hoot Browser</div>
            </div>
            {BEFORE_AFTER.map((row, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="grid grid-cols-2 border-b border-border last:border-0">
                  <div className="p-4 text-sm text-muted-foreground">{row.before}</div>
                  <div className="p-4 text-sm text-foreground font-medium border-l border-border">{row.after}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORCHESTRATION ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-3 text-center">
              One command, <span className="italic text-primary">multiple agents.</span>
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-md mx-auto">
              700+ MCP Skills orchestrate your tools automatically.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4">
            {EXAMPLES.map((ex, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col">
                  <p className="text-sm text-foreground font-medium mb-4 flex-1 leading-relaxed">"{ex.command}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      {ex.skills.map((s) => (
                        <span key={s} className="text-[10px] font-bold bg-primary/5 text-primary px-2 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-foreground">{ex.time}</span>
                  </div>
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
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
              START <span className="italic text-primary">BROWSING</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              One browser. Every AI. Your data, your revenue.
            </p>
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
