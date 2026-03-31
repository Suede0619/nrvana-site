"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-sm shadow-lg"
          : "bg-primary"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logos/logoWhite13.png"
              alt="NRVANA Digital"
              width={160}
              height={42}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wider transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-white font-bold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="hidden md:flex items-center gap-4 text-sm text-white/70">
            <a href="tel:720-275-1350" className="hover:text-white transition-colors duration-200">
              720-275-1350
            </a>
            <a
              href="mailto:stuart.paul@nrvana.com"
              className="hover:text-white transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/stuartpaul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
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
              className="w-6 h-6 transition-transform duration-200"
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
        <div className="bg-primary/95 border-t border-white/10 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm tracking-wider transition-colors ${
                pathname === item.href ? "text-white font-bold" : "text-white/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10 space-y-2 text-sm text-white/70">
            <a href="tel:720-275-1350" className="block">720-275-1350</a>
            <a href="mailto:stuart.paul@nrvana.com" className="block">
              stuart.paul@nrvana.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
