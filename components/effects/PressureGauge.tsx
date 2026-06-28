"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type PressureGaugeProps = {
  className?: string;
};

export function PressureGauge({ className }: PressureGaugeProps) {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [level, setLevel] = useState(72);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || reduceMotion) return;
    const interval = setInterval(() => {
      setLevel(65 + Math.floor(Math.random() * 30));
    }, 2200);
    return () => clearInterval(interval);
  }, [mounted, reduceMotion]);

  const displayLevel = mounted ? level : 72;

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-charcoal-elevated/90 p-4 backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-warm">
          Pressure level
        </p>
        <p className="font-display text-2xl tabular-nums text-accent">
          {displayLevel}
          <span className="text-sm text-surface-muted">%</span>
        </p>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent via-accent-warm to-flair transition-[width] duration-700 ease-out"
          style={{ width: `${displayLevel}%` }}
        />
      </div>
      <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-surface-muted">
        Building under pressure — optimal range
      </p>
    </div>
  );
}
