"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";
import {
    GiHairStrands,
    GiScissors,
    GiComb,
    GiSparkles,
    GiFingernail,
    GiLipstick,
    GiDroplets,
    GiLotusFlower,
} from "react-icons/gi";
import site from "@/data/index";
import {
    fadeInLeft,
    fadeInRight,
    fadeInUp,
    titleVariants,
    subtitleVariants,
    descVariants,
    cardVariants,
    buttonHoverTap,
    defaultViewport,
    staggerContainer,
    imageScaleIn,
} from "@/utils/animations";

const iconMap: Record<string, React.ElementType> = {
    GiHairStrands,
    GiScissors,
    GiComb,
    GiSparkles,
    GiFingernail,
    GiLipstick,
    GiDroplets,
    GiLotusFlower,
};

interface ServiceSectionProps {
    data?: typeof site.services;
}

export default function ServiceSection({ data: propData }: ServiceSectionProps = {}) {
    const data = propData || site.services;
    const servicesData = data.servicesList;
    const [activeTab, setActiveTab] = useState(2);
    const currentService = servicesData?.[activeTab] || servicesData?.[0];

    return (
        <section id="services" className="w-full bg-[#FFF5F5] py-8 lg:py-14 overflow-hidden scroll-mt-20">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16">

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="text-center max-w-5xl mx-auto mb-6 flex flex-col items-center gap-2"
                >
                    <motion.div
                        variants={subtitleVariants}
                        className="flex items-center gap-3 text-[#C46D77]"
                    >
                        <span className="w-8 md:w-12 h-[2px] bg-[#C46D77]" />
                        <span className="font-allura text-3xl sm:text-4xl md:text-5xl tracking-wide">
                            {data.subtitle}
                        </span>
                        <span className="w-8 md:w-12 h-[2px] bg-[#C46D77]" />
                    </motion.div>

                    <motion.h2
                        variants={titleVariants}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-950 uppercase leading-tight"
                    >
                        {data.title}{" "}
                        <span className="bg-gradient-to-r from-[#C46D77] via-[#D9828F] to-[#A84E59] bg-clip-text text-transparent font-bold">
                            {data.titleHighlight}
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={descVariants}
                        className="text-gray-600 text-sm sm:text-base leading-relaxed"
                    >
                        {data.description}
                    </motion.p>
                </motion.div>

                {/* Tab Navigation Grid */}
                <motion.div
                    variants={staggerContainer(0.05)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-8"
                >
                    {servicesData.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || GiHairStrands;
                        const isActive = activeTab === index;

                        return (
                            <motion.button
                                key={service.id}
                                variants={cardVariants}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.96 }}
                                onClick={() => setActiveTab(index)}
                                className={`relative flex flex-col items-center justify-center p-4 transition-all duration-300 cursor-pointer ${isActive
                                    ? "bg-gradient-to-b from-[#C46D77] via-[#D9828F] to-[#A84E59] text-white shadow-xl"
                                    : "bg-white border border-gray-200 text-gray-800 hover:border-[#C46D77]/50 hover:shadow-md"
                                    }`}
                            >
                                {/* Icon Container */}
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-2.5 transition-colors ${isActive
                                        ? "bg-white/20 text-white"
                                        : "bg-rose-50 text-[#C46D77]"
                                        }`}
                                >
                                    <IconComponent className="text-4xl" />
                                </motion.div>

                                {/* Tab Name */}
                                <span className="text-xs sm:text-sm font-semibold text-center leading-snug">
                                    {service.name}
                                </span>

                                {/* Active indicator */}
                                {isActive && (
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#A84E59]" />
                                )}
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Active service */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentService.id}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: -20, transition: { duration: 0.25 } }}
                        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
                    >
                        {/* Media showcase */}
                        <motion.div
                            variants={fadeInLeft}
                            className="w-full relative flex justify-center lg:justify-start"
                        >
                            <div className="relative w-full max-w-[540px] sm:max-w-[500px] lg:max-w-[510px] h-[380px] sm:h-[400px] lg:h-[440px]">

                                {/* Frame accent */}
                                <div className="absolute top-3 sm:top-4 -left-3 sm:-left-4 w-full h-[88%] border-2 border-[#C46D77]/50 rounded-md z-0" />

                                {/* Main image */}
                                <div
                                    data-open-modal="contact"
                                    className="relative z-10 block w-full h-[88%] rounded-lg overflow-hidden shadow-xl group cursor-pointer"
                                >
                                    <motion.div
                                        variants={imageScaleIn}
                                        className="relative w-full h-full"
                                    >
                                        <Image
                                            src={currentService.mainImg}
                                            alt={currentService.title}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </motion.div>
                                </div>

                                {/* Decorative frame */}
                                <div className="absolute bottom-3 sm:bottom-4 -right-1 lg:-right-11 w-[38%] h-[58%] border-2 border-[#C46D77]/50 rounded-md z-0" />

                                {/* Salon image */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="absolute bottom-0 right-2 lg:-right-8 z-20 w-[38%] h-[58%] overflow-hidden shadow-2xl"
                                >
                                    <Image
                                        src={currentService.salonImg}
                                        alt="Salon Interior"
                                        fill
                                        sizes="(max-width: 1024px) 50vw, 25vw"
                                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                                    />
                                </motion.div>

                            </div>
                        </motion.div>

                        {/* Service details */}
                        <motion.div
                            variants={fadeInRight}
                            className="w-full flex flex-col items-start gap-2 pt-1"
                        >
                            <div>
                                {/* Service title */}
                                <Link
                                    href={currentService.href || "#services"}
                                    className="group"
                                >
                                    <motion.h3
                                        variants={titleVariants}
                                        className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-950 leading-[1.2] group-hover:text-[#C46D77] transition-colors cursor-pointer"
                                    >
                                        {currentService.title}
                                    </motion.h3>
                                </Link>
                                <span className="block w-12 h-[3px] bg-[#C46D77] mt-2 rounded-full" />
                            </div>

                            <motion.p
                                variants={descVariants}
                                className="text-gray-600 text-sm sm:text-base leading-relaxed"
                            >
                                {currentService.description}
                            </motion.p>

                            {/* Checklist Points */}
                            <motion.div
                                variants={staggerContainer(0.08)}
                                className="space-y-3 py-2 w-full"
                            >
                                {currentService.points.map((point, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={fadeInUp}
                                        className="flex items-start gap-3"
                                    >
                                        <FaCheckCircle className="text-[#C46D77] text-xl shrink-0 mt-0.5" />
                                        <span className="text-sm font-medium text-gray-800">
                                            {point}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* CTA button */}
                            <div className="pt-2">
                                <button
                                    type="button"
                                    data-open-modal="contact"
                                    className="inline-block cursor-pointer"
                                >
                                    <motion.div
                                        whileHover={buttonHoverTap.hover}
                                        whileTap={buttonHoverTap.tap}
                                        className="group flex items-center gap-3 bg-gradient-to-r from-[#C46D77] via-[#D9828F] to-[#A84E59] text-white font-semibold px-7 py-3 shadow-md hover:shadow-lg transition-all text-sm sm:text-base cursor-pointer"
                                    >
                                        <span>{data.ctaButton?.text || "Book Treatment"}</span>
                                        <HiArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
                                    </motion.div>
                                </button>
                            </div>

                        </motion.div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}