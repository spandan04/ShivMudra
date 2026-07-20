"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function RelationshipManager() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-[24px] p-8 md:p-12 shadow-[0_10px_40px_rgba(10,_30,_63,_0.05)] border border-gray-200 flex flex-col md:flex-row items-center gap-10"
          >
            
            {/* Avatar Column */}
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden relative bg-gray-100">
                <Image 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=320&q=80"
                  alt="Shankar Tate - Wealth Advisor"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-2 bg-[#F59E0B] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border-2 border-white"
              >
                Expert
              </motion.div>
            </div>

            {/* Details Column */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-[#6D28D9]/10 text-[#6D28D9] text-sm font-semibold rounded-full mb-4">
                Dedicated Relationship Manager
              </div>
              
              <h3 className="text-3xl font-bold text-[#0A1E3F] mb-2">Shankar Tate</h3>
              <p className="text-gray-600 text-lg mb-8">Senior Wealth Advisor</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#0A1E3F] text-white hover:bg-[#6D28D9] transition-colors shadow-md group/btn font-medium"
                >
                  <Phone className="w-5 h-5 mr-3 text-[#F59E0B]" />
                  +91 98765 43210
                </a>
                
                <a 
                  href="mailto:shankar.tate@shivmudra.com"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-50 text-[#0A1E3F] hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm font-medium"
                >
                  <Mail className="w-5 h-5 mr-3 text-[#6D28D9]" />
                  Email Advisor
                </a>
              </div>
            </div>

            {/* Minimal geometric background instead of generic watermark */}
            <div className="absolute right-0 top-0 w-64 h-full overflow-hidden pointer-events-none rounded-r-[24px]">
              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full border border-gray-100 opacity-50"></div>
              <div className="absolute -right-8 top-1/2 w-32 h-32 rounded-full border border-gray-50 opacity-50"></div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
