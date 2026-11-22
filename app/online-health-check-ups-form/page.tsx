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
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl font-bold text-brand">Health Check-ups</h1>
      <p className="mt-2 text-xl">Self-Request Form For Health Check-ups</p>
      <div className="mt-8 rounded-2xl bg-brand-light p-6 md:p-8">
        <h2 className="mb-6 font-display text-lg font-semibold uppercase text-brand">Patient Information</h2>
        <EnquiryForm formName="Health Check-up" fields={fields} />
      </div>
    </section>
  );
}
