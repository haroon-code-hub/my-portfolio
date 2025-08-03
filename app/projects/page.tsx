import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Coffee Listing App",
    description:
      "A searchable and filterable list of coffee products. Built to practice responsive UI and component reuse.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/haroon-code-hub/coffee-listing",
    live: "https://haroon-code-hub.github.io/coffee-listing/",
  },
  {
    title: "Sprout Scribble (In Progress)",
    description:
      "A full-stack Next.js app built to learn backend concepts while managing content and user data.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Directus"],
    github: "https://github.com/haroon-code-hub/sprout-scribble",
    live: "",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal developer portfolio built using Next.js App Router, TailwindCSS, and TypeScript. Includes dark mode, project cards, and tested components.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "React Testing Library"],
    github: "https://github.com/haroon-code-hub/my-portfolio",
    live: "https://my-portfolio-eosin-psi-34.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
