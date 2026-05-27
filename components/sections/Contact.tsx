import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 mesh-backdrop opacity-80"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Contact
        </p>
        <h2
          id="contact-heading"
          className="mt-2 font-display text-3xl font-bold tracking-tight text-gradient-brand sm:text-4xl"
        >
          Curious? Let&apos;s connect
        </h2>
        <p className="mt-3 max-w-2xl text-surface-muted">
          For project inquiries, partnerships, or speaking opportunities — reach out
          directly. Services and selected collaborations are outlined on this site.
        </p>

        <ul className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 rounded-2xl border border-accent/30 bg-charcoal-elevated/90 px-5 py-4 text-sm font-medium text-surface-foreground shadow-sm transition-[border-color,box-shadow,transform] hover:border-accent/60 hover:shadow-glow motion-safe:hover:-translate-y-0.5"
            >
              <Mail className="size-5 shrink-0 text-accent" aria-hidden />
              {profile.email}
            </a>
          </li>
          <li>
            <a
              href={`tel:${profile.phoneTel}`}
              className="inline-flex items-center gap-3 rounded-2xl border border-accent-warm/30 bg-charcoal-elevated/90 px-5 py-4 text-sm font-medium text-surface-foreground shadow-sm transition-[border-color,box-shadow,transform] hover:border-accent-warm/55 hover:shadow-glow-warm motion-safe:hover:-translate-y-0.5"
            >
              <Phone className="size-5 shrink-0 text-accent-warm" aria-hidden />
              {profile.phoneDisplay}
            </a>
          </li>
          <li>
            <Link
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-accent-warm/30 bg-charcoal-elevated/90 px-5 py-4 text-sm font-medium text-surface-foreground shadow-sm transition-[border-color,box-shadow,transform] hover:border-accent-warm/55 hover:shadow-glow-warm motion-safe:hover:-translate-y-0.5"
            >
              <Instagram className="size-5 shrink-0 text-accent-warm" aria-hidden />
              Instagram
            </Link>
          </li>
          <li>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-flair/30 bg-charcoal-elevated/90 px-5 py-4 text-sm font-medium text-surface-foreground shadow-sm transition-[border-color,box-shadow,transform] hover:border-flair/55 hover:shadow-[0_0_36px_-10px_rgba(251,113,133,0.35)] motion-safe:hover:-translate-y-0.5"
            >
              <Linkedin className="size-5 shrink-0 text-flair" aria-hidden />
              LinkedIn profile
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
