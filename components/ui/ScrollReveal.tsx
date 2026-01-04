"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

// ============================================================
// SCROLL REVEAL COMPONENT
// ============================================================
// Wraps content and reveals it with animation when scrolled into view
// Usage: <ScrollReveal><YourContent /></ScrollReveal>

interface ScrollRevealProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right" | "none";
    delay?: number;
    duration?: number;
    distance?: number;
    className?: string;
    once?: boolean; // Only animate once
    threshold?: number; // 0-1, how much of element must be visible
}

export function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.6,
    distance = 50,
    className = "",
    once = true,
    threshold = 0.1,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    // Calculate initial position based on direction
    const getInitialPosition = () => {
        switch (direction) {
            case "up": return { y: distance, x: 0 };
            case "down": return { y: -distance, x: 0 };
            case "left": return { x: distance, y: 0 };
            case "right": return { x: -distance, y: 0 };
            case "none": return { x: 0, y: 0 };
            default: return { y: distance, x: 0 };
        }
    };

    const initial = getInitialPosition();

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                ...initial
            }}
            animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : initial.x,
                y: isInView ? 0 : initial.y,
            }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1], // Custom easing
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ============================================================
// STAGGER CONTAINER
// ============================================================
// Container that staggers the animation of its children
// Usage: <StaggerContainer><ScrollReveal>...</ScrollReveal></StaggerContainer>

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Child variant for stagger animation
export const staggerChild = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
};

export default ScrollReveal;
