import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Calendar, Share2, Tag, ChevronRight, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { Button } from '../components/ui/button';

const BlogPostPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.slug === slug);

    // Get related posts (same category, excluding current)
    const relatedPosts = post
        ? blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 2)
        : [];

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen py-32 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                <p className="mb-8 text-slate-500">The article you are looking for does not exist or has been moved.</p>
                <Button onClick={() => navigate('/blog')} variant="outline">Back to Blog</Button>
            </div>
        );
    }

    // Parse date for structured data (format: "Feb 02, 2026" -> "2026-02-02")
    const parseDate = (dateStr) => {
        const months = {
            Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
            Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
        };
        const parts = dateStr.replace(',', '').split(' ');
        return `${parts[2]}-${months[parts[0]]}-${parts[1].padStart(2, '0')}`;
    };

    // Enhanced Schema for BlogPosting with keywords
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.lmksofttech.in/blog/${post.slug}`
        },
        "headline": post.title,
        "description": post.excerpt,
        "image": {
            "@type": "ImageObject",
            "url": post.image,
            "width": 800,
            "height": 500
        },
        "author": {
            "@type": "Person",
            "name": post.author,
            "url": "https://www.lmksofttech.in/about"
        },
        "publisher": {
            "@type": "Organization",
            "name": "LMK SoftTech",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.lmksofttech.in/lmk-logo.webp",
                "width": 200,
                "height": 60
            },
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nagercoil",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
            }
        },
        "datePublished": parseDate(post.date),
        "dateModified": parseDate(post.date),
        "keywords": post.keywords ? post.keywords.join(', ') : post.category,
        "articleSection": post.category,
        "wordCount": post.content ? post.content.split(/\s+/).length : 1000,
        "inLanguage": "en-IN"
    };

    // BreadcrumbList schema for better SEO
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lmksofttech.in" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.lmksofttech.in/blog" },
            { "@type": "ListItem", "position": 3, "name": post.category, "item": `https://www.lmksofttech.in/blog?category=${post.category}` },
            { "@type": "ListItem", "position": 4, "name": post.title, "item": `https://www.lmksofttech.in/blog/${post.slug}` }
        ]
    };

    return (
        <article className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-slate-50">
            <Helmet>
                <title>{post.title} | LMK SoftTech Blog - Nagercoil</title>
                <meta name="description" content={post.excerpt} />
                <meta name="author" content={post.author} />
                <meta name="keywords" content={post.keywords ? post.keywords.join(', ') : `${post.category}, LMK SoftTech, Nagercoil`} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.image} />
                <meta property="og:url" content={`https://www.lmksofttech.in/blog/${post.slug}`} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.excerpt} />
                <meta name="twitter:image" content={post.image} />
                <link rel="canonical" href={`https://www.lmksofttech.in/blog/${post.slug}`} />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Navigation Breadcrumb */}
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap"
                >
                    <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link to="/blog" className="hover:text-teal-600 transition-colors">Blog</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-slate-900 font-medium">{post.category}</span>
                </motion.nav>

                {/* Content Grid - Article + Sidebar */}
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Main Article Content */}
                    <div className="lg:col-span-8">
                        {/* Header */}
                        <motion.header
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-10"
                        >
                            {/* Meta badges */}
                            <div className="flex flex-wrap items-center gap-3 mb-5">
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold">
                                    <Tag className="w-3.5 h-3.5 mr-1.5" />
                                    {post.category}
                                </span>
                                <span className="inline-flex items-center text-slate-500 text-sm">
                                    <Calendar className="w-4 h-4 mr-1.5" />
                                    {post.date}
                                </span>
                                {post.readTime && (
                                    <span className="inline-flex items-center text-slate-500 text-sm">
                                        <Clock className="w-4 h-4 mr-1.5" />
                                        {post.readTime}
                                    </span>
                                )}
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-slate-900 leading-tight mb-6">
                                {post.title}
                            </h1>

                            {/* Author info */}
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                                    {post.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">{post.author}</p>
                                    <p className="text-sm text-slate-500">LMK SoftTech Team</p>
                                </div>
                            </div>

                            {/* Excerpt */}
                            <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-teal-500 pl-4 italic">
                                {post.excerpt}
                            </p>
                        </motion.header>

                        {/* Featured Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="aspect-video w-full overflow-hidden rounded-2xl shadow-xl mb-12 bg-slate-200"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                                loading="eager"
                                decoding="async"
                            />
                        </motion.div>

                        {/* Article Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-10 lg:p-12"
                        >
                            <div
                                className="prose prose-lg prose-slate max-w-none
                                    prose-headings:font-display
                                    prose-h2:text-2xl prose-h2:text-slate-900 prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-200
                                    prose-h3:text-xl prose-h3:text-slate-800 prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
                                    prose-p:text-slate-600 prose-p:leading-relaxed
                                    prose-a:text-teal-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                                    prose-strong:text-slate-900 prose-strong:font-semibold
                                    prose-ul:mt-4 prose-ul:mb-4 prose-ul:space-y-2
                                    prose-li:text-slate-600
                                    prose-table:border prose-table:border-slate-200 prose-table:rounded-lg prose-table:overflow-hidden
                                    prose-th:bg-slate-50 prose-th:text-slate-900 prose-th:font-semibold prose-th:text-left prose-th:px-4 prose-th:py-3
                                    prose-td:px-4 prose-td:py-3 prose-td:border-t prose-td:border-slate-100"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </motion.div>

                        {/* Keywords Tags */}
                        {post.keywords && post.keywords.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-10 pt-8 border-t border-slate-200"
                            >
                                <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">Related Topics</h3>
                                <div className="flex flex-wrap gap-2">
                                    {post.keywords.map((keyword, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-default"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Footer Navigation */}
                        <div className="mt-10 pt-8 border-t border-slate-200 flex items-center justify-between">
                            <Link to="/blog">
                                <Button variant="ghost" className="gap-2 text-slate-600 hover:text-teal-600">
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to All Articles
                                </Button>
                            </Link>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    if (navigator.share) {
                                        navigator.share({ title: post.title, url: window.location.href });
                                    } else {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert('Link copied to clipboard!');
                                    }
                                }}
                                className="gap-2"
                            >
                                <Share2 className="w-4 h-4" />
                                Share
                            </Button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-28 space-y-8">
                            {/* Author Card */}
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                                <h3 className="font-bold text-slate-900 mb-4">About the Author</h3>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                                        {post.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">{post.author}</p>
                                        <p className="text-sm text-slate-500">Content Writer</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Part of the LMK SoftTech team, sharing insights on web development, mobile apps, and digital marketing for businesses in Nagercoil.
                                </p>
                            </div>

                            {/* CTA Card */}
                            <div className="bg-gradient-to-br from-teal-500 to-indigo-600 rounded-2xl p-6 text-white">
                                <h3 className="text-xl font-bold mb-3">Need Expert Help?</h3>
                                <p className="text-teal-50 text-sm mb-5 leading-relaxed">
                                    Get professional web development, mobile apps, and digital marketing services for your business.
                                </p>
                                <Link to="/contact">
                                    <Button variant="secondary" className="w-full bg-white text-teal-600 hover:bg-teal-50 font-semibold">
                                        Get Free Consultation
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>

                            {/* Related Posts */}
                            {relatedPosts.length > 0 && (
                                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                                    <h3 className="font-bold text-slate-900 mb-4">Related Articles</h3>
                                    <div className="space-y-4">
                                        {relatedPosts.map((relatedPost) => (
                                            <Link
                                                key={relatedPost.id}
                                                to={`/blog/${relatedPost.slug}`}
                                                className="group block"
                                            >
                                                <div className="flex gap-4">
                                                    <div className="w-20 h-14 bg-slate-100 rounded-lg flex-shrink-0 overflow-hidden">
                                                        <img
                                                            src={relatedPost.image}
                                                            alt={relatedPost.title}
                                                            className="w-full h-full object-cover"
                                                            loading="lazy"
                                                            decoding="async"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-2 leading-snug">
                                                            {relatedPost.title}
                                                        </h4>
                                                        <span className="text-xs text-slate-500 mt-1 block">{relatedPost.date}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
};

export default BlogPostPage;
