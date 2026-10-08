import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hawraa Ramadan | Full-Stack & Mobile Engineer",
  description: "Personal developer portfolio website built with Next.js, Tailwind CSS, and a cozy tech aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--color-paper-bg)] text-[var(--color-ink-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
