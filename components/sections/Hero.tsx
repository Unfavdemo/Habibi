"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";
import { MagneticButton } from "@/components/layout/MagneticButton";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden border-b border-white/10"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 mesh-backdrop opacity-90" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 85% 55% at 72% -18%, var(--color-accent), transparent 55%), radial-gradient(ellipse 65% 45% at -5% 108%, var(--color-accent-warm), transparent 50%), radial-gradient(ellipse 50% 35% at 95% 88%, var(--color-flair), transparent 55%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={container}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          >
            {profile.legalName}
          </motion.p>
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="font-display text-4xl font-bold tracking-tight text-gradient-brand sm:text-5xl lg:text-6xl"
          >
            {profile.brandName}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-lg text-surface-muted sm:text-xl"
          >
            {profile.tagline}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-2 text-sm text-surface-muted"
          >
            {profile.rolesLine}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
          >
            <MagneticButton
              href="#contact"
              className={cn(
                "inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-charcoal shadow-glow transition-[box-shadow,transform] hover:shadow-[0_0_56px_-8px_var(--color-accent-glow)]",
              )}
            >
              Get in touch
            </MagneticButton>
            <div className="flex flex-1 flex-wrap justify-center gap-3 sm:justify-start">
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-charcoal-elevated px-5 text-sm font-medium text-surface-foreground transition-colors hover:border-accent/40 hover:text-accent sm:flex-none"
              >
                <Linkedin className="size-4 shrink-0" aria-hidden />
                LinkedIn
                <ArrowUpRight className="size-4 opacity-60" aria-hidden />
              </Link>
              <Link
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-charcoal-elevated px-5 text-sm font-medium text-surface-foreground transition-colors hover:border-accent-warm/50 hover:text-accent-warm sm:flex-none"
              >
                <Instagram className="size-4 shrink-0" aria-hidden />
                Instagram
                <ArrowUpRight className="size-4 opacity-60" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
            delay: 0.1,
          }}
        >
          <div className="rounded-3xl bg-gradient-to-br from-accent/45 via-accent-warm/20 to-flair/35 p-px shadow-glow-mixed">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] border border-white/10 bg-charcoal-elevated">
              <Image
                src={profile.heroPortraitImageUrl}
                alt="Cherrell Woodley, known professionally as Relly Habibi — producer and cultural amplification specialist."
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="object-cover object-top"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/90 via-accent/5 to-transparent"
                aria-hidden
              />
              <p className="absolute bottom-4 left-4 right-4 text-center text-xs text-surface-muted">
                At work across media, conferences, fashion, and cultural storytelling.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
