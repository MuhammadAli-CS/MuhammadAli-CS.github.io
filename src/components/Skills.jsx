import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'OCaml', 'C', 'JavaScript', 'HTML/CSS']
    },
    {
      title: 'Tools & Frameworks',
      skills: ['Git', 'Firebase', 'React', 'Vite', 'Tailwind CSS', 'Node.js']
    },
    {
      title: 'Domains & Core Competencies',
      skills: ['Machine Learning', 'Systems Programming', 'Algorithms', 'Data Structures', 'Cheminformatics', 'Theoretical Computer Science']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
  };

  return (
    <section id="skills" className="py-24 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-16 px-4 md:px-0">
          <h2 className="text-3xl font-bold text-white mr-6">
            <span className="text-primary text-2xl mr-2">04.</span> Skills & Expertise
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-sm"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <div key={index} className="bg-darkCard/50 rounded-2xl p-8 border border-white/5 hover:border-secondary/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 inline-block w-full">
                {category.title}
              </h3>
              
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3 font-mono text-sm text-gray-300"
              >
                {category.skills.map((skill, i) => (
                  <motion.li 
                    key={i} 
                    variants={itemVariants}
                    className="flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
