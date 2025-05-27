import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  fullHeight = false,
  delay = 0,
}) => {
  const heightClass = fullHeight ? 'min-h-screen' : '';

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <motion.section
      id={id}
      className={`py-16 md:py-24 relative ${heightClass} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
};

export default Section;