import Image from "next/image";
import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import { logosProjects } from "@/data/logos-projects";

export const metadata = {
  title: "Logos & Brands Portfolio | NRVANA Digital",
  description: "Corporate identity, logo design, and brand development across industries.",
};

const logoGallery = [
  "0033_Vector-Smart-Object.png",
  "0030_Vector-Smart-Object.png",
  "0032_Vector-Smart-Object-1.png",
  "0031_Vector-Smart-Object.png",
  "0027_Layer-7.png",
  "0028_Layer-16.png",
  "0026_Vector-Smart-Object.png",
  "0024_Vector-Smart-Object.png",
  "0025_Vector-Smart-Object.png",
  "0023_Vector-Smart-Object.png",
  "0029_Layer-18.png",
  "0022_Vector-Smart-Object.png",
  "0021_Layer-12.png",
  "0017_Layer-13.png",
  "0020_Vector-Smart-Object.png",
  "0018_Vector-Smart-Object.png",
  "0015_Vector-Smart-Object.png",
  "0014_Vector-Smart-Object.png",
  "0019_Vector-Smart-Object.png",
  "0007_Layer-4.png",
  "love-feast.png",
  "0011_Vector-Smart-Object.png",
  "0012_Layer-5.png",
  "0010_Layer-14.png",
  "0002_Layer-15.png",
  "0006_Vector-Smart-Object.png",
  "0001_Vector-Smart-Object.png",
  "0000_Vector-Smart-Object.png",
];

export default function LogosBrandsPage() {
  return (
    <>
      <PageHero tagline1="fresh logos" tagline2="make craters" />

      {/* Logo Gallery */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logoGallery.map((logo) => (
              <Image
                key={logo}
                src={`/images/logo-gallery/${logo}`}
                alt="Logo design"
                width={120}
                height={80}
                className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      <PortfolioGrid projects={logosProjects} />
    </>
  );
}
