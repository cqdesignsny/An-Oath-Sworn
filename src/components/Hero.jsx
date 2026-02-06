import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background with parallax effect */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url("${import.meta.env.BASE_URL}main-site-header.png")`,
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black/60 cinematic-overlay"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="uppercase tracking-[6px] text-secondary-text text-sm mb-4 font-lato"
                >
                    M.T. KADISIN
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-6xl md:text-7xl font-cinzel-dec text-primary-text mb-4 drop-shadow-[0_0_10px_rgba(79,184,204,0.3)]"
                >
                    An Oath Sworn
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl font-cinzel text-gold-accent tracking-[3px] mb-8"
                >
                    Saga of the Stone King — Book One
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-xl md:text-2xl italic text-primary-text mb-12 font-lato"
                >
                    A hero nobody asked for. A weapon nobody could control.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    onClick={() => document.getElementById('the-story').scrollIntoView({ behavior: 'smooth' })}
                    className="stone-button text-rune-cyan font-bold tracking-widest uppercase text-base md:text-sm"
                >
                    Enter Rockhome ↓
                </motion.button>
            </div>

            {/* Floating particles effect placeholder */}
            <div className="absolute inset-0 pointer-events-none">
                {/* We can add a simple particle component here later if needed */}
            </div>
        </section>
    );
};

export default Hero;
