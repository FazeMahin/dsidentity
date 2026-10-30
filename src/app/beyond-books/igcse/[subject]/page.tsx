import Link from "next/link";
import { ArrowRight, BookOpenText, FlaskConical, NotebookText } from "lucide-react";
import { notFound } from "next/navigation";

export const instant = false;

const subjectLabels = {
  business: {
    title: "Business",
    description: "Core concepts, case study application, and analytic structure for business-focused revision.",
  },
  accounting: {
    title: "Accounting",
    description: "Financial statement layouts, bookkeeping principles, and structured formats for clear preparation.",
  },
  economics: {
    title: "Economics",
    description: "Market reasoning, policy evaluation, and diagram-led explanation for economic problem solving.",
  },
} as const;

export default async function IGCSESubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: subjectParam } = await params;
  const subject = subjectParam as keyof typeof subjectLabels;
  const config = subjectLabels[subject];

  if (!config) notFound();

  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/beyond-books">Beyond Books</Link>
          <span>→</span>
          <Link href="/beyond-books/igcse">IGCSE</Link>
          <span>→</span>
          <span>{config.title}</span>
        </div>

        <div className="mt-8 rounded-[2rem] border border-sky-500/20 bg-slate-950 p-8 text-white shadow-[0_0_50px_rgba(59,130,246,0.12)] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">IGCSE {config.title}</p>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.07em] sm:text-6xl">
            {config.title}
          </h1>
          <p className="mt-5 text-xl text-sky-100">Everything you need to revise smarter.</p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{config.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Topic-by-Topic Past Paper Questions", icon: BookOpenText, text: "Use these collections to strengthen understanding of individual syllabus areas and assess gaps in knowledge." },
            { title: "Exam Technique & Answer Formats", icon: NotebookText, text: "Focus on command words, structure, application, and evaluation techniques relevant to the selected subject." },
            { title: "Study Materials", icon: FlaskConical, text: "Revision summaries, checklists, worked examples, and structured guidance to support independent study." },
          ].map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/70">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white dark:bg-sky-500 dark:text-slate-950">
                View Section <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/80">
          <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">Topic-based revision</h3>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Use these topic-based question collections to strengthen your understanding of individual syllabus areas. Attempt questions independently, compare your answers with the mark schemes, and identify topics that require further revision.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Demand and Supply",
              "Price Elasticity of Demand",
              "Income Elasticity of Demand",
              "Market Failure",
              "Government Intervention",
              "Business Decision-Making",
            ].map((topic) => (
              <div key={topic} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950/60">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-sky-400">IGCSE</div>
                    <h4 className="mt-2 font-display text-lg font-semibold text-slate-900 dark:text-white">{topic}</h4>
                  </div>
                  <button className="rounded-full border border-slate-300 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-700 dark:border-slate-600 dark:text-slate-200">
                    View Questions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
