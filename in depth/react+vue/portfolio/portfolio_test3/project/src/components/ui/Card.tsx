import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
  setCursorVariant?: (variant: string) => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  onClick,
  setCursorVariant,
}) => {
  const baseClasses = 'rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 p-6 overflow-hidden relative';
  const hoverableClasses = hoverable ? 'cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-white/20 hover:bg-white/10' : '';

  return (
    <motion.div
      className={`${baseClasses} ${hoverableClasses} ${className}`}
      onClick={onClick}
      whileHover={hoverable ? { y: -5 } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setCursorVariant && setCursorVariant('button')}
      onMouseLeave={() => setCursorVariant && setCursorVariant('default')}
    >
      {hoverable && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      {children}
    </motion.div>
  );
};

export default Card;