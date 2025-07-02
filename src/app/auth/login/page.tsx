import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { LoginForm } from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Login Page for counsellor
            </h1>
            <p className="text-gray-600 mb-6">
              Log in to your account
            </p>
          </div>

          <LoginForm />
        </Card>
      </div>
    </div>
  );
}
