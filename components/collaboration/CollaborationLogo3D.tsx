"use client";

import {
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type CollaborationLogo3DProps = {
  children: React.ReactNode;
  className?: string;
};

const baseTilt = "rotateX(8deg) rotateY(-10deg)";

/**
 * Metallic “plate” with pointer-reactive 3D tilt (CSS transform-style).
 */
export function CollaborationLogo3D({
  children,
  className,
}: CollaborationLogo3DProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState(baseTilt);

  const onPointerMove = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (reduceMotion) return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      const maxX = 16;
      const maxY = 12;
      setTilt(
        `rotateX(${-py * maxY + 6}deg) rotateY(${px * maxX * 2 - 8}deg) translateZ(12px)`,
      );
    },
    [reduceMotion],
  );

  const onPointerLeave = useCallback(() => {
    setTilt(baseTilt);
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-full min-h-[200px] w-full items-stretch justify-center p-5 sm:p-7",
        "[perspective:1100px]",
        className,
      )}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div
        className="relative w-full max-w-md transform-gpu transition-transform duration-200 ease-out"
        style={
          reduceMotion
            ? undefined
            : ({
                transform: tilt,
                transformStyle: "preserve-3d",
              } as CSSProperties)
        }
      >
        {/* Depth stack */}
        <div
          className="pointer-events-none absolute inset-2 -z-10 rounded-3xl bg-black/70 blur-md"
          style={{ transform: "translateZ(-18px)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-[5] rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.14] via-charcoal to-charcoal"
          style={{ transform: "translateZ(-8px)" }}
          aria-hidden
        />

        <div
          className={cn(
            "relative overflow-hidden rounded-3xl border border-white/20",
            "bg-gradient-to-br from-white/[0.18] via-charcoal-elevated/95 to-charcoal",
            "shadow-[0_28px_60px_-18px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-18px_40px_rgba(0,0,0,0.35)]",
          )}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-55 mix-blend-overlay"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-1/3 top-0 h-1/2 w-2/3 rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-40 blur-2xl"
            aria-hidden
          />
          <div className="relative flex min-h-[168px] items-center justify-center px-4 py-8 sm:px-8 sm:py-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
