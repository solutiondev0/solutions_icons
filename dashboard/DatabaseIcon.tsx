// DatabaseIcon.tsx
import React from 'react';

interface IconProps {
    size?: number;
    color?: string;
    className?: string;
    onClick?: () => void;
    filled?: boolean;
}

export const DatabaseIcon: React.FC<IconProps> = ({
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
            className={`ds-icon ds-icon-database ${className}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            {filled ? (
                // Filled version
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C7.58 2 4 3.79 4 6v12c0 2.21 3.58 4 8 4s8-1.79 8-4V6c0-2.21-3.58-4-8-4zm0 16c-3.31 0-6-.9-6-2s2.69-2 6-2 6 .9 6 2-2.69 2-6 2zm0-12c-3.31 0-6 .9-6 2s2.69 2 6 2 6-.9 6-2-2.69-2-6-2z"
                />
            ) : (
                // Outline version
                <>
                    <ellipse cx="12" cy="5" rx="9" ry="3" stroke={color} strokeWidth="2" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke={color} strokeWidth="2" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke={color} strokeWidth="2" />
                </>
            )}
        </svg>
    );
};
