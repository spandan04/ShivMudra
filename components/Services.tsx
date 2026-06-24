import { ArrowUpRight } from "lucide-react";
import { homeServices } from "@/lib/data";
import { MotionDiv, fadeUp, stagger } from "./Motion";

export function Services() {
  return (
    <section id="wealth-services" className="bg-[#ffffff] py-24 md:py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[11px] font-bold uppercase tracking-widest champagne-gradient-text">
              Wealth Services
            </p>
            <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-[#0B2341] md:text-5xl">
              Comprehensive Wealth Management
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#657084]">
              Tailored financial solutions designed to align with your unique
              life goals, liquidity needs, and risk appetite.
            </p>
          </MotionDiv>
        </div>

        <MotionDiv
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 grid gap-8 lg:grid-cols-3"
        >
          {homeServices.map((service) => {
            const Icon = service.icon;
            return (
              <MotionDiv
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.01, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group premium-card rounded-xl p-10"
              >
                <MotionDiv 
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="grid size-14 place-items-center rounded-lg bg-[#FAFAF8] text-[#0B2341] border border-[#E2E4E8] transition-colors duration-300 group-hover:bg-[#FFF8EA] group-hover:text-[#D8BE8A] group-hover:border-[#D8BE8A]/30"
                >
                  <Icon size={24} strokeWidth={1.5} />
                </MotionDiv>
                <h3 className="gold-underline mt-8 font-serif text-2xl font-semibold text-[#0B2341]">
                  {service.title}
                </h3>
                <div className="mt-8 h-px w-full bg-[#E2E4E8]/60" />
                <ul className="mt-8 space-y-5">
                  {service.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between gap-4 text-base font-medium text-[#657084] transition-colors duration-300 hover:text-[#D8BE8A]"
                      >
                        <span className="transition-transform duration-300 group-hover/link:translate-x-1">{item.label}</span>
                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.5}
                          className="opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#D8BE8A] group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </MotionDiv>
            );
          })}
        </MotionDiv>
      </div>
    </section>
  );
}
