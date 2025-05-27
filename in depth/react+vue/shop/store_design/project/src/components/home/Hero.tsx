import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Premium Products, Exceptional Service
            </h1>
            <p className="text-lg md:text-xl text-blue-200">
              Discover unique products at unbeatable prices. 
              From high-performance electronics to fashion and home decor.
            </p>
            <div className="pt-4 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Fast Shipping</h3>
                  <p className="mt-1 text-blue-200">Get your order in 2-3 business days</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ShieldCheck className="h-6 w-6 text-blue-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Authentic Products</h3>
                  <p className="mt-1 text-blue-200">All items 100% genuine with manufacturer warranty</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-blue-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Competitive Prices</h3>
                  <p className="mt-1 text-blue-200">Best value products on the market</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-md text-base font-medium text-white hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Join Hollow
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Online Shopping"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;