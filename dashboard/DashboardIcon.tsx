// DashboardIcon.tsx
import React from "react";

interface IconProps {
    size?: number;
    color?: string;
    className?: string;
    onClick?: () => void;
    filled?: boolean;
}

export const DashboardIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    className = "",
    onClick,
    filled = false,
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : "none"}
            xmlns="http://www.w3.org/2000/svg"
            className={`ds-icon ds-icon-dashboard ${className}`}
            onClick={onClick}
            style={{ cursor: onClick ? "pointer" : "default" }}
        >
            {filled ? (
                // Filled version
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm5 2a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V9a1 1 0 00-1-1H8z"
                />
            ) : (
                // Outline version
                <>
                    <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        stroke={color}
                        strokeWidth="2"
                    />
                    <path d="M3 9h18M9 21V9" stroke={color} strokeWidth="2" />
                </>
            )}
        </svg>
    );
};
