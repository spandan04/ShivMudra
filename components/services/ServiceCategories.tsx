"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

export function ServiceCategories() {
  return (
    <section className="py-24 bg-[#fafaf8]">
      <div className="section-shell">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#657084] mb-2 block">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0B2341]">
            End-to-end financial services under one roof
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="premium-card rounded-2xl bg-white p-8 flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-14 w-14 rounded-xl bg-[#0B2341] flex items-center justify-center shrink-0 shadow-lg">
                    <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#0B2341] leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-sm text-[#657084] mt-1 font-medium">
                      {idx === 0 ? "Smart investment options for long-term wealth creation." : idx === 1 ? "Personalized strategies for every stage of your financial journey." : "Protect what matters. Plan with confidence."}
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  {category.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-center justify-between p-4 rounded-xl hover:bg-[#fafaf8] border border-transparent hover:border-[#E2E4E8] transition-all"
                    >
                      <div>
                        <h4 className="font-semibold text-[#0B2341] group-hover:text-[#D8BE8A] transition-colors">
                          {item.label}
                        </h4>
                        <p className="text-xs text-[#657084] mt-1">
                          {item.label === "Mutual Funds" ? "Professionally managed funds for your goals." : 
                           item.label === "SIP Planning" ? "Disciplined investing for compounding growth." : 
                           item.label === "Wealth Management" ? "Holistic planning for your total wealth." :
                           item.label === "Insurance Advisory" ? "Right coverage for you and your family." : "Click to learn more about this service."}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-[#657084] group-hover:text-[#D8BE8A] transition-colors -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
