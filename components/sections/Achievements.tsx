"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { achievements, certifications } from "@/data";
import { MagneticButton } from "../ui/MagneticButton";

export function Achievements() {
    return (
        <SectionWrapper id="achievements" title="Trophies">
            <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">

                {/* Recent Wins */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-black uppercase text-[var(--color-neon)] mb-6">// Hackathons & Awards</h3>
                    {achievements.map((item) => (
                        <div key={item.id} className="bg-[#151515] p-5 border-l-4 border-white h-full hover:bg-[#222] transition-colors group">
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-bold uppercase">{item.title}</h4>
                                        {item.position && (
                                            <span className="bg-[var(--color-neon)] text-black text-[10px] font-bold px-2 py-0.5 uppercase">
                                                {item.position}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-400 text-sm font-mono">{item.organization}</p>
                                </div>
                                <div className="mt-4 text-xs font-mono text-gray-600 group-hover:text-gray-400 transition-colors">
                                    {item.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div>
                    <h3 className="text-2xl font-black uppercase text-white mb-6">// Deploying Knowledge</h3>
                    <div className="grid grid-cols-1 gap-3">
                        {certifications.map((cert) => (
                            <MagneticButton key={cert.id} className="w-full">
                                <div className="w-full bg-[#111] border border-white/10 p-4 hover:border-white hover:bg-white hover:text-black transition-all cursor-default">
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 bg-[var(--color-acid)] rounded-full animate-pulse" />
                                        <div>
                                            <div className="font-bold uppercase text-sm">{cert.title}</div>
                                            <div className="text-xs opacity-60 font-mono mt-0.5 uppercase">{cert.organization}</div>
                                        </div>
                                    </div>
                                </div>
                            </MagneticButton>
                        ))}
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
}

export default Achievements;
