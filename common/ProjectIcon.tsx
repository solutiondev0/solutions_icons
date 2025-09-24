// ProjectIcon.tsx
import React from 'react';
import { IconProps } from '..';

export const ProjectIcon: React.FC<IconProps> = ({
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
            className={`ds-icon ds-icon-project ${className}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            {filled ? (
                // Filled version
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4 2a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 000 2h10a1 1 0 100-2H7zm0 4a1 1 0 000 2h4a1 1 0 100-2H7z"
                />
            ) : (
                // Outline version
                <>
                    <path d="M3 9h18M9 21V9M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                        stroke={color}
                        strokeWidth="2"
                    />
                    <path d="M7 13h10M7 17h6" stroke={color} strokeWidth="2" />
                </>
            )}
        </svg>
    );
};
