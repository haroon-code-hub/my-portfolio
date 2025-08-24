import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Haroon Saeed | Frontend Developer",
  description:
    "Frontend Developer with 2 years of experience in React, Next.js, and TypeScript. Building responsive, accessible, and performant web apps.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Haroon Saeed",
  ],
  openGraph: {
    title: "Haroon Saeed | Frontend Developer",
    description:
      "Frontend Developer with 2 years of experience in React, Next.js, and TypeScript. Portfolio showcasing projects and skills.",
    url: "https://my-portfolio-eosin-psi-34.vercel.app/",
    siteName: "Haroon Saeed Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Haroon Saeed Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haroon Saeed | Frontend Developer",
    description:
      "Frontend Developer with 2 years of experience in React, Next.js, and TypeScript.",
    images: ["/og-image.png"],
    // creator: "@yourtwitterhandle", // optional
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-zinc-900 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm text-center py-2">
            🚧 This portfolio is work in progress. More updates coming soon!
          </div>
          <main className="p-6 max-w-4xl mx-auto">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
