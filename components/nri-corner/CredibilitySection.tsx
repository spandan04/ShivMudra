"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Star } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/lib/data";

export default function CredibilitySection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Trust Badges */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 pb-12 border-b border-gray-200">
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-[#0A1E3F] mb-1">Regulated & Trusted</h3>
            <p className="text-gray-600 text-sm">Compliant with Indian Financial Authorities</p>
          </div>
          
          <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
              <ShieldCheck className="w-5 h-5 text-[#6D28D9]" />
              <span className="font-semibold text-[#0A1E3F]">SEBI Registered</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
              <Award className="w-5 h-5 text-[#6D28D9]" />
              <span className="font-semibold text-[#0A1E3F]">AMFI Certified</span>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-[#0A1E3F] mb-4">Trusted by Global Indians</h2>
          <p className="text-gray-600">Join thousands of NRIs who have secured their financial future in India with our expert guidance.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-8 flex-grow">&quot;{testimonial.quote}&quot;</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A1E3F]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
