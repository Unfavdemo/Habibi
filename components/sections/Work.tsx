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
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          Built Under Pressure
        </p>
        <h2
          id="work-heading"
          className="mt-2 font-display text-4xl tracking-wide text-gradient-brand sm:text-5xl"
        >
          The foundation
        </h2>
        <p className="mt-3 max-w-2xl text-surface-muted">
          PHRESH UNDER PRESSURE is built on a decade of institutional work —
          media, conferences, fashion, civic programming, and cultural storytelling.
          These collaborations are the proof that underrepresented creatives belong
          in every room.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-charcoal-elevated/90 shadow-sm transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-glow-warm">
                <div className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-charcoal-elevated to-accent-warm/15">
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
                          "rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide",
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
                  <h3 className="font-display text-xl tracking-wide text-surface-foreground">
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
