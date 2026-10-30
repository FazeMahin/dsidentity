export function BrandGraphic() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-950/60 shadow-[0_30px_90px_rgba(2,6,23,0.85)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.32),transparent_28%),radial-gradient(circle_at_75%_40%,rgba(96,165,250,0.24),transparent_24%),linear-gradient(135deg,#020617_0%,#0b1120_50%,#0f172a_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:26px_26px]" />

      <svg
        viewBox="0 0 600 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path d="M80 290L210 130L340 220L480 90" stroke="rgba(96,165,250,0.45)" strokeWidth="1.5" fill="none" />
        <path d="M150 310L260 200L360 260L520 150" stroke="rgba(148,163,184,0.4)" strokeWidth="1.5" fill="none" />
        <circle cx="210" cy="130" r="6" fill="#7dd3fc" fillOpacity="0.9" />
        <circle cx="340" cy="220" r="6" fill="#93c5fd" fillOpacity="0.8" />
        <circle cx="480" cy="90" r="7" fill="#dbeafe" fillOpacity="0.9" />
        <circle cx="260" cy="200" r="5" fill="#60a5fa" fillOpacity="0.8" />
      </svg>

      <div className="absolute left-8 top-8 h-16 w-16 rounded-full border border-sky-400/40 bg-sky-500/10" />
      <div className="absolute bottom-10 right-10 h-28 w-28 rounded-full border border-sky-300/20 bg-sky-500/5" />

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
      <div className="absolute left-8 top-8 text-[10px] uppercase tracking-[0.5em] text-sky-200/80">
        commerce. ambition. culture.
      </div>
      <div className="absolute bottom-8 left-8 text-5xl font-black tracking-[-0.08em] text-white/90">
        DS
      </div>
    </div>
  );
}
