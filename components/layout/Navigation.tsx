"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/founders", label: "Founders" },
  { href: "/#platform", label: "Platform" },
  { href: "/#media", label: "Media" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <span className="font-display text-xl tracking-wider text-accent sm:text-2xl">
            PHRESH
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-surface-muted sm:inline">
            under pressure{profile.trademark}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-surface-muted transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={profile.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-full border border-accent/40 bg-accent/10 px-4 text-xs font-semibold uppercase tracking-wider text-accent transition-[border-color,box-shadow] hover:border-accent hover:shadow-glow"
          >
            Watch
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-surface-foreground transition-colors hover:border-accent/50 hover:text-accent md:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      <div
        id={panelId}
        className={cn(
          "border-t border-white/10 bg-charcoal/95 md:hidden",
          open ? "block" : "hidden",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Primary mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-surface-foreground hover:bg-white/5 hover:text-accent"
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={profile.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-3 text-center text-sm font-semibold uppercase tracking-wider text-accent"
            onClick={close}
          >
            Watch on YouTube
          </Link>
        </nav>
      </div>
    </header>
  );
}
