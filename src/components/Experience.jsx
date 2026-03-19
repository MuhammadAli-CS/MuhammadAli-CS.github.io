import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Current Undergraduate Researcher (Seeking)',
      company: 'Cornell University',
      date: 'Present',
      description: [
        'Actively seeking research opportunities in the intersection of Artificial Intelligence, Machine Learning, and theoretical Computer Science.',
        'Developing a strong mathematical foundation and exploring cutting-edge deep learning literature.'
      ]
    },
    {
      title: 'Software QA Internship',
      company: 'Tech Solutions Inc.',
      date: 'Summer 2024',
      description: [
        'Developed and maintained comprehensive automated test suites, significantly reducing regression testing times.',
        'Collaborated closely with developers to identify, isolate, and document complex software defects.',
        'Implemented rigorous CI/CD pipeline integration for testing frameworks, ensuring high software reliability.'
      ]
    },
    {
      title: 'Leadership & Academic Tutor',
      company: 'Educational Initiatives',
      date: '2023 - 2024',
      description: [
        'Spearheaded study groups and organized tutoring sessions for lower-division computer science students.',
        'Effectively communicated complex computer science concepts, specifically in algorithms and data structures.',
        'Mentored over 20+ students, helping to improve their grades and understanding of computing fundamentals.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
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
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 rounded-full bg-darkCard border-2 border-primary -left-[9px] top-1 group-hover:bg-primary transition-colors"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-200">
                  {exp.title} <span className="text-accent">@ {exp.company}</span>
                </h3>
                <span className="text-sm text-gray-400 font-mono mt-1 md:mt-0">{exp.date}</span>
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
