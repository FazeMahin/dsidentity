"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeToggleProps = {
  variant?: "dark" | "light";
};

export function ThemeToggle({ variant = "dark" }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("dsidentity-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = storedTheme ? storedTheme === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", nextTheme);
    document.documentElement.style.colorScheme = nextTheme ? "dark" : "light";
    setIsDark(nextTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    document.documentElement.classList.toggle("dark", nextTheme);
    document.documentElement.style.colorScheme = nextTheme ? "dark" : "light";
    localStorage.setItem("dsidentity-theme", nextTheme ? "dark" : "light");
    setIsDark(nextTheme);
  };

  if (!mounted) {
    return (
      <div
        className={`h-10 w-10 rounded-full border ${
          variant === "light" ? "border-slate-400/60 bg-white/70" : "border-slate-300/40 bg-slate-900/10"
        }`}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
        variant === "light"
          ? "border-slate-300/80 bg-white/75 text-slate-900 hover:border-slate-500 hover:text-slate-950"
          : "border-white/10 bg-white/5 text-slate-100 hover:border-sky-400/50 hover:text-sky-300"
      }`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
