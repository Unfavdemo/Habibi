"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

const SPRING = { stiffness: 220, damping: 18, mass: 0.12 };

type MagneticButtonProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function MagneticButton({
  href,
  className,
  children,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLAnchorElement>) => {
      if (reduceMotion) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = event.clientX - cx;
      const dy = event.clientY - cy;
      const distance = Math.hypot(dx, dy) + 0.001;
      const pull = Math.min(1, 96 / distance);
      x.set(dx * pull * 0.22);
      y.set(dy * pull * 0.22);
    },
    [reduceMotion, x, y],
  );

  if (reduceMotion) {
    return (
      <Link href={href} className={cn(className)}>
        {children}
      </Link>
    );
  }

  return (
    <motion.span
      style={{ x: springX, y: springY }}
      className="inline-flex will-change-transform"
    >
      <MotionLink
        ref={ref}
        href={href}
        className={cn(className)}
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
        onPointerCancel={reset}
      >
        {children}
      </MotionLink>
    </motion.span>
  );
}
