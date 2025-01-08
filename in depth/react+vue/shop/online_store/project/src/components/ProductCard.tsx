import React from 'react';
import { Tool } from '../types';
import { ShieldCheck, Tag, AlertTriangle } from 'lucide-react';

interface ProductCardProps {
  tool: Tool;
  onAddToCart: (tool: Tool) => void;
}

export function ProductCard({ tool, onAddToCart }: ProductCardProps) {
  const difficultyColor = {
    Beginner: 'text-green-400',
    Intermediate: 'text-yellow-400',
    Advanced: 'text-red-400'
  }[tool.difficulty];

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-48">
        <img
          src={tool.image}
          alt={tool.name}
          className="w-full h-full object-cover"
        />
        {tool.featured && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{tool.name}</h3>
          <span className="text-green-400 font-bold">${tool.price}</span>
        </div>
        
        <p className="text-gray-300 mb-4">{tool.description}</p>
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            <ShieldCheck className="h-4 w-4 text-blue-400 mr-1" />
            <span className="text-sm text-gray-300">{tool.category}</span>
          </div>
          <div className="flex items-center">
            <AlertTriangle className={`h-4 w-4 ${difficultyColor} mr-1`} />
            <span className={`text-sm ${difficultyColor}`}>{tool.difficulty}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags.map(tag => (
            <div key={tag} className="flex items-center bg-gray-700 rounded-full px-3 py-1">
              <Tag className="h-3 w-3 text-gray-400 mr-1" />
              <span className="text-xs text-gray-300">{tag}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => onAddToCart(tool)}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}