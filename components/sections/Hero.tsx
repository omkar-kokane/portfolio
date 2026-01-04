"use client";

import { motion } from "framer-motion";
import { Typewriter } from "../ui/Typewriter";
import { personal } from "@/data";
import { MagneticButton } from "../ui/MagneticButton";

// ============================================================
// HERO SECTION (GEN Z EDITION)
// ============================================================

export function Hero() {
    return (
        <section
            id="hero"
            className="snap-section relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#111]"
        >
            {/* Background Noise & Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(204,255,0,0.05),transparent_50%)]" />

            <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-7xl">
                {/* Top Greeting */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[var(--color-acid)] font-mono text-sm tracking-[0.2em] mb-4 uppercase"
                >
          // portfolio_v2.0_final
                </motion.p>

                {/* Name - HUGE BRUTALIST TYPOGRAPHY */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.9] tracking-tighter mb-6 mix-blend-difference text-white hover:text-transparent hover:bg-clip-text hover:bg-white transition-all duration-300"
                >
                    {personal.firstName}
                    <br />
                    <span className="text-stroke-2 text-transparent hover:text-[var(--color-neon)] transition-colors duration-300 text-stroke-white">
                        {personal.lastName}
                    </span>
                </motion.h1>

                {/* Typewriter Role */}
                <div className="h-12 md:h-16 flex items-center justify-center mb-8">
                    <Typewriter
                        texts={personal.roles.map(r => r.toUpperCase())}
                        typingSpeed={50}
                        deletingSpeed={30}
                        className="text-xl md:text-3xl font-bold font-mono bg-[var(--color-acid)] text-black px-2 py-1"
                        cursorChar="█"
                    />
                </div>

                {/* Tagline */}
                <p className="max-w-xl text-gray-400 font-mono text-sm md:text-base mb-12">
                    {personal.tagline}
                </p>

                {/* Buttons */}
                <div className="flex gap-6">
                    <MagneticButton>
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-white text-black font-black uppercase tracking-wider text-sm hover:bg-[var(--color-acid)] transition-colors border border-transparent hover:border-black"
                        >
                            View Works
                        </a>
                    </MagneticButton>

                    <MagneticButton>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-transparent text-white font-black uppercase tracking-wider text-sm border border-white hover:bg-white hover:text-black transition-colors"
                        >
                            Contact Me
                        </a>
                    </MagneticButton>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-10 font-mono text-xs text-gray-600 rotate-[-90deg] origin-bottom-left">
                SCROLL_DOWN_FOR_CONTENT
            </div>
            <div className="absolute bottom-10 right-10 flex gap-2">
                {/* Animated Scroll Indicator */}
                <motion.div
                    animate={{ height: [20, 50, 20] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-1 bg-[var(--color-neon)]"
                />
            </div>
        </section>
    );
}

export default Hero;
