import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header Image */}
      <section className="relative w-full">
        <Image
          src="/images/headers/home.jpg"
          alt=""
          width={5000}
          height={1000}
          className="w-full h-auto"
          priority
          sizes="100vw"
        />
        {/* CTA overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-3xl">
            <Image
              src="/images/logos/logoWhite.png"
              alt="NRVANA Digital"
              width={300}
              height={78}
              className="mx-auto mb-6 h-12 md:h-16 w-auto"
            />
            <h2 className="text-white text-xl md:text-3xl font-light tracking-wider mb-3">
              Let&apos;s work together
            </h2>
            <p className="text-white/80 text-sm md:text-base mb-6 max-w-xl mx-auto">
              Looking for a designer and developer who can bring your vision to
              life? Let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:720-275-1350"
                className="bg-white text-primary px-6 py-2 rounded-lg font-bold tracking-wider hover:bg-white/90 transition-colors duration-200 text-sm"
              >
                720-275-1350
              </a>
              <a
                href="mailto:stuart.paul@nrvana.com"
                className="border border-white/30 text-white px-6 py-2 rounded-lg tracking-wider hover:bg-white/10 transition-colors duration-200 text-sm"
              >
                stuart.paul@nrvana.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
