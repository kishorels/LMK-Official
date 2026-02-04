import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen, Sparkles, Clock } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';


export const BlogSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

    // Show only the first 3 posts in the section
    const displayPosts = blogPosts.slice(0, 3);

    return (
        <section ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-4">
                            <Sparkles className="w-3 h-3" />
                            Latest Insights
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                            Expert <span className="text-gradient-primary">Tech Guides</span> for Nagercoil Businesses
                        </h2>
                        <p className="mt-4 text-slate-600 max-w-xl">
                            Actionable insights on web development, mobile apps, SEO, and digital marketing strategies for businesses in Kanyakumari district.
                        </p>
                    </motion.div>

                    <Link to="/blog">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 transition-colors"
                        >
                            View All {blogPosts.length} Articles
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {displayPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2 leading-snug">
                                        {post.title}
                                    </h3>
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
                        </motion.div>
                    ))}
                </div>

                {/* SEO-focused dynamic text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-teal-500/10 to-indigo-500/10">
                        <div className="px-6 py-2 rounded-full bg-white text-sm text-slate-500">
                            Trusted <span className="text-teal-600 font-semibold">Web Development & Digital Marketing</span> insights for businesses in Nagercoil, Marthandam, and Kanyakumari.
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
