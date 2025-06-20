'use client';

import React, { useState } from 'react';
import { SessionCard } from '@/components/dashboard/SessionCard';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { Button } from '@/components/ui/Button';
import { Search, Filter } from 'lucide-react';
import { Session } from '@/types';

// Mock data
const todaySessions: Session[] = [
  {
    id: '1',
    clientName: 'Johnson Musa',
    time: '8:00 AM - 10:00 AM',
    date: 'Today',
    type: 'Initial Consultation',
    status: 'Online',
    duration: '2h'
  },
  {
    id: '2',
    clientName: 'Abigail Makenda',
    time: '1:30 AM - 12:30 PM',
    date: 'Today',
    type: 'Follow-up',
    status: 'In Person',
    duration: '1h'
  },
  {
    id: '3',
    clientName: 'Joel Salmu',
    time: '2:00 PM - 3:00 PM',
    date: 'Today',
    type: 'Weekly Session',
    status: 'Online',
    duration: '1h'
  },
  {
    id: '4',
    clientName: 'Dennis Maupasa',
    time: '3:30 PM - 4:30 PM',
    date: 'Today',
    type: 'Weekly Session',
    status: 'In Person',
    duration: '1h'
  }
];

export default function SessionsPage() {
  const [activeTab, setActiveTab] = useState<'today' | 'tomorrow' | 'this-week' | 'all-upcoming'>('today');

  const tabs = [
    { id: 'today', label: 'Today', count: 4 },
    { id: 'tomorrow', label: 'Tomorrow', count: 3 },
    { id: 'this-week', label: 'This Week', count: 12 },
    { id: 'all-upcoming', label: 'All Upcoming', count: 25 }
  ] as const;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Upcoming Sessions</h1>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search sessions..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Today"
          value="5 Sessions"
          subtitle="2 in the morning, 3 in the afternoon"
          color="blue"
        />
        <StatsCard
          title="This Week"
          value="18 Sessions"
          subtitle="5 Sessions per day on average"
          color="green"
        />
        <StatsCard
          title="Alerts"
          value="2 Pending Actions"
          subtitle="Session notes and rescheduling requests"
          color="orange"
        />
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Sessions List */}
        <div className="p-6">
          <div className="space-y-4">
            {todaySessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
