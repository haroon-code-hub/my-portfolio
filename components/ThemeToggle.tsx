"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldUseDark = stored === "dark" || (!stored && prefersDark);

    setIsDark(shouldUseDark);
    setMounted(true);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newIsDark);
  };

  if (!mounted) return null;

  return (
    <button onClick={toggleTheme} aria-label="Toggle Dark Mode">
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
