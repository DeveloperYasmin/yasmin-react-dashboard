import React from 'react';
import PieChart from './PieChart'; // Reusing the PieChart


const ServiceProviders = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mt-8">
      <h3 className="text-lg font-semibold mb-4">Service Provider Segmentation & Demographics</h3>
      <div className="bg-gray-100 flex justify-center items-center">
          <img src="https://w7.pngwing.com/pngs/179/937/png-transparent-india-globe-map-india-leaf-orange-world-thumbnail.png" alt="India Map" className="h-40 w-40" />
        </div>
      <div className="grid grid-cols-2 gap-4">
        <PieChart />
        
      </div>
    </div>
  );
};

export default ServiceProviders;
