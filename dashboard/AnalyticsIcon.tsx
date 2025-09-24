// AnalyticsIcon.tsx
import React from 'react';
import { IconProps } from '..';



export const AnalyticsIcon: React.FC<IconProps> = ({
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
            className={`ds-icon ds-icon-analytics ${className}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            {filled ? (
                // Filled version
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 3a1 1 0 000 2h18a1 1 0 100-2H3zm2 4a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H5zm7 3a1 1 0 00-1 1v9a1 1 0 001 1h4a1 1 0 001-1v-9a1 1 0 00-1-1h-4zm7 5a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4z"
                />
            ) : (
                // Outline version
                <>
                    <path d="M3 3v18h18" stroke={color} strokeWidth="2" strokeLinecap="round" />
                    <path d="M7 7v10M11 10v7M15 13v4M19 16v1" stroke={color} strokeWidth="2" strokeLinecap="round" />
                </>
            )}
        </svg>
    );
};
