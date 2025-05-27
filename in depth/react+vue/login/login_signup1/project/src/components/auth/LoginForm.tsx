import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Github, ToggleLeft as Google } from 'lucide-react';
import Input from '../common/Input';
import Button from '../common/Button';
import Checkbox from '../common/Checkbox';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

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
        value={formData.email}
        onChange={handleChange}
        required
      />
      
      <div className="space-y-1">
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="••••••••"
          icon={<Lock size={18} />}
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div className="text-right">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/forgot-password" 
              className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
            >
              Forgot password?
            </a>
          </motion.div>
        </div>
      </div>
      
      <Checkbox
        label="Remember me for 30 days"
        name="rememberMe"
        checked={formData.rememberMe}
        onChange={handleChange}
      />
      
      <Button
        type="submit"
        variant="primary"
        fullWidth
        isLoading={isLoading}
      >
        Sign in
      </Button>
      
      <div className="relative flex items-center justify-center">
        <div className="border-t border-white/10 absolute w-full"></div>
        <span className="bg-background-dark px-4 text-sm text-white/40 relative">
          or continue with
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Button 
          variant="outline" 
          icon={<Google size={18} />}
        >
          Google
        </Button>
        <Button 
          variant="outline" 
          icon={<Github size={18} />}
        >
          GitHub
        </Button>
      </div>
    </motion.form>
  );
};

export default LoginForm;