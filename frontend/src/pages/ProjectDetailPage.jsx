import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Globe, Smartphone, Server, CheckCircle2, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Button } from '../components/ui/button';

const ProjectDetailPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="min-h-screen py-32 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <p className="mb-8 text-slate-500">The project you are looking for does not exist or has been moved.</p>
                <Button onClick={() => navigate('/portfolio')} variant="outline">Back to Portfolio</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16 bg-white">
            <Helmet>
                <title>{project.title} | LMK SoftTech Project</title>
                <meta name="description" content={project.description} />
                <meta name="keywords" content={project.keywords ? project.keywords.join(', ') : project.category} />
                <link rel="canonical" href={`https://www.lmksofttech.in/portfolio/${project.slug}`} />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link to="/portfolio" className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to All Products
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Project Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${project.bgGradient} opacity-30`} />
                    </motion.div>

                    {/* Project Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-bold uppercase tracking-wider mb-6`}>
                            <project.icon className="w-4 h-4" />
                            {project.category}
                        </div>

                        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                            {project.title}
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            {project.description}
                        </p>

                        <div className="space-y-4 mb-10">
                            <h3 className="font-bold text-slate-900">Key Features:</h3>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {['Advanced UI/UX', 'Cloud Integration', 'SEO Optimized', 'Mobile First'].map((feature) => (
                                    <div key={feature} className="flex items-center gap-2 text-slate-600">
                                        <CheckCircle2 className="w-5 h-5 text-teal-500" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {project.url ? (
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex-1">
                                    <Button className={`w-full bg-gradient-to-r ${project.gradient} text-white py-6 rounded-xl font-bold`}>
                                        View Live Project
                                        <ExternalLink className="w-5 h-5 ml-2" />
                                    </Button>
                                </a>
                            ) : (
                                <Button disabled className="flex-1 bg-slate-100 text-slate-400 py-6 rounded-xl font-bold cursor-not-allowed">
                                    Demo Coming Soon
                                </Button>
                            )}
                            <Link to="/contact" className="flex-1">
                                <Button variant="outline" className="w-full py-6 rounded-xl font-bold border-2 border-slate-200">
                                    Hire Us for Similar Project
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;
