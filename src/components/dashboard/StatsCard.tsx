// ===== 19. src/components/dashboard/StatsCard.tsx =====
import React from 'react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  className?: string;
  color?: 'blue' | 'green' | 'orange';
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  className,
  color = 'blue'
}) => {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
    orange: 'bg-orange-50 border-orange-200'
  };

  return (
    <div className={cn(
      'p-6 rounded-lg border-2',
      colorClasses[color],
      className
    )}>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      {subtitle && (
        <p className="text-sm text-gray-600">{subtitle}</p>
      )}
    </div>
  );
};