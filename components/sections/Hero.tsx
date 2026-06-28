"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Instagram, Play, Youtube, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { MarqueeBand } from "@/components/effects/MarqueeBand";
import { PressureGauge } from "@/components/effects/PressureGauge";
import { MagneticButton } from "@/components/layout/MagneticButton";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const marqueeItems = [
  "STAY PHRESH",
  "1 INVOICE AT A TIME",
  "1 VISION AT A TIME",
  "UNDER PRESSURE",
  "FOR THE CULTURE",
  "BUILD YOUR LANE",
];

const floatingStats = [
  { label: "10+ yrs", sub: "In the culture" },
  { label: "1 vision", sub: "At a time" },
  { label: "∞", sub: "Pressure applied" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const animate = mounted && !reduceMotion;

  return (
    <section
      className="relative min-h-[92vh] overflow-hidden border-b border-white/10"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 pressure-grid opacity-60" aria-hidden />
      <div className="pointer-events-none absolute inset-0 mesh-backdrop opacity-90" aria-hidden />

      {/* Giant watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        aria-hidden
      >
        <p className="select-none font-display text-[clamp(8rem,28vw,22rem)] leading-none tracking-wider text-outline-white opacity-80">
          PUP
        </p>
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, var(--color-accent), transparent 60%), radial-gradient(ellipse 60% 40% at 100% 80%, var(--color-accent-warm), transparent 50%)",
        }}
      />

      <MarqueeBand items={marqueeItems} accent="green" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={container}
          initial={animate ? "hidden" : false}
          whileInView={animate ? "show" : undefined}
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="mb-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              <Zap className="size-3 fill-accent" aria-hidden />
              {profile.mantra}
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-surface-muted sm:inline">
              {profile.rolesLine}
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="font-display leading-[0.85] tracking-wide"
          >
            <span className="block text-6xl text-gradient-phresh sm:text-7xl lg:text-[5.5rem]">
              PHRESH
            </span>
            <span className="mt-1 block text-5xl text-surface-foreground sm:text-6xl lg:text-[4.5rem]">
              UNDER
            </span>
            <span className="glitch-text mt-1 block text-6xl text-gradient-pressure sm:text-7xl lg:text-[5.5rem]">
              PRESSURE
              <span className="align-super text-2xl text-accent-warm sm:text-3xl">
                {profile.trademark}
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-lg leading-relaxed text-surface-muted sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.ul
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            {floatingStats.map((stat, i) => (
              <li
                key={stat.label}
                className={cn(
                  "rounded-xl border px-4 py-2.5 text-center backdrop-blur-sm",
                  i === 0 && "border-accent/25 bg-accent/5",
                  i === 1 && "border-accent-warm/25 bg-accent-warm/5",
                  i === 2 && "border-flair/25 bg-flair/5",
                )}
              >
                <p
                  className={cn(
                    "font-display text-xl tracking-wide",
                    i === 0 && "text-accent",
                    i === 1 && "text-accent-warm",
                    i === 2 && "text-flair",
                  )}
                >
                  {stat.label}
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-surface-muted">
                  {stat.sub}
                </p>
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
          >
            <MagneticButton
              href={profile.youtube}
              className={cn(
                "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-bold uppercase tracking-wider text-charcoal shadow-glow transition-[box-shadow,transform] hover:shadow-[0_0_56px_-8px_var(--color-accent-glow)]",
              )}
            >
              <Play className="size-4 fill-charcoal" aria-hidden />
              Watch on YouTube
            </MagneticButton>
            <Link
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-charcoal-elevated/80 px-6 text-sm font-semibold text-surface-foreground backdrop-blur-sm transition-colors hover:border-flair/50 hover:text-flair sm:flex-none"
            >
              <Instagram className="size-4 shrink-0" aria-hidden />
              @phreshunderpressure
              <ArrowUpRight className="size-4 opacity-60" aria-hidden />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
            <MagneticButton
              href="#contact"
              className="text-sm font-medium text-accent underline-offset-4 transition-colors hover:text-accent-deep hover:underline"
            >
              Join the community →
            </MagneticButton>
            <Link
              href="/who-we-are"
              className="text-sm font-medium text-surface-muted underline-offset-4 transition-colors hover:text-accent-warm hover:underline"
            >
              Who we are
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          initial={animate ? { opacity: 0, y: 28 } : false}
          whileInView={animate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
            delay: 0.1,
          }}
        >
          <PressureGauge className="absolute -left-2 top-8 z-20 w-52 sm:-left-6 lg:-left-8 float-slow motion-reduce:animate-none" />

          <div className="relative mt-16 lg:mt-0">
            <div
              className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/30 via-transparent to-accent-warm/30 blur-xl"
              aria-hidden
            />
            <div className="corner-brackets relative rounded-3xl border border-accent/20 bg-charcoal-elevated p-1 shadow-pressure">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-white/10">
                <Image
                  src={profile.heroPortraitImageUrl}
                  alt={`${profile.founder}, founder of PHRESH UNDER PRESSURE — freelancer community and cultural platform for underrepresented creatives.`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  className="object-cover object-top"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-accent/5"
                  aria-hidden
                />
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-charcoal/80 p-4 backdrop-blur-sm">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    Founder
                  </p>
                  <p className="mt-1 font-display text-xl tracking-wide text-surface-foreground">
                    {profile.founder}
                  </p>
                  <p className="text-sm text-surface-muted">{profile.founderAlias}</p>
                </div>
              </div>
            </div>

            <Link
              href={profile.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -right-2 -top-2 flex size-16 items-center justify-center rounded-full border border-accent-warm/40 bg-charcoal-elevated shadow-glow-warm transition-transform hover:scale-110 sm:-right-4 sm:-top-4 sm:size-20"
              aria-label="Watch PHRESH UNDER PRESSURE on YouTube"
            >
              <Youtube className="size-7 text-accent-warm sm:size-8" aria-hidden />
            </Link>

            <p
              className="absolute -bottom-4 -right-2 hidden font-display text-6xl text-outline sm:block lg:-right-8 lg:text-8xl"
              aria-hidden
            >
              PUP
            </p>
          </div>
        </motion.div>
      </div>

      <MarqueeBand items={marqueeItems} reverse accent="orange" />
    </section>
  );
}
