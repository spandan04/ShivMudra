"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Who is an NRI?",
    answer: "A Non-Resident Indian (NRI) is an Indian citizen who resides outside India for employment, business, or any other purpose indicating an indefinite period of stay abroad, or stays abroad for more than 182 days in a financial year."
  },
  {
    question: "What is a PIO?",
    answer: "A Person of Indian Origin (PIO) is a foreign citizen (except a national of Pakistan, Afghanistan, Bangladesh, China, Iran, Bhutan, Sri Lanka and Nepal) who at any time held an Indian passport or whose parents/grandparents/great-grandparents were born and permanently resident in India."
  },
  {
    question: "What is an OCI?",
    answer: "Overseas Citizenship of India (OCI) is a form of permanent residency available to people of Indian origin and their spouses which allows them to live and work in India indefinitely."
  },
  {
    question: "What is an NRE Account?",
    answer: "A Non-Resident External (NRE) account is an Indian rupee-denominated account, offering complete repatriability. The principal and interest earned are fully exempt from tax in India."
  },
  {
    question: "What is an NRO Account?",
    answer: "A Non-Resident Ordinary (NRO) account is used to manage income earned in India (like rent, dividends, pension). The interest earned is subject to TDS, and repatriation has specific limits and conditions."
  },
  {
    question: "Can NRIs invest in Mutual Funds?",
    answer: "Yes, NRIs can invest in Indian Mutual Funds subject to KYC compliance. Investments can be made through NRE or NRO accounts. Note that some AMCs may not accept investments from NRIs based in the US and Canada due to FATCA compliance."
  },
  {
    question: "Can NRIs invest in Indian Stocks?",
    answer: "Yes, NRIs can invest directly in the Indian stock market through the Portfolio Investment Scheme (PIS) mandated by the RBI. You need an NRE/NRO bank account, a Demat account, and a Trading account."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#0A1E3F] relative border-y border-white/5">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#6D28D9]/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Section Header */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <HelpCircle className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-200 font-medium">Knowledge Base</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Know About <br />
                <span className="text-[#F59E0B]">
                  NRI (FAQ)
                </span>
              </h2>
              <p className="text-blue-100/90 text-lg mb-8">
                Find answers to commonly asked questions by NRIs regarding accounts, compliance, and investments in India.
              </p>
              
              <div className="hidden lg:block">
                {/* Decorative element */}
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-2 border border-blue-500/20 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/5">
                    ?
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Accordion */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;
                
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`rounded-2xl border ${isActive ? 'border-[#F59E0B]/50 bg-white/10' : 'border-white/10 bg-white/5 hover:bg-white/10'} transition-colors overflow-hidden backdrop-blur-sm`}
                  >
                    <button
                      className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className={`font-semibold text-lg ${isActive ? 'text-white' : 'text-blue-50'} pr-4`}>
                        {faq.question}
                      </span>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-[#6D28D9]' : 'bg-white/10'}`}>
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'text-white rotate-180' : 'text-blue-300'}`} 
                        />
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 text-blue-100/90 leading-relaxed border-t border-white/10 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
