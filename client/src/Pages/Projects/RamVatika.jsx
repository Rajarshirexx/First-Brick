import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectEnquiry from '../../Components/UI/ProjectEnquiry';
import { motion } from 'framer-motion';
import { FiDownload, FiMapPin, FiCheckCircle, FiHome, FiMaximize, FiGrid, FiTag } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// Asset Imports
import ramVatikaCover from '../../assets/ramvatika/Ram Vatika_page-0001.jpg';
import ramVatikaPage2 from '../../assets/ramvatika/Ram Vatika_page-0002.jpg';
import ramVatikaPage3 from '../../assets/ramvatika/Ram Vatika_page-0003.jpg';
import projectPDF from '../../assets/Ram Vatika.pdf';

export default function RamVatika() {
    const highlights = [
        { title: "Project Type", detail: "Residential", icon: "🏠" },
        { title: "Location", detail: "Siliguri", icon: "📍" },
        { title: "Status", detail: "Ongoing", icon: "🏗️" },
        { title: "Brochure", detail: "Available", icon: "📄" }
    ];

    const features = [
        "Modern Architecture", "Gated Community", 
        "Lifestyle Amenities", "Prime Location", 
        "Secure Environment", "Excellent Connectivity"
    ];

    const projectEssentials = [
        { label: "Starting Price", value: "₹45.00 Lacs*", icon: <FiTag /> },
        { label: "Location", value: "Siliguri, India", icon: <FiMapPin /> },
        { label: "Project Area", value: "1100 - 1500 sqft", icon: <FiMaximize /> },
        { label: "Configuration", value: "2 BHK, 3 BHK", icon: <FiGrid /> }
    ];

    return (
        <div className="bg-[#fcfcf7] min-h-screen">
            <Helmet>
                <title>Ram Vatika | Premium Residential Space | First Brick Properties</title>
                <meta name="description" content="Discover Ram Vatika, a premier residential project by First Brick Properties. Modern living spaces designed for comfort and elegance." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center overflow-hidden">
                <motion.div 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <img src={ramVatikaCover} alt="Ram Vatika Hero" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
                </motion.div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-3xl space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#d48c71] px-4 py-2 rounded-full text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                            <FiMapPin /> Siliguri, West Bengal
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-tight">
                            Ram <span className="text-[#d48c71]">Vatika</span>
                        </h1>
                        <p className="text-white/90 text-xl font-medium max-w-xl leading-relaxed">
                            Discover the perfect blend of modern comfort and traditional serenity in our latest residential masterpiece.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a 
                                href={projectPDF} 
                                download="Ram-Vatika-Brochure.pdf"
                                className="bg-[#4a7c7c] hover:bg-[#3a6363] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all group lg:text-base text-sm shadow-xl shadow-[#4a7c7c]/20"
                            >
                                Get Brochure <FiDownload className="group-hover:translate-y-1 transition-transform" />
                            </a>
                            <a 
                                href="https://wa.me/918371874510?text=I'm%20interested%20in%20Ram%20Vatika%20project.%20Please%20provide%20more%20details." 
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
            <section className="bg-white border-b border-[#4a7c7c]/5 py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {projectEssentials.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary text-xl shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                                    {item.icon}
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#2d3e3e]/40 block">
                                        {item.label}
                                    </span>
                                    <span className="text-[#2d3e3e] font-bold text-base lg:text-lg leading-tight block">
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
                            className="bg-white p-10 rounded-3xl shadow-xl shadow-[#4a7c7c]/5 border border-[#4a7c7c]/5 text-center group hover:border-[#4a7c7c]/20 transition-all"
                        >
                            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                            <div className="text-[#2d3e3e] font-display font-bold text-xl mb-1">{item.title}</div>
                            <div className="text-[#d48c71] text-[10px] uppercase font-black tracking-widest">{item.detail}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Gallery / Page 2 Section */}
            <section className="py-24 bg-[#f5f5dc]/50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <div className="text-[#4a7c7c] font-bold text-[10px] uppercase tracking-[0.4em]">Project Highlights</div>
                            <h2 className="text-5xl font-display font-bold text-[#2d3e3e] leading-tight">Elevated Living <br /> Experience</h2>
                            <p className="text-[#2d3e3e]/70 text-lg leading-relaxed max-w-lg">
                                Ram Vatika offers an exquisite living environment that combines modern design with practical functionality. Every corner is crafted to provide a sense of space and tranquility.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <FiCheckCircle className="text-[#d48c71]" />
                                        <span className="text-[#2d3e3e] font-bold text-xs uppercase tracking-widest">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-[4rem] overflow-hidden shadow-2xl relative aspect-[4/3] order-1 lg:order-2 group">
                            <img src={ramVatikaPage2} alt="Ram Vatika Detail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2d3e3e]/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture / Page 3 Section */}
            <section className="py-24 container mx-auto px-6">
                <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-[#4a7c7c]/5">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="lg:col-span-12 relative h-[600px] group">
                            <img src={ramVatikaPage3} alt="Ram Vatika Perspective" className="w-full h-full object-contain bg-slate-50 transition-transform duration-1000 group-hover:scale-105" />
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-32 pt-24 border-t border-[#4a7c7c]/10 text-center space-y-10">
                    <div className="max-w-2xl mx-auto space-y-4">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-[#2d3e3e]">Connect With <br /> Excellence</h2>
                        <p className="text-[#2d3e3e]/60 font-medium italic">Your new home awaits at Ram Vatika.</p>
                    </div>
                    <div className="max-w-xl mx-auto space-y-12 pb-20">
                        <ProjectEnquiry projectName="Ram Vatika" accentColor="#4a7c7c" />
                    </div>
                </div>
            </section>
        </div>
    );
}
