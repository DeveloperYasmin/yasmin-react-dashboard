import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Petcare Sector',
        data: [200, 400, 800, 1000, 1200, 1300, 1500],
        backgroundColor: '#ff6384',
      },
      {
        label: 'Healthcare Sector',
        data: [500, 600, 900, 1000, 1100, 1500, 1600],
        backgroundColor: '#36a2eb',
      },
      // Add more datasets for each sector
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="h-64 w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
