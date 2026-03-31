import Link from "next/link";

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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/hero/water-back.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-white text-5xl md:text-7xl font-light tracking-wider mb-4">
            waterproof code
          </h1>
          <p className="text-muted text-xl md:text-3xl font-light tracking-widest mb-8">
            shiny websites
          </p>
          <p className="text-foreground text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            We are—culture, design, websites and software.
          </p>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group block bg-surface rounded-lg p-8 border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1"
            >
              <h2 className="text-white text-2xl font-light tracking-wider mb-3 group-hover:text-accent transition-colors">
                {section.title}
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                {section.description}
              </p>
              <span className="inline-block mt-4 text-accent text-sm tracking-wider">
                View projects →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-light py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-light tracking-wider mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Looking for a designer and developer who can bring your vision to
            life? Let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:720-275-1350"
              className="bg-white text-black px-8 py-3 rounded-lg font-bold tracking-wider hover:bg-gray-200 transition-colors"
            >
              720-275-1350
            </a>
            <a
              href="mailto:stuart.paul@nrvana.com"
              className="border border-white/20 text-white px-8 py-3 rounded-lg tracking-wider hover:bg-white/10 transition-colors"
            >
              stuart.paul@nrvana.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
