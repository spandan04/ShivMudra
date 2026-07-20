"use client";

import { motion } from "framer-motion";
import { Building2, FileCheck2, Link as LinkIcon, LineChart, Landmark } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Open Bank Account",
    description: "Open an NRE/NRO account with major Indian banks.",
    icon: Landmark,
  },
  {
    step: "02",
    title: "KYC & Documents",
    description: "Submit KYC documents and address proof.",
    icon: FileCheck2,
  },
  {
    step: "03",
    title: "Link Demat Account",
    description: "Open and link your Demat account.",
    icon: Building2,
  },
  {
    step: "04",
    title: "Link PIS",
    description: "Link Bank Account via Portfolio Investment Scheme.",
    icon: LinkIcon,
  },
  {
    step: "05",
    title: "Start Investing",
    description: "Explore investment options and grow your wealth.",
    icon: LineChart,
  }
];

export default function InvestmentProcess() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#0A1E3F] mb-6"
          >
            Procedure for NRI <span className="text-[#6D28D9]">Operations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Simple steps to begin your investment journey in India.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main timeline line - Desktop (Horizontal) */}
          <div className="hidden lg:block absolute top-[48px] left-0 right-0 h-[2px] bg-gray-200"></div>

          {/* Main timeline line - Mobile (Vertical) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-[27px] w-[2px] bg-gray-200"></div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-6 group flex-1"
              >
                {/* Icon Circle */}
                <div className="relative flex-shrink-0 z-10 w-14 h-14 lg:w-24 lg:h-24 rounded-full bg-white border-2 lg:border-4 border-gray-100 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:border-[#6D28D9]/30 group-hover:shadow-xl">
                  <div className="absolute inset-1 lg:inset-2 rounded-full bg-[#6D28D9]/5 group-hover:bg-[#6D28D9]/10 transition-colors"></div>
                  <step.icon className="w-6 h-6 lg:w-10 lg:h-10 text-[#6D28D9]" strokeWidth={1.5} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 lg:top-0 lg:right-0 bg-[#0A1E3F] text-white text-[10px] lg:text-xs font-bold px-2 py-1 rounded-full border-2 border-white shadow-sm">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white p-5 lg:p-4 rounded-xl border border-gray-100 shadow-sm group-hover:border-[#6D28D9]/20 group-hover:shadow-md transition-all duration-300 flex-1 text-left lg:text-center w-full">
                  <h3 className="text-lg lg:text-xl font-bold text-[#0A1E3F] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
