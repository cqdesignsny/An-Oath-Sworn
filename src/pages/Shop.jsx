import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Download } from 'lucide-react';

const ShopItem = ({ title, type, price, image, description, link }) => (
    <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ y: -3, scale: 0.98 }}
        className="bg-card-bg border border-border-subtle p-6 rounded-lg flex flex-col items-center text-center space-y-6"
    >
        <img src={image} alt={title} className="w-48 shadow-2xl mb-4" />
        <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-cinzel text-primary-text">{title}</h3>
            <p className="text-xs uppercase tracking-widest text-gold-accent font-bold">{type}</p>
            <p className="text-secondary-text text-sm md:text-base font-lato px-4">{description}</p>
        </div>
        <div className="text-2xl md:text-3xl font-cinzel text-primary-text">{price}</div>
        <a
            href={link}
            className="w-full lava-button flex items-center justify-center gap-2 text-sm md:text-base py-3 md:py-4"
        >
            <ShoppingCart size={18} />
            Add to Cart
        </a>
    </motion.div>
);

const Shop = () => {
    const products = [
        {
            title: "An Oath Sworn",
            type: "Signed Paperback",
            price: "$18.99",
            image: `${import.meta.env.BASE_URL}book-mockup.png`,
            description: "A physical copy of Book One, signed by the author with a custom message.",
            link: "https://www.mtkadisin.com/shop"
        },
        {
            title: "An Oath Sworn",
            type: "Digital Edition (ePub)",
            price: "$6.99",
            image: `${import.meta.env.BASE_URL}book-digital.png`,
            description: "Instant delivery via BookFunnel. Compatible with Kindle, Kobo, and Apple Books.",
            link: "https://www.mtkadisin.com/shop"
        },
        {
            title: "Stone King Art Print",
            type: "Limited Edition",
            price: "$24.99",
            image: `${import.meta.env.BASE_URL}cover-art.jpg`,
            description: "High-quality 12x18 print of the original cover art by the Kraken Tree.",
            link: "https://www.mtkadisin.com/shop"
        }
    ];

    return (
        <div className="relative pt-32 pb-24 bg-deep-bg overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url("${import.meta.env.BASE_URL}deep-forge.png")`
                }}
            >
                <div className="absolute inset-0 bg-deep-bg/85"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-cinzel text-primary-text mb-4"
                    >
                        The Forge Shop
                    </motion.h1>
                    <p className="text-secondary-text font-lato max-w-xl mx-auto italic text-base md:text-lg">
                        Acquire your relics. Support the Kraken Tree. Forge your own path through the Saga.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ShopItem {...product} />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-8 border border-rune-cyan/20 bg-rune-cyan/5 rounded-lg text-center max-w-3xl mx-auto">
                    <div className="flex justify-center mb-4 text-rune-cyan">
                        <Download size={32} />
                    </div>
                    <h3 className="font-cinzel text-primary-text text-xl md:text-2xl mb-4">Digital Fulfillment</h3>
                    <p className="text-secondary-text font-lato text-sm md:text-base">
                        Our eBooks are delivered via <strong>BookFunnel</strong>. You will receive an email shortly after purchase with simple instructions to get the book on your preferred device.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Shop;
