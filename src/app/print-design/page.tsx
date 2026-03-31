import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import { printProjects } from "@/data/print-projects";

export const metadata = {
  title: "Print Design Portfolio | NRVANA Digital",
  description: "Business cards, brochures, line cards, recipe books, and trade show materials.",
};

export default function PrintDesignPage() {
  return (
    <>
      <PageHero
        tagline1="graphic design"
        tagline2="cheap offset printing"
        backgroundImage="/images/sliders/summer/back1-2.png"
      />
      <PortfolioGrid projects={printProjects} />
    </>
  );
}
