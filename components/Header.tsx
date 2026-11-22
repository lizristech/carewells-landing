import Image from "next/image";
import Link from "next/link";
import { nav, site, telHref } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 px-3 pt-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/60 bg-white/70 py-2 pr-2 pl-4 shadow-lg shadow-brand/5 backdrop-blur-xl">
        <Link href="/" className="group flex shrink-0 items-center gap-2">
          <Image
            src="/images/carewells-logo-new-3.png"
            alt=""
            width={399}
            height={347}
            className="h-9 w-auto transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110"
            preload
          />
          <span className="font-display text-xl font-extrabold tracking-tight text-brand">
            Care<span className="text-leaf">wells</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-brand-light hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref(site.phones[0])}
            className="hidden rounded-full px-3 py-2 text-sm font-semibold text-brand md:block"
          >
            {site.phones[0]}
          </a>
          <Link
            href="/book-appointment"
            className="hidden rounded-full bg-gradient-to-r from-brand to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/30 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40 sm:block"
          >
            Book Appointment
          </Link>
          {/* Mobile menu without client JS */}
          <details className="group relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none flex-col items-center justify-center gap-1.5 rounded-full bg-brand-light">
              <span className="h-0.5 w-5 rounded bg-brand transition group-open:translate-y-2 group-open:rotate-45" />
              <span className="h-0.5 w-5 rounded bg-brand transition group-open:opacity-0" />
              <span className="h-0.5 w-5 rounded bg-brand transition group-open:-translate-y-2 group-open:-rotate-45" />
              <span className="sr-only">Menu</span>
            </summary>
            <nav className="absolute right-0 mt-3 flex w-64 animate-fade-up flex-col rounded-3xl border border-slate-100 bg-white/95 p-2 shadow-2xl backdrop-blur-xl">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-2.5 hover:bg-brand-light">
                  {item.label}
                </Link>
              ))}
              <Link
                href="/book-appointment"
                className="mt-1 rounded-2xl bg-brand px-4 py-2.5 text-center font-semibold text-white"
              >
                Book Appointment
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
