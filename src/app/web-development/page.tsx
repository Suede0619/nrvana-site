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
      <PageHero
        tagline1="bootstrap baby"
        tagline2="hand coded websites"
        backgroundImage="/images/sliders/forest/0041__Path_-_Path_-_Path_-_Path_-_Path_-_Path_-_Path_-_Path_-_Path_-_Path_-_Path_-_Path_-_Path_.png"
      />
      <PortfolioGrid projects={webdevProjects} />
    </>
  );
}
