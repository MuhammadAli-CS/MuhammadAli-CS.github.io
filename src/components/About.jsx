import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-10">
          <h2 className="text-3xl font-bold text-white mr-6">
            <span className="text-primary text-2xl mr-2">01.</span> About Me
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-gray-400 text-lg leading-relaxed">
          <div className="lg:col-span-2 space-y-4">
            <p>
              I am a Computer Science undergraduate at <strong>Cornell University</strong> (Expected May 2028), driven by a deep curiosity for how learning algorithms generalize beyond controlled settings.
            </p>
            <p>
              My research with Professor Qian Yang focuses on how users express intent when interacting with large language models. I have designed NLP pipelines to quantify prompt specificity and track evolving constraints over time. This work has shown me how models internalize structured information and why representational shifts lead to divergent behavior.
            </p>
            <p>
              Alongside research, I've built projects like <strong>Scentient</strong>, an ML pipeline predicting odor descriptors from molecular SMILES strings. Dealing with high-dimensional representations and observing generalization gaps in practice has fueled my interest in the intersection of optimization, inductive bias, and theoretical machine learning.
            </p>
            <p>
              Long-term, I hope to bridge theoretical insights with experimentally grounded analysis to build more robust and transparent intelligent systems.
            </p>
            
            {/* Education Sub-section */}
            <div className="mt-8 pt-8 border-t border-white/10">
               <h3 className="text-xl font-bold text-gray-200 mb-4">Education</h3>
               <div className="mb-2">
                 <div className="flex justify-between items-baseline mb-1">
                   <span className="text-white font-medium">Cornell University</span>
                   <span className="text-sm font-mono text-primary">May 2028</span>
                 </div>
                 <div className="text-sm">BA in Computer Science • GPA: 3.93</div>
               </div>
               <p className="text-sm mt-3 leading-relaxed">
                 <span className="text-gray-300 font-medium">Relevant Coursework:</span> Data Structures and OOP, Discrete Mathematics, Functional Programming, Machine Learning, Computer Systems, Linear Algebra, Multivariable Calculus, Econometrics & Statistics, Honors Mechanics & Relativity
               </p>
            </div>

            {/* Awards Sub-section */}
            <div className="mt-6 pt-6 border-t border-white/10 text-sm">
               <h3 className="text-xl font-bold text-gray-200 mb-3">Awards</h3>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                 <li className="flex items-center"><span className="text-primary mr-2">▹</span>Best Across 5 Subjects (AS Level, 3rd in Pakistan, 2023)</li>
                 <li className="flex items-center"><span className="text-primary mr-2">▹</span>SEAMO Gold Medalist (Top in Country, 2023)</li>
                 <li className="flex items-center"><span className="text-primary mr-2">▹</span>Top 20 NSTC Math (2023)</li>
                 <li className="flex items-center"><span className="text-primary mr-2">▹</span>National Science Gold Medalist (2017, 2018)</li>
               </ul>
            </div>
          </div>
          
          <div className="relative group mx-auto w-3/4 lg:w-full max-w-sm mt-8 lg:mt-0 lg:col-span-1">
            <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="bg-darkCard aspect-square rounded-lg border border-white/10 flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
              <div className="text-center z-20">
                <div className="text-primary text-6xl mb-4 font-light">M</div>
                <h3 className="text-2xl font-bold text-white">Muhammad Ali</h3>
                <p className="text-sm mt-2 font-mono text-secondary">AI Researcher</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
