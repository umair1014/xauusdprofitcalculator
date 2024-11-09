import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coins } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Coins className="w-8 h-8 text-yellow-600" />
            <span className="font-bold text-xl">XAUUSD Calculator</span>
          </Link>
          
          <div className="flex gap-6">
            <Link
              to="/"
              className={`${
                location.pathname === '/'
                  ? 'text-yellow-600'
                  : 'text-gray-600 hover:text-yellow-600'
              } transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                location.pathname === '/about'
                  ? 'text-yellow-600'
                  : 'text-gray-600 hover:text-yellow-600'
              } transition-colors`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${
                location.pathname === '/contact'
                  ? 'text-yellow-600'
                  : 'text-gray-600 hover:text-yellow-600'
              } transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}