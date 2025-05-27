import React, { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';

interface AuthCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  showBackButton?: boolean;
  onBack?: () => void;
}

const AuthCard: React.FC<AuthCardProps> = ({ 
  title, 
  subtitle, 
  children, 
  showBackButton = false,
  onBack
}) => {
  return (
    <div className="w-full max-w-md mx-auto animate-fadeIn">
      <div className="auth-card">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent-secondary/20 rounded-full blur-3xl" />
        
        {/* Card header */}
        <div className="relative z-10 mb-8">
          {showBackButton && (
            <button 
              onClick={onBack}
              className="absolute -left-2 -top-2 p-2 text-text-muted hover:text-text-primary rounded-full transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          
          <h1 className="text-3xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            {title}
          </h1>
          
          {subtitle && (
            <p className="mt-2 text-text-secondary">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Card content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthCard;