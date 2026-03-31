export const metadata = {
  title: "Contact | NRVANA Digital",
  description: "Get in touch with Stuart Paul at NRVANA Digital.",
};

export default function ContactPage() {
  return (
    <section className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-4xl font-light tracking-wider mb-8">
          Get in touch
        </h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-muted text-sm uppercase tracking-wider mb-2">
              Phone
            </h2>
            <a
              href="tel:720-275-1350"
              className="text-white text-xl hover:text-accent transition-colors"
            >
              720-275-1350
            </a>
          </div>
          <div>
            <h2 className="text-muted text-sm uppercase tracking-wider mb-2">
              Email
            </h2>
            <a
              href="mailto:stuart.paul@nrvana.com"
              className="text-white text-xl hover:text-accent transition-colors"
            >
              stuart.paul@nrvana.com
            </a>
          </div>
          <div>
            <h2 className="text-muted text-sm uppercase tracking-wider mb-2">
              LinkedIn
            </h2>
            <a
              href="https://www.linkedin.com/in/stuartpaul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-accent transition-colors"
            >
              linkedin.com/in/stuartpaul
            </a>
          </div>
          <div>
            <h2 className="text-muted text-sm uppercase tracking-wider mb-2">
              Downloads
            </h2>
            <div className="space-y-2">
              <a
                href="/stuart_paul_portfolio-FINAL-v2a.pdf"
                className="block text-white hover:text-accent transition-colors"
              >
                Digital Portfolio (PDF) ↓
              </a>
              <a
                href="/Stuart-Paul-Resume.pdf"
                className="block text-white hover:text-accent transition-colors"
              >
                Resume (PDF) ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
