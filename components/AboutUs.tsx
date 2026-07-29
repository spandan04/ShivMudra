'use client';

import React from 'react';
import Image from 'next/image';
import { Target, ShieldCheck, TrendingUp, FileCheck, Users, PieChart, ArrowRight, Quote, Compass, UserCog, Lightbulb, HandCoins, Globe, Landmark } from 'lucide-react';
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
        </div>
      </section>

      {/* Section 5 - Our Philosophy */}
      <section id="philosophy" className="bg-navy py-16 lg:py-24 text-white relative overflow-hidden">
        {/* Subtle background lines/gradient to match design */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-gold stroke-[0.2] fill-none">
            <path d="M50,100 Q75,50 100,0" />
            <path d="M60,100 Q80,50 100,10" />
            <path d="M70,100 Q85,50 100,20" />
            <path d="M80,100 Q90,50 100,30" />
            <path d="M90,100 Q95,50 100,40" />
          </svg>
        </div>
        
        <div className="section-shell relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-8">
          <div className="w-full lg:w-1/3 lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Philosophy</h2>
            <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">
              At Shiv Mudra, we believe wealth is more than numbers &mdash; it&apos;s the freedom to live your life on your terms.
            </p>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Our philosophy is built on five timeless principles that guide every decision we take for our clients.
            </p>
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-5 gap-6 border-t border-white/10 lg:border-t-0 lg:border-l lg:border-white/10 pt-8 lg:pt-0 lg:pl-8">
            
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-4">
                <Compass size={24} />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Integrity</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                We do what is right, not what is easy. Trust is the foundation of every relationship.
              </p>
            </div>
            
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-4">
                <UserCog size={24} />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Discipline</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                We follow a disciplined investment process that removes emotion and focuses on long-term outcomes.
              </p>
            </div>
            
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-4">
                <Lightbulb size={24} />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Clarity</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                We simplify complex markets and help you make clear, well-informed decisions.
              </p>
            </div>
            
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-4">
                <HandCoins size={24} />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Commitment</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                We are committed to your goals and stand with you at every step.
              </p>
            </div>
            
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-4">
                <TrendingUp size={24} />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Growth</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                We aim to grow your wealth sustainably and create a lasting legacy for you.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Section 6 - Stats and CTA */}
      <section className="w-full bg-[#FAFAF8] relative z-20 flex flex-col">
        {/* Stats Bar */}
        <div className="w-full pt-8 pb-12">
          <div className="section-shell">
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-navy/5 p-8 w-full">
              <div className="flex flex-wrap justify-between items-center gap-y-8 gap-x-4">
                
                <div className="flex items-center space-x-4">
                  <div className="text-[#4D388C]">
                    <PieChart size={36} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-navy leading-none mb-1">₹500Cr+</h4>
                    <p className="text-xs font-medium text-ink-muted">Assets Managed&sup1;</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-[#4D388C]">
                    <Users size={36} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-navy leading-none mb-1">10,000+</h4>
                    <p className="text-xs font-medium text-ink-muted">Happy Clients</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-[#4D388C]">
                    <ShieldCheck size={36} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-navy leading-none mb-1">15+</h4>
                    <p className="text-xs font-medium text-ink-muted">Years of Experience</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-[#4D388C]">
                    <Globe size={36} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-navy leading-none mb-1">25+</h4>
                    <p className="text-xs font-medium text-ink-muted">Expert Advisors</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-[#4D388C]">
                    <Landmark size={36} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-navy leading-none mb-1">SEBI</h4>
                    <p className="text-xs font-medium text-ink-muted">Registered Advisor</p>
                    <p className="text-[10px] text-ink-muted leading-tight">INA000XXXXXX</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Purple CTA Bar */}
        <div className="w-full bg-[#4D388C] py-10 text-white">
          <div className="section-shell flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-medium mb-1">Your financial journey deserves the right partner.</h3>
              <p className="text-white/90 text-lg">Let&apos;s build your wealth, together.</p>
            </div>
            <Link href="#contact" className="bg-[#D8BE8A] hover:bg-[#C5AA76] text-navy font-semibold py-3.5 px-8 rounded transition-colors whitespace-nowrap shadow-md inline-flex items-center">
              Book a Free Consultation
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="w-full bg-[#FAFAF8] py-8 border-t border-gray-200">
        <div className="section-shell">
          <p className="text-xs text-ink-muted leading-relaxed">
            <sup className="mr-0.5">1</sup>Investments are subject to market risks. Please read all scheme related documents carefully.<br/>
            Shiv Mudra Wealth Management LLP is a SEBI Registered Investment Advisor (INA000XXXXXX).
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
