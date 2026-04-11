import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectEnquiry from '../../Components/UI/ProjectEnquiry';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiDownload, FiMapPin, FiCheckCircle, FiHome, FiMaximize, FiGrid, FiTag } from 'react-icons/fi';
import rightAngleHero from '../../assets/RIGHT ANGLE BROCHURE/RIGHT ANGLE BROCHURE V2_page-0005.jpg';
import iconicView from '../../assets/RIGHT ANGLE BROCHURE/RIGHT ANGLE BROCHURE V2_page-0007.jpg';
import drivewayView from '../../assets/RIGHT ANGLE BROCHURE/RIGHT ANGLE BROCHURE V2_page-0011.jpg';
import projectPDF from '../../assets/RIGHT ANGLE BROCHURE V2.pdf';
import floorPlansPDF from '../../assets/Right Angle_Floor Plan_3rd Nov.pdf';

export default function RightAngle() {
    const highlights = [
        { title: "Retail", detail: "Flagship Stores", icon: "🛍️" },
        { title: "Work", detail: "Premium Offices", icon: "💼" },
        { title: "Leisure", detail: "Elite Dining", icon: "🍽️" },
        { title: "Visibility", detail: "Highway Prime", icon: "✨" }
    ];

    const retailFeatures = [
        "Double-Height Dining Spaces", "Flexible Unit Sizes", 
        "Prime Highway Visibility", "Landscaped Outer-Plaza", 
        "Steady Township Footfall", "Premium Signage Potential"
    ];

    const workspaceFeatures = [
        "Modern Glass Architecture", "Ample Natural Light",
        "Vast Parking Provision", "High-Speed Vertical Access",
        "Strategic Business Location", "Integrated Security Systems"
    ];

    const projectEssentials = [
        { label: "Starting Price", value: "₹95.00 Lacs*", icon: <FiTag /> },
        { label: "Location", value: "Siliguri, India", icon: <FiMapPin /> },
        { label: "Project Area", value: "Flexible Retail Space", icon: <FiMaximize /> },
        { label: "Configuration", value: "Commercial / Retail", icon: <FiGrid /> }
    ];

    return (
        <div className="bg-[#fcfbff] min-h-screen">
            <Helmet>
                <title>Right Angle | Strategic Commercial Spaces | First Brick Properties</title>
                <meta name="description" content="Right Angle by First Brick Properties: Innovative commercial spaces designed for the modern business elite." />
            </Helmet>
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center overflow-hidden">
                <motion.div 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <img src={rightAngleHero} alt="Right Angle Hero" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5c2d91]/90 via-[#5c2d91]/40 to-transparent"></div>
                </motion.div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-3xl space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#f7941d] px-4 py-2 rounded-full text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                            <FiMapPin /> Utsodhaara Teesta Township, Siliguri
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-tight">
                            RIGHT <span className="text-[#f7941d]">ANGLE</span>
                        </h1>
                        <p className="text-white/80 text-xl font-medium max-w-xl leading-relaxed">
                            The Perfect Intersection of Ambition and Lifestyle. A landmark destination for Retail, Work, and Leisure.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a 
                                href={projectPDF} 
                                download="Right-Angle-Brochure.pdf"
                                className="bg-[#f7941d] hover:bg-[#e68a1b] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all group lg:text-base text-sm"
                            >
                                Get Brochure <FiDownload className="group-hover:translate-y-1 transition-transform" />
                            </a>
                            <a 
                                href={floorPlansPDF}
                                download="Right-Angle-Floor-Plans.pdf"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold transition-all lg:text-base text-sm"
                            >
                                View Layouts
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Project Essentials Section */}
            <section className="bg-white border-b border-[#5c2d91]/5 py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {projectEssentials.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-[#f7941d]/10 flex items-center justify-center text-[#f7941d] text-xl shrink-0 group-hover:bg-[#f7941d] group-hover:text-white transition-all duration-500">
                                    {item.icon}
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#5c2d91]/40 block">
                                        {item.label}
                                    </span>
                                    <span className="text-[#5c2d91] font-bold text-base lg:text-lg leading-tight block">
                                        {item.value}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 container mx-auto px-6">
                <div className="bg-white rounded-[4rem] shadow-2xl shadow-[#5c2d91]/5 overflow-hidden border border-[#5c2d91]/5">
                    <div className="p-8 md:p-20">
                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-32 border-b border-[#5c2d91]/10 pb-20">
                            {highlights.map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                                    <div className="text-[#5c2d91] font-display font-bold text-2xl mb-1">{item.title}</div>
                                    <div className="text-[#f7941d] text-[10px] uppercase font-black tracking-widest">{item.detail}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Retail & Driveway Section */}
                        <div className="space-y-32">
                            <section className="animate-fadeIn">
                                <div className="text-[#f7941d] font-bold text-[10px] uppercase tracking-[0.4em] mb-6 text-center lg:text-left text-orange-500">Retail Excellence</div>
                                <h2 className="text-4xl font-display font-bold text-[#5c2d91] mb-12 text-center lg:text-left">Putting Brands in the Spotlight</h2>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                    <div className="rounded-[3rem] overflow-hidden shadow-2xl relative aspect-[16/10] group">
                                        <img src={drivewayView} alt="Retail View" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#5c2d91]/20 to-transparent"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {retailFeatures.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-[#5c2d91]/5 border border-[#5c2d91]/5 hover:bg-[#5c2d91]/10 transition-colors group">
                                                <FiCheckCircle className="text-[#f7941d] shrink-0 mt-1" />
                                                <span className="text-[#5c2d91] font-bold text-xs uppercase tracking-widest leading-relaxed">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Workspace Section */}
                            <section className="bg-[#5c2d91] text-white p-12 md:p-20 rounded-[4rem] relative overflow-hidden group">
                                <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:scale-105 transition-transform duration-[3s]">
                                    <img src={rightAngleHero} alt="Office View" className="w-full h-full object-cover" />
                                </div>
                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                    <div className="space-y-8">
                                        <div className="text-[#f7941d] font-bold text-[10px] uppercase tracking-[0.4em]">Integrated Workspaces</div>
                                        <h2 className="text-5xl font-display font-bold leading-tight">Where Ambition <br /> Meets Infrastructure</h2>
                                        <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                                            Designed for the modern professional, our workspaces offer a seamless blend of functionality and aesthetics, ensuring your business stays at the forefront of Siliguri's growth.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        {workspaceFeatures.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-4 border-b border-white/10 pb-4">
                                                <div className="w-2 h-2 rounded-full bg-[#f7941d]"></div>
                                                <span className="font-bold text-sm tracking-wide opacity-90">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="rounded-[3rem] overflow-hidden shadow-2xl relative aspect-square group">
                                    <img src={iconicView} alt="Branding" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#5c2d91]/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 text-white font-display font-bold text-2xl uppercase tracking-widest">Iconic Presence</div>
                                </div>
                                <div className="bg-[#f7941d]/5 p-12 md:p-20 rounded-[3rem] flex flex-col justify-center space-y-8 border border-[#f7941d]/10">
                                    <h3 className="text-3xl font-display font-bold text-[#5c2d91]">Strategic Connectivity</h3>
                                    <div className="space-y-6">
                                        {[
                                            { label: "Prime Site", val: "Naukaghat Intersection" },
                                            { label: "Visibility", val: "Asian Highway-02 Frontage" },
                                            { label: "Connectivity", val: "Minutes from Major Arteries" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex flex-col">
                                                <span className="text-[#f7941d] text-[10px] uppercase font-black tracking-tighter">{item.label}</span>
                                                <span className="text-[#5c2d91] font-bold text-xl">{item.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="mt-24 max-w-xl mx-auto space-y-12 pb-20">
                    <p className="text-[#5c2d91]/60 font-medium text-center">Ready to elevate your business presence at Siliguri's most strategic commercial hub?</p>
                    
                    <ProjectEnquiry projectName="Right Angle" accentColor="#f7941d" />
                </div>
            </section>
        </div>
    );
}
