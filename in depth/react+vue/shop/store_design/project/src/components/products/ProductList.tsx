import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Product } from '../../types';
import { useProducts } from '../../contexts/ProductContext';
import { categories } from '../../utils/mockData';
import { Filter, Search } from 'lucide-react';

const ProductList: React.FC = () => {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2500]);
  const [showFilters, setShowFilters] = useState(true);
  
  const location = useLocation();

  useEffect(() => {
    // Extract search parameters from URL if present
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [location]);

  useEffect(() => {
    // Filter products based on selected category, search query, and price range
    let result = [...products];
    
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query)
      );
    }
    
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(result);
  }, [products, selectedCategory, searchQuery, priceRange]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(e.target.value);
    setPriceRange(prev => {
      const newRange = [...prev] as [number, number];
      newRange[index] = value;
      return newRange;
    });
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setPriceRange([0, 2500]);
  };

  // Calculate max price for slider based on product data
  const maxPrice = Math.max(...products.map(product => product.price));
  const roundedMaxPrice = Math.ceil(maxPrice / 500) * 500; // Round to nearest 500

  // Count products by category for filters
  const productCountByCategory = categories.map(category => {
    if (category === 'All') {
      return products.length;
    }
    return products.filter(product => product.category === category).length;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
        
        <div className="w-full md:w-auto flex items-center space-x-4">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <Filter className="h-4 w-4 mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
      </div>
      
      {showFilters && (
        <div className="mb-8 p-4 bg-gray-50 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-6 md:space-y-0">
            <div className="w-full md:w-2/3">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    } transition-colors flex items-center`}
                  >
                    {category}
                    <span className="ml-1 text-xs bg-white bg-opacity-30 rounded-full px-1.5">
                      {productCountByCategory[index]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/3">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Price Range</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">${priceRange[0]}</span>
                  <span className="text-sm text-gray-600">${priceRange[1]}</span>
                </div>
                <div className="px-2">
                  <div className="relative">
                    <input
                      type="range"
                      min={0}
                      max={roundedMaxPrice}
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="absolute z-10 w-full h-2 appearance-none bg-transparent pointer-events-none"
                      style={{ 
                        WebkitAppearance: 'none',
                        background: 'transparent' 
                      }}
                    />
                    <input
                      type="range"
                      min={0}
                      max={roundedMaxPrice}
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="absolute z-20 w-full h-2 appearance-none bg-transparent pointer-events-none"
                      style={{ 
                        WebkitAppearance: 'none',
                        background: 'transparent' 
                      }}
                    />
                    <div className="relative z-0 h-2 rounded-lg bg-gray-200">
                      <div 
                        className="absolute h-full rounded-lg bg-blue-500"
                        style={{
                          left: `${(priceRange[0] / roundedMaxPrice) * 100}%`,
                          width: `${((priceRange[1] - priceRange[0]) / roundedMaxPrice) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="text-xs text-gray-500">Min Price</label>
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      min={0}
                      max={priceRange[1] - 1}
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="text-xs text-gray-500">Max Price</label>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      min={priceRange[0] + 1}
                      max={roundedMaxPrice}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}
      
      <div className="mt-6">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-4">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;