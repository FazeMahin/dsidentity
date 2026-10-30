import Link from "next/link";
import { ArrowRight, BookOpen, Landmark, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export default function BeyondBooksPage() {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-sky-500/20 bg-gradient-to-br from-sky-500/10 via-slate-900 to-slate-950 p-8 shadow-[0_0_50px_rgba(59,130,246,0.12)] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-400">Beyond Books</p>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.07em] text-white sm:text-6xl">
            BEYOND BOOKS
          </h1>
          <p className="mt-5 text-2xl font-medium text-sky-100">Your Commerce Resource Hub.</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Topic-based past paper questions, essential revision materials, examination guidance, and academic resources — organised to make studying simpler and more effective.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "IGCSE",
              description: "International General Certificate of Secondary Education.",
              href: "/beyond-books/igcse",
              icon: BookOpen,
            },
            {
              title: "IAS / IAL",
              description: "International Advanced Subsidiary and International Advanced Level.",
              href: "/beyond-books/ial",
              icon: Landmark,
            },
          ].map(({ title, description, href, icon: Icon }) => (
            <div key={title} className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:border-sky-400/40 dark:border-slate-800 dark:bg-slate-900/70">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400">
                <Icon className="h-7 w-7" />
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white">
                {title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
              <Link
                href={href}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 dark:bg-sky-500 dark:text-slate-950"
              >
                Explore {title} Resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resource Architecture"
          title="Designed for long-term growth"
          description="The resource hub is structured so new syllabus topics, study materials, and updates can be added without disrupting the learning experience."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Topic Organised", text: "Past paper collections grouped by syllabus area for easier revision planning." },
            { title: "Exam Guidance", text: "Technique support for answer structures, common mistakes, and examiner expectations." },
            { title: "Editable Library", text: "All resources are centralised and ready for future expansion and publication workflows." },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-100 p-6 dark:border-slate-800 dark:bg-slate-900/70">
              <Sparkles className="h-6 w-6 text-sky-400" />
              <h3 className="mt-5 font-display text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
