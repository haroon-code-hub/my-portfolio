import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 py-6 text-center border-t border-zinc-200 dark:border-zinc-700 text-sm text-textLight dark:text-textDark">
      <p>© {new Date().getFullYear()} Haroon Saeed. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://github.com/haroon-code-hub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/haroonsae/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
      <p className="mt-2 text-xs opacity-70">
        Built with Next.js, Typescript & TailwindCSS
      </p>
    </footer>
  );
}
