"use client";
import { useEffect, useRef } from "react";
import { homepageStatistics, community } from "@/data/community";
function Counter({ value, animate }: {value:number;animate:boolean}) {
  const element = useRef<HTMLSpanElement>(null);
  useEffect(()=>{
    const node=element.current;
    if (!node || !animate) return;
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame=0;
    const finish=()=>{cancelAnimationFrame(frame);node.textContent=value.toLocaleString("en-US");};
    const observer=new IntersectionObserver(entries=>{
      if(!entries.some(e=>e.isIntersecting)) return;
      observer.disconnect();
      if(reduced.matches) return finish();
      const start=performance.now();
      const tick=(now:number)=>{const progress=Math.min(1,(now-start)/1300);node.textContent=Math.round(value*(1-Math.pow(1-progress,3))).toLocaleString("en-US");if(progress<1&&!reduced.matches) frame=requestAnimationFrame(tick);else finish();};
      frame=requestAnimationFrame(tick);
    },{threshold:.5});
    observer.observe(node);reduced.addEventListener("change",finish);
    return()=>{observer.disconnect();cancelAnimationFrame(frame);reduced.removeEventListener("change",finish);};
  },[value,animate]);
  return <span ref={element} aria-hidden="true">{animate ? value.toLocaleString("en-US") : String(value)}</span>;
}
export function ImpactStats(){return <section className="ds-shell" aria-label="DS Identity in numbers"><div className="ds-impact"><div className="ds-impact__grid">{homepageStatistics.map(s=><div key={s.label}><div className="ds-impact__number"><span className="sr-only">{s.animate ? s.value.toLocaleString("en-US") : String(s.value)}{s.suffix}</span><Counter value={s.value} animate={s.animate}/><span aria-hidden="true">{s.suffix}</span></div><p className="ds-impact__label">{s.label}</p></div>)}</div><p className="ds-note">{community.participationNote}</p></div></section>;}
