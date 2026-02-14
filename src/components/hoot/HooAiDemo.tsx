import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "@/hooks/useInView";

interface DemoTab {
  question: string;
  zone: string;
  zoneColor: string;
  entryScore: number;
  scoreColor: string;
  evidence: string[];
  consensus: { name: string; value: string }[];
  conclusion: string;
}

const TABS: DemoTab[] = [
  {
    question: "Is ETH overbought right now?",
    zone: "CROWDED_LONG",
    zoneColor: "text-hoot-amber",
    entryScore: 34,
    scoreColor: "text-hoot-red",
    evidence: [
      "Funding rate +0.042% (overheated)",
      "RSI 78 (overbought)",
      "Whale wallets: net selling 3d",
    ],
    consensus: [
      { name: "Wyckoff", value: "Distribution" },
      { name: "SMC", value: "Premium" },
      { name: "On-Chain", value: "Weak" },
      { name: "Derivatives", value: "Risk" },
    ],
    conclusion: "→ Wait for zone shift to RANGE or\n  WHALE_ACCUMULATION before entry.",
  },
  {
    question: "BTC entry point?",
    zone: "RANGE_HIGH",
    zoneColor: "text-muted-foreground",
    entryScore: 52,
    scoreColor: "text-hoot-amber",
    evidence: [
      "Price at 0.618 fib resistance",
      "Volume declining 5d",
      "Stablecoin inflow: neutral",
    ],
    consensus: [
      { name: "Wyckoff", value: "Ranging" },
      { name: "SMC", value: "Equilibrium" },
      { name: "On-Chain", value: "Neutral" },
      { name: "Elliott", value: "Wave 4" },
    ],
    conclusion: "→ Wait for breakout confirmation\n  or pullback to 0.5 fib level.",
  },
  {
    question: "SOL vs AVAX?",
    zone: "WHALE_ACCUMULATION",
    zoneColor: "text-hoot-green",
    entryScore: 71,
    scoreColor: "text-hoot-green",
    evidence: [
      "SOL: whale wallets +12% in 7d",
      "AVAX: funding negative, shorts crowded",
      "SOL TVL growing 8% WoW",
    ],
    consensus: [
      { name: "Wyckoff", value: "Accumulation" },
      { name: "SMC", value: "Discount" },
      { name: "On-Chain", value: "Strong (SOL)" },
      { name: "Derivatives", value: "Favorable" },
    ],
    conclusion: "→ SOL shows stronger accumulation\n  signals. Consider phased entry.",
  },
];

