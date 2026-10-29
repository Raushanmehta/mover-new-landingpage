"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";
import { FaRegQuestionCircle } from "react-icons/fa";
import site from "@/data/index";
import {
    titleVariants,
    subtitleVariants,
    descVariants,
    fadeInUp,
    defaultViewport,
    staggerContainer,
} from "@/utils/animations";

interface FaqsSectionProps {
    data?: typeof site.faqs;
}

export default function FaqsSection({ data: propData }: FaqsSectionProps = {}) {
    const data = propData || site.faqs;
    const faqsList = data?.faqsList || [];
    const [openId, setOpenId] = useState<number | null>(1);

    const toggleFaq = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section id="faqs" className="w-full bg-[#FFF5F5] py-10 lg:py-16 overflow-hidden scroll-mt-20">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16">
                {/* Header container */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="text-center max-w-3xl mx-auto mb-8 lg:mb-10 flex flex-col items-center gap-3"
                >
                    {/* Subtitle text */}
                    <motion.div
                        variants={subtitleVariants}
                        className="flex items-center gap-2 text-[#C46D77]"
                    >
                        <span className="w-8 md:w-10 h-[1.5px] bg-[#C46D77]" />
                        <span className="text-xs md:text-sm uppercase tracking-[0.25em] font-semibold">
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

                {/* Faq accordion */}
                <motion.div
                    variants={staggerContainer(0.08)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="max-w-[1400px] mx-auto space-y-3.5"
                >
                    {faqsList.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                            <motion.div
                                key={faq.id}
                                variants={fadeInUp}
                                className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                                    ? "bg-white border-[#C46D77]/60 shadow-md shadow-[#C46D77]/10"
                                    : "bg-white/90 border-gray-200/80 hover:border-[#C46D77]/40"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    aria-expanded={isOpen}
                                    className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                                >
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen
                                                ? "bg-[#C46D77] text-white"
                                                : "bg-rose-50 text-[#C46D77]"
                                                }`}
                                        >
                                            <FaRegQuestionCircle className="text-sm" />
                                        </div>
                                        <span className="font-sans text-base sm:text-lg font-normal text-gray-900 leading-snug">
                                            {faq.question}
                                        </span>
                                    </div>

                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen
                                            ? "bg-rose-100 text-[#A84E59]"
                                            : "bg-gray-100 text-gray-500"
                                            }`}
                                    >
                                        <HiChevronDown className="text-base" />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed pl-16 border-t border-gray-100/80">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
