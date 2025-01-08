import React from 'react';
import { Tool } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Shield } from 'lucide-react';

interface CategoryPageProps {
  category: string;
  tools: Tool[];
  onAddToCart: (tool: Tool) => void;
}

export function CategoryPage({ category, tools, onAddToCart }: CategoryPageProps) {
  const categoryTools = tools.filter(tool => tool.category === category);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center space-x-3 mb-8">
        <Shield className="h-8 w-8 text-green-400" />
        <h2 className="text-2xl font-bold text-white">{category} Tools</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryTools.map(tool => (
          <ProductCard
            key={tool.id}
            tool={tool}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}