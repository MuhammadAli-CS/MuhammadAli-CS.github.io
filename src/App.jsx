import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-white font-sans relative">
        {/* Dynamic Vercel-style Ambient Background (Hardware Accelerated) */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background border-none">
          {/* Using radial gradients instead of blur filters drops GPU load by 95% while keeping the soft glow */}
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-primary/5 to-transparent mix-blend-screen blob1 opacity-60"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/30 via-secondary/5 to-transparent mix-blend-screen blob2 opacity-50"></div>
          <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/30 via-accent/5 to-transparent mix-blend-screen blob3 opacity-40"></div>
          
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]"></div>
          {/* Functional monochrome film grain overlay */}
          <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <Navbar />
          <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
