export type MarketDataStatus = "live" | "delayed" | "closed" | "stale" | "unavailable";

export interface MarketQuote {
  instrumentId: string;
  symbol: string;
  exchange: "NSE" | "BSE" | "MCX" | "FX";
  lastPrice: number;
  previousClose: number;
  change: number;
  changePercent: number;
  volume?: number;
  asOf: string;
  status: MarketDataStatus;
}

export interface MarketCandle {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}

export interface MarketDataResult<T> {
  provider: "iifl";
  status: MarketDataStatus;
  asOf: string | null;
  data: T;
  message?: string;
}

export interface MarketDataProvider {
  getQuotes(instrumentIds: string[]): Promise<MarketDataResult<MarketQuote[]>>;
  getHistorical(instrumentId: string, from: string, to: string, interval: string): Promise<MarketDataResult<MarketCandle[]>>;
}
