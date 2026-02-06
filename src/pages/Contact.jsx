import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <div className="relative pt-32 pb-24 bg-deep-bg overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url("${import.meta.env.BASE_URL}deep-forge.png")`,
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-deep-bg/85"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-cinzel text-primary-text mb-4"
                    >
                        Connect with the Kraken
                    </motion.h1>
                    <p className="text-secondary-text font-lato italic text-base md:text-lg">
                        Questions? Media inquiries? Tales from the Deep Roads? Reach out below.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Info Side */}
                    <div className="lg:col-span-2 space-y-10">
                        <div className="space-y-4">
                            <h3 className="font-cinzel text-gold-accent text-xl md:text-2xl uppercase tracking-widest">Inquiries</h3>
                            <div className="flex items-center gap-4 text-secondary-text font-lato text-base md:text-lg">
                                <Mail className="text-rune-cyan" size={20} />
                                <span>hello@mtkadisin.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-secondary-text font-lato text-base md:text-lg">
                                <MapPin className="text-rune-cyan" size={20} />
                                <span>Hudson Valley, NY</span>
                            </div>
                        </div>

                        <div className="bg-card-bg p-6 rounded-lg border border-border-subtle">
                            <p className="text-sm md:text-base text-secondary-text font-lato italic">
                                "Michael does his best to respond to all messages, though his focus is often diverted by the Kraken Tree's demands for new stories."
                            </p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-3">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-[2px] text-gold-accent font-bold">Name</label>
                                    <input type="text" className="w-full bg-stone-bg border border-border-subtle p-3 md:p-4 rounded-sm text-primary-text text-base md:text-lg focus:border-rune-cyan outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-[2px] text-gold-accent font-bold">Email</label>
                                    <input type="email" className="w-full bg-stone-bg border border-border-subtle p-3 md:p-4 rounded-sm text-primary-text text-base md:text-lg focus:border-rune-cyan outline-none transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-[2px] text-gold-accent font-bold">Subject</label>
                                <input type="text" className="w-full bg-stone-bg border border-border-subtle p-3 md:p-4 rounded-sm text-primary-text text-base md:text-lg focus:border-rune-cyan outline-none transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-[2px] text-gold-accent font-bold">Message</label>
                                <textarea rows="6" className="w-full bg-stone-bg border border-border-subtle p-3 md:p-4 rounded-sm text-primary-text text-base md:text-lg focus:border-rune-cyan outline-none transition-colors resize-none"></textarea>
                            </div>
                            <button
                                type="button"
                                className="lava-button w-full flex items-center justify-center gap-3 text-base md:text-lg py-4"
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
