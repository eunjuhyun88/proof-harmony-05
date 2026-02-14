import { ScrollReveal, TextReveal, LineReveal, StaggerContainer, StaggerItem } from "@/components/hoot/ScrollReveal";
import { BrowserDemo } from "@/components/hoot/BrowserDemo";
import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PARTNERS = ["NVIDIA INCEPTION", "0G LABS", "ARBITRUM", "GOOGLE STARTUPS", "APPWORKS"];

const THREE_PROOFS = [
  {
    num: "01",
    title: "PROVE YOUR DATA IS REAL.",
    desc: "Every AI interaction you make can be cryptographically verified — that it happened, that a real person created it, and how good it is. This verified data is registered as yours on-chain. Nobody can claim it. Nobody can fake it.",
  },
  {
    num: "02",
    title: "PROVE YOUR IDENTITY IS TRUSTWORTHY.",
    desc: "Your AI usage history builds a trust identity — not a social profile, but a cryptographic reputation. How consistently you create quality data, how your work is rated, how you participate in the network. This trust is yours, portable, and soulbound.",
  },
  {
    num: "03",
    title: "PROVE YOUR AGENT IS ACCOUNTABLE.",
    desc: "When you build an AI agent, it inherits your trust. Your reputation becomes its credential. If it performs well, your trust grows. If it fails, the accountability traces back to you. This is how an agent economy stays honest.",
  },
];

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

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── S1: HERO ── */}
      <section className="pt-24 pb-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
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

          <ScrollReveal delay={0.8} distance={30}>
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed mb-8">
              Prove your data is real. Prove your agent is trustworthy.
              Own what you create.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1} distance={20}>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                className="px-6 py-3 bg-foreground text-background font-bold text-xs tracking-wider hover:bg-foreground/90 transition-colors"
              >
                TRY_BROWSER
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-foreground text-foreground font-bold text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors"
              >
                READ_DOCS
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1.2} distance={20}>
            <div className="mt-14 pt-6 border-t border-foreground/10">
              <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-3">
                BUILDING_WITH
              </div>
              <StaggerContainer className="flex flex-wrap gap-6 items-center" stagger={0.08} delay={1.4}>
                {PARTNERS.map((p) => (
                  <StaggerItem key={p}>
                    <span className="text-xs font-mono text-muted-foreground/50 tracking-wider">
                      {p}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── S2: THE PROBLEM ── */}
      <section className="py-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[10px] text-destructive tracking-wider mb-4">
              [ CRITICAL_GAP ]
            </div>
          </ScrollReveal>

          <TextReveal
            text="YOUR AI WORK HAS NO PROOF."
            as="h2"
            className="text-4xl md:text-6xl font-bold text-foreground mb-8 max-w-3xl uppercase tracking-tight"
            staggerDelay={0.05}
          />

          <LineReveal
            lines={[
              "Every day you prompt, refine, correct, and orchestrate AI tools. That work produces some of the most valuable training data in existence — the kind that teaches AI how humans actually think and decide.",
              "None of it is yours. There's no record that you created it. No proof it came from a real person. No way to verify its quality. It vanishes into platforms that profit from it without your knowledge or consent.",
              "Meanwhile, AI companies face a crisis: training data is running out, synthetic alternatives degrade models, and the agent economy is scaling with no trust infrastructure.",
            ]}
            className="max-w-3xl"
            lineClassName="text-base text-muted-foreground leading-relaxed mb-5"
            delay={0.2}
            staggerDelay={0.15}
          />

          <ScrollReveal delay={0.6} distance={30}>
            <div className="border border-foreground/10 p-5 mt-6 max-w-3xl">
              <p className="text-lg font-bold text-foreground uppercase tracking-tight">
                That's the gap Hoot fills.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── S3: THREE PROOFS ── */}
      <section className="py-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">
              [ THREE_PROOFS ]
            </div>
          </ScrollReveal>

          <TextReveal
            text="THREE PROOFS. ONE PROTOCOL."
            as="h2"
            className="text-4xl md:text-6xl font-bold text-foreground mb-12 uppercase tracking-tight"
            staggerDelay={0.06}
          />

          <StaggerContainer className="grid md:grid-cols-3 gap-0 border border-foreground/10" stagger={0.15}>
            {THREE_PROOFS.map((proof, i) => (
              <StaggerItem key={i}>
                <div className={`p-6 md:p-8 ${i < 2 ? "md:border-r border-b md:border-b-0 border-foreground/10" : ""}`}>
                  <div className="font-mono text-[10px] text-muted-foreground mb-4">{proof.num}</div>
                  <h3 className="text-lg font-bold text-foreground mb-3 uppercase tracking-tight">{proof.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{proof.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── S4: CREATOR SCENARIO (SARAH) ── */}
      <section className="py-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">
              [ SCENARIO_CREATOR ]
            </div>
          </ScrollReveal>

          <TextReveal
            text="SARAH USES AI EVERY DAY."
            as="h2"
            className="text-4xl md:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight"
          />

          <ScrollReveal delay={0.3} distance={30}>
            <p className="text-lg text-muted-foreground mb-10">Now her work has proof.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-0 border border-foreground/10">
            {/* Chat Mockup */}
            <ScrollReveal direction="left" distance={40}>
              <div className="border-b md:border-b-0 md:border-r border-foreground/10">
                <div className="bg-secondary px-4 py-2.5 flex items-center gap-3 border-b border-foreground/10">
                  <span className="font-mono text-xs font-bold text-foreground">HOOT_BROWSER</span>
                  <span className="font-mono text-[10px] text-muted-foreground ml-auto">claude.ai</span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="border border-foreground/10 p-3">
                    <div className="font-mono text-[9px] text-muted-foreground mb-1">SARAH</div>
                    <div className="text-sm text-foreground">Claude, write 3 email subject lines for our spring campaign</div>
                  </div>
                  <div className="bg-secondary p-3">
                    <div className="font-mono text-[9px] text-muted-foreground mb-1">CLAUDE</div>
                    <div className="text-sm text-foreground font-mono">Here are 3 options: ...</div>
                  </div>
                  <div className="border border-foreground/10 p-3">
                    <div className="font-mono text-[9px] text-muted-foreground mb-1">SARAH</div>
                    <div className="text-sm text-foreground">#2 is good but make it shorter</div>
                  </div>

                  {/* Verification Card */}
                  <motion.div
                    className="border-2 border-foreground p-4 mt-4"
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true }}
                  >
                    <div className="font-mono text-[10px] font-bold text-hoot-green tracking-wider mb-3">● SESSION_VERIFIED</div>
                    <div className="space-y-2 text-sm text-foreground">
                      <div className="flex items-center gap-2">
                        <span className="text-hoot-green font-bold">✓</span> Cryptographically proven
                        <span className="ml-auto font-mono text-[10px] border border-foreground/10 px-1.5 py-0.5">zkTLS</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-hoot-green font-bold">✓</span> Quality-scored
                        <span className="ml-auto font-mono text-[10px] border border-foreground/10 px-1.5 py-0.5">GOLD</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-hoot-green font-bold">✓</span> Registered on-chain as Sarah's
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-hoot-green font-bold">✓</span> Encrypted. Only Sarah holds the key.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-foreground/10">
                      <div className="font-mono text-[10px] text-muted-foreground">
                        MONETIZATION: <span className="font-bold text-foreground">OFF</span>
                      </div>
                      <div className="font-mono text-[9px] text-muted-foreground mt-1">Turn ON to list on DATA_HUB</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal direction="right" distance={40} delay={0.2}>
              <div className="p-6 md:p-8 flex flex-col justify-center space-y-5">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Sarah's AI conversation is verified — that a real person, in a real AI session,
                  did real work. This proof belongs to Sarah. It's encrypted, and only Sarah holds the key.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Monetization is OFF by default. If Sarah chooses to turn it on, AI companies
                  can license this verified data. Sarah receives a fair share. If she doesn't,
                  nobody gets access.
                </p>
                <div className="border border-foreground/10 p-4">
                  <p className="text-sm font-bold text-foreground uppercase tracking-tight">
                    Your work. Your proof. Your choice to share.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── S5: AI COMPANY SCENARIO (JAE) ── */}
      <section className="py-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">
              [ SCENARIO_AI_COMPANY ]
            </div>
          </ScrollReveal>

          <TextReveal
            text="JAE NEEDS DATA HE CAN TRUST."
            as="h2"
            className="text-4xl md:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight"
          />

          <ScrollReveal delay={0.3} distance={30}>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Jae is building a customer service AI. He needs good training data. The problem is provenance.
              Web-scraped data can't distinguish AI-generated from human-made.
              Models trained on synthetic data collapse.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-0 border border-foreground/10">
            <ScrollReveal direction="left" distance={40}>
              <div className="border-b md:border-b-0 md:border-r border-foreground/10">
                <div className="bg-secondary px-4 py-2.5 border-b border-foreground/10">
                  <span className="font-mono text-xs font-bold text-foreground">DATA_HUB</span>
                </div>
                <div className="p-5 space-y-4">
                  <div className="font-mono text-[10px] font-bold text-muted-foreground tracking-wider mb-2">EVERY DATASET HERE IS:</div>
                  <div className="space-y-2 text-sm text-foreground">
                    <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Created by a verified human</div>
                    <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> From a real AI session (zkTLS proof)</div>
                    <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Quality-scored by independent nodes</div>
                    <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> With full provenance trail</div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-foreground/10">
                    <div className="font-mono text-[10px] font-bold text-muted-foreground tracking-wider mb-2">FILTER_BY:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {["DOMAIN", "QUALITY", "DEPTH", "TRUST_TIER", "LICENSE"].map((f) => (
                        <span key={f} className="font-mono text-[10px] border border-foreground/10 px-2 py-0.5 text-foreground">{f}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-foreground/10 text-sm text-muted-foreground font-mono text-[11px]">
                    <p>When Jae licenses data: creator is compensated.</p>
                    <p>EU AI Act Art. 53 compliance: built in.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" distance={40} delay={0.2}>
              <div className="p-6 md:p-8 flex flex-col justify-center space-y-5">
                <p className="text-base text-muted-foreground leading-relaxed">
                  What Jae gets isn't just data. It's data with proven provenance —
                  created by a real person working with real AI tools in a real workflow,
                  mathematically verified at every step.
                </p>
                <div className="border border-foreground/10 p-4">
                  <p className="text-sm font-bold text-foreground uppercase tracking-tight">
                    Train on data you can trust — because a real person made it.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── S6: AGENT BUILDER SCENARIO (MIN) ── */}
      <section className="py-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">
              [ SCENARIO_AGENT_BUILDER ]
            </div>
          </ScrollReveal>

          <TextReveal
            text="MIN BUILDS AGENTS."
            as="h2"
            className="text-4xl md:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight"
          />

          <ScrollReveal delay={0.3} distance={30}>
            <p className="text-lg text-muted-foreground mb-8">Now they carry his reputation.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} distance={30}>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">
              30,000+ agents registered on ERC-8004. Most have no way to prove who built them
              or what verification they went through.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-0 border border-foreground/10">
            <ScrollReveal direction="left" distance={40}>
              <div className="border-b md:border-b-0 md:border-r border-foreground/10">
                <div className="bg-secondary px-4 py-2.5 border-b border-foreground/10">
                  <span className="font-mono text-xs font-bold text-foreground">AGENT_CREDENTIAL</span>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-1">MIN'S HUMANPASSPORT</div>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="font-mono text-[10px] font-bold border border-hoot-green text-hoot-green px-1.5 py-0.5">GOLD</span>
                      <span className="text-sm text-foreground">Trust Score: <span className="font-bold">82</span></span>
                    </div>
                    <div className="font-mono text-[10px] text-muted-foreground mt-1">14 months of verified AI use</div>
                  </div>
                  <div className="border-t border-foreground/10 pt-3">
                    <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-2">AGENT: "SupportBot-v3"</div>
                    <div className="space-y-1.5 text-sm text-foreground">
                      <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Code verified</div>
                      <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Security scanned</div>
                      <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Performance tested</div>
                      <div className="flex items-center gap-2"><span className="text-hoot-green font-bold">✓</span> Trust inherited from Min: +8</div>
                    </div>
                  </div>
                  <div className="border-t border-foreground/10 pt-3 font-mono text-[11px]">
                    <p className="font-bold text-foreground">Min's trust → Agent's credential.</p>
                    <p className="text-muted-foreground">Agent misbehaves → Min's trust at stake.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" distance={40} delay={0.2}>
              <div className="p-6 md:p-8 flex flex-col justify-center space-y-5">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Min's reputation becomes his agent's trust. This isn't just certification —
                  it's a chain of accountability. If the agent performs well, Min's trust grows.
                  If it causes problems, Min is accountable.
                </p>
                <div className="border border-foreground/10 p-4">
                  <p className="text-sm font-bold text-foreground uppercase tracking-tight">
                    Your reputation follows your agent. Build trust once, deploy everywhere.
                  </p>
                </div>
                <Link
                  to="/agents"
                  className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                >
                  LEARN_MORE → /agents
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── S7: TRUST MODEL ── */}
      <section className="py-16 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">
              [ TRUST_MODEL ]
            </div>
          </ScrollReveal>

          <TextReveal
            text="TRUST FLOWS ONE DIRECTION."
            as="h2"
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 uppercase tracking-tight max-w-4xl"
          />

          <ScrollReveal delay={0.3} distance={30}>
            <div className="max-w-2xl space-y-4 mb-10">
              <p className="text-base text-muted-foreground leading-relaxed">
                Humans create trust. That trust determines the value of data. Agents operate on top of that data.
                Agents cannot elevate a human's trust. Only humans can build their own trust.
              </p>
            </div>
          </ScrollReveal>

          {/* Diagram */}
          <ScrollReveal delay={0.4} scale>
            <div className="max-w-2xl mx-auto">
              <motion.div
                className="border-2 border-foreground p-6 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
              >
                <div className="font-mono text-[10px] text-muted-foreground tracking-wider">ENTITY</div>
                <div className="text-2xl font-bold text-foreground uppercase">HUMAN</div>
                <div className="font-mono text-[10px] text-muted-foreground mt-1">Creates trust</div>
              </motion.div>

              <motion.div
                className="text-center py-2 text-foreground/30 text-lg"
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >↓ TRUST_INHERITANCE (one-way)</motion.div>

              <div className="grid grid-cols-2 gap-0">
                <motion.div
                  className="border border-foreground/10 p-5 text-center"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true }}
                >
                  <div className="text-lg font-bold text-foreground uppercase">DATA</div>
                  <div className="font-mono text-[10px] text-muted-foreground mt-1">CQS × HTS multiplier</div>
                </motion.div>
                <motion.div
                  className="border border-foreground/10 border-l-0 p-5 text-center"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true }}
                >
                  <div className="text-lg font-bold text-foreground uppercase">AGENT</div>
                  <div className="font-mono text-[10px] text-muted-foreground mt-1">trustBonus = floor(HTS/10)</div>
                </motion.div>
              </div>

              <motion.div
                className="font-mono text-[10px] text-muted-foreground text-center mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                RULE: ONE-WAY ONLY. NO REVERSE INHERITANCE.
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── S8: UNDER THE HOOD ── */}
      <section className="py-12 px-6 md:px-10 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">
              [ UNDER_THE_HOOD ]
            </div>
          </ScrollReveal>
          <StaggerContainer className="flex flex-wrap gap-2 mb-4" stagger={0.08}>
            {TECH_STACK.map((t) => (
              <StaggerItem key={t}>
                <span className="font-mono text-xs font-bold text-foreground border border-foreground/10 px-3 py-1.5 inline-block">
                  {t}
                </span>
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
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">
              [ LIVE_DEMO ]
            </div>
          </ScrollReveal>

          <TextReveal
            text="ONE COMMAND, VERIFIED PROOF."
            as="h2"
            className="text-4xl md:text-6xl font-bold text-foreground mb-2 uppercase tracking-tight"
          />

          <ScrollReveal delay={0.3} distance={30}>
            <p className="text-base text-muted-foreground max-w-lg mb-10">
              Watch a real orchestration — and see how every interaction becomes
              cryptographically yours.
            </p>
          </ScrollReveal>

          <ScrollReveal distance={50} duration={1}>
            <BrowserDemo />
          </ScrollReveal>
        </div>
      </section>

      {/* ── S9: CTA ── */}
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
              <a
                href="#"
                className="px-8 py-3.5 bg-foreground text-background font-bold text-xs tracking-wider hover:bg-foreground/90 transition-colors"
              >
                TRY_BROWSER
              </a>
              <a
                href="#"
                className="px-8 py-3.5 border border-foreground text-foreground font-bold text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors"
              >
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
