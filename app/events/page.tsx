import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Events" };

const events = [
  { title: "Blood Donation", quote: "Save life, give blood." },
  { title: "Dengue Control Program", quote: "Don't let dengue control your life, take control of prevention measures." },
  { title: "Mental Awareness Events", quote: "Your mental health is just as important as your physical health." },
  { title: "World Health Day Event", quote: "Your Health, Your Responsibility." },
  { title: "Cultural Events", quote: "Without memory, there is no culture." },
];

export default function EventsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Events</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
            Carewells offers a wide range of healthcare educational workshops designed to empower individuals
            with the knowledge and skills necessary to maintain a healthy lifestyle. These workshops cover
            various topics and are led by experienced healthcare professionals. Participants can expect a
            comprehensive learning experience combined with practical advice and guidance.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => (
          <article key={e.title} className="rounded-2xl border border-brand/15 p-6 shadow-sm">
            <h2 className="font-display text-xl font-bold text-brand">{e.title}</h2>
            <p className="mt-3 italic">&ldquo;{e.quote}&rdquo;</p>
          </article>
        ))}
      </section>

      <section className="bg-brand-light py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <Image src="/images/helth.png" alt="Health Fiesta at Carewells" width={857} height={585} className="w-full" />
          <div>
            <h2 className="font-display text-3xl font-bold text-brand">
              Experience the Ultimate Health Fiesta at Carewells!
            </h2>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-brand px-7 py-3 font-semibold text-white hover:bg-brand-dark"
            >
              Join us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1fr_1fr_340px]">
        {banners.map((b) => (
          <Link key={b.src} href="/contact" className="group relative block overflow-hidden rounded-2xl shadow-sm">
            <Image src={b.src} alt={b.alt} width={b.w} height={b.h} className="h-full w-full object-cover transition group-hover:scale-105" />
            <span className="absolute bottom-4 left-4 rounded-full bg-brand px-5 py-2 font-semibold text-white">Join us</span>
          </Link>
        ))}
        <iframe
          title="Carewells on Facebook"
          src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent("https://www.facebook.com/239344055935256")}&tabs=timeline&width=340&height=500&small_header=true&hide_cover=false`}
          width={340}
          height={500}
          className="mx-auto max-w-full rounded-2xl border-0"
          loading="lazy"
        />
      </section>
    </>
  );
}

const banners = [
  { src: "/images/worlheal.png", alt: "World Health Day event", w: 400, h: 495 },
  { src: "/images/0218_WEB_NGA_Medical_symbol_v_t800.jpg", alt: "Carewells health events", w: 800, h: 500 },
];
