import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "@/hooks/useInView";

/* ── Sarah's scenario steps ── */
const STEPS = [
  { id: 0, type: "user", text: "Claude, write 3 email subject lines for our spring campaign" },
  { id: 1, type: "ai", text: "Here are 3 options:\n1. \"Spring Into Savings — 30% Off Everything\"\n2. \"Your Spring Refresh Starts Now\"\n3. \"Don't Miss Our Biggest Spring Sale\"" },
  { id: 2, type: "user", text: "#2 is good but make it shorter" },
  { id: 3, type: "ai", text: "Shortened: \"Spring Refresh Starts Now\"" },
  { id: 4, type: "user", text: "Perfect. Schedule it for Monday 9am" },
  { id: 5, type: "ai", text: "Routing to Gmail skill...\n✓ Campaign email scheduled for Monday 9:00 AM\n✓ Subject: \"Spring Refresh Starts Now\"\n✓ Recipients: spring-list (2,847 contacts)" },
  { id: 6, type: "verify", text: "Session verified" },
];

const DELAYS = [0, 1800, 3400, 4800, 6200, 7600, 9200];

const VERIFY_ITEMS = [
  { label: "Cryptographically proven", detail: "zkTLS" },
  { label: "Quality-scored", detail: "GOLD" },
  { label: "Registered on-chain as Sarah's", detail: "" },
  { label: "Encrypted. Only Sarah holds the key.", detail: "" },
];

const VERIFY_PIPELINE = [
  { label: "TLS Capture", stage: 1 },
  { label: "zkTLS Proof", stage: 1 },
  { label: "FROST 5-of-5", stage: 2, sub: "5 Notaries" },
  { label: "CQS Score", stage: 3, sub: "GOLD" },
  { label: "PPAP Mint", stage: 4, sub: "ERC-721" },
];

const LAYERS = [
  { label: "L1", name: "Prompt", desc: "Sarah's commands captured", canSynth: true },
  { label: "L2", name: "Response", desc: "Claude's outputs recorded", canSynth: true },
  { label: "L3", name: "Orchestration", desc: "Claude → Gmail skill sequence", canSynth: false },
  { label: "L4", name: "Feedback", desc: "Sarah's corrections (#2 → shorter)", canSynth: false },
];

