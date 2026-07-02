const services = [
  {
    icon: "</>",
    title: "Full-Stack Development",
    description: "Web, iOS, Android & Progressive Web Apps",
  },
  {
    icon: "◈",
    title: "AI Integration",
    description: "RAG systems, agentic workflows & LLM-powered products",
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    description: "AWS, GCP, Azure — CI/CD, Docker, Kubernetes, IaC",
  },
  {
    icon: "▲",
    title: "BI & Data Warehousing",
    description: "Dashboards, ETL pipelines & analytics (Metabase, BigQuery)",
  },
  {
    icon: "⚙",
    title: "ERP Integration",
    description: "Enterprise systems development on Odoo",
  },
  {
    icon: "✎",
    title: "Product & Design",
    description: "Discovery, UI/UX design & technical architecture",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono-tight text-xs uppercase tracking-[0.3em] text-gold-500">
          What We Do
        </p>
        <h2 className="mt-4 max-w-2xl font-mono-tight text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Full-cycle engineering, under one roof
        </h2>
        <p className="mt-5 max-w-2xl text-navy-900/70">
          An Indonesian technology company specializing in custom software engineering,
          mobile & web development, AI-powered solutions, and digital product strategy —
          serving retail, logistics, fintech, hospitality, and marketplace platforms.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-navy-900/10 bg-white p-7 transition-shadow hover:shadow-lg hover:shadow-navy-900/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 font-mono-tight text-lg text-gold-400">
                {service.icon}
              </div>
              <h3 className="mt-5 font-mono-tight text-lg font-bold text-navy-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
