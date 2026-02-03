import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Helmet } from 'react-helmet-async';

// Layout Components
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';

// Page Components (Lazy Loaded)
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const BlogPostPage = React.lazy(() => import('./pages/BlogPostPage'));
const NagercoilPage = React.lazy(() => import('./pages/NagercoilPage'));

// Fallback Loading Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>LMK SoftTech | Best Software & Web Development in Nagercoil, Kanyakumari</title>
        <meta name="description" content="Leading software development company in Nagercoil & Kanyakumari. We build custom websites, mobile apps, and enterprise software. Professional tech solutions in Tamil Nadu." />
        <meta name="keywords" content="software company Nagercoil, web development Kanyakumari, mobile app developers Nagercoil, best IT company Kanyakumari, Kishore L M, LMK SoftTech" />
      </Helmet>
      <div className="relative min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          <React.Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/nagercoil" element={<NagercoilPage />} />
              <Route path="/software-company-nagercoil" element={<NagercoilPage />} />
            </Routes>
          </React.Suspense>
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast Notifications */}
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
