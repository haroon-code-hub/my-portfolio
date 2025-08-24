export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
      <h1 className="text-5xl font-bold text-primary">404</h1>
      <p className="text-lg text-textLight dark:text-textDark">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded"
      >
        Go back Home
      </a>
    </section>
  );
}
