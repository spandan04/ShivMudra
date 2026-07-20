"use client";

import { motion } from "framer-motion";
import { Briefcase, Landmark, PieChart, Scale } from "lucide-react";

const features = [
  {
    title: "NRI Demat Account",
    description: "Seamlessly open and manage your Demat and Trading accounts from anywhere in the world with zero hassle.",
    icon: Landmark
  },
  {
    title: "Mutual Fund Investments",
    description: "Access top-performing Indian mutual funds tailored to your risk profile and financial goals.",
    icon: PieChart
  },
  {
    title: "Wealth Management",
    description: "Dedicated portfolio management services designed to grow and protect your wealth across generations.",
    icon: Briefcase
  },
  {
    title: "Tax & Compliance Support",
    description: "Expert assistance with FEMA regulations, taxation, and repatriation of funds to ensure full compliance.",
    icon: Scale
  }
];

export default function WhyNriCorner() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0A1E3F] mb-4"
          >
            Why Choose Shiv Mudra For <span className="text-[#6D28D9]">NRI Investments?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            We provide a comprehensive suite of financial services designed exclusively for the unique needs of Non-Resident Indians.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#6D28D9] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-[#6D28D9]/10 group-hover:bg-[#6D28D9] transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-[#6D28D9] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-[#0A1E3F] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
