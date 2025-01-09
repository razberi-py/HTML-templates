import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#1A1A1A]/80 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold gradient-text"
          >
            Portfolio
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4"
          >
            <div className="flex flex-col gap-4">
              <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</NavLink>
              <NavLink to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</NavLink>
              <NavLink to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</NavLink>
              <NavLink to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</NavLink>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};