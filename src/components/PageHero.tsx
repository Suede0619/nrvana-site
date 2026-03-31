interface PageHeroProps {
  tagline1: string;
  tagline2: string;
  backgroundImage?: string;
}

export default function PageHero({ tagline1, tagline2, backgroundImage }: PageHeroProps) {
  return (
    <section
      className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-light tracking-wider mb-2">
          {tagline1}
        </h1>
        <p className="text-muted text-lg md:text-2xl font-light tracking-widest">
          {tagline2}
        </p>
      </div>
    </section>
  );
}
