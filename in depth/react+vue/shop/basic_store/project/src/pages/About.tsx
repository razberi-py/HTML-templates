import React from 'react';
import { Shield, Truck, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">About LuxeStore</h1>
          <p className="mt-4 text-xl text-gray-600">
            Your trusted destination for premium tech and lifestyle products
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="h-12 w-12 text-indigo-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-center">Secure Shopping</h3>
            <p className="mt-2 text-gray-600 text-center">
              All transactions are protected with enterprise-grade security
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Truck className="h-12 w-12 text-indigo-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-center">Fast Delivery</h3>
            <p className="mt-2 text-gray-600 text-center">
              Free shipping on orders over $100 with 2-day delivery
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="h-12 w-12 text-indigo-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-center">Quality Guarantee</h3>
            <p className="mt-2 text-gray-600 text-center">
              30-day money-back guarantee on all products
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
          <p className="mt-4 text-gray-600">
            Founded in 2024, LuxeStore has been committed to bringing you the finest selection
            of premium electronics, lifestyle products, and sporting goods. We carefully curate
            our catalog to ensure every product meets our high standards for quality and value.
          </p>
          <p className="mt-4 text-gray-600">
            Our team of experts tests and reviews each product before it makes it to our store,
            ensuring you get only the best. We believe in sustainable practices and work with
            brands that share our commitment to environmental responsibility.
          </p>
        </div>
      </div>
    </div>
  );
}