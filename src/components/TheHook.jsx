import React from 'react';
import { motion } from 'framer-motion';

const TheHook = () => {
    return (
        <section className="relative bg-deep-bg py-24 px-6 overflow-hidden">
            {/* Subtle Radial Glow - increased opacity to show more visual interest */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-lava-orange/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-12">
                <motion.blockquote
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-3xl font-cinzel italic text-primary-text leading-relaxed"
                >
                    "The Stone King Saga is more than a fantasy — it's a journey into what makes us human."
                </motion.blockquote>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center gap-8"
                >
                    <img
                        src="/book-mockup.png"
                        alt="An Oath Sworn Book"
                        className="w-full max-w-[240px] drop-shadow-2xl"
                    />

                    <a
                        href="https://www.mtkadisin.com/shop"
                        className="lava-button text-base md:text-lg px-12 py-4 animate-pulse-glow"
                    >
                        Get Your Copy
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default TheHook;
