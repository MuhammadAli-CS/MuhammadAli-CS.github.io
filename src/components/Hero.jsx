import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 10 } }
  };

  const textReveal = {
    hidden: { y: "200%", rotate: 5, opacity: 0 },
    show: { y: "0%", rotate: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
        <div className="overflow-hidden mb-4 py-1">
          <motion.h2 variants={textReveal} className="text-primary font-medium tracking-wider">
            Hi, my name is
          </motion.h2>
        </div>
        
        <div className="overflow-hidden mb-4 py-2">
          <motion.h1 variants={textReveal} className="text-5xl sm:text-7xl font-bold text-white leading-tight">
            Muhammad Ali.
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mb-6 py-2">
          <motion.h1 variants={textReveal} className="text-4xl sm:text-6xl font-bold text-gray-400 leading-tight">
            I build intelligent systems.
          </motion.h1>
        </div>
        
        <motion.p variants={item} className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
          I'm an aspiring <span className="text-white font-medium">AI Researcher</span> & Computer Science undergraduate at <span className="text-secondary font-medium">Cornell University</span>. I am driven by a curiosity for theoretical physics, mathematics, and creating intelligent algorithms that solve complex problems.
        </motion.p>
        
        <motion.div variants={item} className="flex flex-wrap gap-4">
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="px-8 py-4 rounded-md bg-transparent border border-primary text-primary hover:bg-primary/10 transition-colors font-medium cursor-pointer relative overflow-hidden group"
          >
            <span className="relative z-10 transition-colors group-hover:text-primary">View Projects</span>
            {/* Magnetic/Ripple style glowing effect */}
            <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="px-8 py-4 rounded-md border border-white/20 hover:border-white/50 transition-colors text-white font-medium cursor-pointer"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
