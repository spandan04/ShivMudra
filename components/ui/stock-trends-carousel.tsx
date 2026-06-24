"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Flame } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/Motion";

interface Stock {
  ticker: string;
  name: string;
  logoUrl: string;
  price: number;
  currency: string;
  changePercent: number;
}

interface StockTrendsCarouselProps {
  title: string;
  subtitle: string;
  stocks: Stock[];
  className?: string;
}

const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

export const StockTrendsCarousel = React.forwardRef<
  HTMLDivElement,
  StockTrendsCarouselProps
>(({ title, subtitle, stocks, className }, ref) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <section
      ref={ref}
      className={cn("mx-auto w-full max-w-6xl space-y-8", className)}
    >
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="px-4 md:px-0"
      >
        <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-foreground">
          🇮🇳 {title} <ChevronRight className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-muted-foreground mt-2">
          {subtitle}
        </h3>
      </motion.div>

      <div className="relative">
        <motion.div
          ref={scrollContainerRef}
          className="scrollbar-hide flex w-full space-x-6 overflow-x-auto px-4 pb-4 pt-2 md:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stocks.map((stock) => (
            <motion.div
              key={stock.ticker}
              variants={itemVariants}
              className="shrink-0"
            >
              <div className="flex h-full w-[280px] flex-col justify-between rounded-xl border border-[#E2E4E8] bg-[#ffffff] p-5 premium-card hover:-translate-y-1.5 transition-transform duration-300 group">
                <div>
                  <div className="mb-6 flex items-center gap-4">
                    <Image
                      src={stock.logoUrl}
                      alt={`${stock.name} logo`}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full bg-muted object-cover border border-[#E2E4E8]"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="font-bold text-[#0B2341]">
                          {stock.ticker}
                        </p>
                        <Flame className="h-4 w-4 text-[#D8BE8A]" />
                      </div>
                      <p className="truncate text-sm text-[#657084] font-medium">
                        {stock.name}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[22px] font-bold tracking-tight text-[#0B2341] flex items-baseline gap-1">
                    <CountUp 
                      to={stock.price} 
                      duration={1.5}
                      formatter={(val) => formatCurrency(val, stock.currency).replace("₹", "").trim()}
                    />
                    <span className="text-xs font-semibold text-[#657084] uppercase tracking-wider">
                      {stock.currency}
                    </span>
                  </p>
                  <p
                    className={cn(
                      "font-bold text-sm mt-1",
                      stock.changePercent >= 0
                        ? "text-[#10B981]"
                        : "text-[#EF4444]"
                    )}
                  >
                    {stock.changePercent >= 0 ? "+" : ""}
                    {stock.changePercent.toFixed(2)}%
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute -left-6 top-1/2 hidden -translate-y-1/2 md:block z-10">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-[#E2E4E8] bg-[#ffffff]/90 shadow-md backdrop-blur-sm text-[#0B2341] hover:text-[#D8BE8A] hover:border-[#D8BE8A]"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>

        <div className="absolute -right-6 top-1/2 hidden -translate-y-1/2 md:block z-10">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-[#E2E4E8] bg-[#ffffff]/90 shadow-md backdrop-blur-sm text-[#0B2341] hover:text-[#D8BE8A] hover:border-[#D8BE8A]"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
});
StockTrendsCarousel.displayName = "StockTrendsCarousel";
