import React from 'react';
import { useState } from 'react';
import {
  Github,
  Mail,
  Lock,
  User,
  Building2,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  Chrome,
  Twitter,
} from 'lucide-react';

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: 'Account',
    description: 'Start with your email',
  },
  {
    title: 'Personal',
    description: 'Tell us about yourself',
  },
  {
    title: 'Professional',
    description: 'Your work details',
  },
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formType, setFormType] = useState<'login' | 'signup'>('signup');

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(current => current + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(current => current - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-gray-200 bg-white px-12 py-3 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-lg border border-gray-200 bg-white px-12 py-3 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border border-gray-200 bg-white px-12 py-3 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Location"
                className="w-full rounded-lg border border-gray-200 bg-white px-12 py-3 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Company"
                className="w-full rounded-lg border border-gray-200 bg-white px-12 py-3 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Job Title"
                className="w-full rounded-lg border border-gray-200 bg-white px-12 py-3 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden">
        <div className="grid md:grid-cols-5">
          {/* Left Panel */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:col-span-2 text-white">
            <h2 className="text-3xl font-bold mb-6">Welcome Back</h2>
            <p className="text-blue-100 mb-8">
              {formType === 'signup'
                ? 'Create an account to get started with our platform.'
                : 'Sign in to continue your journey with us.'}
            </p>
            <div className="space-y-2">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className={`flex items-center space-x-4 ${
                    index === currentStep ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index === currentStep
                        ? 'bg-white text-blue-600'
                        : 'border-2 border-white/50'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{step.title}</p>
                    <p className="text-sm text-blue-200">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="p-8 md:col-span-3">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setFormType(formType === 'login' ? 'signup' : 'login')}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                {formType === 'login'
                  ? "Don't have an account? Sign up"
                  : 'Already have an account? Sign in'}
              </button>
            </div>

            <h3 className="text-2xl font-bold mb-2">
              {formType === 'login' ? 'Sign in to your account' : 'Create your account'}
            </h3>
            <p className="text-gray-600 mb-8">
              {formType === 'login'
                ? 'Welcome back! Please enter your details.'
                : 'Fill in the information to get started.'}
            </p>

            <form className="space-y-6">
              {renderStep()}

              <div className="flex items-center space-x-4">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center justify-center px-6 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <ArrowLeft size={20} className="mr-2" />
                    Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {currentStep === steps.length - 1 ? (
                    'Complete'
                  ) : (
                    <>
                      Next
                      <ArrowRight size={20} className="ml-2" />
                    </>
                  )}
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Chrome size={20} className="text-gray-600" />
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Github size={20} className="text-gray-600" />
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Twitter size={20} className="text-gray-600" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
