import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { z } from "zod";

// Blog Post Schema Validation
const blogSchema = z.object({
    title: z.string().min(3).max(100),
    content: z.string().min(10),
    excerpt: z.string().min(5).max(300),
    tags: z.array(z.string()).optional().default([]),
    date: z.string().optional().default(() => new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }))
});

// GET: Fetch all blog posts
export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("market");
        const blogs = await db
            .collection("blogs")
            .find({})
            .sort({ createdAt: -1 })
            .toArray();

        return NextResponse.json(blogs);
    } catch (error) {
        console.warn("DB unavailable, serving mock data:", error.message);

        // Graceful degradation: Serve mock data if DB is down
        const mockBlogs = [
            {
                title: "Mock: The Future of AI Engineering",
                slug: "mock-the-future-of-ai-engineering",
                excerpt: "This is a fallback post because the database is currently unreachable.",
                date: new Date().toLocaleDateString(),
                tags: ["System", "Offline"],
                content: "Database connection failed (ENOTFOUND). Please check your MONGODB_URI or network settings."
            }
        ];

        return NextResponse.json(mockBlogs);
    }
}

// POST: Create a new blog post
export async function POST(req) {
    try {
        const secret = req.headers.get("x-admin-secret");
        console.log("DEBUG - POST received. Secret:", secret ? "PRESENT" : "MISSING");

        // Security Check
        if (!secret || secret !== process.env.BLOG_ADMIN_SECRET) {
            console.log("DEBUG - Unauthorized. Env secret:", process.env.BLOG_ADMIN_SECRET);
            return NextResponse.json(
                { error: "Unauthorized: Invalid Secret" },
                { status: 401 }
            );
        }

        const body = await req.json();
        console.log("DEBUG - Body received:", JSON.stringify(body));
        const validatedData = blogSchema.parse(body);
        console.log("DEBUG - Validation successful");

        const client = await clientPromise;
        const db = client.db("market");

        const newBlog = {
            ...validatedData,
            slug: validatedData.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
            createdAt: new Date(),
        };

        const result = await db.collection("blogs").insertOne(newBlog);

        return NextResponse.json(
            { message: "Blog posted successfully", id: result.insertedId },
            { status: 201 }
        );
    } catch (error) {
        console.error("DEBUG - Caught Error:", error.name, error.message);

        if (error instanceof z.ZodError || error.name === 'ZodError') {
            console.log("DEBUG - Zod Error details:", JSON.stringify(error.issues || error.errors || error.details || []));
            const issues = error.issues || error.errors || [];
            return NextResponse.json(
                {
                    error: "Validation failed",
                    details: issues.map(err => ({
                        path: err.path.join('.'),
                        message: err.message
                    }))
                },
                { status: 400 }
            );
        }

        // Connection error check
        if (error.code === 'ENOTFOUND' || error.message.includes('topology') || error.message.includes('auth')) {
            return NextResponse.json(
                { error: `Database error: ${error.message}` },
                { status: 503 }
            );
        }

        return NextResponse.json(
            { error: "Internal Server Error", message: error.message, name: error.name },
            { status: 500 }
        );
    }
}
