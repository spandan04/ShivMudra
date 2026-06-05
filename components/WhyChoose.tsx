import { reasons } from "@/lib/data";
import { MotionDiv, fadeUp, fadeUpDelayed, stagger } from "./Motion";

export function WhyChoose() {
  return (
    <section id="about" className="bg-[#ffffff] py-24 md:py-32 overflow-hidden">
      <div className="section-shell">
        <MotionDiv
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <MotionDiv variants={fadeUp}>
            <h2 className="font-sans text-3xl font-semibold tracking-tight text-[#0B2341] md:text-4xl">
              Why Choose Shiv Mudra
            </h2>
          </MotionDiv>
          <MotionDiv variants={fadeUpDelayed}>
            <p className="mt-4 text-[15px] leading-relaxed text-[#657084]">
              We combine deep market expertise with unwavering integrity to build
              enduring wealth for our clients.
            </p>
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <MotionDiv 
                key={reason.title} 
                variants={fadeUp} 
                whileHover={{ y: -8, scale: 1.01, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="text-center group"
              >
                <MotionDiv
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                >
                  <MotionDiv
                    whileHover={{ rotate: [-5, 5, 0], scale: 1.1 }}
                    className={`mx-auto grid size-16 place-items-center rounded-full transition-colors duration-300 ${
                      index % 2 ? "bg-[#FAF6ED] text-[#B8860B]" : "bg-[#F0F0EE] text-[#0B2341]"
                    }`}
                  >
                    <Icon size={24} strokeWidth={1.5} />
                  </MotionDiv>
                </MotionDiv>
                <h3 className="mt-6 font-sans text-[17px] font-semibold text-[#0B2341]">
                  {reason.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[260px] text-[14px] leading-relaxed text-[#657084]">
                  {reason.copy}
                </p>
              </MotionDiv>
            );
          })}
        </MotionDiv>
      </div>
    </section>
  );
}
