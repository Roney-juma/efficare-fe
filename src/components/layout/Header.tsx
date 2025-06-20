// ===== 18. src/components/layout/Header.tsx =====
'use client';

import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

interface HeaderProps {
  title?: string;
  userName?: string;
  userAvatar?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  title = 'Dashboard',
  userName = 'Hello Miriam',
  userAvatar 
}) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Bell className="h-5 w-5" />
          </button>
          
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-orange-800">M</span>
            </div>
            <span className="text-sm font-medium text-gray-700">{userName}</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};