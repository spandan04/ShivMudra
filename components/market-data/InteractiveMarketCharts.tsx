"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { mainChartData } from "@/lib/market-mock-data";

const tabs = ["NIFTY", "SENSEX", "BANK NIFTY", "GOLD", "USD/INR"];
const timeframes = ["1D", "1W", "1M", "6M", "1Y", "5Y"];

export function InteractiveMarketCharts() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeTimeframe, setActiveTimeframe] = useState(timeframes[0]);

  return (
    <section className="py-12 bg-[#ffffff] border-t border-[#E2E4E8]">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-[#0B2341] mb-2">Market Performance</h2>
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === tab 
                      ? "bg-[#0B2341] text-[#ffffff] shadow-md" 
                      : "bg-[#fafaf8] text-[#657084] hover:bg-[#E2E4E8]/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex bg-[#E2E4E8]/50 p-1 rounded-lg">
            {timeframes.map((tf) => (
              <button
                key={tf}
                onClick={() => setActiveTimeframe(tf)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                  activeTimeframe === tf 
                    ? "bg-[#ffffff] text-[#0B2341] shadow-sm" 
                    : "text-[#657084] hover:text-[#0B2341]"
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        <div className="premium-card rounded-2xl p-6 h-[500px] w-full">
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-[#0B2341]">22,514.65</h3>
            <p className="text-sm font-semibold text-[#10B981]">+189.20 (+0.85%) <span className="text-[#657084] font-medium ml-2">Today</span></p>
          </div>
          
          <div className="h-[350px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${activeTimeframe}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mainChartData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E4E8" opacity={0.5} />
                    <XAxis 
                      dataKey="date" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#657084', fontSize: 12 }} 
                      dy={10} 
                    />
                    <YAxis 
                      domain={['auto', 'auto']} 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#657084', fontSize: 12 }} 
                      orientation="right"
                      dx={10}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                        border: '1px solid #E2E4E8',
                        borderRadius: '8px',
                        boxShadow: '0 12px 32px rgba(11, 35, 65, 0.08)',
                        color: '#0B2341',
                        fontWeight: 600
                      }}
                      itemStyle={{ color: '#10B981' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#10B981" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                      isAnimationActive={true}
                      animationDuration={1000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
