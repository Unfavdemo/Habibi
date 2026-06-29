import { projects } from "@/data/projects";
import { ProjectLogoMarks } from "@/components/collaboration/ProjectLogoMarks";

const featuredIds = [
  "youtube-ai",
  "recording-academy",
  "getty-met",
  "imex",
  "possible",
  "canva",
];

export function PartnerLogos() {
  const featured = projects.filter((p) => featuredIds.includes(p.id));

  return (
    <section className="border-b border-border bg-surface" aria-labelledby="partners-heading">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2
          id="partners-heading"
          className="text-center text-sm font-medium uppercase tracking-[0.15em] text-surface-muted"
        >
          Brands &amp; partners who have trusted the work
        </h2>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {featured.map((project) => (
            <li
              key={project.id}
              className="flex h-24 w-32 items-center justify-center sm:h-28 sm:w-36"
            >
              <ProjectLogoMarks
                projectId={project.id}
                fallbackTitle={project.title}
              />
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center">
          <a href="/work" className="text-sm font-medium text-accent hover:underline">
            View all work →
          </a>
        </p>
      </div>
    </section>
  );
}
