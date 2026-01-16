import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  FolderOpen, ExternalLink, Globe, Smartphone, Server, X,
  ArrowRight, Star, Layers, Code2, Sparkles
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const projects = [
  {
    id: 1,
    title: 'Church Website',
    category: 'Website',
    description: 'A modern church website designed to share worship services, church activities, announcements, and faith-based content. Features a beautiful, responsive design with easy content management.',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwwfHx8fDE3Njc4NTMwMDl8MA&ixlib=rb-4.1.0&q=85&w=800',
    technologies: ['React', 'Node.js', 'Tailwind CSS', 'Firebase'],
    icon: Globe,
    gradient: 'from-teal-500 to-emerald-500',
    bgGradient: 'from-teal-500/20 via-emerald-500/10 to-transparent',
    url: 'https://thuthichristianassembly.netlify.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'AquaRescue App',
    category: 'Mobile App',
    description: 'AquaRescue is a fast and reliable flood emergency app that lets users send SOS alerts, share live location, and receive critical safety updates when every second matters.',
    image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3Njc4NTMwMTR8MA&ixlib=rb-4.1.0&q=85&w=800',
    technologies: ['React Native', 'Firebase', 'Redux', 'Maps API'],
    icon: Smartphone,
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    featured: true,
  },
  {
    id: 3,
    title: 'Presentation Software',
    category: 'Software',
    description: 'A comprehensive church presentation software developed for Kumar Pastor, designed to display song lyrics, Bible verses, announcements, and multimedia content during worship services. Features real-time text synchronization, customizable themes, and seamless multimedia integration for an enhanced worship experience.',
    image: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MHx8fGJsYWNrfDE3Njc4NTMwMDV8MA&ixlib=rb-4.1.0&q=85&w=800',
    technologies: ['Electron', 'React', 'SQLite', 'Node.js'],
    icon: Server,
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
    url: 'https://drive.google.com/drive/folders/112EpRXfDObD8_eM-3Y3fRYBdY_lMPkf4?usp=sharing',
    featured: true,
  },
];

const categories = [
  { name: 'All', icon: Layers },
  { name: 'Website', icon: Globe },
  { name: 'Mobile App', icon: Smartphone },
  { name: 'Software', icon: Server },
];

// Premium Project Card
const ProjectCard = ({ project, index, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative cursor-pointer"
    onClick={onClick}
  >
    {/* Outer glow on hover */}
    <div className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`} />

    <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        />

        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${project.bgGradient} from-white via-transparent to-transparent`} />

        {/* Featured badge */}
        {project.featured && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700"
          >
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Featured
          </motion.div>
        )}

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <div className={`flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${project.gradient} rounded-full text-white text-xs font-semibold`}>
            <project.icon className="w-3.5 h-3.5" />
            {project.category}
          </div>
        </div>

        {/* Hover overlay with view button */}
        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileHover={{ scale: 1.1 }}
            animate={{ scale: 1, rotate: 0 }}
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
          >
            <ExternalLink className="w-7 h-7 text-white" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-600 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-500">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

// Premium Modal
const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    onClick={onClose}
  >
    {/* Backdrop */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
    />

    {/* Modal Content */}
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.95, opacity: 0, y: 10 }}
      transition={{ type: "spring", damping: 25 }}
      className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white transition-colors"
      >
        <X className="w-5 h-5" />
      </motion.button>

      {/* Image */}
      <div className="relative aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${project.bgGradient} from-white via-white/50 to-transparent`} />

        {/* Category floating badge */}
        <div className="absolute bottom-6 left-6">
          <div className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-xl text-white font-semibold`}>
            <project.icon className="w-5 h-5" />
            {project.category}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          {project.title}
        </h3>

        <p className="text-slate-600 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
            <Code2 className="w-4 h-4" />
            Technologies Used
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r ${project.gradient} bg-opacity-10 text-slate-700 border border-slate-200 hover:border-transparent hover:bg-opacity-100 hover:text-white transition-all cursor-default`}
                style={{
                  background: 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,1))',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        {project.url ? (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl transition-all`}
            >
              <ExternalLink className="w-5 h-5" />
              View Live Project
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </a>
        ) : (
          <motion.button
            disabled
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-200 text-slate-500 font-semibold rounded-xl cursor-not-allowed"
          >
            <Sparkles className="w-5 h-5" />
            Coming Soon
          </motion.button>
        )}
      </div>
    </motion.div>
  </motion.div>
);

export const PortfolioSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-10%' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-teal-400/20 to-emerald-400/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/10 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(15, 23, 42) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="gradient" className="mb-4 px-4 py-2">
              <FolderOpen className="w-4 h-4 mr-2" />
              Portfolio
            </Badge>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-slate-900">Our </span>
            <span className="bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that showcase our expertise
            in web development, mobile apps, and software solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${activeCategory === category.name
                ? 'bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50'
                }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
              <FolderOpen className="w-10 h-10 text-slate-400" />
            </div>
            <p className="text-slate-500 text-lg">No projects in this category yet.</p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};