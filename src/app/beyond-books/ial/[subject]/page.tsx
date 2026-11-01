import { Suspense } from "react";
import { SubjectPage } from "../../subject-page";
import { pathways } from "@/data/resources";
export function generateStaticParams(){return pathways.filter(p=>p.qualification==="ial").map(p=>({subject:p.subject}));}
export default function Page({params}:{params:Promise<{subject:string}>}){return <Suspense fallback={<div className="ds-shell ds-page-heading" role="status">Loading subject…</div>}><SubjectPage params={params} qualification="ial"/></Suspense>;}
