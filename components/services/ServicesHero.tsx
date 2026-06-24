"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0B2341] via-[#0D2A4D] to-[#17365d] pt-32 pb-24 overflow-hidden border-b border-[#D8BE8A]/20">
      {/* Background Abstract Pattern */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="#D8BE8A" strokeWidth="0.5" />
          <path d="M0,60 Q25,35 50,60 T100,60" fill="none" stroke="#D8BE8A" strokeWidth="0.3" />
          <path d="M0,40 Q25,15 50,40 T100,40" fill="none" stroke="#D8BE8A" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="section-shell relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-3/5 text-left">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-[#E2E4E8]/70 mb-6 font-medium">
            <Link href="/" className="hover:text-[#D8BE8A] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#D8BE8A]">Our Services</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D8BE8A] mb-4">
              Our Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.15]">
              Solutions Tailored for Every Stage of Your Financial Journey
            </h1>
            <p className="text-lg text-white/80 max-w-2xl font-sans leading-relaxed">
              Comprehensive financial services tailored to help you build, protect, and grow your wealth. We provide institutional-grade expertise customized for your unique personal goals.
            </p>
          </motion.div>
        </div>

        {/* Decorative Element / Right side visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-2/5 hidden md:flex justify-end"
        >
          <div className="relative w-72 h-80 bg-gradient-to-b from-[#ffffff]/5 to-transparent border border-[#ffffff]/10 rounded-2xl p-6 backdrop-blur-sm shadow-2xl overflow-hidden group">
            {/* Abstract Premium Visual inside */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-[0.5px] border-[#D8BE8A]/30 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 border border-[#D8BE8A]/50 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                 <div className="w-16 h-16 bg-gradient-to-tr from-[#EAD7B0] to-[#B89656] rounded-full blur-[2px]"></div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
               <div className="h-1 w-1/3 bg-[#D8BE8A] rounded-full mb-2"></div>
               <div className="h-1 w-2/3 bg-[#ffffff]/20 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
