import type { Metadata } from "next";
import Nav from "@/components/Nav";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import { clients } from "@/data/clients";

export const metadata: Metadata = {
  title: "Our Client | Stratoshub",
  description:
    "Case studies across retail supply chain, fintech & payments, and AI integration — engagements with Lippo Group, Transcorp, Blue Bird Group, Bank Mandiri, Modalku, Tokopedia, and more.",
};

const categories = Array.from(new Set(clients.map((c) => c.category)));

export default function OurClientPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="bg-cream-100 bg-noise px-6 pb-4 pt-20 text-center">
          <p className="font-mono-tight text-xs uppercase tracking-[0.3em] text-navy-900/50">
            Our Client
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl font-mono-tight text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl">
            Case studies from real engagements
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-navy-900/70">
            Retail supply chain, fintech infrastructure, and AI-powered products — delivered
            for Indonesia&apos;s largest conglomerates and fast-growing businesses.
          </p>
        </section>

        {categories.map((category) => (
          <section key={category} className="bg-cream-100 px-6 py-16">
            <div className="mx-auto max-w-5xl">
              <h2 className="font-mono-tight text-2xl font-bold text-navy-900 sm:text-3xl">
                {category}
              </h2>

              <div className="mt-8 flex flex-col gap-6">
                {clients
                  .filter((c) => c.category === category)
                  .map((client) => (
                    <div
                      key={client.slug}
                      className="rounded-2xl border border-navy-900/10 bg-white p-8"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-block rounded-full bg-navy-900 px-3 py-1 font-mono-tight text-xs text-gold-400">
                          {client.tag}
                        </span>
                      </div>
                      <h3 className="mt-4 font-mono-tight text-xl font-bold text-navy-900">
                        {client.name}
                      </h3>
                      <p className="mt-2 font-mono-tight text-sm text-navy-900/50">
                        {client.scope}
                      </p>

                      <ul className="mt-5 flex flex-col gap-3">
                        {client.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-relaxed text-navy-900/70"
                          >
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 rounded-xl bg-navy-900/5 px-5 py-4">
                        <p className="font-mono-tight text-xs uppercase tracking-widest text-gold-500">
                          Outcome
                        </p>
                        <p className="mt-2 text-sm italic leading-relaxed text-navy-900/80">
                          {client.outcome}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
