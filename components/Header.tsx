"use client";

import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { navItems } from "@/lib/data";
import { MotionHeader, MotionA, MotionButton, MotionDiv, AnimatePresence, springScale } from "./Motion";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MotionHeader
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled 
          ? "border-b border-[#E2E4E8]/60 bg-[#FAFAF8]/95 backdrop-blur-xl shadow-sm" 
          : "border-b border-transparent bg-[#FAFAF8]/90"
      }`}
      style={{ transitionProperty: "background-color, border-color, backdrop-filter, box-shadow" }}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex min-w-0 items-center py-2">
          <Image
            src="/logo-new.png"
            alt="Shiv Mudra Wealth Management LLP"
            width={240}
            height={72}
            className="w-32 sm:w-40 md:w-[180px] lg:w-[200px] h-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <MotionA
              key={item.label}
              href={item.href}
              className="gold-underline text-sm font-medium tracking-wide text-[#657084] transition hover:text-[#0B2341]"
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {item.label}
            </MotionA>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <MotionButton
            aria-label="Search"
            variants={springScale}
            whileHover="hover"
            whileTap="tap"
            className="grid size-11 place-items-center rounded-md border border-[#E2E4E8] bg-white text-[#0B2341] transition-colors hover:border-[#D8BE8A] hover:text-[#D8BE8A]"
          >
            <Search size={18} strokeWidth={1.5} />
          </MotionButton>
          <MotionA
            href="#contact"
            variants={springScale}
            whileHover="hover"
            whileTap="tap"
            className="rounded-md border border-[#E2E4E8] bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B2341] transition-colors hover:border-[#D8BE8A] hover:text-[#D8BE8A]"
          >
            Client Login
          </MotionA>
          <MotionA
            href="#contact"
            variants={springScale}
            whileHover="hover"
            whileTap="tap"
            className="rounded-md bg-[#0B2341] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#17365D]"
          >
            Start Consultation
          </MotionA>
        </div>

        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid size-12 place-items-center rounded border border-[#E2E4E8] text-[#0B2341] lg:hidden"
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <MotionDiv
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden border-t border-[#E2E4E8] bg-[#FAFAF8] lg:hidden"
          >
            <div className="section-shell flex flex-col py-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[#E2E4E8] py-4 text-sm font-medium tracking-wide text-[#0B2341]"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href="#contact"
                  className="rounded border border-[#E2E4E8] px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-[#0B2341]"
                >
                  Client Login
                </a>
                <a
                  href="#contact"
                  className="rounded bg-[#0B2341] px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-[#ffffff]"
                >
                  Consultation
                </a>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionHeader>
  );
}
