import React from 'react';

const SupportTickets = () => {
  const tickets = [
    { id: '019273645', name: 'Abhinav', status: 'Open', category: 'Technical Error', sector: 'Healthcare' },
    { id: '019273646', name: 'Kavita', status: 'In Progress', category: 'Payment', sector: 'Event' },
    { id: '019273647', name: 'Samar', status: 'Solved', category: 'Sign-up Issue', sector: 'Healthcare' },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Support & Compliance</h3>
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-md">
            <div>
              <p className="font-medium">{ticket.name}</p>
              <p className="text-sm text-gray-600">{ticket.category} ({ticket.sector})</p>
            </div>
            <div>
              <span className={`px-2 py-1 text-sm font-semibold rounded-lg ${
                ticket.status === 'Open'
                  ? 'bg-green-100 text-green-500'
                  : ticket.status === 'In Progress'
                  ? 'bg-yellow-100 text-yellow-500'
                  : 'bg-red-100 text-red-500'
              }`}>
                {ticket.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportTickets;
