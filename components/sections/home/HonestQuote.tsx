import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export function HonestQuote() {
  return (
    <section className="border-b border-border bg-surface" aria-label="Personal note">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="font-accent text-3xl italic leading-snug text-surface-foreground sm:text-4xl lg:text-5xl">
            &ldquo;{profile.honestQuote}&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}
