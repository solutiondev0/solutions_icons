import React from 'react';
import { IconProps } from '..';
// Operating System Icons
export const WindowsIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="8" height="8" rx="1" />
            <rect x="13" y="3" width="8" height="8" rx="1" />
            <rect x="3" y="13" width="8" height="8" rx="1" />
            <rect x="13" y="13" width="8" height="8" rx="1" />
        </svg>
    );
};

export const AppleIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
        </svg>
    );
};

export const LinuxIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="9" cy="10" r="1.5" />
            <circle cx="15" cy="10" r="1.5" />
            <path d="M8 16c1.5-1 2.5-1 4 0 1.5-1 2.5-1 4 0" />
        </svg>
    );
};

export const AndroidIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <path d="M17.5 7C18.88 7 20 8.12 20 9.5V16.5C20 17.88 18.88 19 17.5 19H6.5C5.12 19 4 17.88 4 16.5V9.5C4 8.12 5.12 7 6.5 7H17.5Z" />
            <line x1="8" y1="8" x2="8" y2="10" />
            <line x1="16" y1="8" x2="16" y2="10" />
            <line x1="9" y1="16" x2="15" y2="16" />
        </svg>
    );
};

export const ChromeIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="12" y1="8" x2="21.17" y2="8" />
            <line x1="6.34" y1="15.66" x2="12" y2="8" />
            <line x1="12" y1="8" x2="17.66" y2="15.66" />
        </svg>
    );
};

export const FirefoxIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <path d="M12 22C17.52 22 22 17.52 22 12S17.52 2 12 2C6.48 2 2 6.48 2 12S6.48 22 12 22Z" />
            <path d="M15 9C15 6.79 13.21 5 11 5C8.79 5 7 6.79 7 9C7 11.21 8.79 13 11 13C13.21 13 15 11.21 15 9Z" />
            <path d="M17 15C17 12.79 15.21 11 13 11C10.79 11 9 12.79 9 15C9 17.21 10.79 19 13 19C15.21 19 17 17.21 17 15Z" />
        </svg>
    );
};

export const SafariIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="2" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="22" y2="12" />
        </svg>
    );
};

export const EdgeIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <path d="M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" />
            <path d="M12 21C12 21 16 17 16 12C16 7 12 3 12 3" />
            <path d="M12 21C12 21 8 17 8 12C8 7 12 3 12 3" />
        </svg>
    );
};

export const OperaIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <path d="M12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6Z" />
        </svg>
    );
};

export const UbuntuIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="8" cy="12" r="1" />
            <circle cx="16" cy="12" r="1" />
            <circle cx="12" cy="8" r="1" />
            <circle cx="12" cy="16" r="1" />
        </svg>
    );
};

export const DebianIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2C17.52 2 22 6.48 22 12S17.52 22 12 22Z" />
            <circle cx="12" cy="12" r="8" />
            <path d="M12 20C7.58 20 4 16.42 4 12S7.58 4 12 4C16.42 4 20 7.58 20 12S16.42 20 12 20Z" />
        </svg>
    );
};

export const FedoraIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z" />
            <circle cx="12" cy="12" r="4" />
        </svg>
    );
};

export const ArchIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <path d="M12 2L20 22L12 18L4 22L12 2Z" />
            <path d="M12 2L12 18" />
        </svg>
    );
};

export const CentOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6L16 10L12 14L8 10L12 6Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
};

export const RedHatIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z" />
        </svg>
    );
};

export const MintIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6L16 10L12 14L8 10L12 6Z" />
            <path d="M12 10L14 12L12 14L10 12L12 10Z" />
        </svg>
    );
};

export const KaliIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <path d="M12 2L20 22L12 18L4 22L12 2Z" />
            <path d="M12 2L12 18" />
            <path d="M8 6L16 10L12 14L8 10L12 6L8 6Z" />
        </svg>
    );
};

export const FreeBSDIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <path d="M12 2L20 22L12 18L4 22L12 2Z" />
            <path d="M12 6L16 10L12 14L8 10L12 6Z" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    );
};

export const OpenSUSEIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6L16 10L12 14L8 10L12 6Z" />
            <path d="M12 10L14 12L12 14L10 12L12 10Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
};

export const ManjaroIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <path d="M12 2L20 22L12 18L4 22L12 2Z" />
            <path d="M12 6L16 10L12 14L8 10L12 6Z" />
            <path d="M10 12L14 12" />
        </svg>
    );
};

export const ElementaryIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    );
};

