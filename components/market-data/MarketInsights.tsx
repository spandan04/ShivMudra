"use client";

import { motion } from "framer-motion";
import { marketInsights } from "@/lib/market-mock-data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function MarketInsights() {
  return (
    <section className="py-16 bg-[#fafaf8]">
      <div className="section-shell">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0B2341] mb-2">Research & Insights</h2>
            <p className="text-[#657084]">Actionable intelligence from our research desk.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#0B2341] hover:text-[#D8BE8A] transition-colors gold-underline">
            View All Reports <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketInsights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={insight.imageUrl}
                  alt={insight.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#ffffff]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0B2341]">
                  {insight.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm text-[#657084] font-medium mb-3">{insight.date}</span>
                <h3 className="text-xl font-bold text-[#0B2341] mb-3 group-hover:text-[#D8BE8A] transition-colors line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-[#657084] text-sm line-clamp-3 mb-6">
                  {insight.summary}
                </p>
                <div className="mt-auto flex items-center gap-2 text-sm font-bold text-[#0B2341] group-hover:text-[#D8BE8A] transition-colors">
                  Read Report <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <button className="mt-8 flex md:hidden items-center justify-center w-full gap-2 text-sm font-semibold text-[#0B2341] hover:text-[#D8BE8A] transition-colors">
          View All Reports <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
