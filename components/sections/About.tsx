"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { personal } from "@/data";
import { MagneticButton } from "../ui/MagneticButton";

export function About() {
    const stats = [
        { label: "Years Exp.", value: "3+" },
        { label: "Projects", value: "12+" },
        { label: "Awards", value: "5" }
    ];

    return (
        <SectionWrapper id="about" title="About">
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center w-full">

                {/* Profile Image - Brutalist Frame */}
                <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-[var(--color-acid)] to-[var(--color-neon)] opacity-30 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Image Container */}
                    <div className="relative aspect-square md:aspect-[3/4] max-w-sm md:max-w-none mx-auto bg-[#1a1a1a] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                        <img
                            src="/images/profile.png"
                            alt={personal.name}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: 'top' }}
                        />

                        {/* Overlay Noise */}
                        <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-white text-black p-4 font-black text-xl uppercase leading-none transform rotate-[-5deg]">
                        Gen Z<br />Dev
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-8">
                    <h3 className="text-3xl md:text-5xl font-bold uppercase leading-tight">
                        Building the <span className="text-[var(--color-acid)]">future</span> with code & chaos.
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[var(--color-neon)] pl-6">
                        {personal.bio}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                        {stats.map(stat => (
                            <div key={stat.label}>
                                <div className="text-4xl font-black text-white">{stat.value}</div>
                                <div className="text-xs font-mono text-gray-500 uppercase mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        {personal.resumeUrl && (
                            <MagneticButton>
                                <a href={personal.resumeUrl} download className="inline-flex items-center gap-2 px-6 py-3 bg-[#222] text-white hover:bg-[var(--color-acid)] hover:text-black transition-colors font-bold uppercase text-sm tracking-wider">
                                    Download CV
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                </a>
                            </MagneticButton>
                        )}
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
}

export default About;
