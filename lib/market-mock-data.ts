// lib/market-mock-data.ts

export const liveMarketSnapshot = [
  { ticker: "NIFTY 50", price: 22514.65, change: "+0.85%", changeValue: 189.20, positive: true, data: [22110, 22240, 22310, 22280, 22450, 22510, 22514] },
  { ticker: "SENSEX", price: 74227.63, change: "+0.72%", changeValue: 531.10, positive: true, data: [73150, 73480, 73920, 73840, 74200, 74160, 74227] },
  { ticker: "NIFTY BANK", price: 48592.20, change: "+1.25%", changeValue: 599.80, positive: true, data: [47900, 48050, 48200, 48150, 48300, 48500, 48592] },
  { ticker: "GOLD", price: 71450.00, change: "-0.21%", changeValue: -150.00, positive: false, data: [71680, 71610, 71720, 71480, 71510, 71370, 71450] },
  { ticker: "USD/INR", price: 83.45, change: "-0.02%", changeValue: -0.01, positive: false, data: [83.48, 83.46, 83.47, 83.45, 83.45, 83.44, 83.45] },
  { ticker: "INDIA VIX", price: 12.85, change: "-4.10%", changeValue: -0.55, positive: false, data: [13.4, 13.5, 13.2, 13.0, 12.9, 12.9, 12.85] }
];

export const topGainers = [
  { name: "HDFC Bank", ticker: "HDFCBANK", price: "₹1,684.20", change: "+2.84%", logo: "H" },
  { name: "Tata Steel", ticker: "TATASTEEL", price: "₹166.35", change: "+2.41%", logo: "T" },
  { name: "Infosys", ticker: "INFY", price: "₹1,489.80", change: "+1.92%", logo: "I" },
  { name: "Axis Bank", ticker: "AXISBANK", price: "₹1,178.15", change: "+1.63%", logo: "A" },
  { name: "Reliance Ind.", ticker: "RELIANCE", price: "₹2,954.10", change: "+1.45%", logo: "R" },
];

export const topLosers = [
  { name: "Asian Paints", ticker: "ASIANPAINT", price: "₹2,938.60", change: "-1.45%", logo: "A" },
  { name: "Nestle India", ticker: "NESTLEIND", price: "₹2,404.10", change: "-1.12%", logo: "N" },
  { name: "Britannia", ticker: "BRITANNIA", price: "₹5,132.75", change: "-0.94%", logo: "B" },
  { name: "Divi's Labs", ticker: "DIVISLAB", price: "₹4,298.50", change: "-0.71%", logo: "D" },
  { name: "ITC", ticker: "ITC", price: "₹435.60", change: "-0.65%", logo: "I" },
];

export const marketOverview = {
  advanceDecline: { advances: 1350, declines: 840, unchanged: 110, ratio: "1.6:1" },
  marketBreadth: { text: "Bullish", indicator: 68 }, // percentage 0-100
  fiiDii: { fii: "₹+1,250 Cr", dii: "₹+840 Cr", net: "Positive" },
  sectorLeader: { name: "Banking & Financials", value: "+1.85%" }
};

export const sectorPerformance = [
  { name: "Banking", return: "+1.85%", data: [1, 2, 4, 3, 5, 7, 8] },
  { name: "IT", return: "+1.10%", data: [2, 3, 2, 4, 5, 6, 7] },
  { name: "FMCG", return: "-0.45%", data: [5, 4, 3, 4, 2, 1, 1] },
  { name: "Pharma", return: "+0.30%", data: [1, 2, 1, 3, 2, 4, 3] },
  { name: "Auto", return: "+0.85%", data: [3, 4, 5, 4, 6, 7, 8] },
  { name: "Energy", return: "+1.40%", data: [1, 2, 2, 4, 6, 5, 7] },
  { name: "Realty", return: "+0.15%", data: [2, 3, 2, 2, 3, 2, 3] },
];

