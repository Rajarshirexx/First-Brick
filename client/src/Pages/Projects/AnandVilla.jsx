import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectEnquiry from '../../Components/UI/ProjectEnquiry';
import { motion } from 'framer-motion';
import { FiDownload, FiMapPin, FiCheckCircle, FiHome, FiMaximize, FiGrid, FiTag } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// Asset Imports
import anandVillaCover from '../../assets/anand_villa/anand_villa_page_0001.jpg';
import anandVillaPage2 from '../../assets/anand_villa/anand_villa_page_0002.jpg';
import anandVillaPage3 from '../../assets/anand_villa/anand_villa_page_0003.jpg';
import anandVillaPage4 from '../../assets/anand_villa/anand_villa_page_0004.jpg';
import anandVillaPage5 from '../../assets/anand_villa/anand_villa_page_0005.jpg';
import projectPDF from '../../assets/anand_villa_brochure.pdf';

export default function AnandVilla() {
    const highlights = [
        { title: "Project Type", detail: "Premium Residential", icon: "🏠" },
        { title: "Location", detail: "Siliguri", icon: "📍" },
        { title: "Status", detail: "Ongoing", icon: "🏗️" },
        { title: "Brochure", detail: "Available", icon: "📄" }
    ];

    const features = [
        "Architectural Brilliance", "Gated Security", 
        "Modern Amenities", "Lush Landscapes", 
        "Elite Community", "Superior Connectivity"
    ];

    const projectEssentials = [
        { label: "Starting Price", value: "₹54.79 Lacs*", icon: <FiTag /> },
        { label: "Location", value: "Siliguri, India", icon: <FiMapPin /> },
        { label: "Project Area", value: "1300 - 1900 sqft", icon: <FiMaximize /> },
        { label: "Configuration", value: "2 BHK, 3 BHK", icon: <FiGrid /> }
    ];

    return (
        <div className="bg-[#f7f8fc] min-h-screen">
            <Helmet>
                <title>Anand Villa | Premium Residential Living | First Brick Properties</title>
                <meta name="description" content="Discover Anand Villa, a premier residential project by First Brick Properties. Modern living spaces designed for comfort, luxury, and peace in Siliguri." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center overflow-hidden">
                <motion.div 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <img src={anandVillaCover} alt="Anand Villa Hero" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
                </motion.div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-3xl space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                            <FiMapPin /> Prime Location, Siliguri
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-tight drop-shadow-xl">
                            Anand <span className="text-secondary">Villa</span>
                        </h1>
                        <p className="text-white/90 text-xl font-medium max-w-xl leading-relaxed drop-shadow-md">
                            Experience the joy of a perfect home. A masterfully crafted residential sanctuary where modern luxury meets timeless comfort.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a 
                                href={projectPDF} 
                                download="Anand-Villa-Brochure.pdf"
                                className="bg-primary hover:bg-[#1a212e] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all group lg:text-base text-sm shadow-xl shadow-primary/20"
                            >
                                Get Brochure <FiDownload className="group-hover:translate-y-1 transition-transform" />
                            </a>
                            <a 
                                href="https://wa.me/918371874510?text=I'm%20interested%20in%20Anand%20Villa%20project.%20Please%20provide%20more%20details." 
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

            {/* Project Essentials Section */}
            <section className="bg-white border-b border-primary/5 py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {projectEssentials.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary text-xl shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                                    {item.icon}
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 block">
                                        {item.label}
                                    </span>
                                    <span className="text-primary font-bold text-base lg:text-lg leading-tight block">
                                        {item.value}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
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
                            className="bg-white p-10 rounded-3xl shadow-xl shadow-primary/5 border border-primary/5 text-center group hover:border-secondary transition-all"
                        >
                            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                            <div className="text-primary font-display font-bold text-xl mb-1">{item.title}</div>
                            <div className="text-secondary text-[10px] uppercase font-black tracking-widest">{item.detail}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Lifestyle Section */}
            <section className="py-24 bg-[#eaecf2]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em]">Lifestyle Elevated</div>
                            <h2 className="text-5xl font-display font-bold text-primary leading-tight">Your Personal <br /> Haven of Peace</h2>
                            <p className="text-muted text-lg leading-relaxed max-w-lg">
                                Anand Villa offers more than just four walls; it provides a lifestyle that nourishes the soul. Designed for those who appreciate the finer details.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <FiCheckCircle className="text-secondary" />
                                        <span className="text-primary font-bold text-xs uppercase tracking-widest">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-[4rem] overflow-hidden shadow-2xl relative aspect-[4/3] order-1 lg:order-2 group">
                            <img src={anandVillaPage2} alt="Anand Villa Lifestyle" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details / Plans Section */}
            <section className="py-24 container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">Gallery & Plans</h2>
                    <p className="text-muted font-medium">Explore the detailed vision and architectural plans of Anand Villa.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {[
                        { img: anandVillaPage3, alt: "Anand Villa Page 3" },
                        { img: anandVillaPage4, alt: "Anand Villa Page 4" },
                        { img: anandVillaPage5, alt: "Anand Villa Page 5" }
                    ].map((item, i) => (
                        <a 
                            key={i}
                            href={item.img}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-[3/4] overflow-hidden rounded-[3rem] shadow-2xl border border-primary/5 cursor-pointer block"
                        >
                            <img 
                                src={item.img} 
                                alt={item.alt} 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <span className="text-white font-bold text-[10px] uppercase tracking-[0.2em] border border-white/40 px-6 py-3 rounded-full backdrop-blur-sm">
                                    View Detail
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="mt-32 pt-24 border-t border-primary/10 text-center space-y-10">
                    <div className="max-w-2xl mx-auto space-y-4">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-primary">Discover Your <br /> Joyful Legacy</h2>
                        <p className="text-primary/60 font-medium italic">Welcome home to Anand Villa.</p>
                    </div>
                    <div className="max-w-xl mx-auto space-y-12 pb-20">
                        <ProjectEnquiry projectName="Anand Villa" accentColor="#C17053" />
                    </div>
                </div>
            </section>
        </div>
    );
}
