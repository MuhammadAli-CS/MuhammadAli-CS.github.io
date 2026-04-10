import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { uiAudio } from '../utils/audio';

const TiltCard = ({ project, delay }) => {
  const ref = useRef(null);
  
  // Mouse Position relative to card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the motion
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse coordinates to rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Calculate Glare intensity/position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates from -0.5 to 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => uiAudio.playPop()}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="bg-darkCard rounded-xl p-8 border border-white/10 hover:border-primary/50 transition-colors group flex flex-col h-full shadow-lg relative overflow-hidden"
    >
      {/* Glare Layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 60%)`,
          left: `calc(-50% + ${glareX.get()})`,
          top: `calc(-50% + ${glareY.get()})`,
          width: '200%',
          height: '200%'
        }}
      />
      
      {/* Magnetic Glow effect on hover */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
      
      <div className="flex justify-between items-center mb-6 relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="text-4xl text-primary font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-500">
          {'</>'}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => uiAudio.playPop()}
            className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            <FiGithub size={22} />
          </a>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-200 group-hover:text-primary transition-colors duration-300 mb-3 relative z-10" style={{ transform: "translateZ(40px)" }}>
        {project.title}
      </h3>
      
      <div className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow relative z-10" style={{ transform: "translateZ(20px)" }}>
        <p>{project.description}</p>
      </div>

      <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto text-xs font-mono text-secondary/80 relative z-10" style={{ transform: "translateZ(30px)" }}>
        {project.tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Real-Time OCaml Text Editor',
      description:
        'A fully collaborative real-time text editor built from scratch using asynchronous TCP networking with Lwt. Handled concurrent multi-client editing through custom Operational Transformation logic to preserve cursor consistency, enforced by strict .mli interfaces.',
      tags: ['OCaml', 'Lwt', 'TCP Networking', 'Operational Transformation', 'Bogue'],
      github: '#',
    },
    {
      title: 'SCENTIENT',
      description:
        'An AI-powered fragrance analysis machine learning pipeline predicting odor descriptors from molecular SMILES strings. Implemented rigorous feature selection to reduce 1800+ Mordred descriptors, and trained Random Forest classifiers to map structures to categories like floral or woody.',
      tags: ['Machine Learning', 'Scikit-Learn', 'RDKit', 'Python', 'Random Forest'],
      github: '#',
    },
    {
      title: 'Loan Approval Prediction',
      description:
        'Explored supervised machine learning models to predict loan approval outcomes. Conducted rigorous exploratory data analysis, handled one-hot encoding, feature selection via correlation heatmaps, and MinMax scaling. Evaluated SVM, Random Forest, and kNN models for classification.',
      tags: ['Python', 'Scikit-Learn', 'SVM', 'Random Forest', 'kNN', 'Data Analysis'],
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
          <div key={index} style={{ perspective: "1000px" }}>
            <TiltCard project={project} delay={index * 0.1} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
