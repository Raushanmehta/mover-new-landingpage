"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { FaUsers, FaHeadset } from "react-icons/fa";
import { GiFlowerEmblem } from "react-icons/gi";
import { PiHairDryer } from "react-icons/pi";
import site from "@/data/index";
import {
    fadeInRight,
    fadeInUp,
    titleVariants,
    subtitleVariants,
    descVariants,
    cardVariants,
    buttonHoverTap,
    defaultViewport,
    staggerContainer,
} from "@/utils/animations";

const iconMap: Record<string, React.ElementType> = {
    FaUsers,
    FaHeadset,
};

interface WhyChooseUsSectionProps {
    data?: typeof site.whyChooseUs;
    showButton?: boolean;
}

export default function WhyChooseUsSection({ data: propData, showButton = true }: WhyChooseUsSectionProps = {}) {
    const data = propData || site.whyChooseUs;

    return (
        <section id="why-choose-us" className="w-full bg-white py-8 lg:py-14 overflow-hidden scroll-mt-20">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

                {/* Feature grid */}
                <motion.div
                    variants={staggerContainer(0.12)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    {/* Card 1 */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -4, transition: { duration: 0.3 } }}
                        className="relative bg-gradient-to-br from-[#C46D77] via-[#D9828F] to-[#A84E59] p-6 sm:p-8 shadow-md min-h-[240px] flex flex-col justify-between overflow-hidden text-white"
                    >
                        <GiFlowerEmblem className="absolute -bottom-6 -right-6 text-9xl text-white/15 pointer-events-none" />

                        <div>
                            <span className="block w-8 h-[2px] bg-white mb-3" />
                            <h3 className="font-serif text-2xl font-bold leading-tight whitespace-pre-line text-white">
                                {data.card1.title}
                            </h3>
                        </div>

                        <motion.a
                            whileHover={buttonHoverTap.hover}
                            whileTap={buttonHoverTap.tap}
                            href={data.card1.href}
                            aria-label={data.card1.title}
                            className="w-10 h-10 rounded-full bg-white text-[#C46D77] flex items-center justify-center shadow mt-6 cursor-pointer"
                        >
                            <HiArrowRight className="text-lg" />
                        </motion.a>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        variants={cardVariants}
                        className="relative min-h-[240px] overflow-hidden shadow-md group"
                    >
                        <Image
                            src={data.card2.image}
                            alt={data.card2.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        variants={cardVariants}
                        className="relative min-h-[240px] overflow-hidden shadow-md group"
                    >
                        <Image
                            src={data.card3.image}
                            alt={data.card3.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -4, transition: { duration: 0.3 } }}
                        className="relative bg-[#1C1C1C] p-6 sm:p-8 shadow-md min-h-[240px] flex flex-col justify-between overflow-hidden text-white"
                    >
                        <PiHairDryer className="absolute -bottom-6 -right-6 text-9xl text-white/5 pointer-events-none" />

                        <div>
                            <span className="block w-8 h-[2px] bg-[#C46D77] mb-3" />
                            <h3 className="font-serif text-2xl font-bold leading-tight whitespace-pre-line text-white">
                                {data.card4.title}
                            </h3>
                        </div>

                        <motion.a
                            whileHover={buttonHoverTap.hover}
                            whileTap={buttonHoverTap.tap}
                            href={data.card4.href}
                            aria-label={data.card4.title}
                            className="w-10 h-10 rounded-full bg-rose-50 text-[#C46D77] flex items-center justify-center shadow mt-6 cursor-pointer"
                        >
                            <HiArrowRight className="text-lg" />
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Content column */}
                <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="lg:col-span-6 flex flex-col items-start gap-1 pt-1"
                >
                    {/* Cursive Subtitle */}
                    <motion.div
                        variants={subtitleVariants}
                        className="flex items-center gap-3 text-[#C46D77]"
                    >
                        <span className="w-8 md:w-12 h-[2px] bg-[#C46D77]" />
                        <span className="font-allura text-3xl sm:text-4xl md:text-5xl tracking-wide">
                            {data.subtitle}
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h2
                        variants={titleVariants}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-950 uppercase leading-tight"
                    >
                        {data.title}{" "}
                        <span className="bg-gradient-to-r from-[#C46D77] via-[#D9828F] to-[#A84E59] bg-clip-text text-transparent font-bold">
                            {data.titleHighlight}
                        </span>
                    </motion.h2>

                    {/* Body Description */}
                    <motion.p
                        variants={descVariants}
                        className="text-gray-600 text-sm sm:text-base leading-relaxed"
                    >
                        {data.description}
                    </motion.p>

                    {/* Feature List */}
                    <motion.div
                        variants={staggerContainer(0.12)}
                        className="space-y-5 w-full py-2"
                    >
                        {data.features.map((feature, idx) => {
                            const IconComponent = iconMap[feature.icon] || FaUsers;
                            return (
                                <React.Fragment key={idx}>
                                    <motion.div
                                        variants={fadeInUp}
                                        className="flex items-start gap-4"
                                     >
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 6 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                            className="w-14 h-14 rounded-full bg-rose-50 border border-[#C46D77]/30 flex items-center justify-center text-[#A84E59] shrink-0 mt-1 cursor-pointer"
                                        >
                                            <IconComponent className="text-2xl" />
                                        </motion.div>
                                        <div>
                                            <h3 className="font-serif text-xl font-semibold text-gray-900">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-1">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>

                                    {idx < data.features.length - 1 && (
                                        <div className="w-full h-[1px] bg-gray-200/80" />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </motion.div>

                    {/* CTA button */}
                    {showButton && data.ctaButton?.text && (
                        <div className="pt-2">
                            <motion.a
                                whileHover={buttonHoverTap.hover}
                                whileTap={buttonHoverTap.tap}
                                href={data.ctaButton.href}
                                data-open-modal="contact"
                                className="group flex items-center gap-3 bg-gradient-to-r from-[#C46D77] via-[#D9828F] to-[#A84E59] text-white font-semibold px-7 py-3.5 shadow-md hover:shadow-lg transition-all text-sm md:text-base cursor-pointer"
                            >
                                <span>{data.ctaButton.text}</span>
                                <HiArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
                            </motion.a>
                        </div>
                    )}

                </motion.div>

            </div>
        </section>
    );
}