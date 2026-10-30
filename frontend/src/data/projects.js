import { Globe, Smartphone, Server } from 'lucide-react';

export const projects = [
    {
        id: 1,
        slug: 'lmsk-music',
        title: 'LMSK Music Player & Streamer',
        category: 'Mobile App',
        description: 'An advanced Android music streaming app featuring unlimited high-quality cloud audio streaming, Tamil mood feeds, real-time karaoke vocal cut, synchronized lyrics, live audio visualizers, caller tune setup, and built-in arcade games (Beat Runner, Brick Breaker). Built with Kotlin and Jetpack Compose.',
        image: '/lmsk-music.webp',
        icon: Smartphone,
        gradient: 'from-purple-500 via-pink-500 to-rose-500',
        bgGradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
        url: 'https://drive.google.com/drive/folders/13O7vLYDz0dYkSHUwmKhGmukkH7AeU4mZ?usp=sharing',
        featured: true,
        keywords: ['music streaming app nagercoil', 'android app development kanyakumari', 'tamil music app', 'lmsk music', 'kotlin app developer'],
        features: [
            'High-Quality Cloud Music Streaming',
            'Massive Online Music Catalog & Smart Search',
            'Real-Time Karaoke Vocal Cut & Synchronized Lyrics',
            'Tamil Mood Vibes & Curated Daily Playlists',
            'Built-in Arcade Games (Play While Listening)',
            'Direct CallerTune Setup (Jio / Airtel / Vi)',
            'Live Waveform & Retro Visualizers',
            'Background Audio Playback (Media3 ExoPlayer)',
            'Offline Song Downloads & Sleep Timer'
        ],
        actionLabel: 'Download Android APK'
    },
    {
        id: 2,
        slug: 'nextgen-campus',
        title: 'Nextgen Campus Erp',
        category: 'Software',
        description: 'IT helps schools manage students, teachers, classes, attendance, exams, marks, fees, timetables, notices, reports, and daily administration in one simple system.',
        image: '/no-logo1.png',
        icon: Server,
        gradient: 'from-indigo-500 to-purple-500',
        bgGradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
        url: 'https://nextgencamp.in/',
        featured: true,
        keywords: ['erp software kanyakumari', 'school management software nagercoil', 'online erp'],
        features: [
            'Student & Teacher Information System',
            'Online Attendance & Timetable Management',
            'Fee Collection & Online Invoicing',
            'Exam & Marks Report Card Generation',
            'Instant Notices & SMS Notifications',
            'Complete Administration Dashboard'
        ]
    },
    {
        id: 3,
        slug: 'ecommerce-site',
        title: 'E-commerce Platform',
        category: 'Website',
        description: 'A modern e-commerce platform showcasing physical products and food items with cart, checkout-ready architecture, category browsing, and responsive design. Built for selling goods and F&B, not service listings.',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?crop=entropy&cs=srgb&fm=webp&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG9ubGluZXxlbnwwfHx8fDE3MzgyNDU2MDB8MA&ixlib=rb-4.1.0&q=75&w=600',
        icon: Globe,
        gradient: 'from-teal-500 to-emerald-500',
        bgGradient: 'from-teal-500/20 via-emerald-500/10 to-transparent',
        featured: true,
        keywords: ['ecommerce website nagercoil', 'online store kanyakumari', 'shopping website tamil nadu'],
        features: [
            'Product Catalog & Category Filtering',
            'Responsive Cart & Seamless Checkout Flow',
            'Mobile-First Responsive Layout',
            'Optimized Product Search & Filtering',
            'Secure Payment Gateway Architecture',
            'SEO-Optimized Product Landing Pages'
        ]
    },
    {
        id: 4,
        slug: 'church-presentation-software',
        title: 'Church Presentation Software',
        category: 'Software',
        description: 'A comprehensive church presentation software developed for Kumar Pastor, designed to display song lyrics, Bible verses, announcements, and multimedia content during worship services. Features real-time text synchronization, customizable themes, and seamless multimedia integration for an enhanced worship experience.',
        image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?crop=entropy&cs=srgb&fm=webp&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwfGVufDB8fHx8MTczODI0NTYwMHww&ixlib=rb-4.1.0&q=75&w=600',
        icon: Server,
        gradient: 'from-pink-500 to-rose-500',
        bgGradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
        url: 'https://drive.google.com/drive/folders/112EpRXfDObD8_eM-3Y3fRYBdY_lMPkf4?usp=sharing',
        featured: true,
        keywords: ['church presentation software nagercoil', 'worship software tamil nadu', 'multimedia software for church'],
        features: [
            'Real-Time Song Lyrics & Bible Verse Display',
            'Dual Display / Multi-Screen Projection Support',
            'Bilingual Tamil & English Hymn Database',
            'Customizable Background Themes & Video Loops',
            'Instant Announcement & Notice Overlay',
            'Offline Operation for Church Services'
        ],
        actionLabel: 'Download Software'
    },
];
