import { StockTrendsCarousel } from "@/components/ui/stock-trends-carousel";

const indianMarketTrends = [
  {
    ticker: "NIFTY",
    name: "Nifty 50 Index",
    logoUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=120&q=80",
    price: 22514.65,
    currency: "INR",
    changePercent: 0.85
  },
  {
    ticker: "SENSEX",
    name: "BSE Sensex",
    logoUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=120&q=80",
    price: 74227.63,
    currency: "INR",
    changePercent: 0.72
  },
  {
    ticker: "GOLD",
    name: "Gold 10g",
    logoUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=120&q=80",
    price: 71450,
    currency: "INR",
    changePercent: -0.21
  },
  {
    ticker: "USD/INR",
    name: "US Dollar to Indian Rupee",
    logoUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=120&q=80",
    price: 83.45,
    currency: "INR",
    changePercent: -0.0
  },
  {
    ticker: "BANKNIFTY",
    name: "Bank Nifty Index",
    logoUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=120&q=80",
    price: 48592.2,
    currency: "INR",
    changePercent: 0.64
  },
  {
    ticker: "SILVER",
    name: "Silver 1kg",
    logoUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=120&q=80",
    price: 89240,
    currency: "INR",
    changePercent: 0.18
  },
  {
    ticker: "CRUDEOIL",
    name: "Crude Oil",
    logoUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=120&q=80",
    price: 6645,
    currency: "INR",
    changePercent: 1.25
  },
  {
    ticker: "LEAD",
    name: "Lead Mini",
    logoUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=120&q=80",
    price: 194.50,
    currency: "INR",
    changePercent: -0.45
  },
  {
    ticker: "ZINC",
    name: "Zinc Mini",
    logoUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=120&q=80",
    price: 265.80,
    currency: "INR",
    changePercent: 0.80
  },
  {
    ticker: "ALUMINIUM",
    name: "Aluminium Mini",
    logoUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=120&q=80",
    price: 235.10,
    currency: "INR",
    changePercent: 0.35
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
