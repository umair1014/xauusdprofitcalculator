import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000); // Show after 30 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h3 className="text-2xl font-bold text-yellow-600 mb-4">
          Boost Your Trading Success!
        </h3>
        
        <p className="text-gray-600 mb-6">
          Get professional guidance and maximize your XAUUSD trading potential with our expert Account Manager Services.
        </p>
        
        <a
          href="https://freegoldsignal.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-yellow-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
        >
          Book Your Free Consultation Now
        </a>
      </div>
    </div>
  );
}