import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-light tracking-widest uppercase mb-2">
              nrvana
            </h3>
            <p className="text-muted text-sm">
              We are—culture, design, websites and software.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-wider mb-3 uppercase">
              Portfolio
            </h4>
            <nav className="space-y-2">
              <Link href="/wordpress" className="block text-muted text-sm hover:text-white transition-colors">
                WordPress
              </Link>
              <Link href="/web-development" className="block text-muted text-sm hover:text-white transition-colors">
                Web Development
              </Link>
              <Link href="/logos-brands" className="block text-muted text-sm hover:text-white transition-colors">
                Logos/Brands
              </Link>
              <Link href="/print-design" className="block text-muted text-sm hover:text-white transition-colors">
                Print Design
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-wider mb-3 uppercase">
              Contact
            </h4>
            <div className="space-y-2 text-muted text-sm">
              <a href="tel:720-275-1350" className="block hover:text-white transition-colors">
                720-275-1350
              </a>
              <a
                href="mailto:stuart.paul@nrvana.com"
                className="block hover:text-white transition-colors"
              >
                stuart.paul@nrvana.com
              </a>
              <a
                href="https://www.linkedin.com/in/stuartpaul"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-muted text-xs">
          © {new Date().getFullYear()} Nrvana Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
