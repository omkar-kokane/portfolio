"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ============================================================
// SKILL BAR COMPONENT
// ============================================================
// Animated progress bar for displaying skill proficiency
// Animates when scrolled into view

interface SkillBarProps {
    name: string;
    proficiency: number; // 0-100
    color?: "cyan" | "purple" | "pink" | "green";
    delay?: number;
}

const colorClasses = {
    cyan: "from-cyan-400 to-cyan-500",
    purple: "from-purple-400 to-purple-500",
    pink: "from-pink-400 to-pink-500",
    green: "from-green-400 to-green-500",
};

export function SkillBar({
    name,
    proficiency,
    color = "cyan",
    delay = 0,
}: SkillBarProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <div ref={ref} className="mb-4">
            <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300 text-sm font-medium">{name}</span>
                <span className="text-gray-500 text-xs">{proficiency}%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isInView ? `${proficiency}%` : 0 }}
                    transition={{ duration: 1, delay, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${colorClasses[color]} rounded-full`}
                />
            </div>
        </div>
    );
}

// ============================================================
// SKILL CATEGORY CARD
// ============================================================
// Card container for a category of skills

interface SkillCategoryCardProps {
    title: string;
    icon: string;
    skills: { name: string; proficiency: number }[];
    index?: number;
}

export function SkillCategoryCard({
    title,
    icon,
    skills,
    index = 0,
}: SkillCategoryCardProps) {
    const colors: Array<"cyan" | "purple" | "pink" | "green"> = ["cyan", "purple", "pink", "green"];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#12121a] rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-colors"
        >
            <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>

            <div>
                {skills.map((skill, i) => (
                    <SkillBar
                        key={skill.name}
                        name={skill.name}
                        proficiency={skill.proficiency}
                        color={colors[i % colors.length]}
                        delay={i * 0.1}
                    />
                ))}
            </div>
        </motion.div>
    );
}

export default SkillBar;
