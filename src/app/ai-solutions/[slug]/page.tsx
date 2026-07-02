import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import { aiSolutions } from "@/data/aiSolutions";

export function generateStaticParams() {
  return aiSolutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = aiSolutions.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: `${solution.title} | Stratoshub`,
    description: solution.summary,
  };
}

export default async function AiSolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = aiSolutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="bg-cream-100 bg-noise px-6 pb-4 pt-16">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono-tight text-xs text-navy-900/50">
              Written by: {solution.author} on {solution.date}
            </p>
            <p className="mt-6 font-mono-tight text-xs uppercase tracking-[0.3em] text-gold-500">
              {solution.eyebrow}
            </p>
            <h1 className="mt-4 font-mono-tight text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
              {solution.title}
            </h1>
            <p className="mt-5 max-w-2xl italic text-navy-900/70">{solution.summary}</p>
            <p className="mt-6 font-mono-tight text-xs text-navy-900/40">{solution.readTime} READ</p>
          </div>
        </section>

        <section className="bg-cream-100 px-6 py-12">
          <div className="mx-auto flex max-w-3xl flex-col gap-12">
            <div>
              <h2 className="font-mono-tight text-2xl font-bold text-navy-900">
                The Challenge
              </h2>
              <p className="mt-3 text-navy-900/70">
                Our client was facing several operational challenges:
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {solution.challenge.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-navy-900/70"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-mono-tight text-2xl font-bold text-navy-900">
                Our Solution
              </h2>
              <div className="mt-5 flex flex-col gap-8">
                {solution.solutionGroups.map((group, i) => (
                  <div key={group.title} className="rounded-2xl border border-navy-900/10 bg-white p-7">
                    <h3 className="font-mono-tight text-lg font-bold text-navy-900">
                      {i + 1}. {group.title}
                    </h3>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {group.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-relaxed text-navy-900/70"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-900/30" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {solution.platforms && (
              <div>
                <h2 className="font-mono-tight text-2xl font-bold text-navy-900">
                  Platform Performance Metrics
                </h2>
                <p className="mt-3 text-navy-900/70">
                  Consistent high-quality service across all connected messaging
                  platforms.
                </p>
                <div className="mt-5 overflow-x-auto rounded-2xl border border-navy-900/10 bg-white">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-navy-900/10 text-navy-900/50">
                        <th className="px-5 py-3 font-mono-tight text-xs uppercase tracking-wide">Platform</th>
                        <th className="px-5 py-3 font-mono-tight text-xs uppercase tracking-wide">Response Rate</th>
                        <th className="px-5 py-3 font-mono-tight text-xs uppercase tracking-wide">Avg. Response Time</th>
                        <th className="px-5 py-3 font-mono-tight text-xs uppercase tracking-wide">Satisfaction</th>
                      </tr>
                    </thead>
                    <tbody>
                      {solution.platforms.map((platform) => (
                        <tr key={platform.name} className="border-b border-navy-900/5 last:border-0">
                          <td className="px-5 py-3 font-semibold text-navy-900">{platform.name}</td>
                          <td className="px-5 py-3 text-navy-900/70">{platform.responseRate}</td>
                          <td className="px-5 py-3 text-navy-900/70">{platform.avgResponseTime}</td>
                          <td className="px-5 py-3 text-navy-900/70">{platform.satisfaction}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div>
              <h2 className="font-mono-tight text-2xl font-bold text-navy-900">
                Key Results
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {solution.results.map((result) => (
                  <div
                    key={result}
                    className="rounded-xl bg-navy-900 px-5 py-4 text-sm leading-relaxed text-cream-50/90"
                  >
                    {result}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-mono-tight text-2xl font-bold text-navy-900">
                Technology Stack
              </h2>
              <div className="mt-5 rounded-2xl border border-navy-900/10 bg-white p-7">
                <dl className="flex flex-col gap-4">
                  {solution.techStack.map((stack) => (
                    <div key={stack.label} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                      <dt className="w-40 shrink-0 font-mono-tight text-sm font-bold text-navy-900">
                        {stack.label}:
                      </dt>
                      <dd className="text-sm text-navy-900/70">{stack.items}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
