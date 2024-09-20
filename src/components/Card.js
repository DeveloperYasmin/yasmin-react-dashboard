import React from "react";

const Card = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
      <div className="text-4xl text-blue-600">
        {icon}
      </div>

    </div>
  );
};

export default Card;
