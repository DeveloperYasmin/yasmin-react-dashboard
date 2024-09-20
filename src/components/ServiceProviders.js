import React from 'react';
import map from "../assets/images/map.jpeg"

const ServiceProviders = () => {
  const serviceProviders = [
    { id: 1, state: 'Maharashtra', count: 1500 },
    { id: 2, state: 'Karnataka', count: 1200 },
    { id: 3, state: 'Delhi', count: 900 },
    { id: 4, state: 'Tamil Nadu', count: 750 },
    { id: 5, state: 'Gujarat', count: 600 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Service Providers Demographics</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-md p-6">
          <h3 className="text-xl font-semibold mb-4">Providers by State</h3>
          <ul>
            {serviceProviders.map((provider) => (
              <li key={provider.id} className="flex justify-between py-2 border-b">
                <span>{provider.state}</span>
                <span>{provider.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-md p-6">
          <h3 className="text-xl font-semibold mb-4">India Map</h3>
          <img 
            src={map}
            alt="India Map" 
            className="w-full h-auto rounded-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceProviders;
