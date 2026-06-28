import type { Metadata } from "next";
import Link from "next/link";
import { BeliefScroll } from "@/components/effects/BeliefScroll";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { whoWeAre } from "@/data/who-we-are";
import { profile, platformPillars } from "@/data/profile";
import { PageHero, PageSection } from "@/components/layout/PageHero";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "PHRESH UNDER PRESSURE is a freelancer community and cultural platform for underrepresented creatives. Learn our mission, values, and who we serve.",
};

export default function WhoWeArePage() {
  return (
    <main id="main" className="flex-1">
      <PageHero
        eyebrow={whoWeAre.eyebrow}
        headline={whoWeAre.headline}
        subheadline={whoWeAre.subheadline}
        watermark="WE"
      />

      <PageSection>
        <RevealOnScroll>
          <blockquote className="relative border-l-4 border-accent pl-6 sm:pl-10">
            <p className="font-display text-2xl leading-snug tracking-wide text-surface-foreground sm:text-3xl lg:text-4xl">
              &ldquo;{whoWeAre.intro}&rdquo;
            </p>
            <footer className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              — The PHRESH manifesto
            </footer>
          </blockquote>
        </RevealOnScroll>
      </PageSection>

      <PageSection className="mesh-backdrop-soft">
        <BeliefScroll beliefs={whoWeAre.beliefs} />
      </PageSection>

      <PageSection>
        <RevealOnScroll>
          <h2 className="font-display text-3xl tracking-wide text-surface-foreground sm:text-4xl">
            Who we serve
          </h2>
          <p className="mt-3 max-w-2xl text-surface-muted">
            PUP is for creatives who&apos;ve been told to wait their turn — and decided
            to build their own lane instead.
          </p>
        </RevealOnScroll>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {whoWeAre.whoWeServe.map((item, i) => (
            <RevealOnScroll key={item} delay={i * 0.05}>
              <li className="group relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal-elevated/60 p-5 transition-[border-color,transform] hover:-translate-y-0.5 hover:border-accent/30">
                <span
                  className="font-display text-5xl text-outline opacity-50 transition-opacity group-hover:opacity-80"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="relative z-10 mt-2 text-base leading-relaxed text-surface-muted">
                  {item}
                </p>
              </li>
            </RevealOnScroll>
          ))}
        </ul>
      </PageSection>

      <PageSection className="mesh-backdrop-soft">
        <RevealOnScroll>
          <h2 className="font-display text-3xl tracking-wide text-surface-foreground sm:text-4xl">
            How we show up
          </h2>
        </RevealOnScroll>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {whoWeAre.howWeShowUp.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 0.08}>
              <li className="group relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal-elevated/80 p-6 transition-[border-color,box-shadow] hover:border-accent/35 hover:shadow-glow sm:p-7">
                <p
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-[0.25em]",
                    i % 2 === 0 ? "text-flair" : "text-accent",
                  )}
                >
                  0{i + 1} — {item.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-surface-muted sm:text-base">
                  {item.description}
                </p>
                <div
                  className="pointer-events-none absolute -bottom-8 -right-4 font-display text-8xl text-outline-white opacity-0 transition-opacity group-hover:opacity-40"
                  aria-hidden
                >
                  {item.title[0]}
                </div>
              </li>
            </RevealOnScroll>
          ))}
        </ul>
      </PageSection>

      <PageSection>
        <RevealOnScroll>
          <h2 className="font-display text-3xl tracking-wide text-surface-foreground sm:text-4xl">
            The platform pillars
          </h2>
        </RevealOnScroll>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {platformPillars.map((pillar, i) => (
            <RevealOnScroll key={pillar.id} delay={i * 0.04}>
              <li className="rounded-xl border border-white/10 bg-charcoal-elevated/50 px-5 py-4 transition-colors hover:border-accent/30">
                <p className="font-display text-xl tracking-wide text-accent">
                  {pillar.title}
                </p>
                <p className="mt-2 text-sm text-surface-muted">{pillar.summary}</p>
              </li>
            </RevealOnScroll>
          ))}
        </ul>
      </PageSection>

      <PageSection bordered={false}>
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-charcoal-elevated to-accent-warm/10 p-8 sm:p-12">
            <p
              className="pointer-events-none absolute -right-4 top-4 font-display text-[8rem] leading-none text-outline opacity-30"
              aria-hidden
            >
              PUP
            </p>
            <p className="relative z-10 max-w-3xl text-lg leading-relaxed text-surface-foreground sm:text-xl">
              {whoWeAre.closingStatement}
            </p>
            <div className="relative z-10 mt-8 flex flex-wrap gap-4">
              <Link
                href="/founders"
                className="inline-flex h-11 items-center rounded-full border border-white/20 bg-charcoal-elevated px-6 text-sm font-semibold text-surface-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                Meet the founders
              </Link>
              <Link
                href="/#contact"
                className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-bold uppercase tracking-wider text-charcoal shadow-glow transition-[box-shadow] hover:shadow-[0_0_48px_-8px_var(--color-accent-glow)]"
              >
                Join the movement
              </Link>
            </div>
            <p className="relative z-10 mt-8 font-display text-3xl tracking-wide text-gradient-phresh sm:text-4xl">
              {profile.mantra}
            </p>
          </div>
        </RevealOnScroll>
      </PageSection>
    </main>
  );
}
