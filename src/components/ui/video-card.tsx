"use client";
import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import type { VideoEntry } from "@/data/videos";

export function VideoCard({ video }: { video: VideoEntry }) {
  const [playing, setPlaying] = useState(false);
  const href = `https://www.youtube.com/watch?v=${video.id}`;
  return <article className="ds-video">
    <div className="ds-video__media">
      {playing ? <iframe src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=0&rel=0`} title={video.title} allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> :
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Play ${video.title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt={`YouTube thumbnail: ${video.title}`} loading="lazy" width={480} height={360} />
          <span className="ds-video__play"><Play size={24} fill="currentColor" /></span><span className="ds-video__prompt">Watch {video.category.toLowerCase().includes("interview") ? "Interview" : "Video"}</span>
        </button>}
    </div>
    <p className="ds-eyebrow">{video.category}</p><h3>{video.title}</h3>
    {video.description && <p>{video.description}</p>}
    <a className="ds-text-link" href={href} target="_blank" rel="noopener noreferrer">Watch on YouTube <ArrowUpRight size={15} /><span className="sr-only"> (opens in a new tab)</span></a>
  </article>;
}
