import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  setCursorVariant?: (variant: string) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  setCursorVariant,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700',
    secondary: 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600',
    outline: 'border-2 border-purple-500 text-purple-500 hover:bg-purple-500/10',
    ghost: 'bg-transparent text-white hover:bg-white/10',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5 gap-1.5',
    md: 'text-base px-4 py-2 gap-2',
    lg: 'text-lg px-6 py-3 gap-2',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClass} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onMouseEnter={() => setCursorVariant && setCursorVariant('button')}
      onMouseLeave={() => setCursorVariant && setCursorVariant('default')}
    >
      <span className="relative z-10 flex items-center">
        {icon && iconPosition === 'left' && <span className="inline-flex">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="inline-flex">{icon}</span>}
      </span>
      
      <motion.span 
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default Button;