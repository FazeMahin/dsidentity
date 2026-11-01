"use client";

import { ArrowLeft, ArrowRight, Download, Fullscreen, Minus, Plus, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import { volumeOnePageManifest } from "@/data/magazine-volume-1";

export function MagazineFlipbook() {
  const flipBookRef = useRef<{ pageFlip: () => { flipNext: () => void; flipPrev: () => void } }>(null);
  const reducedMotion = useReducedMotion();
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateLayout = () => setIsMobile(window.innerWidth < 768);
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    const preload = () => {
      const start = Math.max(0, currentPage - 1);
      const end = Math.min(volumeOnePageManifest.length, currentPage + 3);

      volumeOnePageManifest.slice(start, end).forEach(({ src }) => {
        const image = new window.Image();
        image.src = src;
      });
    };

    preload();
  }, [currentPage]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.target as HTMLElement)?.closest("input, textarea, select")) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        flipBookRef.current?.pageFlip()?.flipNext();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        flipBookRef.current?.pageFlip()?.flipPrev();
      }
      if (event.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isFullscreen]);

  const FlipBook = HTMLFlipBook;

  return (
    <div className="mx-auto max-w-6xl">
      <div
        className={`rounded-[2rem] border border-sky-500/20 bg-slate-950 p-4 shadow-[0_0_50px_rgba(14,165,233,0.12)] ${
          isFullscreen ? "fixed inset-4 z-50 overflow-auto p-6" : "relative"
        }`}
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-200">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => flipBookRef.current?.pageFlip()?.flipPrev()}
              className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-sky-400/60"
              aria-label="Previous page"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => flipBookRef.current?.pageFlip()?.flipNext()}
              className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-sky-400/60"
              aria-label="Next page"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
            Page {currentPage + 1} / {volumeOnePageManifest.length}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setZoom((value) => Math.max(0.8, Number((value - 0.1).toFixed(1))))}
              className="rounded-full border border-white/10 bg-white/5 p-2"
              aria-label="Zoom out"
            >
              <Minus className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setZoom((value) => Math.min(1.5, Number((value + 0.1).toFixed(1))))}
              className="rounded-full border border-white/10 bg-white/5 p-2"
              aria-label="Zoom in"
            >
              <Plus className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setZoom(1)}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em]"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => setIsFullscreen((value) => !value)}
              className="rounded-full border border-white/10 bg-white/5 p-2"
              aria-label="Toggle fullscreen"
            >
              <Fullscreen className="h-4 w-4" />
            </button>
            <a
              download="Beyond-Ventures-Shadows-to-Spotlight.pdf"
              href="/magazines/beyond-ventures-volume-1.pdf"
              className="rounded-full border border-sky-500/40 bg-sky-500/10 p-2 text-sky-100"
              aria-label="Download PDF"
            >
              <Download className="h-4 w-4" />
            </a>
            {isFullscreen && <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              className="rounded-full border border-white/10 bg-white/5 p-2"
              aria-label="Close reader"
            >
              <X className="h-4 w-4" />
            </button>}
          </div>
        </div>

        <div className="flex justify-center overflow-auto p-2 sm:p-6">
          <div className="ds-reader-zoom"
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: "center top",
            }}
          >
            <FlipBook
              ref={flipBookRef}
              key={isMobile ? "portrait" : "spread"}
              width={isMobile ? 290 : 460}
              height={isMobile ? 430 : 650}
              size="stretch"
              minWidth={260}
              maxWidth={isMobile ? 360 : 520}
              minHeight={340}
              maxHeight={750}
              drawShadow
              flippingTime={reducedMotion ? 1 : 900}
              usePortrait={true}
              showCover
              mobileScrollSupport
              swipeDistance={30}
              className="mx-auto"
              style={{}}
              maxShadowOpacity={0.4}
              clickEventForward
              useMouseEvents
              showPageCorners={!reducedMotion}
              disableFlipByClick={false}
              startPage={currentPage}
              startZIndex={10}
              autoSize
              onFlip={(event: { data: number }) => setCurrentPage(event.data ?? 0)}
            >
              {volumeOnePageManifest.map((page, index) => (
                <div
                  key={page.id}
                  className="page relative overflow-hidden border border-slate-700 bg-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.5)]"
                >
                  <div className="relative h-full w-full bg-black">
                    {/* Native images retain the supplied print-page resolution when zooming. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={page.src}
                      alt={page.alt}
                      className="h-full w-full select-none object-contain object-center"
                      draggable={false}
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                    {index === 0 ? (
                      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.2)]" />
                    ) : null}
                  </div>
                </div>
              ))}
            </FlipBook>
          </div>
        </div>
      </div>
    </div>
  );
}
