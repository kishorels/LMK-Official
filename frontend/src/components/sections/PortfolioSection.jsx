import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FolderOpen, ExternalLink, Globe, Smartphone, Server, X } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const projects = [
  {
    id: 1,
    title: 'Church Website',
    category: 'Website',
    description: 'A modern church website designed to share worship services, church activities, announcements, and faith-based content.',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwwfHx8fDE3Njc4NTMwMDl8MA&ixlib=rb-4.1.0&q=85&w=800',
    technologies: ['React', 'Node.js', 'Tailwind'],
    icon: Globe,
    color: 'from-primary to-primary/50',
    url: 'https://thuthichristianassembly.netlify.app/',
  },
  {
    id: 2,
    title: 'AquaRescue App',
    category: 'Mobile App',
    description: 'quaRescue is a fast and reliable flood emergency app that lets users send SOS alerts, share live location, and receive critical safety updates when every second matters.',
    image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3Njc4NTMwMTR8MA&ixlib=rb-4.1.0&q=85&w=800',
    technologies: ['React Native', 'Firebase', 'Redux'],
    icon: Smartphone,
    color: 'from-secondary to-secondary/50',
  },
  {
    id: 3,
    title: 'Presentation Software',
    category: 'Software',
    description: 'A powerful church presentation software for displaying song lyrics, Bible verses, and multimedia content during worship services.',
    image: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MHx8fGJsYWNrfDE3Njc4NTMwMDV8MA&ixlib=rb-4.1.0&q=85&w=800',
    technologies: ['Electron', 'React', 'SQLite'],
    icon: Server,
    color: 'from-accent to-accent/50',
    url: 'https://drive.google.com/drive/folders/112EpRXfDObD8_eM-3Y3fRYBdY_lMPkf4?usp=sharing',
  },

];

const categories = ['All', 'Website', 'Mobile App', 'Software'];

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
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="gradient" className="mb-4">
            <FolderOpen className="w-3.5 h-3.5 mr-2" />
            Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            <span className="text-foreground">Our </span>
            <span className="text-gradient-primary">Featured Work</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent projects that showcase our expertise in
            web development, mobile apps, and software solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                ? 'bg-gradient-to-r from-primary via-secondary to-pink text-primary-foreground'
                : 'bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/95 via-background/70 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <project.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-muted/80 text-foreground backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform">
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full bg-card rounded-2xl overflow-hidden border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/50 flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image */}
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 -mt-16 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center`}>
                    <selectedProject.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground">
                      {selectedProject.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{selectedProject.category}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-muted text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.url ? (
                  <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="glow" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </a>
                ) : (
                  <Button variant="glow" className="w-full" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};