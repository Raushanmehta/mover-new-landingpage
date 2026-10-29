"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { GiScissors, GiPerfumeBottle, GiSparkles } from "react-icons/gi";
import site from "@/data/index";
import {
    fadeInLeft,
    fadeInRight,
    fadeInUp,
    titleVariants,
    subtitleVariants,
    descVariants,
    imageScaleIn,
    iconPop,
    buttonHoverTap,
    defaultViewport,
    staggerContainer,
} from "@/utils/animations";

const iconMap: Record<string, React.ElementType> = {
    GiScissors,
    GiPerfumeBottle,
    GiSparkles,
};

interface AboutSectionProps {
    data?: typeof site.about;
    showButton?: boolean;
}

export default function AboutSection({ data: propData, showButton = true }: AboutSectionProps = {}) {
    const data = propData || site.about;

    return (
        <section id="about" className="w-full bg-white py-8 lg:py-14 overflow-hidden scroll-mt-20">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 items-start">

                {/* Image showcase */}
                <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="relative flex justify-center lg:justify-start"
                >
                    <div className="relative w-full max-w-[550px] lg:max-w-[580px] h-[420px] sm:h-[490px] lg:h-[530px]">

                        {/* Decorative frame */}
                        <div className="absolute -top-4 -left-4 w-full h-[90%] border-2 border-[#C46D77]/60 z-0" />

                        {/* Portrait image */}
                        <motion.div
                            variants={imageScaleIn}
                            className="relative z-10 w-full h-[90%] overflow-hidden shadow-xl"
                        >
                            <Image
                                src={data.images.portrait}
                                alt={`${data.titleLine1} ${data.titleLine2} ${data.titleHighlight}`}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                            />
                        </motion.div>

                        {/* Secondary frame */}
                        <div className="absolute -bottom-4 right-0 lg:-right-4 w-[38%] h-[52%] border-2 border-[#C46D77]/60 z-0" />

                        {/* Salon image */}
                        <motion.div
                            variants={fadeInUp}
                            className="absolute bottom-0 right-2 lg:-right-8 z-20 w-[38%] h-[52%] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src={data.images.salon}
                                alt="Luxury Salon Ambience"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                            />
                        </motion.div>

                    </div>
                </motion.div>

                {/* Content details */}
                <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="flex flex-col items-start gap-2 w-full pt-1"
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

                    {/* Main headline */}
                    <motion.h2
                        variants={titleVariants}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-950 leading-[1.2]"
                    >
                        {data.titleLine1} <br />
                        {data.titleLine2}{" "}
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

                    {/* Feature Badges */}
                    <motion.div
                        variants={staggerContainer(0.12)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        className="flex items-start justify-between w-full py-2 sm:py-3"
                    >
                        {data.features.map((feature, index) => {
                            const IconComponent = iconMap[feature.icon] || GiSparkles;
                            const alignClasses =
                                index === 0
                                    ? "items-center text-left"
                                    : index === data.features.length - 1
                                        ? "items-center text-center"
                                        : "items-center text-center";
                            return (
                                <motion.div
                                    key={index}
                                    variants={iconPop}
                                    className={`flex flex-col gap-2.5 ${alignClasses}`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 6 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        className="w-14 h-14 rounded-full bg-rose-50 border border-[#C46D77]/30 flex items-center justify-center text-[#C46D77] shadow-sm cursor-pointer"
                                    >
                                        <IconComponent className="text-4xl" />
                                    </motion.div>
                                    <span className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800">
                                        {feature.title}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* CTA button */}
                    {showButton && data.ctaButton && (
                        <div className="pt-1">
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