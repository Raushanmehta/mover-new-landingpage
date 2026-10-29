"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight, HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import site from "@/data/index";
import {
    navbarSlideDown,
    navItemVariants,
    mobileMenuVariants,
    mobileItemVariants,
    springTransition,
} from "@/utils/animations";

import { useContactModal } from "@/components/common/ContactModalContext";

export default function Navbar() {
    const data = site.navbar;
    const navItems = data.navItems;
    const { openModal } = useContactModal();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const pathname = usePathname() || "/";

    // Scroll spy
    useEffect(() => {
        const sections = ["hero", "about", "services", "why-choose-us", "team", "testimonials", "faqs"];

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            if (scrollY + windowHeight >= docHeight - 80) {
                setActiveSection("faqs");
                return;
            }

            if (scrollY < 90) {
                setActiveSection("hero");
                return;
            }

            const probeY = scrollY + 110;
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const top = el.offsetTop;
                    if (probeY >= top) {
                        setActiveSection(sections[i]);
                        return;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isItemActive = (href: string) => {
        if (href === "/" || href === "#hero") {
            return !activeSection || activeSection === "hero";
        }
        if (href.startsWith("#")) {
            return activeSection === href.slice(1);
        }
        return pathname === href;
    };

    // Nav click
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setMobileMenuOpen(false);

        if (pathname !== "/") {
            return;
        }

        e.preventDefault();

        const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number | HTMLElement | string, opts?: { offset?: number; duration?: number }) => void } }).__lenis;

        if (href === "/" || href === "#" || href === "#hero") {
            setActiveSection("hero");
            if (lenis) {
                lenis.scrollTo(0, { duration: 0.9 });
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
            if (window.location.hash) {
                window.history.pushState(null, "", "/");
            }
            return;
        }

        if (href.startsWith("#")) {
            const targetId = href.slice(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                setActiveSection(targetId);
                if (lenis) {
                    lenis.scrollTo(targetEl, { duration: 0.9 });
                } else {
                    targetEl.scrollIntoView({ behavior: "smooth" });
                }
                window.history.pushState(null, "", href);
            }
        }
    };

    // CTA click
    const handleCtaClick = (e: React.MouseEvent) => {
        e.preventDefault();
        openModal();
        setMobileMenuOpen(false);
    };

    return (
        <motion.nav
            variants={navbarSlideDown}
            initial="hidden"
            animate="visible"
            className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all"
        >
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
                <div className="hidden lg:flex items-center gap-7 xl:gap-8">
                    {navItems.map((item) => {
                        const active = isItemActive(item.href);
                        const linkHref = pathname === "/" ? item.href : (item.href.startsWith("#") ? `/${item.href}` : item.href);
                        return (
                            <motion.div
                                key={item.name}
                                variants={navItemVariants}
                                whileHover={{ y: -1 }}
                                className="relative"
                            >
                                <Link
                                    href={linkHref}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className={`relative py-2 text-sm xl:text-base font-medium transition-colors duration-200 block ${active
                                        ? "text-[#C46D77] font-semibold"
                                        : "text-gray-800 hover:text-[#C46D77]"
                                        }`}
                                >
                                    {item.name}

                                    {/* Active indicator */}
                                    {active && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C46D77]"
                                            transition={springTransition}
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Action items */}
                <div className="flex items-center gap-3 sm:gap-4">

                    {/* Vertical divider */}
                    <span className="hidden lg:block h-6 w-[1px] bg-[#C46D77]/40" />

                    {/* Quote button */}
                    <button
                        onClick={handleCtaClick}
                        data-open-modal="contact"
                        className="group hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#C46D77] via-[#D9828F] to-[#A84E59] text-white font-semibold px-5 sm:px-6 py-2.5 shadow-md hover:shadow-lg hover:shadow-[#C46D77]/25 transition-all text-xs sm:text-sm uppercase tracking-wider cursor-pointer"
                    >
                        <span>{data.ctaButton.text}</span>
                        <HiArrowRight className="text-base transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Menu toggle */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden text-gray-800 hover:text-[#C46D77] p-1.5 transition-colors focus:outline-none cursor-pointer"
                        aria-label="Toggle Navigation"
                    >
                        {mobileMenuOpen ? (
                            <HiX className="text-3xl" />
                        ) : (
                            <HiMenu className="text-3xl" />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Mobile backdrop */}
                        <div
                            className="fixed inset-0 top-20 bg-black/25 backdrop-blur-xs z-40 lg:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Mobile drawer */}
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="lg:hidden relative z-50 bg-white border-t border-gray-100 px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
                        >
                            <div className="space-y-1">
                                {navItems.map((item) => {
                                    const active = isItemActive(item.href);
                                    const linkHref = pathname === "/" ? item.href : (item.href.startsWith("#") ? `/${item.href}` : item.href);
                                    return (
                                        <motion.div key={item.name} variants={mobileItemVariants}>
                                            <Link
                                                href={linkHref}
                                                onClick={(e) => handleNavClick(e, item.href)}
                                                className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-medium transition-all ${active
                                                    ? "text-[#C46D77] bg-[#C46D77]/10 font-semibold border-l-2 border-[#C46D77]"
                                                    : "text-gray-700 hover:text-[#C46D77] hover:bg-gray-50"
                                                    }`}
                                            >
                                                <span>{item.name}</span>
                                                {active && (
                                                    <span className="w-1.5 h-1.5 bg-[#C46D77]" />
                                                )}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Mobile action */}
                            <motion.div variants={mobileItemVariants} className="pt-4 mt-2 border-t border-gray-100">
                                <button
                                    onClick={handleCtaClick}
                                    data-open-modal="contact"
                                    className="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#C46D77] via-[#D9828F] to-[#A84E59] text-white font-semibold px-5 py-3 shadow text-center text-xs uppercase tracking-wider transition-all cursor-pointer"
                                >
                                    <span>{data.ctaButton.text}</span>
                                    <HiArrowRight className="text-base transition-transform group-hover:translate-x-1" />
                                </button>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}