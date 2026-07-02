function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      {children}
    </svg>
  );
}

const capabilities = [
  {
    icon: (
      <IconWrap>
        <path d="M9.5 3a3.5 3.5 0 0 0-3.5 3.5v.2A3.5 3.5 0 0 0 4 10v.5a3 3 0 0 0 1 5.6 3.5 3.5 0 0 0 3.4 3.4A2.5 2.5 0 0 0 11 17V6a3 3 0 0 0-1.5-3Z" />
        <path d="M14.5 3a3.5 3.5 0 0 1 3.5 3.5v.2A3.5 3.5 0 0 1 20 10v.5a3 3 0 0 1-1 5.6 3.5 3.5 0 0 1-3.4 3.4A2.5 2.5 0 0 1 13 17V6a3 3 0 0 1 1.5-3Z" />
      </IconWrap>
    ),
    title: "Cognitive Reasoning Systems",
    description:
      "AI agents with sophisticated reasoning frameworks that understand complex contexts, evaluate variables, and make nuanced decisions based on both explicit instructions and implicit business goals.",
  },
  {
    icon: (
      <IconWrap>
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M12 7v6M12 13 6.5 17.5M12 13l5.5 4.5" />
      </IconWrap>
    ),
    title: "Multi-Agent Collaboration",
    description:
      "Interconnected agent ecosystems where specialized AI entities work together through coordination protocols, creating emergent intelligence beyond individual agent capabilities.",
  },
  {
    icon: (
      <IconWrap>
        <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
        <circle cx="12" cy="12" r="3" />
      </IconWrap>
    ),
    title: "Adaptive Learning Mechanisms",
    description:
      "Self-improving agents that evolve through reinforcement learning and feedback loops, continuously adapting to new data patterns and changing business environments.",
  },
  {
    icon: (
      <IconWrap>
        <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
        <path d="M7 9h10M7 12.5h6" />
      </IconWrap>
    ),
    title: "Natural Language Understanding",
    description:
      "Advanced processing capabilities that enable AI agents to comprehend nuanced communication, extract insights from unstructured text, and engage in context-aware conversations.",
  },
  {
    icon: (
      <IconWrap>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
      </IconWrap>
    ),
    title: "Autonomous Decision Execution",
    description:
      "Agents that independently execute business processes, interface with existing systems, and take appropriate actions based on predefined authorization frameworks.",
  },
  {
    icon: (
      <IconWrap>
        <path d="M3 3v18h18" />
        <path d="M7 15l3.5-4.5 3 3L19 7" />
      </IconWrap>
    ),
    title: "Business Intelligence Integration",
    description:
      "Agents that connect to your data ecosystem, analyzing information streams to provide real-time insights, anomaly detection, and predictive analytics to decision-makers.",
  },
];

export default function AiCapabilities() {
  return (
    <section className="bg-navy-950 bg-noise-dark px-6 py-24 text-cream-50">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono-tight text-xs uppercase tracking-[0.3em] text-gold-400">
          What Powers Our AI
        </p>
        <h2 className="mt-4 max-w-2xl font-mono-tight text-4xl font-bold uppercase tracking-tight sm:text-5xl">
          AI Agent Capabilities
        </h2>
        <p className="mt-5 max-w-2xl text-cream-50/60">
          Our AI agents combine multiple advanced capabilities to create intelligent
          systems that transform your operational landscape and deliver measurable
          business value.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-2xl border border-cream-50/10 bg-navy-900/60 p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cream-50/15 bg-navy-900 text-gold-400">
                {capability.icon}
              </div>
              <h3 className="mt-5 font-mono-tight text-lg font-bold text-cream-50">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-50/60">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
