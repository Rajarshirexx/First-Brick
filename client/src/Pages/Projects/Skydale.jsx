import React from 'react';
import brochurePdf from '../../assets/SKYDALE E-BROCHURE REVISED.pdf';
import brochurePage1 from '../../assets/skydale/SKYDALE E-BROCHURE REVISED_page-0001.jpg';
import brochurePage2 from '../../assets/skydale/SKYDALE E-BROCHURE REVISED_page-0002.jpg';
import brochurePage3 from '../../assets/skydale/SKYDALE E-BROCHURE REVISED_page-0003.jpg';
import brochurePage6 from '../../assets/skydale/SKYDALE E-BROCHURE REVISED_page-0006.jpg';
import brochurePage10 from '../../assets/skydale/SKYDALE E-BROCHURE REVISED_page-0010.jpg';

export default function Skydale() {
    const amenities = [
        { icon: "🏊‍♂️", title: "Swimming Pool" },
        { icon: "🏸", title: "Sports Arcade" },
        { icon: "🏢", title: "Elite Clubhouse" },
        { icon: "🧘‍♂️", title: "Yoga Deck" },
        { icon: "🎭", title: "Indoor Games" },
        { icon: "🌳", title: "Landscaped Garden" }
    ];

    return (
        <div className="bg-[#f8fafc] min-h-screen font-sans text-slate-900 selection:bg-[#083333] selection:text-white">
            
            {/* Branded Hero Header */}
            <div className="relative h-[65vh] bg-[#083333] flex flex-col justify-center items-center text-center px-6 overflow-hidden py-20">
                <div className="relative z-10 animate-fadeIn">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-white/30"></div>
                        <span className="text-white/60 uppercase tracking-[0.6em] text-[10px] font-bold">New Landmark</span>
                        <div className="h-[1px] w-12 bg-white/30"></div>
                    </div>
                    
                    <h1 className="text-white text-6xl md:text-9xl font-display font-medium tracking-tighter mb-6 leading-none">
                        Sky<span className="italic font-light opacity-80">dale</span>
                    </h1>
                    
                    <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-2xl font-light leading-relaxed tracking-wide">
                        Live on <span className="text-secondary italic font-display">Cloud 9</span>. Siliguri's tallest residential towers representing the pinnacle of urban luxury.
                    </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-white/5 skew-x-[-15deg] translate-x-1/2"></div>
            </div>

            {/* Architectural Showcase Section */}
            <div className="relative group overflow-hidden">
                <div className="absolute inset-0 bg-[#083333]/10 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                <img 
                    src={brochurePage2} 
                    alt="Skydale Towers Elevation" 
                    className="w-full h-auto object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute bottom-10 left-10 z-20">
                    <div className="bg-white/90 backdrop-blur-md p-8 border-l-4 border-secondary shadow-2xl skew-x-[-5deg]">
                        <h3 className="text-[#083333] font-display font-bold text-3xl uppercase tracking-tighter skew-x-[5deg]">
                            Siliguri's Tallest <br />
                            <span className="text-secondary italic text-2xl">Residential Icon</span>
                        </h3>
                    </div>
                </div>
            </div>

            <div className="container px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                    
                    {/* Left Column - Main Narrative */}
                    <div className="lg:col-span-7 space-y-24">
                        
                        {/* Project Narrative */}
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#083333]/40">Visionary Architecture</h2>
                                <h3 className="text-4xl md:text-6xl font-display font-bold text-[#083333] leading-tight">Modern & <br />Luxurious Living</h3>
                            </div>
                            
                            <p className="text-muted text-xl leading-relaxed font-light">
                                SKYDALE is a premier residential complex developed with a unique blend of urban living, healthy lifestyle, and natural beauty. 
                                Designed to be the standard for vertical luxury in Siliguri, it offers an unparalleled living experience opposite City Centre Mall.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-y border-[#083333]/5">
                                <div className="space-y-4">
                                    <div className="text-secondary font-display italic text-3xl">Elite Privacy</div>
                                    <p className="text-muted text-sm leading-relaxed">
                                        Only **4 exclusive units per floor** ensure maximum privacy and cross-ventilation, with 3-side open flats for natural light.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="text-secondary font-display italic text-3xl">Grand Volume</div>
                                    <p className="text-muted text-sm leading-relaxed">
                                        Experience sheer scale with a **32,000 sqft Clubhouse** and a **16,000 sqft Sports Arcade** dedicated to your leisure.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Location / Siteplan Highlight */}
                        <div className="pt-12 border-t border-[#083333]/5">
                            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#083333]/50 mb-10">Prime Connectivity</h3>
                            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl relative">
                                <img src={brochurePage6} alt="Skydale Siteplan" className="w-full h-auto object-cover" />
                                <div className="absolute top-6 left-6">
                                    <div className="bg-[#083333] text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase shadow-xl">
                                        80 FT Wide Main Road
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { label: "Location", val: "Opposite City Centre" },
                                    { label: "Ceiling Height", val: "11 ft 8 inches" },
                                    { label: "Security", val: "Gated Community" },
                                    { label: "Philosophy", val: "Vastu Compliant" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-[#083333]/5 text-center shadow-sm">
                                        <div className="text-[#083333] font-bold text-sm mb-1">{item.val}</div>
                                        <div className="text-primary/40 font-bold text-[9px] uppercase tracking-wider">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Amenities Grid */}
                        <div className="pt-12 border-t border-[#083333]/5">
                            <div className="flex justify-between items-end mb-12">
                                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#083333]/50">World-Class Assets</h3>
                                <span className="text-secondary font-display italic text-xl">Cloud 9 Amenities</span>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                                {amenities.map((item, i) => (
                                    <div key={i} className="flex flex-col items-center text-center group cursor-default">
                                        <div className="w-16 h-16 bg-white border border-[#083333]/5 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:bg-[#083333] group-hover:text-white transition-all duration-500 mb-4 group-hover:-translate-y-2">
                                            {item.icon}
                                        </div>
                                        <span className="text-[#083333] font-bold text-xs uppercase tracking-widest">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sidebar Registry */}
                    <div className="lg:col-span-5 space-y-10 animate-fadeIn delay-300">
                        
                        {/* Sidebar Visual Anchor */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl relative group aspect-[4/5]">
                            <img 
                                src={brochurePage10} 
                                alt="Sample Flat" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#083333] p-8">
                                <span className="text-secondary font-display italic text-xl">Elite Interiors</span>
                                <h4 className="text-white font-bold text-sm uppercase tracking-widest mt-1">G+22 Floor Mastery</h4>
                            </div>
                        </div>

                        {/* Project Registry */}
                        <div className="bg-white p-10 rounded-2xl border border-[#083333]/5 shadow-xl space-y-8">
                            <h4 className="text-lg font-display font-bold text-[#083333] border-b border-[#083333]/5 pb-4">Project Registry</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-1 border-b border-[#083333]/5">
                                    <span className="text-xs font-bold text-[#083333]/40 uppercase tracking-widest">Developer</span>
                                    <span className="text-sm font-bold text-[#083333]">First Brick</span>
                                </div>
                                <div className="flex justify-between items-center py-1 border-b border-[#083333]/5">
                                    <span className="text-xs font-bold text-[#083333]/40 uppercase tracking-widest">Total Units</span>
                                    <span className="text-sm font-bold text-[#083333]">224 Gold Class</span>
                                </div>
                                <div className="flex justify-between items-center py-1 border-b border-[#083333]/5">
                                    <span className="text-xs font-bold text-[#083333]/40 uppercase tracking-widest">Type</span>
                                    <span className="text-sm font-bold text-[#083333]">Luxury Residential</span>
                                </div>
                                <div className="flex justify-between items-center py-1 border-b border-[#083333]/5">
                                    <span className="text-xs font-bold text-[#083333]/40 uppercase tracking-widest">Location</span>
                                    <span className="text-sm font-bold text-[#083333]">Uttorayon, Siliguri</span>
                                </div>
                                <div className="flex justify-between items-center py-1 border-b border-[#083333]/5">
                                    <span className="text-xs font-bold text-[#083333]/40 uppercase tracking-widest">Status</span>
                                    <span className="text-sm font-bold text-secondary">New Launch</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Portal */}
                        <div className="bg-[#083333] p-10 rounded-2xl text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-9xl font-display font-black leading-none">PDF</span>
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-4">Brochure</h3>
                            <p className="text-white/60 mb-8 text-sm">Download the technical blueprint of Skydale.</p>
                            <a 
                                href={brochurePdf}
                                download="SKYDALE_E_BROCHURE.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-secondary w-full py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-[#083333] transition-all duration-300 shadow-lg"
                            >
                                Download E-Brochure
                            </a>
                        </div>
                    </div>
                </div>

                {/* Final Visual Journey */}
                <div className="mt-32 pt-24 border-t border-[#083333]/10">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-7xl font-display font-bold text-[#083333] mb-6 tracking-tighter italic">The Skydale Life</h2>
                        <p className="text-muted font-medium">A visual overview of Siliguri's most prestigious elevation.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[brochurePage1, brochurePage3, brochurePage6].map((img, i) => (
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
                                <div className="absolute inset-0 bg-[#083333]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <span className="text-white font-bold text-xs uppercase tracking-[0.2em] border border-white/40 px-6 py-3 rounded-full backdrop-blur-sm">
                                        View Detail
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
