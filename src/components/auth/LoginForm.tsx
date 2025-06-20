// ===== 12. src/components/auth/LoginForm.tsx =====
'use client';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { LoginFormData } from '@/types';
import { validateEmail } from '@/lib/utils';

export const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [isLoading, setIsLoading] = useState(false);

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
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login data:', formData);
      // Handle successful login
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="email"
        type="email"
        placeholder="Work email address"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      
      <Input
        name="password"
        type="password"
        placeholder="Password (We make it easy to remember)"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      
      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
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
        disabled={isLoading}
      >
        {isLoading ? 'Signing In...' : 'Log In'}
      </Button>
      
      <div className="text-center">
        <p className="text-gray-600">
          Looking for a counselor?{' '}
          <span className="text-blue-600 cursor-pointer hover:text-blue-700">
            Click here to start
          </span>
        </p>
      </div>
    </form>
  );
};
