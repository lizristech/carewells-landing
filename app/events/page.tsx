import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Events" };

const events = [
  { title: "Blood Donation", emoji: "🩸", quote: "Save life, give blood." },
  { title: "Dengue Control Program", emoji: "🦟", quote: "Don't let dengue control your life, take control of prevention measures." },
  { title: "Mental Awareness Events", emoji: "🧠", quote: "Your mental health is just as important as your physical health." },
  { title: "World Health Day Event", emoji: "🌍", quote: "Your Health, Your Responsibility." },
  { title: "Cultural Events", emoji: "🎭", quote: "Without memory, there is no culture." },
];

export default function EventsPage() {
  return (
    <>
      <section className="relative -mt-[72px] overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-sky-500 pt-[72px] text-white">
        <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 animate-blob rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 animate-blob rounded-full bg-leaf/30 blur-3xl [animation-delay:-7s]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <span className="inline-flex animate-fade-up rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            Community &amp; workshops
          </span>
          <h1
            className="mt-5 animate-fade-up font-display text-5xl font-extrabold tracking-tight md:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Events
          </h1>
          <p
            className="mt-6 max-w-3xl animate-fade-up text-lg leading-relaxed text-white/85"
            style={{ animationDelay: "240ms" }}
          >
            Carewells offers a wide range of healthcare educational workshops designed to empower individuals
            with the knowledge and skills necessary to maintain a healthy lifestyle. These workshops cover
            various topics and are led by experienced healthcare professionals. Participants can expect a
            comprehensive learning experience combined with practical advice and guidance.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e, i) => (
          <Reveal key={e.title} delay={(i % 3) * 100}>
            <article className="group relative h-full overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/10">
              <span className="absolute -top-6 -right-2 font-display text-8xl font-extrabold text-brand/5 transition-colors group-hover:text-brand/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative text-3xl">{e.emoji}</span>
              <h2 className="relative mt-4 font-display text-xl font-bold text-brand">{e.title}</h2>
              <p className="relative mt-3 text-ink/75 italic">&ldquo;{e.quote}&rdquo;</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <Reveal variant="zoom">
          <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-light via-white to-lime-50 p-8 md:grid-cols-2 md:p-12">
            <Image
              src="/images/helth.png"
              alt="Health Fiesta at Carewells"
              width={857}
              height={585}
              className="w-full animate-float-slow"
            />
            <div>
              <h2 className="font-display text-4xl font-extrabold tracking-tight">
                Experience the Ultimate <span className="text-gradient">Health Fiesta</span> at Carewells!
              </h2>
              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-sky-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5"
              >
                Join us <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-[1fr_1fr_340px]">
        {banners.map((b, i) => (
          <Reveal key={b.src} delay={i * 120}>
            <Link href="/contact" className="group relative block h-full overflow-hidden rounded-[2rem] shadow-sm">
              <Image
                src={b.src}
                alt={b.alt}
                width={b.w}
                height={b.h}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-5 py-2 font-semibold text-brand backdrop-blur transition group-hover:bg-brand group-hover:text-white">
                Join us →
              </span>
            </Link>
          </Reveal>
        ))}
        <Reveal delay={240}>
          <iframe
            title="Carewells on Facebook"
            src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent("https://www.facebook.com/239344055935256")}&tabs=timeline&width=340&height=500&small_header=true&hide_cover=false`}
            width={340}
            height={500}
            className="mx-auto max-w-full rounded-[2rem] border-0"
            loading="lazy"
          />
        </Reveal>
      </section>
    </>
  );
}

const banners = [
  { src: "/images/worlheal.png", alt: "World Health Day event", w: 400, h: 495 },
  { src: "/images/0218_WEB_NGA_Medical_symbol_v_t800.jpg", alt: "Carewells health events", w: 800, h: 500 },
];
