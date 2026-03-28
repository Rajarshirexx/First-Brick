import React from 'react';
import brochurePdf from '../../assets/EMBEE_DELIGHT_BROCHURE.pdf';
import projectHero from '../../assets/embee.png';
import projectDetail1 from '../../assets/img2.jpg';
import projectDetail2 from '../../assets/img5.jpg';

export default function EmbeeDelight() {
    const amenities = [
        { title: "Power Backup", icon: "⚡" },
        { title: "24/7 Security", icon: "🛡️" },
        { title: "Elevated Living", icon: "🏢" },
        { title: "Landscaped Gardens", icon: "🌳" },
        { title: "Premium Fittings", icon: "💎" },
        { title: "Parking Space", icon: "🚗" }
    ];

    return (
        <div className="bg-bg min-h-screen">
            
            {/* Hero Segment */}
            <div className="relative h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={projectHero} 
                        alt="Embee Delight Hero" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                
                <div className="container px-6 relative z-10 animate-fadeIn">
                    <div className="max-w-3xl">
                        <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em] mb-4">
                            Featured Project
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-none">
                            Embee <br />
                            <span className="italic font-light text-secondary text-5xl md:text-7xl">Delight</span>.
                        </h1>
                        <div className="flex flex-wrap gap-6 mb-8 text-white/80 font-medium">
                            <div className="flex items-center gap-2">
                                <span className="text-secondary">📍</span> Siliguri, India
                            </div>
                            <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                                <span className="text-secondary">🏢</span> Residential Luxury
                            </div>
                            <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                                <span className="text-secondary">✨</span> Ready to Move
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                    
                    {/* Project Overview */}
                    <div className="lg:col-span-7 space-y-12 animate-fadeIn">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Architectural Excellence</h2>
                            <p className="text-muted text-lg leading-relaxed font-medium">
                                Embee Delight stands as a beacon of modern residential architecture in Siliguri. 
                                Designed for those who seek a blend of comfort and class, this project offers 
                                meticulously crafted living spaces that redefine urban living standards.
                            </p>
                            <p className="text-muted text-lg leading-relaxed font-medium">
                                With a focus on natural light, cross-ventilation, and premium material selection, 
                                every corner of Embee Delight reflects the FirstBrick commitment to quality 
                                and excellence in property marketing and development.
                            </p>
                        </div>

                        {/* Amenities Grid */}
                        <div className="pt-12 border-t border-primary/5">
                            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/50 mb-10">Premium Amenities</h3>
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
                                    <span className="text-sm font-bold text-secondary">Ready to Move</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Secondary Imagery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-32">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl relative group">
                        <img 
                            src={projectDetail1} 
                            alt="Interior Detail" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                    </div>
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl relative group">
                        <img 
                            src={projectDetail2} 
                            alt="Landscape View" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}
