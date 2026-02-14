import { motion } from "framer-motion";
import { ReactNode } from "react";

/* ── Strikethrough reveal: text appears then gets struck through ── */
interface StrikethroughRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** If true, strike line animates in after text appears */
  strikeDelay?: number;
  /** Strike line color — defaults to foreground/40 */
  strikeClassName?: string;
}

export function StrikethroughReveal({
  children,
  className = "",
  delay = 0,
  strikeDelay = 0.3,
  strikeClassName = "bg-foreground/40",
}: StrikethroughRevealProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
      <motion.span
        className={`absolute left-0 top-1/2 h-[2px] ${strikeClassName}`}
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.6,
          delay: delay + strikeDelay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />
    </motion.span>
  );
}

/* ── List with items that get struck through sequentially ── */
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
  stagger = 0.15,
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
          className={`relative ${itemClassName}`}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: item.struck ? 0.4 : 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
        >
          <span className={item.struck ? "line-through" : ""}>{item.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ── Fade-only reveal (no translateY, just opacity — editorial style) ── */
interface FadeRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
}: FadeRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
