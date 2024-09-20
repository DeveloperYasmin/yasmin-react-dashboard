import React from 'react';
import LineChart from './LineChart';
import PieChart from './PieChart';
import Card from "./Card";

const PerformanceMetrics = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Total Service Provider" value="Rs. xxx.xx" percentage="+5% more" info="from last week" />
        <Card title="New Service Provider" value="xxxx" percentage="+10% more" info="from last week" />
        <Card title="Active Service Provider" value="xxxx" percentage="+10% more" info="from last week" />
        <Card title="Average Rating" value="4.0" percentage="+5 stars" info="From Abhinav" />
        <Card title="Service Completion Rate" value="85%" percentage="85% completed" info="from last week" />
        <Card title="Service Provider Retention Rate" value="100%" percentage="100% more" info="from last week" />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
        <h3 className="text-lg font-semibold mb-4">Performance Metrics & Feedback</h3>
        <LineChart />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
        <h3 className="text-lg font-semibold mb-4">Service Providers Report</h3>
        <PieChart className="w-full"/>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
