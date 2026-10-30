import { Suspense } from "react";
import { notFound } from "next/navigation";
import { events } from "@/data/site";
import { DSVenturesGallery } from "@/components/events/ds-ventures-gallery";

export function generateStaticParams() {
  return events.map(event => ({ slug: event.slug }));
}

export default function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <Suspense fallback={<div className="mx-auto min-h-[70svh] max-w-7xl px-6 py-20 text-slate-300" role="status">Loading event...</div>}><EventContent params={params} /></Suspense>;
}

async function EventContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) notFound();

  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-sky-500/20 bg-slate-950 p-8 text-white shadow-[0_0_60px_rgba(59,130,246,0.08)] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-400">{event.category}</p>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-[-0.07em] sm:text-6xl">{event.title}</h1>
          <p className="mt-4 text-base uppercase tracking-[0.2em] text-slate-400">{event.academicYear ?? "Academic year placeholder"}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{event.description}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/80">
            <h2 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">Event highlights</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {(event.highlights ?? ["Placeholder highlight item.", "Future event detail placeholder.", "Student-led experience in development."]).map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />{item}</li>
              ))}
            </ul>
          </div>

          {event.slug !== "ds-ventures" && (
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/80">
            <h2 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">Photo gallery</h2>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-32 rounded-2xl bg-gradient-to-br from-sky-500/20 via-slate-900 to-slate-950" />
              ))}
            </div>
          </div>
          )}
        </div>
        {event.slug === "ds-ventures" && <DSVenturesGallery />}
      </section>
    </div>
  );
}
