import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp } from 'react-icons/fa';
import { FiHome, FiMaximize, FiDollarSign, FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';
import heroImg from '../../assets/embeeOverlay.png';

export default function RentResell() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        action: 'Rent',
        category: 'Flat / Apartment',
        budget: '',
        sqft: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();

        const message = `
*Property Enquiry - Rent/Resell*

-----------------------------------------
*Person Details:*
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}

*Property Requirements:*
Action: ${formData.action}
Category: ${formData.category}
Budget: ${formData.budget}
Area Size: ${formData.sqft} Sqft
-----------------------------------------

*Additional Details:*
${formData.message || 'No additional details provided.'}

-----------------------------------------
Sent from First Brick Properties
        `.trim();

        const whatsappNumber = "918371874510";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="bg-bg min-h-screen">
            <Helmet>
                <title>Rent & Resell Properties | First Brick Properties</title>
                <meta name="description" content="Looking to rent or resell your property? Submit your details to First Brick Properties and let our experts handle the rest." />
            </Helmet>

            {/* Hero Section */}
            <div className="relative h-[50vh] flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <img src={heroImg} alt="Rent & Resell" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent"></div>
                </div>
                <div className="container px-6 relative z-10 animate-fadeIn">
                    <div className="max-w-2xl">
                        <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em] mb-4">
                            Premium Agency Services
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-none">
                            Rent or <span className="italic font-light text-secondary">Resell</span>.
                        </h1>
                        <p className="text-slate-200 text-lg leading-relaxed font-medium">
                            Whether you are looking to list your property for rent or achieve the best value for resale, our team ensures a seamless transaction.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Information Section */}
                    <div className="space-y-10 animate-fadeIn">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-display font-bold text-primary">Why List with Us?</h2>
                            <p className="text-muted text-lg leading-relaxed">
                                We leverage our extensive network and market data to find the right matches for your property aspirations. From specialized commercial hubs to luxury residential stays, we handle every detail of the process.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: <FiDollarSign />, title: "Best Value", desc: "Expert valuation to ensure competitive pricing." },
                                { icon: <FiMaximize />, title: "Wide Reach", desc: "Access to a vast network of qualified leads." },
                                { icon: <FiHome />, title: "Verified Listings", desc: "Quality assurance for both owners and tenants." },
                                { icon: <FiMessageSquare />, title: "Expert Handle", desc: "End-to-end management of documentation." }
                            ].map((feature, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-all">
                                    <div className="text-secondary text-2xl mb-4">{feature.icon}</div>
                                    <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">{feature.title}</h4>
                                    <p className="text-primary/50 text-[11px] leading-relaxed font-medium uppercase">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-primary/5 animate-fadeIn relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                            <FaWhatsapp className="text-9xl text-primary" />
                        </div>
                        
                        <h3 className="text-2xl font-display font-bold text-primary mb-8 border-b border-primary/5 pb-6">Property Requirements</h3>
                        
                        <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40 ml-1">Full Name *</label>
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Full Name" className="w-full bg-bg border border-primary/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors font-medium text-primary" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40 ml-1">Phone Number *</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone Number" className="w-full bg-bg border border-primary/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors font-medium text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40 ml-1">Interested in</label>
                                    <select name="action" value={formData.action} onChange={handleChange} className="w-full bg-bg border border-primary/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors font-medium text-primary appearance-none">
                                        <option>Rent</option>
                                        <option>Resell</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40 ml-1">Property Category</label>
                                    <select name="category" value={formData.category} onChange={handleChange} className="w-full bg-bg border border-primary/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors font-medium text-primary appearance-none">
                                        <option>Flat / Apartment</option>
                                        <option>House / Villa</option>
                                        <option>Office / Shop</option>
                                        <option>Land / Plot</option>
                                        <option>Commercial Space</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40 ml-1">Budget / Price Range *</label>
                                    <input type="text" name="budget" value={formData.budget} onChange={handleChange} required placeholder="e.g. 50 Lacs / 25k Rent" className="w-full bg-bg border border-primary/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors font-medium text-primary" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40 ml-1">Area Size (Sqft) *</label>
                                <input type="number" name="sqft" value={formData.sqft} onChange={handleChange} required placeholder="e.g. 1200" className="w-full bg-bg border border-primary/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors font-medium text-primary" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40 ml-1">Additional Details</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Mention floor, facing, or specific requirements..." className="w-full bg-bg border border-primary/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors font-medium text-primary resize-none"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary text-white font-display font-bold uppercase tracking-[0.3em] py-5 rounded-xl hover:bg-secondary transition-all duration-500 shadow-xl flex items-center justify-center gap-3 group cursor-pointer">
                                <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
                                Submit to WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
