import type { Metadata } from "next";
import Image from "next/image";
import { profile } from "@/data/profile";
import { PageHero, PageSection } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "My Story",
  description:
    "The story of Cherrell Woodley — Relly Habibi. Producer, cultural amplification specialist, and founder of PHRESH UNDER PRESSURE.",
};

export default function MyStoryPage() {
  return (
    <main id="main" className="flex-1">
      <PageHero
        eyebrow="My Story"
        headline={`Hi, I'm ${profile.brandName}.`}
        subheadline={profile.rolesLine}
      />

      <PageSection>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
          <div className="relative mx-auto w-full max-w-xs lg:mx-0">
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <div className="relative aspect-[4/5]">
                <Image
                  src={profile.heroPortraitImageUrl}
                  alt={`${profile.legalName}, ${profile.brandName}`}
                  fill
                  sizes="320px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="relative pl-0 sm:pl-8">
            <div
              className="absolute left-0 top-2 bottom-2 hidden w-px bg-border sm:block"
              aria-hidden
            />
            <div className="space-y-6 text-base leading-relaxed text-surface-muted sm:text-lg [&>p:first-of-type]:text-surface-foreground [&>p:first-of-type]:font-medium">
              {profile.aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection bordered={false} className="bg-surface">
        <h2 className="font-display text-2xl tracking-wide text-surface-foreground sm:text-3xl">
          Recognition &amp; highlights
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {profile.highlights.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-border bg-charcoal-elevated px-5 py-4 text-sm text-surface-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </PageSection>
    </main>
  );
}
