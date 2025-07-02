import Link from 'next/link';
import { Suspense } from 'react';
import { Card } from '@/components/ui/Card';
import { LoginContent } from '@/components/auth/LoginContent';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

function LoginFallback() {
  return (
    <div className="space-y-4">
      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
      <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
      <div className="flex items-center justify-center py-4">
        <LoadingSpinner />
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Sign In to EfficCare
            </h1>
            <p className="text-gray-600 mb-6">
              Access your professional dashboard
            </p>
          </div>

          <Suspense fallback={<LoginFallback />}>
            <LoginContent />
          </Suspense>
        </Card>
      </div>
    </div>
  );
}
