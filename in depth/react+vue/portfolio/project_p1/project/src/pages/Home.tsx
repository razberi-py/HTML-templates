import React from 'react';
import { motion } from 'framer-motion';
import { Github, MessageCircle, DollarSign, ChevronDown } from 'lucide-react';

export const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >
        <h2 className="text-6xl font-bold mb-6 gradient-text">
          Creative Developer
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Crafting digital experiences through elegant code and design
        </p>
        <div className="flex justify-center gap-6">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <MessageCircle size={24} />
          </motion.a>
          <motion.a
            href="https://cash.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <DollarSign size={24} />
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </motion.div>
    </section>
  );
};