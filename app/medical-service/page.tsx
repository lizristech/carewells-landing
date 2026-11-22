import type { Metadata } from "next";
import CrossLink from "@/components/CrossLink";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import { medicalServices } from "@/lib/site";

export const metadata: Metadata = { title: "Medical Services" };

export default function MedicalServicePage() {
  return (
    <>
      <PageHero
        eyebrow={`${medicalServices.length} services under one roof`}
        title="Medical Services"
        text="Carewells is renowned for its exceptional medical services that prioritize the well-being and health of every patient with a team of dedicated professionals. Patients can trust Carewells to provide compassionate, reliable, and effective healthcare services, making it a top choice for their medical needs."
        image="/images/cover1.png"
        cta={{ href: "/book-appointment", label: "Book Appointment" }}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <ServiceGrid items={medicalServices} />
        <CrossLink title="Our Physio / Rehabilitation Services" href="/physio-rehabilitation-services" />
      </section>
    </>
  );
}
