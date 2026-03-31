import Link from "next/link";
import Image from "next/image";

const portfolioSections = [
  {
    title: "WordPress",
    href: "/wordpress",
    description: "Custom WordPress builds for startups, law firms, health practices, and e-commerce.",
  },
  {
    title: "Web Development",
    href: "/web-development",
    description: "Hand-coded websites, web applications, and mobile-first responsive design.",
  },
  {
    title: "Logos & Brands",
    href: "/logos-brands",
    description: "Corporate identity, logo design, and brand development across industries.",
  },
  {
    title: "Print Design",
    href: "/print-design",
    description: "Business cards, brochures, line cards, recipe books, and trade show materials.",
  },
];

const clientLogos = [
  "1.png", "4-3.png", "10-1.png", "11.png", "12-1.png", "13-1.png",
  "14.png", "15.png", "16.png", "17.png", "18.png", "19.png",
  "20.png", "21.png", "22.png", "23.png", "24.png", "25.png",
  "26.png", "27.png", "28.png", "29.png", "30.png", "31.png",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden parallax"
        style={{ backgroundImage: "url(/images/hero/water-back.jpg)" }}
      >
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-white text-5xl md:text-7xl font-normal tracking-wider mb-4 animate-fade-in-up" style={{ fontFamily: "var(--font-klarissa)" }}>
            waterproof code
          </h1>
          <p className="text-white/70 text-xl md:text-3xl font-normal tracking-widest mb-8 animate-fade-in-up animate-delay-200" style={{ fontFamily: "var(--font-klarissa)" }}>
            shiny websites
          </p>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-300">
            We are—culture, design, websites and software.
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-white py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {clientLogos.map((logo) => (
              <Image
                key={logo}
                src={`/images/client-logos/${logo}`}
                alt="Client logo"
                width={80}
                height={60}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioSections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group block bg-white rounded-lg p-8 border border-border hover-lift"
              >
                <h2 className="text-heading text-2xl font-light tracking-wider mb-3 group-hover:text-primary transition-colors duration-200">
                  {section.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  {section.description}
                </p>
                <span className="inline-block mt-4 text-primary text-sm font-bold tracking-wider">
                  View projects &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-light tracking-wider mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Looking for a designer and developer who can bring your vision to
            life? Let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:720-275-1350"
              className="bg-white text-primary px-8 py-3 rounded-lg font-bold tracking-wider hover:bg-white/90 transition-colors duration-200"
            >
              720-275-1350
            </a>
            <a
              href="mailto:stuart.paul@nrvana.com"
              className="border border-white/30 text-white px-8 py-3 rounded-lg tracking-wider hover:bg-white/10 transition-colors duration-200"
            >
              stuart.paul@nrvana.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
