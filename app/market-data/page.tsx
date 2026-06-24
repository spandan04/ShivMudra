import { MarketDataHero } from "@/components/market-data/MarketDataHero";
import { LiveMarketSnapshot } from "@/components/market-data/LiveMarketSnapshot";
import { MarketMovers } from "@/components/market-data/MarketMovers";
import { MarketOverviewDashboard } from "@/components/market-data/MarketOverviewDashboard";
import { SectorPerformance } from "@/components/market-data/SectorPerformance";
import { InteractiveMarketCharts } from "@/components/market-data/InteractiveMarketCharts";
import { MarketDataTable } from "@/components/market-data/MarketDataTable";
import { MarketInsights } from "@/components/market-data/MarketInsights";
import { PersonalizedGuidanceCTA } from "@/components/market-data/PersonalizedGuidanceCTA";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Intelligence Center | Shiv Mudra Wealth Management",
  description: "Real-time market insights, performance analytics, and institutional-grade market intelligence.",
};

export default function MarketDataPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fafaf8]">
        <MarketDataHero />
        <LiveMarketSnapshot />
        <MarketOverviewDashboard />
        <SectorPerformance />
        <InteractiveMarketCharts />
        <MarketDataTable />
        <MarketMovers />
        <MarketInsights />
        <PersonalizedGuidanceCTA />
      </main>
      <Footer />
    </>
  );
}
