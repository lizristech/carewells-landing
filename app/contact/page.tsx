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
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1fr_1.4fr]">
      <div>
        <h1 className="font-display text-4xl font-bold text-brand">Get in Touch</h1>
        <ul className="mt-8 space-y-6 text-lg">
          <li>
            <p className="text-sm font-semibold uppercase text-leaf">Address</p>
            {site.address}
          </li>
          <li>
            <p className="text-sm font-semibold uppercase text-leaf">Phone</p>
            {site.phones.map((p, i) => (
              <span key={p}>
                {i > 0 && " | "}
                <a href={telHref(p)} className="hover:text-brand">
                  {p}
                </a>
              </span>
            ))}
          </li>
          <li>
            <p className="text-sm font-semibold uppercase text-leaf">Email</p>
            <a href={`mailto:${site.email}`} className="hover:text-brand">
              {site.email}
            </a>
          </li>
        </ul>
      </div>
      <div className="rounded-2xl bg-brand-light p-6 md:p-8">
        <EnquiryForm formName="Contact" fields={fields} />
      </div>
    </section>
  );
}
