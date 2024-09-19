// src/data/mockData.js

export const serviceProviders = [
    { id: 1, name: 'Provider A', services: 5, region: 'North America' },
    { id: 2, name: 'Provider B', services: 3, region: 'Europe' },
    { id: 3, name: 'Provider C', services: 7, region: 'Asia' },
    // Add more providers as needed
  ];
  
  export const serviceOfferings = [
    { id: 1, name: 'Cloud Services', sector: 'IT', percentage: 35 },
    { id: 2, name: 'Consulting', sector: 'Finance', percentage: 25 },
    { id: 3, name: 'Support', sector: 'Healthcare', percentage: 15 },
    // Add more offerings as needed
  ];
  
  export const tickets = [
    { id: 1, status: 'Open', priority: 'High', assignedTo: 'John Doe' },
    { id: 2, status: 'Closed', priority: 'Low', assignedTo: 'Jane Smith' },
    { id: 3, status: 'Pending', priority: 'Medium', assignedTo: 'Mike Johnson' },
    // Add more tickets as needed
  ];
  
  export const metrics = [
    { title: 'Response Time', value: '4h', chartData: [10, 20, 30, 40] },
    { title: 'Resolution Time', value: '8h', chartData: [15, 25, 35, 45] },
    { title: 'Customer Satisfaction', value: '95%', chartData: [50, 60, 70, 80] },
    // Add more metrics as needed
  ];
  