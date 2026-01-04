"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "../ui/TimelineCard";
import { getExperiencesSorted } from "@/data";
import { SectionWrapper } from "../ui/SectionWrapper";

export function Experience() {
    const experiences = getExperiencesSorted();

    return (
        <SectionWrapper id="experience" title="XP Timeline">
            <div className="relative w-full max-w-4xl mx-auto h-[70vh] flex gap-8">

                {/* Progress Bar Line */}
                <div className="hidden md:block w-1 bg-white/10 rounded-full relative">
                    <motion.div
                        className="absolute top-0 left-0 w-full bg-[var(--color-acid)] rounded-full"
                        style={{ height: "40%" }} // Static for now, could be dynamic scroll
                    />
                </div>

                <div className="flex-1 overflow-y-auto pr-4 no-scrollbar space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="group relative pl-8 border-l border-white/10 md:border-none md:pl-0">
                            {/* Mobile Left Border Indicator */}
                            <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-white/10 group-hover:bg-[var(--color-acid)] transition-colors" />

                            <div className="bg-[#1a1a1a] p-6 md:p-8 hover:bg-[#222] transition-colors border-l-4 border-transparent hover:border-[var(--color-acid)]">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white uppercase">{exp.role}</h3>
                                        <div className="text-[var(--color-neon)] font-mono text-sm">{exp.company}</div>
                                    </div>
                                    <div className="text-right text-xs font-mono text-gray-500">
                                        {exp.duration}
                                        <div className="mt-1 px-2 py-0.5 bg-white/5 inline-block rounded text-[10px] uppercase text-gray-300">
                                            {exp.type}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    {exp.description[0]} {/* Showing just first point for cleaner brutalist look */}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies?.slice(0, 4).map(tech => (
                                        <span key={tech} className="px-2 py-1 bg-black text-white text-[10px] font-mono uppercase tracking-wider border border-white/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}

export default Experience;
