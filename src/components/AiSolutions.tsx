import { aiSolutions } from "@/data/aiSolutions";

export default function AiSolutions() {
  return (
    <section id="ai-solutions" className="bg-cream-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono-tight text-xs uppercase tracking-[0.3em] text-gold-500">
          AI Solutions
        </p>
        <h2 className="mt-4 max-w-2xl font-mono-tight text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          AI agents built for real business outcomes
        </h2>
        <p className="mt-5 max-w-2xl text-navy-900/70">
          From multi-channel customer service to unified ecommerce CRM — our AI systems
          integrate directly with your existing business data.
        </p>

        <div className="mt-14 flex flex-col gap-16">
          {aiSolutions.map((solution) => (
            <div key={solution.slug} className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-mono-tight text-xs uppercase tracking-[0.2em] text-gold-500">
                  {solution.eyebrow}
                </p>
                <h3 className="mt-3 font-mono-tight text-2xl font-bold text-navy-900 sm:text-3xl">
                  {solution.title}
                </h3>
                <p className="mt-4 leading-relaxed text-navy-900/70">{solution.summary}</p>
                <a
                  href={`/ai-solutions/${solution.slug}`}
                  className="mt-6 inline-block rounded-full bg-gold-500 px-6 py-3 font-mono-tight text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
                >
                  Learn More →
                </a>
              </div>

              {solution.platforms && (
                <div className="rounded-2xl border border-navy-900/10 bg-white p-7">
                  <h4 className="font-mono-tight text-sm font-bold text-navy-900">
                    Unified Platform Integration
                  </h4>
                  <p className="mt-1 text-xs text-navy-900/50">
                    Connect with customers across multiple channels through a single
                    AI-powered interface
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {solution.platforms.map((platform) => (
                      <div
                        key={platform.name}
                        className="rounded-xl bg-navy-900/5 p-4"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono-tight text-sm font-semibold text-navy-900">
                            {platform.name}
                          </span>
                          <span className="rounded-full bg-gold-500/20 px-2 py-0.5 font-mono-tight text-[10px] text-gold-600">
                            Connected
                          </span>
                        </div>
                        <dl className="mt-3 flex flex-col gap-1 text-xs text-navy-900/60">
                          <div className="flex justify-between">
                            <dt>Response Rate</dt>
                            <dd className="font-semibold text-navy-900">{platform.responseRate}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt>Avg. Response Time</dt>
                            <dd className="font-semibold text-navy-900">{platform.avgResponseTime}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt>Satisfaction</dt>
                            <dd className="font-semibold text-navy-900">{platform.satisfaction}</dd>
                          </div>
                        </dl>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
