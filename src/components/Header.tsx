"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/wordpress", label: "WordPress" },
  { href: "/web-development", label: "Web Development" },
  { href: "/logos-brands", label: "Logos/Brands" },
  { href: "/print-design", label: "Print Design" },
];

function MailIcon() {
  return (
    <svg viewBox="0 0 900 700" fill="currentColor" className="w-4 h-4" style={{ transform: "scaleY(-1)" }}>
      <path d="M30 586q-32 18-28 40 2 14 26 14l846 0q38 0 20-32-8-14-24-22-14-6-192-102t-182-98q-16-10-46-10-28 0-46 10-4 2-182 98t-192 102z m850-100q20 10 20-10l0-368q0-16-17-32t-33-16l-800 0q-16 0-33 16t-17 32l0 368q0 20 20 10l384-200q18-10 46-10t46 10z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 900 900" fill="currentColor" className="w-4 h-4" style={{ transform: "scaleY(-1)" }}>
      <path d="M204 698q0-40-29-68t-75-28q-44 0-72 28t-28 68q0 42 28 69t74 27 73-27 29-69z m-198-790l0 618 192 0 0-618-192 0z m306 420q0 86-4 198l166 0 10-86 4 0q60 100 190 100 100 0 161-67t61-199l0-366-192 0 0 342q0 134-98 134-70 0-98-72-6-12-6-48l0-356-194 0 0 420z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wider font-bold transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-white border-b border-white pb-0.5"
                    : "text-white/80 hover:text-white"
                }`}
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact icons */}
          <div className="hidden md:flex items-center gap-4 text-white/80">
            <a href="tel:720-275-1350" className="text-sm font-bold hover:text-white transition-colors duration-200">
              720-275-1350
            </a>
            <a
              href="mailto:stuart.paul@nrvana.com"
              className="hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <MailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/stuartpaul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/80 backdrop-blur-sm px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm tracking-wider font-bold ${
                pathname === item.href
                  ? "text-white underline underline-offset-4 decoration-1"
                  : "text-white/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/20 space-y-2 text-sm text-white/80">
            <a href="tel:720-275-1350" className="block font-bold">720-275-1350</a>
            <a href="mailto:stuart.paul@nrvana.com" className="flex items-center gap-2">
              <MailIcon /> stuart.paul@nrvana.com
            </a>
            <a
              href="https://www.linkedin.com/in/stuartpaul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
