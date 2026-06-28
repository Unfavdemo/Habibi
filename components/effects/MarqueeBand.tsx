import { cn } from "@/lib/utils";

type MarqueeBandProps = {
  items: readonly string[];
  reverse?: boolean;
  className?: string;
  accent?: "green" | "orange" | "mixed";
};

export function MarqueeBand({
  items,
  reverse = false,
  className,
  accent = "mixed",
}: MarqueeBandProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-white/10 bg-charcoal-elevated/50 py-3",
        className,
      )}
      aria-hidden
    >
      <div
        className={cn(
          "flex whitespace-nowrap",
          reverse ? "animate-marquee-right" : "animate-marquee-left",
          "motion-reduce:animate-none",
        )}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={cn(
              "mx-8 font-display text-2xl tracking-[0.15em] sm:text-3xl",
              accent === "green" && "text-accent/25",
              accent === "orange" && "text-accent-warm/25",
              accent === "mixed" &&
                (i % 2 === 0 ? "text-accent/20" : "text-accent-warm/20"),
            )}
          >
            {item}
            <span className="mx-8 text-flair/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

type GiantDividerProps = {
  text: string;
  className?: string;
};

export function GiantDivider({ text, className }: GiantDividerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-white/10 py-6 sm:py-10",
        className,
      )}
      aria-hidden
    >
      <div className="animate-marquee-left flex whitespace-nowrap motion-reduce:animate-none">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="mx-4 font-display text-[clamp(3rem,12vw,8rem)] leading-none tracking-wider text-outline sm:mx-8"
          >
            {text}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-charcoal" />
    </div>
  );
}
