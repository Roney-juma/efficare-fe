// ===== 23. src/app/dashboard/page.tsx =====
import React from 'react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { ClientCard } from '@/components/dashboard/ClientCard';
import { Button } from '@/components/ui/Button';
import { Search, Filter } from 'lucide-react';
import { Client, DashboardStats } from '@/types';

// Mock data
const stats: DashboardStats = {
  todaysSessions: 5,
  thisWeekSessions: 18,
  pendingActions: 2,
  totalClients: 45
};

const upcomingClients: Client[] = [
  {
    id: '1',
    name: 'Dennis Maupassa',
    email: 'dennis@example.com',
    status: 'New',
    upcomingSessions: 1
  },
  {
    id: '2',
    name: 'Dennis Kusigola',
    email: 'kusigola@example.com',
    status: 'Active',
    upcomingSessions: 2
  }
];

const availableClients: Client[] = [
  {
    id: '3',
    name: 'Nicole Malagna',
    email: 'nicole@example.com',
    status: 'Active',
    upcomingSessions: 0
  },
  {
    id: '4',
    name: 'Ian Mukil',
    email: 'ian@example.com',
    status: 'Inactive',
    upcomingSessions: 0
  },
  {
    id: '5',
    name: 'Louise Merchang',
    email: 'louise@example.com',
    status: 'Active',
    upcomingSessions: 1
  },
  {
    id: '6',
    name: 'Joshua Munye',
    email: 'joshua@example.com',
    status: 'New',
    upcomingSessions: 0
  }
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Profile Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-orange-800">M</span>
          </div>
          
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">My profile</h2>
            <p className="text-gray-600 mb-1">Natasha James</p>
            <p className="text-sm text-gray-500">Dr. Miriam Barkan</p>
            <p className="text-sm text-gray-500">miriambarkan@gmail.com</p>
            
            <div className="flex items-center space-x-2 mt-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Notification alerts</span>
            </div>
            
            <Button className="mt-4" size="sm">Save</Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Today"
          value={`${stats.todaysSessions} Sessions`}
          subtitle="2 in the morning, 3 in the afternoon"
          color="blue"
        />
        <StatsCard
          title="This Week"
          value={`${stats.thisWeekSessions} Sessions`}
          subtitle="5 Sessions per day on average"
          color="green"
        />
        <StatsCard
          title="Alerts"
          value={`${stats.pendingActions} Pending Actions`}
          subtitle="Session notes and rescheduling requests"
          color="orange"
        />
      </div>

      {/* Clients Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Upcoming Sessions */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">My upcoming sessions</h3>
            <Button variant="outline" size="sm">Edit</Button>
          </div>
          
          <div className="space-y-3">
            {upcomingClients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        </div>

        {/* Available Clients */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Available clients</h3>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          
          <div className="space-y-3">
            {availableClients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
