import { Suspense } from "react";
import { notFound, permanentRedirect } from "next/navigation";
import { events } from "@/data/site";
import { VenturistsPage, InvestmentClubPage } from "@/components/events/event-details";
export function generateStaticParams() { return events.map(event=>({slug:event.slug})); }
export default function EventDetailPage({params}:{params:Promise<{slug:string}>}) {
  return <Suspense fallback={<div className="ds-shell ds-page-heading" role="status">Loading event…</div>}><EventContent params={params}/></Suspense>;
}
async function EventContent({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  if(slug==="ds-ventures") permanentRedirect("/events/ds-venturists");
  if(slug==="ds-venturists") return <VenturistsPage/>;
  if(slug==="investment-literacy-club") return <InvestmentClubPage/>;
  const event=events.find(item=>item.slug===slug);
  if(!event) notFound();
  return <div className="ds-shell"><header className="ds-page-heading"><p className="ds-eyebrow">DS Events</p><h1>{event.title}</h1><span className="ds-status">Coming Soon</span><p>Further event details will be published when confirmed.</p></header></div>;
}
