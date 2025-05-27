import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { MousePointer2 } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = React.useState('default');

  React.useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 30,
      },
    },
    button: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: 'rgba(236, 72, 153, 0.2)',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 30,
      },
    },
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen flex flex-col">
      <div className="hidden md:block">
        <motion.div
          className="cursor-pointer z-50 fixed top-0 left-0 rounded-full pointer-events-none mix-blend-difference"
          variants={variants}
          animate={cursorVariant}
        >
          <MousePointer2 className="text-white" size={32} />
        </motion.div>
      </div>

      <Navbar setCursorVariant={setCursorVariant} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer setCursorVariant={setCursorVariant} />
    </div>
  );
};

export default Layout;