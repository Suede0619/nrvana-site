import LayerSlider from "@/components/LayerSlider";
import PortfolioGrid from "@/components/PortfolioGrid";
import { logosProjects } from "@/data/logos-projects";
import { winterSlider } from "@/data/sliders";

export const metadata = {
  title: "Logos & Brands Portfolio | NRVANA Digital",
  description: "Corporate identity, logo design, and brand development across industries.",
};

export default function LogosBrandsPage() {
  return (
    <>
      <LayerSlider config={winterSlider} />
      <PortfolioGrid projects={logosProjects} />
    </>
  );
}
