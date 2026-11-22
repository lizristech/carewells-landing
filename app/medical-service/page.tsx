import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import { medicalServices } from "@/lib/site";

export const metadata: Metadata = { title: "Medical Services" };

export default function MedicalServicePage() {
  return (
    <>
      <PageHero
        title="Medical Services"
        text="Carewells is renowned for its exceptional medical services that prioritize the well-being and health of every patient with a team of dedicated professionals. Patients can trust Carewells to provide compassionate, reliable, and effective healthcare services, making it a top choice for their medical needs."
        image="/images/cover1.png"
        cta={{ href: "/book-appointment", label: "Book Appointment" }}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <ServiceGrid items={medicalServices} />
        <div className="mt-12 rounded-2xl bg-brand p-8 text-white md:flex md:items-center md:justify-between">
          <h2 className="font-display text-2xl font-semibold">Our Physio / Rehabilitation Services</h2>
          <Link
            href="/physio-rehabilitation-services"
            className="mt-4 inline-block rounded-full bg-white px-6 py-2 font-semibold text-brand md:mt-0"
          >
            Show More
          </Link>
        </div>
      </section>
    </>
  );
}
