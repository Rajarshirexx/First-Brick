import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiCopy, FiExternalLink, FiCheck, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import contactImg from '../../assets/img3.jpg';

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        interest: 'Residential Luxury',
        message: ''
    });

    const [status, setStatus] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [copied, setCopied] = useState(false);
    const [mailUrls, setMailUrls] = useState({ mailto: '', gmail: '' });

    const emailAddress = "info@firstbrickproperty.com";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email || !formData.message) {
            setStatus('Please fill in all required fields.');
            return;
        }

        const subject = `Contact Enquiry: ${formData.interest} - ${formData.fullName}`;
        const bodyContent = `
Hello First Brick Team,

You have received a new contact enquiry from the website:

--------------------------------------------------
Full Name: ${formData.fullName}
Email Address: ${formData.email}
Phone Number: ${formData.phone || 'Not provided'}
Property Interest: ${formData.interest}
--------------------------------------------------

Message:
${formData.message}

--------------------------------------------------
Regards,
${formData.fullName}
        `.trim();

        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(bodyContent);
        
        const mailto = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
        const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodedSubject}&body=${encodedBody}`;

        setMailUrls({ mailto, gmail });
        setIsSubmitted(true);
        setStatus('');
    };

    const resetForm = () => {
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            interest: 'Residential Luxury',
            message: ''
        });
        setIsSubmitted(false);
    };

    return (
        <div className="bg-bg min-h-screen">
            <Helmet>
                <title>Enquire & Connect | First Brick Properties</title>
                <meta name="description" content="Let's connect. Whether you're developing a landmark project or seeking your next luxury residence, our strategic team is ready to assist you." />
            </Helmet>
            
            {/* Hero Segment */}
            <div className="relative h-[60vh] flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <img 
                        src={contactImg} 
                        alt="Architectural Luxury" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
                </div>
                
                <div className="container px-6 relative z-10 animate-fadeIn">
                    <div className="max-w-2xl">
                        <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em] mb-4">
                            Enquire excellence
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-none">
                            Let's <span className="italic font-light text-secondary">Connect</span>.
                        </h1>
                        <p className="text-slate-300 text-lg leading-relaxed font-medium">
                            Whether you're developing a landmark project or seeking your next luxury residence, our strategic team is ready to assist you.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container px-6 py-24 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-primary/5 animate-fadeIn relative overflow-hidden">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-primary/50 ml-1">Full Name *</label>
                                    <input 
                                        type="text" 
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-bg border border-primary/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors font-medium text-primary placeholder:text-primary/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-primary/50 ml-1">Email Address *</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-bg border border-primary/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors font-medium text-primary placeholder:text-primary/20"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-primary/50 ml-1">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 00000 00000"
                                        className="w-full bg-bg border border-primary/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors font-medium text-primary placeholder:text-primary/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-primary/50 ml-1">Property Interest</label>
                                    <select 
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="w-full bg-bg border border-primary/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors font-medium text-primary appearance-none"
                                    >
                                        <option>Residential Luxury</option>
                                        <option>Commercial Spaces</option>
                                        <option>New Project Launch</option>
                                        <option>Marketing Partnership</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-primary/50 ml-1">Your Message *</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Tell us about your property goals..."
                                    className="w-full bg-bg border border-primary/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors font-medium text-primary placeholder:text-primary/20 resize-none"
                                ></textarea>
                            </div>

                            {status && (
                                <div className="text-xs font-bold uppercase tracking-widest text-center py-2 text-red-500">
                                    {status}
                                </div>
                            )}

                            <button 
                                type="submit"
                                className="w-full bg-primary text-white font-display font-bold uppercase tracking-[0.3em] py-5 rounded-xl hover:bg-secondary transition-all duration-500 shadow-lg hover:shadow-secondary/20 cursor-pointer"
                            >
                                Send Enquiry
                            </button>
                        </form>

                        {/* Success Modal Overlay */}
                        <AnimatePresence>
                            {isSubmitted && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-white/95 backdrop-blur-md z-30 flex flex-col items-center justify-center p-8 text-center"
                                >
                                    <motion.button 
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        onClick={() => setIsSubmitted(false)}
                                        className="absolute top-6 right-6 text-primary/40 hover:text-primary p-2 cursor-pointer"
                                    >
                                        <FiX size={24} />
                                    </motion.button>

                                    <motion.div 
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white mb-6 shadow-xl shadow-secondary/20"
                                    >
                                        <FiCheck size={40} />
                                    </motion.div>

                                    <motion.h3 
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-3xl font-display font-bold text-primary mb-2"
                                    >
                                        Enquiry Drafted
                                    </motion.h3>
                                    <motion.p 
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-muted text-sm font-medium mb-10 max-w-sm"
                                    >
                                        Your enquiry is ready. Please choose how you would like to send it to us.
                                    </motion.p>

                                    <motion.div 
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="w-full max-w-sm space-y-3"
                                    >
                                        <a 
                                            href={mailUrls.mailto}
                                            className="flex items-center justify-between p-4 rounded-xl bg-primary text-white hover:bg-secondary transition-all group w-full"
                                        >
                                            <div className="flex items-center gap-3">
                                                <FiMail className="text-xl" />
                                                <span className="text-xs font-bold uppercase tracking-wider">Default Email App</span>
                                            </div>
                                            <FiExternalLink className="text-sm opacity-50 group-hover:opacity-100" />
                                        </a>

                                        <a 
                                            href={mailUrls.gmail}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-4 rounded-xl bg-red-50 text-red-600 hover:bg-red-500 hover:text-white transition-all group w-full"
                                        >
                                            <div className="flex items-center gap-3">
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                                </svg>
                                                <span className="text-xs font-bold uppercase tracking-wider">Open in Web Gmail</span>
                                            </div>
                                            <FiExternalLink className="text-sm opacity-50 group-hover:opacity-100" />
                                        </a>

                                        <button 
                                            onClick={handleCopy}
                                            className="flex items-center justify-between p-4 rounded-xl border-2 border-primary/10 text-primary hover:border-secondary hover:text-secondary transition-all group w-full cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                {copied ? <FiCheck className="text-xl text-secondary" /> : <FiCopy className="text-xl" />}
                                                <span className="text-xs font-bold uppercase tracking-wider">
                                                    {copied ? "Email Copied!" : "Copy Email Address"}
                                                </span>
                                            </div>
                                            <span className="text-[10px] font-mono opacity-40 group-hover:opacity-100 uppercase tracking-tighter">
                                                {emailAddress}
                                            </span>
                                        </button>

                                        <button 
                                            onClick={resetForm}
                                            className="block w-full pt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 hover:text-secondary transition-colors cursor-pointer"
                                        >
                                            Start New enquiry
                                        </button>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Contact Sidebar Section */}
                    <div className="lg:col-span-5 space-y-12 animate-fadeIn delay-300">
                        
                        {/* Registry Details */}
                        <div className="space-y-8 bg-white p-10 rounded-2xl border border-primary/5 shadow-xl">
                            <h3 className="text-2xl font-display font-bold text-primary border-b border-primary/5 pb-4">Registry Office</h3>
                            
                            <div className="space-y-6 font-medium">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                        <span className="text-xl">📍</span>
                                    </div>
                                    <p className="text-muted leading-relaxed">
                                        F-201, 2nd Floor, Grand Plaza, <br />
                                        Pradhan Nagar, Siliguri, India, 734003
                                    </p>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                        <span className="text-xl">📞</span>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-primary font-bold">+91 83718 74510</p>
                                        <p className="text-primary font-bold">+91 70018 20374</p>
                                        <p className="text-primary font-bold">+91 80161 51211</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 bg-[#25D366]/10 rounded-lg flex items-center justify-center shrink-0 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300 font-bold border border-[#25D366]/20 shadow-sm shadow-[#25D366]/5">
                                        <FaWhatsapp className="text-xl" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-primary/40 text-[10px] uppercase font-bold tracking-widest mb-1">WhatsApp Inquiry</p>
                                        <a href="https://wa.me/918371874510" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:text-[#25D366] transition-colors inline-block text-base tracking-normal">
                                            +91 83718 74510
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                        <span className="text-xl">✉️</span>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-primary/40 text-[10px] uppercase font-bold tracking-widest mb-1">Email Address</p>
                                        <a href="mailto:info@firstbrickproperty.com" className="text-primary font-bold hover:text-secondary transition-colors">info@firstbrickproperty.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Sub-segment */}
                        <div className="pt-4 px-2">
                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/50 mb-6 font-display">Connect with us</h4>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/p/First-Brick-Properties-61579283042227/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white border border-primary/5 rounded-full flex items-center justify-center shadow-md hover:border-secondary hover:text-secondary transition-all">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                                </a>
                                <a href="#" className="w-12 h-12 bg-white border border-primary/5 rounded-full flex items-center justify-center shadow-md hover:border-secondary hover:text-secondary transition-all">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                                <a href="#" className="w-12 h-12 bg-white border border-primary/5 rounded-full flex items-center justify-center shadow-md hover:border-secondary hover:text-secondary transition-all">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="aspect-video w-full bg-primary p-1 rounded-2xl border border-primary/5 shadow-inner flex items-center justify-center relative group overflow-hidden">
                             <div className="absolute inset-0 z-0">
                                <img 
                                    src={contactImg} 
                                    alt="FirstBrick Studio" 
                                    className="w-full h-full object-cover opacity-20 grayscale brightness-125 transition-all duration-700 group-hover:scale-110 group-hover:opacity-40"
                                />
                             </div>
                             <div className="z-10 text-white font-display font-black text-6xl uppercase tracking-tighter select-none drop-shadow-2xl">First Brick</div>
                             <div className="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-primary/10 text-[8px] font-bold uppercase tracking-widest text-primary shadow-sm">Siliguri, India</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}