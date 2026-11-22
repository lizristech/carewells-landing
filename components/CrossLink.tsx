import Link from "next/link";
import Reveal from "@/components/Reveal";

// Gradient banner linking to the "other" services page
export default function CrossLink({ title, href }: { title: string; href: string }) {
  return (
    <Reveal variant="zoom" className="mt-14">
      <Link
        href={href}
        className="group relative flex flex-col items-start justify-between gap-4 overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-dark via-brand to-sky-500 p-8 text-white md:flex-row md:items-center md:p-10"
      >
        <div className="absolute -top-20 right-20 h-60 w-60 animate-blob rounded-full bg-white/10 blur-2xl" />
        <div className="relative">
          <p className="text-sm font-semibold tracking-widest text-white/70 uppercase">Explore more</p>
          <h2 className="mt-1 font-display text-2xl font-bold md:text-3xl">{title}</h2>
        </div>
        <span className="relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand transition group-hover:shadow-lg">
          Show more <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </Link>
    </Reveal>
  );
}
