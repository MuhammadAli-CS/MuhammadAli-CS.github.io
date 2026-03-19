import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-32 border-t border-white/10 text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-mono mb-4 text-sm tracking-wider">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-gray-400 text-lg mb-12">
          I'm currently seeking research opportunities, internships, and engaging conversations
          around AI and theoretical computer science. My inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a
          href="mailto:ma234@cornell.edu"
          className="inline-block px-8 py-4 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors mb-16"
        >
          Say Hello
        </a>

        <div className="flex justify-center items-center gap-8 text-gray-400">
          <a
            href="https://github.com/MuhammadAli-CS"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:-translate-y-1 transition-all"
            aria-label="GitHub"
          >
            <FiGithub size={28} />
          </a>
          <a
            href="mailto:ma2379@cornell.edu"
            className="hover:text-white hover:-translate-y-1 transition-all"
            aria-label="Email"
          >
            <FiMail size={28} />
          </a>
          <a
            href="https://linkedin.com/in/muhammadali-cornell"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:-translate-y-1 transition-all"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={28} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
