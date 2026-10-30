"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import "./hero-showcase.css";

export function HeroShowcase() {
  return (
    <section
      className="relative isolate min-h-[calc(100svh-74px)] overflow-hidden bg-[#0a1428] text-[#f5f7fa]"
    >
      <div
        className="ds-hero-background absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(37,99,235,0.28),transparent_28%),linear-gradient(180deg,#0a1428_0%,#05070b_100%)]" />
        <div
          aria-hidden="true"
          className="ds-hero-ambient absolute left-1/2 top-[48%] h-[38vh] w-[38vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.45)_0%,rgba(29,78,216,0.26)_40%,rgba(147,197,253,0.06)_72%,transparent_100%)] blur-3xl"
        />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(184,217,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(184,217,255,0.22)_1px,transparent_1px)] [background-size:clamp(72px,8vw,130px)_clamp(72px,8vw,130px)]" />
        <div className="absolute left-[16%] top-[30%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-slate-300/60 after:absolute after:left-1/2 after:top-1/2 after:h-px after:w-4 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-current before:absolute before:left-1/2 before:top-1/2 before:h-4 before:w-px before:-translate-x-1/2 before:-translate-y-1/2 before:bg-current" />
        <div className="absolute left-[72%] top-[24%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-slate-300/60 after:absolute after:left-1/2 after:top-1/2 after:h-px after:w-4 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-current before:absolute before:left-1/2 before:top-1/2 before:h-4 before:w-px before:-translate-x-1/2 before:-translate-y-1/2 before:bg-current" />
        <div className="absolute left-[62%] top-[74%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-slate-300/60 after:absolute after:left-1/2 after:top-1/2 after:h-px after:w-4 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-current before:absolute before:left-1/2 before:top-1/2 before:h-4 before:w-px before:-translate-x-1/2 before:-translate-y-1/2 before:bg-current" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-74px)] max-w-[1400px] flex-col justify-between overflow-hidden px-4 pb-10 pt-20 sm:px-6 lg:px-8 lg:pt-24">

        <div className={`pointer-events-none absolute left-1/2 top-[50%] z-20 -translate-x-1/2 -translate-y-1/2 ds-hero-logo-size`}>
          <div className="ds-hero-entrance">
            <div className="ds-hero-float">
              <div aria-hidden="true" className="ds-hero-glow" />
              <Image
                src="/branding/dsidenlogo.png"
                alt="DS Identity official logo"
                width={1323}
                height={1189}
                sizes="(min-width: 1024px) 52vw, 54vw"
                priority
                className="relative z-10 h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="ds-hero-labels pointer-events-none absolute inset-0 z-10">
          <p
            className="absolute left-4 top-[19%] hidden text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-slate-300 sm:left-8 md:block lg:left-12"
          >
            DUBAI SCHOLARS PRIVATE SCHOOL
          </p>
          <p
            className="absolute right-4 top-[22%] text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-slate-300 sm:right-8 md:text-[0.64rem] md:tracking-[0.24em] lg:right-12"
          >
            COMMERCE COMMUNITY
          </p>
          <p
            className="absolute bottom-[23%] left-4 hidden text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-slate-300 sm:left-8 md:block md:text-[0.64rem] md:tracking-[0.24em] lg:left-12"
          >
            ESTABLISHED LEGACY
          </p>
          <p
            className="absolute bottom-[17%] right-4 hidden text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-slate-300 sm:right-8 md:block md:text-[0.64rem] md:tracking-[0.24em] lg:right-12"
          >
            BEYOND COMMERCE
          </p>
        </div>

        <div className="relative z-30 mt-auto flex flex-col items-start justify-between gap-4 pb-4 sm:flex-row sm:items-end sm:gap-6">
          <p className="max-w-sm text-sm leading-6 text-slate-200 sm:text-base">
            The home of commerce, entrepreneurship, financial literacy, and student-led innovation.
          </p>

          <Link
            href="#about-ds-identity"
            className="group inline-flex shrink-0 items-center gap-2 border-b border-slate-400/70 pb-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] whitespace-nowrap text-slate-100 transition hover:border-white hover:text-white sm:text-[0.7rem] sm:tracking-[0.26em]"
          >
            Scroll To Explore
            <ArrowDown className="h-3.5 w-3.5 transition group-hover:translate-y-0.5" />
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#05070b]" />
    </section>
  );
}
