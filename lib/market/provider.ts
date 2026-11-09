import type { MarketDataProvider } from "./types";

/**
 * IIFL provider adapter boundary.
 * Do not implement authentication or call guessed endpoints here. Enable this
 * adapter only after IIFL confirms the account's API product, auth flow,
 * endpoint host, payload schema, rate limits and data-display permissions.
 */
export function getMarketDataProvider(): MarketDataProvider {
  throw new Error(
    "IIFL market data is not configured. Confirm API activation and provider documentation before enabling live requests."
  );
}
