import { CollaborationLogo3D } from "@/components/collaboration/CollaborationLogo3D";
import { ProjectLogoMarks } from "@/components/collaboration/ProjectLogoMarks";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function WorkGrid() {
  return (
    <section className="border-b border-border bg-charcoal" aria-label="Collaborations">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-charcoal-elevated shadow-card transition-[border-color,box-shadow] hover:border-accent/30 hover:shadow-glow">
                <div className="relative overflow-hidden">
                  <CollaborationLogo3D variant="contrast">
                    <ProjectLogoMarks
                      projectId={project.id}
                      fallbackTitle={project.title}
                    />
                  </CollaborationLogo3D>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((c, ci) => (
                      <span
                        key={c}
                        className={cn(
                          "rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-surface-muted",
                          ci === 0 && "border-accent/30 text-accent",
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
