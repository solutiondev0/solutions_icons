// SettingsIcon.tsx
import React from 'react';
import { IconProps } from '..';


export const SettingsIcon: React.FC<IconProps> = ({
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
      className={`ds-icon ds-icon-settings ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {filled ? (
        // Filled version
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 5a1 1 0 00-1 1v6a1 1 0 002 0V8a1 1 0 00-1-1zm0 10a1 1 0 100-2 1 1 0 000 2z"
        />
      ) : (
        // Outline version
        <>
          <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2"/>
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" 
            stroke={color} 
            strokeWidth="2"
          />
        </>
      )}
    </svg>
  );
};
