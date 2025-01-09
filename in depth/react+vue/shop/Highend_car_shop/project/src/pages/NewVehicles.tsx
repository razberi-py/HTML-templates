import React from 'react';
import { Vehicle } from '../types';
import { featuredVehicles } from '../data/vehicles';

export default function NewVehicles() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">New Vehicles</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-8">
          {['All', 'Sedan', 'SUV', 'Sports', 'Electric', 'Luxury', 'Hybrid'].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="card">
              <div className="relative">
                <img
                  src={vehicle.images[0]}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  New
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                <div className="space-y-2">
                  <p className="text-slate-400">
                    <span className="font-semibold">Engine:</span> {vehicle.specs.engine}
                  </p>
                  <p className="text-slate-400">
                    <span className="font-semibold">Power:</span> {vehicle.specs.horsepower} hp
                  </p>
                  <p className="text-slate-400">
                    <span className="font-semibold">Drivetrain:</span> {vehicle.specs.drivetrain}
                  </p>
                  <p className="text-slate-400">
                    <span className="font-semibold">MPG:</span> {vehicle.specs.fuelEconomy.city} city / {vehicle.specs.fuelEconomy.highway} hwy
                  </p>
                  <p className="text-slate-400">
                    <span className="font-semibold">Stock:</span> {vehicle.stockCount} available
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-blue-400">
                    ${vehicle.price.toLocaleString()}
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}