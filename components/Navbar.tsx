"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const baseLink = "px-1 transition-colors hover:text-primary";
  const activeLink = "text-primary font-semibold border-b-2 border-primary";

  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-md bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark sticky top-0 z-50">
      <h1 className="font-bold text-xl">Haroon Saeed</h1>
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className={`${baseLink} ${isActive("/") ? activeLink : ""}`}
          aria-current={isActive("/") ? "page" : undefined}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`${baseLink} ${isActive("/projects") ? activeLink : ""}`}
          aria-current={isActive("/projects") ? "page" : undefined}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`${baseLink} ${isActive("/contact") ? activeLink : ""}`}
          aria-current={isActive("/contact") ? "page" : undefined}
        >
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
