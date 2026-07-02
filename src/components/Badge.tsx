export default function Badge({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const toneClasses =
    tone === "dark"
      ? "bg-navy-800/80 text-cream-50 border-navy-700"
      : "bg-white text-navy-900 border-navy-900/10";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 font-mono-tight text-xs ${toneClasses}`}
    >
      <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gold-500 text-[9px] text-navy-950">
        ✓
      </span>
      {children}
    </span>
  );
}
