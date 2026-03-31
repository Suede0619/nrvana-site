import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-footer-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <Image
                src="/images/logos/logoWhite1s.png"
                alt="NRVANA Digital"
                width={200}
                height={52}
                className="h-10 w-auto mb-4"
              />
              <p className="text-white/70 text-sm">
                We are—culture, design, websites and software.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white text-sm font-bold tracking-wider mb-3 uppercase">
                Portfolio
              </h4>
              <nav className="space-y-2">
                <Link href="/wordpress" className="block text-white/70 text-sm hover:text-white transition-colors duration-200">
                  WordPress
                </Link>
                <Link href="/web-development" className="block text-white/70 text-sm hover:text-white transition-colors duration-200">
                  Web Development
                </Link>
                <Link href="/logos-brands" className="block text-white/70 text-sm hover:text-white transition-colors duration-200">
                  Logos/Brands
                </Link>
                <Link href="/print-design" className="block text-white/70 text-sm hover:text-white transition-colors duration-200">
                  Print Design
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-sm font-bold tracking-wider mb-3 uppercase">
                Contact
              </h4>
              <div className="space-y-2 text-white/70 text-sm">
                <a href="tel:720-275-1350" className="block hover:text-white transition-colors duration-200">
                  720-275-1350
                </a>
                <a
                  href="mailto:stuart.paul@nrvana.com"
                  className="block hover:text-white transition-colors duration-200"
                >
                  stuart.paul@nrvana.com
                </a>
                <a
                  href="https://www.linkedin.com/in/stuartpaul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Socket/copyright bar */}
      <div className="bg-socket-bg py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/60 text-xs">
          &copy; {new Date().getFullYear()} Nrvana Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