export function HooAiDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [showPpap, setShowPpap] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const { ref: sectionRef, inView } = useInView({ threshold: 0.3 });

  const tab = TABS[activeTab];
  const totalLines = 4 + tab.evidence.length + tab.consensus.length + 1; // zone+score+blank+evidence+consensus+conclusion

  const reset = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setTypedChars(0);
    setVisibleLines(0);
    setShowPpap(false);
  }, []);

  const play = useCallback((tabIndex: number) => {
    reset();
    setActiveTab(tabIndex);
    setPlaying(true);
    const question = TABS[tabIndex].question;
    const lines = 4 + TABS[tabIndex].evidence.length + TABS[tabIndex].consensus.length + 1;

    // Type question
    for (let i = 0; i <= question.length; i++) {
      timers.current.push(setTimeout(() => setTypedChars(i), i * 30));
    }
    const typeEnd = question.length * 30;

    // Show response lines
    for (let i = 1; i <= lines; i++) {
      timers.current.push(setTimeout(() => setVisibleLines(i), typeEnd + 600 + i * 80));
    }

    // PPAP badge
    const ppapTime = typeEnd + 600 + lines * 80 + 400;
    timers.current.push(setTimeout(() => setShowPpap(true), ppapTime));
    timers.current.push(setTimeout(() => setPlaying(false), ppapTime + 600));
  }, [reset]);

  useEffect(() => {
    if (inView && !hasAutoPlayed) {
      const t = setTimeout(() => {
        setHasAutoPlayed(true);
        play(0);
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [inView, hasAutoPlayed, play]);

  useEffect(() => {
    return () => { timers.current.forEach(clearTimeout); };
  }, []);

  const handleTabClick = (i: number) => {
    if (playing) return;
    play(i);
  };

  const typedText = tab.question.slice(0, typedChars);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col items-center justify-center px-6 md:px-10 py-20">
      <div className="max-w-[800px] w-full">
        {/* Section label */}
        <div className="mb-3">
          <span className="font-mono text-[11px] text-hoot-cyan tracking-[0.2em] uppercase font-bold">
            Built-in: Hoo AI
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight">
          Your crypto research analyst. <span className="text-primary underline underline-offset-4 decoration-1">Free.</span>
        </h2>

        {/* Prompt tabs */}
        <div className="flex gap-2 mt-6 mb-4 flex-wrap">
          {TABS.map((t, i) => (
            <button
              key={i}
              onClick={() => handleTabClick(i)}
              className={`px-3 py-1.5 text-xs font-mono border transition-all ${
                activeTab === i
                  ? "border-primary text-primary bg-primary/10"
                  : "border-border text-muted-foreground hover:border-muted-foreground"
              }`}
            >
              {t.question}
            </button>
          ))}
        </div>

        {/* Terminal */}
        <div className="bg-hoot-terminal border border-border rounded-[14px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          {/* macOS bar */}
          <div className="px-4 py-3 flex items-center gap-2 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-hoot-red/70" />
              <div className="w-3 h-3 rounded-full bg-hoot-amber/70" />
              <div className="w-3 h-3 rounded-full bg-hoot-green/70" />
            </div>
            <span className="font-mono text-[11px] text-muted-foreground ml-2">Hoo AI — Crypto Research</span>
          </div>

          {/* Terminal content */}
          <div className="p-5 md:p-6 font-mono text-[12px] md:text-[13px] leading-relaxed min-h-[320px]">
            {/* User prompt */}
            <div className="mb-4">
              <span className="text-muted-foreground">YOU: </span>
              <span className="text-foreground">{typedText}</span>
              {typedChars < tab.question.length && (
                <span className="inline-block w-[2px] h-[14px] bg-primary animate-blink ml-0.5 align-middle" />
              )}
            </div>

            {/* AI Response */}
            {visibleLines > 0 && (
              <div className="space-y-1">
                {visibleLines >= 1 && (
                  <div>
                    <span className="text-muted-foreground">Zone: </span>
                    <span className={`font-bold ${tab.zoneColor}`}>{tab.zone}</span>
                  </div>
                )}
                {visibleLines >= 2 && (
                  <div>
                    <span className="text-muted-foreground">Entry Score: </span>
                    <span className={`font-bold ${tab.scoreColor}`}>{tab.entryScore}/100</span>
                    <span className="text-muted-foreground"> ({tab.entryScore <= 40 ? "unfavorable" : tab.entryScore <= 60 ? "neutral" : "favorable"})</span>
                  </div>
                )}
                {visibleLines >= 3 && <div className="h-2" />}
                {visibleLines >= 4 && (
                  <div>
                    <span className="text-muted-foreground">Evidence:</span>
                    {tab.evidence.map((e, i) => (
                      visibleLines >= 4 + i + 1 && (
                        <div key={i} className="text-foreground ml-2">· {e}</div>
                      )
                    ))}
                  </div>
                )}
                {visibleLines >= 4 + tab.evidence.length + 1 && (
                  <div className="mt-2">
                    <span className="text-muted-foreground">Consensus ({tab.consensus.length}/6):</span>
                    <div className="flex flex-wrap gap-x-4 gap-y-0.5 ml-2 mt-0.5">
                      {tab.consensus.map((c, i) => (
                        visibleLines >= 4 + tab.evidence.length + 1 + i + 1 && (
                          <span key={i} className="text-foreground">{c.name}: <span className="text-muted-foreground">{c.value}</span></span>
                        )
                      ))}
                    </div>
                  </div>
                )}
                {visibleLines >= totalLines && (
                  <div className="mt-3 text-hoot-cyan whitespace-pre-line">{tab.conclusion}</div>
                )}
              </div>
            )}

            {/* PPAP badge */}
            {showPpap && (
              <div className="mt-5 pt-3 border-t border-border flex items-center gap-2 animate-fade-up">
                <span className="w-2 h-2 bg-hoot-green rounded-full animate-pulse-dot" />
                <span className="text-[11px] text-hoot-green font-bold">PPAP generated</span>
                <span className="text-[11px] text-muted-foreground">· verified on-chain</span>
              </div>
            )}
          </div>
        </div>

        {/* Spec bar */}
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
          {["95 metrics", "11 zones", "6 frameworks", "Trading Passport", "15 blockchains"].map((s) => (
            <span key={s} className="font-mono text-[11px] text-muted-foreground">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
