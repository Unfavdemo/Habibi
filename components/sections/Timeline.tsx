import { timeline } from "@/data/timeline";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <section
      id="timeline"
      className="relative scroll-mt-20 overflow-hidden border-b border-white/10"
      aria-labelledby="timeline-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          The Journey
        </p>
        <h2
          id="timeline-heading"
          className="mt-2 font-display text-4xl tracking-wide text-gradient-brand sm:text-5xl"
        >
          Pressure to platform
        </h2>
        <p className="mt-3 max-w-2xl text-surface-muted">
          From building lanes in corporate spaces to launching a movement for
          underrepresented freelancers — the path that led to PHRESH UNDER PRESSURE.
        </p>

        <div className="relative mt-12 pl-8 sm:pl-10">
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-warm to-flair sm:left-[13px]"
            aria-hidden
          />
          <ol className="relative space-y-10">
            {timeline.map((entry, i) => (
              <li key={entry.id} className="relative">
                <span
                  className={cn(
                    "absolute -left-[34px] top-1 size-3.5 rounded-full border-2 bg-charcoal shadow-[0_0_12px_-2px] sm:-left-[41px]",
                    i % 3 === 0 && "border-accent shadow-accent/50",
                    i % 3 === 1 && "border-accent-warm shadow-accent-warm/50",
                    i % 3 === 2 && "border-flair shadow-flair/40",
                  )}
                  aria-hidden
                />
                <p
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-[0.2em]",
                    i % 3 === 0 && "text-accent",
                    i % 3 === 1 && "text-accent-warm",
                    i % 3 === 2 && "text-flair",
                  )}
                >
                  {entry.period}
                </p>
                <h3 className="mt-1 font-display text-xl tracking-wide text-surface-foreground">
                  {entry.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-surface-muted sm:text-base">
                  {entry.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
