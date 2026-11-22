import Image from "next/image";
import Link from "next/link";
import { aboutIntro, medicalServices, physioServices } from "@/lib/site";

const quickLinks = [
  { href: "/book-appointment", label: "Book Appointment", icon: "/images/01-1.png" },
  { href: "/online-health-check-ups-form", label: "Health Check-ups", icon: "/images/02-1.png" },
  { href: "/medical-service", label: "Our Services", icon: "/images/sev.png" },
  { href: "/contact", label: "Lab Reports", icon: "/images/03-1.png" },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <p className="font-display text-xl font-semibold text-leaf">Welcome to Carewells!</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-brand md:text-6xl">
              Empowering health for a better tomorrow
            </h1>
            <Link
              href="/book-appointment"
              className="mt-8 inline-block rounded-full bg-brand px-8 py-3 font-semibold text-white hover:bg-brand-dark"
            >
              Book Appointments
            </Link>
          </div>
          <Image
            src="/images/bbg.jpg"
            alt="Carewells healthcare professional"
            width={800}
            height={1024}
            className="mx-auto max-h-[520px] w-auto"
            preload
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
        {quickLinks.map((q) => (
          <Link
            key={q.label}
            href={q.href}
            className="flex flex-col items-center rounded-2xl bg-brand p-4 text-center text-white shadow-lg transition hover:-translate-y-1 hover:bg-brand-dark"
          >
            <Image src={q.icon} alt={q.label} width={400} height={319} className="h-28 w-auto" />
          </Link>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
        <Image
          src="/images/VAN.webp"
          alt="Carewells mobile medical service van"
          width={700}
          height={593}
          className="mx-auto w-full max-w-md"
        />
        <div>
          <h2 className="font-display text-3xl font-bold text-brand">About us</h2>
          <p className="mt-4 leading-relaxed">{aboutIntro}</p>
          <Link href="/about-us" className="mt-6 inline-block font-semibold text-brand hover:underline">
            Read More →
          </Link>
        </div>
      </section>

      <section className="bg-brand-light py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-display text-3xl font-bold text-brand">
            We are committed to providing compassionate care and high quality services
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <ServiceCard
              title="Medical Services"
              items={medicalServices.slice(0, 4)}
              href="/medical-service"
            />
            <ServiceCard
              title="Physio / Rehabilitation Services"
              items={physioServices.slice(0, 4)}
              href="/physio-rehabilitation-services"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ title, items, href }: { title: string; items: string[]; href: string }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <h3 className="font-display text-2xl font-semibold text-brand">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-leaf" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="mt-6 inline-block rounded-full border-2 border-brand px-6 py-2 font-semibold text-brand hover:bg-brand hover:text-white"
      >
        Read More
      </Link>
    </div>
  );
}
