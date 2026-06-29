import { HomeHero } from "@/components/sections/home/HomeHero";
import { HonestQuote } from "@/components/sections/home/HonestQuote";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview";
import { PartnerLogos } from "@/components/sections/home/PartnerLogos";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { HomeCTA } from "@/components/sections/home/HomeCTA";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <HomeHero />
      <HonestQuote />
      <ServicesPreview />
      <PartnerLogos />
      <Testimonials />
      <HomeCTA />
    </main>
  );
}
