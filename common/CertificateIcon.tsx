// CertificateIcon.tsx
import React from 'react';
import { IconProps } from '..';

export const CertificateIcon: React.FC<IconProps> = ({
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
            className={`ds-icon ds-icon-certificate ${className}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            {filled ? (
                // Filled version
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm8 12a4 4 0 100-8 4 4 0 000 8zm-2-4a2 2 0 114 0 2 2 0 01-4 0zm6-6H8v2h8V6z"
                />
            ) : (
                // Outline version
                <>
                    <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" stroke={color} strokeWidth="2" />
                    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" />
                    <path d="M8 6h8" stroke={color} strokeWidth="2" strokeLinecap="round" />
                </>
            )}
        </svg>
    );
};
