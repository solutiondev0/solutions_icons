// ExternalLinkIcon.tsx
import React from 'react';
import { IconProps } from '..';

export const ExternalLinkIcon: React.FC<IconProps> = ({
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
      className={`ds-icon ds-icon-external-link ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {filled ? (
        // Filled version
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4h-2v4H6V8h4V6zm4 0h6v6h-2V8h-4V6zm2 4V8h2v2h-2z"
        />
      ) : (
        // Outline version
        <>
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 3h6v6M10 14L21 3" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        </>
      )}
    </svg>
  );
};
