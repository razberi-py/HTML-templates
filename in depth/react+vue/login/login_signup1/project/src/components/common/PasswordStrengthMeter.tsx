import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface PasswordStrengthMeterProps {
  password: string;
}

const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({ password }) => {
  const strength = useMemo(() => {
    if (!password) return 0;
    
    let score = 0;
    
    // Length check
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    
    // Character variety checks
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    
    // Normalize score to 0-4 range
    return Math.min(4, Math.floor(score / 1.5));
  }, [password]);
  
  const strengthInfo = useMemo(() => {
    if (!password) return { text: '', color: 'bg-white/20' };
    
    const info = [
      { text: 'Very Weak', color: 'bg-error-600' },
      { text: 'Weak', color: 'bg-error-500' },
      { text: 'Fair', color: 'bg-orange-500' },
      { text: 'Good', color: 'bg-primary-500' },
      { text: 'Strong', color: 'bg-green-500' }
    ];
    
    return info[strength];
  }, [strength, password]);
  
  if (!password) return null;
  
  return (
    <div className="mt-1 space-y-1">
      <div className="flex gap-1 h-1.5">
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className={`h-full rounded-full flex-1 ${index <= strength ? strengthInfo.color : 'bg-white/10'}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          />
        ))}
      </div>
      <p className="text-xs text-white/50">
        Password strength: <span className="text-white/80">{strengthInfo.text}</span>
      </p>
    </div>
  );
};

export default PasswordStrengthMeter;