import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Vehicle } from '../types';
import { featuredVehicles } from '../data/vehicles';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.6)),
            url(https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=2000)
          `,
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              Find Your Perfect Drive
            </h1>
            <p className="text-xl mb-8">
              Discover our extensive collection of premium vehicles
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Browse Inventory
            </button>
          </div>
        </div>
      </div>

      {/* Featured Vehicles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Featured Vehicles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="card group"
              >
                <img
                  src={vehicle.images[0]}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="text-slate-400 mb-4">
                    {vehicle.year} • {vehicle.mileage.toLocaleString()} miles
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-blue-400">
                      ${vehicle.price.toLocaleString()}
                    </p>
                    <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                      <span>Details</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Special Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8 group">
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                0% APR Financing
              </h3>
              <p className="text-slate-400 mb-4">
                Available on select new vehicles for qualified buyers
              </p>
              <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                Learn More
              </button>
            </div>
            <div className="card p-8 group">
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                Spring Sales Event
              </h3>
              <p className="text-slate-400 mb-4">
                Save up to $5,000 on select models
              </p>
              <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                View Offers
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}