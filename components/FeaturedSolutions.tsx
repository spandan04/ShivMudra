import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/data";
import { MotionDiv, fadeUp, stagger, MotionA } from "./Motion";

export function FeaturedSolutions() {
  return (
    <section id="advisory" className="bg-[#FAFAF8] py-24 md:py-32">
      <div className="section-shell">
        <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest champagne-gradient-text">
              Featured Solutions
            </p>
            <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-[#0B2341] md:text-5xl">
              Curated Wealth Solutions
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#657084]">
              Flagship strategies designed to meet specific financial
              objectives at every stage of life.
            </p>
          </div>
          <MotionA
            href="#contact"
            whileHover={{ x: 5 }}
            className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#D8BE8A] transition-colors hover:text-[#0B2341]"
          >
            <span className="gold-underline">View All Solutions</span> 
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" strokeWidth={2} />
          </MotionA>
        </MotionDiv>

        <MotionDiv
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <MotionDiv
                variants={fadeUp}
                key={solution.title}
                whileHover={{ y: -8, scale: 1.01, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group premium-card overflow-hidden rounded-xl border border-[#E2E4E8]"
              >
                <div className="relative h-[200px] w-full overflow-hidden">
                  <Image
                    src={solution.imageUrl}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <h3 className="absolute bottom-5 left-6 font-sans text-[22px] font-bold tracking-wide text-[#ffffff]">
                    {solution.title}
                  </h3>
                </div>
                <div className="bg-[#ffffff] p-8">
                  <p className="min-h-[6rem] text-[15px] leading-relaxed text-[#657084]">
                    {solution.copy}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-block text-[12px] font-bold uppercase tracking-widest text-[#0B2341] transition-colors group-hover:text-[#D8BE8A]"
                  >
                    Learn More
                  </a>
                </div>
              </MotionDiv>
            );
          })}
        </MotionDiv>
      </div>
    </section>
  );
}
