'use client';

import React from 'react';
import Image from 'next/image';
import { Target, ShieldCheck, TrendingUp, FileCheck, Users, PieChart, ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';


const AboutUs = () => {
  return (
    <div className="w-full flex flex-col">
      
      {/* Section 1 - Hero (split-screen) */}
      <section className="relative w-full min-h-[600px] flex flex-col lg:flex-row bg-navy border-b-4 border-gold">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 xl:p-24 relative z-10">
          <div className="max-w-xl w-full">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gold font-bold tracking-wider text-sm uppercase mb-4"
            >
              ABOUT US
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              About <span className="text-gold">Shiv Mudra</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/80 mb-8 leading-relaxed"
            >
              Shiv Mudra Wealth Management LLP is an SEBI-registered investment advisor committed to helping individuals, families, and NRIs build, protect and grow their wealth with clarity and confidence<sup className="text-xs ml-0.5">1</sup>.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="#our-journey" className="inline-flex items-center space-x-2 text-white border border-white/20 hover:border-gold hover:text-gold rounded-full px-6 py-3 transition-colors duration-300">
                <span className="font-medium text-sm">Know More About Us</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto">
          <Image 
            src="/images/advisor_client_meeting.png" 
            alt="Shiv Mudra advisor meeting with clients in a modern office"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle gradient overlay to blend edge on desktop if needed, though split screen usually has a hard edge. We keep a hard edge. */}
        </div>
      </section>

      {/* Section 2 - Three-column value props */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="section-shell">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              We&apos;re here to help you achieve your financial goals
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            
            {/* Prop 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center mb-6 relative group overflow-hidden">
                <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <Target size={40} className="text-indigo-600 relative z-10" strokeWidth={1.5} />
                {/* Custom illustration details */}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">₹</div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Goal-Focused Investing</h3>
              <p className="text-ink-muted leading-relaxed text-sm md:text-base">
                We design personalized investment strategies aligned with your goals, time horizon and risk profile.
              </p>
            </div>

            {/* Prop 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center mb-6 relative group overflow-hidden">
                <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <ShieldCheck size={40} className="text-indigo-600 relative z-10" strokeWidth={1.5} />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">₹</div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Trust & Transparency</h3>
              <p className="text-ink-muted leading-relaxed text-sm md:text-base">
                We believe in clear communication, ethical advice and full transparency in every recommendation.
              </p>
            </div>

            {/* Prop 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center mb-6 relative group overflow-hidden">
                <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <TrendingUp size={40} className="text-indigo-600 relative z-10" strokeWidth={1.5} />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">₹</div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Expertise You Can Rely On</h3>
              <p className="text-ink-muted leading-relaxed text-sm md:text-base">
                Backed by deep market knowledge and research, our experienced team works to create long-term value for you.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3 - Origin story */}
      <section id="our-journey" className="py-20 lg:py-32 bg-navy relative overflow-hidden">
        {/* Subtle background abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute w-full h-full stroke-white stroke-[0.1] fill-none">
            <path d="M0,50 Q25,25 50,50 T100,50" />
            <path d="M0,60 Q25,35 50,60 T100,60" />
            <path d="M0,70 Q25,45 50,70 T100,70" />
            <path d="M0,80 Q25,55 50,80 T100,80" />
          </svg>
        </div>

        <div className="section-shell relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Text Side */}
            <div className="text-white">
              <p className="text-gold font-bold tracking-wider text-sm uppercase mb-4">OUR JOURNEY</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                How Shiv Mudra started
              </h2>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  Shiv Mudra Wealth Management LLP was founded in 2021 by Ms. Trupti Thigale, with a simple belief — financial success should be built on knowledge, discipline and trust.
                </p>
                <p>
                  What started as a small idea to offer unbiased financial advice has grown into a trusted advisory firm serving clients across India and NRIs worldwide.
                </p>
              </div>
            </div>

            {/* Founder Card Side */}
            <div className="bg-navy-soft rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col sm:flex-row">
              <div className="w-full sm:w-2/5 relative min-h-[300px]">
                <Image
                  src="/images/founder_trupti_thigale.png"
                  alt="Ms. Trupti Thigale - Founder & CEO"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center bg-navy-soft">
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">FOUNDER & CEO</p>
                <h3 className="text-2xl font-bold text-white mb-6">Ms. Trupti Thigale</h3>
                
                <Quote className="text-gold opacity-50 mb-4" size={32} />
                <p className="text-white/90 italic text-lg leading-relaxed mb-6 font-medium">
                  &quot;Our vision is simple &mdash; to help every client make informed decisions and build a secure financial future.&quot;
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Section 4 - Our approach */}
      <section className="py-20 lg:py-32 bg-[#FAF7F2]">
        <div className="section-shell">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Our approach to long-term success
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-2xl p-8 border border-navy/5 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="w-16 h-16 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 relative">
                <FileCheck size={32} className="text-indigo-600 relative z-10" strokeWidth={1.5} />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-white">
                  <ShieldCheck size={12} strokeWidth={3} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Regulatory Compliance</h3>
              <p className="text-ink-muted leading-relaxed text-sm">
                We operate in full compliance with SEBI regulations and industry best practices. Your investments are always secure, transparent and well-governed.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-navy/5 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="w-16 h-16 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 relative">
                <Users size={32} className="text-indigo-600 relative z-10" strokeWidth={1.5} />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-white">
                  <Target size={12} strokeWidth={3} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Client-First Advisory</h3>
              <p className="text-ink-muted leading-relaxed text-sm">
                Your goals come first. We take time to understand your needs and craft strategies that put your interests ahead of everything else.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-navy/5 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="w-16 h-16 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 relative">
                <PieChart size={32} className="text-indigo-600 relative z-10" strokeWidth={1.5} />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-white">
                  <ShieldCheck size={12} strokeWidth={3} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Transparency & Reporting</h3>
              <p className="text-ink-muted leading-relaxed text-sm">
                We keep you informed with clear reports, regular updates and complete visibility into your portfolio performance.
              </p>
            </div>

          </div>
          
          <div className="mt-16 pt-8 border-t border-navy/10 flex items-start space-x-3 max-w-4xl mx-auto">
            <ShieldCheck className="text-indigo-600 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-xs text-ink-muted leading-relaxed">
              <sup className="mr-0.5">1</sup>Investments are subject to market risks. Please read all scheme related documents carefully.<br/>
              Shiv Mudra Wealth Management LLP is a SEBI Registered Investment Advisor (INA000XXXXXX).
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
