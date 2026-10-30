import Link from "next/link";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold tracking-[0.2em] text-white">DS IDENTITY</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            The home of commerce, entrepreneurship, financial literacy, and student-led innovation at Dubai Scholars Private School.
          </p>
        </div>

        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Explore
          </p>
          <ul className="space-y-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Presence
          </p>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>Dubai Scholars Private School</li>
            <li>Dubai, United Arab Emirates</li>
            <li>Social link placeholders</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 text-xs text-slate-400 sm:px-6 lg:px-8">
          <span>© 2026 DS Identity</span>
          <span>Built for a growing student community</span>
        </div>
      </div>
    </footer>
  );
}
