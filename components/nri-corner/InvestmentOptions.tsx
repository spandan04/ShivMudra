"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Briefcase, LineChart, Shield, Target } from "lucide-react";
import Link from "next/link";

const options = [
  {
    title: "Mutual Funds",
    description: "Professionally managed investment schemes pooling money to buy securities. Ideal for disciplined, long-term wealth creation.",
    icon: PieChartIcon,
    href: "/services/mutual-funds"
  },
  {
    title: "Equity Investments",
    description: "Direct participation in India's growth story through direct stock market investments using your PIS account.",
    icon: LineChart,
    href: "/services/equity-investments"
  },
  {
    title: "Government & Corporate Bonds",
    description: "Secure fixed-income instruments offering regular interest payouts and capital protection for conservative investors.",
    icon: Shield,
    href: "/services/bonds"
  },
  {
    title: "PMS Services",
    description: "Customized Portfolio Management Services for HNI clients looking for specialized investment strategies.",
    icon: Briefcase,
    href: "/services/portfolio-management"
  },
  {
    title: "Portfolio Advisory",
    description: "Expert recommendations on asset allocation, stock picking, and portfolio restructuring for existing holdings.",
    icon: BarChart3,
    href: "/services/wealth-management"
  },
  {
    title: "Retirement Planning",
    description: "Structured plans designed to ensure financial independence for your family in India upon your return or retirement.",
    icon: Target,
    href: "/services/retirement-planning"
  }
];

// Reusable SVG for consistency if Lucide doesn't have a perfect match
function PieChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  )
}

export default function InvestmentOptions() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#0A1E3F] mb-6"
          >
            Investment Options for <span className="text-[#6D28D9]">NRIs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Diversify your portfolio with a wide range of investment avenues available in the Indian financial market.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group flex flex-col h-full"
            >
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#F59E0B] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              <div className="w-14 h-14 rounded-xl bg-[#6D28D9]/10 flex items-center justify-center mb-6 group-hover:bg-[#6D28D9] transition-colors duration-300">
                <option.icon className="w-7 h-7 text-[#6D28D9] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-[#0A1E3F] mb-3">
                {option.title}
              </h3>
              
              <p className="text-gray-600 mb-8 flex-grow">
                {option.description}
              </p>
              
              <Link 
                href={option.href}
                className="inline-flex items-center text-sm font-semibold text-[#6D28D9] group-hover:text-[#F59E0B] transition-colors mt-auto"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
