import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "What is the XAUUSD Profit Calculator?",
      answer: "The XAUUSD Profit Calculator is a specialized tool designed to help traders estimate potential profits or losses when trading gold against the US dollar in the forex market."
    },
    {
      question: "How do I use the XAUUSD Profit Calculator?",
      answer: "Simply input your lot size, entry price, exit price, and leverage. The calculator will automatically compute your potential profit or loss based on these parameters."
    },
    {
      question: "What is a lot size in XAUUSD trading?",
      answer: "In XAUUSD trading, 1 standard lot equals 100 ounces of gold. Most traders use mini lots (0.10) or micro lots (0.01) to manage their risk effectively."
    },
    {
      question: "How accurate is this calculator?",
      answer: "The calculator provides accurate estimates based on standard market conditions. However, actual results may vary due to factors like spreads, commissions, and market volatility."
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-12">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-6 h-6 text-yellow-600" />
        <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}