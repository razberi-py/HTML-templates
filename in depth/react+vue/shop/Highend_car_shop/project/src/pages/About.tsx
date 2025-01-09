import React from 'react';

import { Building, Users, Award, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card p-8 text-left">
            <Building className="w-12 h-12 text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-4">Our Legacy</h2>
            <p className="text-slate-400">Established in 1970, AutoElite has been at the forefront of luxury automotive retail for over 50 years.</p>
          </div>
          <div className="card p-8 text-left">
            <Users className="w-12 h-12 text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-slate-400">Our expert staff brings decades of combined experience in automotive sales and service.</p>
          </div>
          <div className="card p-8 text-left">
            <Award className="w-12 h-12 text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-4">Recognition</h2>
            <p className="text-slate-400">Multiple award-winning dealership recognized for outstanding customer service.</p>
          </div>
          <div className="card p-8 text-left">
            <Clock className="w-12 h-12 text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-4">Experience</h2>
            <p className="text-slate-400">Dedicated to providing a premium car buying experience for over half a century.</p>
          </div>
        </div>
      </div>
    </div>
  );
}