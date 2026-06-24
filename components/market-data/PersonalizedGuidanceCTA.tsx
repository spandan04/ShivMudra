"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, PhoneCall } from "lucide-react";

export function PersonalizedGuidanceCTA() {
  return (
    <section className="py-20 bg-[#fafaf8]">
      <div className="section-shell">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden navy-gradient p-10 md:p-16 text-center shadow-2xl"
        >
          {/* Subtle grid background overlay */}
          <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#ffffff] mb-6 leading-tight">
              Need Personalized Market <span className="champagne-gradient-text">Guidance?</span>
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Speak with Shiv Mudra's investment experts to interpret these market trends and build a wealth strategy tailored precisely to your long-term goals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#EAD7B0] to-[#D8BE8A] text-[#0B2341] rounded-full font-bold text-base hover:shadow-[0_0_20px_rgba(216,190,138,0.4)] transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                <CalendarDays className="h-5 w-5" />
                Schedule Consultation
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold text-base hover:bg-white/20 transition-all flex items-center justify-center gap-2 group">
                <PhoneCall className="h-5 w-5" />
                Contact Advisor
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
