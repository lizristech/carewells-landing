// Infinite scrolling strip; the list is rendered twice so the loop is seamless
export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee relative overflow-hidden border-y border-brand/10 bg-white py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-10">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center gap-10 font-display text-lg font-semibold whitespace-nowrap text-ink/70"
          >
            {item}
            <span className="text-leaf">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
