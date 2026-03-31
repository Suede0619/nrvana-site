import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import { webdevProjects } from "@/data/webdev-projects";

export const metadata = {
  title: "Web Development Portfolio | NRVANA Digital",
  description: "Hand-coded websites, web applications, and mobile-first responsive design.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <PageHero headerImage="/images/headers/webdev.jpg" />
      <PortfolioGrid projects={webdevProjects} />
    </>
  );
}
