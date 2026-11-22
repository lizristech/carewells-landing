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
    <section className="relative -mt-[72px] overflow-hidden pt-[72px]">
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 animate-blob rounded-full bg-sky-300/40 blur-3xl" />
      <div className="pointer-events-none absolute top-60 -right-24 h-96 w-96 animate-blob rounded-full bg-leaf/20 blur-3xl [animation-delay:-8s]" />
      <div className="relative mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="animate-fade-up font-display text-5xl font-extrabold tracking-tight text-gradient">Book Appointments</h1>
      <div className="mt-8 rounded-[2rem] border border-white bg-white/70 p-6 shadow-2xl shadow-brand/10 backdrop-blur-xl md:p-10">
        <EnquiryForm formName="Book Appointment" fields={fields} />
      </div>
      </div>
    </section>
  );
}
