interface PageHeroProps {
  tagline1: string;
  tagline2: string;
  backgroundImage?: string;
}

export default function PageHero({ tagline1, tagline2, backgroundImage }: PageHeroProps) {
  return (
    <section
      className="relative h-[40vh] min-h-[300px] flex items-center justify-center parallax"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : { background: "linear-gradient(135deg, #5e133e 0%, #360924 100%)" }
      }
    >
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-normal tracking-wider mb-2 animate-fade-in-up" style={{ fontFamily: "var(--font-klarissa)" }}>
          {tagline1}
        </h1>
        <p className="text-white/70 text-lg md:text-2xl font-light tracking-widest animate-fade-in-up animate-delay-200">
          {tagline2}
        </p>
      </div>
    </section>
  );
}
