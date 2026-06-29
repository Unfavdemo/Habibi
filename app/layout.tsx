import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rellyhabibi.vercel.app"),
  title: {
    default: "Relly Habibi | Cherrell Woodley",
    template: "%s | Relly Habibi",
  },
  description:
    "Cherrell Woodley (Relly Habibi) — producer, cultural amplification specialist, and event project manager. Creative strategy meets culture, community, and execution.",
  openGraph: {
    title: "Relly Habibi | Cherrell Woodley",
    description:
      "Producer and cultural amplification specialist — events, creative direction, and storytelling.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
      className={`${poppins.variable} h-full scroll-smooth`}
      style={
        {
          "--font-display": "'Davetica', var(--font-body)",
          "--font-accent": "'Davetica', var(--font-body)",
        } as React.CSSProperties
      }
    >
      <body className="relative min-h-full flex flex-col bg-charcoal">
        <a
          href="#main"
          className="absolute left-4 top-0 z-[100] -translate-y-full rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-4 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
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
