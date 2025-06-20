// ===== 9. src/app/page.tsx (Landing Page) =====
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Counseling Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with certified counselors and start your journey to better mental health
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card 
              title="Find a Counselor"
              description="Browse through our network of licensed professionals"
              className="text-center"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <Link href="/auth/signup?role=client">
                  <Button size="lg" className="w-full">
                    Get Started as Client
                  </Button>
                </Link>
              </div>
            </Card>

            <Card 
              title="Are you a Counselor?"
              description="Join our platform and help people on their mental health journey"
              className="text-center"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <Link href="/auth/signup?role=counselor">
                  <Button size="lg" variant="secondary" className="w-full">
                    Join as Counselor
                  </Button>
                </Link>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">Already have an account?</p>
            <Link href="/auth/login">
              <Button variant="outline" size="lg">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
