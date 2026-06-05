"use client";

import { animate, motion, useInView, useReducedMotion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const MotionDiv = motion.div;
export const MotionHeader = motion.header;
export const MotionSection = motion.section;
export const MotionButton = motion.button;
export const MotionSpan = motion.span;
export const MotionA = motion.a;
export const MotionG = motion.g;
export const MotionCircle = motion.circle;
export { AnimatePresence };

export function useIsReducedMotion() {
  return useReducedMotion();
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 }
  }
};

export const fadeUpDelayed: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30, delay: 0.15 }
  }
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

export const springScale: Variants = {
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 25 } },
  tap: { scale: 0.95 }
};

export function CountUp({
  to,
  from = 0,
  duration = 1.5,
  formatter = (val: number) => Math.round(val).toString(),
  className = ""
}: {
  to: number;
  from?: number;
  duration?: number;
  formatter?: (val: number) => string;
  className?: string;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(formatter(from));

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(formatter(to));
      return;
    }

    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setDisplayValue(formatter(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration, formatter, shouldReduceMotion]);

  return <span ref={nodeRef} className={className}>{displayValue}</span>;
}
