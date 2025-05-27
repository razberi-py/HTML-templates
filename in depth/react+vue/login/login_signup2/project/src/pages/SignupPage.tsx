import React, { useState } from 'react';
import { Github, Twitter } from 'lucide-react';
import AuthCard from '../components/auth/AuthCard';
import PasswordInput from '../components/auth/PasswordInput';
import DividerWithText from '../components/ui/DividerWithText';
import SocialLoginButton from '../components/ui/SocialLoginButton';
import Checkbox from '../components/ui/Checkbox';

interface SignupPageProps {
  onSignup: (email: string, password: string, name: string) => void;
  onNavigateToLogin: () => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onSignup, onNavigateToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    if (!agreeToTerms) {
      setError('You must agree to the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onSignup(email, password, name);
      setIsLoading(false);
    }, 1000);
  };
  
  const handleSocialSignup = (provider: string) => {
    // In a real app, this would initiate OAuth flow
    alert(`${provider} signup would happen here`);
  };
  
  return (
    <AuthCard
      title="Create an account"
      subtitle="Sign up to get started with our platform"
      showBackButton
      onBack={onNavigateToLogin}
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
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="input-field"
              required
            />
          </div>
          
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
            placeholder="Create a password"
            showStrengthIndicator
          />
          
          <div>
            <Checkbox
              id="terms"
              label={
                <>
                  I agree to the{' '}
                  <a href="#" className="text-accent-primary hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-accent-primary hover:underline">
                    Privacy Policy
                  </a>
                </>
              }
              checked={agreeToTerms}
              onChange={setAgreeToTerms}
            />
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
              Creating account...
            </>
          ) : (
            'Create account'
          )}
        </button>
        
        <p className="text-center text-text-secondary text-sm">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onNavigateToLogin}
            className="text-accent-primary hover:text-accent-secondary transition-colors"
          >
            Sign in
          </button>
        </p>
        
        <DividerWithText text="Or continue with" />
        
        <div className="grid grid-cols-2 gap-3">
          <SocialLoginButton
            icon={Github}
            provider="GitHub"
            onClick={() => handleSocialSignup('GitHub')}
          />
          <SocialLoginButton
            icon={Twitter}
            provider="Twitter"
            onClick={() => handleSocialSignup('Twitter')}
          />
        </div>
      </form>
    </AuthCard>
  );
};

export default SignupPage;