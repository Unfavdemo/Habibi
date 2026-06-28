import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Media } from "@/components/sections/Media";
import { Platform } from "@/components/sections/Platform";
import { Timeline } from "@/components/sections/Timeline";
import { Work } from "@/components/sections/Work";
import { GiantDivider } from "@/components/effects/MarqueeBand";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <GiantDivider text="STAY PHRESH" />
      <About />
      <GiantDivider text="UNDER PRESSURE" />
      <Platform />
      <Media />
      <GiantDivider text="FOR THE CULTURE" />
      <Work />
      <Timeline />
      <Contact />
    </main>
  );
}
