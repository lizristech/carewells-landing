export default function ServiceGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 rounded-xl border border-brand/15 bg-white p-5 shadow-sm"
        >
          <span className="h-3 w-3 shrink-0 rounded-full bg-leaf" aria-hidden />
          <span className="font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
}
