import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Timeline } from "@/components/sections/Timeline";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <About />
      <Work />
      <Timeline />
      <Contact />
    </main>
  );
}
