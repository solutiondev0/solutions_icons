// DesignIcon.tsx
import React from 'react';
import { IconProps } from '..';

export const DesignIcon: React.FC<IconProps> = ({
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
            className={`ds-icon ds-icon-design ${className}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            {filled ? (
                // Filled version
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 15a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1zm4 0a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1zm-2-5a3 3 0 100-6 3 3 0 000 6z"
                />
            ) : (
                // Outline version
                <>
                    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
                    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" />
                    <path d="M7 13v2M17 13v2M12 8v1" stroke={color} strokeWidth="2" strokeLinecap="round" />
                </>
            )}
        </svg>
    );
};
