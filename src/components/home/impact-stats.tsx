"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/site";

export function ImpactStats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_0_25px_rgba(14,165,233,0.08)]"
          >
            <div className="text-4xl font-semibold tracking-[-0.08em] text-white">
              {stat.placeholder ? "XX" : stat.value}
              {stat.suffix}
            </div>
            <div className="mt-3 text-sm uppercase tracking-[0.18em] text-slate-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
