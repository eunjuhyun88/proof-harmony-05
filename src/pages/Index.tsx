import { useState } from "react";
import { ScrollReveal } from "@/components/hoot/ScrollReveal";
import { BrowserDemo } from "@/components/hoot/BrowserDemo";
import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PARTNERS = ["NVIDIA Inception", "0G Labs", "Arbitrum", "Google Startups", "AppWorks"];

const THREE_PROOFS = [
  {
    num: "01",
    title: "Prove your data is real.",
    desc: "Every AI interaction you make can be cryptographically verified — that it happened, that a real person created it, and how good it is. This verified data is registered as yours on-chain. Nobody can claim it. Nobody can fake it.",
  },
  {
    num: "02",
    title: "Prove your identity is trustworthy.",
    desc: "Your AI usage history builds a trust identity — not a social profile, but a cryptographic reputation. How consistently you create quality data, how your work is rated, how you participate in the network. This trust is yours, portable, and soulbound.",
  },
  {
    num: "03",
    title: "Prove your agent is accountable.",
    desc: "When you build an AI agent, it inherits your trust. Your reputation becomes its credential. If it performs well, your trust grows. If it fails, the accountability traces back to you. This is how an agent economy stays honest.",
  },
];

const TRUST_BLOCKS = [
  {
    title: "Already Proven",
    items: ["400K users in Phase 0", "80% daily retention", "Browser + Protocol implemented"],
  },
  {
    title: "Partnerships",
    items: ["NVIDIA Inception", "Google for Startups", "Alchemy", "Arbitrum"],
  },
  {
    title: "Technical Safety",
    items: ["Forgery probability 2⁻¹²⁸", "5 independent node consensus", "Ethereum-inherited security"],
  },
];

