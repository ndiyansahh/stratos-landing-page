import Badge from "./Badge";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-100 bg-noise">
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-gold-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-navy-800/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-20 text-center sm:pt-28">
        <p className="font-mono-tight text-xs uppercase tracking-[0.3em] text-navy-900/50">
          Custom Software · AI · Cloud Infrastructure
        </p>

        <h1 className="mt-6 max-w-4xl font-mono-tight text-5xl font-bold leading-[1.05] tracking-tight text-navy-900 sm:text-7xl">
          WE BUILD
          <br />
          <span className="text-gold-500">PARTNERSHIPS</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy-900/70">
          Stratoshub is a technology partner for retail, logistics, fintech, and hospitality
          businesses — engineering full-stack products, AI-powered systems, and cloud
          infrastructure with a structured path from vendor engagement to a long-term,
          co-owned partnership.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Badge>Enterprise-Grade AI</Badge>
          <Badge>Secure & Compliant</Badge>
          <Badge>Rapid Deployment</Badge>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-navy-900 px-8 py-4 font-mono-tight text-sm font-semibold text-cream-50 transition-colors hover:bg-navy-800"
          >
            Start a Conversation →
          </a>
          <a
            href="/software-solution"
            className="rounded-full border border-navy-900/15 bg-white px-8 py-4 font-mono-tight text-sm font-semibold text-navy-900 transition-colors hover:border-navy-900/30"
          >
            See How We Partner
          </a>
        </div>

        <p className="mt-6 font-mono-tight text-xs text-navy-900/40">
          or scroll down to see how we work
        </p>
      </div>
    </section>
  );
}
