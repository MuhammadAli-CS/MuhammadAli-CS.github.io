import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'HTML/CSS', 'Visual Basic', 'SQL', 'JavaScript', 'OCaml', 'MATLAB']
    },
    {
      title: 'Frameworks & Tools',
      skills: ['Scikit-learn', 'AWS', 'NumPy', 'Seaborn', 'Docker', 'Pandas', 'Matplotlib', 'RDKit', 'Chart.js', 'Unix/Linux', 'TensorFlow', 'Pytorch']
    }
  ];

  const headerReveal = {
    hidden: { y: "120%", rotate: 2 },
    show: { y: "0%", rotate: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, damping: 10 } }
  };

  return (
    <section id="skills" className="py-24 border-t border-white/10">
      <div className="flex items-center mb-16 px-4 md:px-0 overflow-hidden py-2">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {categories.map((category, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            className="bg-darkCard/50 rounded-2xl p-8 border border-white/5 hover:border-secondary/30 transition-all duration-500 group shadow-lg"
          >
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 inline-block w-full group-hover:border-secondary/50 transition-colors duration-500">
              {category.title}
            </h3>
            
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-y-3 font-mono text-sm text-gray-300"
            >
              {category.skills.map((skill, i) => (
                <motion.li 
                  key={i} 
                  variants={itemVariants}
                  className="flex items-center break-words group/item hover:-translate-y-1 transition-transform duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 shrink-0 group-hover/item:scale-150 group-hover/item:bg-primary transition-all duration-300"></span>
                  <span className="break-all sm:break-normal group-hover/item:text-white transition-colors">{skill}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
