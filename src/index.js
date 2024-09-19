import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import App from './App';
import { Chart, LineElement, BarElement, ArcElement, CategoryScale, LinearScale, PointElement, LineController, PieController, BarController, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components globally
Chart.register(
  LineElement,
  BarElement,
  ArcElement,   // For Pie and Doughnut Charts
  CategoryScale, // For X-Axis
  LinearScale,   // For Y-Axis
  PointElement,
  LineController,
  BarController,
  PieController,
  Title,
  Tooltip,
  Legend
);

// Render the App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
