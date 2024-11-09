import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

export default function ProfitCalculator() {
  const [lotSize, setLotSize] = useState<number>(0.01);
  const [marketPrice, setMarketPrice] = useState<number>(2000);
  const [exitPrice, setExitPrice] = useState<number>(2010);
  const [leverage, setLeverage] = useState<number>(100);
  const [position, setPosition] = useState<'buy' | 'sell'>('buy');
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  // Simulate live market price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketPrice(prev => prev + (Math.random() - 0.5) * 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const calculateProfit = () => {
    const pointValue = 0.01;
    const pips = Math.abs(exitPrice - marketPrice) / pointValue;
    const profitPerLot = pips * 0.1;
    const multiplier = position === 'buy' ? 
      (exitPrice > marketPrice ? 1 : -1) : 
      (exitPrice < marketPrice ? 1 : -1);
    const totalProfit = (profitPerLot * lotSize * 100) * multiplier;
    return totalProfit.toFixed(2);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center gap-2 mb-8">
        <Calculator className="w-8 h-8 text-yellow-600" />
        <h2 className="text-2xl font-bold text-gray-800">XAUUSD Profit Calculator</h2>
      </div>

      {/* Position Type Selector */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => setPosition('buy')}
          className={`p-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
            position === 'buy'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <TrendingUp className="w-5 h-5" />
          <span className="font-semibold">Buy</span>
        </button>
        <button
          onClick={() => setPosition('sell')}
          className={`p-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
            position === 'sell'
              ? 'bg-red-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <TrendingDown className="w-5 h-5" />
          <span className="font-semibold">Sell</span>
        </button>
      </div>

      <div className="grid gap-6">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Lot Size
          </label>
          <div className="flex gap-2">
            {[0.01, 0.1, 0.5, 1].map((size) => (
              <button
                key={size}
                onClick={() => setLotSize(size)}
                className={`flex-1 py-2 px-3 rounded ${
                  lotSize === size
                    ? 'bg-yellow-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Market Price
          </label>
          <div className="relative">
            <input
              type="number"
              value={marketPrice.toFixed(2)}
              readOnly
              className="w-full p-3 bg-gray-50 border rounded-lg text-lg font-semibold"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-600">
              <DollarSign className="w-5 h-5" />
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Exit Price
          </label>
          <input
            type="number"
            value={exitPrice}
            onChange={(e) => setExitPrice(Number(e.target.value))}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Leverage
          </label>
          <select
            value={leverage}
            onChange={(e) => setLeverage(Number(e.target.value))}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          >
            <option value="50">1:50</option>
            <option value="100">1:100</option>
            <option value="200">1:200</option>
            <option value="500">1:500</option>
          </select>
        </div>

        <div className="mt-6 p-6 bg-gray-50 rounded-xl">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-gray-700">
              Estimated Profit/Loss:
            </span>
            <div className="flex items-center gap-2">
              <DollarSign className="w-6 h-6" />
              <span className={`text-2xl font-bold ${
                Number(calculateProfit()) >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {calculateProfit()}
              </span>
            </div>
          </div>
        </div>

        <a
          href="https://freegoldsignal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-yellow-600 text-white py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors mt-4"
        >
          Get Professional Trading Signals
        </a>
      </div>
    </div>
  );
}