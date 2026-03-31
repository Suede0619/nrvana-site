import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import { logosProjects } from "@/data/logos-projects";

export const metadata = {
  title: "Logos & Brands Portfolio | NRVANA Digital",
  description: "Corporate identity, logo design, and brand development across industries.",
};

export default function LogosBrandsPage() {
  return (
    <>
      <PageHero
        tagline1="make craters"
        tagline2="fresh logos"
        backgroundImage="/images/sliders/winter/0033_Vector-Smart-Object.png"
      />
      <PortfolioGrid projects={logosProjects} />
    </>
  );
}
