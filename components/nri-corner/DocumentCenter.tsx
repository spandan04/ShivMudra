"use client";

import { motion } from "framer-motion";
import { Download, FileText, FolderDown } from "lucide-react";

const documents = [
  { name: "FEMA Declaration Letter", size: "124 KB" },
  { name: "NRE Account Opening Form", size: "2.4 MB" },
  { name: "NRO Account Opening Form", size: "2.3 MB" },
  { name: "PIS Account Form", size: "1.8 MB" },
  { name: "Power of Attorney Form", size: "850 KB" }
];

export default function DocumentCenter() {
  return (
    <section className="py-16 lg:py-24 bg-[#0A1E3F] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[#6D28D9]/10 blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          
          {/* Header Section */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 mb-6 shadow-lg shadow-purple-500/20">
                <FolderDown className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                NRI Document <span className="text-[#F59E0B]">Center</span>
              </h2>
              <p className="text-blue-100/90 text-lg mb-8">
                Download all essential forms and documents required for your NRI investment journey in one place.
              </p>
            </motion.div>
          </div>
          
          {/* Document Grid */}
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#6D28D9]/50 transition-all shadow-lg overflow-hidden cursor-pointer"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                    <FileText className="w-6 h-6 text-blue-300 group-hover:text-purple-300" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium mb-1 truncate" title={doc.name}>
                      {doc.name}
                    </h3>
                    <p className="text-blue-100/70 text-sm">{doc.size} • PDF</p>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F59E0B] group-hover:text-[#0A1E3F] text-white/80 transition-colors">
                    <Download className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
