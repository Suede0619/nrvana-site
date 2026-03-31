import LayerSlider from "@/components/LayerSlider";
import PortfolioGrid from "@/components/PortfolioGrid";
import { printProjects } from "@/data/print-projects";
import { summerSlider } from "@/data/sliders";

export const metadata = {
  title: "Print Design Portfolio | NRVANA Digital",
  description: "Business cards, brochures, line cards, recipe books, and trade show materials.",
};

export default function PrintDesignPage() {
  return (
    <>
      <LayerSlider config={summerSlider} />
      <PortfolioGrid projects={printProjects} />
    </>
  );
}
