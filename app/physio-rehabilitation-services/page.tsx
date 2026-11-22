import type { Metadata } from "next";
import CrossLink from "@/components/CrossLink";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import { physioServices } from "@/lib/site";

export const metadata: Metadata = { title: "Physio / Rehabilitation Services" };

export default function PhysioPage() {
  return (
    <>
      <PageHero
        eyebrow="A holistic approach to recovery"
        title="Physio / Rehabilitation"
        text="We are committed to providing the highest quality Physio/Rehabilitation Services to our patients. We believe in a holistic approach to rehabilitation, addressing physical limitations, also emotional and mental well-being. At Carewells, we are dedicated to helping our patients improve their quality of life and achieve maximum recovery."
        image="/images/wwerfrf.jpg"
        cta={{ href: "/book-appointment", label: "Book Appointment" }}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <ServiceGrid items={physioServices} />
        <CrossLink title="Our Medical Services" href="/medical-service" />
      </section>
    </>
  );
}
