import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Video } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-deep-bg py-16 px-6 border-t border-border-subtle">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">
                <div className="space-y-4">
                    <h3 className="text-2xl font-cinzel text-gold-accent tracking-widest uppercase">
                        The Kraken Tree
                    </h3>
                    <p className="text-secondary-text text-sm font-lato tracking-widest uppercase">
                        Forger of Legends
                    </p>
                </div>

                <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6">
                    <Link to="/shop" className="text-sm font-lato uppercase tracking-widest text-secondary-text hover:text-rune-cyan">Purchase Book</Link>
                    <a href="#about-author" className="text-sm font-lato uppercase tracking-widest text-secondary-text hover:text-rune-cyan">About the Author</a>
                    <Link to="/contact" className="text-sm font-lato uppercase tracking-widest text-secondary-text hover:text-rune-cyan">Contact</Link>
                    <a href="https://www.mtkadisin.com/pressblog" className="text-sm font-lato uppercase tracking-widest text-secondary-text hover:text-rune-cyan">Blog</a>
                </nav>

                <div className="flex gap-8">
                    <a href="#" className="text-secondary-text hover:text-rune-cyan transition-colors">
                        <Instagram size={24} />
                    </a>
                    <a href="#" className="text-secondary-text hover:text-rune-cyan transition-colors">
                        <Facebook size={24} />
                    </a>
                    <a href="#" className="text-secondary-text hover:text-rune-cyan transition-colors">
                        <Video size={24} /> {/* Placeholder for TikTok */}
                    </a>
                </div>

                <div className="space-y-2">
                    <p className="text-xs text-secondary-text/60 font-lato">
                        © 2025 The Kraken Tree. All rights reserved.
                    </p>
                    <div className="flex justify-center gap-4 text-[10px] text-secondary-text/40 font-lato uppercase tracking-widest">
                        <a href="#" className="hover:text-gold-accent">Terms & Conditions</a>
                        <span>|</span>
                        <a href="#" className="hover:text-gold-accent">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
