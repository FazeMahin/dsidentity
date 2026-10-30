"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHomeTop = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-700/70 bg-slate-950/80 backdrop-blur-xl"
          : isHomeTop
            ? "border-b border-transparent bg-transparent"
            : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`text-sm font-semibold tracking-[0.35em] ${isHomeTop ? "text-white" : "text-white"}`}
        >
          DS IDENTITY
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium tracking-[0.08em] uppercase transition ${
                  active
                    ? isHomeTop
                      ? "text-white"
                      : "text-white"
                    : isHomeTop
                      ? "text-slate-200 hover:text-white"
                      : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
                {active ? (
                  <span
                    className={`absolute -bottom-2 left-0 h-px w-full ${
                      isHomeTop
                        ? "bg-sky-300 shadow-[0_0_12px_rgba(184,217,255,0.75)]"
                        : "bg-sky-400 shadow-[0_0_12px_rgba(96,165,250,0.7)]"
                    }`}
                  />
                ) : null}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <ThemeToggle variant="dark" />
        </div>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
            isHomeTop
              ? "border-white/20 bg-white/10 text-white"
              : "border-white/10 bg-white/5 text-white"
          }`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl border px-3 py-2 text-sm tracking-[0.08em] uppercase ${
                  pathname === item.href
                    ? "border-sky-400/50 bg-sky-500/10 text-white"
                    : "border-white/10 text-slate-200"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
