import React, { useState } from 'react';
import { AnimatePresence } from './components/animations/AnimatePresence';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import BackgroundEffects from './components/ui/BackgroundEffects';

type Page = 'login' | 'signup' | 'dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [user, setUser] = useState<{ email: string } | null>(null);

  const handleLogin = (email: string, password: string) => {
    // In a real app, this would validate with a backend
    setUser({ email });
    setCurrentPage('dashboard');
  };

  const handleSignup = (email: string, password: string, name: string) => {
    // In a real app, this would register with a backend
    setUser({ email });
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('login');
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <BackgroundEffects />
      
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
        <AnimatePresence>
          {currentPage === 'login' && (
            <LoginPage 
              key="login"
              onLogin={handleLogin} 
              onNavigateToSignup={() => navigateTo('signup')} 
            />
          )}
          
          {currentPage === 'signup' && (
            <SignupPage 
              key="signup"
              onSignup={handleSignup} 
              onNavigateToLogin={() => navigateTo('login')} 
            />
          )}
          
          {currentPage === 'dashboard' && user && (
            <DashboardPage 
              key="dashboard"
              user={user} 
              onLogout={handleLogout} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;