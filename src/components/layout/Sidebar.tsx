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
  Settings 
} from 'lucide-react';

const navigation = [
  { name: 'Account', href: '/dashboard', icon: User },
  { name: 'Upcoming Sessions', href: '/dashboard/sessions', icon: Calendar },
  { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
  { name: 'Payment History', href: '/dashboard/payments', icon: CreditCard },
  { name: 'Session History', href: '/dashboard/history', icon: Clock },
  { name: 'Resources', href: '/dashboard/resources', icon: BookOpen },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>
      </div>
      
      <nav className="px-4 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              )}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