export function BrowserDemo() {
  const [step, setStep] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [verifyStage, setVerifyStage] = useState(0); // 0-4
  const [monetization, setMonetization] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const { ref: sectionRef, inView } = useInView({ threshold: 0.2 });

  const reset = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setStep(-1);
    setVerifyStage(0);
    setMonetization(false);
  }, []);

  const play = useCallback(() => {
    reset();
    setPlaying(true);
    setHasPlayed(true);
    STEPS.forEach((s, i) => {
      timers.current.push(
        setTimeout(() => {
          setStep(s.id);
          if (s.type === "verify") {
            [500, 1200, 2000, 2800].forEach((d, j) =>
              timers.current.push(setTimeout(() => setVerifyStage(j + 1), d))
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
  const showVerify = step >= 6;
  const done = verifyStage >= 4;

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
          <div className="text-sm font-bold text-foreground tracking-tight">HOOT BROWSER</div>
          <div className="flex-1 ml-2 bg-background rounded-lg px-3.5 py-1.5 border border-border text-xs text-muted-foreground truncate">
            claude.ai — Sarah's workspace
          </div>
          <div className="text-xs text-muted-foreground font-mono hidden sm:block">
            <span className="text-hoot-green">●</span> Sarah.eth
          </div>
        </div>

        {/* Browser body */}
        <div className="flex min-h-[440px]">
          {/* Sidebar */}
          <div className="w-14 bg-secondary border-r border-border py-4 flex-col items-center gap-5 hidden md:flex">
            {[
              { icon: "🌐", label: "Browse", on: true },
              { icon: "🏠", label: "Hub", on: false },
              { icon: "💎", label: "PPAP", on: false },
              { icon: "🔑", label: "Keys", on: false },
            ].map((item, i) => (
              <div key={i} className={`text-center ${item.on ? "opacity-100" : "opacity-30"}`}>
                <div className="text-lg">{item.icon}</div>
                <div className={`text-[8px] mt-0.5 font-semibold ${item.on ? "text-primary" : "text-muted-foreground"}`}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Main chat area */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Chat messages */}
            <div ref={chatRef} className="flex-1 overflow-auto p-4 space-y-3">
              {visible.filter(s => s.type !== "verify").map((s) => (
                <div
                  key={s.id}
                  className="animate-fade-up"
                >
                  {s.type === "user" ? (
                    <div className="flex justify-end">
                      <div className="bg-primary/5 border border-primary/15 rounded-xl px-4 py-3 max-w-[85%]">
                        <div className="text-[10px] font-bold text-primary mb-1">SARAH</div>
                        <div className="text-sm text-foreground">{s.text}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-start">
                      <div className="bg-secondary rounded-xl px-4 py-3 max-w-[85%]">
                        <div className="text-[10px] font-bold text-muted-foreground mb-1">CLAUDE</div>
                        <div className="text-sm text-foreground whitespace-pre-line font-mono leading-relaxed">
                          {s.text}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {step >= 0 && step < 6 && step % 2 === 0 && (
                <div className="flex justify-start">
                  <div className="bg-secondary rounded-xl px-4 py-3">
                    <div className="text-[10px] font-bold text-muted-foreground mb-1">CLAUDE</div>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-blink" />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-blink" style={{ animationDelay: "0.2s" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-blink" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Verification Card */}
              {showVerify && (
                <div className="animate-fade-up">
                  <div className="bg-card border-2 border-primary/20 rounded-xl px-5 py-4 max-w-[90%] mx-auto">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-2 h-2 rounded-full bg-primary ${verifyStage < 4 ? "animate-blink" : ""}`} />
                      <span className="text-[10px] font-bold text-primary tracking-wider">
                        {verifyStage < 4 ? "VERIFYING SESSION..." : "SESSION VERIFIED"}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {VERIFY_ITEMS.map((item, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-2 transition-opacity duration-300 ${
                            verifyStage > i ? "opacity-100" : "opacity-20"
                          }`}
                        >
                          <span className="text-primary text-sm">✓</span>
                          <span className="text-sm text-foreground">{item.label}</span>
                          {item.detail && (
                            <span className="text-[10px] font-bold text-primary bg-primary/5 px-1.5 py-0.5 rounded ml-auto">
                              {item.detail}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Monetization toggle */}
                    {done && (
                      <div className="mt-4 pt-3 border-t border-border animate-fade-up">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs text-muted-foreground">
                              Monetization: <span className="font-bold text-foreground">{monetization ? "ON" : "OFF"}</span>
                            </div>
                            <div className="text-[10px] text-muted-foreground mt-0.5">
                              {monetization
                                ? "Listed on DATA HUB. AI companies can license this data."
                                : "Your data stays private. Turn ON to list on DATA HUB."}
                            </div>
                          </div>
                          <button
                            onClick={() => setMonetization(!monetization)}
                            className={`w-10 h-5 rounded-full relative transition-colors duration-200 shrink-0 ${
                              monetization ? "bg-primary" : "bg-border"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded-full bg-card shadow absolute top-0.5 transition-transform duration-200 ${
                                monetization ? "translate-x-5" : "translate-x-0.5"
                              }`}
                            />
                          </button>
                        </div>
                        <p className="text-[10px] text-primary/70 mt-2 italic">
                          Your work. Your proof. Your choice to share.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="px-4 pb-3">
              <div className="bg-secondary rounded-xl px-4 py-2.5 border border-border flex items-center gap-2">
                <span className="text-sm text-muted-foreground/60 flex-1">Ask Claude anything...</span>
                <button
                  onClick={!playing ? play : undefined}
                  disabled={playing}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    playing ? "bg-muted-foreground/30 cursor-default" : "bg-primary cursor-pointer hover:bg-primary/90"
                  }`}
                >
                  <span className="text-xs text-primary-foreground font-bold">{playing ? "…" : "▶"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right panel — Session Info */}
          <div className="w-[220px] lg:w-[240px] bg-secondary p-3 flex flex-col gap-3 hidden md:flex border-l border-border">
            <div className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
              Session Info
            </div>

            {/* Creator card */}
            <div className="bg-card rounded-lg p-3 border border-border">
              <div className="text-[10px] font-bold text-muted-foreground tracking-wider mb-1">CREATOR</div>
              <div className="text-sm font-semibold text-foreground">Sarah Kim</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">HumanPassport verified</div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="text-[10px] font-bold text-primary bg-primary/5 px-1.5 py-0.5 rounded">GOLD</span>
                <span className="text-[10px] text-muted-foreground">Trust Score: 78</span>
              </div>
            </div>

            {/* Skills used */}
            <div className="bg-card rounded-lg p-3 border border-border">
              <div className="text-[10px] font-bold text-muted-foreground tracking-wider mb-2">SKILLS USED</div>
              <div className="space-y-1.5">
                {[
                  { name: "Claude", icon: "◆", active: step >= 1 },
                  { name: "Gmail", icon: "✉", active: step >= 5 },
                ].map((sk, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-md transition-all duration-300 ${
                      sk.active ? "bg-primary/5 border border-primary/15" : "border border-transparent opacity-40"
                    }`}
                  >
                    <span className="text-sm">{sk.icon}</span>
                    <span className={`text-[11px] flex-1 ${sk.active ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                      {sk.name}
                    </span>
                    {sk.active && (
                      <span className="text-[8px] font-bold text-hoot-green bg-hoot-green/10 px-1.5 py-0.5 rounded">
                        ACTIVE
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-muted-foreground/60 text-center pt-2">700+ MCP Skills available</div>
            </div>

            {/* Data captured */}
            <div className="bg-card rounded-lg p-3 border border-border flex-1">
              <div className="text-[10px] font-bold text-muted-foreground tracking-wider mb-2">DATA CAPTURED</div>
              <div className="space-y-1">
                {LAYERS.map((l, i) => {
                  const captured = step >= 6;
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-2 transition-opacity duration-300 ${
                        captured ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      <span
                        className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded ${
                          !l.canSynth
                            ? "bg-primary text-primary-foreground"
                            : "bg-border text-muted-foreground"
                        }`}
                      >
                        {l.label}
                      </span>
                      <span className="text-[10px] text-foreground">{l.name}</span>
                    </div>
                  );
                })}
              </div>
              {step >= 6 && (
                <p className="text-[9px] text-muted-foreground mt-2 leading-snug">
                  L3 + L4 cannot be synthesized — real human work only.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Verification pipeline — below browser */}
      {verifyStage >= 1 && (
        <div className="mt-8 animate-fade-up">
          <h3 className="text-2xl font-display text-foreground mb-4">
            Verification <span className="italic text-primary">pipeline</span>
          </h3>
          <div className="flex gap-1.5 items-center flex-wrap">
            {VERIFY_PIPELINE.map((p, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div
                  className={`px-3.5 py-2 rounded-lg text-center border transition-all duration-300 ${
                    verifyStage >= p.stage
                      ? "bg-primary/5 border-primary/15"
                      : "bg-card border-border"
                  }`}
                >
                  <div className={`text-xs font-bold ${verifyStage >= p.stage ? "text-primary" : "text-muted-foreground/40"}`}>
                    {p.label}
                  </div>
                  {p.sub && (
                    <div className={`text-[10px] ${verifyStage >= p.stage ? "text-muted-foreground" : "text-muted-foreground/40"}`}>
                      {p.sub}
                    </div>
                  )}
                </div>
                {i < VERIFY_PIPELINE.length - 1 && (
                  <span className="text-muted-foreground/30 text-base font-light">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-2.5 text-xs text-muted-foreground">
            Forgery probability: 2⁻¹²⁸. Verified by 5 independent Notary nodes.
          </p>
        </div>
      )}

      {/* PPAP Layers breakdown — after complete */}
      {done && (
        <div className="mt-10 animate-fade-up">
          <div className="flex items-center gap-4 mb-5">
            <h3 className="text-2xl font-display text-foreground">
              What was <span className="italic text-primary">captured</span>
            </h3>
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">PPAP · CQS GOLD</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {LAYERS.map((layer, i) => (
              <div
                key={i}
                className={`bg-card border rounded-xl p-4 ${
                  layer.canSynth ? "border-border" : "border-primary/20"
                }`}
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
            Sarah's correction (<span className="text-primary font-bold">L4</span>: "#2 is good but make it shorter") and
            the orchestration sequence (<span className="text-primary font-bold">L3</span>: Claude → Gmail) are
            structurally impossible to synthesize — they require a real human working with real AI tools.
            This is the training data that reasoning models need.
          </div>
        </div>
      )}

      {/* Replay */}
      {!playing && step >= 6 && (
        <div className="mt-8 text-center">
          <button
            onClick={play}
            className="px-5 py-2 text-sm font-semibold text-primary rounded-lg border border-border hover:bg-primary/5 transition-colors"
          >
            ▶ Replay Sarah's Session
          </button>
        </div>
      )}
    </div>
  );
}
