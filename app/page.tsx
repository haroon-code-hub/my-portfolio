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

      <p className="max-w-xl text-textLight dark:text-textDark leading-relaxed">
        I'm Haroon Saeed, a Frontend Developer with around 3 years of experience
        building responsive, scalable, and accessible web applications. I
        specialize in React, Next.js, TypeScript, and TailwindCSS, and I enjoy
        crafting clean, performant interfaces that improve user experiences.
        Currently based in Fürstenfeldbruck, Germany, I'm passionate about
        learning, collaboration, and delivering reliable solutions in agile
        teams. I'm actively seeking new opportunities where I can grow and
        contribute to impactful products.
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
