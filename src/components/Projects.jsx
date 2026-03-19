import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'SCENTIENT',
      description:
        'An AI-powered fragrance analysis machine learning pipeline predicting odor descriptors from molecular SMILES strings. Implemented rigorous feature selection to reduce 1800+ Mordred descriptors, and trained Random Forest classifiers to map structures to categories like floral or woody. Built a "dupe detection" module matching fragrances by tonal profiles.',
      tags: ['Machine Learning', 'Scikit-Learn', 'RDKit', 'Python', 'Random Forest'],
      github: '#',
    },
    {
      title: 'Real-Time OCaml Text Editor',
      description:
        'A fully collaborative real-time text editor built from scratch using asynchronous TCP networking with Lwt. Handled concurrent multi-client editing through custom Operational Transformation logic to preserve cursor consistency, enforced by strict .mli interfaces and >80% OUnit2 test coverage.',
      tags: ['OCaml', 'Lwt', 'TCP Networking', 'Operational Transformation', 'Bogue'],
      github: '#',
    }
  ];

  return (
    <section id="projects" className="py-24 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-16">
          <h2 className="text-3xl font-bold text-white mr-6">
            <span className="text-primary text-2xl mr-2">02.</span> Projects
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-sm"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-darkCard rounded-xl p-8 border border-white/10 hover:border-primary/50 transition-all group flex flex-col h-full shadow-lg"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-4xl text-primary font-bold opacity-30 group-hover:opacity-100 transition-opacity">
                  {'</>'}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FiGithub size={22} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-200 group-hover:text-primary transition-colors mb-3">
                {project.title}
              </h3>
              
              <div className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                <p>{project.description}</p>
              </div>

              <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto text-xs font-mono text-secondary/80">
                {project.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
