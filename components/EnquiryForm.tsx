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
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function EnquiryForm({ formName, fields, submitLabel = "Send" }: Props) {
  const required = fields.filter((f) => f.required).map((f) => f.name);
  const action = submitEnquiry.bind(null, formName, required);
  const [state, formAction, pending] = useActionState<FormState, FormData>(action, null);

  if (state?.ok) {
    return (
      <p role="status" className="rounded-lg bg-green-50 p-6 text-green-800">
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
        className="rounded-full bg-brand px-8 py-3 font-semibold text-white hover:bg-brand-dark disabled:opacity-60 sm:col-span-2 sm:justify-self-start"
      >
        {pending ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
