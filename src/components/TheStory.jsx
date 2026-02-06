import React from 'react';
import { motion } from 'framer-motion';

const TheStory = () => {
    return (
        <section id="the-story" className="relative min-h-screen w-full py-20 px-6 flex items-center overflow-hidden">
            {/* Background Image with Fixed Attachment */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("/deep-forge.png")',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black/80 cinematic-overlay"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-cinzel text-gold-accent mb-8 uppercase tracking-wider">
                        The Story
                    </h2>

                    <div className="space-y-4 text-secondary-text text-base md:text-lg leading-relaxed font-lato">
                        <p>Grady was a nobody.</p>
                        <p>A clanless dwarf scraping by in the dust of history — copying numbers in a dead-end office while the world moved on without him.</p>
                        <p>Until the Poster appeared.</p>
                        <p>Lured by the promise of purpose, he volunteered for Keyrdegen Salzum's experiment. They didn't want a hero. They wanted a weapon — obedient, unthinking, unbreakable.</p>
                        <p>But the one thing they couldn't forge out of him was his will.</p>
                    </div>

                    <div className="pl-6 border-l-4 border-gold-accent mt-8 italic text-primary-text text-xl md:text-2xl font-cinzel">
                        "Those who refuse to follow will be driven."
                    </div>
                </motion.div>

                {/* Right Column: Book Mockup & CTAs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <img
                        src="/book-mockup.png"
                        alt="An Oath Sworn Book Mockup"
                        className="w-full max-w-[400px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] mb-8"
                    />

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                        <a
                            href="https://www.mtkadisin.com/shop"
                            className="lava-button text-center w-full sm:w-auto sm:flex-1 sm:max-w-[200px] text-base md:text-sm py-4 md:py-3"
                        >
                            Buy Paperback
                        </a>
                        <a
                            href="https://www.mtkadisin.com/shop"
                            className="stone-button text-rune-cyan text-center w-full sm:w-auto sm:flex-1 sm:max-w-[200px] flex items-center justify-center font-bold tracking-widest uppercase text-base md:text-sm py-4 md:py-3"
                        >
                            Buy eBook
                        </a>
                    </div>

                    <p className="mt-6 text-sm text-secondary-text font-lato">
                        Available now on Amazon, Barnes & Noble, and more.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default TheStory;
