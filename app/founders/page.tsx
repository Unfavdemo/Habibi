import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { founders, foundersPage } from "@/data/founders";
import { profile } from "@/data/profile";
import { PageHero, PageSection } from "@/components/layout/PageHero";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Founders",
  description:
    "Meet the founders of PHRESH UNDER PRESSURE — Cherrell Woodley (Relly Habibi), producer and cultural amplification specialist building a platform for underrepresented creatives.",
};

export default function FoundersPage() {
  const founder = founders[0];

  return (
    <main id="main" className="flex-1">
      <PageHero
        eyebrow={foundersPage.eyebrow}
        headline={foundersPage.headline}
        subheadline={foundersPage.subheadline}
        watermark="01"
      />

      <PageSection>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-start lg:gap-16">
          <RevealOnScroll direction="left">
            <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/25 via-transparent to-accent-warm/25 blur-xl"
                aria-hidden
              />
              <div className="corner-brackets relative rounded-3xl border border-accent/20 bg-charcoal-elevated p-1 shadow-pressure">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-white/10">
                  <Image
                    src={founder.imageUrl}
                    alt={`${founder.name}, known as ${founder.alias} — founder of PHRESH UNDER PRESSURE.`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 380px, 90vw"
                    className="object-cover object-top"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-accent/5"
                    aria-hidden
                  />
                </div>
              </div>

              <p
                className="absolute -bottom-6 -left-4 font-display text-7xl text-outline sm:text-8xl"
                aria-hidden
              >
                PUP
              </p>

              <ul className="relative z-10 mt-10 flex flex-wrap gap-2">
                {founder.roles.map((role, i) => (
                  <li
                    key={role}
                    className={cn(
                      "rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wide",
                      i % 3 === 0 && "border-accent/35 bg-accent/10 text-accent",
                      i % 3 === 1 &&
                        "border-accent-warm/35 bg-accent-warm/10 text-accent-warm",
                      i % 3 === 2 && "border-flair/35 bg-flair/10 text-flair",
                    )}
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                {founder.title}
              </p>
              <h2 className="mt-2 font-display text-5xl tracking-wide text-surface-foreground sm:text-6xl">
                {founder.name}
              </h2>
              <p className="mt-1 font-display text-3xl tracking-wide text-gradient-phresh">
                {founder.alias}
              </p>
              <p className="mt-4 text-lg text-surface-muted">{founder.tagline}</p>

              <blockquote className="mt-8 border-l-2 border-accent-warm pl-5">
                <p className="font-display text-xl leading-snug tracking-wide text-surface-foreground sm:text-2xl">
                  &ldquo;Instead of shrinking, I chose to build my own lane — pouring
                  talent into storytelling that centers people like me.&rdquo;
                </p>
              </blockquote>

              <ul className="mt-8 flex flex-wrap gap-3">
                <li>
                  <Link
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-surface-foreground transition-colors hover:border-flair/50 hover:text-flair"
                  >
                    <Linkedin className="size-4" aria-hidden />
                    LinkedIn
                    <ArrowUpRight className="size-3.5 opacity-60" aria-hidden />
                  </Link>
                </li>
                <li>
                  <Link
                    href={profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-surface-foreground transition-colors hover:border-accent-warm/50 hover:text-accent-warm"
                  >
                    <Instagram className="size-4" aria-hidden />
                    Instagram
                    <ArrowUpRight className="size-3.5 opacity-60" aria-hidden />
                  </Link>
                </li>
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-surface-foreground transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <Mail className="size-4" aria-hidden />
                    Email
                  </a>
                </li>
              </ul>

              <div className="relative mt-10 pl-6 sm:pl-9">
                <div
                  className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-accent via-accent-warm to-flair sm:w-1.5"
                  aria-hidden
                />
                <div className="space-y-6 text-base leading-relaxed text-surface-muted sm:text-lg [&>p:first-of-type]:font-medium [&>p:first-of-type]:text-surface-foreground">
                  {founder.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </PageSection>

      <PageSection className="mesh-backdrop-soft">
        <RevealOnScroll>
          <h2 className="font-display text-3xl tracking-wide text-surface-foreground sm:text-4xl">
            Highlights & recognition
          </h2>
        </RevealOnScroll>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {founder.highlights.map((highlight, i) => (
            <RevealOnScroll key={highlight} delay={i * 0.05}>
              <li className="flex gap-4 rounded-xl border border-white/10 bg-charcoal-elevated/70 px-5 py-4 transition-[border-color,transform] hover:-translate-y-0.5 hover:border-accent-warm/30">
                <span className="font-display text-3xl text-accent-warm/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-surface-muted sm:text-base">
                  {highlight}
                </p>
              </li>
            </RevealOnScroll>
          ))}
        </ul>
      </PageSection>

      <PageSection bordered={false}>
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-charcoal-elevated/80 p-8 sm:p-12">
            <p
              className="pointer-events-none absolute right-4 top-4 font-display text-[clamp(4rem,12vw,8rem)] leading-none text-outline-warm opacity-40"
              aria-hidden
            >
              WHY
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-warm">
              Why PUP exists
            </p>
            <p className="relative z-10 mt-4 max-w-3xl text-xl leading-relaxed text-surface-foreground sm:text-2xl">
              Cherrell built PHRESH UNDER PRESSURE because she lived the freelance
              journey — the bias, the gatekeeping, the invisible ceilings — and
              chose to build a lane instead of shrinking.
            </p>
            <p className="relative z-10 mt-4 max-w-2xl text-surface-muted">
              PUP is that lane, opened up for every creative who&apos;s ready to build
              under pressure and stay PHRESH.
            </p>
            <div className="relative z-10 mt-8 flex flex-wrap gap-4">
              <Link
                href="/who-we-are"
                className="inline-flex h-11 items-center rounded-full border border-white/20 bg-charcoal px-6 text-sm font-semibold text-surface-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                Who we are
              </Link>
              <Link
                href="/#contact"
                className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-bold uppercase tracking-wider text-charcoal shadow-glow"
              >
                Get in touch
              </Link>
            </div>
            <p className="relative z-10 mt-10 font-display text-4xl tracking-wide text-gradient-phresh">
              {profile.mantra}
            </p>
          </div>
        </RevealOnScroll>
      </PageSection>
    </main>
  );
}
