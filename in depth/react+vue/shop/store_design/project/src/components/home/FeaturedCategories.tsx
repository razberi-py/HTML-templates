import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  image: string;
  count: number;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, count, link }) => {
  return (
    <Link 
      to={link} 
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="aspect-w-16 aspect-h-9 w-full h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-300">{count} products</p>
        </div>
        <div className="p-2 bg-white bg-opacity-20 rounded-full transform group-hover:translate-x-1 transition-transform">
          <ArrowRight className="h-5 w-5 text-white" />
        </div>
      </div>
    </Link>
  );
};

const FeaturedCategories: React.FC = () => {
  const categories = [
    {
      id: 1,
      title: 'Electronics',
      image: 'https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      count: 24,
      link: '/products?category=Hardware',
    },
    {
      id: 2,
      title: 'Accessories',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      count: 18,
      link: '/products?category=Accessories',
    },
    {
      id: 3,
      title: 'Home & Office',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      count: 32,
      link: '/products?category=Furniture',
    },
    {
      id: 4,
      title: 'Clothing',
      image: 'https://images.pexels.com/photos/4889247/pexels-photo-4889247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      count: 45,
      link: '/products?category=Clothing',
    },
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Shop by Category</h2>
          <p className="mt-2 text-gray-600">Browse our extensive collection of products by category</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              count={category.count}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;