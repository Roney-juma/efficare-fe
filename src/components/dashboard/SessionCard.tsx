// ===== 21. src/components/dashboard/SessionCard.tsx =====
import React from 'react';
import { Session } from '@/types';
import { Button } from '@/components/ui/Button';
import { Video, User, MoreVertical, Edit, Calendar } from 'lucide-react';

interface SessionCardProps {
  session: Session;
}

export const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Online': return 'bg-green-100 text-green-800';
      case 'In Person': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-gray-900">{session.time}</span>
          <span className="text-sm text-gray-500">{session.clientName}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <Calendar className="h-4 w-4" />
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <Edit className="h-4 w-4" />
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-600">{session.type}</span>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(session.status)}`}>
          {session.status}
        </span>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{session.date}</span>
        <div className="flex space-x-2">
          {session.status === 'Online' && (
            <Button size="sm" className="text-xs">
              <Video className="h-3 w-3 mr-1" />
              Join
            </Button>
          )}
          {session.status === 'In Person' && (
            <Button size="sm" variant="outline" className="text-xs">
              <User className="h-3 w-3 mr-1" />
              Details
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
