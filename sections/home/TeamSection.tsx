"use client";

import React from "react";
import TeamCard from "@/components/cards/TeamCard";
import { motion } from "framer-motion";
import site from "@/data/index";
import {
    titleVariants,
    subtitleVariants,
    descVariants,
    defaultViewport,
    staggerContainer,
} from "@/utils/animations";

export default function TeamSection() {
    const data = site.team;
    const teamMembers = data.members;

    return (
        <section id="team" className="w-full bg-[#FFF5F5] py-8 lg:py-14 overflow-hidden scroll-mt-20">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16">
                {/* Header container */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="text-center max-w-3xl mx-auto mb-6 lg:mb-8 flex flex-col items-center gap-2"
                >
                    {/* Subtitle text */}
                    <motion.div
                        variants={subtitleVariants}
                        className="flex items-center gap-3 text-[#C46D77]"
                    >
                        <span className="w-8 md:w-10 h-[1.5px] bg-[#C46D77]" />
                        <span className="text-xs md:text-base uppercase tracking-[0.25em] font-semibold">
                            {data.subtitle}
                        </span>
                        <span className="w-8 md:w-10 h-[1.5px] bg-[#C46D77]" />
                    </motion.div>

                    {/* Main headline */}
                    <motion.h2
                        variants={titleVariants}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-950 leading-tight"
                    >
                        {data.title}{" "}
                        <span className="bg-gradient-to-r from-[#C46D77] via-[#D9828F] to-[#A84E59] bg-clip-text text-transparent font-bold">
                            {data.titleHighlight}
                        </span>
                    </motion.h2>

                    {/* Description text */}
                    <motion.p
                        variants={descVariants}
                        className="text-gray-600 text-sm sm:text-base leading-relaxed"
                    >
                        {data.description}
                    </motion.p>
                </motion.div>

                {/* Team grid */}
                <motion.div
                    variants={staggerContainer(0.12)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {teamMembers.map((member, index) => (
                        <TeamCard key={member.id} member={member} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}