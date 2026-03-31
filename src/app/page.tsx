import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col">
        <Image
          src="/images/headers/home-water.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/logos/nrvana-spring.svg"
            alt="NRVANA Digital"
            width={900}
            height={234}
            className="mx-auto h-36 md:h-48 w-auto"
          />
        </div>
      </section>
    </>
  );
}
