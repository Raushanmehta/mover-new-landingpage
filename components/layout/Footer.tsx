"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaRegClock,
} from "react-icons/fa";
import Image from "next/image";
import site from "@/data/index";
import {
    footerContainerVariants,
    footerColumnVariants,
    footerItemVariants,
    footerSocialIconVariants,
    lineExpandVariants,
    defaultViewport,
} from "@/utils/animations";

const socialIconMap: Record<string, React.ElementType> = {
    facebook: FaFacebookF,
    instagram: FaInstagram,
    youtube: FaYoutube,
    linkedin: FaLinkedinIn,
};

export default function Footer() {
    const data = site.footer;

    return (
        <footer className="w-full bg-[#0B0C10] text-[#E0E0E0] pt-14 md:pt-16 pb-8 border-t border-[#C46D77]/30 font-sans relative overflow-hidden">
            {/* Footer content */}
            <motion.div
                variants={footerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-y-10 lg:gap-y-0 pb-12 md:pb-14"
            >
                {/* Brand column */}
                <motion.div
                    variants={footerColumnVariants}
                    className="sm:col-span-2 md:col-span-6 lg:col-span-4 flex flex-col justify-between space-y-5 lg:pr-6 xl:pr-8 lg:border-r lg:border-[#C46D77]/20"
                >
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <Image
                                src={data.logo.src}
                                alt={data.logo.alt}
                                width={data.logo.width}
                                height={data.logo.height}
                                priority
                                className="w-42 h-20 object-contain"
                            />
                        </Link>

                        <p className="text-xs sm:text-sm leading-relaxed text-gray-300 pr-2">
                            {data.description}
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                        {data.socialLinks.map((social, index) => {
                            const IconComponent = socialIconMap[social.platform] || FaInstagram;
                            return (
                                <motion.a
                                    key={index}
                                    variants={footerSocialIconVariants}
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "rgba(196, 109, 119, 0.2)",
                                        borderColor: "#C46D77",
                                        color: "#C46D77",
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full border border-[#C46D77]/50 flex items-center justify-center text-white transition-all shadow-md shrink-0 cursor-pointer"
                                >
                                    <IconComponent className="w-5 h-5 shrink-0" />
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Quick links */}
                <motion.div
                    variants={footerColumnVariants}
                    className="sm:col-span-1 md:col-span-3 lg:col-span-2 flex flex-col space-y-4 lg:px-4 xl:px-6 lg:border-r lg:border-[#C46D77]/20"
                >
                    <div className="space-y-2">
                        <h3 className="font-serif text-lg sm:text-xl font-semibold text-white tracking-wide">
                            Quick Links
                        </h3>
                        <motion.span
                            variants={lineExpandVariants}
                            className="block h-[2px] bg-[#C46D77]"
                        />
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm">
                        {data.quickLinks.map((link, idx) => (
                            <motion.li key={idx} variants={footerItemVariants}>
                                <Link
                                    href={link.href}
                                    className="group inline-flex items-center gap-2 hover:text-[#C46D77] transition-colors text-gray-300"
                                >
                                    <span className="w-1.5 h-1.5 bg-[#C46D77] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                    <span className="transition-transform group-hover:translate-x-1 duration-200">
                                        {link.name}
                                    </span>
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Services column */}
                <motion.div
                    variants={footerColumnVariants}
                    className="sm:col-span-1 md:col-span-3 lg:col-span-2 flex flex-col space-y-4 lg:px-4 xl:px-6 lg:border-r lg:border-[#C46D77]/20"
                >
                    <div className="space-y-2">
                        <h3 className="font-serif text-lg sm:text-xl font-semibold text-white tracking-wide">
                            Our Services
                        </h3>
                        <motion.span
                            variants={lineExpandVariants}
                            className="block h-[2px] bg-[#C46D77]"
                        />
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm">
                        {data.serviceLinks.map((service, idx) => (
                            <motion.li key={idx} variants={footerItemVariants}>
                                <Link
                                    href={service.href}
                                    className="group inline-flex items-center gap-2 hover:text-[#C46D77] transition-colors text-gray-300"
                                >
                                    <span className="w-1.5 h-1.5 bg-[#C46D77] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                    <span className="transition-transform group-hover:translate-x-1 duration-200">
                                        {service.name}
                                    </span>
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Contact column */}
                <motion.div
                    variants={footerColumnVariants}
                    className="sm:col-span-2 md:col-span-6 lg:col-span-4 flex flex-col space-y-4 lg:pl-6 xl:pl-8"
                >
                    <div className="space-y-2">
                        <h3 className="font-serif text-lg sm:text-xl font-semibold text-white tracking-wide">
                            Contact Us
                        </h3>
                        <motion.span
                            variants={lineExpandVariants}
                            className="block h-[2px] bg-[#C46D77]"
                        />
                    </div>

                    <div className="space-y-3.5 text-xs sm:text-sm text-gray-300">
                        {/* Address info */}
                        <motion.div variants={footerItemVariants} className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full border border-[#C46D77] flex items-center justify-center text-[#C46D77] shrink-0 shadow-sm mt-0.5">
                                <FaMapMarkerAlt className="w-5 h-5 shrink-0" />
                            </div>
                            <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                                {data.contactInfo.address}
                            </p>
                        </motion.div>

                        {/* Phone info */}
                        <motion.div variants={footerItemVariants} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border border-[#C46D77] flex items-center justify-center text-[#C46D77] shrink-0 shadow-sm">
                                <FaPhoneAlt className="w-5 h-5 shrink-0" />
                            </div>
                            <a href={data.contactInfo.phoneHref} className="text-xs sm:text-sm hover:text-[#C46D77] transition-colors whitespace-nowrap">
                                {data.contactInfo.phone}
                            </a>
                        </motion.div>

                        {/* Email info */}
                        <motion.div variants={footerItemVariants} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border border-[#C46D77] flex items-center justify-center text-[#C46D77] shrink-0 shadow-sm">
                                <FaEnvelope className="w-5 h-5 shrink-0" />
                            </div>
                            <a href={data.contactInfo.emailHref} className="text-xs sm:text-sm hover:text-[#C46D77] transition-colors truncate">
                                {data.contactInfo.email}
                            </a>
                        </motion.div>

                        {/* Working hours */}
                        <motion.div variants={footerItemVariants} className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full border border-[#C46D77] flex items-center justify-center text-[#C46D77] shrink-0 shadow-sm mt-0.5">
                                <FaRegClock className="w-5 h-5 shrink-0" />
                            </div>
                            <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                                {data.contactInfo.workingHours}
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Copyright bar */}
            <div className="border-t border-[#C46D77]/30 pt-6">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 flex justify-center items-center text-xs sm:text-sm text-gray-400">
                    <p className="text-center">{data.copyright}</p>
                </div>
            </div>
        </footer>
    );
}