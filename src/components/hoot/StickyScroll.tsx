import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── Sticky Section: background stays fixed, content fades in/out on scroll ── */
interface StickyScrollProps {
  children: ReactNode;
  className?: string;
  /** How many viewport heights tall the scroll area is (default 2) */
  height?: number;
  /** Background content that stays fixed */
  background?: ReactNode;
}

export function StickySection({
  children,
  className = "",
  height = 2,
  background,
}: StickyScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: `${height * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {background && (
          <div className="absolute inset-0 z-0">{background}</div>
        )}
        <div className="relative z-10 w-full">{children}</div>
      </div>
    </div>
  );
}

/* ── Scroll-linked content block that fades in then out based on scroll progress ── */
interface ScrollContentProps {
  children: ReactNode;
  className?: string;
  /** When this content starts appearing (0-1 of parent scroll) */
  start?: number;
  /** When this content is fully visible (0-1) */
  peak?: number;
  /** When this content starts fading out (0-1) */
  end?: number;
  /** Scroll container ref — if not provided, uses nearest scrollable parent */
  containerRef?: React.RefObject<HTMLDivElement>;
  direction?: "up" | "none";
}

export function ScrollContent({
  children,
  className = "",
  start = 0,
  peak = 0.5,
  end = 1,
  containerRef,
  direction = "up",
}: ScrollContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef || ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [start, peak, end],
    [0, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [start, peak, end],
    direction === "up" ? [40, 0, -40] : [0, 0, 0]
  );

  const filter = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    ["blur(4px)", "blur(0px)", "blur(0px)", "blur(4px)"]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ opacity, y, filter }}
    >
      {children}
    </motion.div>
  );
}

/* ── Multi-step sticky scroller: multiple content panels in one sticky section ── */
interface StickyStepsProps {
  steps: {
    content: ReactNode;
    label?: string;
  }[];
  className?: string;
  stickyClassName?: string;
  /** vh per step (default 1.5) */
  stepHeight?: number;
}

export function StickySteps({
  steps,
  className = "",
  stickyClassName = "",
  stepHeight = 1.5,
}: StickyStepsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalHeight = steps.length * stepHeight;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: `${totalHeight * 100}vh` }}
    >
      <div className={`sticky top-0 h-screen flex items-center ${stickyClassName}`}>
        <div className="w-full">
          {steps.map((step, i) => {
            const segmentSize = 1 / steps.length;
            const stepStart = Math.max(0, i * segmentSize - segmentSize * 0.1);
            const stepPeak = i * segmentSize + segmentSize * 0.25;
            const stepEnd = (i + 1) * segmentSize + segmentSize * 0.05;

            return (
              <StickyStepItem
                key={i}
                scrollYProgress={scrollYProgress}
                start={stepStart}
                peak={stepPeak}
                end={stepEnd}
                isLast={i === steps.length - 1}
              >
                {step.content}
              </StickyStepItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StickyStepItem({
  children,
  scrollYProgress,
  start,
  peak,
  end,
  isLast,
}: {
  children: ReactNode;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  peak: number;
  end: number;
  isLast: boolean;
}) {
  const opacity = useTransform(
    scrollYProgress,
    isLast
      ? [start, peak]
      : [start, peak, end],
    isLast
      ? [0, 1]
      : [0, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    isLast
      ? [start, peak]
      : [start, peak, end],
    isLast
      ? [60, 0]
      : [60, 0, -30]
  );

  const filter = useTransform(
    scrollYProgress,
    isLast
      ? [start, start + 0.03]
      : [start, start + 0.03, end - 0.03, end],
    isLast
      ? ["blur(6px)", "blur(0px)"]
      : ["blur(6px)", "blur(0px)", "blur(0px)", "blur(6px)"]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center"
      style={{ opacity, y, filter }}
    >
      {children}
    </motion.div>
  );
}
