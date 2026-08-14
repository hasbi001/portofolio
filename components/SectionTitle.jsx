export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[.25em] text-violet-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-gray-400">{description}</p>}
    </div>
  );
}