"use client";

import { motion } from "framer-motion";
import { UserCheck, LineChart, ShieldCheck, Target } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Personalized Advisory",
    description: "Strategies built around your unique financial fingerprint and aspirations."
  },
  {
    icon: LineChart,
    title: "Research Driven Decisions",
    description: "Data-backed insights powering every investment recommendation we make."
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    description: "Institutional-grade downside protection frameworks to preserve capital."
  },
  {
    icon: Target,
    title: "Long-Term Wealth Creation",
    description: "Focusing on sustainable compounding rather than short-term speculation."
  }
];

export function WhyShivMudra() {
  return (
    <section className="py-24 bg-white border-y border-[#E2E4E8]">
      <div className="section-shell">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#0B2341]">
            Why Choose Shiv Mudra
          </h2>
          <p className="text-[#657084] mt-4 max-w-2xl mx-auto">
            We bring institutional expertise to personal wealth management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="h-16 w-16 rounded-full bg-[#fafaf8] border border-[#E2E4E8] flex items-center justify-center mb-6 group-hover:border-[#D8BE8A] transition-colors">
                  <Icon className="h-7 w-7 text-[#0B2341] group-hover:text-[#D8BE8A] transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg text-[#0B2341] mb-3">{feature.title}</h3>
                <p className="text-sm text-[#657084] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
