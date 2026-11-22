import Reveal from "@/components/Reveal";

export default function ServiceGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal as="li" key={item} delay={(i % 3) * 90}>
          <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-xl hover:shadow-brand/10">
            <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-br from-brand/10 to-leaf/10 transition-transform duration-500 group-hover:scale-150" />
            <span className="relative font-display text-sm font-bold text-brand/40">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="relative mt-3 font-display text-lg font-semibold leading-snug">{item}</p>
            <span className="relative mt-4 block h-1 w-10 rounded-full bg-gradient-to-r from-brand to-leaf transition-all duration-300 group-hover:w-20" />
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
