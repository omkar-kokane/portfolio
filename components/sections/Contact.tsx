"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { personal } from "@/data";
import { MagneticButton } from "../ui/MagneticButton";

export function Contact() {
    return (
        <SectionWrapper id="contact" title="Init Contact">
            <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">

                {/* Big Text */}
                <div>
                    <h3 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] mb-8">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-acid)] to-[var(--color-neon)]">break</span> the simulation?
                    </h3>
                    <p className="text-xl text-gray-400 font-mono mb-8">
                        Looking for a dev who speaks fluent Gen Z and Code? I'm currently open for new quests.
                    </p>

                    <div className="space-y-4">
                        <a href={`mailto:${personal.email}`} className="block text-2xl font-bold hover:text-[var(--color-acid)] transition-colors hover-glitch">
                            → {personal.email}
                        </a>
                        <p className="text-lg font-mono text-gray-500">{personal.location}</p>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-6 mt-12">
                        {[
                            { icon: "GH", link: personal.social.github },
                            { icon: "IN", link: personal.social.linkedin }
                        ].map(social => (
                            social.link && (
                                <MagneticButton key={social.icon}>
                                    <a href={social.link} target="_blank" className="w-16 h-16 border-2 border-white flex items-center justify-center text-xl font-black hover:bg-white hover:text-black transition-all rounded-full">
                                        {social.icon}
                                    </a>
                                </MagneticButton>
                            )
                        ))}
                    </div>
                </div>

                {/* Form */}
                <form className="bg-[#151515] p-8 border border-white/10 relative">
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--color-acid)]" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[var(--color-neon)]" />

                    <div className="space-y-6">
                        <div>
                            <label className="block text-xs font-mono uppercase text-gray-500 mb-2">Identity</label>
                            <input
                                type="text"
                                placeholder="YOUR_NAME"
                                className="w-full bg-black border-b-2 border-white/20 p-4 text-white font-bold focus:border-[var(--color-acid)] focus:outline-none placeholder:text-gray-700 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono uppercase text-gray-500 mb-2">Coords</label>
                            <input
                                type="email"
                                placeholder="YOUR@EMAIL.COM"
                                className="w-full bg-black border-b-2 border-white/20 p-4 text-white font-bold focus:border-[var(--color-acid)] focus:outline-none placeholder:text-gray-700 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono uppercase text-gray-500 mb-2">Transmission</label>
                            <textarea
                                rows={4}
                                placeholder="MESSAGE_CONTENT..."
                                className="w-full bg-black border-b-2 border-white/20 p-4 text-white font-bold focus:border-[var(--color-acid)] focus:outline-none placeholder:text-gray-700 transition-colors resize-none"
                            />
                        </div>

                        <MagneticButton className="w-full">
                            <button className="w-full bg-white text-black font-black uppercase py-4 hover:bg-[var(--color-acid)] transition-colors tracking-widest text-lg">
                                Send Data
                            </button>
                        </MagneticButton>
                    </div>
                </form>

            </div>

            <footer className="absolute bottom-4 left-0 w-full text-center text-[10px] font-mono text-gray-600 uppercase">
                © {new Date().getFullYear()} Omkar Kokane // System.AllSystemsGo
            </footer>
        </SectionWrapper>
    );
}

export default Contact;
