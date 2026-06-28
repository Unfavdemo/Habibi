import Link from "next/link";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ArrowUpRight, Instagram, Mail, Phone, Youtube } from "lucide-react";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 mesh-backdrop opacity-80"
        aria-hidden
      />
      <p
        className="pointer-events-none absolute bottom-8 right-4 select-none font-display text-[clamp(5rem,14vw,10rem)] leading-none text-outline opacity-30 lg:right-8"
        aria-hidden
      >
        JOIN
      </p>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Join the Movement
          </p>
          <h2
            id="contact-heading"
            className="mt-2 max-w-2xl font-display text-4xl tracking-wide text-gradient-brand sm:text-5xl lg:text-6xl"
          >
            Ready to build under pressure?
          </h2>
          <p className="mt-3 max-w-2xl text-surface-muted">
            Whether you&apos;re a freelancer looking for community, a brand seeking
            cultural partnership, or a creative ready to share your story — reach out.
          </p>
        </RevealOnScroll>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <RevealOnScroll delay={0.05}>
            <Link
              href={profile.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center gap-4 rounded-2xl border border-accent-warm/30 bg-charcoal-elevated/90 p-6 transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-accent-warm/60 hover:shadow-glow-warm"
            >
              <div className="inline-flex size-14 shrink-0 items-center justify-center rounded-xl border border-accent-warm/30 bg-accent-warm/10">
                <Youtube className="size-7 text-accent-warm" aria-hidden />
              </div>
              <div className="flex-1">
                <p className="font-display text-xl tracking-wide text-surface-foreground">
                  Subscribe on YouTube
                </p>
                <p className="text-sm text-surface-muted">PHRESH UNDER PRESSURE</p>
              </div>
              <ArrowUpRight className="size-5 text-surface-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-warm" aria-hidden />
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <Link
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center gap-4 rounded-2xl border border-flair/30 bg-charcoal-elevated/90 p-6 transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-flair/60 hover:shadow-glow-mixed"
            >
              <div className="inline-flex size-14 shrink-0 items-center justify-center rounded-xl border border-flair/30 bg-flair/10">
                <Instagram className="size-7 text-flair" aria-hidden />
              </div>
              <div className="flex-1">
                <p className="font-display text-xl tracking-wide text-surface-foreground">
                  Follow on Instagram
                </p>
                <p className="text-sm text-surface-muted">@phreshunderpressure</p>
              </div>
              <ArrowUpRight className="size-5 text-surface-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flair" aria-hidden />
            </Link>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.15}>
          <ul className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 rounded-2xl border border-accent/30 bg-charcoal-elevated/90 px-5 py-4 text-sm font-medium text-surface-foreground shadow-sm transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-glow"
              >
                <Mail className="size-5 shrink-0 text-accent" aria-hidden />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phoneTel}`}
                className="inline-flex items-center gap-3 rounded-2xl border border-accent-warm/30 bg-charcoal-elevated/90 px-5 py-4 text-sm font-medium text-surface-foreground shadow-sm transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-accent-warm/55 hover:shadow-glow-warm"
              >
                <Phone className="size-5 shrink-0 text-accent-warm" aria-hidden />
                {profile.phoneDisplay}
              </a>
            </li>
          </ul>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="mt-12 font-display text-[clamp(2.5rem,8vw,5rem)] leading-none tracking-wide text-gradient-phresh">
            {profile.mantra}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
