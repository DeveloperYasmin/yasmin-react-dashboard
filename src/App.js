import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Card from "./components/Card";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import ServiceProviders from "./components/ServiceProviders";
import SupportTickets from "./components/SupportTickets";
import TopServiceProviders from "./components/TopServiceProviders";
import ServiceOfferings from "./components/ServiceOfferings";
import { FaUsers, FaChartLine, FaCheckCircle } from "react-icons/fa";

const App = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-20 mr-2 h-full bg-white shadow-lg p-6">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col bg-gray-100 p-6">
        {/* Header */}
        <Header />

        {/* Performance Metrics Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-8 mt-5">Performance Metrics</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card title="Total Service Providers" value="Rs. xxx.xx" icon={<FaUsers />} />
            <Card title="New Service Providers" value="xxxx" icon={<FaChartLine />} />
            <Card title="Active Service Providers" value="xxxx" icon={<FaCheckCircle />} />
            <Card title="Service Completion Rate" value="85%" icon={<FaCheckCircle />} />
          </div>
        </div>

        {/* Charts and Other Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-8">
          {/* Line Chart for Performance */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <LineChart />
          </div>
          {/* Pie Chart for Demographics */}
          <div className="bg-white w-42 h-full rounded-lg shadow-lg">
            <PieChart />
          </div>
        </div>

        {/* Bar Chart and Service Offerings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Bar Chart for Service Offerings */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <BarChart />
          </div>
          {/* Service Offerings */}
          <ServiceOfferings />
        </div>

        {/* Service Providers and Support Tickets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Service Providers Demographics */}
          <ServiceProviders />
          {/* Support Tickets */}
          <SupportTickets />
        </div>

        {/* Top Service Providers */}
        <div className="mb-8">
          <TopServiceProviders />
        </div>
      </div>
    </div>
  );
};

export default App;
