import type { Metadata } from "next";
import EnquiryForm, { type Field } from "@/components/EnquiryForm";
import { healthCheckTests } from "@/lib/site";

export const metadata: Metadata = { title: "Online Health Check-ups" };

const fields: Field[] = [
  { name: "name", label: "Patient Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Contact No", type: "tel", required: true },
  { name: "date", label: "Date", type: "date", required: true },
  { name: "address", label: "Address", type: "textarea", required: true },
  { name: "test", label: "Test", type: "select", required: true, options: healthCheckTests },
];

export default function HealthCheckUpsPage() {
  return (
    <section className="relative -mt-[72px] overflow-hidden pt-[72px]">
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 animate-blob rounded-full bg-sky-300/40 blur-3xl" />
      <div className="pointer-events-none absolute top-60 -right-24 h-96 w-96 animate-blob rounded-full bg-leaf/20 blur-3xl [animation-delay:-8s]" />
      <div className="relative mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="animate-fade-up font-display text-5xl font-extrabold tracking-tight text-gradient">Health Check-ups</h1>
      <p className="mt-2 text-xl">Self-Request Form For Health Check-ups</p>
      <div className="mt-8 rounded-[2rem] border border-white bg-white/70 p-6 shadow-2xl shadow-brand/10 backdrop-blur-xl md:p-10">
        <h2 className="mb-6 font-display text-lg font-semibold uppercase text-brand">Patient Information</h2>
        <EnquiryForm formName="Health Check-up" fields={fields} />
      </div>
      </div>
    </section>
  );
}
