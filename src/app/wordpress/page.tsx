import LayerSlider from "@/components/LayerSlider";
import PortfolioGrid from "@/components/PortfolioGrid";
import { wordpressProjects } from "@/data/wordpress-projects";
import { farmSlider } from "@/data/sliders";

export const metadata = {
  title: "WordPress Portfolio | NRVANA Digital",
  description: "Custom WordPress websites for startups, law firms, health practices, e-commerce, and more.",
};

export default function WordPressPage() {
  return (
    <>
      <LayerSlider config={farmSlider} />
      <PortfolioGrid projects={wordpressProjects} />
    </>
  );
}
