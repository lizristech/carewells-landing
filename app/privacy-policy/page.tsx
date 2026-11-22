import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const metadata: Metadata = { title: "Privacy Policy" };

async function getPolicyText() {
  "use cache";
  return readFile(path.join(process.cwd(), "content", "privacy.txt"), "utf8");
}

export default async function PrivacyPolicyPage() {
  const text = await getPolicyText();
  // First two paragraphs are the title and "Last updated" line
  const [, updated, ...paragraphs] = text.split(/\n\n+/);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 leading-relaxed">
      <h1 className="font-display text-4xl font-bold text-brand">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">{updated}</p>
      <div className="mt-8 space-y-4">
        {paragraphs.map((para, i) =>
          /^(\d+\.\s|[A-Z][A-Z ,'?]{8,}$)/.test(para) ? (
            <h2 key={i} className="pt-4 font-display text-xl font-semibold text-brand">
              {para}
            </h2>
          ) : (
            <p key={i}>{para}</p>
          ),
        )}
      </div>
    </article>
  );
}
