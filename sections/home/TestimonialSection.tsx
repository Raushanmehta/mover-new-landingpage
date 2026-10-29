"use client";

import React, { useState, useEffect } from "react";
import TestimonialCard from "@/components/cards/TestimonialCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import site from "@/data/index";
import {
    titleVariants,
    subtitleVariants,
    descVariants,
    fadeInUp,
    defaultViewport,
} from "@/utils/animations";

export default function TestimonialSection() {
    const data = site.testimonials;
    const testimonials = data.testimonials;
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        const updateSnap = () => {
            setCurrent(api.selectedScrollSnap());
        };

        const frameId = requestAnimationFrame(updateSnap);
        api.on("select", updateSnap);
        api.on("reInit", updateSnap);

        return () => {
            cancelAnimationFrame(frameId);
            api.off("select", updateSnap);
            api.off("reInit", updateSnap);
        };
    }, [api]);

    return (
        <section id="testimonials" className="w-full bg-white py-8 lg:py-14 overflow-hidden relative scroll-mt-20">
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

                {/* Carousel wrapper */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                >
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="relative w-full"
                    >
                        <CarouselPrevious
                            className="-left-3 sm:-left-6 md:-left-8 lg:-left-12 xl:-left-14 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-rose-50 border border-[#C46D77]/40 text-gray-900 hover:bg-[#C46D77] hover:text-white transition-all shadow-md cursor-pointer"
                        />
                        <CarouselNext
                            className="-right-3 sm:-right-6 md:-right-8 lg:-right-12 xl:-right-14 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-rose-50 border border-[#C46D77]/40 text-gray-900 hover:bg-[#C46D77] hover:text-white transition-all shadow-md cursor-pointer"
                        />

                        <CarouselContent className="-ml-4">
                            {testimonials.map((item) => (
                                <CarouselItem
                                    key={item.id}
                                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                                >
                                    <TestimonialCard item={item} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </motion.div>

                {/* Pagination dots */}
                <div className="flex items-center justify-center gap-2 mt-8 lg:mt-10">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${current === index
                                ? "w-8 bg-[#C46D77]"
                                : "w-2.5 bg-rose-200 hover:bg-rose-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}