import LayerSlider from "@/components/LayerSlider";
import PortfolioGrid from "@/components/PortfolioGrid";
import { webdevProjects } from "@/data/webdev-projects";
import { forestSlider } from "@/data/sliders";

export const metadata = {
  title: "Web Development Portfolio | NRVANA Digital",
  description: "Hand-coded websites, web applications, and mobile-first responsive design.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <LayerSlider config={forestSlider} />
      <PortfolioGrid projects={webdevProjects} />
    </>
  );
}
