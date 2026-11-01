import Link from "next/link";
import { ArrowRight, BarChart3, Building2, Compass, Landmark, Sparkles } from "lucide-react";
import { HeroShowcase } from "@/components/home/hero-showcase";
import { ImpactStats } from "@/components/home/impact-stats";
import { SectionHeading } from "@/components/ui/section-heading";
import { events, initiatives, legacyItems, teamMembers } from "@/data/site";
import { community } from "@/data/community";
import { social } from "@/data/social";
import { PressFeature } from "@/components/ui/press-feature";

export default function HomePage() {
  return (
    <div className="bg-[#05070b] text-slate-100">
      <HeroShowcase />

      <section id="about-ds-identity" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="ds-editorial-split">
          <div><p className="ds-eyebrow">About DS Identity</p><h2>{community.aboutTitle}</h2><p>{community.about[0]}</p></div>
          <div>{community.about.slice(1).map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <ImpactStats />

      <div className="ds-shell"><PressFeature /></div>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our legacy"
          title="The story behind the community"
          description="A continued effort to create opportunities, strengthen student ambition, and support the wider school culture through commerce-led experiences."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {legacyItems.map((item, index) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br ${
                index === 0 ? "from-slate-900 via-slate-900 to-sky-950" : "from-slate-900 via-slate-900 to-blue-950"
              } p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-400/50`}
            >
              <div className="absolute right-6 top-6 text-[4.5rem] font-black leading-none tracking-[-0.08em] text-sky-500/15">
                0{index + 1}
              </div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/40 bg-sky-500/10 text-sky-300">
                  {item.title.includes("Ventur") ? <Compass className="h-5 w-5" /> : <Landmark className="h-5 w-5" />}
                </div>
                {index === 0 && <p className="mb-4 text-xs uppercase tracking-[.2em] text-sky-300">8 cycles / Estimated 1,000+ cumulative participations</p>}
                <h3 className="font-display text-3xl font-semibold tracking-[-0.06em] text-white">{item.title}</h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{item.description}</p>
                {item.detail ? <p className="mt-4 text-sm leading-7 text-slate-400">{item.detail}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Flagship initiatives" title="Built for curiosity, ambition, and impact" />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {initiatives.map((initiative, index) => (
            <Link
              key={initiative.title}
              href={initiative.href}
              className="group relative block overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 p-[1px] hover:-translate-y-1 hover:border-sky-400/50"
            >
              <div className={`relative h-full rounded-[calc(2rem-1px)] bg-gradient-to-br ${initiative.accent} p-6`}>
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl" />
                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-300/20 bg-slate-950/60 text-sky-300">
                      {initiative.title === "Beyond Books" ? <Sparkles className="h-5 w-5" /> : initiative.title === "Beyond Ventures" ? <Building2 className="h-5 w-5" /> : <BarChart3 className="h-5 w-5" />}
                    </div>
                    <span className="text-[0.58rem] uppercase tracking-[0.26em] text-slate-300">0{index + 1}</span>
                  </div>

                  <p className="text-[0.66rem] font-medium uppercase tracking-[0.28em] text-sky-300">{initiative.title}</p>
                  <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-0.06em] text-white">{initiative.tagline}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{initiative.description}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white">
                    {initiative.cta}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="DS Events"
          title="A Legacy of Experiences."
          description="Introducing the wider story of school events, competitions, clubs, and student-led experiences that continue to shape the DS Identity legacy."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {events.filter(event => event.status === "published").map((event, index) => (
            <article
              key={event.id}
              className={`overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <div className={`h-44 ${index === 0 ? "lg:h-60" : "h-44"} bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.35),transparent_25%),linear-gradient(135deg,#0f172a_0%,#0b1120_100%)]`} />
              <div className="p-6">
                <p className="text-[0.66rem] uppercase tracking-[0.25em] text-sky-300">{event.category}</p>
                <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.06em] text-white">{event.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{event.description}</p><Link className="ds-text-link" href={`/events/${event.slug}`}>Explore event <ArrowRight size={14} /></Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/events" className="inline-flex items-center gap-2 rounded-full border border-sky-400/50 bg-sky-500/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-sky-100 hover:bg-sky-500/20">
            Explore DS Events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-[2.4rem] border border-slate-800 bg-slate-900/80 p-7 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-sky-300">Meet the team</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl">
                The People Behind the Vision.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                Every initiative begins with people who believe in doing something extraordinary.
              </p>
            </div>

            <div className="flex items-center justify-end gap-4">
              {teamMembers.slice(0, 2).map((member) => (
                <div key={member.id} className="h-24 w-24 rounded-[1.4rem] border border-slate-700 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.38),rgba(15,23,42,0.9)_60%)] sm:h-28 sm:w-28" />
              ))}
              <Link
                href="/team"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:bg-sky-400"
              >
                Meet the Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ds-shell"><div className="ds-contact"><p className="ds-eyebrow">Get in touch</p><h2>LET&apos;S BUILD WHAT&apos;S NEXT.</h2><p>Have an idea, an opportunity, or a question? Connect with DS Identity and be part of the conversation.</p><div className="ds-contact__links"><a className="ds-button" href={social.email.href}>Email Us <ArrowRight size={15}/></a><a className="ds-button ds-button--quiet" href={social.instagram.href} target="_blank" rel="noopener noreferrer">Follow on Instagram <ArrowRight size={15}/></a></div></div></section>

    </div>
  );
}
