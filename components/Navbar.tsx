"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-md bg-white dark:bg-zinc-800 sticky top-0 z-50">
      <h1 className="font-bold text-xl">Haroon Saeed</h1>
      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
