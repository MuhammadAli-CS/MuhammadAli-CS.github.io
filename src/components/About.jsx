import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-10">
          <h2 className="text-3xl font-bold text-white mr-6">
            <span className="text-primary text-2xl mr-2">01.</span> About Me
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-400 text-lg leading-relaxed">
          <div>
            <p className="mb-4">
              Hello! My name is Muhammad and I enjoy creating things that live on the internet, 
              as well as diving deep into the mathematical foundations of intelligence. My interest in 
              AI and computing started back in high school when I decided to try editing custom ROMs 
              which turned into a fascination with low-level systems and machine learning.
            </p>
            <p className="mb-4">
              Fast-forward to today, I am pursuing my Computer Science degree at <strong>Cornell University</strong>. 
              My main focus these days is understanding and building intelligent algorithmic systems, exploring theoretical computer science, and looking for challenging research opportunities.
            </p>
            <p>
              When I'm not studying or coding, you can find me exploring theoretical physics, solving complex math puzzles, or reading about the latest breakthroughs in artificial intelligence.
            </p>
          </div>
          
          <div className="relative group mx-auto w-3/4 md:w-full max-w-sm">
            <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="bg-darkCard aspect-square rounded-lg border border-white/10 flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
              {/* Optional: Add an actual image here instead of text */}
              <div className="text-center z-20">
                <div className="text-primary text-6xl mb-4 font-light">M</div>
                <h3 className="text-2xl font-bold text-white">Student & Researcher</h3>
                <p className="text-sm mt-2">Cornell University</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
