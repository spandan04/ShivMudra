"use client";

import { motion } from "framer-motion";
import { topGainers, topLosers } from "@/lib/market-mock-data";

export function MarketMovers() {
  return (
    <section className="py-12 bg-[#ffffff] border-y border-[#E2E4E8]">
      <div className="section-shell">
        <h2 className="text-2xl font-bold text-[#0B2341] mb-8">Market Movers</h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Top Gainers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="flex items-center justify-between border-b border-[#E2E4E8] pb-4 mb-4">
              <h3 className="text-lg font-semibold text-[#10B981]">Top Gainers</h3>
              <button className="text-sm font-medium text-[#657084] hover:text-[#0B2341] transition-colors">
                View All
              </button>
            </div>
            <div className="space-y-2">
              {topGainers.map((stock, i) => (
                <div key={stock.ticker} className="flex items-center justify-between p-3 hover:bg-[#fafaf8] rounded-lg transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#E2E4E8] text-[#0B2341] flex items-center justify-center font-bold text-sm">
                      {stock.logo}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0B2341] group-hover:text-[#D8BE8A] transition-colors">{stock.name}</p>
                      <p className="text-xs text-[#657084]">{stock.ticker}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-[#0B2341]">{stock.price}</p>
                    <p className="text-sm font-medium text-[#10B981]">{stock.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Top Losers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="flex items-center justify-between border-b border-[#E2E4E8] pb-4 mb-4">
              <h3 className="text-lg font-semibold text-[#EF4444]">Top Losers</h3>
              <button className="text-sm font-medium text-[#657084] hover:text-[#0B2341] transition-colors">
                View All
              </button>
            </div>
            <div className="space-y-2">
              {topLosers.map((stock, i) => (
                <div key={stock.ticker} className="flex items-center justify-between p-3 hover:bg-[#fafaf8] rounded-lg transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#E2E4E8] text-[#0B2341] flex items-center justify-center font-bold text-sm">
                      {stock.logo}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0B2341] group-hover:text-[#D8BE8A] transition-colors">{stock.name}</p>
                      <p className="text-xs text-[#657084]">{stock.ticker}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-[#0B2341]">{stock.price}</p>
                    <p className="text-sm font-medium text-[#EF4444]">{stock.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
