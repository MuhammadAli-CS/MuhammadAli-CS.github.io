import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseTrailer from './components/MouseTrailer';
import AuroraBackground from './components/AuroraBackground';
import Particles from './components/Particles';

function App() {
  return (
    <div className="min-h-screen bg-background text-white font-sans relative">
      <MouseTrailer />
      
      {/* WebGL Aurora Background */}
      <AuroraBackground />
      <Particles />
      {/* Subtle grid + noise overlay for depth */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/[0.015] bg-[length:32px_32px]"></div>
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
  );
}

export default App;
