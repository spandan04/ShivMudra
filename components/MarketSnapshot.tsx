import { StockTrendsCarousel } from "@/components/ui/stock-trends-carousel";

const indianMarketTrends = [
  {
    ticker: "NIFTY",
    name: "Nifty 50 Index",
    logoUrl:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=120&q=80",
    price: 22514.65,
    currency: "INR",
    changePercent: 0.85
  },
  {
    ticker: "SENSEX",
    name: "BSE Sensex",
    logoUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=120&q=80",
    price: 74227.63,
    currency: "INR",
    changePercent: 0.72
  },
  {
    ticker: "GOLD",
    name: "Gold 10g",
    logoUrl:
      "https://images.unsplash.com/photo-1610375461246-83ff852e21bb?auto=format&fit=crop&w=120&q=80",
    price: 71450,
    currency: "INR",
    changePercent: -0.21
  },
  {
    ticker: "USD/INR",
    name: "US Dollar to Indian Rupee",
    logoUrl:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=120&q=80",
    price: 83.45,
    currency: "INR",
    changePercent: -0.0
  },
  {
    ticker: "BANKNIFTY",
    name: "Bank Nifty Index",
    logoUrl:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=120&q=80",
    price: 48592.2,
    currency: "INR",
    changePercent: 0.64
  },
  {
    ticker: "SILVER",
    name: "Silver 1kg",
    logoUrl:
      "https://images.unsplash.com/photo-1599813295846-559d1cc820c4?auto=format&fit=crop&w=120&q=80",
    price: 89240,
    currency: "INR",
    changePercent: 0.18
  }
];

export function MarketSnapshot() {
  return (
    <section id="market-data" className="bg-[#ffffff] py-16 border-b border-[#E2E4E8]">
      <StockTrendsCarousel
        title="Indian market trends"
        subtitle="NIFTY, SENSEX, commodities, and currency snapshot"
        stocks={indianMarketTrends}
      />
    </section>
  );
}
