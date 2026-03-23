import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(req, { params }) {
    const { slug } = params;

    try {
        const client = await clientPromise;
        const db = client.db("market");
        const blog = await db.collection("blogs").findOne({ slug });

        if (!blog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json(blog);
    } catch (error) {
        console.warn(`DB unavailable for slug ${slug}, checking mock:`, error.message);

        // Mock Fallback for Single Post
        if (slug === "mock-the-future-of-ai-engineering") {
            return NextResponse.json({
                title: "Mock: The Future of AI Engineering",
                slug: "mock-the-future-of-ai-engineering",
                content: "### Database Connection Failed\n\nThis is a fallback post because the database is currently unreachable (ENOTFOUND). \n\nIn a real scenario, the full markdown content of your article would be rendered here using your chosen library (like `react-markdown`).",
                date: new Date().toLocaleDateString(),
                tags: ["System", "Offline"],
                excerpt: "This is a fallback post because the database is currently unreachable."
            });
        }

        return NextResponse.json(
            { error: "Failed to fetch blog post" },
            { status: 500 }
        );
    }
}

export async function PUT(req, { params }) {
    const { slug } = params;

    try {
        const secret = req.headers.get("x-admin-secret");
        
        if (!secret || secret !== process.env.BLOG_ADMIN_SECRET) {
            return NextResponse.json(
                { error: "Unauthorized: Invalid Secret" },
                { status: 401 }
            );
        }

        const body = await req.json();
        const client = await clientPromise;
        const db = client.db("market");

        // Remove unmodifiable fields
        const { _id, slug: oldSlug, createdAt, ...updateData } = body;

        // Optionally, if the title was updated, we could update the slug, 
        // but typically it's better to keep the slug the same to avoid breaking links.
        // We'll just update the content, title, excerpt, and tags.
        
        const result = await db.collection("blogs").updateOne(
            { slug },
            { $set: updateData }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Blog updated successfully" }, { status: 200 });

    } catch (error) {
        console.error("PUT Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error", message: error.message },
            { status: 500 }
        );
    }
}
