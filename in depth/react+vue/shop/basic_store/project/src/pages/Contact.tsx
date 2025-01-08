import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900">Contact Us</h1>
          <p className="mt-4 text-center text-gray-600">
            Have questions? We're here to help.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <Mail className="h-8 w-8 text-indigo-600 mx-auto" />
              <h3 className="mt-4 text-lg font-medium">Email</h3>
              <p className="mt-2 text-gray-600">support@luxestore.com</p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 text-indigo-600 mx-auto" />
              <h3 className="mt-4 text-lg font-medium">Phone</h3>
              <p className="mt-2 text-gray-600">1-800-LUXE-STORE</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-indigo-600 mx-auto" />
              <h3 className="mt-4 text-lg font-medium">Address</h3>
              <p className="mt-2 text-gray-600">123 Tech Plaza, San Francisco, CA</p>
            </div>
          </div>

          <form className="mt-12 bg-white shadow-md rounded-lg p-8">
            <div className="grid gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}