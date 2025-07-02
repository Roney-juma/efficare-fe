// ===== 9. src/app/page.tsx (Landing Page) =====
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Heart, Shield, Clock, Users, Star, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Navigation */}
            <nav className="flex items-center justify-between mb-16">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">EfficCare</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Sign In
                </Link>
                <Link href="/auth/signup">
                  <Button size="sm">Get Started</Button>
                </Link>
              </div>
            </nav>

            {/* Hero Content */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">Trusted by 10,000+ users</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Mental Health Care
                <br />
                <span className="text-blue-600">Made Simple</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Connect with certified mental health professionals in a secure, HIPAA-compliant platform. 
                Start your journey to better mental wellness today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/signup?role=client">
                  <Button size="lg" className="w-full sm:w-auto">
                    Find a Counselor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/auth/signup?role=counselor">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Join as Professional
                  </Button>
                </Link>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
                <p className="text-sm text-gray-600">Your privacy and security are our top priority</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Licensed Professionals</h3>
                <p className="text-sm text-gray-600">Connect with certified mental health experts</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-gray-600">Book sessions that fit your schedule</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Compassionate Care</h3>
                <p className="text-sm text-gray-600">Personalized support for your mental health journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card 
                title="For Individuals"
                description="Find the right mental health professional for your needs"
                className="text-center p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <ul className="text-left space-y-2 mb-6 text-gray-600">
                    <li>• Browse licensed therapists and counselors</li>
                    <li>• Secure video sessions from anywhere</li>
                    <li>• Flexible scheduling and messaging</li>
                    <li>• Insurance and sliding scale options</li>
                  </ul>
                  <Link href="/auth/signup?role=client">
                    <Button size="lg" className="w-full">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card 
                title="For Mental Health Professionals"
                description="Join our platform and expand your practice"
                className="text-center p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <ul className="text-left space-y-2 mb-6 text-gray-600">
                    <li>• Comprehensive practice management tools</li>
                    <li>• Secure client communication platform</li>
                    <li>• Flexible scheduling and billing</li>
                    <li>• Growing network of clients</li>
                  </ul>
                  <Link href="/auth/signup?role=counselor">
                    <Button size="lg" variant="secondary" className="w-full">
                      Join Our Network
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Already have an account?</p>
              <Link href="/auth/login">
                <Button variant="outline" size="lg" className="w-full max-w-md">
                  Sign In to Your Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
