import Image from "next/image";

interface PageHeroProps {
  headerImage: string;
}

export default function PageHero({ headerImage }: PageHeroProps) {
  return (
    <section className="relative w-full">
      <Image
        src={headerImage}
        alt=""
        width={5000}
        height={1000}
        className="w-full h-auto"
        priority
        sizes="100vw"
      />
    </section>
  );
}
