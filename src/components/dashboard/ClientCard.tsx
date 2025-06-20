// ===== 20. src/components/dashboard/ClientCard.tsx =====
import React from 'react';
import { Client } from '@/types';
import { Button } from '@/components/ui/Button';
import { MoreVertical } from 'lucide-react';

interface ClientCardProps {
  client: Client;
}

export const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">
              {client.name.charAt(0)}
            </span>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{client.name}</h4>
            <p className="text-sm text-gray-500">{client.email}</p>
          </div>
        </div>
        <button className="p-1 text-gray-400 hover:text-gray-600">
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
          {client.status}
        </span>
        {client.upcomingSessions > 0 && (
          <span className="text-xs text-gray-500">
            {client.upcomingSessions} upcoming
          </span>
        )}
      </div>
    </div>
  );
};
