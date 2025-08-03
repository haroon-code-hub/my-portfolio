import SkillBadge from "./SkillBadge";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
}: Project) {
  return (
    <div className="rounded-xl border p-6 bg-white dark:bg-zinc-800 shadow-sm space-y-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <SkillBadge key={t} label={t} />
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          GitHub
        </a>
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}
