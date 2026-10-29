import { Variants, Transition, TargetAndTransition } from "framer-motion";

/**
 * Standard Transitions
 */
export const smoothTransition: Transition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
};

export const springTransition: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 25,
};

export const defaultViewport = {
    once: true,
    amount: 0.2,
};

/**
 * Container / Stagger Animations
 */
export const staggerContainer = (
    staggerChildren = 0.1,
    delayChildren = 0
): Variants => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
});

export const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

/**
 * Basic Fade & Directional Variants
 */
export const fadeIn = (
    direction: "up" | "down" | "left" | "right" = "up",
    delay = 0,
    duration = 0.5
): Variants => ({
    hidden: {
        opacity: 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
});

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

/**
 * Title & Heading Animations
 */
export const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1],
        },
    },
};

export const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
        },
    },
};

/**
 * Text & Description Animations
 */
export const descVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut",
        },
    },
};

/**
 * Image Animations
 */
export const imageScaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const imageZoomHover = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

/**
 * Card & Grid Item Animations
 */
export const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export const cardHover: { rest: TargetAndTransition; hover: TargetAndTransition } = {
    rest: { y: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" },
    hover: {
        y: -4,
        boxShadow: "0 10px 25px rgba(216, 155, 51, 0.15)",
        transition: { duration: 0.3, ease: "easeInOut" },
    },
};

/**
 * Icon Animations
 */
export const iconPop: Variants = {
    hidden: { scale: 0.6, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 20,
        },
    },
};

export const iconPulse = {
    scale: [1, 1.08, 1],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

/**
 * Button & CTA Animations
 */
export const buttonHoverTap = {
    hover: { scale: 1.03, transition: { duration: 0.2 } },
    tap: { scale: 0.97, transition: { duration: 0.1 } },
};

/**
 * Navbar & Menu Animations
 */
export const navbarSlideDown: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

export const mobileMenuVariants: Variants = {
    hidden: {
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.25,
            ease: "easeInOut",
            when: "afterChildren",
        },
    },
    visible: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
            when: "beforeChildren",
            staggerChildren: 0.05,
        },
    },
};

export const mobileItemVariants: Variants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.25,
            ease: "easeOut",
        },
    },
};

/**
 * Footer Specific Animations
 */
export const footerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

export const footerColumnVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const footerItemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

export const footerSocialIconVariants: Variants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 350,
            damping: 22,
        },
    },
};

export const lineExpandVariants: Variants = {
    hidden: { width: 0 },
    visible: {
        width: 32,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

/* Social variants */
export const socialIconHover: { rest: TargetAndTransition; hover: TargetAndTransition; tap: TargetAndTransition } = {
    rest: { scale: 1 },
    hover: {
        scale: 1.15,
        backgroundColor: "#C46D77",
        color: "#ffffff",
        transition: { type: "spring", stiffness: 400, damping: 17 },
    },
    tap: { scale: 0.95 },
};

export const blogCardHover: { rest: TargetAndTransition; hover: TargetAndTransition } = {
    rest: { y: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" },
    hover: {
        y: -6,
        boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

/**
 * Gallery & Modal Specific Animations
 */
export const galleryCardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.3, ease: "easeIn" },
    },
};

export const galleryCardHover: { rest: TargetAndTransition; hover: TargetAndTransition } = {
    rest: { y: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" },
    hover: {
        y: -4,
        boxShadow: "0 14px 28px rgba(0,0,0,0.15)",
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

export const modalBackdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2, ease: "easeIn" },
    },
};

export const modalContentVariants: Variants = {
    hidden: { opacity: 0, scale: 0.92, y: 15 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: {
        opacity: 0,
        scale: 0.92,
        y: 15,
        transition: { duration: 0.2, ease: "easeIn" },
    },
};

export const listItemHover: { rest: TargetAndTransition; hover: TargetAndTransition } = {
    rest: { x: 0 },
    hover: { x: 4, transition: { duration: 0.2, ease: "easeOut" } },
};



