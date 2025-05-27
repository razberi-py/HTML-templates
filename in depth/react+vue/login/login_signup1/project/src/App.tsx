import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-dark text-white">
        <AnimatePresence mode="wait">
          <AppRoutes />
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;