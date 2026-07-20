"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Globe2, Users, Wallet, CalendarDays } from "lucide-react";

// Counter component for animated numbers
const AnimatedCounter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const stats = [
  {
    value: 500,
    prefix: "₹",
    suffix: "Cr+",
    label: "Assets Managed",
    icon: Wallet
  },
  {
    value: 1000,
    prefix: "",
    suffix: "+",
    label: "NRI Investors",
    icon: Users
  },
  {
    value: 15,
    prefix: "",
    suffix: "+",
    label: "Years Experience",
    icon: CalendarDays
  },
  {
    value: 20,
    prefix: "",
    suffix: "+",
    label: "Countries Served",
    icon: Globe2
  }
];

export default function GlobalStats() {
  return (
    <section className="py-20 bg-[#0B2341] relative border-t border-white/10">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-amber-400">
                <stat.icon className="w-8 h-8" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center">
                <span className="text-purple-400 mr-1">{stat.prefix}</span>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              
              <div className="text-blue-200/80 font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
