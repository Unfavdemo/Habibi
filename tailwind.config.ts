import type { Config } from "tailwindcss";

/**
 * Brand utilities reference CSS variables defined in `app/globals.css` (:root).
 * Loaded via `@config` from that file (Tailwind v4).
 */
const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "var(--color-bg)",
          elevated: "var(--color-charcoal-elevated)",
        },
        surface: {
          DEFAULT: "var(--color-elevated)",
          foreground: "var(--color-foreground)",
          muted: "var(--color-muted)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          warm: "var(--color-accent-warm)",
          deep: "var(--color-accent-deep)",
        },
        flair: "var(--color-flair)",
      },
      boxShadow: {
        glow: "0 0 48px -12px var(--color-accent-glow)",
        "glow-warm": "0 0 40px -10px rgba(251, 146, 60, 0.35)",
        "glow-mixed":
          "0 0 52px -12px var(--color-accent-glow), 0 0 36px -14px rgba(251, 113, 133, 0.2)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "var(--font-body)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
} satisfies Config;

export default config;
