"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ServiceDetailsHeroProps {
  name: string;
  tagline: string;
  description: string;
}

export function ServiceDetailsHero({ name, tagline, description }: ServiceDetailsHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#0B2341] via-[#0D2A4D] to-[#17365d] pt-32 pb-20 overflow-hidden border-b border-[#D8BE8A]/20">
      {/* Background Abstract Pattern */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,80 Q25,55 50,80 T100,80" fill="none" stroke="#D8BE8A" strokeWidth="0.5" />
          <path d="M0,90 Q25,65 50,90 T100,90" fill="none" stroke="#D8BE8A" strokeWidth="0.3" />
        </svg>
      </div>

      <div className="section-shell relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-3/5 text-left">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-[#E2E4E8]/70 mb-6 font-medium">
            <Link href="/" className="hover:text-[#D8BE8A] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/services" className="hover:text-[#D8BE8A] transition-colors">Our Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#D8BE8A] line-clamp-1">{name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-[1.15]">
              {name}
            </h1>
            <h2 className="text-xl md:text-2xl text-[#D8BE8A] font-serif mb-6 italic">
              {tagline}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl font-sans leading-relaxed line-clamp-3">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-2/5 hidden md:flex justify-end"
        >
          <div className="relative w-80 h-64 bg-gradient-to-tr from-[#ffffff]/5 to-[#ffffff]/10 border border-[#ffffff]/20 rounded-2xl p-6 backdrop-blur-md shadow-2xl overflow-hidden flex items-center justify-center">
             {/* Simulating the gold chess piece/growth visual from the screenshot */}
             <div className="absolute inset-0 flex items-end justify-center pb-8 gap-4 opacity-80">
                <div className="w-8 bg-[#D8BE8A]/40 h-16 rounded-t-sm"></div>
                <div className="w-8 bg-[#D8BE8A]/60 h-24 rounded-t-sm"></div>
                <div className="w-8 bg-[#D8BE8A]/80 h-32 rounded-t-sm"></div>
                <div className="w-8 bg-[#D8BE8A] h-40 rounded-t-sm shadow-[0_0_15px_rgba(216,190,138,0.5)]"></div>
             </div>
             <div className="absolute top-8 right-12 w-16 h-16 border-2 border-[#D8BE8A] rounded-full flex items-center justify-center opacity-50 rotate-45">
                <div className="w-10 h-10 border border-[#D8BE8A] rounded-full"></div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
