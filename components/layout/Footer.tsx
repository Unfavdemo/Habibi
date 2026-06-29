"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Footer() {
  const pathname = usePathname();
  const isPhresh = pathname === "/keep-it-phresh";

  return (
    <footer
      className={cn(
        "border-t",
        isPhresh ? "border-white/10 bg-charcoal-elevated" : "border-border bg-surface",
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-2xl tracking-wide text-surface-foreground sm:text-3xl">
              {isPhresh ? "Stay PHRESH" : profile.brandName}
            </p>
            <p className="mt-2 text-sm text-surface-muted">{profile.tagline}</p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <div className="flex gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-surface-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Email"
              >
                <Mail className="size-4" aria-hidden />
              </a>
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-surface-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" aria-hidden />
              </Link>
              <Link
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-surface-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Instagram"
              >
                <Instagram className="size-4" aria-hidden />
              </Link>
            </div>
            <Link
              href={`mailto:${profile.email}`}
              className="text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              Holla at me
            </Link>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-surface-muted">
          © {new Date().getFullYear()} {profile.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
