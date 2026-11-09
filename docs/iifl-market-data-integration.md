# IIFL market-data integration

## Current status

- Repository branch: `feature/iifl-live-market-data`
- Frontend: Next.js App Router
- IIFL developer registration: reported registered; API product activation is not yet confirmed.
- Public website display / redistribution permission: pending confirmation.
- Live market-data requests are intentionally disabled.

## Required confirmation from IIFL

Before implementing authentication or enabling data delivery, obtain written confirmation of:

1. Exact API product(s) enabled for this application (REST quotes, historical candles, streaming feed).
2. Current API documentation and environment/base URLs.
3. Authentication flow, token lifetime, refresh/re-login requirements and 2FA handling.
4. Whether outbound IP allowlisting is required, and whether a dedicated static IPv4 is mandatory.
5. Instrument identifier/master format for NSE indices, NSE equities, BSE equities, MCX commodities and currency pairs.
6. Rate limits, streaming connection/subscription limits, reconnect rules and supported intervals.
7. Whether live, delayed and historical data may be displayed on a publicly accessible wealth-management website; required exchange/provider attribution, user restrictions and fees.
8. Whether data may be cached, transformed into gainers/losers and sector aggregates, and shown to unauthenticated visitors.

## Implementation sequence

1. Confirm account activation and public display rights.
2. Implement IIFL authentication strictly from the account-specific current documentation.
3. Implement a server-only provider adapter and validate one approved instrument quote.
4. Implement historical candles and instrument master mapping.
5. Add a persistent streaming worker only if the chosen IIFL product requires it; decide hosting after confirming IP and connection requirements.
6. Replace mock data in the existing market components with typed API responses and explicit source/as-of/stale states.
7. Derive movers, breadth and sector summaries only from an agreed eligible instrument universe. Treat FII/DII flows as separately sourced data with their actual publication timestamp.
8. Test market hours, holidays, closed markets, stale feeds, provider outages and rate limits before production.

## Current code

- `GET /api/market/status` reports whether server-side environment variables are present. It does not authenticate with IIFL and does not imply that the API is activated.
- `lib/market/types.ts` defines normalized quote/candle contracts.
- `lib/market/provider.ts` is deliberately a disabled adapter boundary until IIFL's exact API contract is confirmed.

Do not use mock values as live values. Existing mock datasets must remain visibly identified as sample/demo data until replaced.
