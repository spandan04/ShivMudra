"use client";

import { Send, MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#6D28D9]/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#F59E0B]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(8,_112,_184,_0.07)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Info Panel */}
          <div className="lg:w-2/5 bg-[#0A1E3F] p-12 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Let&apos;s Discuss Your Investment Goals</h2>
              <p className="text-blue-200/80 mb-12">
                Our NRI wealth advisors are ready to help you navigate the Indian financial markets with confidence.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#6D28D9]/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Call Us (24/7 NRI Desk)</h4>
                    <p className="text-blue-200/80">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#6D28D9]/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email Us</h4>
                    <p className="text-blue-200/80">nri@shivmudra.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#6D28D9]/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Headquarters</h4>
                    <p className="text-blue-200/80">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
              <p className="text-sm text-blue-200/60 text-center">
                Regulated by SEBI & AMFI India
              </p>
            </div>
          </div>
          
          {/* Right Form Panel */}
          <div className="lg:w-3/5 p-12 lg:p-16">
            <h3 className="text-2xl font-bold text-[#0A1E3F] mb-8">Request a Callback</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-gray-50/50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="country" className="text-sm font-medium text-gray-700">Country of Residence</label>
                  <input 
                    type="text" 
                    id="country" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-gray-50/50"
                    placeholder="United Arab Emirates"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="mobile" className="text-sm font-medium text-gray-700">Mobile Number (with ISD code)</label>
                  <input 
                    type="tel" 
                    id="mobile" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-gray-50/50"
                    placeholder="+971 50 123 4567"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-gray-50/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="requirement" className="text-sm font-medium text-gray-700">Investment Requirement</label>
                <select 
                  id="requirement"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-gray-50/50 appearance-none"
                >
                  <option value="" disabled selected>Select an option</option>
                  <option value="mutual-funds">Mutual Funds / SIP</option>
                  <option value="demat-account">NRI Demat Account Opening</option>
                  <option value="pms">Portfolio Management Services</option>
                  <option value="tax-planning">Tax & Repatriation Assistance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message (Optional)</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-gray-50/50 resize-none"
                  placeholder="Tell us briefly about your financial goals..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-xl text-white font-semibold text-lg flex items-center justify-center transition-all ${
                  isSubmitted 
                    ? "bg-green-500" 
                    : "bg-[#0A1E3F] hover:bg-[#6D28D9] shadow-lg shadow-[#0A1E3F]/10"
                }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : isSubmitted ? (
                  "Request Received Successfully!"
                ) : (
                  <>
                    Book Free NRI Consultation
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
              
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
