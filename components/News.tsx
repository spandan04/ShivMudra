"use client";

import { ArrowRight, Newspaper } from "lucide-react";
import { useState } from "react";
import { newsTabs } from "@/lib/data";
import { MotionDiv, fadeUp, stagger, AnimatePresence } from "./Motion";

const tabs = Object.keys(newsTabs) as Array<keyof typeof newsTabs>;

export function News() {
  const [active, setActive] = useState<(typeof tabs)[number]>("Market News");

  return (
    <section className="bg-[#FAFAF8] py-24 md:py-32">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[11px] font-bold uppercase tracking-widest champagne-gradient-text">
              Financial News
            </p>
            <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-[#0B2341] md:text-5xl">
              Insights for Informed Investors
            </h2>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`rounded border px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  active === tab
                    ? "border-[#0B2341] bg-[#0B2341] text-[#ffffff] shadow-md scale-105"
                    : "border-[#E2E4E8] bg-[#ffffff] text-[#0B2341] hover:border-[#D8BE8A] hover:text-[#D8BE8A]"
                }`}
              >
                {tab}
              </button>
            ))}
          </MotionDiv>
        </div>

        <div className="mt-16 min-h-[400px]">
          <AnimatePresence mode="wait">
            <MotionDiv
              key={active}
              variants={stagger}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              className="grid gap-8 md:grid-cols-3"
            >
              {newsTabs[active].map((story, index) => (
                <MotionDiv
                  variants={fadeUp}
                  key={story}
                  whileHover={{ y: -8, scale: 1.01, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="group premium-card rounded-xl p-8"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <MotionDiv 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring" }}
                      className="grid size-12 place-items-center rounded bg-[#FAFAF8] text-[#D8BE8A] border border-[#E2E4E8] transition-colors group-hover:bg-[#D8BE8A]/10"
                    >
                      <Newspaper size={20} strokeWidth={1.5} />
                    </MotionDiv>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#657084]">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="min-h-[7rem] font-serif text-xl font-medium leading-relaxed text-[#0B2341]">
                    {story}
                  </p>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#0B2341] transition-colors group-hover:text-[#D8BE8A]"
                  >
                    Read Insight <ArrowRight size={15} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </MotionDiv>
              ))}
            </MotionDiv>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
