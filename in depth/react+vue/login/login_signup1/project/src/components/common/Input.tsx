import React, { InputHTMLAttributes, ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  icon,
  error,
  className = '',
  type = 'text',
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordInput = type === 'password';
  
  const inputType = isPasswordInput ? (showPassword ? 'text' : 'password') : type;
  
  const handleFocus = () => setFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    props.onBlur?.(e);
    setFocused(false);
  };
  
  const toggleShowPassword = () => setShowPassword(prev => !prev);

  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-white/80">
        {label}
      </label>
      <div 
        className={`
          relative rounded-lg overflow-hidden transition-all duration-200
          ${focused ? 'ring-2 ring-primary-500 ring-opacity-50' : ''}
          ${error ? 'ring-2 ring-error-500' : ''}
        `}
      >
        <div className={`
          flex items-center bg-background-input border ${focused ? 'border-primary-500' : error ? 'border-error-500' : 'border-white/10'} 
          rounded-lg transition-colors
        `}>
          {icon && (
            <div className="pl-3 text-white/50">
              {icon}
            </div>
          )}
          <input
            type={inputType}
            className={`
              block w-full bg-transparent px-3 py-2.5 text-white placeholder-white/30
              focus:outline-none focus:ring-0 focus:border-transparent
              ${icon ? 'pl-2' : 'pl-3'}
              ${isPasswordInput ? 'pr-10' : 'pr-3'}
              ${className}
            `}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          {isPasswordInput && (
            <motion.button
              type="button"
              whileTap={{ scale: 0.95 }}
              onClick={toggleShowPassword}
              className="absolute right-3 text-white/50 hover:text-white/80 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </motion.button>
          )}
        </div>
      </div>
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-error-500 text-xs mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default Input;