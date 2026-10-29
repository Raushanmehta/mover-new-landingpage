"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight, HiMenu, HiX } from "react-icons/hi";
import site from "@/data/index";
import { useContactModal } from "@/components/common/ContactModalContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("/");
    const data = site.navbar;
    const { openModal } = useContactModal();

    // Scroll spy & hash navigation
    useEffect(() => {
        const sections = [
            { id: "hero", href: "/" },
            { id: "about", href: "#about" },
            { id: "services", href: "#services" },
            { id: "why-choose-us", href: "#why-choose-us" },
            { id: "team", href: "#team" },
            { id: "testimonials", href: "#testimonials" },
            { id: "faqs", href: "#faqs" },
        ];

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY < 60) {
                setActiveSection("/");
                return;
            }

            if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 50) {
                setActiveSection("#faqs");
                return;
            }

            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i].id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(sections[i].href);
                        return;
                    }
                }
            }
        };

        const lenis = (window as unknown as { __lenis?: { on?: (event: string, cb: () => void) => void; off?: (event: string, cb: () => void) => void } }).__lenis;
        if (lenis?.on) {
            lenis.on("scroll", handleScroll);
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        // Initial hash scroll
        if (typeof window !== "undefined" && window.location.hash) {
            const hash = window.location.hash;
            const target = document.querySelector(hash) as HTMLElement | null;
            if (target) {
                setTimeout(() => {
                    const navHeight = 80;
                    const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - navHeight);
                    const l = (window as unknown as { __lenis?: { scrollTo: (t: number, opts?: { duration?: number }) => void } }).__lenis;
                    if (l) {
                        l.scrollTo(targetY, { duration: 0.85 });
                    } else {
                        window.scrollTo({ top: targetY, behavior: "smooth" });
                    }
                    setActiveSection(hash);
                }, 200);
            }
        }

        return () => {
            if (lenis?.off) {
                lenis.off("scroll", handleScroll);
            }
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Nav click
    const handleNavClick = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        setActiveSection(href);

        if (typeof window === "undefined") return;

        if (href === "/" || href === "#hero") {
            const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number, opts?: { duration?: number }) => void } }).__lenis;
            if (lenis) {
                lenis.scrollTo(0, { duration: 0.85 });
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
            window.history.pushState(null, "", "/");
            return;
        }

        const target = document.querySelector(href) as HTMLElement | null;
        if (target) {
            const navHeight = 80;
            const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - navHeight);
            const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number, opts?: { duration?: number }) => void } }).__lenis;
            if (lenis) {
                lenis.scrollTo(targetY, { duration: 0.85 });
            } else {
                window.scrollTo({ top: targetY, behavior: "smooth" });
            }
            window.history.pushState(null, "", href);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between h-20">
                {/* Brand logo */}
                <Link href="/" onClick={(e) => handleNavClick(e, "/")} className="flex items-center">
                    <Image
                        src={data.logo.src}
                        alt={data.logo.alt}
                        width={220}
                        height={70}
                        priority
                        className="h-14 sm:h-16 w-auto object-contain"
                    />
                </Link>

                {/* Desktop navigation */}
                <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
                    {data.navItems.map((item) => {
                        const isActive = activeSection === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className={`relative py-2 text-sm xl:text-base font-medium transition-colors duration-200 block ${isActive
                                    ? "text-[#C46D77] font-semibold"
                                    : "text-gray-800 hover:text-[#C46D77]"
                                }`}
                            >
                                <span>{item.name}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C46D77]"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Action items */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <span className="hidden lg:block h-6 w-[1px] bg-[#C46D77]/40" />

                    {/* Book Now button */}
                    <button
                        type="button"
                        onClick={() => openModal()}
                        data-open-modal="contact"
                        className="group hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#C46D77] via-[#D9828F] to-[#A84E59] text-white font-semibold px-5 sm:px-6 py-2.5 shadow-md hover:shadow-lg hover:shadow-[#C46D77]/25 transition-all text-xs sm:text-sm uppercase tracking-wider cursor-pointer"
                    >
                        <span>{data.ctaButton.text}</span>
                        <HiArrowRight className="text-base transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Mobile menu toggle */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-gray-800 hover:text-[#C46D77] p-1.5 transition-colors focus:outline-none cursor-pointer"
                        aria-label="Toggle Navigation"
                    >
                        {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 top-20 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="lg:hidden absolute top-full left-0 right-0 z-50 bg-white border-t border-gray-100 px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
                        >
                            <div className="space-y-1">
                                {data.navItems.map((item) => {
                                    const isActive = activeSection === item.href;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={(e) => handleNavClick(e, item.href)}
                                            className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-medium transition-all ${isActive
                                                ? "text-[#C46D77] bg-[#C46D77]/10 font-semibold border-l-2 border-[#C46D77]"
                                                : "text-gray-700 hover:text-[#C46D77] hover:bg-gray-50"
                                            }`}
                                        >
                                            <span>{item.name}</span>
                                            {isActive && <span className="w-1.5 h-1.5 bg-[#C46D77]" />}
                                        </Link>
                                    );
                                })}
                            </div>

                            <div className="pt-4 mt-2 border-t border-gray-100">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsOpen(false);
                                        openModal();
                                    }}
                                    data-open-modal="contact"
                                    className="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#C46D77] via-[#D9828F] to-[#A84E59] text-white font-semibold px-5 py-3 shadow text-center text-xs uppercase tracking-wider transition-all cursor-pointer"
                                >
                                    <span>{data.ctaButton.text}</span>
                                    <HiArrowRight className="text-base transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
