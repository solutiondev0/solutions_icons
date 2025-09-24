// AwardIcon.tsx
import React from 'react';
import { IconProps } from '..';

export const AwardIcon: React.FC<IconProps> = ({
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
            className={`ds-icon ds-icon-award ${className}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            {filled ? (
                // Filled version
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2a7 7 0 00-7 7c0 2.5 1.5 4.5 3.5 5.5L7 22l5-3 5 3-1.5-7.5c2-1 3.5-3 3.5-5.5a7 7 0 00-7-7zm0 10a3 3 0 100-6 3 3 0 000 6z"
                />
            ) : (
                // Outline version
                <>
                    <circle cx="12" cy="8" r="6" stroke={color} strokeWidth="2" />
                    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" stroke={color} strokeWidth="2" strokeLinecap="round" />
                </>
            )}
        </svg>
    );
};
