'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { ClientCard } from '@/components/dashboard/ClientCard';
import { Button } from '@/components/ui/Button';
import { Edit, Eye, Calendar as CalendarIcon, TrendingUp, X } from 'lucide-react';
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
  const searchParams = useSearchParams();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if user just logged in
    const fromLogin = searchParams?.get('from') === 'login';
    if (fromLogin) {
      setShowWelcome(true);
      // Auto-hide welcome message after 5 seconds
      setTimeout(() => setShowWelcome(false), 5000);
    }
  }, [searchParams]);

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      {showWelcome && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-900">Welcome to EfficCare! 🎉</h3>
                <p className="text-green-700">You've successfully logged in to your professional dashboard.</p>
              </div>
            </div>
            <button 
              onClick={() => setShowWelcome(false)}
              className="text-green-600 hover:text-green-800 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome back, Dr. Miriam! 👋
            </h2>
            <p className="text-gray-600">
              You have {stats.todaysSessions} sessions today and {stats.pendingActions} pending actions.
            </p>
          </div>
          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <CalendarIcon className="h-4 w-4 mr-2" />
              Schedule Session
            </Button>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Professional Profile</h3>
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl font-bold text-white">MB</span>
          </div>
          
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-gray-900 mb-1">Dr. Miriam Barkan</h4>
            <p className="text-gray-600 mb-1">Licensed Clinical Psychologist</p>
            <p className="text-sm text-gray-500 mb-3">miriambarkan@gmail.com</p>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Available Today</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-gray-600">{stats.totalClients} Total Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Today's Sessions"
          value={`${stats.todaysSessions}`}
          subtitle="2 morning • 3 afternoon"
          color="blue"
        />
        <StatsCard
          title="This Week"
          value={`${stats.thisWeekSessions} Sessions`}
          subtitle="5 sessions per day average"
          color="green"
        />
        <StatsCard
          title="Pending Actions"
          value={`${stats.pendingActions}`}
          subtitle="Notes & rescheduling requests"
          color="orange"
        />
      </div>

      {/* Clients Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Upcoming Sessions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Upcoming Sessions</h3>
              <p className="text-sm text-gray-500">Next sessions scheduled for today</p>
            </div>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>
          
          <div className="space-y-3">
            {upcomingClients.length > 0 ? (
              upcomingClients.map((client) => (
                <ClientCard key={client.id} client={client} />
              ))
            ) : (
              <div className="text-center py-6 text-gray-500">
                <CalendarIcon className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                <p>No upcoming sessions today</p>
              </div>
            )}
          </div>
        </div>

        {/* Available Clients */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Client Directory</h3>
              <p className="text-sm text-gray-500">Manage your client relationships</p>
            </div>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>
          
          <div className="space-y-3">
            {availableClients.slice(0, 4).map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
