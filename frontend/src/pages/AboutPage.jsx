import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AboutSection } from '../components/sections/AboutSection';

const AboutPage = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>About LMK | LMK SoftTech - Leading Tech Experts in Nagercoil</title>
                <meta name="description" content="Meet the team at LMK | LMK SoftTech. We are a passionate team of developers and designers in Nagercoil dedicated to building digital excellence and innovative solutions." />
                <meta name="keywords" content="LMK, about LMK SoftTech, L M Kishore, software developers Nagercoil, tech team Kanyakumari, Kishore L M" />
                <link rel="canonical" href="https://www.lmksofttech.in/about" />
            </Helmet>
            <AboutSection />
        </div>
    );
};

export default AboutPage;
