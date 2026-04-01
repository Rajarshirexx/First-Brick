import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectEnquiry from '../../Components/UI/ProjectEnquiry';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiDownload, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// Asset Imports
import sensesHero from '../../assets/senses/The SENSES_page-0011.jpg';
import sensesCover from '../../assets/senses/The SENSES_page-0001.jpg';
import sensesLifestyle from '../../assets/senses/The SENSES_page-0003.jpg';
import sensesAmenities from '../../assets/senses/The SENSES_page-0013.jpg';
import projectPDF from '../../assets/The SENSES.pdf';

export default function Senses() {
    const highlights = [
        { title: "Residential", detail: "1, 2 & 3 BHK", icon: "🏠" },
        { title: "Land Area", detail: "7.4 Acres", icon: "📐" },
        { title: "Open Space", detail: "60% Greenery", icon: "🌿" },
        { title: "Units", detail: "735 Apartments", icon: "🏙️" }
    ];

    const luxuryFeatures = [
        "Strategically Located", "Ultra-Modern Amenities", 
        "Vast Open Community", "Rainbow Lifestyle", 
        "Modern Architecture", "Gated Security"
    ];

    return (
        <div className="bg-[#fcfcf7] min-h-screen">
            <Helmet>
                <title>The Senses | Exquisite Living Experience | First Brick Properties</title>
                <meta name="description" content="Immerse yourself in The Senses, a premier residential project by First Brick Properties. Where architectural excellence meets unparalleled comfort." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center overflow-hidden">
                <motion.div 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <img src={sensesHero} alt="The Senses Hero" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
                </motion.div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-3xl space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#d48c71] px-4 py-2 rounded-full text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                            <FiMapPin /> Strategic Location, Siliguri
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-tight">
                            The <span className="text-[#d48c71]">Senses</span>
                        </h1>
                        <p className="text-white/90 text-xl font-medium max-w-xl leading-relaxed">
                            A Rainbow of Infinite Hues. Experience lifestyle that goes beyond the ordinary in our 7.4-acre residential sanctuary.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a 
                                href={projectPDF} 
                                download="The-Senses-Brochure.pdf"
                                className="bg-[#4a7c7c] hover:bg-[#3a6363] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all group lg:text-base text-sm shadow-xl shadow-[#4a7c7c]/20"
                            >
                                Get Brochure <FiDownload className="group-hover:translate-y-1 transition-transform" />
                            </a>
                            <a 
                                href="https://wa.me/918371874510?text=I'm%20interested%20in%20The%20Senses%20project.%20Please%20provide%20more%20details." 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#25D366] hover:bg-[#20bd5c] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all lg:text-base text-sm shadow-xl shadow-[#25D366]/20"
                            >
                                <FaWhatsapp className="text-xl" /> WhatsApp Inquiry
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats Grid */}
            <section className="py-20 container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-10 rounded-3xl shadow-xl shadow-[#4a7c7c]/5 border border-[#4a7c7c]/5 text-center group hover:border-[#4a7c7c]/20 transition-all"
                        >
                            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                            <div className="text-[#2d3e3e] font-display font-bold text-xl mb-1">{item.title}</div>
                            <div className="text-[#d48c71] text-[10px] uppercase font-black tracking-widest">{item.detail}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Lifestyle & Rainbow Section */}
            <section className="py-24 bg-[#f5f5dc]/50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <div className="text-[#4a7c7c] font-bold text-[10px] uppercase tracking-[0.4em]">Infinite Hues</div>
                            <h2 className="text-5xl font-display font-bold text-[#2d3e3e] leading-tight">Where Life Turns <br /> Into a Rainbow</h2>
                            <p className="text-[#2d3e3e]/70 text-lg leading-relaxed max-w-lg">
                                Presenting 'The Senses', a place to experience good living in 1, 2 & 3 BHK premium abodes where you discover life beyond the 'ordinary'. This magnificent work of art fulfills aspirations that were evasive for you.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {luxuryFeatures.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <FiCheckCircle className="text-[#d48c71]" />
                                        <span className="text-[#2d3e3e] font-bold text-xs uppercase tracking-widest">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-[4rem] overflow-hidden shadow-2xl relative aspect-[4/3] order-1 lg:order-2 group">
                            <img src={sensesLifestyle} alt="Lifestyle" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2d3e3e]/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Section */}
            <section className="py-24 container mx-auto px-6">
                <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-[#4a7c7c]/5">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="lg:col-span-7 relative h-[600px] group">
                            <img src={sensesAmenities} alt="Kids Play Area" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute top-10 left-10">
                                <div className="bg-[#d48c71] text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">Kids Play Area</div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 p-12 md:p-20 flex flex-col justify-center space-y-8">
                            <h3 className="text-4xl font-display font-bold text-[#2d3e3e]">Ultra-Modern <br />Infrastructure</h3>
                            <p className="text-[#2d3e3e]/60 leading-relaxed font-medium">
                                With 735 apartments spread across 7.4 acres, The Senses offers an ecosystem of luxury, privacy, and community living like never before in Siliguri.
                            </p>
                            <div className="space-y-4 pt-4 border-t border-[#4a7c7c]/10">
                                <div className="flex justify-between">
                                    <span className="text-[10px] uppercase font-bold text-muted">Total Area</span>
                                    <span className="text-sm font-bold text-[#2d3e3e]">7.4 Acres</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[10px] uppercase font-bold text-muted">Open Space</span>
                                    <span className="text-sm font-bold text-[#2d3e3e]">60% Greenery</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[10px] uppercase font-bold text-muted">Total Units</span>
                                    <span className="text-sm font-bold text-[#2d3e3e]">735 Premium Flats</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-32 pt-24 border-t border-[#4a7c7c]/10 text-center space-y-10">
                    <div className="max-w-2xl mx-auto space-y-4">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-[#2d3e3e]">Reach the Stars <br /> of Reality</h2>
                        <p className="text-[#2d3e3e]/60 font-medium italic">Discover your rainbow of infinite hues today.</p>
                    </div>
                    <div className="max-w-xl mx-auto space-y-12 pb-20">
                        <ProjectEnquiry projectName="The Senses" accentColor="#4a7c7c" />
                    </div>
                </div>
            </section>
        </div>
    );
}
