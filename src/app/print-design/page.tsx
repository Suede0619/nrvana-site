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
      <PageHero headerImage="/images/headers/print-design.jpg" />
      <PortfolioGrid projects={printProjects} />
    </>
  );
}
