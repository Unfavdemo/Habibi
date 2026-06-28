"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Belief = {
  title: string;
  description: string;
};

type BeliefScrollProps = {
  beliefs: readonly Belief[];
};

export function BeliefScroll({ beliefs }: BeliefScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  const scrollToIndex = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(beliefs.length - 1, index));
      const card = cardRefs.current[clamped];
      if (!card) return;

      card.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveIndex(clamped);
    },
    [beliefs.length, reduceMotion],
  );

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = cardRefs.current.findIndex((el) => el === entry.target);
          if (index >= 0) setActiveIndex(index);
        }
      },
      {
        root,
        threshold: 0.55,
      },
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [beliefs.length]);

  return (
    <div className="relative">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl tracking-wide text-surface-foreground sm:text-4xl">
            What we believe
          </h2>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-surface-muted">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(beliefs.length).padStart(2, "0")}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-surface-muted transition-colors hover:border-accent/50 hover:text-accent disabled:pointer-events-none disabled:opacity-30"
            aria-label="Previous belief"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === beliefs.length - 1}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-surface-muted transition-colors hover:border-accent/50 hover:text-accent disabled:pointer-events-none disabled:opacity-30"
            aria-label="Next belief"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
      </div>

      {/* Edge fades hint at more content */}
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-charcoal to-transparent sm:w-12"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-charcoal to-transparent sm:w-12"
          aria-hidden
        />

        <div
          ref={scrollRef}
          className="belief-carousel flex gap-5 overflow-x-auto pb-4"
        >
          {beliefs.map((belief, i) => (
            <article
              key={belief.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={cn(
                "w-[min(85vw,340px)] shrink-0 snap-center rounded-2xl border p-7 transition-[opacity,transform,border-color] duration-300 sm:w-[340px] sm:p-8",
                i % 2 === 0
                  ? "border-accent/25 bg-gradient-to-br from-accent/10 to-charcoal-elevated"
                  : "border-accent-warm/25 bg-gradient-to-br from-accent-warm/10 to-charcoal-elevated",
                i === activeIndex
                  ? "scale-100 opacity-100"
                  : "scale-[0.97] opacity-70",
              )}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-surface-muted">
                Belief 0{i + 1}
              </p>
              <h3
                className={cn(
                  "mt-3 font-display text-3xl tracking-wide",
                  i % 2 === 0 ? "text-accent" : "text-accent-warm",
                )}
              >
                {belief.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-surface-muted sm:text-base">
                {belief.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Belief navigation">
        {beliefs.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === activeIndex
                ? "w-8 bg-accent"
                : "w-1.5 bg-white/20 hover:bg-white/40",
            )}
            aria-label={`Go to belief ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
