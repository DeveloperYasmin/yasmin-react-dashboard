import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Active Service Provider',
        data: [3000, 3500, 4000, 4200, 5000, 4700, 4500],
        borderColor: '#ff6384',
        fill: false,
        tension: 0.3,
      },
      {
        label: 'Service Completion Rate',
        data: [2000, 2400, 2800, 3000, 3600, 3800, 4000],
        borderColor: '#36a2eb',
        fill: false,
        tension: 0.3,
      },
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
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
