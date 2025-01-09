import React from 'react';
import { motion } from 'framer-motion';
import { Github, MessageCircle, DollarSign, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="min-h-screen py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-8">
              Have a project in mind? Let's create something amazing together.
              Feel free to reach out through any of these platforms.
            </p>

            <div className="space-y-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <Github size={24} />
                <span>Follow me on GitHub</span>
              </a>

              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <MessageCircle size={24} />
                <span>Join my Discord server</span>
              </a>

              <a
                href="https://cash.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <DollarSign size={24} />
                <span>Support via Cash App</span>
              </a>

              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <Mail size={24} />
                <span>Send me an email</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:ring-2 focus:ring-[#29B6F7] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:ring-2 focus:ring-[#29B6F7] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:ring-2 focus:ring-[#29B6F7] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-[#B829F7] to-[#29B6F7] text-white font-bold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};