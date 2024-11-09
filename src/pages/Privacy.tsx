import React from 'react';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="w-8 h-8 text-yellow-600" />
        <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
      </div>

      <div className="prose max-w-none">
        <p className="text-gray-700 mb-6">
          Last updated: March 14, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information you provide directly to us when using our XAUUSD Profit Calculator, 
            including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Contact information (name, email address)</li>
            <li>Trading preferences and calculator inputs</li>
            <li>Communication history</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Provide and improve our services</li>
            <li>Send you updates and marketing communications</li>
            <li>Respond to your comments and questions</li>
            <li>Protect against fraudulent or illegal activity</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <a
            href="https://freegoldsignal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 hover:text-yellow-700"
          >
            freegoldsignal.com
          </a>
        </section>
      </div>
    </div>
  );
}