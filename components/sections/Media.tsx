import Link from "next/link";
import { ArrowUpRight, Instagram, Play, Youtube } from "lucide-react";
import { profile } from "@/data/profile";

const contentHighlights = [
  {
    title: "Freelancer stories",
    description: "Real journeys from creatives building under pressure — the wins, the lessons, the receipts.",
    tag: "YouTube",
  },
  {
    title: "Business & invoices",
    description: "Practical tools for getting paid, setting rates, and running your creative business with confidence.",
    tag: "Resources",
  },
  {
    title: "Culture drops",
    description: "Daily inspiration, community highlights, and cultural moments on @phreshunderpressure.",
    tag: "Instagram",
  },
  {
    title: "Industry insider",
    description: "A decade of production, events, and cultural work — knowledge shared so you don't have to figure it out alone.",
    tag: "Strategy",
  },
];

export function Media() {
  return (
    <section
      id="media"
      className="relative scroll-mt-20 overflow-hidden border-b border-white/10"
      aria-labelledby="media-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 mesh-backdrop opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-warm/8 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-warm">
          Content & Media
        </p>
        <h2
          id="media-heading"
          className="mt-2 font-display text-4xl tracking-wide text-gradient-brand sm:text-5xl"
        >
          Tune in. Stay PHRESH.
        </h2>
        <p className="mt-3 max-w-2xl text-surface-muted">
          Follow along on YouTube and Instagram for content built for freelancers
          who move with purpose — education, culture, and community in every drop.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* YouTube card */}
          <Link
            href={profile.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-accent-warm/25 bg-gradient-to-br from-accent-warm/10 via-charcoal-elevated to-charcoal-elevated p-8 transition-[border-color,box-shadow,transform] hover:border-accent-warm/50 hover:shadow-glow-warm motion-safe:hover:-translate-y-1"
          >
            <div className="flex items-start justify-between">
              <div className="inline-flex size-14 items-center justify-center rounded-2xl border border-accent-warm/30 bg-accent-warm/15">
                <Youtube className="size-7 text-accent-warm" aria-hidden />
              </div>
              <ArrowUpRight className="size-5 text-surface-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-warm" aria-hidden />
            </div>
            <h3 className="mt-6 font-display text-3xl tracking-wide text-surface-foreground">
              PHRESH UNDER PRESSURE
            </h3>
            <p className="mt-2 text-sm text-surface-muted">YouTube Channel</p>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-surface-muted">
              Long-form content, freelancer stories, and cultural programming —
              subscribe and build with us.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-warm px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-charcoal">
              <Play className="size-4 fill-charcoal" aria-hidden />
              Subscribe
            </span>
            <div
              className="pointer-events-none absolute -bottom-12 -right-12 size-48 rounded-full bg-accent-warm/10 blur-3xl transition-opacity group-hover:opacity-100"
              aria-hidden
            />
          </Link>

          {/* Instagram card */}
          <Link
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-flair/25 bg-gradient-to-br from-flair/10 via-charcoal-elevated to-charcoal-elevated p-8 transition-[border-color,box-shadow,transform] hover:border-flair/50 hover:shadow-glow-mixed motion-safe:hover:-translate-y-1"
          >
            <div className="flex items-start justify-between">
              <div className="inline-flex size-14 items-center justify-center rounded-2xl border border-flair/30 bg-flair/15">
                <Instagram className="size-7 text-flair" aria-hidden />
              </div>
              <ArrowUpRight className="size-5 text-surface-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-flair" aria-hidden />
            </div>
            <h3 className="mt-6 font-display text-3xl tracking-wide text-surface-foreground">
              @phreshunderpressure
            </h3>
            <p className="mt-2 text-sm text-surface-muted">Instagram</p>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-surface-muted">
              Daily culture drops, community highlights, and behind-the-scenes
              from the movement — follow and stay connected.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-flair/40 bg-flair/10 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-flair">
              <Instagram className="size-4" aria-hidden />
              Follow
            </span>
            <div
              className="pointer-events-none absolute -bottom-12 -right-12 size-48 rounded-full bg-flair/10 blur-3xl transition-opacity group-hover:opacity-100"
              aria-hidden
            />
          </Link>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contentHighlights.map((item, i) => (
            <li
              key={item.title}
              className="rounded-2xl border border-white/10 bg-charcoal-elevated/70 p-5"
            >
              <span
                className={
                  i % 2 === 0
                    ? "font-mono text-[10px] uppercase tracking-[0.2em] text-accent"
                    : "font-mono text-[10px] uppercase tracking-[0.2em] text-accent-warm"
                }
              >
                {item.tag}
              </span>
              <h4 className="mt-2 font-display text-lg tracking-wide text-surface-foreground">
                {item.title}
              </h4>
              <p className="mt-2 text-sm text-surface-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
