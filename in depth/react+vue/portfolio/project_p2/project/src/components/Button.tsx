import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2";
  const variants = {
    primary: "bg-accent-teal hover:bg-accent-teal/90 text-dark-text",
    secondary: "bg-dark-secondary hover:bg-dark-secondary/90 text-dark-text",
    accent: "bg-accent-purple hover:bg-accent-purple/90 text-dark-text"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;