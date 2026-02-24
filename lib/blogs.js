import clientPromise from './mongodb';

/**
 * Tracks a unique visit to a blog post.
 * Uses deviceId and slug to ensure uniqueness per post.
 */
export async function trackBlogView(slug, deviceId) {
    if (!slug || !deviceId) return;

    const client = await clientPromise;
    const db = client.db('market');

    // Use an upsert or check to ensure unique view per device per blog
    const viewKey = `view_${slug}_${deviceId}`;
    const existing = await db.collection('blog_views').findOne({ viewKey });

    if (!existing) {
        // Record the unique view
        await db.collection('blog_views').insertOne({
            viewKey,
            slug,
            deviceId,
            timestamp: new Date()
        });

        // Atomically increment the view count on the blog document
        await db.collection('blogs').updateOne(
            { slug },
            { $inc: { views: 1 } },
            { upsert: false }
        );
    }
}

/**
 * Retrieves the view count for all blogs.
 */
export async function getAllBlogStats() {
    const client = await clientPromise;
    const db = client.db('market');

    const blogs = await db.collection('blogs')
        .find({}, { projection: { title: 1, slug: 1, views: 1 } })
        .toArray();

    return blogs.map(b => ({
        title: b.title,
        slug: b.slug,
        views: b.views || 0
    }));
}
