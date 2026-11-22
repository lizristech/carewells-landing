import Image from "next/image";
import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  image: string;
  cta?: { href: string; label: string };
};

export default function PageHero({ eyebrow, title, text, image, cta }: Props) {
  return (
    <section className="relative -mt-[72px] overflow-hidden pt-[72px]">
      <Image src={image} alt="" fill className="object-cover opacity-60" preload />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 animate-blob rounded-full bg-sky-300/30 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        {eyebrow && (
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-brand/15 bg-white/70 px-4 py-1.5 text-sm font-semibold text-brand backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-leaf" />
            {eyebrow}
          </span>
        )}
        <h1
          className="mt-5 max-w-3xl animate-fade-up font-display text-4xl font-extrabold tracking-tight text-gradient md:text-6xl"
          style={{ animationDelay: "100ms" }}
        >
          {title}
        </h1>
        {text && (
          <p
            className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-ink/80"
            style={{ animationDelay: "200ms" }}
          >
            {text}
          </p>
        )}
        {cta && (
          <Link
            href={cta.href}
            className="group mt-8 inline-flex animate-fade-up items-center gap-2 rounded-full bg-gradient-to-r from-brand to-sky-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:shadow-xl"
            style={{ animationDelay: "300ms" }}
          >
            {cta.label}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        )}
      </div>
    </section>
  );
}
