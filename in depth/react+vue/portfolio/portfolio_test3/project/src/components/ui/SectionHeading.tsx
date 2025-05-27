import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  const alignment = centered ? 'text-center mx-auto' : '';

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`mb-12 max-w-3xl ${alignment} ${className}`}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
        variants={variants}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-lg text-gray-400"
          variants={subtitleVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;