"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// ============================================================
// PROJECT CARD COMPONENT
// ============================================================
// 3D tilt card with hover effects for project display
// Features: Glassmorphism, gradient border, tech tags

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
    highlights?: string[];
    index?: number;
}

export function ProjectCard({
    title,
    description,
    technologies,
    image,
    liveUrl,
    githubUrl,
    highlights,
    index = 0,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative"
        >
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

            {/* Card content */}
            <div className="relative bg-[#12121a] rounded-2xl overflow-hidden border border-white/5 h-full flex flex-col">
                {/* Project image placeholder */}
                {image ? (
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 overflow-hidden">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    </div>
                ) : (
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center">
                        <span className="text-4xl">🚀</span>
                    </div>
                )}

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 flex-1">
                        {description}
                    </p>

                    {/* Highlights */}
                    {highlights && highlights.length > 0 && (
                        <ul className="mb-4 space-y-1">
                            {highlights.slice(0, 3).map((highlight, i) => (
                                <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs font-medium bg-white/5 text-cyan-400 rounded-md border border-cyan-400/20"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto">
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Live Demo
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;
