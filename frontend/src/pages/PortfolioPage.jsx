import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PortfolioSection } from '../components/sections/PortfolioSection';

const PortfolioPage = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>Our Products | LMK SoftTech - Showcase of Our Best Digital Projects</title>
                <meta name="description" content="Browse through our successful projects including Nextgen Campus ERP, E-commerce platforms, and Church presentation software. Leading tech solutions from Nagercoil." />
                <meta name="keywords" content="LMK SoftTech portfolio, software projects Nagercoil, mobile app development Kanyakumari, web development examples, success stories Tamil Nadu" />
                <link rel="canonical" href="https://www.lmksofttech.in/products" />
            </Helmet>
            <PortfolioSection />
        </div>
    );
};

export default PortfolioPage;
