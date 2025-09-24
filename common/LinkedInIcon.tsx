// LinkedInIcon.tsx
import React from 'react';
import { IconProps } from '..';


export const LinkedInIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className = '',
  onClick,
  filled = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? color : 'none'}
      xmlns="http://www.w3.org/2000/svg"
      className={`ds-icon ds-icon-linkedin ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <path
        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="4" cy="4" r="2" stroke={color} strokeWidth="2" fill="none"/>
    </svg>
  );
};
