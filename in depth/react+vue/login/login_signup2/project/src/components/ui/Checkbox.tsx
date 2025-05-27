import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div className={`w-5 h-5 rounded border transition-colors duration-200 flex items-center justify-center ${
          checked 
            ? 'bg-accent-primary border-accent-primary' 
            : 'border-background-tertiary bg-background-tertiary/50'
        }`}>
          {checked && <Check size={14} className="text-white" />}
        </div>
      </div>
      <label 
        htmlFor={id}
        className="text-sm text-text-secondary cursor-pointer hover:text-text-primary transition-colors"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;