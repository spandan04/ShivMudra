"use client";

import { motion } from "framer-motion";
import { CircleDot } from "lucide-react";
import { useEffect, useState } from "react";

export function MarketDataHero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Client-side only
    setTime(new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true }));
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#fafaf8] pt-32 pb-12 border-b border-[#E2E4E8]">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0B2341] mb-4">
              Market Intelligence <span className="champagne-gradient-text">Center</span>
            </h1>
            <p className="text-lg md:text-xl text-[#657084]">
              Real-time market insights, performance analytics, and institutional-grade market intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col items-start md:items-end gap-2"
          >
            <div className="flex items-center gap-2 bg-[#ffffff] border border-[#E2E4E8] rounded-full px-4 py-2 shadow-sm">
              <CircleDot className="h-3 w-3 text-[#10B981] animate-pulse" />
              <span className="text-sm font-medium text-[#0B2341]">Market Open</span>
            </div>
            {time && (
              <p className="text-sm text-[#657084] font-medium px-1">
                Last updated: Today, {time} IST
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
