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
      },
      boxShadow: {
        glow: "0 0 48px -12px var(--color-accent-glow)",
        "glow-warm": "0 0 40px -10px var(--color-pressure-glow)",
        "glow-mixed":
          "0 0 52px -12px var(--color-accent-glow), 0 0 36px -14px rgba(0, 229, 255, 0.2)",
        pressure:
          "0 0 60px -8px var(--color-pressure-glow), inset 0 1px 0 rgba(57, 255, 20, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "marquee-left": "marquee-left 28s linear infinite",
        "marquee-right": "marquee-right 28s linear infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
} satisfies Config;

export default config;
