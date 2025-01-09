import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Link2, User2, Sparkles, Menu, X } from 'lucide-react';
import Profile from './components/Profile';
import Links from './components/Links';
import About from './components/About';
import Lab from './components/Lab';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = {
    profile: <Profile />,
    links: <Links />,
    about: <About />,
    lab: <Lab />,
  };

  const navItems = [
    { id: 'profile', icon: User2, label: 'Profile', gradient: 'from-purple-600 to-pink-600' },
    { id: 'links', icon: Link2, label: 'Links', gradient: 'from-cyan-600 to-blue-600' },
    { id: 'about', icon: Code2, label: 'About', gradient: 'from-green-600 to-emerald-600' },
    { id: 'lab', icon: Sparkles, label: 'Lab', gradient: 'from-orange-600 to-red-600' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white w-full">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-gray-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4 max-w-[2000px] mx-auto">
          <div className="flex lg:hidden items-center justify-between mb-4">
            <h1 className="text-xl font-bold">Portfolio</h1>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-800"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          <AnimatePresence>
            {(isMobileMenuOpen || !isMobileMenuOpen) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`grid grid-cols-2 lg:grid-cols-4 gap-4 ${isMobileMenuOpen ? 'block' : 'hidden lg:grid'}`}
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`p-4 rounded-lg ${
                      activeSection === item.id
                        ? `bg-gradient-to-r ${item.gradient}`
                        : 'bg-gray-800 hover:bg-gray-700'
                    } transition-all duration-300 flex items-center gap-3`}
                  >
                    <item.icon className="w-6 h-6" />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full pt-32 pb-8">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[2000px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-[calc(100vh-16rem)]"
            >
              {sections[activeSection as keyof typeof sections]}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800 bg-[#0a0a0a]/80 backdrop-blur-lg">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6 max-w-[2000px] mx-auto">
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}