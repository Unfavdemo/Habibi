import type { Config } from "tailwindcss";

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
        slate: "var(--color-slate)",
        border: "var(--color-border)",
      },
      boxShadow: {
        glow: "0 0 48px -12px var(--color-accent-glow)",
        "glow-warm": "0 0 40px -10px rgba(111, 225, 173, 0.35)",
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "var(--font-body)",
          "ui-sans-serif",
          "sans-serif",
        ],
        accent: [
          "var(--font-accent)",
          "var(--font-body)",
          "ui-sans-serif",
          "sans-serif",
        ],
      },
    },
  },
} satisfies Config;

export default config;
