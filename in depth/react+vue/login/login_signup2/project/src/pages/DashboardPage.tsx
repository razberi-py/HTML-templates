import React, { useState } from 'react';
import { LogOut, User, Settings, Bell, Menu, X } from 'lucide-react';

interface DashboardPageProps {
  user: { email: string };
  onLogout: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ user, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <div className="w-full max-w-6xl mx-auto animate-fadeIn">
      <div className="bg-background-secondary/90 backdrop-blur-lg rounded-2xl overflow-hidden border border-background-tertiary/50">
        {/* Header */}
        <header className="p-4 md:p-6 border-b border-background-tertiary/50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white font-bold">
              {user.email.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-xl font-semibold">Welcome back</h1>
              <p className="text-sm text-text-secondary">{user.email}</p>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button className="text-text-secondary hover:text-text-primary transition-colors">
              <Bell size={20} />
            </button>
            <button className="text-text-secondary hover:text-text-primary transition-colors">
              <Settings size={20} />
            </button>
            <button className="text-text-secondary hover:text-text-primary transition-colors">
              <User size={20} />
            </button>
            <button 
              onClick={onLogout}
              className="btn-secondary text-sm px-4 py-2"
            >
              <LogOut size={16} />
              Sign out
            </button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-text-primary"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>
        
        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden p-4 border-b border-background-tertiary/50 bg-background-tertiary/30 animate-slideUp">
            <nav className="flex flex-col gap-2">
              <button className="flex items-center gap-2 p-3 rounded-lg hover:bg-background-tertiary/50 transition-colors text-text-secondary hover:text-text-primary">
                <Bell size={20} />
                <span>Notifications</span>
              </button>
              <button className="flex items-center gap-2 p-3 rounded-lg hover:bg-background-tertiary/50 transition-colors text-text-secondary hover:text-text-primary">
                <Settings size={20} />
                <span>Settings</span>
              </button>
              <button className="flex items-center gap-2 p-3 rounded-lg hover:bg-background-tertiary/50 transition-colors text-text-secondary hover:text-text-primary">
                <User size={20} />
                <span>Profile</span>
              </button>
              <button 
                onClick={onLogout}
                className="flex items-center gap-2 p-3 rounded-lg bg-background-tertiary/50 hover:bg-background-tertiary/80 transition-colors text-error"
              >
                <LogOut size={20} />
                <span>Sign out</span>
              </button>
            </nav>
          </div>
        )}
        
        {/* Main content */}
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Welcome card */}
            <div className="col-span-1 md:col-span-2 auth-card animated-gradient-bg p-6 space-y-4">
              <h2 className="text-2xl font-bold">Dashboard</h2>
              <p className="text-text-secondary">
                This is a placeholder dashboard page. In a real application, this would display user-specific content and functionality.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <button className="btn-primary text-sm px-4 py-2">Get Started</button>
                <button className="btn-secondary text-sm px-4 py-2">View Documentation</button>
              </div>
            </div>
            
            {/* Stats card */}
            <div className="col-span-1 auth-card p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="p-3 bg-background-tertiary/30 rounded-lg">
                  <p className="text-sm text-text-secondary">Daily Visits</p>
                  <p className="text-2xl font-bold">1,254</p>
                </div>
                <div className="p-3 bg-background-tertiary/30 rounded-lg">
                  <p className="text-sm text-text-secondary">New Users</p>
                  <p className="text-2xl font-bold">85</p>
                </div>
                <div className="p-3 bg-background-tertiary/30 rounded-lg">
                  <p className="text-sm text-text-secondary">Conversion Rate</p>
                  <p className="text-2xl font-bold">6.8%</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional content - activity feed */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="auth-card divide-y divide-background-tertiary/50">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="p-4 flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-background-tertiary/50 flex items-center justify-center flex-shrink-0">
                    <User size={16} className="text-text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-text-primary font-medium">Activity #{item}</p>
                    <p className="text-sm text-text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <p className="text-xs text-text-muted mt-1">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;