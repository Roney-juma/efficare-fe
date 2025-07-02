// ===== 23. src/app/dashboard/page.tsx =====
import React, { Suspense } from 'react';
import { DashboardContent } from '@/components/dashboard/DashboardContent';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

function DashboardFallback() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-8 bg-gray-200 rounded w-64 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 animate-pulse"></div>
          </div>
          <div className="hidden md:block">
            <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="h-4 bg-gray-200 rounded w-24 mb-2 animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded w-16 mb-2 animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-32 animate-pulse"></div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardFallback />}>
      <DashboardContent />
    </Suspense>
  );
}
