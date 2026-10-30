import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { events } from "@/data/site";

export default function EventsPage() {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-sky-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950 p-8 shadow-[0_0_55px_rgba(59,130,246,0.12)] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sky-300">DS Events</p>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.07em] text-white sm:text-6xl">
            DS EVENTS
          </h1>
          <p className="mt-5 text-2xl font-medium text-sky-100">Where Ideas Become Experiences.</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            From entrepreneurial competitions to financial literacy initiatives, DS Identity has brought commerce to life through events, clubs, and student-led experiences at Dubai Scholars Private School.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Events archive"
          title="A legacy of experiences"
          description="The DS Identity events archive captures the broader story of the community’s competitions, clubs, and student-led initiatives."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:border-sky-400/40 dark:border-slate-800 dark:bg-slate-900/80">
              <div className="h-46 bg-gradient-to-br from-sky-500/20 via-slate-900 to-slate-950" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-sky-400">{event.category}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950 dark:text-white">{event.title}</h3>
                <div className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {event.academicYear ?? "Date placeholder"}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{event.description}</p>
                <Link
                  href={`/events/${event.slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600 dark:bg-sky-500 dark:text-slate-950"
                >
                  View Event
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
