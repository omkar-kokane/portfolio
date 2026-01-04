"use client";

import { ReactNode } from "react";

// ============================================================
// SECTION WRAPPER COMPONENT (UPDATED FOR SCROLL SNAP)
// ============================================================
// Now enforces full screen height and scroll snapping

interface SectionWrapperProps {
    children: ReactNode;
    id: string;
    title?: string;
    subtitle?: string;
    className?: string;
    fullHeight?: boolean; // Now defaults to true effectively via CSS
    dark?: boolean;
}

export function SectionWrapper({
    children,
    id,
    title,
    subtitle,
    className = "",
    fullHeight = true,
    dark = true,
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`snap-section relative w-full h-screen flex flex-col items-center justify-center p-4 md:p-8 ${dark ? "bg-[#111]" : "bg-[#0a0a0a]"
                } ${className}`}
        >
            {/* Decorative Background Elements for Gen Z Vibe */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--color-acid)] to-transparent opacity-5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[var(--color-neon)] to-transparent opacity-5 blur-[100px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto flex flex-col h-full justify-center">
                {/* Section Header */}
                {title && (
                    <div className="text-center mb-10 md:mb-16 shrink-0">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tighter hover-glitch transition-colors">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                                {title}
                            </span>
                            <span className="text-[var(--color-acid)]">.</span>
                        </h2>
                        {subtitle && (
                            <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-mono mt-2 text-[var(--color-text-secondary)]">
                // {subtitle}
                            </p>
                        )}
                    </div>
                )}

                {/* Section Content - Scrollable if too tall */}
                <div className="flex-1 w-full overflow-y-auto no-scrollbar flex flex-col">
                    <div className="w-full my-auto">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionWrapper;
