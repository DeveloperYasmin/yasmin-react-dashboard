// src/components/TopServiceProviders.js
import React from 'react';

const TopServiceProviders = ({ providers }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h3 className="text-lg font-bold mb-4">Top Service Providers</h3>
      <ul>
        {providers?.map((provider, index) => (
          <li key={index} className="flex justify-between mb-2">
            <span>{index + 1}. {provider.name}</span>
            <span>{provider.reviews} Reviews</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopServiceProviders;
