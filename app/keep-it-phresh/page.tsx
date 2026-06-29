import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { ArrowUpRight, Instagram, Play, Youtube } from "lucide-react";
import { SceneEffects } from "@/components/effects/SceneEffects";
import { profile } from "@/data/profile";
import { phresh, contentHighlights } from "@/data/phresh";

export const metadata: Metadata = {
  title: "Keep it phresh",
  description:
    "PHRESH UNDER PRESSURE — freelancer community and culture platform for underrepresented creatives. Stay PHRESH.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function KeepItPhreshPage() {
  return (
    <div data-theme="phresh" className="flex-1 bg-charcoal text-surface-foreground">
      <SceneEffects />
      <main id="main">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute inset-0 mesh-backdrop opacity-80" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-warm">
              {phresh.brandName}
              {phresh.trademark}
            </p>
            <h1 className="mt-3 font-display text-5xl tracking-wide text-gradient-phresh sm:text-6xl lg:text-7xl">
              Keep it phresh
            </h1>
            <p className="mt-4 text-lg font-medium text-surface-foreground">
              {phresh.rolesLine}
            </p>
            <div className="mt-6 space-y-4 max-w-2xl text-base leading-relaxed text-surface-muted">
              {phresh.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-6 font-display text-xl tracking-wide text-accent-warm">
              {phresh.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={phresh.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-bold uppercase tracking-wider text-white"
              >
                <Play className="size-4 fill-white" aria-hidden />
                YouTube
              </Link>
              <Link
                href={phresh.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-accent-warm/50 px-6 text-sm font-semibold text-accent-warm"
              >
                <Instagram className="size-4" aria-hidden />
                @phreshunderpressure
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <h2 className="font-display text-3xl tracking-wide text-surface-foreground sm:text-4xl">
              Come inside
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-surface-muted sm:text-lg [&>p:nth-child(3)]:font-medium [&>p:nth-child(3)]:text-accent-warm [&>p:first-of-type]:font-medium [&>p:first-of-type]:text-surface-foreground">
              {phresh.manifesto.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 mesh-backdrop-soft">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <h2 className="font-display text-3xl tracking-wide text-surface-foreground">
              Tune in
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <Link
                href={phresh.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-accent/30 bg-charcoal-elevated p-8 transition-[border-color,box-shadow] hover:border-accent hover:shadow-glow"
              >
                <Youtube className="size-8 text-accent-warm" aria-hidden />
                <h3 className="mt-4 font-display text-2xl tracking-wide">YouTube</h3>
                <p className="mt-2 text-sm text-surface-muted">
                  Long-form content, freelancer stories, and cultural programming.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-warm">
                  Subscribe <ArrowUpRight className="size-4" aria-hidden />
                </span>
              </Link>
              <Link
                href={phresh.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-accent-warm/30 bg-charcoal-elevated p-8 transition-[border-color,box-shadow] hover:border-accent-warm hover:shadow-glow-warm"
              >
                <Instagram className="size-8 text-flair" aria-hidden />
                <h3 className="mt-4 font-display text-2xl tracking-wide">Instagram</h3>
                <p className="mt-2 text-sm text-surface-muted">
                  Daily culture drops and community highlights.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-flair">
                  Follow <ArrowUpRight className="size-4" aria-hidden />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <h2 className="font-display text-3xl tracking-wide text-surface-foreground">
              Things I say out loud on the internet
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {contentHighlights.map((item) => (
                <li key={item.title}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl border border-white/10 bg-charcoal-elevated p-5 transition-colors hover:border-accent/40"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                        {item.tag}
                      </p>
                      <h3 className="mt-2 font-display text-lg tracking-wide">{item.title}</h3>
                      <p className="mt-2 text-sm text-surface-muted">{item.description}</p>
                    </Link>
                  ) : (
                    <article className="rounded-xl border border-white/10 bg-charcoal-elevated p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-warm">
                        {item.tag}
                      </p>
                      <h3 className="mt-2 font-display text-lg tracking-wide">{item.title}</h3>
                      <p className="mt-2 text-sm text-surface-muted">{item.description}</p>
                    </article>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <div className="rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/15 via-charcoal-elevated to-accent-warm/10 p-8 text-center sm:p-12">
              <p className="font-display text-4xl tracking-wide text-gradient-phresh sm:text-5xl">
                {phresh.mantra}
              </p>
              <p className="mx-auto mt-4 max-w-md text-surface-muted">{phresh.tagline}</p>
              <a
                href={`mailto:${profile.email}?subject=Keep%20it%20phresh`}
                className="mt-8 inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-bold uppercase tracking-wider text-white"
              >
                Join the movement
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
