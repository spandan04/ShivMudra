"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-[#0A1E3F] overflow-hidden flex items-center pt-24 pb-16 lg:py-24">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#6D28D9]/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
              <span className="text-sm text-blue-100 font-medium tracking-wide">NRI Investment Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Invest In India From <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-amber-300">
                Anywhere In The World
              </span>
            </h1>
            
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
              Helping NRIs manage, grow, and protect their wealth in India through investment solutions, demat services, mutual funds, and financial advisory.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#open-account"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#6D28D9] to-purple-600 text-white font-semibold hover:from-purple-600 hover:to-purple-500 transition-all shadow-lg shadow-[#6D28D9]/25 group"
              >
                Open NRI Account
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-[#0A1E3F] transition-all"
              >
                Speak To An Advisor
              </Link>
            </div>
          </motion.div>
          
          {/* Right Content - Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block perspective-1000"
          >
            <div className="relative w-full max-w-lg ml-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl transform rotate-y-[-10deg] rotate-x-[5deg]">
              
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <div>
                  <div className="text-white/60 text-sm mb-1">Total Portfolio Value</div>
                  <div className="text-3xl font-bold text-white">₹2,45,89,000</div>
                </div>
                <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12.4%
                </div>
              </div>

              {/* Chart Area */}
              <div className="h-40 w-full mb-8 relative flex items-end justify-between gap-2">
                {/* Simulated bar chart */}
                {[40, 60, 45, 80, 55, 90, 70, 100].map((height, i) => (
                  <div key={i} className="w-full relative group">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      className="w-full bg-gradient-to-t from-[#6D28D9] to-purple-400 rounded-t-sm"
                    ></motion.div>
                  </div>
                ))}
              </div>

              {/* Asset Allocation */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#6D28D9]/20 flex items-center justify-center">
                      <PieChart className="w-4 h-4 text-[#6D28D9]" />
                    </div>
                    <div className="text-white/80 text-sm font-medium">Mutual Funds</div>
                  </div>
                  <div className="text-xl font-bold text-white">65%</div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#F59E0B]/20 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-[#F59E0B]" />
                    </div>
                    <div className="text-white/80 text-sm font-medium">Direct Equity</div>
                  </div>
                  <div className="text-xl font-bold text-white">35%</div>
                </div>
              </div>

              {/* Floating widget */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 top-1/3 bg-[#0A1E3F] border border-white/20 p-4 rounded-xl shadow-2xl flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <LineChart className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white/60 text-xs">NIFTY 50</div>
                  <div className="text-white font-bold text-sm">22,514.65</div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
