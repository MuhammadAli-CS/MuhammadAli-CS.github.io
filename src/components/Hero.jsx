import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import TerminalHero from './TerminalHero';
import MagneticWrapper from './MagneticWrapper';
import { uiAudio } from '../utils/audio';

// Typewriter text removed in favor of TerminalHero

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 40, damping: 10 } }
  };

  const textReveal = {
    hidden: { y: '200%', rotate: 5, opacity: 0 },
    show: { y: '0%', rotate: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 relative">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">

        <div className="overflow-hidden mb-4 py-1">
          <motion.h2 variants={textReveal} className="text-primary font-mono tracking-widest text-sm uppercase">
            Hi, my name is
          </motion.h2>
        </div>

        <div className="overflow-hidden mb-2 py-2">
          <motion.h1 variants={textReveal} className="text-5xl sm:text-7xl font-bold leading-tight text-gradient">
            Muhammad Ali.
          </motion.h1>
        </div>

        <motion.div variants={item} className="mb-10 w-full">
          <TerminalHero />
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-4 mt-6">
          <MagneticWrapper>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              onMouseEnter={() => uiAudio.playPop()}
              className="group relative px-8 py-4 rounded-md bg-transparent border border-primary text-primary hover:text-white font-medium cursor-pointer overflow-hidden transition-colors duration-300 block"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
            </Link>
          </MagneticWrapper>
          <MagneticWrapper>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              onMouseEnter={() => uiAudio.playPop()}
              className="px-8 py-4 flex items-center justify-center rounded-md border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-300 text-white font-medium cursor-pointer block h-full"
            >
              Contact Me
            </Link>
          </MagneticWrapper>
        </motion.div>

        {/* Centered Scroll indicator at bottom */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 group hover:opacity-60 transition-opacity duration-500">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-9 border-2 border-white/40 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
          <span className="text-[10px] font-mono tracking-[0.3em] text-gray-500 uppercase ml-1">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
