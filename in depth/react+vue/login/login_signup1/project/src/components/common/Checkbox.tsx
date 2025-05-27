import React, { InputHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className = '',
  ...props
}) => {
  return (
    <label className={`flex items-start gap-2.5 cursor-pointer ${className}`}>
      <div className="relative flex items-center">
        <input
          type="checkbox"
          className="sr-only"
          {...props}
        />
        <motion.div
          initial={false}
          animate={props.checked ? { backgroundColor: '#8855FF', borderColor: '#8855FF' } : { backgroundColor: 'transparent', borderColor: 'rgba(255, 255, 255, 0.1)' }}
          transition={{ duration: 0.2 }}
          className={`
            w-5 h-5 flex items-center justify-center rounded-md
            border-2 transition-all duration-200
          `}
        >
          {props.checked && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Check size={14} className="text-white" />
            </motion.div>
          )}
        </motion.div>
      </div>
      <span className="text-sm text-white/70 pt-0.5">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;