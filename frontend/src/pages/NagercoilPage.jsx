import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    MapPin, Code, Smartphone, Globe, Users, Award,
    CheckCircle, ArrowRight, Star, Phone, Mail
} from 'lucide-react';
import { Button } from '../components/ui/button';

const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '3+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
];

const services = [
    {
        icon: Globe,
        title: 'Website Development',
        description: 'Custom responsive websites for Nagercoil businesses. E-commerce, portfolios, corporate sites with SEO optimization.'
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'Android and iOS apps for businesses in Kanyakumari. Cross-platform React Native solutions.'
    },
    {
        icon: Code,
        title: 'Custom Software',
        description: 'Tailored software solutions for unique business needs. Inventory, billing, CRM, and more.'
    },
];

const whyChooseUs = [
    'Local team based in Nagercoil - Easy communication',
    'Affordable pricing for Kanyakumari businesses',
    'Modern technologies: React, Node.js, Flutter',
    'Free consultation and quote',
    'Post-launch support and maintenance',
    'SEO-optimized websites that rank on Google',
    'Mobile-first responsive designs',
    '100% ownership transferred to you',
];

const NagercoilPage = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>LMK - Best Software Company in Nagercoil | Web & App Development</title>
                <meta name="description" content="LMK SoftTech is the leading software company in Nagercoil, Kanyakumari. We offer custom web development, mobile app development, and software solutions. Get a free quote today!" />
                <meta name="keywords" content="LMK, LMK Nagercoil, software company nagercoil, software company in nagercoil, best software company nagercoil, web development nagercoil, mobile app development kanyakumari, IT company nagercoil, software developers nagercoil" />
                <link rel="canonical" href="https://www.lmksofttech.in/nagercoil" />

                {/* Local Business Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "LMK | LMK SoftTech - Software Company Nagercoil",
                        "image": "https://www.lmksofttech.in/lmk-logo.webp",
                        "description": "Best software company in Nagercoil offering web development, mobile app development, and custom software solutions.",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Nagercoil",
                            "addressLocality": "Nagercoil",
                            "addressRegion": "Tamil Nadu",
                            "postalCode": "629001",
                            "addressCountry": "IN"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 8.1833,
                            "longitude": 77.4119
                        },
                        "url": "https://www.lmksofttech.in",
                        "telephone": "+91-6374308218",
                        "email": "kishorepa64@gmail.com",
                        "priceRange": "$$",
                        "openingHours": "Mo-Sa 09:00-21:00",
                        "areaServed": ["Nagercoil", "Kanyakumari", "Marthandam", "Thuckalay", "Colachel"]
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, teal 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 text-teal-300 text-sm font-medium mb-6 border border-teal-500/30">
                            <MapPin className="w-4 h-4" />
                            Proudly Serving Nagercoil & Kanyakumari
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                            #1 Software Company in{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                                Nagercoil
                            </span>
                        </h1>

                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                            Looking for the best software company in Nagercoil? LMK SoftTech delivers premium
                            web development, mobile app development, and custom software solutions for businesses
                            in Kanyakumari district.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button size="lg" className="bg-teal-500 text-white hover:bg-teal-600 font-semibold px-8 py-4 rounded-full">
                                    Get Free Quote
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <a href="tel:+916374308218">
                                <Button size="lg" variant="outline" className="border-2 border-teal-500 text-teal-300 hover:bg-teal-500/10 font-semibold px-8 py-4 rounded-full">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call Now
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-1">{stat.number}</div>
                                <div className="text-sm text-slate-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                            Software Development Services in Nagercoil
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Complete digital solutions for businesses in Kanyakumari district.
                            From simple websites to complex enterprise software.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-6">
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/services">
                            <Button variant="outline" size="lg" className="font-semibold">
                                View All Services
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                                Why Choose LMK SoftTech for Your Nagercoil Business?
                            </h2>
                            <p className="text-lg text-slate-600 mb-8">
                                As a local software company based in Nagercoil, we understand the unique needs
                                of businesses in Kanyakumari district. We deliver world-class solutions at
                                affordable prices with personalized support.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {whyChooseUs.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-sm">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-teal-500 to-cyan-600 p-8 rounded-2xl text-white"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Award className="w-6 h-6" />
                                <span className="font-semibold">Trusted by Nagercoil Businesses</span>
                            </div>
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <blockquote className="text-lg mb-6">
                                "LMK SoftTech delivered our website on time and it looks amazing.
                                As a local Nagercoil business, having a developer who understands
                                our market was invaluable."
                            </blockquote>
                            <div className="font-semibold">— Local Business Owner, Nagercoil</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Areas Served */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-8 text-center">
                        Serving All of Kanyakumari District
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Nagercoil', 'Kanyakumari', 'Marthandam', 'Thuckalay', 'Colachel', 'Padmanabhapuram', 'Kuzhithurai', 'Eraniel', 'Karungal', 'Suchindram'].map((area) => (
                            <span
                                key={area}
                                className="px-4 py-2 bg-white rounded-full text-slate-700 text-sm font-medium shadow-sm border border-slate-200"
                            >
                                <MapPin className="w-3 h-3 inline mr-1" />
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                        Ready to Start Your Project in Nagercoil?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8">
                        Get a free consultation and quote for your website, mobile app, or software project.
                        No obligation, just expert advice from your local tech partner.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button size="lg" className="bg-teal-500 text-white hover:bg-teal-600 font-semibold px-8 py-4 rounded-full w-full sm:w-auto">
                                <Mail className="w-5 h-5 mr-2" />
                                Contact Us
                            </Button>
                        </Link>
                        <a href="tel:+916374308218">
                            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full w-full sm:w-auto">
                                <Phone className="w-5 h-5 mr-2" />
                                +91 6374308218
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ Section for SEO */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h3 className="font-bold text-slate-900 mb-2">What is the best software company in Nagercoil?</h3>
                            <p className="text-slate-600">LMK SoftTech is recognized as one of the best software companies in Nagercoil, offering comprehensive web development, mobile app development, and custom software solutions with 100% client satisfaction.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h3 className="font-bold text-slate-900 mb-2">How much does website development cost in Nagercoil?</h3>
                            <p className="text-slate-600">Website development costs in Nagercoil start from ₹4,999 for basic business websites. E-commerce websites range from ₹15,000-₹50,000 depending on features. Contact LMK SoftTech for a free customized quote.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h3 className="font-bold text-slate-900 mb-2">Do you provide mobile app development in Kanyakumari?</h3>
                            <p className="text-slate-600">Yes! LMK SoftTech provides Android and iOS mobile app development services throughout Kanyakumari district including Nagercoil, Marthandam, and surrounding areas. We use modern technologies like React Native and Flutter.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h3 className="font-bold text-slate-900 mb-2">Can I meet the team in person in Nagercoil?</h3>
                            <p className="text-slate-600">Absolutely! As a local Nagercoil-based software company, we welcome in-person meetings. You can discuss your project requirements face-to-face with our development team.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NagercoilPage;
