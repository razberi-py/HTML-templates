import React, { useState } from 'react';
import { UserRound, KeyRound, Mail, ArrowRight, Github, Twitter, Chrome, Sparkles, Fingerprint, Lock, Shield } from 'lucide-react';

type FormMode = 'login' | 'signup';

export const AuthForm = () => {
  const [mode, setMode] = useState<FormMode>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-xl p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 relative overflow-hidden group hover:shadow-purple-500/20 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-blue-500/10 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="text-center mb-8">
        <div className="inline-flex mb-4 relative group">
          <div className="relative">
            <Lock className="w-12 h-12 text-purple-500 animate-pulse" />
            <div className="absolute -right-6 top-0 animate-bounce">
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
          {mode === 'login' ? 'Welcome back' : 'Create account'}
        </h2>
        <p className="text-gray-600">
          {mode === 'login'
            ? 'Enter your credentials to access your account'
            : 'Fill in the form to create your account'}
        </p>
        <div className="mt-4 flex justify-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-purple-100 rounded-full">
              <Shield className="w-4 h-4 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Secure</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-purple-100 rounded-full">
              <Fingerprint className="w-4 h-4 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Private</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-purple-100 rounded-full animate-pulse">
              <Sparkles className="w-4 h-4 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Fast</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'signup' && (
          <div className="relative">
            <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Full name"
              className="w-full pl-10 pr-4 py-2 border border-purple-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/50"
              required
            />
          </div>
        )}

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="email"
            placeholder="Email address"
            className="w-full pl-10 pr-4 py-2 border border-purple-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/50"
            required
          />
        </div>

        <div className="relative">
          <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full pl-10 pr-4 py-2 border border-purple-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/50"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-500 transition-colors"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {mode === 'login' && (
          <div className="flex justify-end">
            <button type="button" className="text-sm text-purple-600 hover:text-purple-800">
              Forgot password?
            </button>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-pink-600 hover:to-purple-700 focus:ring-4 focus:ring-purple-300 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/25"
        >
          {isLoading ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              {mode === 'login' ? 'Sign in' : 'Create account'}
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <button
            type="button"
            className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:border-red-200 transition-all group"
          >
            <Chrome className="w-5 h-5 text-gray-600 group-hover:text-red-600 transition-colors" />
          </button>
          <button
            type="button"
            className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-gray-300 transition-all group"
          >
            <Github className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
          </button>
          <button
            type="button"
            className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:border-blue-200 transition-all group"
          >
            <Twitter className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors" />
          </button>
        </div>
        <div className="text-center text-sm">
          <span className="text-gray-600">
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          </span>
          <button
            type="button"
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            {mode === 'login' ? 'Sign up' : 'Sign in'}
          </button>
        </div>
      </form>
    </div>
  );
};