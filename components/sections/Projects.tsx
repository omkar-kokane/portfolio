"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { projects } from "@/data";
import { MagneticButton } from "../ui/MagneticButton";

// ============================================================
// PROJECTS SECTION (BENTO GRID - GEN Z EDITION)
// ============================================================

export function Projects() {
    // Use the 3 generated vector images for the first 3 projects
    // We'll map them by index
    const projectImages = [
        "/images/project-1.png",
        "/images/project-2.png",
        "/images/project-3.png",
    ];

    return (
        <SectionWrapper
            id="projects"
            title="Selected Works"
            subtitle="Digital experiments & Production code"
            className="!p-0" // Remove default padding for full-width bento
        >
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 w-full h-[70vh] max-w-7xl mx-auto px-4">
                {projects.slice(0, 5).map((project, index) => {
                    // Determine Bento Grid spans based on index
                    // 0: Large (2x2)
                    // 1, 2: Tall or Wide
                    const isLarge = index === 0;
                    const isWide = index === 3;

                    let colSpan = "md:col-span-1";
                    let rowSpan = "md:row-span-1";

                    if (isLarge) {
                        colSpan = "md:col-span-2";
                        rowSpan = "md:row-span-2";
                    } else if (isWide) {
                        colSpan = "md:col-span-2";
                    }

                    const bgImage = projectImages[index % 3];

                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-[#151515] ${colSpan} ${rowSpan}`}
                        >
                            {/* Background Image / Gradient */}
                            <div className="absolute inset-0 z-0">
                                {/* Fallback gradient if no image, or use image if available */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                <img
                                    src={bgImage}
                                    alt="abstract art"
                                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {/* Category Tag */}
                                    <span className="inline-block px-3 py-1 mb-2 text-xs font-mono font-bold text-black bg-[var(--color-acid)] rounded-full uppercase tracking-wider">
                                        {project.category}
                                    </span>

                                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-none mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {project.shortDescription}
                                    </p>

                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                        {project.githubUrl && (
                                            <MagneticButton>
                                                <a href={project.githubUrl} target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition-colors block">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                                                </a>
                                            </MagneticButton>
                                        )}
                                        {project.liveUrl && (
                                            <MagneticButton>
                                                <a href={project.liveUrl} target="_blank" className="px-4 py-2 bg-[var(--color-acid)] text-black font-bold text-sm rounded-full uppercase tracking-wide hover:bg-white transition-colors block">
                                                    View Live
                                                </a>
                                            </MagneticButton>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}

export default Projects;
