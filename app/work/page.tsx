import type { Metadata } from "next";
import { WorkGrid } from "@/components/sections/work/WorkGrid";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Collaborations and portfolio work from Relly Habibi — YouTube, Recording Academy, IMEX, Miami Swim Week, and more.",
};

export default function WorkPage() {
  return (
    <main id="main" className="flex-1">
      <PageHero
        eyebrow="Work"
        headline="Brands & institutions"
        subheadline="Partners and platforms spanning media, conferences, fashion, civic programming, and cultural storytelling."
      />
      <WorkGrid />
    </main>
  );
}
