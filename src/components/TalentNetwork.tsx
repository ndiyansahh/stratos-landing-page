const companies = [
  { name: "Gojek & GoTo Group", description: "Southeast Asia's leading super-app and fintech platform" },
  { name: "Grab", description: "Regional ride-hailing, delivery & financial services unicorn" },
  { name: "Traveloka", description: "Southeast Asia's largest travel and lifestyle platform" },
  { name: "eFishery", description: "Indonesia's pioneering agri-tech unicorn" },
];

export default function TalentNetwork() {
  return (
    <section id="talent" className="bg-navy-950 bg-noise-dark px-6 py-24 text-cream-50">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono-tight text-xs uppercase tracking-[0.3em] text-gold-400">
          Our Talent Network
        </p>
        <h2 className="mt-4 max-w-2xl font-mono-tight text-4xl font-bold tracking-tight sm:text-5xl">
          Engineering standards built at scale
        </h2>
        <p className="mt-5 max-w-2xl text-cream-50/60">
          Senior-level engineers and product professionals with backgrounds from
          Indonesia&apos;s leading technology companies.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="rounded-2xl border border-cream-50/10 bg-navy-900/60 p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-sm text-navy-950">
                ✓
              </span>
              <h3 className="mt-4 font-mono-tight text-base font-bold">{company.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-50/60">
                {company.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-gold-500 px-8 py-6">
          <p className="italic text-navy-950">
            Every project benefits from engineering standards, system design patterns, and
            delivery practices developed at scale inside Indonesia&apos;s most demanding
            technology environments.
          </p>
        </div>
      </div>
    </section>
  );
}
