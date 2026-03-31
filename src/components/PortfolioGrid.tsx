import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  client?: string;
  skills: string;
  description: string;
  images: string[];
}

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
