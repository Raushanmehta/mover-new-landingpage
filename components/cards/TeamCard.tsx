"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { cardVariants, cardHover, socialIconHover } from "@/utils/animations";

export interface TeamMember {
    id: number | string;
    name: string;
    role: string;
    image: string;
    bio?: string;
    socials?: {
        facebook?: string;
        instagram?: string;
        linkedin?: string;
    };
}

export default function TeamCard({ member }: { member: TeamMember; index?: number }) {
    return (
        <motion.div
            key={member.id}
            variants={cardVariants}
            whileHover={cardHover.hover}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group "
        >
            {/* Portrait image */}
            <div className="relative w-full h-[280px] lg:h-[200px] overflow-hidden bg-gray-100">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Info container */}
            <div className="p-6 flex flex-col items-center justify-between flex-1 w-full gap-3">
                <div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 tracking-tight">
                        {member.name}
                    </h3>

                    <span className="block text-[11px] font-bold tracking-[0.2em] text-[#C46D77] uppercase mt-1 mb-2">
                        {member.role}
                    </span>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-1">
                        {member.bio}
                    </p>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3">
                    <motion.a
                        whileHover={socialIconHover.hover}
                        whileTap={socialIconHover.tap}
                        href={member.socials?.facebook || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Facebook`}
                        className="w-10 h-10 rounded-full bg-rose-50 text-gray-800 flex items-center justify-center text-xs transition-colors shadow-sm"
                    >
                        <FaFacebookF className="h-5 w-5" />
                    </motion.a>

                    <motion.a
                        whileHover={socialIconHover.hover}
                        whileTap={socialIconHover.tap}
                        href={member.socials?.instagram || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Instagram`}
                        className="w-10 h-10 rounded-full bg-rose-50 text-gray-800 flex items-center justify-center text-xs transition-colors shadow-sm"
                    >
                        <FaInstagram className="h-5 w-5" />
                    </motion.a>

                    <motion.a
                        whileHover={socialIconHover.hover}
                        whileTap={socialIconHover.tap}
                        href={member.socials?.linkedin || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="w-10 h-10 rounded-full bg-rose-50 text-gray-800 flex items-center justify-center text-xs transition-colors shadow-sm"
                    >
                        <FaLinkedinIn className="h-5 w-5" />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}
