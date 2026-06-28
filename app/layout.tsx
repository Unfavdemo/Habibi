import type { Metadata, Viewport } from "next";
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SceneEffects } from "@/components/effects/SceneEffects";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phreshunderpressure.com"),
  title: {
    default: "PHRESH UNDER PRESSURE™ | Freelancer Community + Cultural Platform",
    template: "%s | PHRESH UNDER PRESSURE",
  },
  description:
    "Freelancer community and cultural platform for underrepresented creatives. Building under pressure, 1 invoice & 1 vision at a time. Stay PHRESH.",
  openGraph: {
    title: "PHRESH UNDER PRESSURE™",
    description:
      "Freelancer Community + Cultural Platform for Underrepresented Creatives. Stay PHRESH.",
    type: "website",
    url: "https://phreshunderpressure.com",
  },
  keywords: [
    "PHRESH UNDER PRESSURE",
    "freelancer community",
    "underrepresented creatives",
    "cultural platform",
    "Black creatives",
    "freelance resources",
    "Stay PHRESH",
  ],
};

export const viewport: Viewport = {
  themeColor: "#050508",
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
      data-scroll-behavior="smooth"
      className={`${bebas.variable} ${dmSans.variable} ${jetbrains.variable} h-full scroll-smooth`}
    >
      <body className="relative min-h-full flex flex-col bg-charcoal">
        <div className="pointer-events-none fixed inset-0 z-[45] grain-overlay" aria-hidden />
        <SceneEffects />
        <a
          href="#main"
          className="absolute left-4 top-0 z-[100] -translate-y-full rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-charcoal shadow-lg transition-transform focus:translate-y-4 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-charcoal"
        >
          Skip to main content
        </a>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
