import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Box className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">Hollow</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your premier destination for premium products. We source the best items from trusted suppliers and deliver them directly to customers worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Hardware" className="text-gray-300 hover:text-blue-500 transition-colors text-sm">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products?category=Accessories" className="text-gray-300 hover:text-blue-500 transition-colors text-sm">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/products?category=Clothing" className="text-gray-300 hover:text-blue-500 transition-colors text-sm">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/products?category=Furniture" className="text-gray-300 hover:text-blue-500 transition-colors text-sm">
                  Home & Office
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-blue-500 transition-colors text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-500 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                <span>123 Hollow Street, San Francisco, CA</span>
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <Phone className="h-4 w-4 mr-2 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-2 text-blue-500" />
                <span>support@hollowdrop.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center px-3 py-2 border border-gray-700 rounded text-sm text-gray-300 hover:text-white hover:border-blue-500 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Hollow Drop Shipping. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;