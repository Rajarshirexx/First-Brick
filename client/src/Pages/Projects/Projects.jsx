import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ProjectCard from '../../Components/UI/ProjectCard';
import project1 from '../../assets/embee.png';
import skydaleCover from '../../assets/skydale/SKYDALE E-BROCHURE REVISED_page-0001.jpg';
import utsodharaCover from '../../assets/utsodhara/Utsodhaara-Brochure_page-0001.jpg';
import rightAngleCover from '../../assets/RIGHT ANGLE BROCHURE/RIGHT ANGLE BROCHURE V2_page-0001.jpg';
import sensesCover from '../../assets/senses/The SENSES_page-0001.jpg';
import ramVatikaCover from '../../assets/ramvatika/Ram Vatika_page-0001.jpg';
import edenCrownCover from '../../assets/eden_crown/eden_crown_page_0001.jpg';
import anandVillaCover from '../../assets/anand_villa/anand_villa_page_0001.jpg';
import nh10Cover from '../../assets/nh10/E1_FINAL02.jpg';

export default function Projects() {
    const [activeTab, setActiveTab] = useState('All Projects');
    
    const tabs = ['All Projects', 'Ongoing Projects', 'Rent/Resell'];

    const projects = [
        {
            id: "nh10",
            name: "NH10",
            location: "Siliguri, India",
            area: "Commercial Hub",
            bhk: "Premium Corporate Suites",
            startingPrice: "18.00 Lacs*",
            category: "Commercial Landmark",
            image: nh10Cover,
            description: "A futuristic commercial hub redefining business excellence in Siliguri."
        },
        {
            id: "embee-delight",
            name: "Embee Delight",
            location: "Siliguri, WB",
            area: "1100 - 1800 sqft",
            bhk: "1, 2, 3 & 4 BHK",
            startingPrice: "31.91 Lacs*",
            category: "Residential Luxury",
            image: project1,
            description: "A beacon of modern residential architecture redefining urban living standards."
        },
        {
            id: "skydale",
            name: "Skydale",
            location: "Uttorayon, Siliguri",
            area: "1800 - 2500 sqft",
            bhk: "3 BHK, 4 BHK",
            startingPrice: "1.22 Crores*",
            category: "Ultra-Luxury Residential",
            image: skydaleCover,
            description: "Siliguri's tallest residential towers, soaring into the elite skies of North Bengal."
        },
        {
            id: "utsodhara",
            name: "Utsodhaara",
            location: "Naukaghat, Siliguri",
            area: "1621 - 2142 sqft",
            bhk: "3 BHK, 4 BHK",
            startingPrice: "1.15 Crores*",
            category: "Integrated Township",
            image: utsodharaCover,
            description: "An 81-acre sustainable ecosystem redefining modern town planning."
        },
        {
            id: "right-angle",
            name: "Right Angle",
            location: "Siliguri, India",
            area: "Flexible Retail Space",
            bhk: "Commercial / Retail",
            startingPrice: "95.00 Lacs*",
            category: "Commercial / Retail",
            image: rightAngleCover,
            description: "The perfect intersection of ambition and lifestyle. A landmark commercial destination."
        },
        {
            id: "the-senses",
            name: "The Senses",
            location: "Siliguri, India",
            area: "1200 - 1800 sqft",
            bhk: "1, 2, 3 BHK",
            startingPrice: "31.88 Lacs*",
            category: "Premium Residential",
            image: sensesCover,
            description: "A rainbow of infinite hues. A 7.4-acre residential sanctuary with 60% open space."
        },
        {
            id: "ram-vatika",
            name: "Ram Vatika",
            location: "Siliguri, India",
            area: "1100 - 1500 sqft",
            bhk: "2 BHK, 3 BHK",
            startingPrice: "45.00 Lacs*",
            category: "Premium Residential",
            image: ramVatikaCover,
            description: "A serene residential haven offering modern comfort and elegant living spaces."
        },
        {
            id: "eden-crown",
            name: "Eden Crown",
            location: "Siliguri, India",
            area: "1500 - 2200 sqft",
            bhk: "3 BHK, 4 BHK",
            startingPrice: "3,500/sq ft*",
            category: "Premium Residential",
            image: edenCrownCover,
            description: "A masterfully crafted residential project offering elite living and architectural brilliance."
        },
        {
            id: "anand-villa",
            name: "Anand Villa",
            location: "Siliguri, India",
            area: "1300 - 1900 sqft",
            bhk: "2 BHK, 3 BHK",
            startingPrice: "54.79 Lacs*",
            category: "Premium Residential",
            image: anandVillaCover,
            description: "Experience the joy of a perfect home. Modern luxury meets timeless comfort."
        }
    ];

    return (
        <div className="bg-bg min-h-screen pt-32 pb-24">
            <Helmet>
                <title>Exquisite Project Portfolio | First Brick Properties</title>
                <meta name="description" content="Explore our curated selection of premium properties, ranging from luxury residences to landmark commercial destinations." />
            </Helmet>
            <div className="container px-6">
                
                {/* Header */}
                <div className="max-w-3xl mb-20 animate-fadeIn">
                    <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
                        Our Portfolio
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-8">
                        Landmark <span className="italic font-light text-secondary">Projects</span>.
                    </h1>
                    <p className="text-muted text-lg leading-relaxed max-w-2xl font-medium">
                        Explore our curated selection of premium properties, each representing the pinnacle of architectural vision and strategic market positioning.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-4 mb-12 animate-fadeIn delay-300">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all cursor-pointer ${
                                activeTab === tab 
                                ? 'bg-primary text-white shadow-xl' 
                                : 'bg-white text-primary/60 border border-primary/10 hover:border-primary/30 hover:text-primary'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="popLayout">
                        {projects.filter(project => {
                            if (activeTab === 'All Projects') return true;
                            if (activeTab === 'Rent/Resell') return project.id === 'embee-delight';
                            if (activeTab === 'Ongoing Projects') return project.id !== 'embee-delight';
                            return true;
                        }).map((project, index) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard 
                                    {...project}
                                    index={index}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </div>
    );
}