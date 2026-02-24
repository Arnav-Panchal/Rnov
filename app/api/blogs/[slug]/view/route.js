import { NextResponse } from "next/server";
import { getOrSetDeviceId } from "@/utils/cookie";
import { trackBlogView } from "@/lib/blogs";

export async function POST(req, { params }) {
    const { slug } = params;

    try {
        const deviceId = getOrSetDeviceId();

        // Exclude test devices if needed
        const excludedIds = ["test-device-123"];
        if (!excludedIds.includes(deviceId)) {
            await trackBlogView(slug, deviceId);
        }

        return NextResponse.json({ message: "View tracked" });
    } catch (error) {
        console.error(`Tracking failed for ${slug}:`, error.message);
        return NextResponse.json(
            { message: "Tracking skipped" },
            { status: 200 } // Don't break the frontend if tracking fails
        );
    }
}
