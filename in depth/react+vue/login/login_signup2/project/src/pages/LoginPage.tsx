import React, { useState } from 'react';
import { Github, Twitter } from 'lucide-react';
import AuthCard from '../components/auth/AuthCard';
import PasswordInput from '../components/auth/PasswordInput';
import Checkbox from '../components/ui/Checkbox';
import DividerWithText from '../components/ui/DividerWithText';
import SocialLoginButton from '../components/ui/SocialLoginButton';

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
  onNavigateToSignup: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigateToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onLogin(email, password);
      setIsLoading(false);
    }, 1000);
  };
  
  const handleSocialLogin = (provider: string) => {
    // In a real app, this would initiate OAuth flow
    alert(`${provider} login would happen here`);
  };
  
  return (
    <AuthCard
      title="Welcome back"
      subtitle="Enter your credentials to access your account"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 bg-error/10 border border-error/20 rounded-lg text-error text-sm mb-4">
            {error}
          </div>
        )}
        
        <div className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="input-field"
              required
            />
          </div>
          
          <PasswordInput
            value={password}
            onChange={setPassword}
            placeholder="Password"
          />
          
          <div className="flex items-center justify-between">
            <Checkbox
              id="remember-me"
              label="Remember me"
              checked={rememberMe}
              onChange={setRememberMe}
            />
            
            <button
              type="button"
              className="text-sm text-accent-primary hover:text-accent-secondary transition-colors"
            >
              Forgot password?
            </button>
          </div>
        </div>
        
        <button
          type="submit"
          className={`btn-primary w-full ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
              Signing in...
            </>
          ) : (
            'Sign in'
          )}
        </button>
        
        <p className="text-center text-text-secondary text-sm">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={onNavigateToSignup}
            className="text-accent-primary hover:text-accent-secondary transition-colors"
          >
            Sign up
          </button>
        </p>
        
        <DividerWithText text="Or continue with" />
        
        <div className="grid grid-cols-2 gap-3">
          <SocialLoginButton
            icon={Github}
            provider="GitHub"
            onClick={() => handleSocialLogin('GitHub')}
          />
          <SocialLoginButton
            icon={Twitter}
            provider="Twitter"
            onClick={() => handleSocialLogin('Twitter')}
          />
        </div>
      </form>
    </AuthCard>
  );
};

export default LoginPage;