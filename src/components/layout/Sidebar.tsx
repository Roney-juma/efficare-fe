// ===== 17. src/components/layout/Sidebar.tsx =====
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  User, 
  Calendar, 
  MessageSquare, 
  CreditCard, 
  Clock, 
  BookOpen, 
  Settings,
  BarChart3,
  Heart
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'My Profile', href: '/dashboard/profile', icon: User },
  { name: 'Sessions', href: '/dashboard/sessions', icon: Calendar },
  { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
  { name: 'Clients', href: '/dashboard/clients', icon: Heart },
  { name: 'Session History', href: '/dashboard/history', icon: Clock },
  { name: 'Resources', href: '/dashboard/resources', icon: BookOpen },
  { name: 'Payment History', href: '/dashboard/payments', icon: CreditCard },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">EfficCare</h2>
            <p className="text-xs text-gray-500">Mental Health Platform</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200',
                isActive
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              )}
            >
              <Icon className={cn(
                "mr-3 h-5 w-5",
                isActive ? "text-blue-600" : "text-gray-400"
              )} />
              {item.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            Need Help?
          </h4>
          <p className="text-xs text-gray-600 mb-3">
            Access our support resources and documentation
          </p>
          <button className="w-full bg-blue-600 text-white text-xs py-2 px-3 rounded-md hover:bg-blue-700 transition-colors">
            Get Support
          </button>
        </div>
      </div>
    </div>
  );
};
