"use client";

import { motion } from "framer-motion";
import { CalendarDays, PhoneCall } from "lucide-react";

interface CTAProps {
  title?: string;
  description?: string;
}

export function ConsultationCTA({ 
  title = "Need guidance choosing the right investment solution?",
  description = "Speak with our experts to build a portfolio that's right for you."
}: CTAProps) {
  return (
    <section className="py-24 bg-[#fafaf8]">
      <div className="section-shell">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden bg-white border border-[#E2E4E8] p-12 md:p-16 text-center shadow-sm"
        >
          {/* Subtle accent background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D8BE8A]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0B2341]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="h-16 w-16 bg-[#0B2341] rounded-2xl flex items-center justify-center mb-8 shadow-lg rotate-3">
              <PhoneCall className="h-7 w-7 text-[#D8BE8A] -rotate-3" />
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0B2341] mb-4">
              {title}
            </h2>
            <p className="text-lg text-[#657084] mb-10 max-w-xl mx-auto font-medium">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#0B2341] text-white rounded-full font-bold text-base hover:bg-[#17365d] transition-all flex items-center justify-center gap-2 group shadow-md">
                <CalendarDays className="h-5 w-5" />
                Book Consultation
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ml-1">→</span>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#0B2341] border border-[#0B2341]/20 rounded-full font-bold text-base hover:border-[#0B2341] hover:bg-[#fafaf8] transition-all flex items-center justify-center gap-2">
                Speak To An Advisor
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
