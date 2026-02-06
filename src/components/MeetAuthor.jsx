import React from 'react';
import { motion } from 'framer-motion';

const MeetAuthor = () => {
    return (
        <section id="about-author" className="relative bg-stone-bg py-24 px-6 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("/deep-gate.png")',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-stone-bg/80"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Photo */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="relative max-w-[380px] group">
                        <div className="absolute -inset-2 bg-gold-accent opacity-20 rounded-xl blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                        <img
                            src="/author-photo.webp"
                            alt="M.T. Kadisin"
                            className="relative z-10 w-full rounded-xl border border-gold-accent/30 shadow-2xl"
                        />
                    </div>
                </motion.div>

                {/* Right Column: Bio Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-cinzel text-primary-text mb-6">
                        Meet M.T. Kadisin
                    </h2>

                    <div className="space-y-4 text-secondary-text text-base md:text-lg leading-relaxed font-lato">
                        <p className="font-bold text-gold-accent font-cinzel tracking-wide">
                            World-builder. OG Rockhomian. Perennial nerd. Master of the bearded arts.
                        </p>
                        <p>
                            A lifelong reader, gamer, and dreamer, M.T. Kadisin finally stopped saying he wanted to write a book — and just did it. Most of his time is spent sacrificing his imagination to the Kraken Tree. To keep it happy, he must conjure new tales set in fantastic lands filled with wondrous and horrible characters.
                        </p>
                        <p>
                            He lives in the Hudson Valley, New York, with his wife, his daughter, and his blop-tongued dog.
                        </p>
                    </div>

                    <p className="pt-8 text-xs text-secondary-text/60 italic font-lato uppercase tracking-widest">
                        Photos by Steven Howard Photography
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MeetAuthor;
