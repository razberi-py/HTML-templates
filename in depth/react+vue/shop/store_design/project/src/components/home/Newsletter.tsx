import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
      
      // Reset success message after a while
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <div className="bg-blue-600 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Get 10% Off Your First Order</h2>
          <p className="mt-2 text-blue-100 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive exclusive offers, early access to new products, and weekly deals directly to your inbox.
          </p>
          
          <div className="mt-8 max-w-md mx-auto">
            {subscribed ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md">
                <p className="font-medium">Thank you for subscribing!</p>
                <p className="text-sm">You'll receive your 10% discount code shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="sm:flex">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-l-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-gray-900"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent rounded-r-md shadow-sm font-medium text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
          
          <p className="mt-3 text-sm text-blue-200">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;