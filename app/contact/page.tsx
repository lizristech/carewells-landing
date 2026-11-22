import type { Metadata } from "next";
import EnquiryForm, { type Field } from "@/components/EnquiryForm";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

const fields: Field[] = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Contact No", type: "tel", required: true },
  { name: "address", label: "Address", type: "textarea", required: true },
  { name: "message", label: "Message", type: "textarea", required: true },
];

export default function ContactPage() {
  return (
    <section className="relative -mt-[72px] overflow-hidden pt-[72px]">
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 animate-blob rounded-full bg-sky-300/40 blur-3xl" />
      <div className="pointer-events-none absolute top-60 -right-24 h-96 w-96 animate-blob rounded-full bg-leaf/20 blur-3xl [animation-delay:-8s]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1fr_1.4fr] md:py-20">
      <div>
        <h1 className="animate-fade-up font-display text-5xl font-extrabold tracking-tight text-gradient">Get in Touch</h1>
        <p className="mt-4 animate-fade-up text-lg text-ink/70" style={{ animationDelay: "100ms" }}>
          Questions, appointments or home visits, we&rsquo;re happy to help.
        </p>
        <ul className="mt-8 space-y-4 text-lg">
          <li className="rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
            <p className="text-sm font-semibold tracking-wider uppercase text-leaf">Address</p>
            {site.address}
          </li>
          <li className="rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
            <p className="text-sm font-semibold tracking-wider uppercase text-leaf">Phone</p>
            {site.phones.map((p, i) => (
              <span key={p}>
                {i > 0 && " | "}
                <a href={telHref(p)} className="hover:text-brand">
                  {p}
                </a>
              </span>
            ))}
          </li>
          <li className="rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
            <p className="text-sm font-semibold tracking-wider uppercase text-leaf">Email</p>
            <a href={`mailto:${site.email}`} className="hover:text-brand">
              {site.email}
            </a>
          </li>
        </ul>
      </div>
      <div className="animate-fade-up rounded-[2rem] border border-white bg-white/70 p-6 shadow-2xl shadow-brand/10 backdrop-blur-xl md:p-10" style={{ animationDelay: "200ms" }}>
        <EnquiryForm formName="Contact" fields={fields} />
      </div>
      </div>
    </section>
  );
}
