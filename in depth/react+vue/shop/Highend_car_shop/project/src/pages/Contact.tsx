import React from 'react';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card p-8 text-left">
            <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@autoelite.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>123 Auto Drive, Car City, ST 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Mon-Sat: 9AM-8PM, Sun: Closed</span>
              </div>
            </div>
          </div>
          <div className="card p-8 text-left">
            <h2 className="text-xl font-bold text-white mb-6">Quick Contact Form</h2>
            <p className="text-slate-400 mb-4">Contact form coming soon. For immediate assistance, please call us.</p>
            <div className="space-y-4">
              <button disabled className="w-full bg-blue-600/50 text-white px-4 py-2 rounded-lg cursor-not-allowed">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}