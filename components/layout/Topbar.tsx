"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";
import site from "@/data/index";

const socialIconMap: Record<string, React.ElementType> = {
    instagram: FaInstagram,
    facebook: FaFacebookF,
    youtube: FaYoutube,
    whatsapp: FaWhatsapp,
};

export default function Topbar() {
    const data = site.topbar;

    return (
        <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hidden md:block w-full bg-white border-b border-gray-100 py-2.5 text-xs lg:text-sm text-gray-800 shadow-sm"
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 flex flex-row justify-between items-center gap-4">
                {/* Contact info */}
                <div className="flex items-center gap-4 lg:gap-6 flex-wrap">
                    {/* Location info */}
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-[#C46D77] text-sm shrink-0" />
                        <span className="font-medium text-gray-700">{data.location}</span>
                    </div>

                    <span className="h-3.5 w-[1px] bg-[#C46D77]/40 inline-block" />

                    {/* Phone info */}
                    <a
                        href={data.phoneHref}
                        className="flex items-center gap-2 hover:text-[#C46D77] transition-colors"
                    >
                        <FaPhoneAlt className="text-[#C46D77] text-xs shrink-0" />
                        <span className="font-medium text-gray-700">{data.phone}</span>
                    </a>

                    <span className="h-3.5 w-[1px] bg-[#C46D77]/40 inline-block" />

                    {/* Email info */}
                    <a
                        href={data.emailHref}
                        className="flex items-center gap-2 hover:text-[#C46D77] transition-colors"
                    >
                        <FaEnvelope className="text-[#C46D77] text-xs shrink-0" />
                        <span className="font-medium text-gray-700">{data.email}</span>
                    </a>
                </div>

                {/* Social links */}
                <div className="flex items-center">
                    <span className="h-3.5 w-[1px] bg-[#C46D77]/40 mr-4 inline-block" />

                    <div className="flex items-center gap-4 lg:gap-5 text-gray-800">
                        {data.socialLinks.map((social, index) => {
                            const IconComponent = socialIconMap[social.platform] || FaInstagram;
                            return (
                                <motion.a
                                    key={index}
                                    whileHover={{ scale: 1.15, color: "#C46D77" }}
                                    whileTap={{ scale: 0.95 }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="transition-colors"
                                >
                                    <IconComponent className="text-base" />
                                </motion.a>
                            );
                        })}
                    </div>

                    <span className="h-3.5 w-[1px] bg-[#C46D77]/40 ml-4 inline-block" />
                </div>
            </div>
        </motion.div>
    );
}