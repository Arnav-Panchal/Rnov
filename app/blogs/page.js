'use client';

import React from 'react';
import Link from 'next/link';
import Navr from '@/components/Navr';
import Footer from '@/components/footer';

const BlogCard = ({ title, excerpt, date, slug }) => (
    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-green-400 transition-colors duration-300 shadow-lg group">
        <span className="text-zinc-500 text-sm mb-2 block">{date}</span>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400">{title}</h3>
        <p className="text-zinc-400 line-clamp-3 mb-4">{excerpt}</p>
        <Link
            href={`/blogs/${slug || ''}`}
            className="text-green-400 font-semibold flex items-center gap-1 hover:gap-2 transition-all block w-fit"
        >
            Read More <span>&rarr;</span>
        </Link>
    </div>
);

export default function BlogsPage() {
    const [blogs, setBlogs] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch('/api/blogs');
                if (!res.ok) throw new Error('Failed to fetch blogs');
                const data = await res.json();
                setBlogs(data);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="flex min-h-screen flex-col bg-black font-mono">
            <Navr />

            <main className="flex-grow max-w-6xl mx-auto w-full px-8 py-20">
                <header className="mb-16">
                    <h1 className="text-5xl font-extrabold text-white mb-4">
                        Blogs<span className="text-green-400">.</span>
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl">
                        My thoughts on software development, design, and technology.
                    </p>
                </header>

                {loading ? (
                    <div className="text-center py-20 text-green-400">
                        <span className="animate-pulse">$</span> Fetching articles...
                    </div>
                ) : blogs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <BlogCard key={index} {...blog} />
                        ))}
                    </div>
                ) : error ? (
                    <div className="text-center py-20 text-red-500">
                        Error: {error}
                    </div>
                ) : (
                    <div className="text-center py-20 text-zinc-500">
                        No articles found yet.
                    </div>
                )}

                {/* Placeholder for no search results or more content */}
                <div className="mt-20 text-center border-t border-zinc-800 pt-20">
                    <p className="text-zinc-500">More articles coming soon!</p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
