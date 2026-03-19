import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseTrailer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Expand trailer when hovering over clickable elements
      const target = e.target;
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-primary/40 blur-[8px] pointer-events-none z-50 flex items-center justify-center hidden md:flex"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? 'rgba(14, 165, 233, 0.4)' : 'rgba(79, 70, 229, 0.4)', // switches from primary to secondary on hover
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.2,
      }}
    >
      <motion.div 
        className="w-1 h-1 bg-white rounded-full bg-white/80"
        animate={{ opacity: isHovering ? 0 : 1 }}
      />
    </motion.div>
  );
};

export default MouseTrailer;
