import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">📬 Let’s Connect!</h2>

      <p className="text-zinc-700 dark:text-zinc-300 max-w-lg">
        I'm always open to chatting about new opportunities, projects, or ideas.
        Feel free to reach out via email or connect with me on social media.
      </p>

      <div className="text-lg">
        <span className="font-semibold">Email:</span>{" "}
        <a
          href="mailto:haroon.saeed@outlook.com"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          haroon.saeed@outlook.com
        </a>
      </div>

      <div className="flex gap-4">
        <a
          href="https://github.com/haroon-code-hub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/haroonsae/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
    </section>
  );
}
