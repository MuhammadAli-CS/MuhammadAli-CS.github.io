import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'SCENTIENT',
      description:
        'An AI-powered fragrance analysis machine learning pipeline predicting odor descriptors from molecular SMILES strings. Implemented rigorous feature selection to reduce 1800+ Mordred descriptors, and trained Random Forest classifiers to map structures to categories like floral or woody.',
      tags: ['Machine Learning', 'Scikit-Learn', 'RDKit', 'Python', 'Random Forest'],
      github: '#',
    },
    {
      title: 'Real-Time OCaml Text Editor',
      description:
        'A fully collaborative real-time text editor built from scratch using asynchronous TCP networking with Lwt. Handled concurrent multi-client editing through custom Operational Transformation logic to preserve cursor consistency, enforced by strict .mli interfaces.',
      tags: ['OCaml', 'Lwt', 'TCP Networking', 'Operational Transformation', 'Bogue'],
      github: '#',
    }
  ];

  const headerReveal = {
    hidden: { y: "120%", rotate: 2 },
    show: { y: "0%", rotate: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="projects" className="py-24 border-t border-white/10">
      <div className="flex items-center mb-16 overflow-hidden py-2">
        <motion.div
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.1 }}
           className="flex items-center w-full"
        >
          <motion.h2 variants={headerReveal} className="text-3xl font-bold text-white mr-6 flex items-center">
            <span className="text-primary text-2xl mr-2">02.</span> Projects
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
            className="bg-darkCard rounded-xl p-8 border border-white/10 hover:border-primary/50 transition-colors group flex flex-col h-full shadow-lg relative overflow-hidden"
          >
            {/* Magnetic Glow effect on hover */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
            
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div className="text-4xl text-primary font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                {'</>'}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <FiGithub size={22} />
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-200 group-hover:text-primary transition-colors duration-300 mb-3 relative z-10">
              {project.title}
            </h3>
            
            <div className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
              <p>{project.description}</p>
            </div>

            <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto text-xs font-mono text-secondary/80 relative z-10">
              {project.tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
