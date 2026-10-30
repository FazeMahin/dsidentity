import Link from "next/link";
import { ArrowRight, BookOpenText, Play } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { interviews, magazineEditions } from "@/data/site";

export default function BeyondVenturesPage() {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-sky-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950 p-8 shadow-[0_0_55px_rgba(59,130,246,0.12)] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sky-300">Beyond Ventures</p>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.07em] text-white sm:text-6xl">
            BEYOND VENTURES
          </h1>
          <p className="mt-5 text-2xl font-medium text-sky-100">The Stories Behind Ambition.</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Beyond Ventures brings together the experiences, perspectives, and stories of entrepreneurs, young innovators, world record holders, sporting personalities, and inspiring individuals.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            Through interviews and editorial features, the magazine explores the ideas, challenges, and decisions behind extraordinary achievements.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About the magazine"
          title="A student-led publication with a strong editorial voice"
          description="Beyond Ventures is a student-led commerce publication created to share inspiring stories and meaningful conversations. The first volume has already been released, while the second volume is currently in development."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured conversations"
          title="Conversations Worth Having."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {interviews.map((item) => (
            <div key={item.id} className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-sky-400/40 dark:border-slate-800 dark:bg-slate-900/70">
              <div className="mb-5 h-52 rounded-[1.25rem] bg-gradient-to-br from-sky-500/20 via-slate-800 to-slate-900" />
              <p className="text-xs uppercase tracking-[0.2em] text-sky-400">{item.category}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-slate-950 dark:text-white">{item.name ?? "To Be Announced"}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:text-slate-200">
                <Play className="h-4 w-4" />
                Watch Interview
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {magazineEditions.map((edition) => (
            <div key={edition.id} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/80">
              <p className="text-xs uppercase tracking-[0.32em] text-sky-400">Volume {edition.volume}</p>
              <h3 className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em] text-slate-950 dark:text-white">
                {edition.id === "volume-1" ? "VOLUME 01" : "VOLUME 02"}
              </h3>
              <p className="mt-3 text-xl text-sky-500">{edition.id === "volume-1" ? "Where It All Began." : "# BEYOND THE BLUEPRINT"}</p>

              {edition.status === "published" ? (
                <Link href="/beyond-ventures/volume-1" className="group mt-6 block overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-200 transition hover:-translate-y-1 hover:border-sky-400/60 dark:border-slate-800 dark:bg-slate-950">
                  <img
                    src="/magazines/volume-1/pages/1.jpg"
                    alt="Beyond Ventures Volume 1 cover"
                    className="h-64 w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                  />
                </Link>
              ) : (
                <div className="mt-6 h-64 rounded-[1.5rem] bg-gradient-to-br from-sky-500/20 via-slate-900 to-slate-950" />
              )}

              <p className="mt-6 text-sm uppercase tracking-[0.24em] text-slate-500">{edition.status === "published" ? "Published" : "Coming Soon"}</p>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{edition.description}</p>
              {edition.status === "published" ? (
                <Link
                  href="/beyond-ventures/volume-1"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  <BookOpenText className="h-4 w-4" />
                  Read Volume 1
                </Link>
              ) : (
                <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-100">
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
