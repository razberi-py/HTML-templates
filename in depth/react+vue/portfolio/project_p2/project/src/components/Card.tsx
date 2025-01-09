import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-dark-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;