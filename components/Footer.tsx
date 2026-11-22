import Image from "next/image";
import Link from "next/link";
import { nav, site, telHref } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden bg-[#04223f] text-white">
      <div className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 animate-blob rounded-full bg-brand/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 animate-blob rounded-full bg-leaf/25 blur-3xl [animation-delay:-6s]" />

      <div className="relative mx-auto max-w-6xl px-4 pt-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">Ready to feel better?</h2>
            <p className="mt-2 text-white/70">Book an appointment or call us. Our team is here to help.</p>
          </div>
          <Link
            href="/book-appointment"
            className="rounded-full bg-white px-7 py-3 font-semibold text-brand transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20"
          >
            Book Appointment →
          </Link>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <Image src="/images/logosaa-2.png" alt={site.name} width={800} height={535} className="h-20 w-auto" />
          <p className="mt-4 text-white/70">{site.tagline}</p>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold">Quick Menu</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-white/70">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="transition hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold">Contact</h2>
          <ul className="mt-4 space-y-3 text-white/70">
            <li>{site.address}</li>
            <li>
              {site.phones.map((p, i) => (
                <span key={p}>
                  {i > 0 && " | "}
                  <a href={telHref(p)} className="hover:text-white">
                    {p}
                  </a>
                </span>
              ))}
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
          <iframe
            title="Carewells location"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=15&output=embed`}
            className="mt-4 h-40 w-full rounded-2xl border-0 opacity-90"
            loading="lazy"
          />
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5 text-center text-sm text-white/50">
        © {site.name} All rights reserved.
      </div>
    </footer>
  );
}
