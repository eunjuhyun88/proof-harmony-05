import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "@/hooks/useInView";

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
  { label: "TLS_CAPTURE", stage: 1 },
  { label: "zkTLS_PROOF", stage: 1 },
  { label: "FROST_5-of-5", stage: 2, sub: "5 Notaries" },
  { label: "CQS_SCORE", stage: 3, sub: "GOLD" },
  { label: "PPAP_MINT", stage: 4, sub: "ERC-721" },
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
  const [verifyStage, setVerifyStage] = useState(0);
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
      <div className="bg-background border border-foreground/10 overflow-hidden">
        {/* Title bar */}
        <div className="bg-secondary px-4 py-2.5 flex items-center gap-3 border-b border-foreground/10">
          <div className="font-mono text-xs font-bold text-foreground tracking-wider">HOOT_BROWSER</div>
          <div className="flex-1 ml-2 bg-background border border-foreground/10 px-3 py-1 font-mono text-[10px] text-muted-foreground truncate">
            claude.ai — Sarah's workspace
          </div>
          <div className="font-mono text-[10px] text-muted-foreground hidden sm:block">
            <span className="text-hoot-green">●</span> Sarah.eth
          </div>
        </div>

        {/* Browser body */}
        <div className="flex min-h-[440px]">
          {/* Sidebar */}
          <div className="w-14 bg-secondary border-r border-foreground/10 py-4 flex-col items-center gap-5 hidden md:flex">
            {[
              { icon: "🌐", label: "BROWSE", on: true },
              { icon: "🏠", label: "HUB", on: false },
              { icon: "💎", label: "PPAP", on: false },
              { icon: "🔑", label: "KEYS", on: false },
            ].map((item, i) => (
              <div key={i} className={`text-center ${item.on ? "opacity-100" : "opacity-30"}`}>
                <div className="text-lg">{item.icon}</div>
                <div className={`font-mono text-[7px] mt-0.5 font-bold ${item.on ? "text-foreground" : "text-muted-foreground"}`}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Main chat area */}
          <div className="flex-1 flex flex-col min-w-0">
            <div ref={chatRef} className="flex-1 overflow-auto p-4 space-y-3">
              {visible.filter(s => s.type !== "verify").map((s) => (
                <div key={s.id} className="animate-fade-up">
                  {s.type === "user" ? (
                    <div className="flex justify-end">
                      <div className="border border-foreground/10 px-4 py-3 max-w-[85%]">
                        <div className="font-mono text-[9px] font-bold text-muted-foreground mb-1">SARAH</div>
                        <div className="text-sm text-foreground">{s.text}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-start">
                      <div className="bg-secondary px-4 py-3 max-w-[85%]">
                        <div className="font-mono text-[9px] font-bold text-muted-foreground mb-1">CLAUDE</div>
                        <div className="text-sm text-foreground whitespace-pre-line font-mono leading-relaxed">
                          {s.text}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {step >= 0 && step < 6 && step % 2 === 0 && (
                <div className="flex justify-start">
                  <div className="bg-secondary px-4 py-3">
                    <div className="font-mono text-[9px] font-bold text-muted-foreground mb-1">CLAUDE</div>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-muted-foreground/40 animate-blink" />
                      <span className="w-1.5 h-1.5 bg-muted-foreground/40 animate-blink" style={{ animationDelay: "0.2s" }} />
                      <span className="w-1.5 h-1.5 bg-muted-foreground/40 animate-blink" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </div>
                </div>
              )}

              {showVerify && (
                <div className="animate-fade-up">
                  <div className="border-2 border-foreground px-5 py-4 max-w-[90%] mx-auto">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-2 h-2 bg-hoot-green ${verifyStage < 4 ? "animate-blink" : ""}`} />
                      <span className="font-mono text-[10px] font-bold text-hoot-green tracking-wider">
                        {verifyStage < 4 ? "VERIFYING_SESSION..." : "SESSION_VERIFIED"}
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
                          <span className="text-hoot-green text-sm font-bold">✓</span>
                          <span className="text-sm text-foreground">{item.label}</span>
                          {item.detail && (
                            <span className="font-mono text-[10px] font-bold border border-foreground/10 px-1.5 py-0.5 ml-auto">
                              {item.detail}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {done && (
                      <div className="mt-4 pt-3 border-t border-foreground/10 animate-fade-up">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-mono text-[10px] text-muted-foreground">
                              MONETIZATION: <span className="font-bold text-foreground">{monetization ? "ON" : "OFF"}</span>
                            </div>
                            <div className="font-mono text-[9px] text-muted-foreground mt-0.5">
                              {monetization
                                ? "Listed on DATA_HUB. AI companies can license."
                                : "Private. Turn ON to list on DATA_HUB."}
                            </div>
                          </div>
                          <button
                            onClick={() => setMonetization(!monetization)}
                            className={`w-10 h-5 relative transition-colors duration-200 shrink-0 ${
                              monetization ? "bg-foreground" : "bg-border"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 bg-background shadow absolute top-0.5 transition-transform duration-200 ${
                                monetization ? "translate-x-5" : "translate-x-0.5"
                              }`}
                            />
                          </button>
                        </div>
                        <p className="font-mono text-[9px] text-muted-foreground mt-2">
                          YOUR_WORK. YOUR_PROOF. YOUR_CHOICE.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="px-4 pb-3">
              <div className="bg-secondary border border-foreground/10 px-4 py-2.5 flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground/60 flex-1">Ask Claude anything...</span>
                <button
                  onClick={!playing ? play : undefined}
                  disabled={playing}
                  className={`w-8 h-8 flex items-center justify-center transition-colors ${
                    playing ? "bg-muted-foreground/30 cursor-default" : "bg-foreground cursor-pointer hover:bg-foreground/90"
                  }`}
                >
                  <span className="text-xs text-background font-bold">{playing ? "…" : "▶"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="w-[220px] lg:w-[240px] bg-secondary p-3 flex flex-col gap-3 hidden md:flex border-l border-foreground/10">
            <div className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
              SESSION_INFO
            </div>

            <div className="bg-background p-3 border border-foreground/10">
              <div className="font-mono text-[9px] text-muted-foreground tracking-wider mb-1">CREATOR</div>
              <div className="text-sm font-bold text-foreground">Sarah Kim</div>
              <div className="font-mono text-[9px] text-muted-foreground mt-0.5">HumanPassport verified</div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="font-mono text-[9px] font-bold border border-hoot-green text-hoot-green px-1.5 py-0.5">GOLD</span>
                <span className="font-mono text-[9px] text-muted-foreground">Trust: 78</span>
              </div>
            </div>

            <div className="bg-background p-3 border border-foreground/10">
              <div className="font-mono text-[9px] text-muted-foreground tracking-wider mb-2">SKILLS_USED</div>
              <div className="space-y-1.5">
                {[
                  { name: "Claude", icon: "◆", active: step >= 1 },
                  { name: "Gmail", icon: "✉", active: step >= 5 },
                ].map((sk, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 px-2 py-1.5 transition-all duration-300 ${
                      sk.active ? "border border-foreground/10 bg-secondary" : "opacity-40"
                    }`}
                  >
                    <span className="text-sm">{sk.icon}</span>
                    <span className={`font-mono text-[10px] flex-1 ${sk.active ? "text-foreground font-bold" : "text-muted-foreground"}`}>
                      {sk.name}
                    </span>
                    {sk.active && (
                      <span className="font-mono text-[8px] font-bold text-hoot-green border border-hoot-green/30 px-1 py-0.5">
                        ACTIVE
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="font-mono text-[9px] text-muted-foreground/60 text-center pt-2">700+ MCP_SKILLS</div>
            </div>

            <div className="bg-background p-3 border border-foreground/10 flex-1">
              <div className="font-mono text-[9px] text-muted-foreground tracking-wider mb-2">DATA_CAPTURED</div>
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
                        className={`font-mono text-[9px] font-extrabold px-1.5 py-0.5 ${
                          !l.canSynth
                            ? "bg-foreground text-background"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {l.label}
                      </span>
                      <span className="font-mono text-[10px] text-foreground">{l.name}</span>
                    </div>
                  );
                })}
              </div>
              {step >= 6 && (
                <p className="font-mono text-[8px] text-muted-foreground mt-2 leading-snug">
                  L3 + L4: CANNOT_BE_SYNTHESIZED
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Verification pipeline */}
      {verifyStage >= 1 && (
        <div className="mt-8 animate-fade-up">
          <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tight">
            VERIFICATION PIPELINE
          </h3>
          <div className="flex gap-0 items-stretch flex-wrap border border-foreground/10">
            {VERIFY_PIPELINE.map((p, i) => (
              <div key={i} className={`flex-1 min-w-[100px] p-3 text-center transition-all duration-300 ${
                i < VERIFY_PIPELINE.length - 1 ? "border-r border-foreground/10" : ""
              } ${verifyStage >= p.stage ? "bg-secondary" : ""}`}>
                <div className={`font-mono text-[10px] font-bold ${verifyStage >= p.stage ? "text-foreground" : "text-muted-foreground/30"}`}>
                  {p.label}
                </div>
                {p.sub && (
                  <div className={`font-mono text-[9px] mt-0.5 ${verifyStage >= p.stage ? "text-muted-foreground" : "text-muted-foreground/20"}`}>
                    {p.sub}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-2.5 font-mono text-[10px] text-muted-foreground">
            FORGERY_PROBABILITY: 2⁻¹²⁸. VERIFIED BY 5 INDEPENDENT NOTARY NODES.
          </p>
        </div>
      )}

      {/* PPAP Layers */}
      {done && (
        <div className="mt-10 animate-fade-up">
          <div className="flex items-center gap-4 mb-5">
            <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight">
              WHAT WAS CAPTURED
            </h3>
            <div className="flex-1 h-px bg-foreground/10" />
            <span className="font-mono text-[10px] text-muted-foreground">PPAP · CQS_GOLD</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-foreground/10">
            {LAYERS.map((layer, i) => (
              <div
                key={i}
                className={`p-4 ${i < 3 ? "border-r border-foreground/10" : ""} ${!layer.canSynth ? "bg-secondary" : ""}`}
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <div
                    className={`font-mono text-[10px] font-extrabold px-1.5 py-0.5 ${
                      layer.canSynth
                        ? "bg-secondary text-muted-foreground border border-foreground/10"
                        : "bg-foreground text-background"
                    }`}
                  >
                    {layer.label}
                  </div>
                  <div className="text-sm text-foreground font-bold">{layer.name}</div>
                </div>
                <div className="text-xs text-muted-foreground mb-2.5 leading-relaxed">{layer.desc}</div>
                <div
                  className={`font-mono text-[9px] font-bold inline-block px-2 py-0.5 border ${
                    layer.canSynth
                      ? "text-hoot-orange border-hoot-orange/30"
                      : "text-hoot-green border-hoot-green/30"
                  }`}
                >
                  {layer.canSynth ? "CAN_SYNTHESIZE" : "CANNOT_SYNTHESIZE"}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 border border-foreground/10 bg-secondary text-sm text-muted-foreground leading-relaxed">
            Sarah's correction (<span className="font-bold text-foreground">L4</span>: "#2 is good but make it shorter") and
            the orchestration sequence (<span className="font-bold text-foreground">L3</span>: Claude → Gmail) are
            structurally impossible to synthesize — they require a real human working with real AI tools.
          </div>
        </div>
      )}

      {/* Replay */}
      {!playing && step >= 6 && (
        <div className="mt-8 text-center">
          <button
            onClick={play}
            className="px-5 py-2 font-mono text-xs font-bold text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors tracking-wider"
          >
            ▶ REPLAY_SESSION
          </button>
        </div>
      )}
    </div>
  );
}
