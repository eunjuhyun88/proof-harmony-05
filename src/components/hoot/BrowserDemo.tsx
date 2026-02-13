import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "@/hooks/useInView";

const STEPS = [
  { id: 0, type: "user", text: "Summarize my emails, find action items, and add them to my Notion task board" },
  { id: 1, type: "system", text: "Routing to 3 skills...", agent: "OpenClaw" },
  { id: 2, type: "skill", text: "Scanning 47 emails from last 24h...", agent: "Gmail", icon: "✉" },
  { id: 3, type: "skill", text: "Found 12 action items across 8 threads", agent: "Gmail", icon: "✉" },
  { id: 4, type: "skill", text: "Summarizing with Claude...", agent: "Claude", icon: "◆" },
  { id: 5, type: "skill", text: "Creating 12 tasks in 'Action Items' board", agent: "Notion", icon: "□" },
  { id: 6, type: "result", text: "Done. 12 tasks added. 3 flagged as urgent." },
  { id: 7, type: "ppap", text: "PPAP captured · L1 Prompt + L3 Orchestration (Gmail → Claude → Notion) + L4 Feedback" },
];

const DELAYS = [0, 1200, 2200, 3500, 4200, 5400, 6600, 7400];

const SKILLS = [
  { name: "Gmail", icon: "✉" },
  { name: "Claude", icon: "◆" },
  { name: "Notion", icon: "□" },
  { name: "Slack", icon: "◇" },
  { name: "GitHub", icon: "⊙" },
  { name: "Calendar", icon: "◫" },
  { name: "Perplexity", icon: "◉" },
];

const LAYERS = [
  { label: "L1", name: "Prompt", desc: "User command captured", canSynth: true },
  { label: "L2", name: "Response", desc: "AI outputs recorded", canSynth: true },
  { label: "L3", name: "Orchestration", desc: "Gmail → Claude → Notion sequence", canSynth: false },
  { label: "L4", name: "Feedback", desc: "User corrections tracked", canSynth: false },
];

const EMAILS = [
  { from: "Sarah Kim", subject: "Q1 Budget Review — needs approval by Friday", time: "10:23 AM", urgent: true },
  { from: "Dev Team", subject: "Deploy v2.3 release candidate to staging", time: "9:47 AM", urgent: false },
  { from: "Alex Chen", subject: "Partnership proposal — DataCorp AI", time: "9:15 AM", urgent: true },
  { from: "HR", subject: "Updated remote work policy", time: "8:30 AM", urgent: false },
  { from: "Mike Lee", subject: "Design review for new dashboard", time: "Yesterday", urgent: false },
  { from: "Jenkins CI", subject: "[FAILED] Build #4521 — main branch", time: "Yesterday", urgent: true },
  { from: "Board", subject: "Quarterly board meeting agenda", time: "Yesterday", urgent: false },
];

const PIPELINE_STEPS = [
  { label: "TLS Capture", stage: 1 },
  { label: "zkTLS Proof", stage: 2 },
  { label: "FROST 5-of-5", stage: 2, sub: "5 Notaries" },
  { label: "CQS Score", stage: 3, sub: "8.4 / 10" },
  { label: "PPAP Mint", stage: 4, sub: "ERC-721" },
  { label: "DATA HUB", stage: 5, sub: "Listed for B2B" },
];

