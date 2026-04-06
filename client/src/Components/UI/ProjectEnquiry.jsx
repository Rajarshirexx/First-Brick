import React, { useState } from 'react';
import { FiMail, FiCopy, FiExternalLink, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectEnquiry({ projectName, isDark = false, accentColor = "#f7941d" }) {
    const [showOptions, setShowOptions] = useState(false);
    const [copied, setCopied] = useState(false);

    const whatsappNumber = "918371874510";
    const emailAddress = "info@firstbrickproperty.com";

    const whatsappMessage = encodeURIComponent(`I'm interested in the ${projectName} project. Please provide more details.`);
    const emailSubject = `Enquiry for ${projectName} - First Brick Properties`;
    const emailBody = `Hello First Brick Team,\n\nI am interested in learning more about the ${projectName} project. Please contact me with more information.\n\nThank you.`;

    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);

    // Gmail Web Compose Link
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodedSubject}&body=${encodedBody}`;
    // Standard Mailto
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const primaryTextClass = isDark ? "text-white" : "text-primary";
    const secondaryTextClass = isDark ? "text-white/60" : "text-muted";

    return (
        <div className="space-y-6 pt-6 border-t border-primary/5">
            <div className="text-center lg:text-left">
                <h4 className={`text-lg font-display font-bold ${primaryTextClass} italic mb-1`}>Interested in {projectName}?</h4>
                <p className={`${secondaryTextClass} text-[10px] uppercase font-bold tracking-[0.2em]`}>Connect with our specialists</p>
            </div>
            
            <div className="flex flex-col gap-4 relative">
                <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5c] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 w-full"
                >
                    <FaWhatsapp className="text-xl" />
                    WhatsApp Enquiry
                </a>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        {!showOptions ? (
                            <motion.button
                                key="main-btn"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                onClick={() => setShowOptions(true)}
                                className="flex items-center justify-center gap-3 border-2 py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-primary hover:text-white hover:-translate-y-1 w-full group cursor-pointer"
                                style={{ borderColor: accentColor, color: accentColor }}
                            >
                                <FiMail className="text-lg group-hover:scale-110 transition-transform" />
                                Submit Enquiry
                            </motion.button>
                        ) : (
                            <motion.div
                                key="options-menu"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-white rounded-2xl p-4 shadow-2xl border border-primary/10 space-y-3"
                            >
                                <div className="flex justify-between items-center mb-2 px-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Choose Method</span>
                                    <button 
                                        onClick={() => setShowOptions(false)}
                                        className="text-[10px] font-bold uppercase text-secondary hover:underline cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 gap-2">
                                    <a 
                                        href={mailtoUrl}
                                        className="flex items-center justify-between p-3 rounded-xl bg-primary/5 hover:bg-primary hover:text-white transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <FiMail className="text-lg" />
                                            <span className="text-[11px] font-bold uppercase tracking-wider">Default Email App</span>
                                        </div>
                                        <FiExternalLink className="text-xs opacity-40 group-hover:opacity-100" />
                                    </a>

                                    <a 
                                        href={gmailUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-3 rounded-xl bg-red-50 hover:bg-red-500 hover:text-white transition-all group"
                                    >
                                        <div className="flex items-center gap-3 text-red-600 group-hover:text-white transition-colors">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                            </svg>
                                            <span className="text-[11px] font-bold uppercase tracking-wider">Open in Web Gmail</span>
                                        </div>
                                        <FiExternalLink className="text-xs text-red-400 group-hover:text-white group-hover:opacity-100" />
                                    </a>

                                    <button 
                                        onClick={handleCopy}
                                        className="flex items-center justify-between p-3 rounded-xl bg-secondary/5 hover:bg-secondary hover:text-white transition-all group cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3 text-secondary group-hover:text-white transition-colors">
                                            {copied ? <FiCheck className="text-lg" /> : <FiCopy className="text-lg" />}
                                            <span className="text-[11px] font-bold uppercase tracking-wider">
                                                {copied ? "Email Copied!" : "Copy Email Address"}
                                            </span>
                                        </div>
                                        <span className="text-[9px] font-mono opacity-40 group-hover:opacity-100 uppercase tracking-tighter">
                                            {emailAddress}
                                        </span>
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <p className="text-[9px] text-center text-primary/40 font-bold uppercase tracking-widest leading-relaxed">
                Our specialists will respond within 24 hours.
            </p>
        </div>
    );
}
