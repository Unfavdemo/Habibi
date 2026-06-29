import { speaking } from "@/data/services";

export function SpeakingPartnerships() {
  return (
    <section aria-labelledby="speaking-heading">
      <h2
        id="speaking-heading"
        className="font-display text-3xl tracking-wide text-surface-foreground sm:text-4xl"
      >
        {speaking.headline}
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-surface-muted">{speaking.intro}</p>
      <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-accent">
        Available for:
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {speaking.offerings.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-surface-foreground"
          >
            <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent-warm" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-surface-muted">{speaking.inquiryNote}</p>
    </section>
  );
}
