import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import { physioServices } from "@/lib/site";

export const metadata: Metadata = { title: "Physio / Rehabilitation Services" };

export default function PhysioPage() {
  return (
    <>
      <PageHero
        title="Physio / Rehabilitation"
        text="We are committed to providing the highest quality Physio/Rehabilitation Services to our patients. We believe in a holistic approach to rehabilitation, addressing physical limitations, also emotional and mental well-being. At Carewells, we are dedicated to helping our patients improve their quality of life and achieve maximum recovery."
        image="/images/wwerfrf.jpg"
        cta={{ href: "/book-appointment", label: "Book Appointment" }}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <ServiceGrid items={physioServices} />
        <div className="mt-12 rounded-2xl bg-brand p-8 text-white md:flex md:items-center md:justify-between">
          <h2 className="font-display text-2xl font-semibold">Our Medical Services</h2>
          <Link
            href="/medical-service"
            className="mt-4 inline-block rounded-full bg-white px-6 py-2 font-semibold text-brand md:mt-0"
          >
            Show More
          </Link>
        </div>
      </section>
    </>
  );
}
