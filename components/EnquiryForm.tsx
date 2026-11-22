"use client";

import { useActionState } from "react";
import { submitEnquiry, type FormState } from "@/app/actions";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "textarea" | "select";
  required?: boolean;
  options?: string[];
};

type Props = {
  formName: string;
  fields: Field[];
  submitLabel?: string;
};

const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 outline-none transition placeholder:text-slate-400 hover:border-brand/30 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10";

export default function EnquiryForm({ formName, fields, submitLabel = "Send" }: Props) {
  const required = fields.filter((f) => f.required).map((f) => f.name);
  const action = submitEnquiry.bind(null, formName, required);
  const [state, formAction, pending] = useActionState<FormState, FormData>(action, null);

  if (state?.ok) {
    return (
      <p role="status" className="animate-fade-up rounded-3xl border border-green-200 bg-green-50 p-8 text-center text-lg text-green-800">
        <span className="mb-3 block text-4xl">✅</span>
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} className="grid gap-4 sm:grid-cols-2">
      {fields.map((field) => {
        const wide = field.type === "textarea" || field.type === "select";
        return (
          <label key={field.name} className={`flex flex-col gap-1.5 ${wide ? "sm:col-span-2" : ""}`}>
            <span className="text-sm font-medium">
              {field.label}
              {field.required && <span className="text-red-600"> *</span>}
            </span>
            {field.type === "textarea" ? (
              <textarea name={field.name} required={field.required} rows={3} className={inputClass} />
            ) : field.type === "select" ? (
              <select name={field.name} required={field.required} className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                {field.options?.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                className={inputClass}
              />
            )}
          </label>
        );
      })}
      {state && !state.ok && (
        <p role="alert" className="text-red-700 sm:col-span-2">
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-gradient-to-r from-brand to-sky-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:shadow-xl disabled:translate-y-0 disabled:opacity-60 sm:col-span-2 sm:justify-self-start"
      >
        {pending ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
