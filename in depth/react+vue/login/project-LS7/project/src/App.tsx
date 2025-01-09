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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Browser Bar */}
        <div className="bg-gray-800 p-4 flex items-center gap-2">
          <Globe className="text-gray-400" size={24} />
          <div className="flex-1 bg-gray-700 rounded-lg px-4 py-2 text-gray-300 text-sm">
            secure.example.com
          </div>
        </div>

        {/* Tab Bar */}
        <div className="bg-gray-100 border-b flex">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex items-center gap-2 px-6 py-3 ${
              activeTab === 'login'
                ? 'bg-white border-t-2 border-blue-500'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Lock size={18} />
            Login
          </button>
          <button
            onClick={() => setActiveTab('signup')}
            className={`flex items-center gap-2 px-6 py-3 ${
              activeTab === 'signup'
                ? 'bg-white border-t-2 border-blue-500'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <UserPlus size={18} />
            Sign Up
          </button>
          <button
            onClick={() => setActiveTab('qa')}
            className={`flex items-center gap-2 px-6 py-3 ${
              activeTab === 'qa'
                ? 'bg-white border-t-2 border-blue-500'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <HelpCircle size={18} />
            Q&A
          </button>
        </div>

        {/* Content Area */}
        <div className="p-8">
          {activeTab === 'login' && (
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome Back</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-blue-500 hover:text-blue-600">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Sign In
                </button>
              </form>
            </div>
          )}

          {activeTab === 'signup' && (
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Account</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-500" />
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-blue-500 hover:text-blue-600">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-blue-500 hover:text-blue-600">
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Create Account
                </button>
              </form>
            </div>
          )}

          {activeTab === 'qa' && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100"
                    >
                      <span className="font-medium text-gray-700">{faq.question}</span>
                      {expandedFAQ === index ? (
                        <X size={20} className="text-gray-500" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-500" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="p-4 bg-white">
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
