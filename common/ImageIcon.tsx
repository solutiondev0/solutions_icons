// ImageIcon.tsx
import React from 'react';
import { IconProps } from '..';

export const ImageIcon: React.FC<IconProps> = ({
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
            className={`ds-icon ds-icon-image ${className}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            {filled ? (
                // Filled version
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2H4zm14 9a3 3 0 11-6 0 3 3 0 016 0zm-12-3a1 1 0 000 2h6a1 1 0 100-2H6z"
                />
            ) : (
                // Outline version
                <>
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" stroke={color} strokeWidth="2" />
                    <path d="M21 15l-5-5L5 21" stroke={color} strokeWidth="2" strokeLinecap="round" />
                </>
            )}
        </svg>
    );
};
