import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';

export default function ProjectEnquiry({ projectName, isDark = false, accentColor = "#f7941d" }) {
    const whatsappNumber = "918371874510";
    const emailAddress = "info@firstbrickproperty.com";

    const whatsappMessage = encodeURIComponent(`I'm interested in the ${projectName} project. Please provide more details.`);
    const emailSubject = encodeURIComponent(`Enquiry for ${projectName} - First Brick Properties`);
    const emailBody = encodeURIComponent(`Hello First Brick Team,\n\nI am interested in learning more about the ${projectName} project. Please contact me with more information.\n\nThank you.`);

    const primaryTextClass = isDark ? "text-white" : "text-primary";
    const secondaryTextClass = isDark ? "text-white/60" : "text-muted";

    return (
        <div className="space-y-6 pt-6 border-t border-primary/5">
            <div className="text-center lg:text-left">
                <h4 className={`text-lg font-display font-bold ${primaryTextClass} italic mb-1`}>Interested in {projectName}?</h4>
                <p className={`${secondaryTextClass} text-[10px] uppercase font-bold tracking-[0.2em]`}>Connect with our specialists</p>
            </div>
            
            <div className="flex flex-col gap-4">
                <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5c] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 w-full"
                >
                    <FiPhone className="text-lg" />
                    WhatsApp Enquiry
                </a>

                <a 
                    href={`mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`}
                    className="flex items-center justify-center gap-3 border-2 py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-primary hover:text-white hover:-translate-y-1 w-full group"
                    style={{ borderColor: accentColor, color: accentColor }}
                >
                    <FiMail className="text-lg group-hover:scale-110 transition-transform" />
                    Submit Enquiry
                </a>
            </div>

            <p className="text-[9px] text-center text-primary/40 font-bold uppercase tracking-widest leading-relaxed">
                Our specialists will respond within 24 hours.
            </p>
        </div>
    );
}
