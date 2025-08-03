import "./globals.css";

export const metadata = {
  title: "[Your Name] | Portfolio",
  description: "Personal Portfolio of [Your Name]",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
