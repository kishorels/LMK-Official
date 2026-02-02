import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactSection } from '../components/sections/ContactSection';

const ContactPage = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>Contact Us | LMK SoftTech - Get a Free Quote for Your Project</title>
                <meta name="description" content="Contact LMK SoftTech today for a free consultation. We offer custom software development, web & app solutions in Nagercoil. Let's build your project together." />
                <meta name="keywords" content="contact software company Nagercoil, software development quote, hire web developers Kanyakumari, LMK SoftTech contact numbers" />
                <link rel="canonical" href="https://www.lmksofttech.in/contact" />
            </Helmet>
            <ContactSection />
        </div>
    );
};

export default ContactPage;
