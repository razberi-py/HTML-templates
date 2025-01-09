import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const Layout = () => {
  const location = useLocation();

  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <div className="min-h-screen bg-dark-primary text-dark-text">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: '#4DB6AC' },
            opacity: { value: 0.1 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: true
            }
          }
        }}
        className="absolute inset-0"
      />
      <Navigation />
      <ThemeToggle />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="container mx-auto px-4 py-8 relative z-10"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default Layout;