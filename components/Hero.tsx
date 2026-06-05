"use client";

import { ArrowRight, CalendarDays, IndianRupee, Sparkles, TrendingUp } from "lucide-react";
import { stats } from "@/lib/data";
import { MotionDiv, fadeUp, fadeUpDelayed, stagger, MotionA, springScale, CountUp, MotionG, MotionCircle } from "./Motion";

function WealthIllustration() {
  return (
    <MotionDiv 
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative h-[360px] overflow-hidden rounded-xl border border-[#E2E4E8] bg-[#ffffff] shadow-[0_16px_48px_-8px_rgba(11,35,65,0.06)] md:h-[460px]"
    >
      <div className="absolute inset-0 subtle-grid opacity-60" />
      <div className="absolute left-8 top-8 premium-glass rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#D8BE8A]">
        Active Portfolio
      </div>
      <div className="absolute bottom-12 left-8 right-8 flex items-end justify-center gap-6 md:gap-8">
        {[100, 150, 190, 250, 310].map((height, index) => (
          <div key={height} className="relative flex flex-col items-center">
            <MotionDiv
              initial={{ height: 0 }}
              animate={{ height }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 + index * 0.1 }}
              className={`w-12 rounded-t-lg shadow-md md:w-16 ${
                index % 2 ? "bg-[#D8BE8A]" : "bg-[#0B2341]"
              }`}
            />
            <span className="mt-4 h-2 w-16 rounded-full bg-[#0B2341]/5" />
          </div>
        ))}
      </div>
      <svg
        className="absolute inset-x-8 bottom-32 h-52 w-[calc(100%-4rem)] overflow-visible"
        viewBox="0 0 520 180"
        fill="none"
        aria-hidden="true"
      >
        <MotionG
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        >
          <path
            d="M8 148 C70 118 108 132 154 96 C205 56 245 78 296 52 C350 25 390 58 450 20 L512 8"
            stroke="#FF9933"
            strokeWidth="12"
            strokeLinecap="round"
            opacity="0.1"
          />
          <path
            d="M8 148 C70 118 108 132 154 96 C205 56 245 78 296 52 C350 25 390 58 450 20 L512 8"
            stroke="#0B2341"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </MotionG>
        {[8, 154, 296, 450, 512].map((cx, index) => (
          <MotionCircle
            key={cx}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 1 + index * 0.15 }}
            cx={cx}
            cy={[148, 96, 52, 20, 8][index]}
            r="6"
            fill="#ffffff"
            stroke="#0B2341"
            strokeWidth="3"
            className="shadow-sm"
          />
        ))}
      </svg>
      <MotionDiv 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.8 }}
        className="absolute right-10 top-16 grid size-16 place-items-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#E67E22] text-[#ffffff] shadow-xl"
      >
        <IndianRupee size={26} strokeWidth={2} />
      </MotionDiv>
      <MotionDiv 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1.2 }}
        className="absolute bottom-10 right-10 flex items-center gap-4 rounded-lg premium-glass px-5 py-4 shadow-lg"
      >
        <TrendingUp className="text-[#10B981]" size={22} strokeWidth={2} />
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#657084]">YTD Growth</p>
          <p className="text-xl font-bold text-[#0B2341]">+12.8%</p>
        </div>
      </MotionDiv>
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
