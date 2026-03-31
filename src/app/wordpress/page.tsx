import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import { wordpressProjects } from "@/data/wordpress-projects";

export const metadata = {
  title: "WordPress Portfolio | NRVANA Digital",
  description: "Custom WordPress websites for startups, law firms, health practices, e-commerce, and more.",
};

export default function WordPressPage() {
  return (
    <>
      <PageHero
        tagline1="elysian spaceships"
        tagline2="genuine wordpress"
        backgroundImage="/images/sliders/farm/0036_sky.png"
      />
      <PortfolioGrid projects={wordpressProjects} />
    </>
  );
}
