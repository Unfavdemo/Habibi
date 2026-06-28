"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealOnScrollProps) {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const animate = mounted && !reduceMotion;
  const offset =
    direction === "up" ? { y: 40 } : direction === "left" ? { x: -40 } : { x: 40 };

  return (
    <motion.div
      className={cn(className)}
      initial={animate ? { opacity: 0, ...offset } : false}
      whileInView={animate ? { opacity: 1, x: 0, y: 0 } : undefined}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
