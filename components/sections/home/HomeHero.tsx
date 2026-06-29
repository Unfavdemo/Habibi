import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";

export function HomeHero() {
  return (
    <section className="border-b border-border bg-charcoal" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">
            {profile.rolesLine}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-display text-4xl leading-tight tracking-wide text-surface-foreground sm:text-5xl lg:text-6xl"
          >
            {profile.tagline}
          </h1>
          <p className="mt-6 text-lg text-surface-muted">
            {profile.legalName} · {profile.brandName}
          </p>
          <Link
            href="/my-story"
            className="mt-8 inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Read my story
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
            <div className="relative aspect-[4/5]">
              <Image
                src={profile.heroPortraitImageUrl}
                alt={`${profile.legalName}, known as ${profile.brandName} — producer and cultural amplification specialist.`}
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
