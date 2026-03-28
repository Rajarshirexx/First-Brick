import React from 'react';

export default function About() {
    return (
        <div className="bg-bg min-h-screen pt-32 pb-24">
            <div className="container px-6">
                
                {/* Hero Segment */}
                <div className="max-w-4xl mb-24 animate-fadeIn">
                    <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em] mb-4 text-center sm:text-left">
                        Property Marketing Specialists
                    </div>
                    <h1 className="text-5xl md:text-8xl font-display font-bold text-primary mb-8 leading-none">
                        Crafting <span className="italic font-light text-secondary">Heritage</span>. <br />
                        Defining <span className="italic font-light">Excellence</span>.
                    </h1>
                    <p className="text-muted text-xl leading-relaxed max-w-2xl font-medium">
                        FirstBrick is a dedicated property marketing agency, transforming architectural visions into premium market realities with strategic precision.
                    </p>
                </div>

                {/* Our Story / Heritage Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="relative group animate-fadeIn">
                        <div className="aspect-square bg-primary/5 rounded-2xl overflow-hidden relative border border-primary/5">
                             <div className="absolute inset-0 flex items-center justify-center text-primary/10 font-display font-black text-[10rem] select-none">
                                FB
                            </div>
                            <div className="absolute bottom-12 right-12 text-secondary font-display font-bold text-2xl uppercase tracking-widest text-right">
                                Excellence in <br />
                                <span className="text-primary italic">Innovation</span>
                            </div>
                        </div>
                        {/* Decorative floating detail */}
                        <div className="absolute -bottom-8 -left-8 w-48 h-48 border-2 border-secondary/10 rounded-2xl -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700"></div>
                    </div>

                    <div className="animate-fadeIn delay-200">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">Professional Journey</h2>
                        <div className="space-y-6 text-muted text-lg leading-relaxed font-medium">
                            <p>
                                What began as a vision to redefine property presentation has evolved into a specialized agency. We don't just sell spaces; we articulate the lifestyle and soul behind every brick.
                            </p>
                            <p>
                                At FirstBrick, we combine market intelligence with high-end digital storytelling. Our boutique approach ensures that every project receives the individual attention and strategic positioning it deserves.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vision & Mission Segment */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                    <div className="bg-primary p-12 rounded-2xl text-white group hover:bg-primary/95 transition-all duration-500 animate-fadeIn">
                        <div className="text-secondary font-black text-3xl mb-8 group-hover:scale-110 transition-transform origin-left">01.</div>
                        <h3 className="text-2xl font-display font-bold mb-6 text-peach">Our Vision</h3>
                        <p className="text-slate-300 leading-relaxed font-medium">
                            To be a recognized standard for property marketing, where architectural excellence is presented with visual integrity and strategic market precision.
                        </p>
                    </div>
                    <div className="bg-white p-12 rounded-2xl border border-primary/5 shadow-xl group hover:shadow-2xl transition-all duration-500 animate-fadeIn delay-300">
                        <div className="text-secondary font-black text-3xl mb-8 group-hover:scale-110 transition-transform origin-left">02.</div>
                        <h3 className="text-2xl font-display font-bold mb-6 text-primary">Our Mission</h3>
                        <p className="text-muted leading-relaxed font-medium">
                            To assist developers and property owners through innovative digital experiences, strategic sales leadership, and commitment to value-driven solutions.
                        </p>
                    </div>
                </div>

                {/* Core Principles */}
                <div className="text-center mb-16">
                    <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Values</div>
                    <h2 className="text-4xl font-display font-bold text-primary">Our Core Principles</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Excellence", desc: "Dedicated quality in every frame and every lead." },
                        { title: "Integrity", desc: "Honest market positioning and transparent client advisory." },
                        { title: "Innovation", desc: "Pushing the boundaries of property VR and digital storytelling." }
                    ].map((value, i) => (
                        <div key={i} className="p-8 rounded-xl border border-primary/5 bg-white shadow-lg text-center hover:-translate-y-2 transition-all duration-500 animate-fadeIn" style={{ animationDelay: `${i * 150}ms` }}>
                            <div className="w-12 h-1 bg-secondary mx-auto mb-6"></div>
                            <h4 className="font-display font-bold text-primary text-xl mb-4">{value.title}</h4>
                            <p className="text-muted text-sm font-medium leading-relaxed">{value.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}