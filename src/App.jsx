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
        {/* Premium Godly.website Style Background */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-[#030303]">
          {/* Ambient, extremely subtle glows for depth without overwhelming saturation */}
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-primary/5 blur-[120px] mix-blend-screen opacity-60"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[120px] mix-blend-screen opacity-50"></div>
          
          {/* Subtle grid and Film Grain Overlay */}
          <div className="absolute inset-0 bg-grid-white/[0.01] bg-[length:64px_64px]"></div>
          <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay"></div>
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
