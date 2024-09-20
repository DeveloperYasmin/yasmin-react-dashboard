import React from 'react';
import { FaHome, FaChartPie, FaUserFriends, FaTicketAlt, FaCogs } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-20  h-full fixed top-0 left-0 bg-white  p-6">
      <ul className="space-y-6">
        <li className="flex items-center space-x-4 text-blue-600 hover:bg-blue-100 p-2 rounded-md">
          <FaHome className="text-2xl" />
        </li>
        <li className="flex items-center space-x-4 text-blue-600 hover:bg-blue-100 p-2 rounded-md">
          <FaChartPie className="text-2xl" />
        </li>
        <li className="flex items-center space-x-4 text-blue-600 hover:bg-blue-100 p-2 rounded-md">
          <FaUserFriends className="text-2xl" />
        </li>
        <li className="flex items-center space-x-4 text-blue-600 hover:bg-blue-100 p-2 rounded-md">
          <FaTicketAlt className="text-2xl" />
        </li>
        <li className="flex items-center space-x-4 text-blue-600 hover:bg-blue-100 p-2 rounded-md">
          <FaCogs className="text-2xl" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
