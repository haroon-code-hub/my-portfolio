import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Coffee Listing App",
    description:
      "A searchable and filterable list of coffee products. Built to practice responsive UI and component reuse.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/haroon-code-hub/coffee-listing",
    live: "", // optional: Vercel/Netlify live link
  },
  {
    title: "Sprout Scribble (In Progress)",
    description:
      "A full-stack Next.js app built to learn backend concepts while managing content and user data.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Directus"],
    github: "https://github.com/haroon-code-hub/sprout-scribble",
    live: "", // optional
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
