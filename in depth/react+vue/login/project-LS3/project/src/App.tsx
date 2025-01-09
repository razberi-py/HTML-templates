import React from 'react';
import { useState } from 'react';
import { UserPlus, LogIn, Mail, Lock, User, ArrowRight } from 'lucide-react';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-8 -right-48 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -top-8 right-96 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Card */}
      <div className="w-full max-w-md relative">
        <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20">
          <div className="flex justify-center mb-8">
            {isLogin ? (
              <LogIn className="w-12 h-12 text-white" />
            ) : (
              <UserPlus className="w-12 h-12 text-white" />
            )}
          </div>
          
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          
          <form className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-white text-sm font-medium block">Username</label>
                <div className="relative">
                  <User className="w-5 h-5 text-white/60 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-10 pr-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                    placeholder="Enter your username"
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-white text-sm font-medium block">Email</label>
              <div className="relative">
                <Mail className="w-5 h-5 text-white/60 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-10 pr-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-white text-sm font-medium block">Password</label>
              <div className="relative">
                <Lock className="w-5 h-5 text-white/60 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-10 pr-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-purple-600 rounded-lg py-2.5 font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <button
              onClick={toggleForm}
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
