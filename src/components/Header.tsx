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

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="text-white text-2xl font-light tracking-widest uppercase">
              nrvana
            </span>
            <span className="hidden sm:inline text-muted text-xs tracking-wider">
              denver web design
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wider transition-colors ${
                  pathname === item.href
                    ? "text-white"
                    : "text-muted hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="hidden md:flex items-center gap-4 text-sm text-muted">
            <a href="tel:720-275-1350" className="hover:text-white transition-colors">
              720-275-1350
            </a>
            <a
              href="mailto:stuart.paul@nrvana.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/stuartpaul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
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
      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm tracking-wider ${
                  pathname === item.href ? "text-white" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-2 text-sm text-muted">
              <a href="tel:720-275-1350" className="block">720-275-1350</a>
              <a href="mailto:stuart.paul@nrvana.com" className="block">
                stuart.paul@nrvana.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
