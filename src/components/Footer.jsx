import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center border-t border-white/10 mt-20">
      <div className="text-gray-500 text-sm hover:text-primary transition-colors inline-block cursor-pointer">
        <p>Designed & Built by Muhammad Ali</p>
        <p className="mt-1">&copy; {currentYear} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
