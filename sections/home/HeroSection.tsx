"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import site from "@/data/index";
import {
    titleVariants,
    subtitleVariants,
    fadeInUp,
    buttonHoverTap,
    staggerContainer,
} from "@/utils/animations";

const MotionLink = motion.create(Link);

export default function HeroSection() {
    const data = site.hero;

    return (
        <section id="hero" className="relative w-full min-h-[75vh] lg:min-h-[84vh] flex items-center justify-start overflow-hidden bg-white scroll-mt-20">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={data.bgImage}
                    alt={`${data.titleLine1} ${data.titleLine2} ${data.titleHighlight}`}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-right lg:object-right brightness-[0.98]"
                />
                {/* Soft overlay */}
                <div className="absolute inset-y-0 left-0 w-full sm:w-4/5 md:w-3/5 lg:w-[52%] bg-gradient-to-r from-white/95 via-white/75 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Hero content */}
            <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
                <motion.div
                    variants={staggerContainer(0.12, 0.1)}
                    initial="hidden"
                    animate="visible"
                    className="max-w-2xl flex flex-col items-start gap-4 lg:gap-4"
                >
                    {/* Subtitle text */}
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
                    <motion.h1
                        variants={titleVariants}
                        className="font-bodoni font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-[1.15]"
                    >
                        {data.titleLine1} <br />
                        {data.titleLine2}{" "}
                        <span className="bg-gradient-to-r from-[#C46D77] via-[#D9828F] to-[#A84E59] bg-clip-text text-transparent font-bold">
                            {data.titleHighlight}
                        </span>
                    </motion.h1>

                    {/* Service categories */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex items-center gap-2 md:gap-3 text-sm sm:text-base font-tight tracking-wide text-gray-900"
                    >
                        {data.categories.map((cat, idx) => (
                            <React.Fragment key={cat}>
                                <span>{cat}</span>
                                {idx < data.categories.length - 1 && (
                                    <span className="text-[#C46D77]">–</span>
                                )}
                            </React.Fragment>
                        ))}
                    </motion.div>

                    {/* CTA button */}
                    <motion.div
                        variants={fadeInUp}
                        className="pt-2"
                    >
                        <MotionLink
                            whileHover={buttonHoverTap.hover}
                            whileTap={buttonHoverTap.tap}
                            href={data.ctaButton.href}
                            data-open-modal="contact"
                            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#C46D77] via-[#D9828F] to-[#A84E59] text-white font-semibold px-7 py-3.5 shadow-xl hover:shadow-[#C46D77]/30 transition-all text-base cursor-pointer"
                        >
                            <span>{data.ctaButton.text}</span>
                            <HiArrowRight className="text-xl transition-transform group-hover:translate-x-1.5" />
                        </MotionLink>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}