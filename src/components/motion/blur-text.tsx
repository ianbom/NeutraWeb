"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Statement heading: per-character reveal from opacity .001 / blur(10px) /
 * translateY(10px), ~26ms stagger, spring per char (measured ~600ms settle).
 * Plays once (reference does not replay on scroll-up).
 * Words stay unbreakable so wrapping matches the reference.
 */
export function BlurText({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  let index = 0;
  return (
    <motion.span
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px 0px 0px" }}
      className={className}
    >
      <span className="sr-only">{text}</span>
      {words.map((word, w) => (
        <span key={w} className="inline-block whitespace-nowrap" aria-hidden>
          {[...word].map((char) => {
            const i = index++;
            return (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden: reduce
                    ? { opacity: 0 }
                    : { opacity: 0.001, filter: "blur(10px)", y: 10 },
                  shown: reduce
                    ? { opacity: 1 }
                    : { opacity: 1, filter: "blur(0px)", y: 0 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 22,
                  delay: i * 0.026,
                }}
              >
                {char}
              </motion.span>
            );
          })}
          
        </span>
      )).flatMap((node, i) => (i === 0 ? [node] : [" ", node]))}
    </motion.span>
  );
}
