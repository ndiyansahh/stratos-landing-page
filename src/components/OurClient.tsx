import { clients } from "@/data/clients";

export default function OurClient() {
  return (
    <section id="our-client" className="bg-cream-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono-tight text-xs uppercase tracking-[0.3em] text-gold-500">
          Our Client
        </p>
        <h2 className="mt-4 max-w-2xl font-mono-tight text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Trusted across Indonesia&apos;s leading businesses
        </h2>
        <p className="mt-5 max-w-2xl text-navy-900/70">
          From retail conglomerates to fintech infrastructure and AI-powered products —
          engagements consistently focused on measurable operational impact.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <div
              key={client.slug}
              className="rounded-2xl border border-navy-900/10 bg-white p-7"
            >
              <span className="inline-block rounded-full bg-navy-900/5 px-3 py-1 font-mono-tight text-xs text-navy-900/60">
                {client.tag}
              </span>
              <h3 className="mt-4 font-mono-tight text-base font-bold text-navy-900">
                {client.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/60">
                {client.scope}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/our-client"
            className="inline-block rounded-full bg-navy-900 px-8 py-4 font-mono-tight text-sm font-semibold text-cream-50 transition-colors hover:bg-navy-800"
          >
            View All Case Studies →
          </a>
        </div>
      </div>
    </section>
  );
}
