"use client";

import { motion } from "framer-motion";
import { ServiceDetail } from "@/lib/services-mock-data";
import { CheckCircle2, TrendingUp, Shield, Eye, Settings, Briefcase, HeartHandshake, Scale, Layers, UserCircle, Droplets, Search, Wallet, Gauge, Calendar, Target, ArrowRight } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  CheckCircle2, TrendingUp, Shield, Eye, Settings, Briefcase, HeartHandshake, Scale, Layers, UserCircle, Droplets, Search, Wallet, Gauge, Calendar, Target
};

interface ServiceContentProps {
  data: ServiceDetail;
}

export function ServiceContent({ data }: ServiceContentProps) {
  return (
    <div className="flex-1 max-w-4xl">
      
      {/* SECTION 2: Overview */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="font-serif text-3xl text-[#0B2341] mb-6 border-b border-[#E2E4E8] pb-4">
          Overview
        </h2>
        <p className="text-lg text-[#657084] leading-relaxed">
          {data.overview}
        </p>
      </motion.div>

      {/* SECTION 3: Key Benefits */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h3 className="font-serif text-2xl text-[#0B2341] mb-8">Why Invest in {data.name}?</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {data.benefits.map((benefit, idx) => {
            const Icon = iconMap[benefit.icon] || CheckCircle2;
            return (
              <div key={idx} className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-[#fafaf8] border border-[#E2E4E8] flex items-center justify-center text-[#D8BE8A]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#0B2341] mb-1">{benefit.title}</h4>
                  <p className="text-sm text-[#657084] leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* SECTION 4: Key Features */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h3 className="font-serif text-2xl text-[#0B2341] mb-8">Key Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || CheckCircle2;
            return (
              <div key={idx} className="premium-card bg-white p-5 rounded-2xl border border-[#E2E4E8] text-center flex flex-col items-center">
                <Icon className="h-6 w-6 text-[#D8BE8A] mb-3" />
                <span className="text-xs text-[#657084] font-medium mb-1 block">{feature.label}</span>
                <span className="font-bold text-[#0B2341] text-sm">{feature.value}</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* SECTION 5: Our Process */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h3 className="font-serif text-2xl text-[#0B2341] mb-8">Our Process</h3>
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-[1px] bg-[#E2E4E8] z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-6 md:gap-4 relative z-10">
            {data.process.map((step, idx) => (
              <div key={idx} className="flex flex-row md:flex-col items-start gap-4 md:gap-0">
                <div className="shrink-0 h-12 w-12 rounded-full bg-[#0B2341] text-white flex items-center justify-center font-bold text-lg shadow-md md:mb-4 border-4 border-white">
                  {step.step}
                </div>
                <div>
                  <h4 className="font-bold text-[#0B2341] text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-[#657084]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* SECTION 6: Who This Is Ideal For */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="premium-card bg-[#fafaf8] rounded-2xl p-8 border border-[#E2E4E8]">
          <h3 className="font-serif text-xl text-[#0B2341] mb-6">Who This Is Ideal For</h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {data.idealFor.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#D8BE8A] shrink-0 mt-0.5" />
                <span className="text-[#657084] text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* SECTION 7: Inline CTA */}
      <div className="rounded-2xl bg-gradient-to-r from-[#EAD7B0]/20 to-[#D8BE8A]/10 border border-[#D8BE8A]/30 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl text-[#0B2341] mb-2">Ready to take the next step?</h3>
          <p className="text-[#657084] text-sm">Speak with our experts to build a portfolio that&apos;s right for you.</p>
        </div>
        <button className="shrink-0 px-6 py-3 bg-[#0B2341] text-white rounded-full font-bold text-sm hover:bg-[#17365d] transition-all flex items-center justify-center gap-2 group shadow-md">
          Book a Consultation
          <ArrowRight className="h-4 w-4 -translate-x-1 group-hover:translate-x-0 transition-transform" />
        </button>
      </div>

    </div>
  );
}
