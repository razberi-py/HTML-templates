import React from 'react';
import { ShoppingCart, Menu, Search } from 'lucide-react';

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
  onHomeClick: () => void;
  onCategoryClick: (category: string) => void;
}

export function Navbar({ cartItemCount, onCartClick, onHomeClick, onCategoryClick }: NavbarProps) {
  const categories = ['Network', 'Web', 'Forensics', 'Cryptography', 'Reverse Engineering'];

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onHomeClick}
            className="text-xl font-bold hover:text-green-400 transition-colors"
          >
            CyberTools Market
          </button>
          <div className="hidden md:flex space-x-4 ml-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => onCategoryClick(category)}
                className="text-sm hover:text-green-400 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
          <Menu className="h-6 w-6 cursor-pointer hover:text-green-400 transition-colors md:hidden" />
        </div>
        
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full bg-gray-800 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <button
          onClick={onCartClick}
          className="relative p-2 hover:bg-gray-800 rounded-full transition-colors"
        >
          <ShoppingCart className="h-6 w-6" />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-green-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}