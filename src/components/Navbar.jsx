import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'The Story', path: '/', hash: '#the-story' },
        { name: 'About', path: '/about' },
        { name: 'Shop', path: '/shop' },
        { name: 'Contact', path: '/contact' },
    ];

    const handleLogoClick = () => {
        setIsMobileMenuOpen(false);
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-deep-bg/95 backdrop-blur-md py-4 border-b border-border-subtle' : 'bg-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={handleLogoClick}
                    className="text-2xl font-cinzel-dec text-primary-text tracking-tighter hover:text-rune-cyan transition-colors"
                >
                    M.T. KADISIN
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-lato tracking-[2px] uppercase transition-all duration-300 hover:text-rune-cyan hover:tracking-[3px] ${location.pathname === link.path ? 'text-primary-text font-bold' : 'text-secondary-text'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/shop" className="lava-button text-xs py-2 px-6">
                        Buy Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary-text"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-deep-bg border-b border-border-subtle py-8 px-6 space-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-lg font-lato text-primary-text uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/shop" className="block lava-button text-center font-bold tracking-widest uppercase text-sm py-4">
                        Buy Now
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
