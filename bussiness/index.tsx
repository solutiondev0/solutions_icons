import React from 'react';
import { IconProps } from '..';

// Business Icons
export const BuildingIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M19 2H5C3.346 2 2 3.346 2 5v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3zm-9 16H6v-4h4v4zm8 0h-4v-4h4v4zm-8-6H6V6h4v6zm8 0h-4V6h4v6z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M19 2H5C3.346 2 2 3.346 2 5v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3zM6 18v-4h4v4H6zm12 0h-4v-4h4v4zm-12-6V6h4v6H6zm12 0h-4V6h4v6z"/>
        </svg>
    );
};

export const BriefcaseIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M20 6h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM10 4h4v2h-4V4z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M20 6h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM10 4h4v2h-4V4z"/>
        </svg>
    );
};

export const ChartBarIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M4 18h2v-5H4v5zm5 0h2V7H9v11zm5 0h2V9h-2v9zm5 0h2V5h-2v13z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M4 18h2v-5H4v5zm5 0h2V7H9v11zm5 0h2V9h-2v9zm5 0h2V5h-2v13z"/>
        </svg>
    );
};

export const UsersIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM12 14c-3.859 0-7 3.141-7 7h14c0-3.859-3.141-7-7-7z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
    );
};

export const DollarIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-2h2v2zm2-7.5c0 1.5-1 2.5-2 2.5h-2v2h-2v-4h2c1 0 2-.5 2-1.5s-1-1.5-2-1.5h-2c-1 0-2 .5-2 1.5H7c0-2 1.5-3.5 3.5-3.5h2c2 0 3.5 1.5 3.5 3.5z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
    );
};

export const TargetIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
        </svg>
    );
};

export const GrowthChartIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M3 3v16a1 1 0 0 0 1 1h16v-2H5V3H3zm18 0h-8v8h8V3zm-2 6h-4V5h4v4zm-4 12h8v-8h-8v8zm2-6h4v4h-4v-4z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>
        </svg>
    );
};

export const PresentationIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M21 3H3c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM3 15V5h18v10H3z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M2 3h20v12H2z"/><path d="M8 21h8"/><path d="M12 17v4"/>
        </svg>
    );
};

export const ShoppingCartIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M21 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h17c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h17l.002 12H4z"/><path d="M8 9h2v2H8zm0 4h2v2H8zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
    );
};

export const CreditCardIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-1 6H5V6h14v4z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
    );
};

export const InvoiceIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-7 14h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/>
        </svg>
    );
};

export const BankIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M21 5H3c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-1 2v2h-4V7h4zM8 7h4v2H8V7zM4 7h2v2H4V7zm0 4h16v6H4v-6z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <rect x="2" y="8" width="20" height="12" rx="2"/><path d="M6 12h2"/><path d="M10 12h2"/><path d="M14 12h2"/><path d="M18 12h2"/><path d="M2 10h20"/>
        </svg>
    );
};

export const PiggyBankIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13h-2v2h2V7zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-4c-.5 0-1-.5-1-1s.5-1 1-1h4V5h-2z"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="12" r="1"/>
        </svg>
    );
};

export const CalculatorIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-9 14H7v-2h3v2zm0-4H7v-2h3v2zm0-4H7V7h3v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h4"/><path d="M8 18h4"/><path d="M14 14h2"/><path d="M14 18h2"/>
        </svg>
    );
};

export const ClockIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 10V7h-2v7h6v-2h-4z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
        </svg>
    );
};

export const CalendarIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-1 16H6V8h12v12z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
    );
};

export const DocumentIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-6 14H7v-2h6v2zm4-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/>
        </svg>
    );
};

export const MailIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
    );
};

export const PhoneIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/><path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
    );
};

export const GlobeIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 16v-2h2v2h-2zm1-14c4.411 0 8 3.589 8 8 0 1.855-.657 3.562-1.75 4.897-.183-1.174-1.029-2.897-3.25-2.897-1.5 0-2.5.5-3 1.5l-.5 1.5H9v-1l1-1.5c0-1 .5-1.5 1-2-1 0-2.5 1-3 3l-.5 1.5c-.667-1.833-.5-4.5 1-7 .896-1.68 2.333-3 4-4z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
    );
};

export const ShieldIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M20 5c0-1.103-.897-2-2-2H6C4.897 3 4 3.897 4 5v12c0 4.411 3.589 8 8 8s8-3.589 8-8V5zm-2 0v12c0 3.309-2.691 6-6 6s-6-2.691-6-6V5h12z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
    );
};

export const LockIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm2 10h-4v2h4v-2zm-2-8c1.654 0 3 1.346 3 3v3H9V7c0-1.654 1.346-3 3-3z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
    );
};

export const UnlockIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M12 2C9.243 2 7 4.243 7 7v3h10V7c0-2.757-2.243-5-5-5zm7 9H5v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>
        </svg>
    );
};

