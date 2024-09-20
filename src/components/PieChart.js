import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Petcare', 'Entertainment', 'Event', 'Healthcare', 'Construction', 'Home Services'],
    datasets: [
      {
        label: 'Service Providers',
        data: [30, 5, 20, 15, 15, 15],
        backgroundColor: ['#4bc0c0', '#ff6384', '#ff9f40', '#ffcd56', '#36a2eb', '#9966ff'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
  };

  return (
    <div className="w-full h-96 p-4 bg-white shadow-lg rounded-lg flex items-center justify-center">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
