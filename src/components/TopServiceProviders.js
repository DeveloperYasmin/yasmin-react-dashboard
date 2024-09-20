import React from 'react';
import { FaMedal } from 'react-icons/fa';

const TopServiceProviders = () => {
  // Example data for top service providers
  const topProviders = [
    { name: 'Provider A', rating: 4.9 },
    { name: 'Provider B', rating: 4.7 },
    { name: 'Provider C', rating: 4.5 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Top Service Providers</h2>
      <div className="bg-white shadow-lg p-4 rounded-md">
        <ul className="space-y-4">
          {topProviders.map((provider, index) => (
            <li key={index} className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <FaMedal className="text-yellow-500" />
                <span className="text-lg font-semibold">{provider.name}</span>
              </div>
              <span className="text-xl font-bold">{provider.rating} ★</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopServiceProviders;
