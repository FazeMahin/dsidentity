import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { subjectCatalog } from "@/data/site";

const subjects = subjectCatalog.ial;

export default function IALPage() {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-sky-500/20 bg-slate-950 p-8 text-white shadow-[0_0_50px_rgba(59,130,246,0.12)] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">IAS / IAL</p>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.07em] sm:text-6xl">
            IAS & IAL RESOURCES
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Pearson Edexcel International AS / A Level pathways. All study resources are Coming Soon.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {subjects.map((subject) => (
            <div key={subject.slug} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/80">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-400">IAS / IAL</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950 dark:text-white">{subject.label}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{subject.description}</p>
              <Link
                href={subject.href}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Explore Resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
