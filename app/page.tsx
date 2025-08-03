import SkillBadge from "@/components/SkillBadge";
import SocialLinks from "@/components/SocialLinks";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "GraphQL",
  "REST APIs",
  "HTML",
  "CSS",
  "JavaScript",
];

export default function Home() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Haroon Saeed</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300">
          Frontend Developer | React & Next.js
        </p>
      </div>

      <p className="max-w-xl text-zinc-800 dark:text-zinc-200">
        Frontend Developer with 2 years of experience building responsive,
        scalable applications using React, Next.js, and TypeScript. Strong in UI
        development, component libraries, and performance optimization.
        Currently expanding into backend tools to become a more versatile
        contributor.
      </p>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        📍 Fürstenfeldbruck, Germany
      </p>

      <div>
        <h2 className="font-semibold mb-2">💻 Tech Stack:</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </div>

      <SocialLinks />
    </section>
  );
}
