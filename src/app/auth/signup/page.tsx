// ===== 11. src/app/auth/signup/page.tsx =====
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { SignupForm } from '@/components/auth/SignupForm';
import { Button } from '@/components/ui/Button';

function SignupContent() {
  const searchParams = useSearchParams();
  const role = (searchParams.get('role') as 'client' | 'counselor') || 'client';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Sign up as a {role}
            </h1>
            <p className="text-gray-600">
              Create your account to get started
            </p>
          </div>

          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <Link 
              href="/auth/signup?role=client" 
              className={`flex-1 text-center py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                role === 'client' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Continue with Client
            </Link>
            <Link 
              href="/auth/signup?role=counselor"
              className={`flex-1 text-center py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                role === 'counselor' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Continue with Counselor
            </Link>
          </div>

          <SignupForm role={role} />

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Looking for a counselor?{' '}
              <Link 
                href="/auth/login" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Log in to your account
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupContent />
    </Suspense>
  );
}
