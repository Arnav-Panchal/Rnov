'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navr from '@/components/Navr';
import Footer from '@/components/footer';

function BlogAdminContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [secret, setSecret] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        tags: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [isLoadingStats, setIsLoadingStats] = useState(false);

    // Fetch stats
    const fetchStats = async () => {
        if (!secret) return;
        setIsLoadingStats(true);
        try {
            const res = await fetch('/api/blogs');
            if (res.ok) {
                const data = await res.json();
                setBlogs(data);
            }
        } catch (err) {
            console.error('Failed to fetch stats:', err);
        } finally {
            setIsLoadingStats(false);
        }
    };

    // Auto-fill secret and fetch stats
    useEffect(() => {
        const urlSecret = searchParams.get('secret');
        if (urlSecret) {
            setSecret(urlSecret);
        }
    }, [searchParams]);

    useEffect(() => {
        if (secret) {
            fetchStats();
        }
    }, [secret]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!secret) {
            setStatus({ type: 'error', message: 'Admin secret is required.' });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: 'loading', message: 'Deploying article...' });

        try {
            const res = await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-admin-secret': secret
                },
                body: JSON.stringify({
                    ...formData,
                    tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean)
                })
            });

            const data = await res.json();

            if (!res.ok) {
                if (data.details && Array.isArray(data.details)) {
                    const detailMessages = data.details.map(d => `${d.path}: ${d.message}`).join(' | ');
                    throw new Error(`${data.error}: ${detailMessages}`);
                }
                throw new Error(data.error || data.message || 'Failed to post blog');
            }

            setStatus({ type: 'success', message: 'Article deployed successfully!' });
            setFormData({ title: '', excerpt: '', content: '', tags: '' });

            // Refresh stats after posting
            fetchStats();

        } catch (err) {
            setStatus({ type: 'error', message: err.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-black font-mono">
            <Navr />

            <main className="flex-grow max-w-5xl mx-auto w-full px-8 py-20">
                <header className="mb-12">
                    <h1 className="text-4xl font-extrabold text-white mb-2">
                        Admin Dashboard<span className="text-green-400">.</span>
                    </h1>
                    <p className="text-zinc-500">Secure analytics and content management.</p>
                </header>

                {/* Secret / Auth Section (Always visible for now if no cookie) */}
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl mb-12">
                    <label className="block text-zinc-400 text-sm mb-2">$ sudo auth --session</label>
                    <input
                        type="password"
                        value={secret}
                        onChange={(e) => setSecret(e.target.value)}
                        placeholder="Enter your BLOG_ADMIN_SECRET"
                        className="w-full bg-black border border-zinc-700 rounded-lg py-3 px-4 text-green-400 focus:outline-none focus:border-green-400 transition-colors"
                    />
                </div>

                {secret && (
                    <div className="space-y-12">
                        {/* Stats Section */}
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-white flex items-center">
                                    <span className="text-green-400 mr-2">#</span> Visitor Analytics
                                </h2>
                                <button
                                    onClick={fetchStats}
                                    className="text-xs bg-zinc-900 hover:bg-zinc-800 text-zinc-400 px-3 py-1 rounded-md border border-zinc-800 transition-colors"
                                >
                                    {isLoadingStats ? 'Refreshing...' : 'Refresh'}
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {blogs.length === 0 ? (
                                    <div className="col-span-full py-8 text-center text-zinc-600 border border-dashed border-zinc-800 rounded-xl">
                                        No stats available yet.
                                    </div>
                                ) : (
                                    blogs.map((b, i) => (
                                        <div key={i} className="bg-zinc-900/30 border border-zinc-800 p-5 rounded-xl hover:border-zinc-700 transition-colors group">
                                            <div className="text-xs text-zinc-500 mb-1">/{b.slug}</div>
                                            <div className="text-lg font-bold text-white mb-4 line-clamp-1">{b.title}</div>
                                            <div className="flex items-end justify-between">
                                                <div className="text-3xl font-black text-green-400">{b.views || 0}</div>
                                                <div className="text-xs text-zinc-500 font-bold tracking-widest uppercase">Unique Views</div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </section>

                        {/* Editor Section */}
                        <section className="pt-12 border-t border-zinc-900">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <span className="text-green-400 mr-2">#</span> Create New Article
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-zinc-400 text-sm mb-2">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-green-400 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-zinc-400 text-sm mb-2">Excerpt (Short Summary)</label>
                                        <textarea
                                            name="excerpt"
                                            value={formData.excerpt}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-green-400 transition-colors h-24"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-zinc-400 text-sm mb-2">Content (Markdown supported)</label>
                                        <textarea
                                            name="content"
                                            value={formData.content}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-3 px-4 text-white font-mono focus:outline-none focus:border-green-400 transition-colors h-64"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-zinc-400 text-sm mb-2">Tags (Comma separated)</label>
                                        <input
                                            type="text"
                                            name="tags"
                                            value={formData.tags}
                                            onChange={handleChange}
                                            placeholder="Next.js, Tailwind, AI"
                                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-green-400 transition-colors"
                                        />
                                    </div>
                                </div>

                                {status.message && (
                                    <div className={`p-4 rounded-lg text-sm ${status.type === 'error' ? 'bg-red-900/20 text-red-500 border border-red-900' : 'bg-green-900/20 text-green-500 border border-green-900'}`}>
                                        <span className="font-bold">[{status.type.toUpperCase()}]</span> {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-green-400 text-black py-4 rounded-xl font-bold text-lg hover:bg-green-500 transition-all shadow-lg shadow-green-400/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Processing...' : 'Deploy to Production'}
                                </button>
                            </form>
                        </section>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default function BlogAdmin() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BlogAdminContent />
        </Suspense>
    );
}
