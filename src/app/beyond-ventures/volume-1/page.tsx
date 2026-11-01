import { MagazineFlipbook } from "@/components/ventures/magazine-flipbook";

export default function VolumeOnePage() {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-400">Volume 01</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em] text-slate-950 dark:text-white sm:text-5xl">
            Shadows to Spotlight
          </h1>
        </div>
        <MagazineFlipbook />
      </section>
    </div>
  );
}
