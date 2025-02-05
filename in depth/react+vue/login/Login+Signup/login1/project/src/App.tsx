import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Glass Card */}
        <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-purple-200">
              {isLogin
                ? 'Enter your credentials to access your account'
                : 'Sign up to get started with our platform'}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-200 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white/10 border border-purple-300/20 text-white placeholder-purple-200 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
              </div>
            )}
            
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-200 h-5 w-5" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/10 border border-purple-300/20 text-white placeholder-purple-200 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-200 h-5 w-5" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-white/10 border border-purple-300/20 text-white placeholder-purple-200 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-purple-200">
                  <input type="checkbox" className="mr-2 rounded border-purple-300/20 bg-white/10" />
                  Remember me
                </label>
                <a href="#" className="text-purple-200 hover:text-white transition-colors">
                  Forgot Password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg transition-colors duration-300 flex items-center justify-center group"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Toggle */}
          <p className="mt-6 text-center text-purple-200">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-white hover:text-purple-300 font-semibold transition-colors"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;