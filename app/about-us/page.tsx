import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { aboutIntro } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Carewells in Colombo is truly dedicated to prioritizing the well-being of its patients, with a dedicated team of healthcare professionals.",
};

const pillars = [
  {
    title: "Vision",
    icon: "/images/vi.png",
    text: "At Carewells, we are dedicated to make a positive impact on the lives of those we serve and to being a beacon of hope and well-being of everyone's life.",
  },
  {
    title: "Mission",
    icon: "/images/Untitled-2-1.png",
    text: "To provide exceptional and comprehensive healthcare services with compassion, integrity, and excellence. With an unwavering commitment to the nation.",
  },
  {
    title: "Values",
    icon: "/images/vi.png",
    text: "Providing comprehensive health education programs, health screenings, and preventive care initiatives to ensure the overall well-being of our patients. By working together, we can create a society where everyone has the opportunity to lead a healthy and fulfilling life.",
  },
];

const directorMessage = [
  "I am delighted to address you as the Managing Director of Carewells, one of the healthcare providers in Sri Lanka. Our mission has always been to provide the highest quality healthcare services, complemented by a compassionate approach, to our valued patients. In these challenging times, I feel it is important to emphasize the role Carewells plays in the community. We are committed to serving you and your loved ones, ensuring access to the best healthcare facilities, and delivering personalized care that meets your unique needs.",
  "At Carewells, we believe in the power of innovation and commitment to clinical excellence, we recognize the importance of providing a comfortable and welcoming environment for our patients. I would like to express my heartfelt gratitude to our dedicated and caring staff. Their unwavering commitment to providing compassionate care and going the extra mile for our patients has been the cornerstone of our success. I commend their efforts and remain confident in their ability to maintain the highest standards of healthcare delivery.",
  "As we navigate the path ahead, rest assured that Carewells will continue to be your trusted partner in health. We will remain at the forefront of healthcare innovation, offering excellent medical services that consistently exceed your expectations. Thank you for being part of our journey. Together, let us continue to light the path to better health and well-being for all.",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative -mt-[72px] overflow-hidden pt-[72px]">
        <Image src="/images/build.jpg" alt="Carewells building" fill className="scale-105 object-cover" preload />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand/75 to-sky-500/50" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 animate-blob rounded-full bg-leaf/30 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-28 text-white md:py-36">
          <span className="inline-flex animate-fade-up rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            About us
          </span>
          <h1
            className="mt-5 max-w-3xl animate-fade-up font-display text-5xl font-extrabold tracking-tight md:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Empowering health for a better tomorrow
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[1fr_2fr]">
        <Reveal variant="left">
          <span className="text-sm font-bold tracking-widest text-leaf uppercase">Overview</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight">
            Care that puts <span className="text-gradient">you first</span>
          </h2>
        </Reveal>
        <Reveal variant="right" className="space-y-5 text-lg leading-relaxed text-ink/80">
          <p>{aboutIntro}</p>
          <p>
            We understand that navigating the world of healthcare can be overwhelming and sometimes confusing.
            That&rsquo;s why we&rsquo;re here to make your experience as seamless and as comfortable as possible.
            Whether you need a routine check-up, a specialized procedure, or ongoing treatment, our experienced
            physicians and staff are here to guide you every step of the way. We take the time to listen to your
            concerns, answer your questions, and develop personalized treatment plans that are tailored to your
            unique needs.
          </p>
          <p>
            We believe that prevention is just as important as treatment. That&rsquo;s why we offer a range of
            wellness programs and educational resources to help you maintain a healthy lifestyle. We are dedicated
            to helping you achieve and maintain optimal health. We are excited to embark on this journey with you
            and are confident that you will find the care you need and deserve at Carewells. We look forward to
            being your healthcare partner and helping you live your best life.
          </p>
        </Reveal>
      </section>

      <section className="bg-dots py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="group h-full rounded-[2rem] border border-slate-100 bg-white/90 p-8 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Image src={p.icon} alt="" width={1000} height={1000} className="h-10 w-10" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold text-brand">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/75">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <Reveal variant="zoom">
          <div className="grid gap-10 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-light via-white to-lime-50 p-8 md:grid-cols-[260px_1fr] md:p-12">
            <div className="text-center">
              <div className="relative mx-auto w-fit">
                <div className="absolute -inset-2 animate-blob rounded-full bg-gradient-to-br from-brand to-leaf opacity-30 blur-lg" />
                <Image
                  src="/images/profiles-300x300-2.png"
                  alt="Dr. Roshan"
                  width={300}
                  height={300}
                  className="relative mx-auto w-48 rounded-full border-4 border-white shadow-xl"
                />
              </div>
              <p className="mt-5 font-display text-xl font-bold text-brand">Dr. Roshan (MBBS)</p>
              <p className="text-sm text-ink/70">Managing Director of Carewells</p>
            </div>
            <div className="space-y-4 leading-relaxed text-ink/80">
              <p className="font-display text-2xl leading-snug font-semibold text-brand">
                &ldquo;Dear Friends and Stakeholders, I hope this message finds you in good health and high
                spirits.&rdquo;
              </p>
              {directorMessage.map((para) => (
                <p key={para.slice(0, 20)}>{para}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
