import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectEnquiry from '../../Components/UI/ProjectEnquiry';
import { motion } from 'framer-motion';
import { FiDownload, FiMapPin, FiCheckCircle, FiClock, FiHome, FiMaximize, FiGrid, FiTag } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// Asset Imports
import nh10Hero from '../../assets/nh10/A_1_FINAL02.png';
import nh10Lobby from '../../assets/nh10/LOBBY_01_FINAL02.png';
import nh10Corridor from '../../assets/nh10/CORRIDOR_FINAL.png';
import nh10Elevation from '../../assets/nh10/E4_FINAL02.jpg';

export default function NH10() {
    const highlights = [
        { title: "Project Type", detail: "Commercial Hub", icon: "🏢" },
        { title: "Status", detail: "New Launch", icon: "🚀" },
        { title: "Design", detail: "Modern Glass", icon: "🏛️" },
        { title: "Location", detail: "Siliguri, India", icon: "📍" }
    ];

    const keyFeatures = [
        "Premium Corporate Suites", "Grand Double-Height Lobby", 
        "Advanced Security Systems", "High-Speed Elevators", 
        "Modern Common Areas", "Strategic Business Location"
    ];

    const projectEssentials = [
        { label: "Starting Price", value: "₹18.00 Lacs*", icon: <FiTag /> },
        { label: "Location", value: "Siliguri, India", icon: <FiMapPin /> },
        { label: "Project Area", value: "Commercial Hub", icon: <FiMaximize /> },
        { label: "Configuration", value: "Corporate Suites", icon: <FiGrid /> }
    ];

    return (
        <div className="bg-[#f8fafb] min-h-screen">
            <Helmet>
                <title>NH10 | The Future of Commercial Excellence | First Brick Properties</title>
                <meta name="description" content="Discover NH10, a landmark commercial project by First Brick Properties. Redefining modern business spaces with state-of-the-art infrastructure." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center overflow-hidden">
                <motion.div 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <img src={nh10Hero} alt="NH10 Hero" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
                </motion.div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-3xl space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                            <FiMapPin /> Strategic Business Hub, Siliguri
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-tight">
                            NH<span className="text-secondary">10</span>
                        </h1>
                        <p className="text-white/90 text-xl font-medium max-w-xl leading-relaxed">
                            A Futuristic Commercial Landmark. Experience a workspace that goes beyond boundaries in our meticulously designed corporate sanctuary.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <div 
                                className="bg-slate-500/50 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 lg:text-base text-sm border border-white/20 cursor-not-allowed opacity-80"
                            >
                                <FiClock /> Brochure Coming Soon
                            </div>
                            <a 
                                href="https://wa.me/918371874510?text=I'm%20interested%20in%20the%20NH10%20project.%20Please%20provide%20more%20details." 
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
                            className="bg-white p-10 rounded-3xl shadow-xl shadow-primary/5 border border-primary/5 text-center group hover:border-secondary/20 transition-all"
                        >
                            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                            <div className="text-primary font-display font-bold text-xl mb-1">{item.title}</div>
                            <div className="text-secondary text-[10px] uppercase font-black tracking-widest">{item.detail}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Design & Concept Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em]">Modern Infrastructure</div>
                            <h2 className="text-5xl font-display font-bold text-primary leading-tight">Elevating Business <br /> Expectations</h2>
                            <p className="text-muted text-lg leading-relaxed max-w-lg">
                                NH10 is designed to fulfill the aspirations of forward-thinking businesses. Every square foot of this magnificent work of art is crafted to enhance productivity and project an image of global excellence.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {keyFeatures.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <FiCheckCircle className="text-secondary" />
                                        <span className="text-primary font-bold text-xs uppercase tracking-widest">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-[4rem] overflow-hidden shadow-2xl relative aspect-[4/3] order-1 lg:order-2 group">
                            <img src={nh10Lobby} alt="Lobby" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detail Snapshot Section */}
            <section className="py-24 container mx-auto px-6">
                <div className="bg-primary rounded-[4rem] overflow-hidden shadow-2xl relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="lg:col-span-7 relative h-[600px] group">
                            <img src={nh10Corridor} alt="Corridor" className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute top-10 left-10">
                                <div className="bg-secondary text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">Grand Corridor</div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 p-12 md:p-20 flex flex-col justify-center space-y-8 bg-primary text-white">
                            <h3 className="text-4xl font-display font-bold">Uncompromising <br />Business Environment</h3>
                            <p className="text-white/60 leading-relaxed font-medium">
                                With NH10, we are creating an ecosystem where networking meets privacy. It's more than just a building; it's a statement of ambition and high-impact corporate culture.
                            </p>
                            <div className="space-y-4 pt-4 border-t border-white/10">
                                <div className="flex justify-between">
                                    <span className="text-[10px] uppercase font-bold text-neutral">Corporate Suites</span>
                                    <span className="text-sm font-bold">Premium Availability</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[10px] uppercase font-bold text-neutral">Connectivity</span>
                                    <span className="text-sm font-bold">High-Speed Wired Hub</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[10px] uppercase font-bold text-neutral">Security</span>
                                    <span className="text-sm font-bold">24/7 Advanced Shield</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-32 pt-24 border-t border-primary/10 text-center space-y-10">
                    <div className="max-w-2xl mx-auto space-y-4">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-primary">Be Part of the <br /> Future Landmark</h2>
                        <p className="text-muted font-medium italic">Join the elite corporate community at NH10 today.</p>
                    </div>
                    <div className="max-w-xl mx-auto space-y-12 pb-20">
                        <ProjectEnquiry projectName="NH10" accentColor="#C17053" />
                    </div>
                </div>
            </section>
        </div>
    );
}
