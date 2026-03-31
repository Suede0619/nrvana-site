import Image from "next/image";

interface PageHeroProps {
  tagline1: string;
  tagline2: string;
  backgroundImage: string;
}

export default function PageHero({ tagline1, tagline2, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/50" />
      <div className="relative z-10 text-center px-4">
        <h1
          className="text-white text-4xl md:text-6xl tracking-wider mb-2"
          style={{ fontFamily: "var(--font-klarissa)" }}
        >
          {tagline1}
        </h1>
        <p
          className="text-white/80 text-xl md:text-3xl tracking-widest"
          style={{ fontFamily: "var(--font-klarissa)" }}
        >
          {tagline2}
        </p>
      </div>
    </section>
  );
}
