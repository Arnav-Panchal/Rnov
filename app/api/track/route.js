import { NextResponse } from "next/server";
import { getOrSetDeviceId } from "@/utils/cookie";
import { trackVisit } from "@/lib/visits";

export async function GET() {
  try {
    const deviceId = getOrSetDeviceId();

    const excludedIds = ["test-device-123"];
    if (!excludedIds.includes(deviceId)) {
      await trackVisit(deviceId);
    }

    console.log(`Device ID: ${deviceId} - Visit tracked`);

    return NextResponse.json({ message: "Visit tracked" });
  } catch (error) {
    console.error("Tracking skipped:", error.message);

    // IMPORTANT: Never fail the page
    return NextResponse.json(
      { message: "Tracking skipped (DB unavailable)" },
      { status: 200 }
    );
  }
}
