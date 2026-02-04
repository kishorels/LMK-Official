import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence, LazyMotion, domMax } from 'framer-motion';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout Components
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';

// Core Page Components (Pre-imported for speed)
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

// Specialized/Content-heavy Pages (Still Lazy Loaded)
const WebDevPage = React.lazy(() => import('./pages/WebDevPage'));
const AppDevPage = React.lazy(() => import('./pages/AppDevPage'));
const SoftwareDevPage = React.lazy(() => import('./pages/SoftwareDevPage'));
const BlogPostPage = React.lazy(() => import('./pages/BlogPostPage'));
const ProjectDetailPage = React.lazy(() => import('./pages/ProjectDetailPage'));
const NagercoilPage = React.lazy(() => import('./pages/NagercoilPage'));

// Smooth Page Transition Wrapper
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.1, ease: "linear" }}
  >
    {children}
  </motion.div>
);

// Fallback Loading Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <LazyMotion features={domMax}>
      <AnimatePresence mode="popLayout">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
          <Route path="/web-development-nagercoil" element={<PageTransition><WebDevPage /></PageTransition>} />
          <Route path="/mobile-app-development-nagercoil" element={<PageTransition><AppDevPage /></PageTransition>} />
          <Route path="/custom-software-development-nagercoil" element={<PageTransition><SoftwareDevPage /></PageTransition>} />
          <Route path="/products" element={<PageTransition><PortfolioPage /></PageTransition>} />
          <Route path="/products/:slug" element={<PageTransition><ProjectDetailPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
          <Route path="/blog/:slug" element={<PageTransition><BlogPostPage /></PageTransition>} />
          <Route path="/nagercoil" element={<PageTransition><NagercoilPage /></PageTransition>} />
          <Route path="/software-company-nagercoil" element={<PageTransition><NagercoilPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </LazyMotion>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Helmet>
        <title>LMK SoftTech | Best Software & Web Development in Nagercoil, Kanyakumari</title>
        <meta name="description" content="Leading software development company in Nagercoil & Kanyakumari. We build custom websites, mobile apps, and enterprise software. Professional tech solutions in Tamil Nadu." />
        <meta name="keywords" content="software company Nagercoil, web development Kanyakumari, mobile app developers Nagercoil, best IT company Kanyakumari, Kishore L M, LMK SoftTech" />
      </Helmet>
      <div className="relative min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <React.Suspense fallback={<PageLoader />}>
            <AppRoutes />
          </React.Suspense>
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'hsl(var(--card))',
              color: 'hsl(var(--foreground))',
              border: '1px solid hsl(var(--border))',
            },
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
