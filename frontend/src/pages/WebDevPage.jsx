import React from 'react';
import { Helmet } from 'react-helmet-async';
import { WebsiteSection } from '../components/sections/WebsiteSection';
import { ContactSection } from '../components/sections/ContactSection';

const WebDevPage = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>LMK | Web Development in Nagercoil | Professional Website Design</title>
                <meta name="description" content="Looking for LMK? We provide professional web development in Nagercoil. LMK SoftTech builds high-performance, SEO-optimized, and responsive websites for Kanyakumari businesses." />
                <meta name="keywords" content="LMK, lmk, web development nagercoil, website design kanyakumari, best web designers nagercoil, ecommerce website development tamil nadu" />
                <link rel="canonical" href="https://www.lmksofttech.in/web-development-nagercoil" />
            </Helmet>
            <WebsiteSection />
            <ContactSection />
        </div>
    );
};

export default WebDevPage;
