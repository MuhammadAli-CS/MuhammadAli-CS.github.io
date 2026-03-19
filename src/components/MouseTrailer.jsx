import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MouseTrailer = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth spring values for the outer ring
  const outerX = useMotionValue(0);
  const outerY = useMotionValue(0);
  const springX = useSpring(outerX, { stiffness: 100, damping: 18, mass: 0.5 });
  const springY = useSpring(outerY, { stiffness: 100, damping: 18, mass: 0.5 });

  // Fast values for the inner dot
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const dotSpringX = useSpring(dotX, { stiffness: 600, damping: 30 });
  const dotSpringY = useSpring(dotY, { stiffness: 600, damping: 30 });

  useEffect(() => {
    const onMove = (e) => {
      outerX.set(e.clientX - 20);
      outerY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);

      const el = e.target;
      setIsHovering(!!(el.closest('a') || el.closest('button') || el.closest('[data-hover]')));
    };
    const onDown = () => setIsClicking(true);
    const onUp   = () => setIsClicking(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
    };
  }, []);

  return (
    <>
      {/* Outer lagging ring */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999]"
        animate={{
          scale: isClicking ? 0.6 : isHovering ? 1.8 : 1,
          borderColor: isHovering ? 'rgba(139,92,246,0.8)' : 'rgba(99,102,241,0.5)',
          backgroundColor: isHovering ? 'rgba(139,92,246,0.08)' : 'transparent',
        }}
        transition={{ duration: 0.2 }}
        style={{
          x: springX, y: springY,
          border: '1.5px solid rgba(99,102,241,0.5)',
          mixBlendMode: 'normal',
        }}
      />

      {/* Inner fast dot */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{ x: dotSpringX, y: dotSpringY }}
        animate={{
          scale: isClicking ? 2.5 : isHovering ? 0 : 1,
          backgroundColor: isHovering ? 'rgba(139,92,246,1)' : 'rgba(255,255,255,0.9)',
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Click burst ripple */}
      {isClicking && (
        <motion.div
          className="hidden md:block fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] border border-primary/40"
          style={{ x: springX, y: springY }}
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      )}
    </>
  );
};

export default MouseTrailer;
