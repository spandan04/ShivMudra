"use client";

import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";
import { stats } from "@/lib/data";
import Image from "next/image";
import { MotionDiv, fadeUp, fadeUpDelayed, stagger, MotionA, springScale, CountUp } from "./Motion";

function WealthIllustration() {
  return (
    <MotionDiv 
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative flex h-[360px] items-center justify-center md:h-[500px] w-full"
    >
      <div className="relative h-full w-full max-w-lg lg:max-w-xl">
        <Image 
          src="/hero-image.png" 
          alt="Wealth Management Growth" 
          fill
          className="object-contain drop-shadow-2xl"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </MotionDiv>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] pb-24 pt-24 md:pb-32 md:pt-32">
      <div className="absolute -right-32 top-0 h-[600px] w-[600px] rounded-full border border-[#E2E4E8] opacity-50" />
      <div className="absolute left-0 top-32 h-px w-full bg-gradient-to-r from-transparent via-[#E2E4E8] to-transparent" />
      <MotionDiv
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="section-shell grid items-center gap-16 lg:grid-cols-[1fr_1fr]"
      >
        <div>
          <MotionDiv
            variants={fadeUp}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E2E4E8] bg-[#ffffff] px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-[#0B2341] shadow-sm"
          >
            <Sparkles size={14} className="text-[#D8BE8A]" strokeWidth={2} />
            Premium Wealth Management
          </MotionDiv>
          <MotionDiv variants={fadeUpDelayed}>
            <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[1.1] tracking-tight text-[#0B2341] md:text-6xl lg:text-7xl">
              Build, Protect & <span className="gold-text italic">Grow</span> Your Wealth
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#657084]">
              Bespoke financial strategies crafted for discerning families,
              professionals, and business owners seeking traditional reliability
              with modern fintech precision.
            </p>
          </MotionDiv>
          <MotionDiv variants={fadeUpDelayed} className="mt-10 flex flex-col gap-5 sm:flex-row">
            <MotionA
              href="#wealth-services"
              variants={springScale}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center justify-center gap-3 rounded bg-[#0B2341] px-8 py-4 text-sm font-bold uppercase tracking-wider !text-[#ffffff] shadow-[0_4px_14px_rgba(11,35,65,0.2)] transition-colors hover:bg-[#17365D]"
              style={{ color: '#ffffff' }}
            >
              Start Investing <ArrowRight size={18} />
            </MotionA>
            <MotionA
              href="#contact"
              variants={springScale}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center justify-center gap-3 rounded border border-[#E2E4E8] bg-[#ffffff] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0B2341] transition-colors hover:border-[#D8BE8A] hover:text-[#D8BE8A] shadow-sm"
            >
              Book Consultation <CalendarDays size={18} />
            </MotionA>
          </MotionDiv>
          <MotionDiv
            variants={fadeUpDelayed}
            className="mt-16 flex max-w-lg border-t border-[#E2E4E8] pt-10"
          >
            {stats.map((stat) => {
              // Extract numbers and suffixes for counting animation
              const match = stat.value.match(/^([\D]*)([\d.,]+)([\D]*)$/);
              const prefix = match ? match[1] : "";
              const numberStr = match ? match[2].replace(/,/g, '') : "0";
              const number = parseFloat(numberStr);
              const suffix = match ? match[3] : "";

              return (
                <div key={stat.label} className="mr-12 border-r border-[#E2E4E8] pr-12 last:border-0 last:mr-0 last:pr-0">
                  <p className="font-serif text-3xl font-semibold text-[#0B2341]">
                    {match && !isNaN(number) ? (
                      <CountUp 
                        to={number} 
                        duration={2}
                        formatter={(val) => `${prefix}${val.toFixed(number % 1 !== 0 ? 1 : 0)}${suffix}`} 
                      />
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#657084]">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </MotionDiv>
        </div>
        <MotionDiv variants={fadeUp}>
          <WealthIllustration />
        </MotionDiv>
      </MotionDiv>
    </section>
  );
}
