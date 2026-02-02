import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PortfolioSection } from '../components/sections/PortfolioSection';

const PortfolioPage = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>Our Products | LMK SoftTech - Showcase of Our Best Digital Projects</title>
                <meta name="description" content="Browse through our successful projects including E-commerce platforms, Healthcare apps (Medcode), and presentation software for churches. Proven results in Nagercoil." />
                <meta name="keywords" content="LMK SoftTech portfolio, software projects Nagercoil, web development examples, mobile app showcase, success stories Kanyakumari" />
                <link rel="canonical" href="https://www.lmksofttech.in/portfolio" />
            </Helmet>
            <PortfolioSection />
        </div>
    );
};

export default PortfolioPage;
