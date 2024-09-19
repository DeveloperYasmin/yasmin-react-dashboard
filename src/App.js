import React from 'react';
import Sidebar from './components/Sidebar'; // Import the Sidebar component
import Header from './components/Header'; // Import the Header component
import LineChart from './components/LineChart'; // Import LineChart component
import PieChart from './components/PieChart'; // Import PieChart component
import BarChart from './components/BarChart'; // Import BarChart component
import ServiceProviders from './components/ServiceProviders'; // Import ServiceProviders component
import SupportTickets from './components/SupportTickets'; // Import SupportTickets component
import PerformanceMetrics from './components/PerformanceMetrics'; // Import SupportTickets component


function App() {
  return (
    <div className="">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className=" p-6 bg-gray-100">
        {/* Header Section */}
        <Header />

        {/* Performance Metrics Section */}
        <section className="mb-6">
          <h1 className="text-3xl font-bold mb-6">Performance Metrics</h1>
         
         
          <PerformanceMetrics/>
        </section>

        {/* Service Providers Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Service Providers</h2>
          <ServiceProviders />
        </section>

        {/* Service Offerings Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Service Offerings</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LineChart />
            <BarChart />
          </div>
        </section>

        {/* Support Tickets Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Support Tickets</h2>
          <SupportTickets />
        </section>

        {/* Demographics (Pie Chart) Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Demographics</h2>
          <div className="w-full">
            <PieChart />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;