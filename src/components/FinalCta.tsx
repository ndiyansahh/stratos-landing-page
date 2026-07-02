const steps = [
  "Sign the mutual NDA to open a protected discussion space.",
  "Align on scope & sign the MSA to establish the legal framework.",
  "Scope the first SOW and confirm Down Payment to kick off delivery.",
];

export default function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-cream-100 bg-noise px-6 py-24">
      <div className="pointer-events-none absolute right-[-10%] top-0 h-96 w-96 rounded-full bg-gold-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-mono-tight text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Let&apos;s Build This Together
        </h2>
        <p className="mt-5 text-lg text-navy-900/70">
          We approach every engagement as a long-term investment in quality,
          communication, and relationship.
        </p>

        <div className="mx-auto mt-12 flex max-w-lg flex-col gap-4 text-left">
          {steps.map((step, i) => (
            <div key={step} className="flex items-start gap-4 rounded-xl border border-navy-900/10 bg-white p-5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500 font-mono-tight text-xs font-bold text-navy-950">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-navy-900/80">{step}</p>
            </div>
          ))}
        </div>

        <a
          href="mailto:hello@stratoshub.id"
          className="mt-12 inline-block rounded-full bg-navy-900 px-10 py-4 font-mono-tight text-sm font-semibold text-cream-50 transition-colors hover:bg-navy-800"
        >
          Start a Conversation →
        </a>
      </div>
    </section>
  );
}