export const tableData = [
  { id: 1, name: "Reliance Industries", ltp: 2954.10, prevClose: 2911.85, change: 42.25, changePercent: 1.45, volume: "5.2M", marketCap: "₹20.1T" },
  { id: 2, name: "TCS", ltp: 4125.60, prevClose: 4085.20, change: 40.40, changePercent: 0.99, volume: "2.1M", marketCap: "₹15.3T" },
  { id: 3, name: "HDFC Bank", ltp: 1684.20, prevClose: 1637.65, change: 46.55, changePercent: 2.84, volume: "18.4M", marketCap: "₹12.8T" },
  { id: 4, name: "ICICI Bank", ltp: 1125.40, prevClose: 1109.80, change: 15.60, changePercent: 1.41, volume: "12.5M", marketCap: "₹7.9T" },
  { id: 5, name: "Bharti Airtel", ltp: 1245.90, prevClose: 1225.10, change: 20.80, changePercent: 1.70, volume: "6.8M", marketCap: "₹7.1T" },
  { id: 6, name: "SBI", ltp: 812.35, prevClose: 805.10, change: 7.25, changePercent: 0.90, volume: "14.2M", marketCap: "₹7.2T" },
  { id: 7, name: "Infosys", ltp: 1489.80, prevClose: 1461.75, change: 28.05, changePercent: 1.92, volume: "7.4M", marketCap: "₹6.2T" },
  { id: 8, name: "L&T", ltp: 3755.20, prevClose: 3720.50, change: 34.70, changePercent: 0.93, volume: "1.9M", marketCap: "₹5.1T" },
  { id: 9, name: "ITC", ltp: 435.60, prevClose: 438.45, change: -2.85, changePercent: -0.65, volume: "11.1M", marketCap: "₹5.4T" },
  { id: 10, name: "Hindustan Unilever", ltp: 2280.15, prevClose: 2275.50, change: 4.65, changePercent: 0.20, volume: "1.5M", marketCap: "₹5.3T" },
  { id: 11, name: "Bajaj Finance", ltp: 7120.45, prevClose: 7080.10, change: 40.35, changePercent: 0.57, volume: "0.8M", marketCap: "₹4.3T" },
  { id: 12, name: "Maruti Suzuki", ltp: 12540.80, prevClose: 12450.20, change: 90.60, changePercent: 0.73, volume: "0.4M", marketCap: "₹3.9T" },
  { id: 13, name: "Axis Bank", ltp: 1178.15, prevClose: 1159.25, change: 18.90, changePercent: 1.63, volume: "9.5M", marketCap: "₹3.6T" },
  { id: 14, name: "Tata Motors", ltp: 985.40, prevClose: 978.20, change: 7.20, changePercent: 0.74, volume: "10.2M", marketCap: "₹3.2T" },
  { id: 15, name: "Sun Pharma", ltp: 1540.25, prevClose: 1525.80, change: 14.45, changePercent: 0.95, volume: "2.5M", marketCap: "₹3.7T" },
];

export const mainChartData = [
  { date: "10:00", value: 22100 },
  { date: "10:30", value: 22150 },
  { date: "11:00", value: 22120 },
  { date: "11:30", value: 22200 },
  { date: "12:00", value: 22250 },
  { date: "12:30", value: 22180 },
  { date: "13:00", value: 22300 },
  { date: "13:30", value: 22350 },
  { date: "14:00", value: 22400 },
  { date: "14:30", value: 22380 },
  { date: "15:00", value: 22480 },
  { date: "15:30", value: 22514 },
];

export const marketInsights = [
  {
    title: "Weekly Market Outlook: Bullish Momentum Continues",
    summary: "An in-depth analysis of the factors driving the current market rally, including strong corporate earnings and favorable macroeconomic indicators.",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
    date: "Jun 24, 2026",
    category: "Market Outlook"
  },
  {
    title: "Sector Rotation: Shifting Focus to Capital Goods",
    summary: "Why leading institutions are reallocating capital towards the infrastructure and capital goods sectors amid new policy announcements.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    date: "Jun 22, 2026",
    category: "Sector Analysis"
  },
  {
    title: "Global Yields and Impact on Emerging Markets",
    summary: "Understanding the correlation between US Treasury yields and foreign institutional flows in the Indian equity markets.",
    imageUrl: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=600&q=80",
    date: "Jun 20, 2026",
    category: "Macro Strategy"
  }
];
