"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// ============================================================
// TIMELINE CARD COMPONENT
// ============================================================
// For displaying experience/achievement items in a timeline
// Features: Timeline connector, animated reveal

interface TimelineCardProps {
    children: ReactNode;
    index: number;
    isLast?: boolean;
}

export function TimelineCard({ children, index, isLast = false }: TimelineCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 pb-8 md:pl-0 md:pb-12"
        >
            {/* Timeline connector line */}
            {!isLast && (
                <div className="absolute left-[11px] top-6 w-0.5 h-full bg-gradient-to-b from-cyan-500/50 to-purple-500/50 md:left-1/2 md:-translate-x-1/2" />
            )}

            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 border-4 border-[#0a0a0f] md:left-1/2 md:-translate-x-1/2 z-10">
                <div className="absolute inset-1 rounded-full bg-[#0a0a0f]" />
            </div>

            {/* Content */}
            <div className="md:w-[calc(50%-2rem)] md:odd:ml-auto md:even:mr-auto">
                {children}
            </div>
        </motion.div>
    );
}

// ============================================================
// EXPERIENCE CARD
// ============================================================
// Specific card for work experience entries

interface ExperienceCardProps {
    company: string;
    role: string;
    duration: string;
    type: string;
    description: string[];
    technologies?: string[];
    index: number;
    isLast?: boolean;
}

export function ExperienceCard({
    company,
    role,
    duration,
    type,
    description,
    technologies,
    index,
    isLast,
}: ExperienceCardProps) {
    const typeColors: Record<string, string> = {
        "full-time": "bg-green-500/20 text-green-400",
        "part-time": "bg-blue-500/20 text-blue-400",
        internship: "bg-purple-500/20 text-purple-400",
        volunteer: "bg-cyan-500/20 text-cyan-400",
        freelance: "bg-orange-500/20 text-orange-400",
    };

    return (
        <TimelineCard index={index} isLast={isLast}>
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#12121a] rounded-xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all"
            >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-white">{role}</h3>
                        <p className="text-cyan-400 font-medium">{company}</p>
                    </div>
                    <div className="text-right">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${typeColors[type] || typeColors.volunteer}`}>
                            {type}
                        </span>
                        <p className="text-gray-500 text-sm mt-1">{duration}</p>
                    </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                    {description.map((point, i) => (
                        <li key={i} className="text-gray-400 text-sm flex gap-2">
                            <span className="text-cyan-400 mt-1">▹</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

                {/* Technologies */}
                {technologies && technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-0.5 text-xs bg-white/5 text-gray-400 rounded border border-white/10"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </motion.div>
        </TimelineCard>
    );
}

export default TimelineCard;
