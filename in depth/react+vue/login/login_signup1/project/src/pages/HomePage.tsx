import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CircleUser, Moon, LogOut, Bell, Settings } from 'lucide-react';
import Button from '../components/common/Button';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const userName = "Alex Morgan"; // Simulated user name

  // Navigate to login if not authenticated
  useEffect(() => {
    // For demo purposes, uncomment to simulate "not logged in" state
    // navigate('/login');
  }, [navigate]);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-background-dark via-background-card to-background-dark"
    >
      {/* Header */}
      <header className="backdrop-blur-sm bg-background-card/80 border-b border-white/5 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
              Nebula
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <button className="text-white/70 hover:text-white transition-colors p-2 relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-error-500 rounded-full"></span>
            </button>
            <button className="text-white/70 hover:text-white transition-colors p-2">
              <Settings size={20} />
            </button>
            <button className="text-white/70 hover:text-white transition-colors p-2">
              <Moon size={20} />
            </button>
            <div className="flex items-center gap-2 ml-4">
              <div className="h-8 w-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                <CircleUser size={20} className="text-primary-400" />
              </div>
              <span className="text-sm font-medium hidden sm:inline-block">{userName}</span>
            </div>
            <Button 
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              icon={<LogOut size={16} />}
              className="ml-2"
            >
              <span className="hidden sm:inline-block">Logout</span>
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Welcome section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-300 to-secondary-400">
            Welcome back, {userName}
          </h1>
          <p className="text-white/70 mb-8">
            You've successfully logged into your account. This is a sample dashboard page for your authentication system.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cards */}
            {[
              { title: "Profile", icon: CircleUser, color: "from-primary-500 to-primary-700" },
              { title: "Settings", icon: Settings, color: "from-secondary-500 to-secondary-700" },
              { title: "Notifications", icon: Bell, color: "from-accent-500 to-accent-700" }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`bg-background-card border border-white/5 rounded-xl p-6 hover:shadow-glow transition-all duration-300 bg-gradient-to-br ${card.color} bg-opacity-10 hover:bg-opacity-20`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 mb-4 rounded-full bg-white/5">
                    <card.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-white/60">
                    Manage your {card.title.toLowerCase()} settings and preferences
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="mt-auto py-6 border-t border-white/5 text-center text-white/40 text-sm">
        <div className="container mx-auto px-4">
          <p>© 2025 Nebula Auth. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default HomePage;