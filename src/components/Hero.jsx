import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h2 className="text-primary font-medium tracking-wider mb-4">Hi, my name is</h2>
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4">
          Muhammad Ali.
        </h1>
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-400 mb-6">
          I build intelligent systems.
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
          I'm an aspiring <span className="text-white font-medium">AI Researcher</span> & Computer Science undergraduate at <span className="text-secondary font-medium">Cornell University</span>. I am driven by a curiosity for theoretical physics, mathematics, and creating intelligent algorithms that solve complex problems.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-8 py-4 rounded-md bg-primary hover:bg-indigo-500 transition-colors text-white font-medium cursor-pointer"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-8 py-4 rounded-md border border-white/20 hover:bg-white/5 transition-colors text-white font-medium cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
