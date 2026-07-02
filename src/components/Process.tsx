const steps = [
  {
    number: "1",
    icon: "✎",
    title: "NDA — Non-Disclosure Agreement",
    description:
      "Protects confidential information shared during pre-engagement discussions — allowing both parties to speak freely.",
  },
  {
    number: "2",
    icon: "⚙",
    title: "MSA — Master Service Agreement",
    description:
      "Establishes the master legal framework: collaboration terms, IP ownership, payment principles & dispute resolution.",
  },
  {
    number: "3",
    icon: "▤",
    title: "SOW — Statement of Work",
    description:
      "Project-specific contract defining exact scope, deliverables, timeline, milestones and pricing — the formal trigger for work to begin.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-navy-950 bg-noise-dark px-6 py-24 text-cream-50">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono-tight text-xs uppercase tracking-[0.3em] text-gold-400">
          How We Engage
        </p>
        <h2 className="mt-4 font-mono-tight text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl">
          Our Engagement Methodology
        </h2>

        <div className="relative mt-20 border-r border-cream-50/15 pr-10 sm:pr-16">
          <div className="flex flex-col gap-20">
            {steps.map((step) => (
              <div key={step.number} className="relative text-right">
                <span className="absolute -right-10 top-0 flex h-11 w-11 -translate-y-1 translate-x-1/2 items-center justify-center rounded-full border border-cream-50/20 bg-navy-900 font-mono-tight text-base text-gold-400 sm:-right-16">
                  {step.icon}
                </span>
                <h3 className="font-mono-tight text-xl font-bold sm:text-2xl">
                  {step.number}. {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-cream-50/60 sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-xl border border-gold-400/20 bg-navy-900/60 px-6 py-4 text-sm text-cream-50/70">
          <span className="font-semibold text-gold-400">Important: </span>
          No work or deliverable is produced without a signed SOW and an accepted Down
          Payment.
        </div>
      </div>
    </section>
  );
}