export const KeyIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M12 2C8.691 2 6 4.691 6 8c0 1.104.448 2.104 1.172 2.828C6.448 11.896 6 12.896 6 14c0 2.309 1.691 4 4 4 1.104 0 2.104-.448 2.828-1.172C13.896 17.552 14.896 18 16 18c3.309 0 6-2.691 6-6s-2.691-6-6-6c-1.104 0-2.104.448-2.828 1.172C12.104 6.448 11.104 6 10 6c-1.104 0-2.104.448-2.828 1.172C6.448 8.896 6 9.896 6 11c0 1.104.448 2.104 1.172 2.828C7.896 14.552 8.896 15 10 15c1.104 0 2.104-.448 2.828-1.172C13.552 12.896 14.552 12 16 12c2.209 0 4 1.791 4 4s-1.791 4-4 4c-1.104 0-2.104-.448-2.828-1.172C12.448 17.896 11.448 18 10 18c-2.209 0-4-1.791-4-4 0-1.104.448-2.104 1.172-2.828C7.896 10.448 8.896 10 10 10c1.104 0 2.104.448 2.828 1.172C13.552 12.896 14.552 13 16 13c1.657 0 3-1.343 3-3s-1.343-3-3-3c-1.104 0-2.104.448-2.828 1.172C12.448 9.896 11.448 10 10 10c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3c0 1.104-.448 2.104-1.172 2.828C10.448 10.552 9.448 11 8 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3c0 1.104-.448 2.104-1.172 2.828C9.448 11.552 8.448 12 7 12c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4c0 1.104-.448 2.104-1.172 2.828C9.448 13.552 8.448 14 7 14c-1.104 0-2.104.448-2.828 1.172C3.448 16.896 3 17.896 3 19c0 2.209 1.791 4 4 4 1.104 0 2.104-.448 2.828-1.172C10.552 20.448 11.552 20 13 20c2.209 0 4-1.791 4-4 0-1.104-.448-2.104-1.172-2.828C15.448 12.448 14.448 12 13 12c-1.104 0-2.104.448-2.828 1.172C9.448 14.552 8.448 15 7 15c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.104 0 2.104.448 2.828 1.172C10.552 11.448 11.552 11 13 11c1.657 0 3-1.343 3-3s-1.343-3-3-3z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
        </svg>
    );
};

export const SearchIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M10 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm5.706 13.706l-3.535-3.535a5.007 5.007 0 0 0 1.414-1.414l3.535 3.535-1.414 1.414z"/>
                <path d="M21.707 20.293l-3.675-3.675A7.972 7.972 0 0 0 20 10c0-4.411-3.589-8-8-8S4 5.589 4 10s3.589 8 8 8a7.972 7.972 0 0 0 4.618-1.968l3.675 3.675 1.414-1.414z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
    );
};

export const FilterIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>
        </svg>
    );
};

export const SortIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M3 6h18M3 12h12M3 18h6"/>
        </svg>
    );
};

export const DownloadIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
    );
};

export const UploadIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17,8 12,3 7,8"/><line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
    );
};

export const PrintIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M19 8H5c-1.654 0-3 1.346-3 3v6h4v4h12v-4h4v-6c0-1.654-1.346-3-3-3zm-3 11H8v-5h8v5zm3-7c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm-1-9H6v4h12V3z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/>
        </svg>
    );
};

export const ShareIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M18 16c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM8 10c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm10-4h-6c-1.103 0-2 .897-2 2v.172l-2.586-2.586a1 1 0 0 0-1.414 0L3 8.172V6c0-1.103-.897-2-2-2S-1 4.897-1 6v12c0 1.103.897 2 2 2s2-.897 2-2v-2.172l2.586 2.586a1 1 0 0 0 1.414 0L12 15.828V18c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16,6 12,2 8,6"/><line x1="12" y1="2" x2="12" y2="15"/>
        </svg>
    );
};

export const TagIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M20 4H8.586l-6.293 6.293a1 1 0 0 0 0 1.414L8.586 20H20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
        </svg>
    );
};

export const BookmarkIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
        </svg>
    );
};

export const StarIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
    );
};

export const HeartIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
    );
};

export const ThumbsUpIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32 0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2zM1 21h4V9H1v12z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
        </svg>
    );
};

export const ThumbsDownIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M1 14a2 2 0 0 0 2 2h6.32l-.96 4.57c-.02.1-.03.21-.03.32 0 .41.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5a2 2 0 0 0-2-2H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2zM23 3h-4V15h4V3z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"/>
        </svg>
    );
};

export const EyeIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M12 6c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 21.514 2 16 6.486 6 12 6zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 3c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
        </svg>
    );
};

export const EyeOffIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M12 6c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 21.514 2 16 6.486 6 12 6zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm3.707 2.293l-7.414 7.414c-.189.189-.44.293-.707.293s-.518-.104-.707-.293a1 1 0 0 1 0-1.414l7.414-7.414a1 1 0 0 1 1.414 1.414z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>
        </svg>
    );
};

export const EditIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.414.586L4 13.585V18h4.415L19.045 7.401zM5 16v-1.585l9.04-9.04 1.585 1.585L6.585 16H5z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
    );
};

export const TrashIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14zM6 7v12c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V7H6z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <polyline points="3,6 5,6 21,6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>
        </svg>
    );
};

export const CopyIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
    );
};

export const SaveIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V18z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17,21 17,13 7,13 7,21"/><polyline points="7,3 7,8 15,8"/>
        </svg>
    );
};

export const SendIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/>
        </svg>
    );
};

export const AttachmentIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
        </svg>
    );
};

export const LinkIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 5.006 5.006 0 0 0 7.071 0l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.242 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"/><path d="M12 4.929l-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.242 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
    );
};

export const ExternalLinkIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
    );
};

export const ZoomInIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
        </svg>
    );
};

export const ZoomOutIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M7 9h5v1H7z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/>
        </svg>
    );
};

export const MaximizeIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M3 3h18v18H3z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
        </svg>
    );
};

export const MinimizeIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M6 11h12v2H6z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
        </svg>
    );
};

export const RefreshIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <polyline points="23,4 23,10 17,10"/><polyline points="1,20 1,14 7,14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
        </svg>
    );
};

export const SettingsIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    if (filled) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={color}
                className={className}
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
    );
};
