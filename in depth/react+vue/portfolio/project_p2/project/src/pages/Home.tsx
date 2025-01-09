import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Home = () => {
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#6366f1' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#6366f1',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
              resize: true,
            },
          },
          retina_detect: true,
        }}
        className="absolute inset-0"
      />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            John Doe
          </h1>
          <div className="text-2xl text-gray-700 dark:text-gray-300 mb-8">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'UI/UX Designer',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Building beautiful, functional, and user-friendly applications
            with modern web technologies.
          </p>

          <div className="flex justify-center space-x-6">
            <SocialLink href="#" icon={Github} label="GitHub" />
            <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
            <SocialLink href="#" icon={Twitter} label="Twitter" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon: Icon, label }: any) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
    aria-label={label}
  >
    <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
  </motion.a>
);

export default Home;