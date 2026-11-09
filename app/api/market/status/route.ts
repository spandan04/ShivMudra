import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const requiredEnvironment = [
    "IIFL_API_BASE_URL",
    "IIFL_CLIENT_ID",
    "IIFL_APP_KEY",
    "IIFL_APP_SECRET",
  ];

  const missing = requiredEnvironment.filter((key) => !process.env[key]);

  return NextResponse.json(
    {
      provider: "IIFL",
      configured: missing.length === 0,
      integrationStatus: missing.length === 0 ? "credentials_present" : "awaiting_activation",
      missingConfiguration: missing,
      liveDataEnabled: false,
      note:
        "Credential presence does not confirm API activation or permission for public market-data display. Live requests remain disabled until IIFL confirms both.",
      checkedAt: new Date().toISOString(),
    },
    { status: 200, headers: { "Cache-Control": "no-store" } }
  );
}
