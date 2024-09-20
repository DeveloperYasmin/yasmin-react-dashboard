import React from 'react';
import { FaWrench, FaTruck, FaBroadcastTower } from 'react-icons/fa';

const ServiceOfferings = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Service Offerings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Maintenance Services</h3>
          <div className="flex items-center space-x-3 text-xl font-bold">
            <FaWrench className="text-blue-500" />
            <span>520</span>
          </div>
        </div>

        <div className="bg-white shadow-lg p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Logistics Services</h3>
          <div className="flex items-center space-x-3 text-xl font-bold">
            <FaTruck className="text-orange-500" />
            <span>312</span>
          </div>
        </div>

        <div className="bg-white shadow-lg p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Communication Services</h3>
          <div className="flex items-center space-x-3 text-xl font-bold">
            <FaBroadcastTower className="text-purple-500" />
            <span>140</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOfferings;
