import type { Metadata } from "next";
import EnquiryForm, { type Field } from "@/components/EnquiryForm";

export const metadata: Metadata = { title: "Book Appointment" };

const fields: Field[] = [
  { name: "name", label: "Patient Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Contact No", type: "tel", required: true },
  { name: "date", label: "Date", type: "date", required: true },
  { name: "address", label: "Address", type: "textarea", required: true },
  { name: "appointmentFor", label: "Appointment for", type: "textarea", required: true },
];

export default function BookAppointmentPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl font-bold text-brand">Book Appointments</h1>
      <div className="mt-8 rounded-2xl bg-brand-light p-6 md:p-8">
        <EnquiryForm formName="Book Appointment" fields={fields} />
      </div>
    </section>
  );
}
