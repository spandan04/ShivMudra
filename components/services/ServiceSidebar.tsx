"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/lib/data";
import { ChevronRight } from "lucide-react";

export function ServiceSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-80 shrink-0">
      <div className="sticky top-24 premium-card bg-white rounded-2xl overflow-hidden py-4">
        {services.map((category, catIdx) => {
          const Icon = category.icon;
          return (
            <div key={category.title} className={`${catIdx !== 0 ? 'mt-6' : ''}`}>
              {/* Category Header */}
              <div className="flex items-center gap-3 px-6 py-3">
                <div className="h-8 w-8 rounded-full bg-[#fafaf8] border border-[#E2E4E8] flex items-center justify-center">
                  <Icon className="h-4 w-4 text-[#0B2341]" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-sm text-[#0B2341] uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>

              {/* Service Links */}
              <div className="flex flex-col mt-1">
                {category.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`group flex items-center justify-between px-6 py-3 text-sm font-medium transition-all border-l-4 ${
                        isActive 
                          ? "border-[#D8BE8A] bg-[#fafaf8] text-[#0B2341]" 
                          : "border-transparent text-[#657084] hover:bg-[#fafaf8] hover:text-[#0B2341]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isActive ? 'bg-[#D8BE8A]' : 'bg-[#E2E4E8] group-hover:bg-[#0B2341]'}`}></div>
                        {item.label}
                      </div>
                      <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? 'text-[#D8BE8A]' : 'text-transparent group-hover:text-[#E2E4E8] -translate-x-2 group-hover:translate-x-0'}`} />
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
