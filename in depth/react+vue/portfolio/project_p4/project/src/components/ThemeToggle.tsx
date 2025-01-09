import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', !isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed right-4 top-4 z-50 p-2 rounded-full bg-[#2A3B4C] hover:bg-[#2A3B4C]/80 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} className="text-[#64FFDA]" /> : <Moon size={20} className="text-[#64FFDA]" />}
    </button>
  );
}