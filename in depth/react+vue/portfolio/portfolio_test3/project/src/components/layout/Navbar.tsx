import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail, Github, Linkedin, Twitter } from 'lucide-react';

interface NavbarProps {
  setCursorVariant: (variant: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setCursorVariant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'About', path: '/about', icon: <User size={20} /> },
    { name: 'Projects', path: '/projects', icon: <Briefcase size={20} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={20} /> },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://twitter.com' },
  ];

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  to={link.path}
                  className={`flex items-center space-x-1 transition-colors duration-300 hover:text-pink-500 ${
                    location.pathname === link.path ? 'text-pink-500' : 'text-gray-200'
                  }`}
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </motion.div>
            ))}

            <div className="h-6 w-px bg-gray-700" />

            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + 0.1 * index }}
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 bg-[#050505]/95 z-50 md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Link
                to={link.path}
                className={`flex items-center space-x-2 text-xl font-medium ${
                  location.pathname === link.path ? 'text-pink-500' : 'text-gray-200'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </motion.div>
          ))}

          <motion.div
            className="pt-6 flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;