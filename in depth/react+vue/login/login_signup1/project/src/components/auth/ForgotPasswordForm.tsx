import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Input from '../common/Input';
import Button from '../common/Button';

const ForgotPasswordForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-background-card rounded-lg border border-white/5 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-4 bg-primary-500/20 rounded-full flex items-center justify-center">
          <Mail size={28} className="text-primary-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Check your email</h3>
        <p className="text-white/60 mb-4">
          We've sent a password reset link to <span className="text-white">{email}</span>
        </p>
        <p className="text-sm text-white/40">
          Didn't receive the email? Check your spam folder or{' '}
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-primary-400 hover:text-primary-300"
          >
            try again
          </button>
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="space-y-6"
    >
      <Input
        label="Email address"
        type="email"
        name="email"
        placeholder="you@example.com"
        icon={<Mail size={18} />}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      
      <Button
        type="submit"
        variant="primary"
        fullWidth
        isLoading={isLoading}
      >
        Reset password
      </Button>
    </motion.form>
  );
};

export default ForgotPasswordForm;