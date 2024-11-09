import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import FAQ from './components/FAQ';
import PromoPopup from './components/PromoPopup';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <header className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-8">
                <div className="max-w-4xl mx-auto px-4">
                  <h1 className="text-3xl font-bold mb-4">XAUUSD Profit Calculator</h1>
                  <p className="text-yellow-100 text-lg">
                    Calculate your potential profits and losses for gold trading with precision
                  </p>
                </div>
              </header>

              <main className="max-w-4xl mx-auto px-4 py-8">
                <section className="prose max-w-none mb-8">
                  <p className="text-lg text-gray-700">
                    Hi, I'm Yasir Ahmed, a professional forex trader specializing in XAUUSD trading. 
                    With over a decade of experience in the gold markets, I've developed this powerful 
                    calculator to help traders like you make informed decisions.
                  </p>
                </section>

                <Calculator />
                <FAQ />
              </main>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>

        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="/privacy" className="hover:text-yellow-400">Privacy Policy</a>
              <a href="/about" className="hover:text-yellow-400">About Us</a>
              <a href="/contact" className="hover:text-yellow-400">Contact</a>
            </div>
            <p>© {new Date().getFullYear()} XAUUSD Profit Calculator. Created by Yasir Ahmed</p>
          </div>
        </footer>

        <PromoPopup />
      </div>
    </Router>
  );
}

export default App;