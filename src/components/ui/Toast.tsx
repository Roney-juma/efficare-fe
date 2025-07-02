// ===== Toast Notification Component =====
'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

interface ToastProps extends Toast {
  onClose: (id: string) => void;
}

const toastIcons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
};

const toastStyles = {
  success: 'bg-green-50 border-green-200 text-green-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
};

const iconStyles = {
  success: 'text-green-400',
  error: 'text-red-400',
  info: 'text-blue-400',
  warning: 'text-yellow-400',
};

export const ToastItem: React.FC<ToastProps> = ({ 
  id, 
  type, 
  message, 
  duration = 5000, 
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const Icon = toastIcons[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(id), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <div
      className={cn(
        'flex items-center p-4 mb-4 border rounded-lg shadow-sm transition-all duration-300 transform',
        toastStyles[type],
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      )}
    >
      <Icon className={cn('h-5 w-5 mr-3 flex-shrink-0', iconStyles[type])} />
      <p className="text-sm font-medium flex-1">{message}</p>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(() => onClose(id), 300);
        }}
        className="ml-3 inline-flex text-gray-400 hover:text-gray-600"
      >
        <span className="sr-only">Close</span>
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export const ToastContainer: React.FC<{ toasts: Toast[]; onClose: (id: string) => void }> = ({
  toasts,
  onClose,
}) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 w-full max-w-sm space-y-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  );
};

// Toast context and hook for global toast management
let toastId = 0;
const createToast = (type: ToastType, message: string, duration?: number): Toast => ({
  id: `toast-${++toastId}`,
  type,
  message,
  duration,
});

// Simple toast manager (you can enhance this with React Context if needed)
export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (type: ToastType, message: string, duration?: number) => {
    const toast = createToast(type, message, duration);
    setToasts((prev) => [...prev, toast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return {
    toasts,
    addToast,
    removeToast,
    success: (message: string, duration?: number) => addToast('success', message, duration),
    error: (message: string, duration?: number) => addToast('error', message, duration),
    info: (message: string, duration?: number) => addToast('info', message, duration),
    warning: (message: string, duration?: number) => addToast('warning', message, duration),
  };
};