export function BrowserDemo() {
  const [step, setStep] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [ppapStage, setPpapStage] = useState(0);
  const [hasPlayed, setHasPlayed] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const { ref: sectionRef, inView } = useInView({ threshold: 0.25 });

  const reset = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setStep(-1);
    setPpapStage(0);
  }, []);

  const play = useCallback(() => {
    reset();
    setPlaying(true);
    setHasPlayed(true);
    STEPS.forEach((s, i) => {
      timers.current.push(
        setTimeout(() => {
          setStep(s.id);
          if (s.type === "ppap") {
            [400, 1200, 2000, 2800].forEach((d, j) =>
              timers.current.push(setTimeout(() => setPpapStage(j + 1), d))
            );
            timers.current.push(setTimeout(() => setPlaying(false), 3400));
          }
        }, DELAYS[i])
      );
    });
  }, [reset]);

  useEffect(() => {
    if (inView && !hasPlayed) {
      const t = setTimeout(play, 400);
      return () => clearTimeout(t);
    }
  }, [inView, hasPlayed, play]);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [step]);

  useEffect(() => {
    return () => { timers.current.forEach(clearTimeout); };
  }, []);

  const visible = STEPS.filter((s) => s.id <= step);
  const active = new Set(visible.filter((s) => s.type === "skill").map((s) => s.agent));
  const showPpap = step >= 7;
  const done = ppapStage >= 4;

  return (
    <div ref={sectionRef}>
      {/* Browser Window */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
        {/* Title bar */}
        <div className="bg-secondary px-4 py-2.5 flex items-center gap-3 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full bg-hoot-orange" />
            <div className="w-3 h-3 rounded-full bg-hoot-green" />
          </div>
          <div className="text-sm font-bold text-foreground tracking-tight">HOOTS BROWSER</div>
          <div className="flex-1 ml-2 bg-background rounded-lg px-3.5 py-1.5 border border-border text-xs text-muted-foreground truncate">
            mail.google.com — 47 unread
          </div>
          <div className="text-xs text-muted-foreground font-mono hidden sm:block">
            <span className="text-hoot-green">●</span> 0xd368…ff59
          </div>
        </div>

        {/* Browser body */}
        <div className="flex min-h-[420px]">
          {/* Sidebar */}
          <div className="w-14 bg-secondary border-r border-border py-4 flex-col items-center gap-5 hidden md:flex">
            {[
              { icon: "🌐", label: "Browse", on: true },
              { icon: "🏠", label: "Hub", on: false },
              { icon: "💎", label: "PPAP", on: false },
              { icon: "💳", label: "Wallet", on: false },
            ].map((item, i) => (
              <div key={i} className={`text-center ${item.on ? "opacity-100" : "opacity-30"}`}>
                <div className="text-lg">{item.icon}</div>
                <div className={`text-[8px] mt-0.5 font-semibold ${item.on ? "text-primary" : "text-muted-foreground"}`}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Main content — email list */}
          <div className="flex-1 p-4 border-r border-border flex flex-col min-w-0">
            {/* Tabs */}
            <div className="flex gap-1 mb-3">
              {["Gmail — Inbox", "claude.ai", "notion.so"].map((tab, i) => (
                <div
                  key={i}
                  className={`rounded-lg px-3 py-1.5 text-[11px] flex items-center gap-1.5 ${
                    i === 0
                      ? "bg-card border border-border font-semibold text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {tab}
                  {i > 0 && step >= 4 + i && (
                    <span className="w-1.5 h-1.5 rounded-full bg-hoot-green inline-block" />
                  )}
                </div>
              ))}
            </div>

            {/* Emails */}
            <div className="flex-1 space-y-0.5">
              {EMAILS.map((email, i) => {
                const scanned = step >= 2;
                const tagged = step >= 3 && email.urgent;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md transition-all duration-400 ${
                      tagged ? "bg-primary/5 border-l-[3px] border-l-primary" : "border-l-[3px] border-l-transparent"
                    } ${scanned ? "opacity-100" : "opacity-40"}`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        email.urgent ? "bg-destructive" : "bg-muted-foreground/40"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-foreground truncate">{email.from}</div>
                      <div className="text-[11px] text-muted-foreground truncate">{email.subject}</div>
                    </div>
                    <div className="text-[10px] text-muted-foreground/60 shrink-0">{email.time}</div>
                    {tagged && <div className="text-[9px] text-primary font-bold shrink-0">→ task</div>}
                  </div>
                );
              })}
            </div>

            {/* PPAP capture bar */}
            {showPpap && (
              <div className="mt-2.5 px-3 py-2 bg-primary/5 border border-primary/15 rounded-lg flex items-center gap-2 animate-fade-up">
                <div className={`w-2 h-2 rounded-full bg-primary ${ppapStage < 4 ? "animate-blink" : ""}`} />
                <span className="text-[11px] text-primary font-semibold">
                  {ppapStage === 0 && "Capturing session..."}
                  {ppapStage === 1 && "zkTLS session proof generating..."}
                  {ppapStage === 2 && "FROST 5-of-5 consensus — 5/5 Notaries signed"}
                  {ppapStage === 3 && "CQS Score: 8.4 / 10 — Minting PPAP..."}
                  {ppapStage === 4 && "PPAP #18,429 minted ✓ — L1 + L3 + L4 verified"}
                </span>
              </div>
            )}
          </div>

          {/* Right — Agent panel */}
          <div className="w-[220px] lg:w-[260px] bg-secondary p-3 flex flex-col gap-2 hidden md:flex">
            <div className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
              Agent Panel
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-0.5">
              {SKILLS.map((sk, i) => {
                const on = active.has(sk.name);
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-md transition-all duration-300 ${
                      on ? "bg-primary/5 border border-primary/15" : "border border-transparent"
                    }`}
                  >
                    <span className={`text-sm leading-none ${on ? "text-foreground" : "text-muted-foreground/40"}`}>
                      {sk.icon}
                    </span>
                    <span className={`text-[11px] flex-1 ${on ? "text-foreground font-semibold" : "text-muted-foreground/40"}`}>
                      {sk.name}
                    </span>
                    {on && (
                      <span className="text-[8px] font-bold text-hoot-green bg-hoot-green/10 px-1.5 py-0.5 rounded">
                        ACTIVE
                      </span>
                    )}
                  </div>
                );
              })}
              <div className="text-[10px] text-muted-foreground/60 text-center py-1.5">700+ MCP Skills</div>
            </div>

            {/* Log */}
            <div className="flex-1 flex flex-col">
              <div className="text-[9px] font-bold tracking-wider text-muted-foreground mb-1 uppercase">
                Orchestration Log
              </div>
              <div ref={chatRef} className="flex-1 overflow-auto flex flex-col gap-1 max-h-[200px] scrollbar-none">
                {visible.map((s) => {
                  const bgClass =
                    s.type === "user" ? "bg-primary/5 border-primary/15" :
                    s.type === "ppap" ? "bg-primary/5 border-primary/15" :
                    s.type === "result" ? "bg-hoot-green/5 border-hoot-green/15" :
                    "bg-card border-border";
                  return (
                    <div key={s.id} className={`px-2 py-1.5 rounded-md border ${bgClass} animate-fade-up`}>
                      {s.agent && (
                        <div className="text-[8px] font-bold text-muted-foreground mb-0.5">
                          {s.icon && `${s.icon} `}{s.agent}
                        </div>
                      )}
                      {s.type === "user" && <div className="text-[8px] font-bold text-primary mb-0.5">YOU</div>}
                      {s.type === "ppap" && <div className="text-[8px] font-bold text-primary mb-0.5">💎 PPAP AUTO-CAPTURE</div>}
                      {s.type === "result" && <div className="text-[8px] font-bold text-hoot-green mb-0.5">✓ COMPLETE</div>}
                      <div className="text-[10px] text-muted-foreground leading-snug">{s.text}</div>
                    </div>
                  );
                })}
                {step >= 0 && step < 6 && (
                  <div className="text-[10px] text-muted-foreground/40 p-1">
                    <span className="animate-blink">●</span> Processing...
                  </div>
                )}
              </div>
            </div>

            {/* Input */}
            <div className="bg-card rounded-lg px-2.5 py-2 border border-border flex items-center gap-1.5">
              <span className="text-[11px] text-muted-foreground/60 flex-1">Ask AI anything...</span>
              <button
                onClick={!playing ? play : undefined}
                disabled={playing}
                className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${
                  playing ? "bg-muted-foreground/30 cursor-default" : "bg-primary cursor-pointer hover:bg-primary/90"
                }`}
              >
                <span className="text-xs text-primary-foreground font-bold">{playing ? "…" : "▶"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PPAP Layers — after demo */}
      {done && (
        <div className="mt-12 animate-fade-up">
          <div className="flex items-center gap-4 mb-5">
            <h3 className="text-3xl font-display text-foreground">
              What was <span className="italic text-primary">captured</span>
            </h3>
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">PPAP #18,429 · CQS 8.4</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {LAYERS.map((layer, i) => (
              <div
                key={i}
                className={`bg-card border rounded-xl p-4 ${
                  layer.canSynth ? "border-border" : "border-primary/20"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <div
                    className={`text-[11px] font-extrabold rounded px-2 py-0.5 ${
                      layer.canSynth
                        ? "bg-border text-muted-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {layer.label}
                  </div>
                  <div className="text-base text-foreground font-semibold">{layer.name}</div>
                </div>
                <div className="text-sm text-muted-foreground mb-2.5 leading-relaxed">{layer.desc}</div>
                <div
                  className={`text-[10px] font-bold inline-block px-2 py-0.5 rounded ${
                    layer.canSynth
                      ? "text-hoot-orange bg-hoot-orange/10"
                      : "text-primary bg-primary/5"
                  }`}
                >
                  {layer.canSynth ? "CAN BE SYNTHESIZED" : "CANNOT BE SYNTHESIZED"}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-primary/5 border border-primary/10 rounded-xl text-sm text-muted-foreground leading-relaxed">
            <span className="text-primary font-bold">L3 Orchestration</span> (Gmail → Claude → Notion tool-call
            sequence) and <span className="text-primary font-bold">L4 Feedback</span> (user corrections) are
            structurally impossible to synthesize — they require a real human working with real AI tools in a real
            workflow. This is the training data that reasoning models need.
          </div>
        </div>
      )}

      {/* Verification pipeline */}
      {ppapStage >= 2 && (
        <div className="mt-10 animate-fade-up">
          <h3 className="text-3xl font-display text-foreground mb-4">
            Verification <span className="italic text-primary">pipeline</span>
          </h3>
          <div className="flex gap-1.5 items-center flex-wrap">
            {PIPELINE_STEPS.map((p, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div
                  className={`px-3.5 py-2 rounded-lg text-center border ${
                    ppapStage >= p.stage
                      ? "bg-primary/5 border-primary/15"
                      : "bg-card border-border"
                  }`}
                >
                  <div className={`text-xs font-bold ${ppapStage >= p.stage ? "text-primary" : "text-muted-foreground/40"}`}>
                    {p.label}
                  </div>
                  {p.sub && (
                    <div className={`text-[10px] ${ppapStage >= p.stage ? "text-muted-foreground" : "text-muted-foreground/40"}`}>
                      {p.sub}
                    </div>
                  )}
                </div>
                {i < PIPELINE_STEPS.length - 1 && (
                  <span className="text-muted-foreground/30 text-base font-light">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-2.5 text-xs text-muted-foreground">
            Forgery probability: 2⁻¹²⁸. Verified by 5 independent Notary nodes selected via Chainlink VRF.
          </p>
        </div>
      )}

      {/* Replay */}
      {!playing && step >= 7 && (
        <div className="mt-10 text-center">
          <button
            onClick={play}
            className="px-5 py-2 text-sm font-semibold text-primary rounded-lg border border-border hover:bg-primary/5 transition-colors"
          >
            ▶ Replay Demo
          </button>
        </div>
      )}
    </div>
  );
}