export const ZorinIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6L16 10L12 14L8 10L12 6Z" />
            <path d="M12 10L14 12L12 14L10 12L12 10Z" />
            <path d="M9 9L15 15" />
            <path d="M15 9L9 15" />
        </svg>
    );
};

export const TuxIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="8" r="6" />
            <path d="M6 14C6 14 8 16 12 16C16 16 18 14 18 14" />
            <path d="M9 11L10 12" />
            <path d="M15 11L14 12" />
        </svg>
    );
};

export const SolarisIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="2" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="22" y2="12" />
        </svg>
    );
};

export const HaikuIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 8H16V16H8V8Z" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    );
};

export const ReactOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <rect x="6" y="6" width="12" height="12" rx="1" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
};

export const ChromeOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="12" cy="12" r="4" />
            <line x1="12" y1="8" x2="16" y2="12" />
            <line x1="12" y1="8" x2="8" y2="12" />
        </svg>
    );
};

export const FuchsiaIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6L16 10L12 14L8 10L12 6Z" />
            <path d="M12 10L14 12L12 14L10 12L12 10Z" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    );
};

export const BeOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <rect x="6" y="6" width="12" height="12" rx="1" />
            <path d="M9 9H15V15H9V9Z" />
        </svg>
    );
};

export const SyllableIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 8H16V16H8V8Z" />
            <line x1="8" y1="8" x2="16" y2="16" />
            <line x1="16" y1="8" x2="8" y2="16" />
        </svg>
    );
};

export const MenuetOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    );
};

export const TempleOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M8 8H16V16H8V8Z" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
    );
};

export const RISCOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M8 8H16V16H8V8Z" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    );
};

export const AmigaOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M8 8H16V16H8V8Z" />
            <line x1="8" y1="8" x2="16" y2="16" />
        </svg>
    );
};

export const MorphOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 8H16V16H8V8Z" />
            <path d="M10 10H14V14H10V10Z" />
        </svg>
    );
};

export const AROSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12H16" />
            <path d="M12 8V16" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    );
};

export const SkyOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M8 8H16V16H8V8Z" />
            <path d="M10 10H14V14H10V10Z" />
            <circle cx="12" cy="12" r="1" />
        </svg>
    );
};

export const ReactOS2Icon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
            <line x1="12" y1="6" x2="12" y2="18" />
            <line x1="6" y1="12" x2="18" y2="12" />
        </svg>
    );
};

export const FreeDOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="18" height="18" rx="1" />
            <text x="12" y="14" textAnchor="middle" fontSize="8" fill={color}>FD</text>
        </svg>
    );
};

export const MSDOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="18" height="18" rx="1" />
            <text x="12" y="14" textAnchor="middle" fontSize="8" fill={color}>DOS</text>
        </svg>
    );
};

export const CPMIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="18" height="18" rx="1" />
            <text x="12" y="14" textAnchor="middle" fontSize="6" fill={color}>CP/M</text>
        </svg>
    );
};

export const OS2Icon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <text x="12" y="14" textAnchor="middle" fontSize="8" fill={color}>OS/2</text>
        </svg>
    );
};

export const VMSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <text x="12" y="14" textAnchor="middle" fontSize="6" fill={color}>VMS</text>
        </svg>
    );
};

export const UnixIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 8H16V16H8V8Z" />
            <line x1="8" y1="8" x2="16" y2="16" />
            <line x1="16" y1="8" x2="8" y2="16" />
        </svg>
    );
};

export const Plan9Icon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M9 9H15V15H9V9Z" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    );
};

export const InfernoIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6L16 10L12 14L8 10L12 6Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
};

export const MinixIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 8H16V16H8V8Z" />
            <line x1="8" y1="8" x2="16" y2="16" />
        </svg>
    );
};

export const Haiku2Icon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M8 8H16V16H8V8Z" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    );
};

export const SerenityOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 8H16V16H8V8Z" />
            <path d="M10 10H14V14H10V10Z" />
        </svg>
    );
};

export const ToaruOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M9 9H15V15H9V9Z" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    );
};

export const CollapseOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12H16" />
            <path d="M12 8V16" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    );
};

export const MenuetOS2Icon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    );
};

export const HelenOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M9 9H15V15H9V9Z" />
            <path d="M11 11H13V13H11V11Z" />
        </svg>
    );
};

export const GenodeIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 8H16V16H8V8Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
};

export const RedoxIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    );
};

export const HarmonyOSIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12H16" />
            <path d="M12 8V16" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    );
};

export const Fuchsia2Icon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 1.5,
    filled = false
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? color : 'none'}
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6L16 10L12 14L8 10L12 6Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
};
