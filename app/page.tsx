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
    <>
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Haroon Saeed</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Frontend Developer | React & Next.js
          </p>
        </div>

        <p className="max-w-xl text-textLight dark:text-textDark leading-relaxed">
          I'm Haroon Saeed, a Frontend Developer with around 3 years of
          experience building responsive, scalable, and accessible web
          applications. I specialize in React, Next.js, TypeScript, and
          TailwindCSS, and I enjoy crafting clean, performant interfaces that
          improve user experiences. Currently based in Fürstenfeldbruck,
          Germany, I'm passionate about learning, collaboration, and delivering
          reliable solutions in agile teams. I'm actively seeking new
          opportunities where I can grow and contribute to impactful products.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 font-semibold tracking-wide px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Get in Touch
        </a>

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
      <section className="space-y-4 mt-12">
        <h2 className="text-2xl font-bold text-textLight dark:text-textDark">
          Experience
        </h2>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            Software Developer – Inter-Connect GmbH
          </h3>
          <p className="text-sm text-textLight dark:text-textDark opacity-80">
            Oct 2022 – Present | Munich, Germany
          </p>
          <ul className="list-disc list-inside text-textLight dark:text-textDark">
            <li>
              Developed and maintained scalable React/Next.js interfaces for
              cruise line clients.
            </li>
            <li>
              Built reusable UI components and refactored CSS for improved
              maintainability and performance.
            </li>
            <li>
              Participated in Agile ceremonies (standups, sprint planning,
              retrospectives), contributing to team coordination and delivery
              consistency.
            </li>
            <li>
              Implemented SEO enhancements and worked closely with designers for
              UI quality.
            </li>
            <li>
              Assisted non-technical teams by providing Directus CMS usage
              training, streamlining their content update workflows.
            </li>
            <li>
              Collaborated with QA teams to ensure bugs are resolved in
              production pipelines.
            </li>
          </ul>
        </div>
      </section>
      <section className="space-y-2 mt-12">
        <h2 className="text-2xl font-bold text-textLight dark:text-textDark">
          Education
        </h2>
        <p className="text-textLight dark:text-textDark">
          🎓 Master in Computer Science – University of Passau (2021)
          <br />
          🎓 Bachelor in Information Technology – Bahauddin Zakariya University
          (2014)
        </p>
      </section>
      <section className="space-y-2 mt-12">
        <h2 className="text-2xl font-bold text-textLight dark:text-textDark">
          Languages
        </h2>
        <p className="text-textLight dark:text-textDark">
          English (Advanced) · German (Intermediate) · Urdu (Native)
        </p>
      </section>
    </>
  );
}
