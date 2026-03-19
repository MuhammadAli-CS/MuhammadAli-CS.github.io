import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Undergraduate Researcher',
      company: 'Human-AI Interaction Design Club – Prof. Qian Yang',
      date: 'Dec 2025 – Present',
      description: [
        'Designed and implemented syntactic and semantic measures of prompt specificity to quantify user intent in human–LLM interactions.',
        'Built an NLP pipeline (spaCy, pandas, matplotlib) to extract linguistic features and track prompt evolution over time.',
        'Compared lexicon-based metrics with LLM-based scoring to analyze trade-offs in validity, stability, and interpretability.'
      ]
    },
    {
      title: 'CS 3110 Teaching Assistant',
      company: 'Cornell University',
      date: 'Jan 2026 – Present',
      description: [
        'Lead office hours and discussion support for 300+ students, covering OCaml, recursion, higher-order functions, and type-driven program design.',
        'Provide detailed feedback on program correctness, abstraction, and functional design patterns; assist with course logistics.'
      ]
    },
    {
      title: 'Engineering Career Center Peer Advisor',
      company: 'Cornell University',
      date: 'Aug 2025 – Present',
      description: [
        'Advise engineering students on resumes, interviews, and LinkedIn profiles; coach in job search strategies and professional development.',
        'Provide administrative support for on-campus recruiting, office programming, and employer-student engagement.'
      ]
    },
    {
      title: 'CS 1110 Python Consultant',
      company: 'Cornell University',
      date: 'Aug 2025 – Dec 2025',
      description: [
        'Provided instructional support through consulting hours, staffing labs, answering online questions, and grading homework and exams.',
        'Assisted students in understanding Python concepts, debugging code, and improving problem-solving strategies.'
      ]
    },
    {
      title: 'Software Quality Assurance Intern',
      company: 'ONESCREEN SOLUTIONS',
      date: 'Jul 2023 – Aug 2023',
      description: [
        'Learned core quality assurance practices, including test case creation, bug tracking, and ensuring software reliability before deployment.',
        'Tested enterprise software products (Meerkat, Quizwiz, Learning Hub) across device platforms and virtual machines.',
        'Logged 50+ UI and UX bug reports and contributed to test case documentation.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-white mr-6">
            <span className="text-primary text-2xl mr-2">03.</span> Experience
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-sm"></div>
        </div>

        <div className="relative border-l border-white/20 ml-3 md:ml-6 space-y-12 pb-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-12 group"
            >
              <div className="absolute w-4 h-4 rounded-full bg-darkCard border-2 border-primary -left-[9px] top-1 group-hover:bg-primary transition-colors"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-200">
                  {exp.title} <span className="text-accent text-lg">@ {exp.company}</span>
                </h3>
                <span className="text-sm text-gray-400 font-mono mt-1 md:mt-0 whitespace-nowrap md:ml-4">{exp.date}</span>
              </div>
              
              <ul className="text-gray-400 text-sm md:text-base space-y-3 mt-4">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex">
                    <span className="text-secondary mr-2 mt-1 px-1">▹</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
