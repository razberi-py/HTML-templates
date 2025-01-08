import React from 'react';
import { CartItem } from '../types';
import { X, Minus, Plus, ShoppingCart } from 'lucide-react';

interface CartProps {
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function Cart({ items, onClose, onUpdateQuantity, onRemove }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const discount = total > 1000 ? total * 0.1 : 0;
  const finalTotal = total - discount;

  if (items.length === 0) {
    return (
      <div className="fixed inset-y-0 right-0 w-96 bg-gray-900 text-white shadow-lg p-6 transform transition-transform z-50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Cart</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-[80vh]">
          <ShoppingCart className="h-16 w-16 text-gray-600 mb-4" />
          <p className="text-gray-400">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-gray-900 text-white shadow-lg p-6 transform transition-transform z-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Cart</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {items.map(item => (
          <div key={item.id} className="flex items-center mb-4 bg-gray-800 p-4 rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-green-400">${item.price}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  className="text-gray-400 hover:text-white"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="mx-3">{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="text-gray-400 hover:text-white"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <button
              onClick={() => onRemove(item.id)}
              className="text-gray-400 hover:text-red-500 ml-4"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-800 pt-4 mt-4">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Items ({itemCount}):</span>
            <span>${total.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-green-400">Bulk Discount (10%):</span>
              <span className="text-green-400">-${discount.toFixed(2)}</span>
            </div>
          )}
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Total:</span>
          <span className="text-green-400 font-bold">${finalTotal.toFixed(2)}</span>
        </div>
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded transition-colors mb-2">
          Checkout
        </button>
        <p className="text-xs text-gray-500 text-center">
          Bulk discount applied on orders over $1,000
        </p>
      </div>
    </div>
  );
}