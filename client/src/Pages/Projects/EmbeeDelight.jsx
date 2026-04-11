import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectEnquiry from '../../Components/UI/ProjectEnquiry';
import brochurePdf from '../../assets/EMBEE_DELIGHT_BROCHURE.pdf';
import brochurePage1 from '../../assets/embee/EMBEE_DELIGHT_BROCHURE_page-0001.jpg';
import brochurePage3 from '../../assets/embee/EMBEE_DELIGHT_BROCHURE_page-0003.jpg';
import brochurePage6 from '../../assets/embee/EMBEE_DELIGHT_BROCHURE_page-0006.jpg';
import brochurePage8 from '../../assets/embee/EMBEE_DELIGHT_BROCHURE_page-0008.jpg';
import brochurePage10 from '../../assets/embee/EMBEE_DELIGHT_BROCHURE_page-0010.jpg';
import brochurePage12 from '../../assets/embee/EMBEE_DELIGHT_BROCHURE_page-0012.jpg';
import { FiMapPin, FiHome, FiMaximize, FiGrid, FiTag } from 'react-icons/fi';

export default function EmbeeDelight() {
    const amenities = [
        { title: "Swimming Pool", icon: "🏊" },
        { title: "Squash Court", icon: "🎾" },
        { title: "AC Community Hall", icon: "🏛️" },
        { title: "20,000 sqft Clubhouse", icon: "🏠" },
        { title: "Power Backup", icon: "⚡" },
        { title: "24/7 Security", icon: "🛡️" }
    ];
    const projectEssentials = [
        { label: "Starting Price", value: "₹31.91 Lacs*", icon: <FiTag /> },
        { label: "Location", value: "Siliguri, WB", icon: <FiMapPin /> },
        { label: "Project Area", value: "1100 - 1800 sqft", icon: <FiMaximize /> },
        { label: "Configuration", value: "1, 2, 3 & 4 BHK", icon: <FiGrid /> }
    ];

    return (
        <div className="bg-bg min-h-screen">
            <Helmet>
                <title>Embee Delight Luxury Residences | First Brick Properties</title>
                <meta name="description" content="Discover Embee Delight, a contemporary residential masterpiece by First Brick Properties. Luxury living redefined in the heart of Siliguri." />
            </Helmet>
            
            {/* Branded Header Segment (Solid) */}
            <div className="relative h-[65vh] flex items-center bg-primary overflow-hidden py-20">
                <div className="container px-6 relative z-10 animate-fadeIn">
                    <div className="max-w-4xl">
                        <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em] mb-6">
                            Featured Project
                        </div>
                        <h1 className="text-7xl md:text-9xl font-display font-bold text-white mb-8 leading-none">
                            Embee <br />
                            <span className="italic font-light text-secondary text-6xl md:text-8xl">Delight</span>.
                        </h1>
                        <div className="flex flex-wrap gap-8 text-white/80 font-medium">
                            <div className="flex items-center gap-3">
                                <span className="text-secondary text-xl">📍</span> Siliguri, India
                            </div>
                            <div className="flex items-center gap-3 border-l border-white/20 pl-8">
                                <span className="text-secondary text-xl">🏢</span> Residential Luxury
                            </div>
                            <div className="flex items-center gap-3 border-l border-white/20 pl-8">
                                <span className="text-secondary text-xl">✨</span> Rent/Resell
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-white/5 skew-x-[-15deg] translate-x-1/2"></div>
            </div>

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

            {/* Aerial Showcase Section */}
            <div className="relative group overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                <img 
                    src={brochurePage6} 
                    alt="Embee Delight Aerial View" 
                    className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute bottom-10 left-10 z-20">
                    <div className="bg-white/90 backdrop-blur-md p-8 border-l-4 border-secondary shadow-2xl skew-x-[-5deg]">
                        <h3 className="text-primary font-display font-bold text-3xl uppercase tracking-tighter skew-x-[5deg]">
                            Nestled in the <br />
                            <span className="text-secondary italic">Lap of Nature</span>
                        </h3>
                    </div>
                </div>
            </div>

            <div className="container px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                    
                    {/* Project Overview */}
                    <div className="lg:col-span-7 space-y-12 animate-fadeIn">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Architectural Excellence</h2>
                            <p className="text-muted text-lg leading-relaxed font-medium italic">
                                Embee Builders and Manakamna Builders are one of the leading and fastest growing realestate developers in entire North Bengal.
                            </p>
                            <p className="text-muted text-lg leading-relaxed font-medium">
                                We have begun developing a large multi-storied residential complex in North Bengal. 
                                After a record performance of its project Embee Fortune, we have now come up with a project named 
                                “EMBEE DELIGHT”, on Asian Highway, 50 meters from Embee Fortune.
                            </p>
                            <p className="text-muted text-lg leading-relaxed font-medium">
                                The project is a residential project which will be having 530 flats, consisting basically 3BHK (Spacious), 
                                3 BHK (Normal) and 2 BHK flats. Embee Delight, is a G+10 floor project, and consists of total 6 blocks. 
                                The project will be providing all kinds of Luxurious amenities including Swimming Pool, Squash Court, 
                                AC Community Hall and many more which will make living comfortable and fun. We have added 3BHK (Spacious) 
                                in addition to the existing sizes of flats available at Embee Fortune, to cater to certain customers who wanted bigger flats.
                            </p>
                            <p className="text-muted text-lg leading-relaxed font-medium">
                                The project is divided into 2 phases- Phase-I (170 flats) and Phase-II (360 flats). 
                                One of the blocks shall be a dedicated clubhouse of 20000 sqft, which will be one of biggest clubhouse of its kind in entire North Bengal.
                            </p>
                        </div>

                        {/* Regional Gateway Connectivity */}
                        <div className="pt-12 border-t border-primary/5">
                            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/50 mb-10">Regional Connectivity</h3>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                {[
                                    { place: "Mirik", dist: "47 KM" },
                                    { place: "Darjeeling", dist: "64 KM" },
                                    { place: "Kalimpong", dist: "68 KM" },
                                    { place: "Gangtok", dist: "116 KM" },
                                    { place: "Dooars", dist: "67 KM" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-4 rounded-xl border border-primary/5 text-center shadow-sm">
                                        <div className="text-secondary font-bold text-lg mb-1">{item.dist}</div>
                                        <div className="text-primary font-bold text-[10px] uppercase tracking-wider">{item.place}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-primary/60 text-sm font-medium italic">
                                *Siliguri: The Gateway of North East India - Flanked by beautiful destinations with unique charm.
                            </p>
                        </div>

                        {/* Amenities Grid */}
                        <div className="pt-12 border-t border-primary/5">
                            <div className="flex justify-between items-end mb-10">
                                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/50">Premium Amenities</h3>
                                <span className="text-secondary font-display italic text-xl">World-Class Facilities</span>
                            </div>
                            
                            {/* Visual Amenities Highlight */}
                            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl relative group">
                                <img 
                                    src={brochurePage8} 
                                    alt="Outdoor Amenities" 
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <p className="text-white text-sm font-medium">
                                        Cricket Pitch, Kids Play Area, and Multipurpose Court - Designed for an active lifestyle.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                                {amenities.map((item, i) => (
                                    <div key={i} className="flex flex-col items-center text-center group cursor-default">
                                        <div className="w-16 h-16 bg-white border border-primary/5 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-4 group-hover:-translate-y-2">
                                            {item.icon}
                                        </div>
                                        <span className="text-primary font-bold text-xs uppercase tracking-widest">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / CTA */}
                    <div className="lg:col-span-5 space-y-10 animate-fadeIn delay-300">
                        
                        {/* Vertical Elevation Showcase */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl relative group aspect-[4/5]">
                            <img 
                                src={brochurePage10} 
                                alt="Building Elevation" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary p-8">
                                <span className="text-secondary font-display italic text-xl">Architectural Mastery</span>
                                <h4 className="text-white font-bold text-sm uppercase tracking-widest mt-1">Premium G+10 Structure</h4>
                            </div>
                        </div>

                        {/* Key Highlights Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: "✅", title: "RERA Approved", subtitle: "HIRA/P/DAR/2019/00010" },
                                { icon: "🏘️", title: "Gated Community", subtitle: "Secure Environment" },
                                { icon: "🧭", title: "Vaastu Compliant", subtitle: "Harmonious Living" },
                                { icon: "🛡️", title: "24/7 Security", subtitle: "Multi-Tier Protection" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-all">
                                    <div className="text-2xl mb-3">{item.icon}</div>
                                    <div className="text-primary font-bold text-[10px] uppercase tracking-widest mb-1">{item.title}</div>
                                    <div className="text-primary/40 text-[9px] font-bold uppercase">{item.subtitle}</div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Download Portal */}
                        <div className="bg-primary p-12 rounded-2xl text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-9xl font-display font-black leading-none">PDF</span>
                            </div>
                            
                            <h3 className="text-3xl font-display font-bold mb-6 relative z-10">Project <br />Brochure</h3>
                            <p className="text-slate-300 mb-10 font-medium relative z-10">
                                Download the comprehensive technical document containing floor plans, structural details, and exclusive amenities list.
                            </p>
                            
                            <a 
                                href={brochurePdf} 
                                download="EMBEE_DELIGHT_BROCHURE.pdf"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full bg-secondary text-white font-display font-bold uppercase tracking-[0.3em] py-5 rounded-xl hover:bg-white hover:text-primary transition-all duration-500 shadow-xl relative z-10"
                            >
                                Download PDF
                            </a>
                        </div>

                        {/* Project Details */}
                        <div className="bg-white p-10 rounded-2xl border border-primary/5 shadow-xl space-y-8">
                            <h4 className="text-lg font-display font-bold text-primary border-b border-primary/5 pb-4">Project Registry</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-1 border-b border-primary/5">
                                    <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">Developer</span>
                                    <span className="text-sm font-bold text-primary">Embee Group</span>
                                </div>
                                <div className="flex justify-between items-center py-1 border-b border-primary/5">
                                    <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">Type</span>
                                    <span className="text-sm font-bold text-primary">Residential</span>
                                </div>
                                <div className="flex justify-between items-center py-1 border-b border-primary/5">
                                    <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">Location</span>
                                    <span className="text-sm font-bold text-primary">Siliguri, India</span>
                                </div>
                                <div className="flex justify-between items-center py-1 border-b border-primary/5">
                                    <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">Status</span>
                                    <span className="text-sm font-bold text-secondary">Rent/Resell</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Enquiry Section */}
                        <ProjectEnquiry projectName="Embee Delight" accentColor="#f7941d" />

                    </div>
                </div>

                {/* Visual Brochure Journey */}
                <div className="mt-32 pt-24 border-t border-primary/10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">Visual Brochure Journey</h2>
                        <p className="text-muted font-medium">
                            Experience the complete vision of Embee Delight through a curated selection of our official property brochure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[brochurePage1, brochurePage10, brochurePage12].map((img, i) => (
                            <a 
                                key={i} 
                                href={img}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer block"
                            >
                                <img 
                                    src={img} 
                                    alt={`Brochure Page ${i+1}`} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <span className="text-white font-bold text-xs uppercase tracking-[0.2em] border border-white/40 px-6 py-3 rounded-full backdrop-blur-sm">
                                        View Detail
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-primary/40 text-sm font-bold uppercase tracking-[0.4em] mb-8">Official Documentation</p>
                        <a 
                            href={brochurePdf} 
                            download="EMBEE_DELIGHT_BROCHURE.pdf"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-secondary transition-all shadow-xl hover:-translate-y-1"
                        >
                            <span>Download Full PDF Brochure</span>
                            <span className="text-xl">📄</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
