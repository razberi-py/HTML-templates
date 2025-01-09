import React from 'react';

import { Wrench, Car, Calendar, Shield } from 'lucide-react';

export default function Service() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Service & Maintenance</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="card p-6 hover:scale-105 transition-transform duration-300">
            <Wrench className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Maintenance</h3>
            <p className="text-slate-400">Regular maintenance and tune-ups</p>
          </div>
          <div className="card p-6 hover:scale-105 transition-transform duration-300">
            <Car className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Repairs</h3>
            <p className="text-slate-400">Expert diagnostic and repair services</p>
          </div>
          <div className="card p-6 hover:scale-105 transition-transform duration-300">
            <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Scheduling</h3>
            <p className="text-slate-400">Online appointment booking coming soon</p>
          </div>
          <div className="card p-6 hover:scale-105 transition-transform duration-300">
            <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Warranty</h3>
            <p className="text-slate-400">Extended warranty options available</p>
          </div>
        </div>
        <div className="card p-8 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">Schedule Service</h2>
          <p className="text-slate-400 mb-6">Online scheduling system coming soon. Please call us to book your service appointment.</p>
          <button disabled className="bg-blue-600/50 text-white px-6 py-3 rounded-lg cursor-not-allowed">
            Schedule Service
          </button>
        </div>
      </div>
    </div>
  );
}