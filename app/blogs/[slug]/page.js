'use client';

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navr from '@/components/Navr';
import Footer from '@/components/footer';
import Link from 'next/link';

/**
 * BlogPost component for rendering individual articles.
 * Uses ReactMarkdown for content parsing and custom CSS for styling.
 */
export default function BlogPost({ params }) {
    const { slug } = params;
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`/api/blogs/${slug}`);
                if (!res.ok) throw new Error('Blog not found or database unreachable');
                const data = await res.json();
                setBlog(data);

                // Track view after successful fetch
                fetch(`/api/blogs/${slug}/view`, { method: 'POST' }).catch(err => console.error('Tracking error:', err));

            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    if (loading) {
        return (
            <div className="flex min-h-screen flex-col bg-black font-mono">
                <Navr />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-green-400 animate-pulse">
                        <span className="mr-2">$</span> Loading article...
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="flex min-h-screen flex-col bg-black font-mono text-white">
                <Navr />
                <main className="flex-grow max-w-6xl mx-auto w-full px-8 py-20 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-red-500">404: Not Found</h1>
                    <p className="text-zinc-400 mb-8">{error || "The article you're looking for doesn't exist."}</p>
                    <Link href="/blogs" className="bg-zinc-800 px-6 py-3 rounded-xl hover:bg-zinc-700 transition-colors">
                        Back to Blogs
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col bg-black font-mono text-white">
            <Navr />

            <main className="flex-grow max-w-6xl mx-auto w-full px-8 py-20">
                <Link
                    href="/blogs"
                    className="text-zinc-500 hover:text-green-400 transition-colors mb-12 block group"
                >
                    <span className="mr-2 group-hover:mr-4 transition-all inline-block">&larr;</span> Back to articles
                </Link>

                <header className="mb-12">
                    <div className="flex gap-2 mb-4">
                        {blog.tags?.map((tag, i) => (
                            <span key={i} className="text-xs font-bold bg-zinc-900 text-green-400 px-3 py-1 rounded-full border border-zinc-800">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                        {blog.title}
                    </h1>
                    <div className="flex items-center text-zinc-500 gap-4">
                        <span>{blog.date}</span>
                        <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                        <span>{blog.views || 0} views</span>
                        <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                        <span>By Arnav Panchal</span>
                    </div>
                </header>

                <article className="prose prose-invert prose-green max-w-none">
                    <div className="text-zinc-300 text-lg leading-relaxed">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {blog.content}
                        </ReactMarkdown>
                    </div>
                </article>

                <div className="mt-20 pt-12 border-t border-zinc-900">
                    <div className="bg-zinc-900/30 p-8 rounded-3xl border border-zinc-800 text-center">
                        <h3 className="text-2xl font-bold mb-4">Enjoyed this post?</h3>
                        <p className="text-zinc-400 mb-8">Feel free to reach out or check some of my other projects.</p>
                        <div className="flex justify-center gap-4">
                            <Link href="/blogs" className="text-green-400 font-bold border-b border-green-400/30 hover:border-green-400 transition-all pb-1">
                                More Articles
                            </Link>
                            <Link href="/#contact" className="text-white font-bold border-b border-zinc-700 hover:border-white transition-all pb-1">
                                Get in touch
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
