import React from 'react';
import { motion } from 'framer-motion';

const AtmosphereCard = ({ image, label, caption }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="relative group overflow-hidden rounded-sm bg-card-bg border border-border-subtle aspect-[16/9]"
    >
        <img
            src={image}
            alt={label}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-deep-bg/20 to-transparent group-hover:from-deep-bg/90 transition-all duration-300"></div>

        {/* Rune Border on Hover */}
        <div className="absolute top-0 left-0 w-full h-1 bg-rune-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

        <div className="absolute bottom-0 left-0 p-6 w-full">
            <h3 className="text-xl font-cinzel text-primary-text mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {label}
            </h3>
            <p className="text-sm text-secondary-text font-lato opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {caption}
            </p>
        </div>
    </motion.div>
);

const DiscoverRockhome = () => {
    const cards = [
        {
            image: `${import.meta.env.BASE_URL}deep-gate.png`,
            label: "The Deep Gate",
            caption: "Where stone meets fire, the guardians keep watch."
        },
        {
            image: `${import.meta.env.BASE_URL}deep-road.png`,
            label: "The Deep Roads",
            caption: "Ancient highways carved through the bones of the mountain."
        },
        {
            image: `${import.meta.env.BASE_URL}ancestors-hall.png`,
            label: "The Hall of Ancestors",
            caption: "Where kings of stone stand eternal vigil."
        }
    ];

    return (
        <section className="relative bg-deep-bg py-24 px-6 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url("${import.meta.env.BASE_URL}deep-road.png")`,
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-deep-bg/75"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto text-center mb-16 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-cinzel text-primary-text mb-4 uppercase tracking-widest"
                >
                    Discover Rockhome
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-secondary-text font-lato max-w-2xl mx-auto"
                >
                    A world forged in stone and fire. A civilization carved from the mountain itself.
                </motion.p>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <motion.div
                        key={card.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <AtmosphereCard {...card} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default DiscoverRockhome;
