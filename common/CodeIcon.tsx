// CodeIcon.tsx
import React from 'react';
import { IconProps } from '..';

export const CodeIcon: React.FC<IconProps> = ({
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
            className={`ds-icon ds-icon-code ${className}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            {filled ? (
                // Filled version
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2a10 10 0 100 20 10 10 0 000-20zM8.7 8.7a1 1 0 011.4 0l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4-1.4L12 12 8.7 8.7a1 1 0 010-1.4z"
                />
            ) : (
                // Outline version
                <>
                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 18l6-6-6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </>
            )}
        </svg>
    );
};
