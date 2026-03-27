import React from 'react';
import Hero from './Sections/HeroSection';
import AboutSection from './Sections/AboutSection';

export default function Home() {
    return (
        <div className="bg-bg min-h-screen">
            <Hero />
            <AboutSection />
        </div>
    );
}