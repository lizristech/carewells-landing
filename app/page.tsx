import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { aboutIntro, medicalServices, physioServices } from "@/lib/site";

const quickLinks = [
  { href: "/book-appointment", label: "Book Appointment", icon: "/images/01-1.png", tint: "from-brand to-sky-500" },
  { href: "/online-health-check-ups-form", label: "Health Check-ups", icon: "/images/02-1.png", tint: "from-sky-500 to-cyan-400" },
  { href: "/medical-service", label: "Our Services", icon: "/images/sev.png", tint: "from-brand-dark to-brand" },
  { href: "/contact", label: "Lab Reports", icon: "/images/03-1.png", tint: "from-leaf to-lime-500" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-[72px] overflow-hidden pt-[72px]">
        <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] animate-blob rounded-full bg-sky-300/40 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -right-24 h-[24rem] w-[24rem] animate-blob rounded-full bg-leaf/25 blur-3xl [animation-delay:-8s]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-4 py-1.5 text-sm font-semibold text-brand shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf" />
              </span>
              Welcome to Carewells!
            </span>
            <h1
              className="mt-6 animate-fade-up font-display text-5xl leading-[1.05] font-extrabold tracking-tight md:text-7xl"
              style={{ animationDelay: "120ms" }}
            >
              Empowering health for a <span className="text-gradient">better tomorrow</span>
            </h1>
            <p
              className="mt-6 max-w-lg animate-fade-up text-lg text-ink/75"
              style={{ animationDelay: "240ms" }}
            >
              Medical consultations, laboratory services, physiotherapy and a mobile clinic that comes to your
              home, all from one caring team in Colombo.
            </p>
            <div className="mt-9 flex animate-fade-up flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
              <Link
                href="/book-appointment"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-sky-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/40"
              >
                Book Appointment
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/medical-service"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-7 py-3.5 font-semibold backdrop-blur transition hover:border-brand/30 hover:text-brand"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="absolute inset-6 rounded-[3rem] bg-gradient-to-br from-brand/20 to-leaf/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white shadow-2xl shadow-brand/15">
              <Image
                src="/images/bbg.jpg"
                alt="Carewells healthcare professional"
                width={800}
                height={1024}
                className="h-auto w-full"
                preload
              />
            </div>
            {/* Floating glass cards */}
            <div className="absolute top-10 -left-6 animate-float rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-md md:-left-12">
              <p className="text-xs font-medium text-ink/60">Mobile clinic</p>
              <p className="font-display font-bold text-brand">We come to you 🚑</p>
            </div>
            <div className="absolute -right-4 bottom-12 animate-float-slow rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-md md:-right-10">
              <p className="text-xs font-medium text-ink/60">Physio &amp; rehab</p>
              <p className="font-display font-bold text-leaf">14 specialised services</p>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={[...medicalServices.slice(0, 8), ...physioServices.slice(0, 6)]} />

      {/* Quick actions */}
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-16 md:grid-cols-4">
        {quickLinks.map((q, i) => (
          <Reveal key={q.label} delay={i * 100}>
            <Link
              href={q.href}
              className={`group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${q.tint} p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Image
                src={q.icon}
                alt={q.label}
                width={400}
                height={319}
                className="relative h-28 w-auto transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          </Reveal>
        ))}
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 md:grid-cols-2">
        <Reveal variant="left" className="relative">
          <div className="absolute inset-10 animate-blob rounded-full bg-sky-200/50 blur-3xl" />
          <Image
            src="/images/VAN.webp"
            alt="Carewells mobile medical service van"
            width={700}
            height={593}
            className="relative mx-auto w-full max-w-md animate-float-slow"
          />
        </Reveal>
        <Reveal variant="right">
          <span className="text-sm font-bold tracking-widest text-leaf uppercase">About us</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight">
            Your well-being is <span className="text-gradient">our priority</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">{aboutIntro}</p>
          <Link
            href="/about-us"
            className="group mt-7 inline-flex items-center gap-2 font-semibold text-brand"
          >
            Read our story
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </section>

      {/* Services bento */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-leaf uppercase">What we do</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight">
            Compassionate care, <span className="text-gradient">high quality services</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <Reveal className="md:col-span-2" delay={0}>
            <ServiceCard
              dark
              title="Medical Services"
              count={medicalServices.length}
              items={medicalServices.slice(0, 6)}
              href="/medical-service"
            />
          </Reveal>
          <Reveal delay={120}>
            <ServiceCard
              title="Physio / Rehabilitation"
              count={physioServices.length}
              items={physioServices.slice(0, 4)}
              href="/physio-rehabilitation-services"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  title,
  count,
  items,
  href,
  dark,
}: {
  title: string;
  count: number;
  items: string[];
  href: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        dark
          ? "bg-gradient-to-br from-brand-dark via-brand to-sky-500 text-white hover:shadow-brand/30"
          : "border border-slate-100 bg-brand-light/60 hover:shadow-brand/10"
      }`}
    >
      <div
        className={`absolute -right-16 -bottom-16 h-56 w-56 rounded-full transition-transform duration-700 group-hover:scale-125 ${
          dark ? "bg-white/10" : "bg-leaf/15"
        }`}
      />
      <div className="relative flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl font-bold">{title}</h3>
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${dark ? "bg-white/15" : "bg-white text-brand"}`}
        >
          {count} services
        </span>
      </div>
      <ul className={`relative mt-6 grid gap-3 ${dark ? "sm:grid-cols-2" : ""}`}>
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className={`h-2 w-2 rounded-full ${dark ? "bg-white" : "bg-leaf"}`} aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      <span
        className={`relative mt-8 inline-flex items-center gap-2 self-start rounded-full px-5 py-2.5 font-semibold transition ${
          dark ? "bg-white text-brand" : "bg-brand text-white"
        }`}
      >
        View all <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
