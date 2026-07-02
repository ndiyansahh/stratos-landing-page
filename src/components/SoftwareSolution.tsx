const options = [
  {
    label: "OPTION A",
    title: "Freelance Engagement",
    range: "< IDR 100M",
    description:
      "Fastest to initiate — 1-page agreement, ideal for MVPs, prototypes & first projects to establish trust.",
    recommended: false,
  },
  {
    label: "OPTION B",
    title: "PT as Vendor",
    range: "≥ IDR 100M · Recommended",
    description:
      "Standard model — full NDA + MSA + SOW structure, official invoicing, complete team mobilization.",
    recommended: true,
  },
  {
    label: "OPTION C",
    title: "Joint Entity",
    range: "Long-Term Strategic",
    description:
      "Co-founded PT with defined equity & governance, combining our tech capability with partner's market reach.",
    recommended: false,
  },
];

const milestones = [
  { percent: "50%", label: "M1 · Project Kickoff", description: "SOW signed, DP settled, team mobilized." },
  { percent: "30%", label: "M2 · Mid Delivery", description: "Mid-project checkpoint delivered and approved." },
  { percent: "20%", label: "M3 · Final Delivery", description: "UAT completed, source code & docs handed over." },
];

export default function SoftwareSolution() {
  return (
    <section id="software-solution" className="bg-cream-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono-tight text-xs uppercase tracking-[0.3em] text-gold-500">
          Software Solution
        </p>
        <h2 className="mt-4 max-w-2xl font-mono-tight text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Choose the model that fits your project
        </h2>
        <p className="mt-5 max-w-2xl text-navy-900/70">
          Three engagement models, recommended based on project size, duration & nature of
          collaboration.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {options.map((option) => (
            <div
              key={option.label}
              className={`rounded-2xl p-8 ${
                option.recommended
                  ? "bg-navy-900 text-cream-50 ring-2 ring-gold-500"
                  : "border border-navy-900/10 bg-white text-navy-900"
              }`}
            >
              <span
                className={`font-mono-tight text-xs font-semibold ${
                  option.recommended ? "text-gold-400" : "text-navy-900/40"
                }`}
              >
                {option.label}
              </span>
              <h3 className="mt-2 font-mono-tight text-xl font-bold">{option.title}</h3>
              <span
                className={`mt-4 inline-block rounded-full px-3.5 py-1.5 font-mono-tight text-xs ${
                  option.recommended
                    ? "bg-gold-500 text-navy-950"
                    : "bg-navy-900/5 text-navy-900/70"
                }`}
              >
                {option.range}
              </span>
              <p
                className={`mt-5 text-sm leading-relaxed ${
                  option.recommended ? "text-cream-50/70" : "text-navy-900/60"
                }`}
              >
                {option.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="font-mono-tight text-2xl font-bold text-navy-900">
            Payment Structure
          </h3>
          <p className="mt-3 max-w-2xl text-navy-900/70">
            Milestone-based billing (Option B) — payment tied to delivery and approval,
            not hours worked.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {milestones.map((m) => (
              <div key={m.label} className="rounded-2xl border border-navy-900/10 bg-white p-7">
                <span className="font-mono-tight text-4xl font-bold text-navy-900">
                  {m.percent}
                </span>
                <p className="mt-3 font-mono-tight text-sm font-semibold text-navy-900">
                  {m.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/60">
                  {m.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-xl bg-navy-900 px-6 py-5 text-cream-50">
              <p className="font-mono-tight text-sm font-semibold text-gold-400">
                5 business days
              </p>
              <p className="mt-1 text-sm text-cream-50/70">
                All payments must be settled within this window of invoice issuance.
              </p>
            </div>
            <div className="rounded-xl bg-navy-900/5 px-6 py-5 text-navy-900">
              <p className="font-mono-tight text-sm font-semibold text-navy-900">
                All-Inclusive Quotations
              </p>
              <p className="mt-1 text-sm text-navy-900/60">
                Covers all manpower & infrastructure — no hidden costs unless scope
                formally changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
