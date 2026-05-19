"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  /**
   * When true, the element renders visible from the start with no
   * fade-in animation. Use for above-the-fold content where waiting
   * for framer-motion JS to hydrate would leave the area blank — for
   * example, the Projects page heading on mobile Safari.
   */
  eager?: boolean;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: { delay: number; y: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom.delay,
      duration: 0.7,
      ease: [0.2, 0.7, 0.2, 1],
    },
  }),
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
  eager = false,
}: RevealProps) {
  // Eager mode: bypass framer-motion entirely so the SSR'd HTML is
  // already visible (no opacity:0 inline style waiting on JS).
  if (eager) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      custom={{ delay, y }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
