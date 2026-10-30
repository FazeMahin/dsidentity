import Link from "next/link";

export function ComingSoon({
  title,
  description,
  href = "/",
}: {
  title: string;
  description: string;
  href?: string;
}) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-sky-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 text-center shadow-[0_0_40px_rgba(59,130,246,0.1)] sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sky-300">Coming Soon</p>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">{description}</p>
        <Link
          href={href}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-sky-500/40 bg-sky-500/10 px-6 py-3 text-sm font-semibold text-sky-100 transition hover:bg-sky-500/20"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
