"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { testimonials } from "@/lib/data";
import { MotionDiv, AnimatePresence, MotionButton, springScale } from "./Motion";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const current = testimonials[index];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="bg-[#ffffff] py-24 md:py-32">
      <div className="section-shell">
        <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest champagne-gradient-text">
            Testimonials
          </p>
          <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-[#0B2341] md:text-5xl">
            Trusted by Ambitious Families
          </h2>
        </MotionDiv>

        <div 
          className="mx-auto mt-16 max-w-4xl relative min-h-[400px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <MotionDiv
              key={current.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-[#ffffff] shadow-[0_16px_48px_-8px_rgba(11,35,65,0.06)] border border-[#E2E4E8] rounded-xl p-10 md:p-14 relative overflow-hidden h-full flex flex-col justify-between"
            >
              <div className="absolute right-0 top-0 -mr-16 -mt-16 text-[#FAFAF8] opacity-50">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="relative z-10 flex flex-col items-center gap-10 text-center md:flex-row md:text-left flex-grow">
                <Image
                  src={current.image}
                  alt={current.name}
                  width={120}
                  height={120}
                  className="size-28 rounded-full object-cover ring-4 ring-[#FAFAF8] shadow-md"
                />
                <div className="flex-1">
                  <div className="flex justify-center gap-1.5 text-[#D8BE8A] md:justify-start">
                    {Array.from({ length: current.rating }).map((_, starIndex) => (
                      <MotionDiv 
                        key={starIndex} 
                        initial={{ opacity: 0, scale: 0 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ delay: starIndex * 0.1, type: "spring" }}
                      >
                        <Star size={18} fill="currentColor" strokeWidth={0} />
                      </MotionDiv>
                    ))}
                  </div>
                  <p className="mt-6 font-serif text-2xl font-medium leading-relaxed text-[#0B2341] md:text-3xl">
                    “{current.quote}”
                  </p>
                  <div className="mt-8">
                    <p className="font-bold text-[#0B2341] tracking-wide">{current.name}</p>
                    <p className="mt-1 text-sm font-medium text-[#657084]">{current.role}</p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-10 flex justify-center gap-4 md:justify-end">
                <MotionButton
                  aria-label="Previous testimonial"
                  variants={springScale}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setIndex((value) => (value === 0 ? testimonials.length - 1 : value - 1))}
                  className="grid size-12 place-items-center rounded-full border border-[#E2E4E8] text-[#0B2341] transition-colors hover:border-[#D8BE8A] hover:text-[#D8BE8A] bg-[#ffffff]"
                >
                  <ChevronLeft size={20} strokeWidth={1.5} />
                </MotionButton>
                <MotionButton
                  aria-label="Next testimonial"
                  variants={springScale}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setIndex((value) => (value + 1) % testimonials.length)}
                  className="grid size-12 place-items-center rounded-full bg-[#0B2341] text-[#ffffff] transition-colors hover:bg-[#17365D]"
                >
                  <ChevronRight size={20} strokeWidth={1.5} />
                </MotionButton>
              </div>
            </MotionDiv>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
