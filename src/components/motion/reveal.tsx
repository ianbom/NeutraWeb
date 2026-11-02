"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

/**
 * Framer's default scroll reveal: opacity 0 -> 1 with a 96px rise under a
 * perspective(1200px) wrapper, critically damped spring (~stiffness 90 /
 * damping 20, measured off the reference). Replays whenever the element
 * re-enters the viewport; triggers ~100px before its top crosses the bottom edge.
 */
export const revealSpring = { type: "spring", stiffness: 90, damping: 20, mass: 1 } as const;

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number };

export function Reveal({ delay = 0, y = 96, style, children, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ margin: "0px 0px -100px 0px" }}
      transition={{ ...revealSpring, delay }}
      style={reduce ? style : { perspective: 1200, ...style }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
