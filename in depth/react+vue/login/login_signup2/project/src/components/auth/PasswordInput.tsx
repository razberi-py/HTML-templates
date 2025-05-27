import React, { useState } from 'react';
import { Eye, EyeOff, Check, X } from 'lucide-react';

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  showStrengthIndicator?: boolean;
  name?: string;
  required?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  placeholder = 'Enter password',
  showStrengthIndicator = false,
  name = 'password',
  required = true,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  // Calculate password strength
  const getPasswordStrength = (): { score: number; feedback: string } => {
    if (!value) return { score: 0, feedback: 'Enter a password' };
    
    let score = 0;
    
    // Length check
    if (value.length >= 8) score += 1;
    if (value.length >= 12) score += 1;
    
    // Character variety checks
    if (/[A-Z]/.test(value)) score += 1;
    if (/[a-z]/.test(value)) score += 1;
    if (/[0-9]/.test(value)) score += 1;
    if (/[^A-Za-z0-9]/.test(value)) score += 1;
    
    // Normalize score to 0-4 range
    score = Math.min(4, score);
    
    // Feedback based on score
    let feedback = '';
    switch (score) {
      case 0:
      case 1:
        feedback = 'Weak';
        break;
      case 2:
        feedback = 'Fair';
        break;
      case 3:
        feedback = 'Good';
        break;
      case 4:
        feedback = 'Strong';
        break;
      default:
        feedback = '';
    }
    
    return { score, feedback };
  };
  
  const { score, feedback } = getPasswordStrength();
  
  // Get color for strength indicator
  const getStrengthColor = () => {
    switch (score) {
      case 0:
      case 1:
        return 'bg-error';
      case 2:
        return 'bg-warning';
      case 3:
        return 'bg-accent-primary';
      case 4:
        return 'bg-success';
      default:
        return 'bg-background-tertiary';
    }
  };
  
  return (
    <div className="mb-4">
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="input-field pr-10"
          required={required}
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      
      {showStrengthIndicator && value && (
        <div className="mt-2">
          <div className="flex items-center justify-between mb-1">
            <div className="text-sm flex items-center gap-1 text-text-secondary">
              {score >= 3 ? (
                <Check size={14} className="text-success" />
              ) : (
                <X size={14} className="text-error" />
              )}
              {feedback}
            </div>
            <div className="text-xs text-text-muted">
              {score >= 3 ? 'Password is acceptable' : 'Make your password stronger'}
            </div>
          </div>
          
          <div className="h-1 w-full bg-background-tertiary/50 rounded-full overflow-hidden">
            <div 
              className={`h-full ${getStrengthColor()} transition-all duration-300`} 
              style={{ width: `${(score / 4) * 100}%` }}
            />
          </div>
          
          {score < 3 && (
            <div className="mt-1 text-xs text-text-muted grid grid-cols-2 gap-1">
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${/[A-Z]/.test(value) ? 'bg-success' : 'bg-background-tertiary'}`}></div>
                <span>Uppercase letter</span>
              </div>
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${/[a-z]/.test(value) ? 'bg-success' : 'bg-background-tertiary'}`}></div>
                <span>Lowercase letter</span>
              </div>
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${/[0-9]/.test(value) ? 'bg-success' : 'bg-background-tertiary'}`}></div>
                <span>Number</span>
              </div>
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${/[^A-Za-z0-9]/.test(value) ? 'bg-success' : 'bg-background-tertiary'}`}></div>
                <span>Special character</span>
              </div>
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${value.length >= 8 ? 'bg-success' : 'bg-background-tertiary'}`}></div>
                <span>8+ characters</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PasswordInput;