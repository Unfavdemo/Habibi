import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  watermark?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  headline,
  subheadline,
  watermark,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative min-h-[50vh] overflow-hidden border-b border-white/10",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 pressure-grid opacity-40" aria-hidden />
      <div className="pointer-events-none absolute inset-0 mesh-backdrop opacity-80" aria-hidden />

      {watermark ? (
        <div
          className="pointer-events-none absolute inset-0 flex items-end justify-center overflow-hidden pb-8"
          aria-hidden
        >
          <p className="select-none font-display text-[clamp(4rem,18vw,14rem)] leading-none tracking-wider text-outline-white">
            {watermark}
          </p>
        </div>
      ) : null}

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-charcoal-elevated/60 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-surface-muted backdrop-blur-sm transition-[border-color,color] hover:border-accent/40 hover:text-accent"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          Back home
        </Link>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl tracking-wide text-gradient-brand sm:text-5xl lg:text-7xl">
          {headline}
        </h1>
        {subheadline ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-surface-muted sm:text-xl">
            {subheadline}
          </p>
        ) : null}
        <div className="mt-8 h-px max-w-xs glow-line opacity-60" aria-hidden />
      </div>
    </section>
  );
}

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
};

export function PageSection({
  children,
  className,
  bordered = true,
}: PageSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        bordered && "border-b border-white/10",
        className,
      )}
    >
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {children}
      </div>
    </section>
  );
}
