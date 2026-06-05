"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import { footerColumns } from "@/lib/data";
import { MotionDiv, MotionA, fadeUp, stagger } from "./Motion";

export function Footer() {
  return (
    <footer className="bg-[#0B2341] pt-24 text-[#ffffff]">
      <MotionDiv 
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="section-shell grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr_1.15fr]"
      >
        <MotionDiv variants={fadeUp}>
          <Image
            src="/logo.png"
            alt="Shiv Mudra Wealth Management LLP"
            width={180}
            height={56}
            className="h-14 w-auto"
          />
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[#ffffff]/70">
            Empowering your financial future with tailored wealth management
            solutions and expert advisory.
          </p>
          <div className="mt-8 flex gap-4">
            {[Linkedin, Instagram, Facebook, Youtube].map((Icon, index) => (
              <MotionA
                key={index}
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Social profile"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="grid size-11 place-items-center rounded bg-[#ffffff]/5 border border-[#ffffff]/10 text-[#ffffff]/90 transition-colors hover:bg-[#D8BE8A] hover:border-[#D8BE8A]"
              >
                <Icon size={18} strokeWidth={1.5} />
              </MotionA>
            ))}
          </div>
        </MotionDiv>
        {footerColumns.map((column) => (
          <MotionDiv key={column.title} variants={fadeUp}>
            <h3 className="text-sm font-bold uppercase tracking-widest champagne-gradient-text">{column.title}</h3>
            <ul className="mt-8 space-y-4 text-[15px] text-[#ffffff]/70">
              {column.links.map((link) => (
                <li key={link}>
                  <MotionA 
                    href="#contact" 
                    className="inline-block transition-colors hover:text-[#ffffff]"
                    whileHover={{ x: 4, color: "#ffffff" }}
                  >
                    {link}
                  </MotionA>
                </li>
              ))}
            </ul>
          </MotionDiv>
        ))}
        <MotionDiv variants={fadeUp}>
          <h3 className="text-sm font-bold uppercase tracking-widest champagne-gradient-text">Contact</h3>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[#ffffff]/70">
            <p className="flex gap-4 group">
              <MapPin size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-[#ffffff]/40 transition-colors group-hover:text-[#D8BE8A]" />
              123 Financial District, Mumbai, Maharashtra 400001
            </p>
            <p className="flex gap-4 group">
              <Mail size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-[#ffffff]/40 transition-colors group-hover:text-[#D8BE8A]" />
              contact@shivmudra.com
            </p>
            <p className="flex gap-4 group">
              <Phone size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-[#ffffff]/40 transition-colors group-hover:text-[#D8BE8A]" />
              +91 98765 43210
            </p>
          </div>
        </MotionDiv>
      </MotionDiv>
      <div className="mt-20 border-t border-[#ffffff]/10 bg-[#07172B] py-8">
        <MotionDiv 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="section-shell flex flex-col justify-between gap-4 text-[13px] font-medium tracking-wide text-[#ffffff]/50 md:flex-row"
        >
          <p>© 2026 Shiv Mudra Wealth Management LLP. All rights reserved.</p>
          <p>SEBI Registration No: INA000000000</p>
        </MotionDiv>
      </div>
    </footer>
  );
}
