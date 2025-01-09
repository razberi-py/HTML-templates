import React from 'react';
import { AuthForm } from './components/AuthForm';
import { TopographyBackground } from './components/TopographyBackground';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-400 via-purple-500 to-indigo-500 flex items-center justify-center p-4 relative overflow-hidden">
      <TopographyBackground />
      <AuthForm />
    </div>
  );
}

export default App;
