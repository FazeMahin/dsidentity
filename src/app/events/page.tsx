import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { events } from "@/data/site";
import { externalCompetitions, externalCompetitionIntro } from "@/data/competitions";

export default function EventsPage() {
  return <div className="ds-shell"><header className="ds-page-heading"><p className="ds-eyebrow">DS Identity / Experiences</p><h1>DS EVENTS</h1><h2>Where Ideas Become Experiences.</h2><p>Entrepreneurial competitions, financial literacy, and student-led learning at Dubai Scholars Private School.</p></header>
    <section className="ds-section" aria-labelledby="events-heading"><p className="ds-eyebrow">Organised at Dubai Scholars</p><h2 id="events-heading">A legacy of experiences.</h2>{events.filter(event=>event.status === "published").map((event,i)=><article className="ds-competition ds-reveal" key={event.id}><div><p className="ds-eyebrow">0{i+1} / {event.category}</p><h3 className="mt-5">{event.title}</h3></div><div><p>{event.description}</p><Link className="ds-button" href={`/events/${event.slug}`}>Explore the experience <ArrowUpRight size={16}/></Link></div></article>)}</section>
    <section className="ds-section" aria-labelledby="external-heading"><p className="ds-eyebrow">External competitions / Student participation</p><h2 id="external-heading">Competing Beyond the Classroom.</h2><p className="ds-section-intro">{externalCompetitionIntro}</p><p className="ds-note">These are external competitions, not events organised by DS Identity.</p>{externalCompetitions.map(c=><article className="ds-competition" key={c.id}><div><h3>{c.title}</h3><div className="ds-tags">{c.themes.map(t=><span key={t}>{t}</span>)}</div></div><div><p>{c.description}</p><p>{c.recognition}</p></div></article>)}</section>
  </div>;
}
