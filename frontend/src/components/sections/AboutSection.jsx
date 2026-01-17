import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  User, Award, Briefcase, Heart, Target, Rocket,
  Code2, Sparkles, Zap, Star, ArrowRight, CheckCircle2
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { Link } from 'react-router-dom';

const stats = [
  { value: '100%', label: 'Client Satisfaction', icon: Heart, color: 'from-pink-500 to-rose-500' },
  { value: '24/7', label: 'Support Available', icon: Zap, color: 'from-indigo-500 to-purple-500' },
];

const values = [
  {
    icon: Target,
    title: 'Client-Focused',
    description: 'Your success is our priority. We listen, understand, and deliver solutions that exceed expectations.',
    gradient: 'from-teal-500 to-emerald-500'
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'We stay at the forefront of technology, bringing cutting-edge solutions to every project.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do. Every line of code is crafted with care and dedication.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Sparkles,
    title: 'Quality',
    description: 'Excellence in every pixel. We never compromise on the quality of our deliverables.',
    gradient: 'from-amber-500 to-orange-500'
  },
];

const expertise = [
  'React & Next.js',
  'React Native',
  'Node.js & Express',
  'Python & Django',
  'Cloud Solutions',
  'Database Design',
];

// Animated Background Shapes
const FloatingShape = ({ className, delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: [0.4, 0.7, 0.4],
      scale: [1, 1.1, 1],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 20,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

// Stats Card Component
const StatCard = ({ stat, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ duration: 0.5, delay: 0.1 * index }}
    className="group relative"
  >
    <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />
    <div className="relative bg-white rounded-2xl p-6 text-center border border-slate-100 transition-all duration-300">
      <motion.div
        className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <stat.icon className="w-7 h-7 text-white" />
      </motion.div>
      <motion.p
        className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        {stat.value}
      </motion.p>
      <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
    </div>
  </motion.div>
);

// Value Card Component
const ValueCard = ({ value, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.15 * index }}
    className="group"
  >
    <div className="relative p-6 bg-white rounded-2xl border border-slate-100 hover:border-transparent transition-all duration-500 overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

      <div className="relative flex gap-5">
        <motion.div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center flex-shrink-0`}
          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          <value.icon className="w-7 h-7 text-white" />
        </motion.div>
        <div>
          <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
            {value.title}
          </h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            {value.description}
          </p>
        </div>
      </div>

      {/* Decorative corner */}
      <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-xl transition-all duration-500`} />
    </div>
  </motion.div>
);

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-10%' });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingShape
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-teal-400/20 to-emerald-400/20 blur-3xl"
          delay={0}
        />
        <FloatingShape
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 blur-3xl"
          delay={5}
        />
        <FloatingShape
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-pink-400/15 to-rose-400/15 blur-3xl"
          delay={10}
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="gradient" className="mb-4 px-4 py-2">
              <User className="w-4 h-4 mr-2" />
              About Us
            </Badge>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-slate-900">Meet the Team Behind </span>
            <span className="bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              LMK SoftTech
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate about transforming ideas into exceptional digital experiences.
            Our commitment to innovation and quality drives everything we do.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="w-full sm:w-64">
              <StatCard stat={stat} index={index} isInView={isInView} />
            </div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Column - Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Animated glow */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 rounded-3xl opacity-20 blur-2xl"
                animate={{
                  opacity: [0.15, 0.25, 0.15],
                  scale: [0.98, 1.02, 0.98]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Main Card */}
              <div className="relative bg-white rounded-3xl p-8 border border-slate-100 overflow-hidden">
                {/* Decorative top gradient */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-teal-500 via-indigo-500 to-purple-500 opacity-10" />

                {/* Profile Section */}
                <div className="relative flex flex-col items-center text-center">
                  <motion.div
                    className="w-32 h-32 rounded-2xl bg-gradient-to-br from-teal-500 via-indigo-500 to-purple-500 p-1 mb-6"
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                      <span className="text-4xl font-display font-bold bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">
                        LMK
                      </span>
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-display font-bold text-slate-900">L M Kishore </h3>
                  <p className="text-teal-600 font-medium mb-4">Founder & Lead Developer</p>

                  {/* Bio */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Passionate developer with expertise in creating innovative digital solutions
                    that help businesses thrive in the modern era.
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {expertise.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + i * 0.05 }}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-slate-100 text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-teal-500/10 blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {/* Mission Statement */}
            <div className="mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4"
              >
                <Sparkles className="w-4 h-4" />
                Our Mission
              </motion.div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Building Digital Excellence, One Project at a Time
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                At LMK SoftTech, we believe in the power of technology to transform businesses.
                We bring a unique blend of technical expertise and creative vision to every project,
                ensuring your digital presence stands out in today's competitive landscape.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our mission is simple: to help businesses thrive in the digital age by delivering
                innovative, high-quality solutions that drive growth and success.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <ValueCard key={value.title} value={value} index={index} isInView={isInView} />
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-semibold rounded-xl transition-all"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-teal-300 hover:text-teal-600 transition-all"
                >
                  View Our Work
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};