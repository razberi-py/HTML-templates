import React from 'react';
import { useState } from 'react';
import { Tool, CartItem } from './types';
import { tools } from './data/tools';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentCategory, setCurrentCategory] = useState<string>('');

  const addToCart = (tool: Tool) => {
    setCartItems(items => {
      const existingItem = items.find(item => item.id === tool.id);
      if (existingItem) {
        return items.map(item =>
          item.id === tool.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...tool, quantity: 1 }];
    });
  };

  const updateCartItemQuantity = (id: string, quantity: number) => {
    setCartItems(items =>
      quantity === 0
        ? items.filter(item => item.id !== id)
        : items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const navigateToCategory = (category: string) => {
    setCurrentPage('category');
    setCurrentCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onHomeClick={() => setCurrentPage('home')}
        onCategoryClick={navigateToCategory}
      />

      <main className="pt-24 px-6 pb-12">
        {currentPage === 'home' ? (
          <HomePage tools={tools} onAddToCart={addToCart} />
        ) : (
          <CategoryPage
            category={currentCategory}
            tools={tools}
            onAddToCart={addToCart}
          />
        )}
      </main>

      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsCartOpen(false)}
          />
          <Cart
            items={cartItems}
            onClose={() => setIsCartOpen(false)}
            onUpdateQuantity={updateCartItemQuantity}
            onRemove={removeFromCart}
          />
        </>
      )}
    </div>
  );
}

export default App;
