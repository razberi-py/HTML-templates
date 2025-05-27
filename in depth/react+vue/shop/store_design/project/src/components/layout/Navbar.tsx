import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { ShoppingCart, Menu, X, User, LogOut, Box, Home, Search, BarChart2, Users, Settings, Gift, CreditCard, Heart, Shield, Mail } from 'lucide-react';
import AuthCodePopup from '../auth/AuthCodePopup';

const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthCodePopupOpen, setIsAuthCodePopupOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const openAuthCodePopup = () => {
    setIsAuthCodePopupOpen(true);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Box className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">Hollow</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex-shrink-0 mx-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="py-2 pl-3 pr-10 rounded-full border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 transition-all text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-3 top-2.5 text-gray-400 hover:text-white">
                  <Search className="h-5 w-5" />
                </button>
              </form>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 border-b-2 border-transparent hover:border-blue-500 hover:text-white transition-colors"
              >
                <Home className="h-5 w-5 mr-1" />
                Home
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 border-b-2 border-transparent hover:border-blue-500 hover:text-white transition-colors"
              >
                <Box className="h-5 w-5 mr-1" />
                Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 border-b-2 border-transparent hover:border-blue-500 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 mr-1" />
                Contact
              </Link>
              <button
                onClick={openAuthCodePopup}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 border-b-2 border-transparent hover:border-blue-500 hover:text-white transition-colors"
              >
                <Shield className="h-5 w-5 mr-1" />
                Auth
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-800 transition-colors">
              <ShoppingCart className="h-6 w-6 text-gray-300" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {currentUser ? (
              <div className="ml-4 relative flex items-center">
                <div className="relative">
                  <Link
                    to={currentUser.isAdmin ? "/admin" : "/profile"}
                    className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="h-8 w-8 rounded-full bg-blue-800 flex items-center justify-center text-white">
                      {currentUser.username.charAt(0).toUpperCase()}
                    </div>
                    <span className="ml-2">{currentUser.username}</span>
                  </Link>
                </div>
                <button
                  onClick={handleLogout}
                  className="ml-4 py-2 px-3 rounded-md text-sm text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div className="ml-4 flex space-x-2">
                <Link
                  to="/login"
                  className="py-2 px-4 border border-gray-700 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Link to="/cart" className="relative p-2 mr-2 rounded-full hover:bg-gray-800 transition-colors">
              <ShoppingCart className="h-6 w-6 text-gray-300" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <form onSubmit={handleSearch} className="px-4 mb-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 pl-3 pr-10 rounded-full border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-400 hover:text-white">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>
          <Link
            to="/"
            className="block py-2 px-4 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <Home className="h-5 w-5 mr-2" />
              Home
            </div>
          </Link>
          <Link
            to="/products"
            className="block py-2 px-4 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <Box className="h-5 w-5 mr-2" />
              Products
            </div>
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              Contact
            </div>
          </Link>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              openAuthCodePopup();
            }}
            className="block w-full text-left py-2 px-4 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Auth
            </div>
          </button>
        </div>
        
        <div className="pt-4 pb-3 border-t border-gray-700">
          {currentUser ? (
            <div className="space-y-1">
              <div className="flex items-center px-4 py-2">
                <div className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-white font-semibold">
                  {currentUser.username.charAt(0).toUpperCase()}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">{currentUser.username}</div>
                  <div className="text-sm font-medium text-gray-400">{currentUser.email}</div>
                </div>
              </div>
              <Link
                to={currentUser.isAdmin ? "/admin" : "/profile"}
                className="block py-2 px-4 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  {currentUser.isAdmin ? "Admin Dashboard" : "Profile"}
                </div>
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left py-2 px-4 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <div className="flex items-center">
                  <LogOut className="h-5 w-5 mr-2" />
                  Logout
                </div>
              </button>
            </div>
          ) : (
            <div className="space-y-1 px-4">
              <Link
                to="/login"
                className="block w-full py-2 text-center border border-gray-700 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block w-full py-2 mt-2 text-center border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
      
      {/* Auth Code Popup */}
      <AuthCodePopup 
        isOpen={isAuthCodePopupOpen}
        onClose={() => setIsAuthCodePopupOpen(false)}
      />
    </nav>
  );
};

export default Navbar;