const TECH_STACK = [
  "zkTLS 2PC",
  "FROST 5-of-5",
  "CQS 4-axis Scoring",
  "ERC-8004 Fusion",
  "Arbitrum L2",
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── S1: HERO ── */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              The Proof Protocol
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-6 max-w-4xl">
              The Proof Protocol<br />
              <span className="italic text-primary">for the AI Era.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
              Prove your data is real. Prove your agent is trustworthy.
              Own what you create.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                className="px-7 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Try Browser
              </a>
              <a
                href="#"
                className="px-7 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Read Docs
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 pt-8 border-t border-border">
              <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-4">
                Building with
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

      {/* ── S2: THE PROBLEM ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-destructive mb-3">The Problem</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 max-w-2xl">
              Your AI work <span className="italic text-destructive">has no proof.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl space-y-5">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every day you prompt, refine, correct, and orchestrate AI tools.
                That work produces some of the most valuable training data in existence —
                the kind that teaches AI how humans actually think and decide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                None of it is yours. There's no record that you created it.
                No proof it came from a real person. No way to verify its quality.
                It vanishes into platforms that profit from it without your knowledge or consent.
              </p>
              <p className="text-lg text-foreground leading-relaxed font-medium">
                Meanwhile, AI companies face a crisis: training data is running out,
                synthetic alternatives degrade models, and the agent economy is scaling
                with no trust infrastructure. They need what you produce.
                But there's no system to connect your verified work to their verified need.
              </p>
              <p className="text-xl font-display text-primary mt-4">
                That's the gap Hoot fills.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── S3: THREE PROOFS ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">What Hoot Does</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12 max-w-2xl">
              Three proofs. <span className="italic text-primary">One protocol.</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {THREE_PROOFS.map((proof, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-bold text-primary bg-primary/5 px-2.5 py-1 rounded shrink-0">
                      {proof.num}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">{proof.title}</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-2xl">{proof.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── S4: CREATOR SCENARIO (SARAH) ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">How It Works: Creator</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-10 max-w-2xl">
              Sarah uses AI every day.<br />
              <span className="italic text-primary">Now her work has proof.</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Chat Mockup */}
            <ScrollReveal>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="bg-secondary px-4 py-2.5 flex items-center gap-3 border-b border-border">
                  <div className="flex gap-1.5">
                    {["bg-destructive", "bg-hoot-orange", "bg-hoot-green"].map((c, i) => (
                      <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                    ))}
                  </div>
                  <div className="text-xs font-bold text-foreground tracking-tight">HOOT BROWSER</div>
                </div>
                <div className="p-5 space-y-4">
                  <div className="bg-primary/5 border border-primary/15 rounded-xl px-4 py-3">
                    <div className="text-[10px] font-bold text-primary mb-1">SARAH</div>
                    <div className="text-sm text-foreground">Claude, write 3 email subject lines for our spring campaign</div>
                  </div>
                  <div className="bg-secondary rounded-xl px-4 py-3">
                    <div className="text-[10px] font-bold text-muted-foreground mb-1">CLAUDE</div>
                    <div className="text-sm text-foreground font-mono">Here are 3 options: ...</div>
                  </div>
                  <div className="bg-primary/5 border border-primary/15 rounded-xl px-4 py-3">
                    <div className="text-[10px] font-bold text-primary mb-1">SARAH</div>
                    <div className="text-sm text-foreground">#2 is good but make it shorter</div>
                  </div>

                  {/* Verification Card */}
                  <motion.div
                    className="bg-card border-2 border-primary/20 rounded-xl px-5 py-4"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-[10px] font-bold text-primary tracking-wider mb-3">● SESSION VERIFIED</div>
                    <div className="space-y-2 text-sm text-foreground">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">✓</span> Cryptographically proven (zkTLS)
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary">✓</span> Quality-scored: GOLD
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary">✓</span> Registered on-chain as Sarah's
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary">✓</span> Encrypted. Only Sarah holds the key.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border">
                      <div className="text-xs text-muted-foreground">Monetization: <span className="font-bold text-foreground">OFF</span></div>
                      <div className="text-[10px] text-muted-foreground mt-1">Turn ON to list on DATA HUB</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col justify-center space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sarah's AI conversation is verified — that a real person, in a real AI session,
                  did real work. This proof belongs to Sarah. It's encrypted, and only Sarah holds the key.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Monetization is OFF by default. If Sarah chooses to turn it on, AI companies
                  can license this verified data. Sarah receives a fair share. If she doesn't,
                  nobody gets access.
                </p>
                <p className="text-sm font-semibold text-primary italic">
                  Your work. Your proof. Your choice to share.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── S5: AI COMPANY SCENARIO (JAE) ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">How It Works: AI Company</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 max-w-2xl">
              Jae needs training data<br />
              <span className="italic text-primary">he can trust.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Jae is building a customer service AI. He needs good training data. The problem is provenance.
              Web-scraped data can't distinguish AI-generated from human-made.
              Models trained on synthetic data collapse.
            </p>
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
                  <div className="text-xs font-bold text-foreground tracking-tight">DATA HUB</div>
                </div>
                <div className="p-5 space-y-4">
                  <div className="text-[10px] font-bold text-muted-foreground tracking-wider mb-2">EVERY DATASET HERE IS:</div>
                  <div className="space-y-2 text-sm text-foreground">
                    <div className="flex items-center gap-2"><span className="text-primary">✓</span> Created by a verified human</div>
                    <div className="flex items-center gap-2"><span className="text-primary">✓</span> From a real AI session (zkTLS proof)</div>
                    <div className="flex items-center gap-2"><span className="text-primary">✓</span> Quality-scored by independent nodes</div>
                    <div className="flex items-center gap-2"><span className="text-primary">✓</span> With full provenance trail</div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border">
                    <div className="text-[10px] font-bold text-muted-foreground tracking-wider mb-2">JAE CAN FILTER BY:</div>
                    <div className="flex flex-wrap gap-2">
                      {["Domain", "Quality grade", "Data depth", "Creator trust tier", "License type"].map((f) => (
                        <span key={f} className="text-[10px] font-bold bg-primary/5 text-primary px-2 py-0.5 rounded">{f}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border text-sm text-muted-foreground">
                    <p>When Jae licenses data: the creator is compensated.</p>
                    <p>The provenance is on-chain. EU AI Act Art. 53 compliance: built in.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col justify-center space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What Jae gets isn't just data. It's data with proven provenance —
                  created by a real person working with real AI tools in a real workflow,
                  mathematically verified at every step.
                </p>
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  Train on data you can trust — because a real person made it.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── S6: AGENT BUILDER SCENARIO (MIN) ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">How It Works: Agent Builder</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 max-w-2xl">
              Min builds agents.<br />
              <span className="italic text-primary">Now they carry his reputation.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              30,000+ agents registered on ERC-8004. Most have no way to prove who built them
              or what verification they went through. That's why 1.2 million unverified agents
              were registered on Moltbook in a single week.
            </p>
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
                  <div>
                    <div className="text-[10px] font-bold text-muted-foreground tracking-wider mb-1">MIN'S HUMANPASSPORT</div>
                    <div className="text-sm text-foreground">Trust Score: <span className="font-bold text-primary">82</span> (GOLD tier)</div>
                    <div className="text-xs text-muted-foreground">Built from: 14 months of verified AI use</div>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="text-[10px] font-bold text-muted-foreground tracking-wider mb-2">MIN'S AGENT: "SupportBot-v3"</div>
                    <div className="space-y-1.5 text-sm text-foreground">
                      <div className="flex items-center gap-2"><span className="text-primary">✓</span> Code verified</div>
                      <div className="flex items-center gap-2"><span className="text-primary">✓</span> Security scanned</div>
                      <div className="flex items-center gap-2"><span className="text-primary">✓</span> Performance tested</div>
                      <div className="flex items-center gap-2"><span className="text-primary">✓</span> Trust inherited from Min: +8</div>
                    </div>
                  </div>
                  <div className="border-t border-border pt-3 text-sm text-muted-foreground space-y-1">
                    <p className="font-medium text-foreground">Min's trust → Agent's credential.</p>
                    <p>Agent misbehaves → Min's trust at stake.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col justify-center space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Min's reputation becomes his agent's trust. This isn't just certification —
                  it's a chain of accountability. If the agent performs well, Min's trust grows.
                  If it causes problems, Min is accountable.
                </p>
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  Your reputation follows your agent. Build trust once, deploy everywhere.
                </p>
                <Link
                  to="/agents"
                  className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  Learn more about Agent Credentials →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── S7: TRUST MODEL ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Trust Model</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 max-w-3xl">
              Trust flows one direction.<br />
              <span className="italic text-primary">Human to data. Data to agent. Never backwards.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl space-y-4 mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Humans create trust. That trust determines the value of data. Agents operate on top of that data.
                Agents cannot elevate a human's trust. Only humans can build their own trust.
              </p>
              <p className="text-sm font-semibold text-primary">
                This is Hoot's 3-Entity Trust Model.
              </p>
            </div>
          </ScrollReveal>

          {/* Visual flow */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col items-center gap-3 max-w-lg mx-auto">
              <motion.div
                className="bg-card border-2 border-primary rounded-xl px-8 py-5 text-center w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-xs font-bold text-primary tracking-wider uppercase mb-1">Human</div>
                <div className="font-display text-xl text-foreground">Creates trust</div>
              </motion.div>

              <motion.div
                className="text-primary text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >↓</motion.div>

              <div className="flex gap-4 w-full">
                <motion.div
                  className="flex-1 bg-card border border-border rounded-xl px-5 py-4 text-center"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="font-display text-lg text-foreground">Data</div>
                  <div className="text-xs text-muted-foreground mt-1">Value from trust</div>
                </motion.div>
                <motion.div
                  className="flex-1 bg-card border border-border rounded-xl px-5 py-4 text-center"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="font-display text-lg text-foreground">Agent</div>
                  <div className="text-xs text-muted-foreground mt-1">Inherits trust</div>
                </motion.div>
              </div>

              <motion.div
                className="text-xs text-muted-foreground text-center mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                One-way only. No reverse inheritance.
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── S8: UNDER THE HOOD ── */}
      <section className="py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">Under the Hood</div>
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {TECH_STACK.map((t) => (
                  <span key={t} className="text-sm font-mono font-semibold text-foreground bg-secondary px-3 py-1.5 rounded-lg border border-border">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                The cryptographic stack behind every proof.{" "}
                <Link to="/protocol" className="text-primary font-semibold hover:underline">Read Docs →</Link>
                {" · "}
                <a href="#" className="text-primary font-semibold hover:underline">Whitepaper →</a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── LIVE DEMO ── */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Live Demo</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2 max-w-2xl">
              One command, <span className="italic text-primary">verified proof.</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mb-10">
              Watch a real orchestration — and see how every interaction becomes
              cryptographically yours.
            </p>
          </ScrollReveal>
          <BrowserDemo />
        </div>
      </section>

      {/* ── S9: CTA ── */}
      <section id="waitlist" className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
              Your data. Your agents.<br />
              <span className="italic text-primary">Your proof.</span>
            </h2>
            <div className="flex gap-3 justify-center flex-wrap mt-8">
              <a
                href="#"
                className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Try Browser
              </a>
              <a
                href="#"
                className="px-8 py-3.5 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Read Docs
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 grid md:grid-cols-3 gap-4">
              {TRUST_BLOCKS.map((block, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 text-left">
                  <h3 className="font-display text-lg text-foreground mb-3">{block.title}</h3>
                  <ul className="space-y-1.5">
                    {block.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
