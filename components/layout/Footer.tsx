import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-charcoal-elevated">
      <div className="pointer-events-none absolute inset-0 mesh-backdrop-soft opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-3xl tracking-wider text-gradient-phresh sm:text-4xl">
              {profile.mantra}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-surface-muted">
              {profile.brandName}
              {profile.trademark}
            </p>
            <p className="mt-3 max-w-xs text-sm text-surface-muted">
              {profile.tagline}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end">
                <li>
                  <Link
                    href="/who-we-are"
                    className="text-xs text-surface-muted transition-colors hover:text-accent"
                  >
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link
                    href="/founders"
                    className="text-xs text-surface-muted transition-colors hover:text-accent"
                  >
                    Founders
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-xs text-surface-muted transition-colors hover:text-accent"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex gap-3">
              <Link
                href={profile.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-surface-muted transition-[border-color,color,box-shadow] hover:border-accent-warm/50 hover:text-accent-warm hover:shadow-glow-warm"
                aria-label="YouTube"
              >
                <Youtube className="size-5" aria-hidden />
              </Link>
              <Link
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-surface-muted transition-[border-color,color,box-shadow] hover:border-flair/50 hover:text-flair hover:shadow-glow-mixed"
                aria-label="Instagram"
              >
                <Instagram className="size-5" aria-hidden />
              </Link>
            </div>
            <p className="text-xs text-surface-muted">
              Founded by {profile.founder} · {profile.founderAlias}
            </p>
          </div>
        </div>

        <div className="mt-10 h-px w-full glow-line opacity-50" aria-hidden />

        <p className="mt-6 text-center text-xs text-surface-muted">
          © {new Date().getFullYear()} {profile.brandName}
          {profile.trademark}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
