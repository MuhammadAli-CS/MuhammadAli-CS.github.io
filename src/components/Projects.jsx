import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'AI Fragrance Classifier',
      description:
        'A machine learning and cheminformatics application built to classify chemical structures and group them into their corresponding fragrance families. Leveraged deep learning models and RDKit for robust molecular analysis.',
      tags: ['Python', 'PyTorch', 'RDKit', 'Scikit-Learn', 'Cheminformatics'],
      github: 'https://github.com/MuhammadAli-CS/project-placeholder-1', // Update with actual
    },
    {
      title: 'RISC-V Microprocessor & Assembly',
      description:
        'Developed complex systems and applications in Assembly-level RISC-V, including pipelined microprocessor designs. Involved rigorous simulation and understanding of computer architectures.',
      tags: ['RISC-V', 'Assembly', 'Logisim', 'Computer Architecture'],
      github: 'https://github.com/MuhammadAli-CS/project-placeholder-2', // Update with actual
    },
    {
      title: 'Trie-Based Dictionary Systems',
      description:
        'Implemented a highly efficient trie-based dictionary data structure. Optimized for lightning-fast autocomplete insertions, deletions, and prefix searches across extremely large datasets.',
      tags: ['Java', 'Data Structures', 'Algorithms', 'Optimization'],
      github: 'https://github.com/MuhammadAli-CS/project-placeholder-3', // Update with actual
    },
    {
      title: 'Custom Multi-Threaded Web Server',
      description:
        'Built a custom, multi-threaded web server in C capable of robustly serving static resources and managing concurrent client connections securely.',
      tags: ['C', 'Networking', 'Concurrency', 'Systems Programming'],
      github: 'https://github.com/MuhammadAli-CS/project-placeholder-4', // Update with actual
    },
  ];

  return (
    <section id="projects" className="py-24 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-16">
          <h2 className="text-3xl font-bold text-white mr-6">
            <span className="text-primary text-2xl mr-2">02.</span> Projects
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-sm"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 relative">
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
