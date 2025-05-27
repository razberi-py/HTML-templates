import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

interface FooterProps {
  setCursorVariant: (variant: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCursorVariant }) => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://twitter.com' },
  ];

  return (
    <footer className="py-8 border-t border-gray-800 bg-gradient-to-b from-transparent to-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Portfolio
            </h3>
            <p className="text-gray-400 max-w-xs">
              Crafting unique digital experiences through innovative design and development.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact</h3>
            <p className="text-gray-400">hello@portfolio.com</p>
            <p className="text-gray-400">+1 (123) 456-7890</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Social</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
          
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="mx-1 text-pink-500" size={16} /> in 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;