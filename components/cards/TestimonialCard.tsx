"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { cardVariants, cardHover } from "@/utils/animations";

export interface TestimonialItem {
    id: number | string;
    name: string;
    role?: string;
    image: string;
    rating?: number;
    quote?: string;
    feedback?: string;
}

export default function TestimonialCard({
    item,
    testimonial,
}: {
    item?: TestimonialItem;
    testimonial?: TestimonialItem;
    index?: number;
}) {
    const data = item || testimonial;
    if (!data) return null;

    const ratingCount = Math.max(1, Math.min(5, Number(data.rating) || 5));

    return (
        <motion.div
            key={data.id}
            variants={cardVariants}
            whileHover={cardHover.hover}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-cols-1 sm:grid-cols-2 border border-rose-50 h-full w-full min-h-[250px]"
        >
            {/* Client image */}
            <div className="relative w-full h-[220px] sm:h-full min-h-[220px]">
                <Image
                    src={data.image}
                    alt={data.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Quote and details */}
            <div className="p-5 flex flex-col justify-between gap-2 h-full">
                <FaQuoteLeft className="text-[#C46D77]/60 text-2xl" />

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {data.quote}
                </p>

                <div>
                    {/* Rating stars */}
                    <div className="flex items-center gap-1 text-[#C46D77] text-xs mb-2">
                        {[...Array(ratingCount)].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>

                    <h3 className="font-serif text-base font-bold text-gray-900">
                        {data.name}
                    </h3>

                    <span className="block text-[10px] font-bold tracking-[0.2em] text-[#C46D77] uppercase mt-0.5">
                        {data.role}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}