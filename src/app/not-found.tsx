import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-white px-4 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 text-center dark:border-slate-800 dark:bg-slate-900/80">
        <p className="text-xs uppercase tracking-[0.32em] text-sky-400">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em]">Page not found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">This section is still being developed or the route does not exist.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white">
          Return home
        </Link>
      </div>
    </div>
  );
}
