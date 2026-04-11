import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectEnquiry from '../../Components/UI/ProjectEnquiry';
import { motion } from 'framer-motion';
import { FiDownload, FiMapPin, FiCheckCircle, FiHome, FiMaximize, FiGrid, FiTag } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// Asset Imports
import edenCrownCover from '../../assets/eden_crown/eden_crown_page_0001.jpg';
import edenCrownPage2 from '../../assets/eden_crown/eden_crown_page_0002.jpg';
import edenCrownPage3 from '../../assets/eden_crown/eden_crown_page_0003.jpg';
import edenCrownPage4 from '../../assets/eden_crown/eden_crown_page_0004.jpg';
import edenCrownPage5 from '../../assets/eden_crown/eden_crown_page_0005.jpg';
import projectPDF from '../../assets/eden_crown_brochure.pdf';

export default function EdenCrown() {
    const highlights = [
        { title: "Project Type", detail: "Premium Residential", icon: "🏠" },
        { title: "Location", detail: "Siliguri", icon: "📍" },
        { title: "Status", detail: "New Launch", icon: "🏗️" },
        { title: "Brochure", detail: "Available", icon: "📄" }
    ];

    const features = [
        "Architectural Excellence", "Premium Amenities",
        "Lush Green Surroundings", "Strategic Connectivity",
        "Elite Community", "24/7 Security"
    ];

    const projectEssentials = [
        { label: "Starting Price", value: "₹3,500/sq ft*", icon: <FiTag /> },
        { label: "Location", value: "Siliguri, India", icon: <FiMapPin /> },
        { label: "Project Area", value: "1500 - 2200 sqft", icon: <FiMaximize /> },
        { label: "Configuration", value: "3 BHK, 4 BHK", icon: <FiGrid /> }
    ];

    return (
        <div className="bg-[#fcf7f7] min-h-screen">
            <Helmet>
                <title>Eden Crown | Elite Residential Living | First Brick Properties</title>
                <meta name="description" content="Experience the pinnacle of luxury living at Eden Crown. A masterfully crafted residential project by First Brick Properties in the heart of Siliguri." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <img src={edenCrownCover} alt="Eden Crown Hero" className="w-full h-full object-cover" />
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
                            Eden <span className="text-secondary">Crown</span>
                        </h1>
                        <p className="text-white/90 text-xl font-medium max-w-xl leading-relaxed">
                            A crown jewel of architectural brilliance. Redefining the standards of elite residential living with unparalleled elegance.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a
                                href={projectPDF}
                                download="Eden-Crown-Brochure.pdf"
                                className="bg-[#5a4a42] hover:bg-[#4a3d37] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all group lg:text-base text-sm shadow-xl shadow-[#5a4a42]/20"
                            >
                                Get Brochure <FiDownload className="group-hover:translate-y-1 transition-transform" />
                            </a>
                            <a
                                href="https://wa.me/918371874510?text=I'm%20interested%20in%20Eden%20Crown%20project.%20Please%20provide%20more%20details."
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
            <section className="bg-white border-b border-[#5a4a42]/5 py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {projectEssentials.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary text-xl shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                                    {item.icon}
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#2d241f]/40 block">
                                        {item.label}
                                    </span>
                                    <span className="text-[#2d241f] font-bold text-base lg:text-lg leading-tight block">
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
                            className="bg-white p-10 rounded-3xl shadow-xl shadow-[#5a4a42]/5 border border-[#5a4a42]/5 text-center group hover:border-[#5a4a42]/20 transition-all"
                        >
                            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                            <div className="text-[#2d241f] font-display font-bold text-xl mb-1">{item.title}</div>
                            <div className="text-secondary text-[10px] uppercase font-black tracking-widest">{item.detail}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Lifestyle Section */}
            <section className="py-24 bg-[#faf4f0]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em]">Life at the top</div>
                            <h2 className="text-5xl font-display font-bold text-[#2d241f] leading-tight">Masterfully <br /> Crafted Living</h2>
                            <p className="text-[#2d241f]/70 text-lg leading-relaxed max-w-lg">
                                Eden Crown is more than just a residence; it's a statement of lifestyle. Every detail is meticulously planned to offer a harmonious blend of luxury and comfort.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <FiCheckCircle className="text-secondary" />
                                        <span className="text-[#2d241f] font-bold text-xs uppercase tracking-widest">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-[4rem] overflow-hidden shadow-2xl relative aspect-[4/3] order-1 lg:order-2 group">
                            <img src={edenCrownPage2} alt="Eden Crown Lifestyle" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2d241f]/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details / Plans Section */}
            <section className="py-24 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {[
                        { img: edenCrownPage3, alt: "Eden Crown Site Plan" },
                        { img: edenCrownPage4, alt: "Eden Crown Architecture" },
                        { img: edenCrownPage5, alt: "Eden Crown Living Space" }
                    ].map((item, i) => (
                        <a 
                            key={i}
                            href={item.img}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-[3/4] overflow-hidden rounded-[3rem] shadow-2xl border border-[#5a4a42]/5 cursor-pointer block"
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
                <div className="mt-32 pt-24 border-t border-[#5a4a42]/10 text-center space-y-10">
                    <div className="max-w-2xl mx-auto space-y-4">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-[#2d241f]">Wear Your <br /> Living Crown</h2>
                        <p className="text-[#2d241f]/60 font-medium italic">Your legacy begins at Eden Crown.</p>
                    </div>
                    <div className="max-w-xl mx-auto space-y-12 pb-20">
                        <ProjectEnquiry projectName="Eden Crown" accentColor="#5a4a42" />
                    </div>
                </div>
            </section>
        </div>
    );
}
