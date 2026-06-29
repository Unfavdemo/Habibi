import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  headline,
  subheadline,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("border-b border-border bg-charcoal", className)}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-surface-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          Home
        </Link>
        {eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 max-w-3xl font-display text-4xl tracking-wide text-surface-foreground sm:text-5xl lg:text-6xl">
          {headline}
        </h1>
        {subheadline ? (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-surface-muted">
            {subheadline}
          </p>
        ) : null}
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
      className={cn(bordered && "border-b border-border", className)}
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        {children}
      </div>
    </section>
  );
}
