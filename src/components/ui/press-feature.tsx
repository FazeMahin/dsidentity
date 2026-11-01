import { ArrowUpRight } from "lucide-react";
import { pressFeature } from "@/data/community";
export function PressFeature({ prominent = false }: { prominent?: boolean }) {
  return <section className={`ds-press ${prominent ? "ds-press--prominent" : ""}`} aria-labelledby={prominent ? "event-press-heading" : "home-press-heading"}>
    <div className="ds-press__masthead"><p className="ds-eyebrow">Recognised beyond the classroom</p><span>{pressFeature.publication}</span><p><time dateTime={pressFeature.dateTime}>{pressFeature.date}</time><br />By {pressFeature.author}</p></div>
    <div><h2 id={prominent ? "event-press-heading" : "home-press-heading"}>Featured in Khaleej Times.</h2><h3>{pressFeature.headline}</h3><p>{pressFeature.summary}</p><a href={pressFeature.href} target="_blank" rel="noopener noreferrer" className="ds-text-link">Read Full Article <ArrowUpRight size={17} /><span className="sr-only"> (opens in a new tab)</span></a></div>
  </section>;
}
