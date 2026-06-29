import Link from "next/link";
import { phresh } from "@/data/phresh";
import { profile } from "@/data/profile";

export function HomeCTA() {
  return (
    <section className="bg-surface" aria-labelledby="home-cta-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="rounded-2xl border border-border bg-charcoal-elevated p-8 text-center sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {phresh.brandName}
            {phresh.trademark}
          </p>
          <h2
            id="home-cta-heading"
            className="mt-3 font-display text-3xl tracking-wide text-surface-foreground sm:text-4xl"
          >
            Keep it phresh
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-surface-muted">
            {phresh.intro[0]} {phresh.tagline}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/keep-it-phresh"
              className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Come inside
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-semibold text-surface-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Holla at me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
