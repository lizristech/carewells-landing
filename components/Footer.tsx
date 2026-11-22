import Image from "next/image";
import Link from "next/link";
import { nav, site, telHref } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <Image src="/images/logosaa-2.png" alt={site.name} width={800} height={535} className="h-20 w-auto" />
          <p className="mt-4 text-white/80">{site.tagline}</p>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold">Quick Menu</h2>
          <ul className="mt-4 space-y-2 text-white/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold">Contact</h2>
          <ul className="mt-4 space-y-3 text-white/80">
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
            className="mt-4 h-40 w-full rounded-lg border-0"
            loading="lazy"
          />
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        © {site.name} All rights reserved.
      </div>
    </footer>
  );
}
