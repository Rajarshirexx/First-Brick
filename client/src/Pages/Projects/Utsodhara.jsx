import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectEnquiry from '../../Components/UI/ProjectEnquiry';
import { Link } from 'react-router-dom';

// Asset Imports
import utsodharaHero from '../../assets/utsodhara/Utsodhaara-Brochure_page-0008.jpg';
import utsodharaLogo from '../../assets/utsodhara/Utsodhaara-Brochure_page-0001.jpg';
import regalDriveway from '../../assets/utsodhara/Utsodhaara-Brochure_page-0010.jpg';
import utsodharaNight from '../../assets/utsodhara/Utsodhaara-Brochure_page-0028.jpg';
import greatOutdoors from '../../assets/utsodhara/Utsodhaara-Brochure_page-0014.jpg';
import projectPDF from '../../assets/Utsodhaara-Brochure.pdf';

export default function Utsodhara() {
    const themeColor = "#1b3022"; // Deep Forest Green

    const highlights = [
        { title: "81 Acres", detail: "Integrated Township", icon: "🏞️" },
        { title: "Sustainable", detail: "Town Planning", icon: "🏗️" },
        { title: "On-Site", detail: "Healthcare & Education", icon: "🏥" },
        { title: "Plotted", detail: "Freedom to Design", icon: "📐" }
    ];

    const outdoorFeatures = [
        "3-Cluster Central Park", "Reflexology Pathways", "Outdoor Gym", 
        "Kids' Play Area", "Skating Zone", "Open Air Theatre (OAT)", 
        "Yoga Garden", "Waterbodies", "Playscape"
    ];

    const infraGrid = [
        { label: "Road Network", detail: "Robust Internal Connectivity", icon: "🛣️" },
        { label: "Power Facility", detail: "Dedicated Substations", icon: "⚡" },
        { label: "Water Supply", detail: "Treated Potable Water", icon: "💧" },
        { label: "Drainage", detail: "Efficient SWM System", icon: "🏗️" }
    ];

    return (
        <div className="bg-[#fcfdfb] min-h-screen">
            <Helmet>
                <title>Utsodhara | Luxury Enclave | First Brick Properties</title>
                <meta name="description" content="Utsodhara by First Brick Properties: A luxury residential enclave offering peaceful living with modern amenities." />
            </Helmet>
            {/* Split-Screen Branded Hero */}
            <div className="relative h-[65vh] flex flex-col md:flex-row overflow-hidden border-b border-primary/5">
                <div 
                    className="w-full md:w-1/2 h-full p-12 md:p-24 flex flex-col justify-center relative z-10"
                    style={{ backgroundColor: themeColor }}
                >
                    <div className="animate-fadeIn">
                        <Link to="/projects" className="text-secondary/60 text-[10px] uppercase tracking-[0.4em] font-bold mb-8 inline-block hover:text-secondary transition-colors">
                            ← Back to Portfolio
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-none">
                            Utsodhaara <br />
                            <span className="italic font-light text-secondary/80">Teesta Township</span>
                        </h1>
                        <p className="text-white/70 text-lg md:text-xl font-medium max-w-md leading-relaxed italic">
                            "Life Beyond Imagination"
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 h-full relative overflow-hidden bg-primary/10">
                    <img 
                        src={utsodharaHero} 
                        alt="Utsodhaara Township" 
                        className="w-full h-full object-cover animate-grow"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    
                    {/* Left Column: Project Narrative */}
                    <div className="lg:col-span-2 space-y-16">
                        <section className="animate-fadeIn">
                            <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em] mb-6">
                                The Township Vision
                            </div>
                            <h2 className="text-4xl font-display font-bold text-primary mb-8">Integrated Urban Living</h2>
                            <div className="prose prose-lg text-muted font-medium leading-relaxed space-y-6">
                                <p>
                                    Utsodhaara Teesta Township, spread across 81 acres, is a self-sustaining urban ecosystem where convenience and comfort blend seamlessly. This majestic development by Ambuja Neotia is designed to converge the best of modern town planning with the natural topography of Siliguri.
                                </p>
                                <p>
                                    From world-class healthcare facilities to educational institutes within the premises, Utsodhaara incorporates a complete urban system. It's not just a residential project; it's an eclectic urban lifestyle that offers an unparalleled living experience for those who seek excellence.
                                </p>
                            </div>
                        </section>

                        {/* Freedom to Design - Detailed Plotted Highlight */}
                        <section className="bg-[#1b3022] text-white p-12 md:p-16 rounded-[3rem] overflow-hidden relative group animate-fadeIn">
                             <div className="absolute inset-0 opacity-20 pointer-events-none group-hover:scale-105 transition-transform duration-[3s]">
                                <img src={utsodharaNight} alt="Night View" className="w-full h-full object-cover" />
                             </div>
                             <div className="relative z-10 space-y-8">
                                <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em]">Design Liberty</div>
                                <h3 className="text-4xl font-display font-bold">Freedom to Build Your World</h3>
                                <p className="text-secondary/80 text-lg font-medium leading-relaxed max-w-2xl">
                                    At Utsodhaara Teesta Township, we offer complete design liberty. Choose your plot size and build the dream project you've always envisioned. We provide the world-class infrastructure; you provide the inspiration.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                                    {infraGrid.map((item, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="text-3xl">{item.icon}</div>
                                            <div className="text-white font-bold text-sm tracking-tight">{item.label}</div>
                                            <div className="text-secondary/60 text-[10px] uppercase font-bold tracking-widest">{item.detail}</div>
                                        </div>
                                    ))}
                                </div>
                             </div>
                        </section>

                        {/* The Great Outdoors Showcase */}
                        <section className="animate-fadeIn">
                            <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em] mb-6 text-center lg:text-left">Life in the Green</div>
                            <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center lg:text-left">The Great Outdoors</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative aspect-[4/3] group order-2 lg:order-1">
                                    <img src={greatOutdoors} alt="Outdoors" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                                <div className="space-y-6 order-1 lg:order-2">
                                    <p className="text-muted font-medium leading-relaxed">
                                        Endless greens on all sides and birds chirping—punctuated by play areas and resting zones. Our **3-cluster central park** is unlike anything Siliguri has seen before.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {outdoorFeatures.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3 text-primary/70 font-bold text-xs uppercase tracking-widest border-l-2 border-secondary/40 pl-4 py-1">
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Integrated Township Icons Showcase */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
                            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative aspect-square group">
                                <img src={utsodharaLogo} alt="Logo" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 text-white font-display font-bold text-xl uppercase tracking-widest">Entrance Portal</div>
                            </div>
                            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative aspect-square group">
                                <img src={regalDriveway} alt="Driveway" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 text-white font-display font-bold text-xl uppercase tracking-widest">Regal Driveway</div>
                            </div>
                        </section>

                        {/* Regional Connectivity */}
                        <section className="bg-primary/5 p-12 rounded-[3rem] animate-fadeIn">
                            <h3 className="text-2xl font-display font-bold text-primary mb-8">Strategic Connectivity</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {[
                                    { place: "City Center", time: "15 Mins" },
                                    { place: "Airport", time: "30 Mins" },
                                    { place: "Medical College", time: "10 Mins" },
                                    { place: "NH 31", time: "05 Mins" }
                                ].map((item, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-secondary font-black text-2xl mb-2">{item.time}</div>
                                        <div className="text-primary/60 text-[10px] uppercase tracking-widest font-bold font-sans">{item.place}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Sidebar Stats & Downloads */}
                    <div className="space-y-12">
                        {/* High-Impact Highlights Grid */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-primary/5 space-y-8 animate-fadeIn">
                            <h3 className="text-xl font-display font-bold text-primary border-b border-primary/5 pb-4">Key Highlights</h3>
                            <div className="grid grid-cols-1 gap-6">
                                {highlights.map((h, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div 
                                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform"
                                            style={{ backgroundColor: `${themeColor}15`, color: themeColor }}
                                        >
                                            {h.icon}
                                        </div>
                                        <div>
                                            <div className="text-primary font-bold text-sm tracking-tight">{h.title}</div>
                                            <div className="text-muted text-[10px] uppercase font-bold tracking-widest">{h.detail}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Brochure CTA */}
                        <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl animate-fadeIn">
                            <div className="absolute inset-0 bg-secondary group-hover:bg-secondary/90 transition-colors duration-500"></div>
                            <div className="relative p-10 text-white flex flex-col items-center text-center">
                                <div className="text-4xl mb-6">📄</div>
                                <h3 className="text-2xl font-display font-bold mb-4 italic">The Masterplan</h3>
                                <p className="text-white/80 text-sm mb-8 font-medium">Download the complete UTSODHAARA Teesta Township dossier.</p>
                                <a 
                                    href={projectPDF} 
                                    download="UTSODHAARA-Brochure.pdf"
                                    className="bg-white text-secondary w-full py-3 rounded-xl font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:translate-y-[-2px] hover:shadow-2xl transition-all mb-8 flex items-center justify-center"
                                >
                                    Download Brochure
                                </a>
                                
                                {/* Standardized Enquiry Section */}
                                <ProjectEnquiry projectName="Utsodhaara" accentColor="#fcfdfb" isDark={true} />
                            </div>
                        </div>

                        {/* Quick Enquiry */}
                        <div className="bg-primary p-10 rounded-[2.5rem] text-center space-y-6 animate-fadeIn">
                            <h4 className="text-white font-display font-bold text-xl italic">Interested?</h4>
                            <p className="text-white/60 text-xs font-medium">Schedule a township visit with our specialists.</p>
                            <Link to="/contact" className="inline-block border border-secondary/40 text-secondary px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-all">
                                Request Callback
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
