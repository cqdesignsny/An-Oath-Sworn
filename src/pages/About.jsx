import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="relative pt-32 pb-24 bg-deep-bg overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url("${import.meta.env.BASE_URL}ancestors-hall.png")`,
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-deep-bg/85"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-cinzel text-primary-text mb-12 text-center"
                >
                    About M.T. Kadisin
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        src={`${import.meta.env.BASE_URL}author-portrait.png`}
                        alt="Author portrait"
                        className="w-full rounded-lg border border-gold-accent/20"
                    />
                    <div className="space-y-6 text-secondary-text font-lato text-base md:text-lg">
                        <p>
                            M.T. Kadisin's journey into the depths of Rockhome began not with a pen, but with a fascination for the unbreakable.
                        </p>
                        <p>
                            Growing up in the myth-steeped landscapes of the Hudson Valley, he spent his youth lost in the labyrinthine halls of classic RPGs and the sprawling epics of high fantasy.
                        </p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 text-secondary-text font-lato text-base md:text-lg leading-relaxed"
                >
                    <p>
                        When he's not "sacrificing his imagination to the Kraken Tree," Michael is a champion of the "bearded arts" and a perennial nerd who believes that every stone has a story to tell if you listen closely enough.
                    </p>
                    <p>
                        "An Oath Sworn" is the culmination of years of world-building, character sketching (like the many faces of Grady), and a deep-seated belief that even the most "unthinking" tool has the spark of a hero within.
                    </p>

                    <div className="bg-card-bg p-8 border border-border-subtle rounded-lg mt-12">
                        <h3 className="font-cinzel text-gold-accent text-xl md:text-2xl mb-4 italic">The Author's Note</h3>
                        <p className="text-primary-text/80 italic text-base md:text-lg">
                            "Rockhome isn't just a setting; it's a character. It's the weight of the mountain and the heat of the forge. I wanted to write a book that felt as solid and real as the stone itself."
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
