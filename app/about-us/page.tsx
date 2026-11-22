import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="relative">
        <Image src="/images/build.jpg" alt="Carewells building" fill className="object-cover" preload />
        <div className="absolute inset-0 bg-brand/70" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-white">
          <p className="font-display text-lg font-semibold uppercase tracking-wide">About us</p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Empowering health for a better tomorrow
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-5 px-4 py-16 text-lg leading-relaxed">
        <h2 className="font-display text-3xl font-bold text-brand">Overview</h2>
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
      </section>

      <section className="bg-brand-light py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <Image src={p.icon} alt="" width={1000} height={1000} className="mx-auto h-20 w-20" />
              <h3 className="mt-4 font-display text-2xl font-bold uppercase text-brand">{p.title}</h3>
              <p className="mt-3 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[260px_1fr]">
        <div className="text-center">
          <Image
            src="/images/profiles-300x300-2.png"
            alt="Dr. Roshan"
            width={300}
            height={300}
            className="mx-auto rounded-full"
          />
          <p className="mt-4 font-display text-xl font-bold text-brand">Dr. Roshan (MBBS)</p>
          <p className="text-sm">Managing Director of Carewells</p>
        </div>
        <div className="space-y-4 leading-relaxed">
          <p className="font-display text-xl italic text-brand">
            &ldquo;Dear Friends and Stakeholders, I hope this message finds you in good health and high
            spirits.&rdquo;
          </p>
          {directorMessage.map((para) => (
            <p key={para.slice(0, 20)}>{para}</p>
          ))}
        </div>
      </section>
    </>
  );
}
