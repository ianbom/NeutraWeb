"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { ReactNode } from "react";

/** Hero/decor shapes: scroll-linked drift, measured as a plain multiple of scrollY. */
export function Parallax({
  speed,
  offset = 0,
  className,
  children,
}: {
  speed: number;
  offset?: number;
  className?: string;
  children: ReactNode;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => offset + v * speed);
  const reduce = useReducedMotion();
  return (
    <motion.figure className={className} style={reduce ? { y: offset } : { y }}>
      {children}
    </motion.figure>
  );
}

/** Hero centre shape: 0 -> -32px ease-in-out loop, 3.2s each way. */
export function Float({ className, children }: { className?: string; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      animate={reduce ? undefined : { y: [0, -32, 0] }}
      transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/** Hero shape entrance on load: opacity 0 -> 1 rising from +32px (~250ms spring). */
export function Appear({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="size-full"
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 26, delay }}
    >
      {children}
    </motion.div>
  );
}
