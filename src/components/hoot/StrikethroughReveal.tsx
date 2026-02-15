import { motion } from "framer-motion";
import { ReactNode } from "react";

const SNAP = [0.16, 1, 0.3, 1] as const;

/* ── Strikethrough reveal: text appears then gets struck through with color flash ── */
interface StrikethroughRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  strikeDelay?: number;
  strikeClassName?: string;
}

export function StrikethroughReveal({
  children,
  className = "",
  delay = 0,
  strikeDelay = 0.3,
  strikeClassName = "bg-destructive",
}: StrikethroughRevealProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay, ease: SNAP }}
    >
      {children}
      <motion.span
        className={`absolute left-0 top-1/2 h-[2px] ${strikeClassName}`}
        initial={{ width: "0%", opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.4,
          delay: delay + strikeDelay,
          ease: SNAP,
        }}
      />
    </motion.span>
  );
}

/* ── List with items that get struck through with dramatic stagger ── */
interface StrikethroughListProps {
  items: { text: string; struck?: boolean }[];
  className?: string;
  itemClassName?: string;
  delay?: number;
  stagger?: number;
}

export function StrikethroughList({
  items,
  className = "",
  itemClassName = "",
  delay = 0,
  stagger = 0.12,
}: StrikethroughListProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          className={`relative overflow-hidden ${itemClassName}`}
          variants={{
            hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
            visible: {
              opacity: item.struck ? 0.35 : 1,
              x: 0,
              filter: "blur(0px)",
              transition: { duration: 0.5, ease: SNAP },
            },
          }}
        >
          <span className={item.struck ? "line-through decoration-destructive decoration-2" : ""}>
            {item.text}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ── Fade + scale reveal ── */
interface FadeRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  scale?: boolean;
}

export function FadeReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  scale = false,
}: FadeRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: scale ? 20 : 0, scale: scale ? 0.95 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: SNAP }}
    >
      {children}
    </motion.div>
  );
}
