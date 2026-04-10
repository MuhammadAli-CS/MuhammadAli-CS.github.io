import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const languages = ['Python', 'Java', 'HTML/CSS', 'Visual Basic', 'SQL', 'JavaScript', 'OCaml', 'MATLAB'];
  const frameworks = ['Scikit-learn', 'AWS', 'NumPy', 'Seaborn', 'Docker', 'Pandas', 'Matplotlib', 'RDKit', 'Chart.js', 'Unix', 'TensorFlow', 'PyTorch'];

  // Duplicate items to ensure smooth infinite loop
  const langLoop = [...languages, ...languages, ...languages];
  const frameLoop = [...frameworks, ...frameworks, ...frameworks];

  const headerReveal = {
    hidden: { y: "120%", rotate: 2 },
    show: { y: "0%", rotate: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="skills" className="py-24 border-t border-white/10 overflow-hidden">
      <div className="flex items-center mb-16 px-4 md:px-0 overflow-hidden py-2 max-w-7xl mx-auto">
        <motion.div
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.1 }}
           className="flex items-center w-full"
        >
          <motion.h2 variants={headerReveal} className="text-3xl font-bold text-white mr-6 flex items-center">
            <span className="text-primary text-2xl mr-2">04.</span> Technical Skills
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }} 
            whileInView={{ scaleX: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="h-px bg-white/10 flex-grow max-w-sm origin-left"
          ></motion.div>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-6 transform -rotate-2">
        {/* Languages Ribbon (Left) */}
        <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
          {langLoop.map((skill, index) => (
            <div 
              key={`lang-${index}`} 
              className="px-8 py-4 bg-darkCard border border-white/10 rounded-full flex items-center justify-center shadow-lg hover:border-primary/50 transition-colors whitespace-nowrap group cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-primary mr-4 group-hover:scale-150 transition-transform"></span>
              <span className="text-gray-300 group-hover:text-white font-mono text-lg">{skill}</span>
            </div>
          ))}
        </div>

        {/* Frameworks Ribbon (Right) */}
        <div className="flex w-max animate-marquee-reverse space-x-6 hover:[animation-play-state:paused] -ml-[50%]">
          {frameLoop.map((skill, index) => (
            <div 
              key={`frame-${index}`} 
              className="px-8 py-4 bg-[#14141d] border border-white/5 rounded-full flex items-center justify-center shadow-lg hover:border-secondary/50 transition-colors whitespace-nowrap group cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-secondary mr-4 group-hover:scale-150 transition-transform"></span>
              <span className="text-gray-300 group-hover:text-white font-mono text-lg">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

