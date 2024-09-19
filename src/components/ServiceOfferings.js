import React from 'react';
import BarChart from './BarChart'; // Reusing the BarChart

const ServiceOfferings = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mt-8">
      <h3 className="text-lg font-semibold mb-4">Service Offerings</h3>
      <BarChart />
    </div>
  );
};

export default ServiceOfferings;
