import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
              Portfolio
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Creating beautiful digital experiences
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;