import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../../assets/img4.jpg';

export default function AboutSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                
                {/* Image Side with Premium Framing */}
                <div className="flex-1 relative animate-fadeIn">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
                        <img 
                            src={aboutImg} 
                            alt="Architectural Excellence" 
                            className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/5"></div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
                        Our Heritage
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary leading-tight mb-8">
                        Elevating Property <br />
                        <span className="text-secondary">Marketing</span> Standards.
                    </h2>
                    
                    <p className="text-lg text-muted mb-10 leading-relaxed font-light">
                        At <span className="font-bold text-primary italic">FirstBrick</span>, we don't just market properties; we craft premium digital narratives. 
                        With extensive industry experience, we specialize in high-impact strategies 
                        that bridge the gap between architectural vision and market excellence.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 text-left">
                        <div className="flex items-start gap-5">
                            <div className="w-11 h-11 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                                <span className="text-primary font-bold text-xl">✓</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-2">Expert Strategy</h4>
                                <p className="text-xs text-muted leading-relaxed">Tailored marketing funnels that convert luxury prospects.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="w-11 h-11 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                                <span className="text-primary font-bold text-xl">✓</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-2">Visual Mastery</h4>
                                <p className="text-xs text-muted leading-relaxed">High-end architectural photography and cinematic drone tours.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <Link 
                            to="/about" 
                            className="inline-flex items-center gap-4 text-primary font-bold group"
                        >
                            <span className="border-b-2 border-primary/20 group-hover:border-primary transition-all duration-300 py-1">Discover Our Full Story</span>
                            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
