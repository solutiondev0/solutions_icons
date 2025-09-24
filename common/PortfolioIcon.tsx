// PortfolioIcon.tsx
import React from 'react';
import { IconProps } from '..';

export const PortfolioIcon: React.FC<IconProps> = ({
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
            className={`ds-icon ds-icon-portfolio ${className}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            {filled ? (
                // Filled version
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9 10a3 3 0 100-6 3 3 0 000 6zm-5-8a1 1 0 000 2h10a1 1 0 100-2H7z"
                />
            ) : (
                // Outline version
                <>
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="2" />
                    <path d="M2 8h20M8 4V2a2 2 0 012-2h4a2 2 0 012 2v2" stroke={color} strokeWidth="2" />
                    <circle cx="12" cy="13" r="3" stroke={color} strokeWidth="2" />
                </>
            )}
        </svg>
    );
};
