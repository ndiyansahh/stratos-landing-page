export default function PartnershipVision() {
  return (
    <section id="partnership" className="bg-navy-950 bg-noise-dark px-6 py-24 text-cream-50">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono-tight text-xs uppercase tracking-[0.3em] text-gold-400">
          Partnership Vision
        </p>
        <h2 className="mt-4 max-w-2xl font-mono-tight text-4xl font-bold tracking-tight sm:text-5xl">
          We don&apos;t merely deliver software — we build partnerships
        </h2>
        <p className="mt-5 max-w-2xl text-cream-50/60">
          Every relationship is structured in two phases, moving from proven delivery to
          shared ownership.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gold-400/30 bg-navy-900 p-9">
            <span className="font-mono-tight text-xs font-semibold text-gold-400">
              PHASE 1
            </span>
            <h3 className="mt-3 font-mono-tight text-2xl font-bold">Vendor Engagement</h3>
            <p className="mt-4 leading-relaxed text-cream-50/70">
              Stratoshub serves as the technology vendor. Projects are executed under a formal
              NDA + MSA + SOW structure with clear deliverables, milestones, and payment
              terms.
            </p>
            <div className="mt-6 border-t border-cream-50/10 pt-5">
              <p className="font-mono-tight text-xs uppercase tracking-widest text-gold-400/80">
                Objective
              </p>
              <p className="mt-2 italic text-cream-50/80">
                Deliver quality, establish trust, and prove capability.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-cream-50/10 bg-navy-900/50 p-9">
            <span className="font-mono-tight text-xs font-semibold text-cream-50/50">
              PHASE 2
            </span>
            <h3 className="mt-3 font-mono-tight text-2xl font-bold">Joint Entity (Strategic)</h3>
            <p className="mt-4 leading-relaxed text-cream-50/70">
              After establishing a successful track record together, both parties may
              co-found a new PT combining our technical capability with the partner&apos;s
              market access, network, and capital.
            </p>
            <div className="mt-6 border-t border-cream-50/10 pt-5">
              <p className="font-mono-tight text-xs uppercase tracking-widest text-cream-50/40">
                Objective
              </p>
              <p className="mt-2 italic text-cream-50/80">
                Build a scalable, jointly-owned business together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
