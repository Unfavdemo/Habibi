import Image from "next/image";
import { CollaborationLogo3D } from "@/components/collaboration/CollaborationLogo3D";
import { ProjectLogoMarks } from "@/components/collaboration/ProjectLogoMarks";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Work() {
  return (
    <section
      id="work"
      className="relative scroll-mt-20 overflow-hidden border-b border-white/10"
      aria-labelledby="work-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 mesh-backdrop-soft opacity-50"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Collaborations
        </p>
        <h2
          id="work-heading"
          className="mt-2 font-display text-3xl font-bold tracking-tight text-gradient-brand sm:text-4xl"
        >
          Brands &amp; institutions
        </h2>
        <p className="mt-3 max-w-2xl text-surface-muted">
          Partners and platforms spanning media, conferences, fashion, civic
          programming, and cultural storytelling — the same collaborations featured
          on Cherrell&apos;s deck, expanded here with room for context.
        </p>

        <figure className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-charcoal-elevated/80 shadow-sm">
          <Image
            src="/collaborations-from-portfolio.png"
            alt="Collage titled Collaborations: Cherrell Woodley with logos and moments including YouTube, Sistas in Sales, HiTouch, POSSIBLE, Visit.org, AHK, Radio One, IMEX, City of Philadelphia, NDSU, Miami Swim Week, the Recording Academy, A Spectacular Black Girl Art Show, FADER, Parsons School of Fashion, and related event photography."
            width={1224}
            height={1584}
            className="h-auto w-full object-cover object-top"
            sizes="(min-width: 1024px) 72rem, 100vw"
            priority
            loading="eager"
          />
          <figcaption className="border-t border-white/10 px-4 py-3 text-center text-xs text-surface-muted sm:text-sm">
            Collaborations spread from Cherrell&apos;s portfolio — logos, stages, and
            partner moments in one view.
          </figcaption>
        </figure>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-charcoal-elevated/90 shadow-sm transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-glow-warm">
                <div className="relative overflow-hidden bg-gradient-to-br from-accent/15 via-charcoal-elevated to-accent-warm/20">
                  <CollaborationLogo3D>
                    <ProjectLogoMarks
                      projectId={project.id}
                      fallbackTitle={project.title}
                    />
                  </CollaborationLogo3D>
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((c, ci) => (
                      <span
                        key={c}
                        className={cn(
                          "rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
                          ci % 3 === 0 &&
                            "border-accent/35 bg-accent/10 text-accent",
                          ci % 3 === 1 &&
                            "border-accent-warm/35 bg-accent-warm/10 text-accent-warm",
                          ci % 3 === 2 &&
                            "border-flair/35 bg-flair/10 text-flair",
                        )}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-surface-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-surface-muted">
                    {project.summary}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
