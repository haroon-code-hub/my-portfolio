import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = { title: "Haroon Saeed | Portfolio" };

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
        </ThemeProvider>
      </body>
    </html>
  );
}
