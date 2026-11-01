import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { volumeOne, volumeOneInterviews, volumeOneEditorials, volumeTwo, volumeTwoInterviews } from "@/data/magazines";
import { VideoCard } from "@/components/ui/video-card";

export default function BeyondVenturesPage() {
  return <div className="ds-shell">
    <header className="ds-page-heading"><p className="ds-eyebrow">DS Identity / The commerce magazine</p><h1>BEYOND<br/>VENTURES</h1><h2>The stories behind ambition.</h2><p>A student-led publication exploring resilience, leadership, and the courage to challenge expectations.</p></header>
    <section className="ds-volume-one ds-reveal" aria-labelledby="volume-one-heading"><Link className="ds-volume-one__cover" href="/beyond-ventures/volume-1"><Image src={volumeOne.cover} alt="Shadows to Spotlight — original Beyond Ventures Volume 1 cover" fill sizes="(max-width:700px) 80vw, 350px" priority /></Link><div><p className="ds-eyebrow">Volume {volumeOne.volume} / Published</p><h2 id="volume-one-heading">{volumeOne.title}</h2>{volumeOne.description.map(p=><p key={p}>{p}</p>)}<Link href="/beyond-ventures/volume-1" className="ds-button"><BookOpen size={17}/> Read Volume 1</Link></div></section>
    <section className="ds-section"><p className="ds-eyebrow">Volume 01 / Confirmed direct interviews</p><h2>Two conversations. Real perspectives.</h2><div className="ds-video-grid">{volumeOneInterviews.map(video=><VideoCard key={video.id} video={video}/>)}</div></section>
    <section className="ds-section"><p className="ds-eyebrow">Volume 01 / Featured editorials</p><h2>Perspectives on leadership.</h2><p className="ds-note">Editorial contributions and profiles in the magazine, distinct from its confirmed direct interviews.</p><div className="ds-editorials">{volumeOneEditorials.map(item=><article key={item.name}><h3>{item.name}</h3><p>{item.focus}</p><Link className="ds-text-link" href="/beyond-ventures/volume-1">Explore the magazine <ArrowUpRight size={15}/></Link></article>)}</div></section>
    <section className="ds-blueprint ds-section" aria-labelledby="volume-two-heading"><p className="ds-eyebrow">Volume 02 / The next chapter</p><h2 id="volume-two-heading">{volumeTwo.title}</h2><h3>{volumeTwo.tagline}</h3><div className="ds-tags"><span>Magazine: Coming Soon</span><span>Interviews: Published</span></div>{volumeTwo.description.map(p=><p key={p}>{p}</p>)}<div className="ds-video-grid ds-video-grid--three">{volumeTwoInterviews.map(video=><VideoCard key={video.id} video={video}/>)}</div><p className="ds-note">The Volume 2 magazine is in development. No release date has been announced.</p></section>
  </div>;
}
