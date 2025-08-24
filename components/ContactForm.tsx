export default function ContactForm() {
  const formId = process.env.FORMSPREE_ID || "";
  return (
    <>
      <section className="space-y-4 mt-12">
        <h2 className="text-2xl font-bold text-textLight dark:text-textDark">
          Contact Me
        </h2>
        <form
          action={`https://formspree.io/f/${formId}`}
          method="POST"
          className="space-y-4 max-w-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border rounded bg-backgroundLight dark:bg-backgroundDark"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded bg-backgroundLight dark:bg-backgroundDark"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full p-2 border rounded bg-backgroundLight dark:bg-backgroundDark"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-primaryLight to-primaryDark hover:from-primaryDark hover:to-primaryLight font-semibold py-2 px-5 rounded-full shadow-md dark:shadow-none transition-all duration-300 ease-in-out
  "
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
