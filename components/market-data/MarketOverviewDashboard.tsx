"use client";

import { motion } from "framer-motion";
import { marketOverview } from "@/lib/market-mock-data";
import { BarChart3, Activity, ArrowRightLeft, Trophy } from "lucide-react";

export function MarketOverviewDashboard() {
  return (
    <section className="py-8 bg-[#fafaf8]">
      <div className="section-shell">
        <h2 className="text-xl font-bold text-[#0B2341] mb-6">Market Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Advance / Decline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card rounded-xl p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-[#E2E4E8]/50 flex items-center justify-center">
                <ArrowRightLeft className="h-5 w-5 text-[#0B2341]" />
              </div>
              <h3 className="font-semibold text-[#657084]">Advance / Decline</h3>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold text-[#0B2341]">{marketOverview.advanceDecline.ratio}</p>
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <span className="text-[#10B981]">{marketOverview.advanceDecline.advances} Adv</span>
                  <span className="text-[#E2E4E8]">|</span>
                  <span className="text-[#EF4444]">{marketOverview.advanceDecline.declines} Dec</span>
                </div>
              </div>
            </div>
            {/* Progress bar visual */}
            <div className="h-2 w-full bg-[#E2E4E8] rounded-full mt-4 flex overflow-hidden">
              <div className="h-full bg-[#10B981]" style={{ width: '61%' }}></div>
              <div className="h-full bg-[#EF4444]" style={{ width: '39%' }}></div>
            </div>
          </motion.div>

          {/* Market Breadth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="premium-card rounded-xl p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-[#E2E4E8]/50 flex items-center justify-center">
                <Activity className="h-5 w-5 text-[#0B2341]" />
              </div>
              <h3 className="font-semibold text-[#657084]">Market Breadth</h3>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#10B981]">{marketOverview.marketBreadth.text}</p>
              <p className="text-sm text-[#657084] mt-1">Strength Indicator</p>
            </div>
            <div className="h-2 w-full bg-[#E2E4E8] rounded-full mt-4 overflow-hidden relative">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#EF4444] via-[#F59E0B] to-[#10B981]" 
                style={{ width: '100%' }}
              ></div>
              <div 
                className="absolute top-0 bottom-0 w-1 bg-[#0B2341] rounded-full" 
                style={{ left: `${marketOverview.marketBreadth.indicator}%` }}
              ></div>
            </div>
          </motion.div>

          {/* FII / DII Flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="premium-card rounded-xl p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-[#E2E4E8]/50 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-[#0B2341]" />
              </div>
              <h3 className="font-semibold text-[#657084]">Institutional Flow</h3>
            </div>
            <div className="space-y-2 mt-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-[#657084]">FII Net</span>
                <span className="font-bold text-[#10B981]">{marketOverview.fiiDii.fii}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-[#657084]">DII Net</span>
                <span className="font-bold text-[#10B981]">{marketOverview.fiiDii.dii}</span>
              </div>
            </div>
          </motion.div>

          {/* Sector Leader */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="premium-card rounded-xl p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-[#E2E4E8]/50 flex items-center justify-center">
                <Trophy className="h-5 w-5 text-[#D8BE8A]" />
              </div>
              <h3 className="font-semibold text-[#657084]">Sector Leader</h3>
            </div>
            <div className="mt-2">
              <p className="text-xl font-bold text-[#0B2341] truncate">{marketOverview.sectorLeader.name}</p>
              <div className="inline-block mt-2 px-3 py-1 bg-[#10B981]/10 rounded-full">
                <span className="text-sm font-bold text-[#10B981]">{marketOverview.sectorLeader.value}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
