import React from 'react';
import { AiOutlineHome, AiOutlineSearch, AiOutlineBell, AiOutlineMessage } from 'react-icons/ai';
import { FiSettings, FiHelpCircle } from 'react-icons/fi';
import { BsBarChart } from 'react-icons/bs';

const Icon = ({ name, size = 24 }) => {
  const icons = {
    home: <AiOutlineHome size={size} />,
    search: <AiOutlineSearch size={size} />,
    notifications: <AiOutlineBell size={size} />,
    messages: <AiOutlineMessage size={size} />,
    chart: <BsBarChart size={size} />,
    support: <FiHelpCircle size={size} />,
    settings: <FiSettings size={size} />
  };

  return icons[name] || <span>No Icon</span>;
};

export default Icon;
