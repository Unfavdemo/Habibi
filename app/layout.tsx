import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rellyhabibi.vercel.app"),
  title: {
    default: "Relly Habibi | Cherrell Woodley",
    template: "%s | Relly Habibi",
  },
  description:
    "Cherrell Woodley (Relly Habibi) — producer, cultural amplification specialist, and event project manager. Storytelling via culture, events, media, and the arts.",
  openGraph: {
    title: "Relly Habibi | Cherrell Woodley",
    description:
      "Producer and cultural amplification specialist — events, creative direction, and storytelling.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0f11",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-charcoal">
        <a
          href="#main"
          className="absolute left-4 top-0 z-[100] -translate-y-full rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-charcoal shadow-lg transition-transform focus:translate-y-4 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-charcoal"
        >
          Skip to main content
        </a>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
