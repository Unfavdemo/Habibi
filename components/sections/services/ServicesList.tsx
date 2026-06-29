import { services } from "@/data/services";

export function ServicesList() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {services.map((service, i) => (
        <li key={service.id}>
          <article className="h-full rounded-2xl border border-border bg-charcoal-elevated p-7 shadow-card transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-glow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              0{i + 1}
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-wide text-surface-foreground sm:text-3xl">
              {service.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-surface-muted">
              {service.description}
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}
