import React from 'react';
import { useState } from 'react';
import { LogIn, UserPlus, Mail, Lock, User, ArrowRight } from 'lucide-react';

type FormType = 'login' | 'signup';

interface FormData {
  name?: string;
  email: string;
  password: string;
}

function App() {
  const [formType, setFormType] = useState<FormType>('login');
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    name: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-2">
            {formType === 'login' ? (
              <LogIn className="w-8 h-8 text-indigo-600" />
            ) : (
              <UserPlus className="w-8 h-8 text-indigo-600" />
            )}
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            {formType === 'login' ? 'Welcome back' : 'Create account'}
          </h1>
          <p className="text-gray-500">
            {formType === 'login'
              ? 'Enter your credentials to access your account'
              : 'Sign up to get started with your new account'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {formType === 'signup' && (
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                placeholder="••••••••"
                required
                minLength={8}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition-colors"
          >
            <span>{formType === 'login' ? 'Sign in' : 'Create account'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center">
          <button
            onClick={() => setFormType(formType === 'login' ? 'signup' : 'login')}
            className="text-sm text-indigo-600 hover:text-indigo-700"
          >
            {formType === 'login'
              ? "Don't have an account? Sign up"
              : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
