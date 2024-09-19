

import React from 'react';

const Card = ({ title, value, percentage, info }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4  space-x-4">

      <h4 className="text-lg font-semibold text-gray-700">{title}</h4>
      <h2 className="text-2xl font-bold text-gray-900">{value}</h2>
      <p className="text-2xl font-bold text-gray-900">{percentage}</p>
      <small>{info}</small>
    </div>
  );
};

export default Card;
