/** Placeholder testimonials — ready for client copy. */

export const testimonials = [] as const;

export function Testimonials() {
  if (testimonials.length === 0) {
    return (
      <section className="border-b border-border bg-charcoal" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2
            id="testimonials-heading"
            className="text-center font-display text-2xl tracking-wide text-surface-foreground sm:text-3xl"
          >
            What clients say
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center text-sm text-surface-muted">
            Testimonials coming soon. In the meantime, explore the work and reach out directly.
          </p>
        </div>
      </section>
    );
  }

  return null;
}
