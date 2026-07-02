const footerLinks = {
  Services: [
    { label: "Full-Stack Development", href: "/#services" },
    { label: "Software Solution", href: "/software-solution" },
  ],
  Company: [
    { label: "Our Client", href: "/our-client" },
    { label: "Talent Network", href: "/#talent" },
  ],
  Support: [
    { label: "Contact Us", href: "/#contact" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 px-6 pt-16 text-cream-50">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-mono-tight text-lg font-bold text-cream-50">
              stratoshub<span className="text-gold-400">.</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-50/60">
              PT Semesta Harsa Karya — a technology partner engineering full-stack
              products, AI-powered systems, and cloud infrastructure.
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-cream-50/60">
              <span className="flex items-start gap-2.5">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="mt-0.5 h-4 w-4 shrink-0"
                >
                  <path d="M12 21s-7-6.13-7-11a7 7 0 0 1 14 0c0 4.87-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Office 8, Level 18-A, Jalan Senopati No. 8B, SCBD, Jakarta Selatan
              </span>
              <a
                href="https://wa.me/6285177829480"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-cream-50"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="h-4 w-4 shrink-0"
                >
                  <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 9.5 9.5 0 0 0 3 .48 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 9.5 9.5 0 0 0 .48 3 1 1 0 0 1-.25 1L6.6 10.8Z" />
                </svg>
                WhatsApp: 0851-7782-9480
              </a>
              <a
                href="mailto:hello@stratoshub.id"
                className="flex items-center gap-2.5 transition-colors hover:text-cream-50"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="h-4 w-4 shrink-0"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3.5 6 8.5 7 8.5-7" />
                </svg>
                hello@stratoshub.id
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-mono-tight text-xs font-bold uppercase tracking-widest text-cream-50">
                {title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cream-50/60 transition-colors hover:text-cream-50"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-50/10 py-6 sm:flex-row">
          <p className="font-mono-tight text-xs text-cream-50/40">
            © 2022 PT Semesta Harsa Karya. All rights reserved.
          </p>
          <p className="font-mono-tight text-xs text-cream-50/40">
            Structured partnerships, built to last.
          </p>
        </div>
      </div>
    </footer>
  );
}
