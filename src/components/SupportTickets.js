import React from 'react';
import { FaCheckCircle, FaHourglassHalf, FaTimesCircle } from 'react-icons/fa';

const SupportTickets = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Support Tickets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Open Tickets</h3>
          <div className="flex items-center space-x-3 text-xl font-bold">
            <FaHourglassHalf className="text-yellow-500" />
            <span>34</span>
          </div>
        </div>

        <div className="bg-white shadow-lg p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Closed Tickets</h3>
          <div className="flex items-center space-x-3 text-xl font-bold">
            <FaCheckCircle className="text-green-500" />
            <span>75</span>
          </div>
        </div>

        <div className="bg-white shadow-lg p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Cancelled Tickets</h3>
          <div className="flex items-center space-x-3 text-xl font-bold">
            <FaTimesCircle className="text-red-500" />
            <span>12</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportTickets;
