import { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

/* ── Dramatic easing curves ── */
const SNAP = [0.16, 1, 0.3, 1] as const;
const INDUSTRIAL = [0.25, 0.1, 0.25, 1] as const;

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "down";
  distance?: number;
  duration?: number;
  once?: boolean;
  scale?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 80,
  duration = 0.8,
  once = true,
  scale = false,
}: ScrollRevealProps) {
  const getInitial = () => {
    const base: Record<string, number | string> = { opacity: 0, filter: "blur(4px)" };
    if (direction === "up") base.y = distance;
    if (direction === "down") base.y = -distance;
    if (direction === "left") base.x = -distance;
    if (direction === "right") base.x = distance;
    if (scale) base.scale = 0.9;
    return base;
  };

  const getAnimate = () => {
    const base: Record<string, number | string> = { opacity: 1, y: 0, x: 0, filter: "blur(0px)" };
    if (scale) base.scale = 1;
    return base;
  };

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: SNAP,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── Word-by-word text reveal with dramatic 3D flip ── */
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.035,
  as: Tag = "h2",
}: TextRevealProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: SNAP,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
      style={{ perspective: 600 }}
    >
      <Tag className={className}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={child}
            className="inline-block mr-[0.3em]"
            style={{ transformOrigin: "bottom center" }}
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}

/* ── Clip-path reveal — wipes content into view ── */
interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  duration?: number;
}

export function ClipReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
}: ClipRevealProps) {
  const clipFrom =
    direction === "up"
      ? "inset(100% 0% 0% 0%)"
      : direction === "left"
      ? "inset(0% 100% 0% 0%)"
      : "inset(0% 0% 0% 100%)";

  return (
    <motion.div
      className={className}
      initial={{ clipPath: clipFrom, opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: SNAP }}
    >
      {children}
    </motion.div>
  );
}

/* ── Line-by-line reveal ── */
interface LineRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  staggerDelay?: number;
}

export function LineReveal({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  staggerDelay = 0.1,
}: LineRevealProps) {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, x: -40, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: SNAP,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {lines.map((line, i) => (
        <motion.div key={i} variants={child} className={lineClassName}>
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ── Counter animation ── */
interface CountUpProps {
  value: string;
  className?: string;
  delay?: number;
}

export function CountUp({ value, className = "", delay = 0 }: CountUpProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 30, scale: 0.7, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: SNAP }}
    >
      {value}
    </motion.span>
  );
}

/* ── Stagger container for children ── */
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function StaggerContainer({
  children,
  className = "",
  delay = 0,
  stagger = 0.08,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: SNAP,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
