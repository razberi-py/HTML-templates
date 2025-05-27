import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link 
      to={`/products/${product.id}`} 
      className="group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
    >
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden bg-gray-200">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-[220px] object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <button 
            onClick={handleAddToCart}
            className="p-2 bg-white bg-opacity-90 rounded-full shadow-sm hover:bg-blue-500 hover:text-white transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500 flex-grow line-clamp-2">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {product.category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;