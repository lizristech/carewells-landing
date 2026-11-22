import Image from "next/image";
import Link from "next/link";
import { nav, site, telHref } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 shadow-md">
      <div className="hidden bg-brand-dark text-sm text-white md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <span>{site.tagline}</span>
          <div className="flex gap-6">
            <a href={telHref(site.phones[0])} className="hover:underline">
              {site.phones[0]}
            </a>
            <a href={`mailto:${site.email}`} className="hover:underline">
              {site.email}
            </a>
          </div>
        </div>
      </div>
      <div className="bg-brand text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logosaa-2.png"
              alt={site.name}
              width={800}
              height={535}
              className="h-12 w-auto"
              preload
            />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="font-medium hover:text-white/80">
                {item.label}
              </Link>
            ))}
            <Link
              href="/book-appointment"
              className="rounded-full bg-leaf px-5 py-2 font-semibold hover:brightness-110"
            >
              Book Appointment
            </Link>
          </nav>
          {/* Mobile menu without client JS */}
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded border border-white/40 px-3 py-1.5 text-sm">
              Menu
            </summary>
            <nav className="absolute right-0 mt-2 flex w-64 flex-col rounded-lg bg-white py-2 text-ink shadow-xl">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="px-4 py-2 hover:bg-brand-light">
                  {item.label}
                </Link>
              ))}
              <Link href="/book-appointment" className="px-4 py-2 font-semibold text-brand hover:bg-brand-light">
                Book Appointment
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
