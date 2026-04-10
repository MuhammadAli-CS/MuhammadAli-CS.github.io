import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useScroll, useSpring } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed w-full top-0 z-50 flex justify-center py-4 pointer-events-none">
      <nav className={`pointer-events-auto transition-all duration-500 w-full ${scrolled ? 'bg-darkCard/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 rounded-full max-w-5xl px-8 py-3' : 'bg-transparent max-w-7xl px-6 lg:px-24 py-4'}`}>
        {/* Scroll Progress Bar - move out of pill or keep it subtle */}
        {scrolled && (
          <motion.div
            className="absolute -bottom-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
            style={{ scaleX }}
          />
        )}
        <div className="flex justify-between items-center w-full">
          <Link to="hero" smooth={true} duration={500} className="text-xl font-bold cursor-pointer text-white tracking-wide">
            <span className="text-primary">&lt;</span>Ali<span className="text-secondary">/&gt;</span>
          </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-primary font-medium"
              className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://github.com/MuhammadAli-CS"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-300 hover:text-white focus:outline-none">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="md:hidden absolute top-full left-0 right-0 mt-4 mx-4 bg-darkCard/95 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col py-4 px-6 gap-4 shadow-2xl"
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer text-lg"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
