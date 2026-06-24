"use client";

import { motion } from "framer-motion";
import { sectorPerformance } from "@/lib/market-mock-data";
import { ResponsiveContainer, LineChart, Line, YAxis } from "recharts";

export function SectorPerformance() {
  return (
    <section className="py-12 bg-[#ffffff] border-b border-[#E2E4E8]">
      <div className="section-shell">
        <h2 className="text-2xl font-bold text-[#0B2341] mb-6">Sector Performance</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {sectorPerformance.map((sector, index) => {
            const isPositive = sector.return.startsWith("+");
            return (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="premium-card rounded-xl p-4 flex flex-col hover:-translate-y-1 transition-transform cursor-pointer group"
              >
                <h3 className="text-sm font-semibold text-[#657084] group-hover:text-[#0B2341] transition-colors">{sector.name}</h3>
                <p className={`text-lg font-bold mt-1 ${isPositive ? "text-[#10B981]" : "text-[#EF4444]"}`}>
                  {sector.return}
                </p>
                
                <div className="h-10 w-full mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sector.data.map((val, i) => ({ value: val, index: i }))}>
                      <YAxis domain={["dataMin", "dataMax"]} hide />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={isPositive ? "#10B981" : "#EF4444"}
                        strokeWidth={1.5}
                        dot={false}
                        isAnimationActive={true}
                        animationDuration={1500}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
