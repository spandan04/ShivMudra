"use client";

import { Mail, Phone } from "lucide-react";
import { MotionDiv, fadeUp, stagger, MotionButton } from "./Motion";

export function ConsultationForm() {
  return (
    <section id="contact" className="bg-[#FAFAF8] py-24 md:py-32">
      <div className="section-shell">
        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="overflow-hidden rounded-xl border border-[#E2E4E8] bg-[#ffffff] shadow-[0_16px_48px_-8px_rgba(11,35,65,0.06)]"
        >
          <div className="grid lg:grid-cols-[0.8fr_1fr]">
            <div className="relative p-10 md:p-14 overflow-hidden bg-gradient-to-br from-[#0B2341] to-[#17365D]">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
              <div className="relative z-10">
                <h2 className="font-serif text-4xl font-semibold text-[#ffffff] tracking-tight">Start Your Journey</h2>
                <p className="mt-6 max-w-sm text-lg leading-relaxed text-[#ffffff]/80">
                  Schedule a complimentary consultation with our wealth experts
                  to discuss your financial goals.
                </p>
                <div className="mt-12 space-y-8">
                  <div className="flex items-center gap-5 group">
                    <span className="grid size-12 place-items-center rounded-lg bg-[#ffffff]/10 text-[#D8BE8A] border border-[#ffffff]/10 backdrop-blur-md transition-all group-hover:scale-110 group-hover:bg-[#ffffff]/20">
                      <Phone size={20} strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest champagne-gradient-text">Call Us</p>
                      <p className="mt-1 text-lg font-medium text-[#ffffff] tracking-wide">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <span className="grid size-12 place-items-center rounded-lg bg-[#ffffff]/10 text-[#D8BE8A] border border-[#ffffff]/10 backdrop-blur-md transition-all group-hover:scale-110 group-hover:bg-[#ffffff]/20">
                      <Mail size={20} strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest champagne-gradient-text">Email Us</p>
                      <p className="mt-1 text-lg font-medium text-[#ffffff] tracking-wide">consult@shivmudra.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <MotionDiv 
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6 p-10 md:grid-cols-2 md:p-14"
            >
              <MotionDiv variants={fadeUp} className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#0B2341]">
                  Name
                </label>
                <input className="mt-3 w-full rounded border border-[#E2E4E8] bg-[#ffffff] px-5 py-4 text-[15px] font-medium text-[#0B2341] outline-none transition-all focus:-translate-y-0.5 focus:border-[#D8BE8A] focus:ring-1 focus:ring-[#FF9933] focus:shadow-md" placeholder="John Doe" />
              </MotionDiv>
              <MotionDiv variants={fadeUp} className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#0B2341]">
                  Email
                </label>
                <input type="email" className="mt-3 w-full rounded border border-[#E2E4E8] bg-[#ffffff] px-5 py-4 text-[15px] font-medium text-[#0B2341] outline-none transition-all focus:-translate-y-0.5 focus:border-[#D8BE8A] focus:ring-1 focus:ring-[#FF9933] focus:shadow-md" placeholder="john@example.com" />
              </MotionDiv>
              <MotionDiv variants={fadeUp} className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#0B2341]">
                  Mobile Number
                </label>
                <input className="mt-3 w-full rounded border border-[#E2E4E8] bg-[#ffffff] px-5 py-4 text-[15px] font-medium text-[#0B2341] outline-none transition-all focus:-translate-y-0.5 focus:border-[#D8BE8A] focus:ring-1 focus:ring-[#FF9933] focus:shadow-md" placeholder="+91 XXXXX XXXXX" />
              </MotionDiv>
              <MotionDiv variants={fadeUp} className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#0B2341]">
                  Investment Goal
                </label>
                <select className="mt-3 w-full rounded border border-[#E2E4E8] bg-[#ffffff] px-5 py-4 text-[15px] font-medium text-[#0B2341] outline-none transition-all focus:-translate-y-0.5 focus:border-[#D8BE8A] focus:ring-1 focus:ring-[#FF9933] focus:shadow-md">
                  <option>Wealth Creation</option>
                  <option>Wealth Protection</option>
                  <option>Retirement Planning</option>
                  <option>Legacy Planning</option>
                </select>
              </MotionDiv>
              <MotionDiv variants={fadeUp} className="flex flex-col md:col-span-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#0B2341]">
                  Message
                </label>
                <textarea className="mt-3 min-h-[8rem] w-full resize-none rounded border border-[#E2E4E8] bg-[#ffffff] px-5 py-4 text-[15px] font-medium text-[#0B2341] outline-none transition-all focus:-translate-y-0.5 focus:border-[#D8BE8A] focus:ring-1 focus:ring-[#FF9933] focus:shadow-md" placeholder="How can we help you?" />
              </MotionDiv>
              <MotionDiv variants={fadeUp} className="md:col-span-2">
                <MotionButton
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto rounded bg-[#0B2341] px-8 py-5 text-[13px] font-bold uppercase tracking-widest text-[#ffffff] shadow-[0_4px_14px_rgba(11,35,65,0.2)] transition-all hover:bg-[#17365D] hover:shadow-[0_6px_20px_rgba(11,35,65,0.25)]"
                >
                  Request Consultation
                </MotionButton>
              </MotionDiv>
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
