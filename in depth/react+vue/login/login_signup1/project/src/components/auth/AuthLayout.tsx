import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  alternateText: string;
  alternateLinkText: string;
  alternateLinkUrl: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  alternateText,
  alternateLinkText,
  alternateLinkUrl
}) => {
  return (
    <div className="min-h-screen bg-background-dark bg-auth-pattern flex flex-col md:flex-row overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/10 rounded-full filter blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-secondary-500/10 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[30%] right-[10%] w-[20%] h-[20%] bg-accent-500/10 rounded-full filter blur-[60px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Branding & Info Side */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative md:w-1/2 bg-gradient-to-br from-background-dark via-background-card to-background-dark flex flex-col justify-center p-8 md:p-12 lg:p-16"
      >
        <div className="absolute top-6 left-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
              <Zap size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 group-hover:from-primary-300 group-hover:to-secondary-300 transition-all duration-300">
              Nebula
            </span>
          </Link>
        </div>

        <div className="hidden md:block mt-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-secondary-300">
            Experience the next level of security
          </h1>
          <p className="text-white/70 text-lg mb-8 max-w-md">
            Secure, beautiful, and simple authentication for your applications.
          </p>

          <div className="space-y-6 mt-12">
            {/* Feature points */}
            {[
              { title: "Advanced Security", description: "State-of-the-art encryption and security protocols" },
              { title: "Beautiful Experience", description: "Designed for the modern web with smooth animations" },
              { title: "Fast & Reliable", description: "Optimized for performance and reliability" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 h-6 w-6 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Form Side */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative md:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16"
      >
        <div className="max-w-md w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-white/60 mb-8">{subtitle}</p>

            {children}

            <div className="mt-8 text-center text-white/60 text-sm">
              {alternateText}{' '}
              <Link 
                to={alternateLinkUrl} 
                className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
              >
                {alternateLinkText}
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;