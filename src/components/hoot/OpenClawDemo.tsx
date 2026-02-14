import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "@/hooks/useInView";

const LOG_ITEMS = [
  "47 emails scanned",
  "12 action items found",
  "Tasks added to Notion",
  "Summary posted to Slack",
];

const TOOLS = [
  { name: "Gmail", status: "idle" },
  { name: "claude.ai", status: "idle" },
  { name: "notion.so", status: "idle" },
];

const INTEGRATIONS = ["Gmail", "Slack", "Notion", "GitHub", "Calendar", "Perplexity", "Linear", "Figma"];

export function OpenClawDemo() {
  const [activeTools, setActiveTools] = useState<number[]>([]);
  const [completedLogs, setCompletedLogs] = useState<number[]>([]);
  const [showPpap, setShowPpap] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const { ref: sectionRef, inView } = useInView({ threshold: 0.3 });

  const reset = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setActiveTools([]);
    setCompletedLogs([]);
    setShowPpap(false);
  }, []);

  const play = useCallback(() => {
    reset();
    // Activate tools sequentially
    timers.current.push(setTimeout(() => setActiveTools([0]), 400));
    timers.current.push(setTimeout(() => setActiveTools([0, 1]), 800));
    timers.current.push(setTimeout(() => setActiveTools([0, 1, 2]), 1200));

    // Log items
    LOG_ITEMS.forEach((_, i) => {
      timers.current.push(setTimeout(() => {
        setCompletedLogs(prev => [...prev, i]);
      }, 1800 + i * 200));
    });

    // PPAP
    timers.current.push(setTimeout(() => setShowPpap(true), 2800));
  }, [reset]);

  useEffect(() => {
    if (inView && !hasAutoPlayed) {
      const t = setTimeout(() => {
        setHasAutoPlayed(true);
        play();
      }, 500);
      return () => clearTimeout(t);
    }
  }, [inView, hasAutoPlayed, play]);

  useEffect(() => {
    return () => { timers.current.forEach(clearTimeout); };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col items-center justify-center px-6 md:px-10 py-20">
      <div className="max-w-[800px] w-full">
        {/* Section label */}
        <div className="mb-3">
          <span className="font-mono text-[11px] text-hoot-blue tracking-[0.2em] uppercase font-bold">
            Also built-in: OpenClaw
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
          One command across every tool.
        </h2>

        {/* Terminal */}
        <div className="bg-hoot-terminal border border-border rounded-[14px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          {/* macOS bar */}
          <div className="px-4 py-3 flex items-center gap-2 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-hoot-red/70" />
              <div className="w-3 h-3 rounded-full bg-hoot-amber/70" />
              <div className="w-3 h-3 rounded-full bg-hoot-green/70" />
            </div>
            <span className="font-mono text-[11px] text-muted-foreground ml-2">HOOT BROWSER</span>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-border">
            {TOOLS.map((tool, i) => (
              <div
                key={i}
                className={`px-4 py-2 text-xs font-mono border-r border-border transition-all duration-300 ${
                  activeTools.includes(i)
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground"
                }`}
              >
                {tool.name}
                {activeTools.includes(i) && (
                  <span className="ml-2 text-[9px] text-hoot-green font-bold">●</span>
                )}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="p-5 md:p-6 min-h-[280px]">
            {/* Email list mock */}
            <div className="space-y-2 mb-5">
              {[
                { from: "Sarah Kim", subject: "Q1 Budget Review" },
                { from: "Dev Team", subject: "Deploy v2.3" },
                { from: "Alex Chen", subject: "Partnership" },
              ].map((email, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-mono">
                  <span className="text-muted-foreground w-24 truncate">{email.from}</span>
                  <span className="text-foreground">{email.subject}</span>
                </div>
              ))}
            </div>

            {/* Orchestration log */}
            {completedLogs.length > 0 && (
              <div className="border-t border-border pt-4 mt-4">
                <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-3">ORCHESTRATION LOG</div>
                <div className="space-y-1.5">
                  {LOG_ITEMS.map((item, i) => (
                    completedLogs.includes(i) && (
                      <div key={i} className="flex items-center gap-2 text-sm font-mono animate-fade-up">
                        <span className="text-hoot-green font-bold">✓</span>
                        <span className="text-foreground">{item}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* PPAP badge */}
            {showPpap && (
              <div className="mt-5 pt-3 border-t border-border flex items-center gap-2 animate-fade-up">
                <span className="w-2 h-2 bg-hoot-green rounded-full animate-pulse-dot" />
                <span className="font-mono text-[11px] text-hoot-green font-bold">PPAP generated</span>
                <span className="font-mono text-[11px] text-muted-foreground">· L3 Orchestration data</span>
              </div>
            )}
          </div>
        </div>

        {/* Integration bar */}
        <div className="mt-4">
          <span className="font-mono text-[11px] text-muted-foreground">700+ MCP integrations</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {INTEGRATIONS.map((name) => (
              <span key={name} className="font-mono text-[11px] text-muted-foreground border border-border px-2 py-1">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
