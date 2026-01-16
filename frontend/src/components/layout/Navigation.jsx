import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

const LOGO_URL = '/lmk-logo.png';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to top on page change
  }, [location.pathname]);

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  // Determine if we're on a dark page (home) or light page
  const isDarkPage = location.pathname === '/';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled || !isDarkPage
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/50'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={LOGO_URL}
                  alt="LMK Technology"
                  className="h-12 w-auto object-contain"
                />
                <div className="hidden sm:block">
                  <span className={cn(
                    "font-display font-bold text-lg transition-colors",
                    isScrolled || !isDarkPage ? 'text-slate-900' : 'text-white'
                  )}>
                    LMK
                  </span>
                  <span className={cn(
                    "font-display font-medium text-lg ml-1 transition-colors",
                    isScrolled || !isDarkPage ? 'text-teal-600' : 'text-teal-400'
                  )}>
                    Technology
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-slate-100/80 backdrop-blur-sm rounded-full px-2 py-1.5">
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
                      isActive(item.href)
                        ? 'bg-white text-slate-900'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link to="/contact">
                <Button
                  className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300"
                >
                  Get Started
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "md:hidden p-2 rounded-full transition-colors",
                isScrolled || !isDarkPage
                  ? 'text-slate-900 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-white">
              <div className="flex flex-col pt-24 px-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center justify-between py-4 border-b border-slate-100 text-lg font-medium transition-colors",
                        isActive(item.href)
                          ? 'text-teal-600'
                          : 'text-slate-700 hover:text-teal-600'
                      )}
                    >
                      {item.label}
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="mt-8"
                >
                  <Link to="/contact" className="block">
                    <Button
                      className="w-full bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-semibold py-4 rounded-xl"
                      size="lg"
                    >
                      Get Started
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};