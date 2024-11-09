import React from 'react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-8">
        <User className="w-8 h-8 text-yellow-600" />
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
      </div>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Hi, I'm Yasir Ahmed, a professional forex trader with over a decade of experience 
          in the gold markets. Throughout my trading journey, I've developed deep insights 
          into XAUUSD trading strategies and risk management techniques.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          Our mission is to empower traders with the tools and knowledge they need to 
          succeed in the gold trading market. The XAUUSD Profit Calculator is just one 
          of the many tools we've developed to help traders make informed decisions.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Expert guidance from experienced traders</li>
          <li>Professional account management services</li>
          <li>Accurate and reliable trading tools</li>
          <li>Dedicated customer support</li>
        </ul>

        <div className="bg-yellow-50 p-6 rounded-xl mt-8">
          <h3 className="text-xl font-bold text-yellow-800 mb-3">
            Ready to Start Trading?
          </h3>
          <p className="text-gray-700 mb-4">
            Get professional guidance and maximize your trading potential with our 
            expert services.
          </p>
          <a
            href="https://freegoldsignal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
          >
            Start Trading Now
          </a>
        </div>
      </div>
    </div>
  );
}