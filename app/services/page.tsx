import type { Metadata } from "next";
import { servicesHeadline } from "@/data/services";
import { PageHero, PageSection } from "@/components/layout/PageHero";
import { ServicesList } from "@/components/sections/services/ServicesList";
import { SpeakingPartnerships } from "@/components/sections/services/SpeakingPartnerships";
import { BookingRequestForm } from "@/components/sections/services/BookingRequestForm";

export const metadata: Metadata = {
  title: "Services",
  description: servicesHeadline,
};

export default function ServicesPage() {
  return (
    <main id="main" className="flex-1">
      <PageHero eyebrow="Services" headline={servicesHeadline} />

      <PageSection>
        <ServicesList />
      </PageSection>

      <PageSection className="bg-surface">
        <SpeakingPartnerships />
      </PageSection>

      <PageSection bordered={false}>
        <BookingRequestForm />
      </PageSection>
    </main>
  );
}
