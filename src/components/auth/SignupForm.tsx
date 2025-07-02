// ===== 10. src/components/auth/SignupForm.tsx =====
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { SignupFormData } from '@/types';
import { validateEmail, validatePassword } from '@/lib/utils';

interface SignupFormProps {
  role: 'client' | 'counselor';
}

export const SignupForm: React.FC<SignupFormProps> = ({ role }) => {
  const router = useRouter();
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    role: role
  });
  
  const [errors, setErrors] = useState<Partial<SignupFormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof SignupFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<SignupFormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required';

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
      console.log('Signup data:', formData);
      
      // Show success message
      setSuccessMessage('Account created successfully! Redirecting to login...');
      
      // Navigate to login page after 2 seconds
      setTimeout(() => {
        router.push('/auth/login?from=signup');
      }, 2000);
      
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ email: 'Failed to create account. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      
      <div className="grid grid-cols-2 gap-4">
        <Input
          name="firstName"
          type="text"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
          disabled={isLoading || !!successMessage}
        />
        <Input
          name="lastName"
          type="text"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
          disabled={isLoading || !!successMessage}
        />
      </div>
      
      <Input
        name="email"
        type="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        disabled={isLoading || !!successMessage}
      />
      
      <Input
        name="password"
        type="password"
        placeholder="Password (at least 8 characters)"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        disabled={isLoading || !!successMessage}
      />
      
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        disabled={isLoading || !!successMessage}
      />
      
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        disabled={isLoading || !!successMessage}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
      >
        <option value="">Select Country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="UK">United Kingdom</option>
        <option value="AU">Australia</option>
        <option value="KE">Kenya</option>
        <option value="ZA">South Africa</option>
      </select>
      {errors.country && <p className="text-sm text-red-600">{errors.country}</p>}
      
      <Button 
        type="submit" 
        className="w-full" 
        size="lg"
        disabled={isLoading || !!successMessage}
      >
        {isLoading ? 'Creating Account...' : successMessage ? 'Redirecting...' : 'Create Account'}
      </Button>
    </form>
  );
};