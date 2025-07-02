'use client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/Card';    

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { LoginFormData } from '@/types';
import { validateEmail } from '@/lib/utils';

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSignupSuccess, setShowSignupSuccess] = useState(false);

  useEffect(() => {
    // Check if user came from signup
    const fromSignup = searchParams?.get('from') === 'signup';
    if (fromSignup) {
      setShowSignupSuccess(true);
      // Auto-hide message after 5 seconds
      setTimeout(() => setShowSignupSuccess(false), 5000);
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof LoginFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginFormData> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Work email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login data:', formData);
      
      // Show success message
      setSuccessMessage('Login successful! Redirecting to dashboard...');
      
      // Navigate to dashboard after 1.5 seconds
      setTimeout(() => {
        router.push('/dashboard?from=login');
      }, 1500);
      
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ email: 'Invalid credentials. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {showSignupSuccess && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-blue-800">
                Account created successfully! Please sign in to continue.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {successMessage && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">{successMessage}</p>
            </div>
          </div>
        </div>
      )}
      
      <Input
        name="email"
        type="email"
        placeholder="Work email address"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        disabled={isLoading || !!successMessage}
      />
      
      <Input
        name="password"
        type="password"
        placeholder="Password (We make it easy to remember)"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        disabled={isLoading || !!successMessage}
      />
      
      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            disabled={isLoading || !!successMessage}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
          />
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
        
        <Link 
          href="/auth/forgot-password"
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Forgot Password?
        </Link>
      </div>
      
      <Button 
        type="submit" 
        className="w-full" 
        size="lg"
        disabled={isLoading || !!successMessage}
      >
        {isLoading ? 'Signing In...' : successMessage ? 'Redirecting...' : 'Log In'}
      </Button>
      
      <div className="text-center">
        <p className="text-gray-600">
          Looking for a counselor?{' '}
          <Link href="/auth/signup?role=client" className="text-blue-600 hover:text-blue-700">
            Click here to start
          </Link>
        </p>
      </div>
    </form>
  );
};
