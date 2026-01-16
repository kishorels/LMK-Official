import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Zap, Shield, Clock, Users, Star, ArrowRight,
    CheckCircle2, Rocket, Headphones, Award
} from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { Button } from '../components/ui/button';

// Why Choose Us Section
const WhyChooseUs = () => {
    const features = [
        { icon: Zap, title: 'Lightning Fast', description: 'Optimized for speed and performance across all devices.' },
        { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security to protect your data.' },
        { icon: Clock, title: 'On-Time Delivery', description: 'We respect deadlines and deliver projects on schedule.' },
        { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock technical support when you need it.' },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                        Building Digital Excellence
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We combine cutting-edge technology with creative expertise to deliver solutions that drive growth.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-6 bg-white rounded-2xl border border-slate-100 hover:border-teal-200 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-indigo-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};



// Testimonials Section
const TestimonialsSection = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CEO, TechStart',
            content: 'LMK Technology transformed our digital presence. Their attention to detail and technical expertise is unmatched.',
            rating: 5,
        },
        {
            name: 'Michael Chen',
            role: 'Founder, AppVenture',
            content: 'The mobile app they developed exceeded our expectations. Professional team with excellent communication.',
            rating: 5,
        },
        {
            name: 'Emily Davis',
            role: 'Director, Creative Co',
            content: 'Outstanding work on our e-commerce platform. Sales increased by 200% within the first quarter.',
            rating: 5,
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our clients have to say about working with us.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100"
                        >
                            {/* Quote mark */}
                            <div className="absolute top-6 right-6 text-6xl text-slate-200 font-serif">"</div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-slate-700 mb-6 relative z-10">{testimonial.content}</p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// CTA Section
const CTASection = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, teal 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 backdrop-blur-sm text-teal-300 text-sm font-medium mb-6 border border-teal-500/30">
                        <Rocket className="w-4 h-4" />
                        Ready to Launch Your Project?
                    </div>

                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        Let's Build Something Amazing Together
                    </h2>

                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Transform your ideas into reality. Get a free consultation and quote for your next project.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button
                                size="lg"
                                className="bg-teal-500 text-white hover:bg-teal-600 font-semibold px-8 py-4 rounded-full transition-all duration-300"
                            >
                                Get Free Quote
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link to="/portfolio">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-teal-500 text-teal-300 hover:bg-teal-500/10 font-semibold px-8 py-4 rounded-full transition-all duration-300"
                            >
                                View Our Work
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Featured Projects Preview
const FeaturedProjects = () => {
    const projects = [
        { title: 'E-Commerce Platform', category: 'Web Development', image: '/api/placeholder/600/400' },
        { title: 'Food Delivery App', category: 'Mobile App', image: '/api/placeholder/600/400' },
        { title: 'Medical Consultation App', category: 'Software', image: '/api/placeholder/600/400' },
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
                >
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
                            Our Work
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                            Featured Projects
                        </h2>
                    </div>
                    <Link to="/portfolio" className="group flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                        View All Projects
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-300"
                        >
                            <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Award className="w-16 h-16 text-slate-400" />
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-sm font-medium text-teal-600">{project.category}</span>
                                <h3 className="text-xl font-bold text-slate-900 mt-1 group-hover:text-teal-600 transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Main HomePage Component
const HomePage = () => {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <WhyChooseUs />
            <FeaturedProjects />
            <TestimonialsSection />
            <CTASection />
        </>
    );
};

export default HomePage;
