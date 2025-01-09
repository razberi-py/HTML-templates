import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Car,
  Shield,
  Timer,
  Star,
  Search,
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'New Vehicles', path: '/new-vehicles' },
  { name: 'Used Vehicles', path: '/used-vehicles' },
  { name: 'Compare', path: '/compare' },
  { name: 'Financing', path: '/financing' },
  { name: 'Service', path: '/service' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar */}
          <div className="py-3 border-b border-slate-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-sm text-slate-400">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>123 Auto Drive, Car City</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Mon-Sat: 9AM-8PM</span>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  <Shield className="h-4 w-4" />
                  <span>Certified Pre-owned</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  <Timer className="h-4 w-4" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  <Star className="h-4 w-4" />
                  <span>Premium Service</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Header */}
          <div className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Car className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">AutoElite</h1>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link ${
                      location.pathname === item.path
                        ? 'text-blue-400'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Search */}
              <div className="hidden md:flex items-center ml-4">
                <button className="p-2 text-slate-400 hover:text-blue-400 transition-colors">
                  <Search className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-gray-400 hover:text-gray-500"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-blue-600'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">AutoElite</span>
              </div>
              <p className="text-slate-400">
                Your trusted partner in finding the perfect vehicle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link to="/new-vehicles" className="text-gray-400 hover:text-white">
                  New Vehicles
                </Link>
                <Link to="/used-vehicles" className="text-gray-400 hover:text-white">
                  Used Vehicles
                </Link>
                <Link to="/financing" className="text-gray-400 hover:text-white">
                  Financing
                </Link>
                <Link to="/service" className="text-gray-400 hover:text-white">
                  Service
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>123 Auto Drive</p>
                <p>Car City, ST 12345</p>
                <p>(555) 123-4567</p>
                <p>info@autoelite.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 9AM - 8PM</p>
                <p>Saturday: 9AM - 6PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AutoElite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}