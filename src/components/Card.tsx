import React from 'react';

export interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  elevation?: 'low' | 'medium' | 'high';
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  className = '',
  elevation = 'medium',
}) => {
  const elevationClasses = {
    low: 'shadow-sm',
    medium: 'shadow-md',
    high: 'shadow-lg',
  };

  return (
    <div className={`bg-white rounded-lg p-6 ${elevationClasses[elevation]} ${className}`}>
      <h2 className="text-xl font-bold mb-2 text-gray-900">{title}</h2>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};
