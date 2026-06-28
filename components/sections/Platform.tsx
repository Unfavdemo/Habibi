"use client";

import {
  Camera,
  Globe,
  Handshake,
  Layers,
  Receipt,
  Users,
} from "lucide-react";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { platformPillars, type PlatformPillar } from "@/data/profile";
import { cn } from "@/lib/utils";

const iconMap: Record<
  PlatformPillar["icon"],
  React.ComponentType<{ className?: string }>
> = {
  community: Users,
  content: Camera,
  culture: Globe,
  commerce: Receipt,
  collab: Handshake,
  vision: Layers,
};

const bentoLayout = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-2",
  "sm:col-span-3",
];

export function Platform() {
  return (
    <section
      id="platform"
      className="relative scroll-mt-20 overflow-hidden border-b border-white/10"
      aria-labelledby="platform-heading"
    >
      <div className="pointer-events-none absolute inset-0 pressure-grid opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
        aria-hidden
      />

      {/* Oversized section index */}
      <p
        className="pointer-events-none absolute -right-4 top-8 select-none font-display text-[clamp(5rem,15vw,10rem)] leading-none text-outline opacity-60 lg:right-8"
        aria-hidden
      >
        06
      </p>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            The Platform
          </p>
          <h2
            id="platform-heading"
            className="mt-2 max-w-xl font-display text-4xl tracking-wide text-gradient-brand sm:text-5xl lg:text-6xl"
          >
            Six pillars.
            <span className="block text-surface-foreground">One movement.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-surface-muted">
            PHRESH UNDER PRESSURE isn&apos;t just a brand — it&apos;s an ecosystem
            for freelancers who refuse to shrink.
          </p>
        </RevealOnScroll>

        <ul className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-3 lg:gap-5">
          {platformPillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon];
            const isWide = i === 0 || i === 4 || i === 5;
            return (
              <RevealOnScroll key={pillar.id} delay={i * 0.06} className={bentoLayout[i]}>
                <li className="h-full list-none">
                  <article
                    className={cn(
                      "group relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-charcoal-elevated/90 p-6 transition-[border-color,box-shadow,transform] hover:-translate-y-1 sm:p-7",
                      isWide && "sm:min-h-[180px]",
                      i % 3 === 0 && "hover:border-accent/40 hover:shadow-glow",
                      i % 3 === 1 && "hover:border-accent-warm/40 hover:shadow-glow-warm",
                      i % 3 === 2 && "hover:border-flair/40 hover:shadow-glow-mixed",
                    )}
                  >
                    <span
                      className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl leading-none text-outline-white opacity-40 transition-opacity group-hover:opacity-70"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10 flex flex-1 flex-col">
                      <div
                        className={cn(
                          "mb-4 inline-flex size-11 w-fit items-center justify-center rounded-xl border",
                          i % 3 === 0 && "border-accent/30 bg-accent/10 text-accent",
                          i % 3 === 1 &&
                            "border-accent-warm/30 bg-accent-warm/10 text-accent-warm",
                          i % 3 === 2 && "border-flair/30 bg-flair/10 text-flair",
                        )}
                      >
                        <Icon className="size-5" aria-hidden />
                      </div>
                      <h3 className="font-display text-2xl tracking-wide text-surface-foreground sm:text-3xl">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-surface-muted sm:text-base">
                        {pillar.summary}
                      </p>
                    </div>

                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-warm/5 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                  </article>
                </li>
              </RevealOnScroll>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
