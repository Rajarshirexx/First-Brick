import React from 'react';

const directors = [
    {
        name: "Rakesh Modak",
        role: "Strategic Vision & Sales Leadership",
        bio: "Rakesh Modak is a commerce graduate with a strong background in Business Studies, bringing over a decade of expertise in real estate sales and project management. With a proven track record of driving growth and building lasting client relationships, he has established himself as a trusted professional in the real estate sector.",
        highlights: [
            "Former Regional Sales Head at Embee Builders (10+ years)",
            "Led sales for Embee Fortune, Embee Delight, and Squarewood Utsav",
            "Former Senior Sales Head at Ajay Begraj Group",
            "Expert in strategic vision and people-first leadership"
        ]
    },
    {
        name: "Jeepson John Bhengra",
        role: "Client Advisory & Growth Specialist",
        bio: "Jeepson John Bhengra is a commerce graduate with 9 years of proven experience in the real estate industry. He has worked extensively with Embee Builders, contributing to the growth and success of multiple residential projects. Skilled in sales, client management, and property advisory, he is committed to delivering value-driven solutions.",
        highlights: [
            "9 Years of intensive real estate experience",
            "Trusted face at Embee Builders for client advisory",
            "Specialist in value-driven residential solutions",
            "Expert in high-intent client management"
        ]
    }
];

export default function Directors() {
    return (
        <div className="bg-bg min-h-screen pt-32 pb-24">
            <div className="container px-6">
                
                {/* Header */}
                <div className="max-w-3xl mb-20 animate-fadeIn">
                    <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
                        Leadership Team
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-8">
                        Our <span className="italic font-light text-secondary">Directors</span>.
                    </h1>
                    <p className="text-muted text-lg leading-relaxed max-w-2xl font-medium">
                        Guided by decades of collective expertise and a commitment to architectural excellence, our leadership team sculpts the future of property marketing.
                    </p>
                </div>

                {/* Directors Grid */}
                <div className="grid grid-cols-1 gap-16">
                    {directors.map((director, index) => (
                        <div 
                            key={index} 
                            className={`flex flex-col md:flex-row gap-12 items-start animate-fadeIn border-b border-primary/5 pb-16 last:border-0`}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            {/* Profile Placeholder/Detail */}
                            <div className="w-full md:w-1/3 aspect-[4/5] bg-primary/5 rounded-2xl overflow-hidden relative group">
                                <div className="absolute inset-0 flex items-center justify-center text-primary/10 font-display font-black text-8xl uppercase select-none">
                                    {director.name.split(' ')[0]}
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/80 to-transparent">
                                    <div className="text-white font-display font-bold text-2xl uppercase tracking-wider">{director.name}</div>
                                    <div className="text-peach text-[10px] uppercase tracking-widest font-bold mt-1">{director.role}</div>
                                </div>
                            </div>

                            {/* Bio Content */}
                            <div className="w-full md:w-2/3">
                                <h2 className="text-3xl font-display font-bold text-primary mb-6">About {director.name}</h2>
                                <p className="text-muted text-lg leading-relaxed mb-8 font-medium italic">
                                    "{director.bio}"
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {director.highlights.map((highlight, hIndex) => (
                                        <div key={hIndex} className="flex items-start gap-3 group">
                                            <span className="text-secondary mt-1 group-hover:scale-125 transition-transform">✦</span>
                                            <p className="text-primary/70 text-sm font-bold leading-relaxed">{highlight}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
