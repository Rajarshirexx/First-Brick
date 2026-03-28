import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection() {
    return (
        <section className="py-24 bg-secondary relative overflow-hidden">
            
            {/* Background Texture - Navy highlights for contrast */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -ml-48 -mb-48"></div>
            </div>

            <div className="container px-6 relative z-10 text-center">
                
                {/* Content */}
                <div className="max-w-3xl mx-auto animate-fadeIn">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                        Ready to elevate your <br />
                        <span className="text-primary italic font-light drop-shadow-sm">Property Narrative?</span>
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
                        Partner with FirstBrick to unlock the true valuation of your masterpiece. <br />
                        Let's sculpt your success together.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link 
                            to="/contact" 
                            className="bg-primary text-white py-4 px-10 rounded-full font-display font-bold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 shadow-2xl hover:-translate-y-1 block sm:inline-block"
                        >
                            Enquire Now
                        </Link>
                        <Link 
                            to="/about" 
                            className="border-2 border-white/40 text-white py-4 px-10 rounded-full font-display font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300 block sm:inline-block"
                        >
                            Our Heritage
                        </Link>
                    </div>
                </div>

                {/* Small Decorative Detail */}
                <div className="mt-20 pt-10 border-t border-white/10 inline-flex items-center gap-4 text-white/40 text-[10px] tracking-[0.4em] font-black uppercase">
                    <span>Excellence Since 2009</span>
                    <span className="text-primary">●</span>
                    <span>Premium Marketing</span>
                </div>

            </div>
        </section>
    );
}
