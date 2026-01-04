"use client";

import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { MagneticButton } from "./MagneticButton";

const navItems = ["Hero", "About", "Experience", "Projects", "Skills", "Contact"];

export function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        // Determine active section based on scroll
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            sections.forEach((section) => {
                const top = section.offsetTop;
                const height = section.clientHeight;
                if (window.scrollY >= top - height / 3) {
                    setActiveSection(section.id);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id.toLowerCase());
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="fixed top-0 left-0 h-screen w-20 hidden md:flex flex-col items-center justify-between py-10 z-50 border-r border-[#ffffff10] bg-[#11111150] backdrop-blur-md">
            {/* Logo */}
            <div className="font-black text-2xl tracking-tighter transform -rotate-90">
                OK
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-8">
                {navItems.map((item) => (
                    <MagneticButton key={item}>
                        <button
                            onClick={() => scrollTo(item.toLowerCase())}
                            className="group flex flex-col items-center gap-2"
                        >
                            <div
                                className={`w-1 transition-all duration-300 ${activeSection === item.toLowerCase() ? "h-8 bg-[var(--color-acid)]" : "h-1 bg-gray-600 group-hover:h-4 group-hover:bg-white"}`}
                            />
                            <span className="hidden group-hover:block absolute left-14 bg-white text-black text-xs font-bold px-2 py-1 uppercase tracking-wider">
                                {item}
                            </span>
                        </button>
                    </MagneticButton>
                ))}
            </div>

            {/* Menu Icon (Visual only for now) */}
            <div className="w-6 flex flex-col gap-1.5 cursor-pointer hover:gap-2 transition-all">
                <div className="w-full h-0.5 bg-white" />
                <div className="w-full h-0.5 bg-white" />
                <div className="w-full h-0.5 bg-white" />
            </div>
        </nav>
    );
}

// Mobile Bottom Nav
export function MobileNavbar() {
    return (
        <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#11111190] backdrop-blur-lg border border-white/10 rounded-full px-6 py-3 z-50 flex gap-6">
            {["Hero", "Projects", "Contact"].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase text-white hover:text-[var(--color-acid)]">
                    {item}
                </a>
            ))}
        </nav>
    );
}

export default Navbar;
