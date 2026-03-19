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
        {/* Dynamic Vercel-style Ambient Background (Hardware Accelerated, iOS Safe) */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background transform-gpu">
          {/* Base gradient for texture and depth (Layer 1) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-darkCard/20 via-background to-background"></div>
          
          {/* Slowly floating blobs (Layer 2) - mix-blend stripped for iOS Safari compatibility */}
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-primary/5 to-transparent blob1 opacity-70"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-secondary/5 to-transparent blob2 opacity-50"></div>
          
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]"></div>
          {/* Subtle noise texture (Layer 3) - blend-modes stripped for iOS Safari compatibility */}
          <div className="absolute inset-0 bg-noise opacity-[0.04]"></div>
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
