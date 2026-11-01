"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Search, ArrowUpRight, Download } from "lucide-react";
import { pathways, resourceCategories, resourceFiles, type SubjectPathway, type ResourceFile } from "@/data/resources";

export function ResourceLibrary({ pathway }: { pathway: SubjectPathway }) {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("all");
  const [category, setCategory] = useState("all");
  const [preview, setPreview] = useState<ResourceFile | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (preview) dialog.current?.showModal();
    else { dialog.current?.close(); opener.current?.focus(); }
  }, [preview]);
  const categories = resourceCategories.filter(item => !item.subjects || item.subjects.includes(pathway.subject));
  const visible = categories.filter(item => (category === "all" || category === item.id) && (item.label.toLowerCase().includes(search.toLowerCase()) || pathway.topics.some(t => (topic === "all" || topic === t) && t.toLowerCase().includes(search.toLowerCase()))));
  const matchingTopics = pathway.topics.filter(t => (topic === "all" || topic === t) && (t.toLowerCase().includes(search.toLowerCase()) || categories.some(c => c.label.toLowerCase().includes(search.toLowerCase()))));
  return <div className="ds-shell ds-resource-page">
    <nav className="ds-breadcrumb" aria-label="Breadcrumb"><Link href="/beyond-books">Beyond Books</Link><span>/</span><Link href={`/beyond-books/${pathway.qualification}`}>{pathway.label}</Link><span>/ {pathway.title}</span></nav>
    <header className="ds-page-heading"><p className="ds-eyebrow">Pearson Edexcel / {pathway.label}</p><h1>{pathway.title}</h1><p>Choose a topic, browse a category, and find your next step.</p><span className="ds-status">Resources Coming Soon</span></header>
    <div className="ds-specification"><div><p className="ds-eyebrow">Specification</p><strong>{pathway.specification}</strong><a className="ds-text-link" href={pathway.source} target="_blank" rel="noopener noreferrer">View Pearson specification <ArrowUpRight size={14}/></a></div><ul>{pathway.papers.map(p => <li key={p.code}><code>{p.code}</code><span>{p.level && `${p.level} — `}{p.title}</span></li>)}</ul></div>
    <p className="ds-note">These pathways follow Pearson Edexcel specifications. Check your examination entry with your school; regional papers may carry an R suffix. No study resources have been published yet.</p>
    <div className="ds-pathway-switch" aria-label="Switch qualification or subject">{pathways.map(p => <Link key={`${p.qualification}-${p.subject}`} href={`/beyond-books/${p.qualification}/${p.subject}`} aria-current={p.qualification===pathway.qualification&&p.subject===pathway.subject ? "page" : undefined}>{p.qualification === "igcse" ? "IGCSE" : "IAS / IAL"} {p.title}</Link>)}</div>
    <form className="ds-resource-filters" onSubmit={e => e.preventDefault()}>
      <label><span>Search resources</span><div className="ds-search"><Search size={17}/><input type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search topics or categories" /></div></label>
      <label><span>Topic</span><select value={topic} onChange={e => setTopic(e.target.value)}><option value="all">All topics</option>{pathway.topics.map(t => <option key={t}>{t}</option>)}</select></label>
      <label><span>Resource category</span><select value={category} onChange={e => setCategory(e.target.value)}><option value="all">All categories</option>{categories.map(c => <option value={c.id} key={c.id}>{c.label}</option>)}</select></label>
      <button type="button" className="ds-button ds-button--quiet" onClick={()=>{setSearch("");setTopic("all");setCategory("all");}}>Reset filters</button>
    </form>
    <p className="ds-note" role="status">{visible.length} categories match your filters.</p>
    <div className="ds-resource-groups">{visible.map(c => <details key={`${c.id}-${topic}-${search}`} open={category !== "all" || Boolean(search)}><summary><span>{c.label}</span><span className="ds-status">Coming Soon</span></summary><div className="ds-resource-rows">{(matchingTopics.length ? matchingTopics : [topic !== "all" ? topic : "All topics"]).map(t => {
      const files = resourceFiles.filter(f => f.qualification===pathway.qualification && f.subject===pathway.subject && f.category===c.id && f.topic===t);
      return <div key={t}><h3>{t}</h3>{files.length ? files.map(f => <div className="ds-resource-file" key={f.id}><span>{f.title}{f.paperCode && <small>{f.paperCode}</small>}</span><button type="button" onClick={e=>{opener.current=e.currentTarget;setPreview(f);}}>Preview PDF</button><a href={f.fileUrl} download><Download size={15}/> Download</a></div>) : <p>Materials for this topic are being prepared. <span>Coming Soon</span></p>}</div>;
    })}</div></details>)}</div>
    {!visible.length && <div className="ds-empty">No matching categories. Try another topic or reset your filters.</div>}
    <dialog ref={dialog} className="ds-pdf-dialog" aria-labelledby="pdf-title" onCancel={e=>{e.preventDefault();setPreview(null);}}>{preview && <><header><h2 id="pdf-title">{preview.title}</h2><button type="button" onClick={()=>setPreview(null)}>Close preview</button></header><iframe title={`PDF preview: ${preview.title}`} src={preview.fileUrl}/><a href={preview.fileUrl} download>Download PDF</a></>}</dialog>
  </div>;
}
