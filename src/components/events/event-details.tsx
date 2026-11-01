import Image from "next/image";
import { venturists, investmentClub } from "@/data/event-content";
import { community } from "@/data/community";
import { eventVideos } from "@/data/videos";
import { VideoCard } from "@/components/ui/video-card";
import { PressFeature } from "@/components/ui/press-feature";
import { DSVenturesGallery } from "./ds-ventures-gallery";

function EventStatistics({ items }: {items: {value:string;label:string}[]}) {
  return <dl className="ds-event-statistics">{items.map(s=><div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>)}</dl>;
}
export function VenturistsPage() {
  return <div className="ds-shell"><header className="ds-page-heading"><p className="ds-eyebrow">DS Events / Entrepreneurship</p><h1>DS VENTURISTS</h1><h2>{venturists.tagline}</h2><p>{venturists.description[0]}</p></header>
    <EventStatistics items={venturists.statistics}/><p className="ds-note">{community.participationNote} Each edition has welcomed at least 100 participants, with some exceeding 200.</p>
    <section className="ds-editorial-split ds-section"><div><p className="ds-eyebrow">Eight editions of ambition</p><h2>Business beyond textbooks.</h2></div><div>{venturists.description.slice(1).map(p=><p key={p}>{p}</p>)}</div></section>
    <section className="ds-section"><p className="ds-eyebrow">2025 / Eighth edition</p><h2>Four ways to think differently.</h2><p className="ds-section-intro">The 2025 edition welcomed schools from across the UAE. Categories evolve each year; the Shark Tank-style pitching challenge is a recurring feature.</p><div className="ds-category-list">{venturists.categories2025.map((c,i)=><article key={c.title}><span>0{i+1}</span><h3>{c.title}</h3><p>{c.description}</p></article>)}</div></section>
    <PressFeature prominent/><DSVenturesGallery/>
    <section className="ds-section"><p className="ds-eyebrow">Watch the experience</p><h2>Inside DS Venturists.</h2><div className="ds-video-grid">{eventVideos.map(video=><VideoCard key={video.id} video={video}/>)}</div></section>
  </div>;
}
export function InvestmentClubPage() {
  return <div className="ds-shell"><header className="ds-page-heading"><p className="ds-eyebrow">DS Events / Financial education</p><h1>INVESTMENT<br/>LITERACY CLUB</h1><h2>{investmentClub.tagline}</h2><p>{investmentClub.description[0]}</p></header><EventStatistics items={investmentClub.statistics}/>
    <section className="ds-editorial-split ds-section"><div><p className="ds-eyebrow">The programme</p><h2>A foundation for financial confidence.</h2></div><div>{investmentClub.description.slice(1).map(p=><p key={p}>{p}</p>)}</div></section>
    <section className="ds-section"><p className="ds-eyebrow">Topics covered</p><h2>Eight sessions. Lasting foundations.</h2><p className="ds-note">These topics were explored across the programme; each topic does not represent a separate session.</p><ol className="ds-topic-list">{investmentClub.topics.map((t,i)=><li key={t}><span>0{i+1}</span>{t}</li>)}</ol></section>
    <section className="ds-guest ds-section"><div className="ds-guest__portrait"><Image src="/team/portrait-placeholder.svg" fill sizes="(max-width: 700px) 90vw, 360px" alt="Photograph placeholder for Mr. Rupesh"/><span>Photograph coming soon</span></div><div><p className="ds-eyebrow">Learning from experience</p><h2>{investmentClub.guest.name}</h2><p className="ds-status">{investmentClub.guest.role}</p><h3>{investmentClub.guest.topic}</h3><p>{investmentClub.guest.description}</p></div></section>
  </div>;
}
