import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  services,
  servicesHeadline,
  featuredServiceIds,
} from "@/data/services";

const featured = services.filter((s) =>
  (featuredServiceIds as readonly string[]).includes(s.id),
);

export function ServicesPreview() {
  return (
    <section className="border-b border-border bg-charcoal" aria-labelledby="services-preview-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">
          Here&apos;s what I actually do
        </p>
        <h2
          id="services-preview-heading"
          className="mt-2 max-w-2xl font-display text-3xl tracking-wide text-surface-foreground sm:text-4xl"
        >
          {servicesHeadline}
        </h2>

        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {featured.map((service) => (
            <li key={service.id}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-charcoal-elevated p-8 shadow-card">
                <h3 className="font-display text-xl tracking-wide text-surface-foreground sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-surface-muted">
                  {service.description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            See all services
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
          <Link
            href="/services#booking"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-surface-muted underline-offset-4 hover:text-accent hover:underline"
          >
            Submit a booking request
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
