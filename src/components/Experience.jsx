import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Researcher',
      company: 'AIMI Research Program – Prof. Peter Frazier',
      date: 'Jun 2026 – Aug 2026',
      badge: 'Research',
      description: [
        'Investigating applications of Bayesian optimization and LLMs for autonomous experimentation in materials science.',
        'Developing and evaluating LLM-guided experimental selection workflows and simulation-based optimization pipelines.',
        'Collaborating on a self-driving laboratory system integrating robotics, Bayesian optimization, and AI-assisted decision-making.',
        'Contributing to tutorial and research materials on gray-box Bayesian optimization for materials science applications.',
      ]
    },
    {
      title: 'Research Assistant',
      company: 'Human-AI Interaction Design Lab – Prof. Qian Yang',
      date: 'Nov 2025 – May 2026',
      badge: 'Research',
      description: [
        'Developed syntactic and semantic measures of prompt specificity to quantify user intent in human–LLM interactions.',
        'Built an NLP pipeline (spaCy, pandas, Matplotlib) to extract linguistic features and track prompt evolution over time.',
        'Compared lexicon-based metrics with LLM-based scoring to analyze trade-offs in validity, stability, and interpretability.',
        'Synthesized HCI, NLP, and sociolinguistics literature to study empowerment and authority in AI-mediated communication.',
      ]
    },
    {
      title: 'CS 3110 Teaching Assistant',
      company: 'Cornell University',
      date: 'Jan 2026 – May 2026',
      badge: 'Teaching',
      description: [
        'Led discussion sections and office hours for 35 students in Cornell\'s 300+ student functional programming course.',
        'Designed and graded assignments/exams while teaching OCaml, recursion, and higher-order programming concepts.',
      ]
    },
    {
      title: 'Engineering Career Center Peer Advisor',
      company: 'Cornell University',
      date: 'Aug 2025 – May 2026',
      description: [
        'Advise engineering students on resumes, interviews, and internship strategies.',
        'Support employer engagement events and on-campus recruiting programming.',
      ]
    },
    {
      title: 'CS 1110 Teaching Assistant',
      company: 'Cornell University',
      date: 'Aug 2025 – Dec 2025',
      badge: 'Teaching',
      description: [
        'Taught introductory Python to 40 students through office hours, debugging support, lab staffing, and grading.',
      ]
    },
    {
      title: 'Software Quality Assurance Intern',
      company: 'OneScreen Solutions',
      date: 'Jul 2023 – Aug 2023',
      badge: 'Industry',
      description: [
        'Tested enterprise software products across multiple platforms and virtual machines to identify UI/UX and functionality issues.',
        'Logged 50+ bug reports and contributed to test case documentation and QA workflows.',
      ]
    }
  ];

  const headerReveal = {
    hidden: { y: "120%", rotate: 2 },
    show: { y: "0%", rotate: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="experience" className="py-24 border-t border-white/10">
      <div className="flex items-center mb-12 overflow-hidden py-2 max-w-4xl mx-auto">
        <motion.div
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.1 }}
           className="flex items-center w-full"
        >
          <motion.h2 variants={headerReveal} className="text-3xl font-bold text-white mr-6 flex items-center">
            <span className="text-primary text-2xl mr-2">03.</span> Experience
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

      <div className="relative border-l border-white/20 ml-3 md:ml-6 space-y-12 pb-4 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-8 md:pl-12 group"
          >
            <div className="absolute w-4 h-4 rounded-full bg-darkCard border-2 border-primary -left-[9px] top-1 group-hover:bg-primary group-hover:scale-125 transition-all duration-300 ease-out"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors">
                    {exp.title}
                  </h3>
                  {exp.badge && (
                    <span className="px-2 py-0.5 rounded text-xs font-mono bg-primary/20 text-primary border border-primary/30">
                      {exp.badge}
                    </span>
                  )}
                </div>
                <span className="text-accent text-lg mt-1">@ {exp.company}</span>
              </div>
              <span className="text-sm text-gray-400 font-mono mt-2 md:mt-0 whitespace-nowrap md:ml-4">{exp.date}</span>
            </div>
            
            <ul className="text-gray-400 text-sm md:text-base space-y-3 mt-4">
              {exp.description.map((desc, i) => (
                <li key={i} className="flex group-hover:text-gray-300 transition-colors duration-300">
                  <span className="text-secondary mr-2 mt-1 px-1">▹</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
