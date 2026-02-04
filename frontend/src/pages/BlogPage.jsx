import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, BookOpen, Clock, Search, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPage = () => {
    // Structured data for Blog listing page
    const blogListSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "LMK SoftTech Blog",
        "description": "Expert insights on web development, mobile apps, digital marketing, and technology trends for businesses in Nagercoil and Kanyakumari",
        "url": "https://www.lmksofttech.in/blog",
        "publisher": {
            "@type": "Organization",
            "name": "LMK SoftTech",
            "logo": "https://www.lmksofttech.in/lmk-logo.webp"
        },
        "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "url": `https://www.lmksofttech.in/blog/${post.slug}`,
            "author": { "@type": "Person", "name": post.author }
        }))
    };

    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            <Helmet>
                <title>Web Development Blog | LMK SoftTech - Tech Insights for Nagercoil & Kanyakumari Businesses</title>
                <meta name="description" content="Expert web development, mobile app development, and digital marketing guides for businesses in Nagercoil, Kanyakumari, and Tamil Nadu. Stay updated with the latest tech trends." />
                <meta name="keywords" content="web development blog nagercoil, mobile app development tips, digital marketing kanyakumari, technology trends tamil nadu, LMK SoftTech insights, SEO guide nagercoil" />
                <meta property="og:title" content="Web Development Blog | LMK SoftTech" />
                <meta property="og:description" content="Expert web development and digital marketing guides for businesses in Nagercoil and Kanyakumari." />
                <meta property="og:url" content="https://www.lmksofttech.in/blog" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.lmksofttech.in/blog" />
                <script type="application/ld+json">
                    {JSON.stringify(blogListSchema)}
                </script>
            </Helmet>

            {/* Header Section */}
            <div className="bg-white py-16 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-teal-50 text-teal-600 text-sm font-medium mb-4">
                            {blogPosts.length} Expert Articles
                        </span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                            Tech Insights for <span className="text-gradient-primary">Nagercoil</span> Businesses
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Actionable guides on web development, mobile apps, SEO, and digital marketing to help your Kanyakumari business grow online.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500"
                            >
                                {/* Image Container */}
                                <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                                    <div className="w-full h-full bg-slate-200">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-teal-600 shadow-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                    {post.readTime && (
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 rounded-full bg-slate-900/75 backdrop-blur-sm text-xs font-medium text-white shadow-sm flex items-center gap-1.5">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                    )}
                                </Link>

                                {/* Content */}
                                <div className="p-6 md:p-8">
                                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <User className="w-3.5 h-3.5" />
                                            {post.author}
                                        </div>
                                    </div>

                                    <Link to={`/blog/${post.slug}`}>
                                        <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2 leading-snug">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-teal-600 transition-colors group/link"
                                    >
                                        Read Full Article
                                        <BookOpen className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-gradient-to-br from-teal-500 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-teal-500/20">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Free Tech Tips for Your Business</h2>
                        <p className="text-teal-50 mb-8 max-w-xl mx-auto opacity-90">
                            Join 500+ Nagercoil business owners who receive our weekly insights on web development, digital marketing, and growing online.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-6 py-4 rounded-xl text-slate-900 bg-white border-0 focus:ring-2 focus:ring-teal-300 outline-none"
                                required
                            />
                            <button className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors">
                                Subscribe Free
                            </button>
                        </form>
                        <p className="text-teal-100 text-sm mt-4">No spam. Unsubscribe anytime.</p>
                    </div>
                </div>
            </section>

            {/* SEO Footer Section */}
            <section className="py-12 bg-slate-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-slate-500 text-sm leading-relaxed">
                        <strong className="text-slate-700">LMK SoftTech</strong> is the leading web development and digital marketing company in <strong className="text-teal-600">Nagercoil, Kanyakumari district, Tamil Nadu</strong>.
                        We help local businesses build professional websites, mobile apps, and grow their online presence through SEO and social media marketing.
                        Our blog shares actionable insights to help businesses in Marthandam, Thuckalay, Colachel, and across Tamil Nadu succeed online.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
