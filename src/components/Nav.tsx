"use client";

import { useState } from "react";

const primaryLinks = [
  { label: "Services", href: "/#services" },
  { label: "AI Solutions", href: "/#ai-solutions" },
  { label: "Our Client", href: "/our-client" },
  { label: "Talent", href: "/#talent" },
];

const dropdownGroups = [
  {
    label: "Solutions",
    items: [
      { label: "Software Solution", href: "/software-solution" },
      { label: "Partnership", href: "/software-solution#partnership" },
      { label: "Process", href: "/software-solution#process" },
    ],
  },
];

export default function Nav() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-cream-100/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="font-mono-tight text-lg font-bold tracking-tight text-navy-900">
          stratoshub<span className="text-gold-500">.</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {primaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono-tight text-sm text-navy-900/70 transition-colors hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}

          {dropdownGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpenGroup(group.label)}
              onMouseLeave={() => setOpenGroup(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 font-mono-tight text-sm text-navy-900/70 transition-colors hover:text-navy-900"
              >
                {group.label}
                <span aria-hidden className="text-xs">
                  ▾
                </span>
              </button>

              {openGroup === group.label && (
                <div className="absolute left-0 top-full w-56 rounded-xl border border-navy-900/10 bg-white p-2 shadow-lg">
                  {group.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 font-mono-tight text-sm text-navy-900/70 transition-colors hover:bg-navy-900/5 hover:text-navy-900"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <a
          href="/#contact"
          className="rounded-full bg-navy-900 px-5 py-2.5 font-mono-tight text-sm font-medium text-cream-50 transition-colors hover:bg-navy-800"
        >
          Start a Conversation
        </a>
      </div>
    </header>
  );
}
