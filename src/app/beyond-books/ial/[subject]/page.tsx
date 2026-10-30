import Link from "next/link";
import { ArrowRight, BookOpenText, FlaskConical, NotebookText } from "lucide-react";
import { notFound } from "next/navigation";

export const instant = false;

const subjectLabels = {
  business: {
    title: "Business",
    description: "Strategic evaluation, application, and judgement-focused revision for advanced study pathways.",
  },
  accounting: {
    title: "Accounting",
    description: "Advanced financial reporting, calculations, and presentation structure for higher-level analysis.",
  },
  economics: {
    title: "Economics",
    description: "Theoretical depth, policy evaluation, and diagram-based reasoning for rigorous economic analysis.",
  },
} as const;

export default async function IALSubjectPage({ params }: { params: Promise<{ subject: string }> }) {
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
          <Link href="/beyond-books/ial">IAS / IAL</Link>
          <span>→</span>
          <span>{config.title}</span>
        </div>

        <div className="mt-8 rounded-[2rem] border border-sky-500/20 bg-slate-950 p-8 text-white shadow-[0_0_50px_rgba(59,130,246,0.12)] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">IAS / IAL {config.title}</p>
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
            { title: "Topic-by-Topic Past Paper Questions", icon: BookOpenText, text: "Structured sections around core topic areas with practice questions and revision emphasis." },
            { title: "Exam Technique & Answer Formats", icon: NotebookText, text: "Guidance for structure, application, and evaluation in more demanding advanced responses." },
            { title: "Study Materials", icon: FlaskConical, text: "Revision notes, summaries, and checklists to support long-form preparation." },
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
    </div>
  );
}
