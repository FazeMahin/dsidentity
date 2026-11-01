"use client";

import { useEffect, useRef, useState } from "react";
import CircularCarousel from "./CircularCarousel";
import { dsVenturesImages } from "@/data/ds-ventures-gallery";
import "./ds-ventures-gallery.css";

export function DSVenturesGallery() {
  const [paused, setPaused] = useState(false);
  const [group, setGroup] = useState(0);
  const groupSize = 8;
  const groupCount = Math.ceil(dsVenturesImages.length / groupSize);
  const visibleImages = dsVenturesImages.slice(group * groupSize, (group + 1) * groupSize);
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const open = (index: number) => {
    opener.current = document.activeElement as HTMLElement;
    setSelected(index);
  };
  const close = () => setSelected(null);
  const move = (delta: number) => setSelected(index => index === null ? null : (index + delta + dsVenturesImages.length) % dsVenturesImages.length);
  const isOpen = selected !== null;

  useEffect(() => {
    const element = dialog.current;
    if (!isOpen || !element) return;
    element.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previous;
      opener.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  const item = selected === null ? null : dsVenturesImages[selected];
  return (
    <section className="ds-ventures-gallery" aria-labelledby="ventures-gallery-heading">
      <div className="ds-ventures-gallery__intro">
        <p className="ds-ventures-gallery__eyebrow">DS Venturists</p>
        <h2 id="ventures-gallery-heading">Moments That Made the Journey.</h2>
        <p>Explore moments from DS Venturists, an annual entrepreneurial initiative that has completed eight cycles at Dubai Scholars Private School.</p>
        <span className="ds-ventures-gallery__notice">{dsVenturesImages.length} photographs from the DS Venturists journey.</span>
      </div>
      <div className="ds-ventures-gallery__canvas">
        <CircularCarousel key={group} items={visibleImages} preset="cylinder" intro="rise"
          cardWidth={260} aspectRatio={3 / 2} gap={25} autoplay={paused || isOpen ? "off" : "drift"}
          speed={14} direction="left" draggable momentum={0.6} snap pauseOnHover
          focusOnClick parallax={0.3} stretch={0.5} depthFade={0.55}
          fadeColor="#0A1428" cornerRadius={12} captions onItemClick={(_, index) => open(group * groupSize + index)} />
      </div>
      <div className="ds-gallery-groups">
        <button type="button" onClick={() => setGroup(value => (value - 1 + groupCount) % groupCount)}>Previous photos</button>
        <p role="status">Photos {group * groupSize + 1}–{Math.min((group + 1) * groupSize, dsVenturesImages.length)} of {dsVenturesImages.length}</p>
        <button type="button" onClick={() => setGroup(value => (value + 1) % groupCount)}>Next photos</button>
      </div>
      <div className="ds-ventures-gallery__footer">
        <p>Drag to explore · Click to focus · Click again to enlarge<br />Keyboard: left / right arrows to browse, Enter to enlarge.</p>
        <button type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? "Resume rotation" : "Pause rotation"}</button>
      </div>
      <dialog ref={dialog} className="ds-ventures-lightbox" aria-labelledby="ventures-lightbox-title"
        onCancel={event => { event.preventDefault(); close(); }}
        onKeyDown={event => {
          if (event.key === "ArrowRight") { event.preventDefault(); event.stopPropagation(); move(1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); event.stopPropagation(); move(-1); }
        }}>
        {item && <>
          <div className="ds-ventures-lightbox__top"><h3 id="ventures-lightbox-title">{item.title}</h3><button type="button" onClick={close} autoFocus aria-label="Close image viewer">Close ×</button></div>
          {/* Native img preserves proportions and also supports locally supplied SVG placeholders. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.src} alt={item.alt} onError={event => { if (!event.currentTarget.src.endsWith("placeholder-01.svg")) event.currentTarget.src = "/events/ds-ventures/placeholder-01.svg"; }} />
          <div className="ds-ventures-lightbox__bottom"><button type="button" onClick={() => move(-1)}>← Previous</button><p aria-live="polite">{selected! + 1} / {dsVenturesImages.length}<span>{item.subtitle}</span></p><button type="button" onClick={() => move(1)}>Next →</button></div>
        </>}
      </dialog>
    </section>
  );
}
