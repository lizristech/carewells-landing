"use server";

export type FormState = { ok: boolean; message: string } | null;

const MAX_FIELD_LENGTH = 5000;

export async function submitEnquiry(
  formName: string,
  required: string[],
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const data: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (key.startsWith("$ACTION") || typeof value !== "string") continue;
    data[key] = value.trim().slice(0, MAX_FIELD_LENGTH);
  }

  const missing = required.filter((field) => !data[field]);
  if (missing.length > 0) {
    return { ok: false, message: "Please fill in all required fields." };
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  // TODO: deliver submissions (e.g. send email to info@carewells.lk via an
  // email provider such as Resend or SMTP). For now they are only logged.
  console.log(`[${formName}] submission`, data);

  return { ok: true, message: "Thank you! We have received your request and will contact you soon." };
}
