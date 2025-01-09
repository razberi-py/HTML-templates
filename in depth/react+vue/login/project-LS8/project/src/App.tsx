import React from 'react';
import { useState } from 'react';
import { Globe, Lock, UserPlus, HelpCircle, ChevronDown, X } from 'lucide-react';

type Tab = 'login' | 'signup' | 'qa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How secure is my data?',
    answer: 'We use industry-standard encryption and security practices to protect your data. All sensitive information is encrypted both in transit and at rest.'
  },
  {
    question: 'Can I change my email address?',
    answer: 'Yes, you can change your email address from your account settings after logging in. You\'ll need to verify the new email address.'
  },
  {
    question: 'What happens if I forget my password?',
    answer: 'You can use the "Forgot Password" link on the login page to reset your password. We\'ll send you a password reset link to your registered email.'
  },
  {
    question: 'Is there a mobile app available?',
    answer: 'Yes, we have mobile apps available for both iOS and Android platforms. You can download them from the respective app stores.'
  },
  {
    question: 'How can I delete my account?',
    answer: 'You can delete your account from the account settings page. Please note that this action is irreversible and all your data will be permanently deleted.'
  }
];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('login');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-400 via-fuchsia-300 to-cyan-300 bg-[length:400%_400%] animate-[gradientMove_15s_ease-in-out_infinite] flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-white/20">
        {/* Browser Bar */}
        <div className="bg-gradient-to-r from-violet-900 to-indigo-900 p-4 flex items-center gap-2">
          <Globe className="text-violet-300" size={24} />
          <div className="flex-1 bg-indigo-950/50 backdrop-blur-sm rounded-lg px-4 py-2 text-violet-200 text-sm border border-violet-800">
            secure.example.com
          </div>
        </div>

        {/* Tab Bar */}
        <div className="bg-gray-100 border-b flex">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex items-center gap-2 px-6 py-3 ${
              activeTab === 'login'
                ? 'bg-white border-t-2 border-violet-500 text-violet-600'
                : 'text-gray-600 hover:bg-gray-50'
            } transition-all duration-300`}
          >
            <Lock size={18} />
            Login
          </button>
          <button
            onClick={() => setActiveTab('signup')}
            className={`flex items-center gap-2 px-6 py-3 ${
              activeTab === 'signup'
                ? 'bg-white border-t-2 border-violet-500 text-violet-600'
                : 'text-gray-600 hover:bg-gray-50'
            } transition-all duration-300`}
          >
            <UserPlus size={18} />
            Sign Up
          </button>
          <button
            onClick={() => setActiveTab('qa')}
            className={`flex items-center gap-2 px-6 py-3 ${
              activeTab === 'qa'
                ? 'bg-white border-t-2 border-violet-500 text-violet-600'
                : 'text-gray-600 hover:bg-gray-50'
            } transition-all duration-300`}
          >
            <HelpCircle size={18} />
            Q&A
          </button>
        </div>

        {/* Content Area */}
        <div className="p-8">
          {activeTab === 'login' && (
            <div className="max-w-md mx-auto animate-fade-in">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-6">Welcome Back</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white/50 backdrop-blur-sm transition-all duration-300"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white/50 backdrop-blur-sm transition-all duration-300"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-violet-500" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-violet-500 hover:text-violet-600 transition-colors duration-300">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 px-4 rounded-lg hover:from-violet-700 hover:to-fuchsia-700 transition-all transform hover:scale-[1.02] duration-300 shadow-lg hover:shadow-violet-200"
                >
                  Sign In
                </button>
              </form>
            </div>
          )}

          {activeTab === 'signup' && (
            <div className="max-w-md mx-auto animate-fade-in">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-6">Create Account</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white/50 backdrop-blur-sm transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white/50 backdrop-blur-sm transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white/50 backdrop-blur-sm transition-all duration-300"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white/50 backdrop-blur-sm transition-all duration-300"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white/50 backdrop-blur-sm transition-all duration-300"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-violet-500" />
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-violet-500 hover:text-violet-600 transition-colors duration-300">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-violet-500 hover:text-violet-600 transition-colors duration-300">
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 px-4 rounded-lg hover:from-violet-700 hover:to-fuchsia-700 transition-all transform hover:scale-[1.02] duration-300 shadow-lg hover:shadow-violet-200"
                >
                  Create Account
                </button>
              </form>
            </div>
          )}

          {activeTab === 'qa' && (
            <div className="max-w-2xl mx-auto animate-fade-in">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border rounded-lg overflow-hidden hover:border-violet-200 transition-all duration-300"
                  >
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left bg-white/50 hover:bg-violet-50 transition-all duration-300"
                    >
                      <span className="font-medium text-gray-800">{faq.question}</span>
                      {expandedFAQ === index ? (
                        <X size={20} className="text-violet-500" />
                      ) : (
                        <ChevronDown size={20} className="text-violet-500" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="p-4 bg-white/50 animate-fade-in">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;