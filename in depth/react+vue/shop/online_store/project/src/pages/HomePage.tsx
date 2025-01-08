import React from 'react';
import { Terminal } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Tool } from '../types';

interface HomePageProps {
  tools: Tool[];
  onAddToCart: (tool: Tool) => void;
}

export function HomePage({ tools, onAddToCart }: HomePageProps) {
  const featuredTools = tools.filter(tool => tool.featured);
  
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <Terminal className="h-8 w-8 text-green-400" />
          <h2 className="text-2xl font-bold text-white">Featured Tools</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredTools.map(tool => (
          <ProductCard
            key={tool.id}
            tool={tool}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-8">All Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map(tool => (
            <ProductCard
              key={tool.id}
              tool={tool}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}