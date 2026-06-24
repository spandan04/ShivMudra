"use client";

import { motion } from "framer-motion";
import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";
import { liveMarketSnapshot } from "@/lib/market-mock-data";
import { TrendingUp, TrendingDown } from "lucide-react";

export function LiveMarketSnapshot() {
  return (
    <section className="py-8 bg-[#fafaf8]">
      <div className="section-shell">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {liveMarketSnapshot.map((item, index) => (
            <motion.div
              key={item.ticker}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="premium-card rounded-xl p-4 flex flex-col group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-semibold text-[#657084] tracking-wide">{item.ticker}</span>
                {item.positive ? (
                  <TrendingUp className="h-4 w-4 text-[#10B981]" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-[#EF4444]" />
                )}
              </div>
              
              <div className="mb-4">
                <span className="text-xl font-bold text-[#0B2341]">
                  {item.price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <div className="flex items-center gap-1 mt-1">
                  <span className={`text-xs font-semibold ${item.positive ? "text-[#10B981]" : "text-[#EF4444]"}`}>
                    {item.changeValue > 0 ? "+" : ""}{item.changeValue} ({item.change})
                  </span>
                </div>
              </div>

              <div className="h-12 w-full mt-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={item.data.map((val, i) => ({ value: val, index: i }))}>
                    <YAxis domain={["dataMin", "dataMax"]} hide />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke={item.positive ? "#10B981" : "#EF4444"}
                      strokeWidth={1.5}
                      dot={false}
                      isAnimationActive={true}
                      animationDuration={1500}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
