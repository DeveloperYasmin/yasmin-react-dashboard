import React from 'react';
import Icon from './Icon'; // Reusable Icon component for the icons

const Sidebar = () => {
  return (
    <div className="w-20 h-screen bg-gray-50 shadow-lg flex flex-col items-center justify-between p-4">
      {/* Menu Items */}
      <div className="flex flex-col space-y-6">
        <Icon name="home" size="24" />
        <Icon name="chart" size="24" />
        <Icon name="support" size="24" />
        <Icon name="settings" size="24" />
      </div>
      
      {/* Raise a Ticket Button */}
      <button className="bg-blue-500 text-white p-2 rounded-lg w-full">
        Raise a Ticket
      </button>
    </div>
  );
};

export default Sidebar;
