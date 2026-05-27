import { profile } from "@/data/profile";

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden border-b border-white/10"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 mesh-backdrop-soft opacity-70"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          About
        </p>
        <h2
          id="about-heading"
          className="mt-2 font-display text-3xl font-bold tracking-tight text-gradient-brand sm:text-4xl"
        >
          Relly Habibi
        </h2>
        <p className="mt-3 max-w-2xl text-surface-muted">{profile.rolesLine}</p>

        <div className="relative mt-10 pl-6 sm:pl-9">
          <div
            className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-accent via-accent-warm to-flair sm:w-1.5"
            aria-hidden
          />
          <div className="space-y-6 text-base leading-relaxed text-surface-muted sm:text-lg [&>p:first-of-type]:font-medium [&>p:first-of-type]:text-surface-foreground">
            {profile.aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="font-display text-xl font-semibold text-surface-foreground">
            Services
          </h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {profile.serviceGroups.map((group, i) => (
              <li
                key={group.title}
                className="rounded-2xl border border-white/10 bg-charcoal-elevated/80 p-6 shadow-sm transition-[border-color,box-shadow] hover:border-accent/35 hover:shadow-glow sm:p-7"
              >
                <p
                  className={
                    i % 3 === 0
                      ? "font-medium text-accent"
                      : i % 3 === 1
                        ? "font-medium text-accent-warm"
                        : "font-medium text-flair"
                  }
                >
                  {group.title}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-muted marker:text-accent/70">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
