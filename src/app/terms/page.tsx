import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { termsSections } from "@/data/terms";

export const metadata: Metadata = {
  title: "Terms & Conditions | Stratoshub",
  description:
    "Terms & Conditions governing engagements with PT Semesta Harsa Karya (Stratoshub) — covering the NDA, MSA, SOW process, engagement models, payment terms, and intellectual property.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="bg-cream-100 bg-noise px-6 pb-4 pt-20 text-center">
          <p className="font-mono-tight text-xs uppercase tracking-[0.3em] text-navy-900/50">
            Legal
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl font-mono-tight text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl">
            Terms &amp; Conditions
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-navy-900/70">
            These Terms &amp; Conditions govern all engagements with PT Semesta Harsa
            Karya (Stratoshub). Please read them carefully before engaging our services.
          </p>
          <p className="mt-4 font-mono-tight text-xs text-navy-900/40">
            Effective January 2025 · Document No. SHK-POL-021
          </p>
        </section>

        <section className="bg-cream-100 px-6 py-16">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            {termsSections.map((section) => (
              <div
                key={section.number}
                className="rounded-2xl border border-navy-900/10 bg-white p-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono-tight text-sm font-bold text-gold-500">
                    {section.number}.
                  </span>
                  <h2 className="font-mono-tight text-xl font-bold text-navy-900">
                    {section.title}
                  </h2>
                </div>

                <ul className="mt-5 flex flex-col gap-3">
                  {section.clauses.map((clause) => (
                    <li
                      key={clause}
                      className="flex items-start gap-3 text-sm leading-relaxed text-navy-900/70"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      {clause}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="rounded-xl bg-navy-900/5 px-6 py-4 text-sm text-navy-900/70">
              <span className="font-semibold text-navy-900">Questions? </span>
              For any questions regarding these Terms & Conditions, please contact us at{" "}
              <a href="mailto:hello@stratoshub.id" className="font-semibold text-navy-900 underline">
                hello@stratoshub.id
              </a>{" "}
              or via WhatsApp at{" "}
              <a
                href="https://wa.me/6285177829480"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-navy-900 underline"
              >
                0851-7782-9480
              </a>
              .
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
