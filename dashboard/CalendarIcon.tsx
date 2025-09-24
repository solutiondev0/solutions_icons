// CalendarIcon.tsx
import React from 'react';

interface IconProps {
    size?: number;
    color?: string;
    className?: string;
    onClick?: () => void;
    filled?: boolean;
}

export const CalendarIcon: React.FC<IconProps> = ({
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
            className={`ds-icon ds-icon-calendar ${className}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            {filled ? (
                // Filled version
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 2a1 1 0 00-1 1v1H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V7a3 3 0 00-3-3h-1V3a1 1 0 10-2 0v1H9V3a1 1 0 00-1-1zm11 7H5v10a1 1 0 001 1h12a1 1 0 001-1V9z"
                />
            ) : (
                // Outline version
                <>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke={color} strokeWidth="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" stroke={color} strokeWidth="2" />
                    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" stroke={color} strokeWidth="2" strokeLinecap="round" />
                </>
            )}
        </svg>
    );
};
