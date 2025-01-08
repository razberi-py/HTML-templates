import React from 'react';
import { HelpCircle, Package, RefreshCcw, CreditCard } from 'lucide-react';

export default function Support() {
  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy on all items. Products must be in original condition with tags attached.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days. Express shipping (2-day) is available for orders over $100.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries. International shipping times vary by location.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email to monitor your delivery.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Customer Support</h1>
          <p className="mt-4 text-xl text-gray-600">
            How can we help you today?
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Package className="h-8 w-8 text-indigo-600 mx-auto" />
            <h3 className="mt-4 text-lg font-medium">Order Status</h3>
            <p className="mt-2 text-sm text-gray-600">
              Track your package or view order details
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <RefreshCcw className="h-8 w-8 text-indigo-600 mx-auto" />
            <h3 className="mt-4 text-lg font-medium">Returns</h3>
            <p className="mt-2 text-sm text-gray-600">
              Start a return or check return status
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <CreditCard className="h-8 w-8 text-indigo-600 mx-auto" />
            <h3 className="mt-4 text-lg font-medium">Billing</h3>
            <p className="mt-2 text-sm text-gray-600">
              View or update payment information
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <HelpCircle className="h-8 w-8 text-indigo-600 mx-auto" />
            <h3 className="mt-4 text-lg font-medium">General Help</h3>
            <p className="mt-2 text-sm text-gray-600">
              Find answers to common questions
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-indigo-50 rounded-lg p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900">Still need help?</h2>
          <p className="mt-2 text-gray-600">
            Our support team is available 24/7 to assist you.
          </p>
          <button className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}