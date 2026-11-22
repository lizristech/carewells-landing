import Link from "next/link";

type Props = {
  title: string;
  text?: string;
  image: string;
  cta?: { href: string; label: string };
};

export default function PageHero({ title, text, image, cta }: Props) {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <h1 className="font-display text-4xl font-bold text-brand md:text-5xl">{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed">{text}</p>}
        {cta && (
          <Link
            href={cta.href}
            className="mt-8 inline-block rounded-full bg-brand px-7 py-3 font-semibold text-white hover:bg-brand-dark"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
