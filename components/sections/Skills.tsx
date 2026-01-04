"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { skillCategories, languages } from "@/data";

export function Skills() {
    return (
        <SectionWrapper id="skills" title="Arsenal">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-[#111] border border-white/20 p-6 hover:border-[var(--color-acid)] transition-colors group"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{category.icon}</span>
                            <h3 className="text-xl font-bold uppercase tracking-wider">{category.title}</h3>
                        </div>

                        <div className="space-y-4">
                            {category.skills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between text-xs font-mono mb-1 uppercase text-gray-400 group-hover:text-white transition-colors">
                                        <span>{skill.name}</span>
                                        <span>{skill.proficiency}%</span>
                                    </div>
                                    <div className="h-1 bg-white/10 w-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-white group-hover:bg-[var(--color-acid)] transition-colors duration-300"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.proficiency}%` }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}

export default Skills;
