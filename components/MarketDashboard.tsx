"use client";

import { Activity, ArrowDownRight, ArrowUpRight, BarChart3 } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { gainers, losers, niftyData, sensexData } from "@/lib/data";
import { MotionDiv, fadeUp, stagger, CountUp } from "./Motion";

function MarketList({
  title,
  items,
  positive
}: {
  title: string;
  items: { name: string; price: string; change: string }[];
  positive: boolean;
}) {
  return (
    <div className="rounded-xl border border-[#E2E4E8] bg-[#ffffff] p-6 shadow-[0_4px_24px_rgba(11,35,65,0.02)]">
      <h3 className="mb-5 font-serif text-xl font-semibold text-[#0B2341]">{title}</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name} className="flex items-center justify-between gap-4 border-b border-[#E2E4E8]/50 pb-3 last:border-0 last:pb-0">
            <div>
              <p className="text-[15px] font-semibold text-[#0B2341]">{item.name}</p>
              <p className="mt-0.5 text-[13px] font-medium text-[#657084]">{item.price}</p>
            </div>
            <span className={positive ? "font-bold text-[#10B981]" : "font-bold text-[#EF4444]"}>
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MarketDashboard() {
  return (
    <section className="bg-[#ffffff] py-24 md:py-32">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[11px] font-bold uppercase tracking-widest champagne-gradient-text">
              Live Market Dashboard
            </p>
            <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-[#0B2341] md:text-5xl">
              Real-Time Market Intelligence
            </h2>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#10B981]/20 bg-[#10B981]/5 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#10B981]"
          >
            <MotionDiv animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <Activity size={16} strokeWidth={2} />
            </MotionDiv>
            Markets Open
          </MotionDiv>
        </div>

        <MotionDiv
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-8 xl:grid-cols-[1.35fr_0.65fr]"
        >
          <MotionDiv variants={fadeUp} className="premium-card rounded-xl p-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-semibold text-[#0B2341]">NIFTY 50</h3>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-[#10B981]">
                    <ArrowUpRight size={18} strokeWidth={2.5} /> <CountUp to={0.85} duration={1} formatter={(v) => `+${v.toFixed(2)}%`} />
                  </span>
                </div>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={niftyData}>
                      <defs>
                        <linearGradient id="niftyFill" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="5%" stopColor="#FF9933" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#FF9933" stopOpacity={0.0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid stroke="#E2E4E8" vertical={false} strokeDasharray="4 4" />
                      <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{fill: '#657084', fontSize: 12}} dy={10} />
                      <YAxis hide domain={["dataMin - 100", "dataMax + 100"]} />
                      <Tooltip contentStyle={{ borderRadius: 8, borderColor: "#E2E4E8", boxShadow: "0 12px 32px rgba(11, 35, 65, 0.08)", border: "none" }} />
                      <Area type="monotone" dataKey="value" stroke="#0B2341" strokeWidth={2.5} fill="url(#niftyFill)" animationDuration={1500} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-semibold text-[#0B2341]">SENSEX</h3>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-[#10B981]">
                    <ArrowUpRight size={18} strokeWidth={2.5} /> <CountUp to={0.72} duration={1} formatter={(v) => `+${v.toFixed(2)}%`} />
                  </span>
                </div>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sensexData}>
                      <CartesianGrid stroke="#E2E4E8" vertical={false} strokeDasharray="4 4" />
                      <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{fill: '#657084', fontSize: 12}} dy={10} />
                      <YAxis hide domain={["dataMin - 200", "dataMax + 200"]} />
                      <Tooltip contentStyle={{ borderRadius: 8, borderColor: "#E2E4E8", boxShadow: "0 12px 32px rgba(11, 35, 65, 0.08)", border: "none" }} />
                      <Line type="monotone" dataKey="value" stroke="#FF9933" strokeWidth={2.5} dot={{ r: 4, fill: "#0B2341", strokeWidth: 0 }} activeDot={{ r: 6, fill: "#0B2341" }} animationDuration={1500} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeUp} className="grid gap-8">
            <MarketList title="Top Gainers" items={gainers} positive />
            <MarketList title="Top Losers" items={losers} positive={false} />
            <div className="rounded-xl bg-gradient-to-br from-[#0B2341] to-[#17365D] p-8 text-[#ffffff] shadow-xl">
              <div className="flex items-center gap-4 border-b border-[#ffffff]/10 pb-5">
                <BarChart3 className="text-[#D8BE8A]" size={28} strokeWidth={1.5} />
                <h3 className="font-serif text-2xl font-semibold tracking-wide">Market Summary</h3>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-y-6 gap-x-4 text-sm">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#ffffff]/60">Advance/Decline</p>
                  <p className="mt-1 text-lg font-semibold tracking-wide"><CountUp to={32} duration={2} /> <span className="text-[#ffffff]/40">/</span> <CountUp to={18} duration={2} /></p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#ffffff]/60">India VIX</p>
                  <p className="mt-1 text-lg font-semibold tracking-wide"><CountUp to={13.42} duration={2} formatter={(v) => v.toFixed(2)} /></p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#ffffff]/60">FII Flow</p>
                  <p className="mt-1 text-lg font-semibold tracking-wide">₹<CountUp to={1120} duration={2} />Cr</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#ffffff]/60">Gold</p>
                  <p className="mt-1 text-lg font-semibold tracking-wide text-[#EF4444] flex items-center gap-1">
                    <ArrowDownRight size={18} strokeWidth={2} /> <CountUp to={0.21} duration={2} formatter={(v) => `${v.toFixed(2)}%`} />
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}
