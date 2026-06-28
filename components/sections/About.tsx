import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
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
      <p
        className="pointer-events-none absolute left-4 top-12 select-none font-display text-[clamp(4rem,12vw,9rem)] leading-none text-outline-white opacity-40 lg:left-8"
        aria-hidden
      >
        MISSION
      </p>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            The Mission
          </p>
          <h2
            id="about-heading"
            className="mt-2 max-w-2xl font-display text-4xl tracking-wide text-gradient-brand sm:text-5xl lg:text-6xl"
          >
            Built for creatives who build under pressure
          </h2>
          <p className="mt-3 max-w-2xl text-surface-muted">{profile.rolesLine}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="relative mt-10 pl-6 sm:pl-9">
            <div
              className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-accent via-accent-warm to-flair sm:w-1.5"
              aria-hidden
            />
            <div className="space-y-6 text-base leading-relaxed text-surface-muted sm:text-lg [&>p:first-of-type]:text-xl [&>p:first-of-type]:font-medium [&>p:first-of-type]:text-surface-foreground">
              {profile.aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-14">
          <RevealOnScroll>
            <h3 className="font-display text-2xl tracking-wide text-surface-foreground sm:text-3xl">
              What we do
            </h3>
          </RevealOnScroll>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {profile.serviceGroups.map((group, i) => (
              <RevealOnScroll key={group.title} delay={i * 0.08}>
                <li className="group h-full list-none rounded-2xl border border-white/10 bg-charcoal-elevated/80 p-6 shadow-sm transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-accent/35 hover:shadow-glow sm:p-7">
                  <p
                    className={
                      i % 3 === 0
                        ? "font-display text-xl tracking-wide text-accent"
                        : i % 3 === 1
                          ? "font-display text-xl tracking-wide text-accent-warm"
                          : "font-display text-xl tracking-wide text-flair"
                    }
                  >
                    {group.title}
                  </p>
                  <ul className="mt-4 list-none space-y-2.5 text-sm text-surface-muted">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent/60"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              </RevealOnScroll>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
