import React from 'react';
import { IconProps } from '..';

// Health and Items
export const HeartIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
    );
};

export const CoinIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="12" r="9"/>
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 7v10"/>
        </svg>
    );
};

export const PotionIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M6 3h12l-1 4H7L6 3z"/>
            <rect x="6" y="7" width="12" height="12" rx="2"/>
            <path d="M12 12v4"/>
        </svg>
    );
};

export const KeyIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="8" cy="8" r="6"/>
            <path d="M14 14l8 8"/>
            <path d="M14 20l4-4"/>
        </svg>
    );
};

export const ChestIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <rect x="3" y="8" width="18" height="12" rx="2"/>
            <path d="M3 12h18"/>
            <path d="M8 8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3"/>
        </svg>
    );
};

export const ShieldIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
    );
};

export const SwordIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M3 3l18 18M5 19L19 5M14 5l-2 2M16 7l2-2M9 14l-2 2M11 16l2-2"/>
        </svg>
    );
};

export const BowIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 3l9 9-9 9-9-9z"/>
            <path d="M12 12l9-9"/>
            <path d="M12 12L3 3"/>
        </svg>
    );
};

export const ArrowIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
    );
};

export const BombIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="12" r="8"/>
            <path d="M12 4V2M8 6L6 4M16 6l2-2"/>
            <circle cx="8" cy="8" r="1"/>
        </svg>
    );
};

// Weapons
export const AxeIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M14 12l-8 8M16 8l4-4M6 18L18 6"/>
        </svg>
    );
};

export const DaggerIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 2v20M8 8l4-4 4 4M8 16l4 4 4-4"/>
        </svg>
    );
};

export const MaceIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="8" r="4"/>
            <path d="M12 12v8M8 20h8"/>
        </svg>
    );
};

export const SpearIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 2v20M8 6l4-4 4 4"/>
        </svg>
    );
};

export const CrossbowIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M6 12h12M12 6v12M8 8l8 8M8 16l8-8"/>
        </svg>
    );
};

// Armor
export const HelmetIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 4C7 4 3 8 3 12v8h18v-8c0-4-4-8-9-8z"/>
        </svg>
    );
};

export const BootsIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M4 18v-6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6"/>
            <path d="M4 18H2M22 18h-2"/>
        </svg>
    );
};

export const GauntletsIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="8" cy="12" r="4"/>
            <circle cx="16" cy="12" r="4"/>
            <path d="M8 12H4M20 12h-4"/>
        </svg>
    );
};

// Magic
export const FireIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M8 16c0-4 4-8 4-8s4 4 4 8c0 4-4 4-4 4s-4 0-4-4z"/>
            <path d="M12 8s-4 4-4 8c0 4 4 4 4 4"/>
        </svg>
    );
};

export const IceIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 2v20M4 12h16M6 6l12 12M18 6L6 18"/>
        </svg>
    );
};

export const LightningIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
    );
};

export const PoisonIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
        </svg>
    );
};

// Characters
export const KnightIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="8" r="3"/>
            <path d="M12 11v6M9 14h6"/>
        </svg>
    );
};

export const WizardIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 3v4l-2 2 2 2v4"/>
            <circle cx="12" cy="19" r="1"/>
        </svg>
    );
};

export const ArcherIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="8" r="2"/>
            <path d="M12 10v7M10 14h4"/>
        </svg>
    );
};

export const RogueIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="7" r="2"/>
            <path d="M8 21l2-8 4 4-2 8z"/>
        </svg>
    );
};

// Monsters
export const DragonIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 4L4 8l8 4 8-4-8-4z"/>
            <path d="M4 8v8l8 4 8-4V8"/>
            <path d="M12 12v8"/>
        </svg>
    );
};

export const GoblinIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="10" r="4"/>
            <path d="M8 16h8v4H8z"/>
        </svg>
    );
};

export const GhostIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 3a8 8 0 0 0-8 8v10l3-3 3 3 2-2 2 2 3-3 3 3V11a8 8 0 0 0-8-8z"/>
        </svg>
    );
};

export const SkeletonIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="6" r="2"/>
            <path d="M12 8v8M8 12h8"/>
        </svg>
    );
};

// UI Elements
export const PauseIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <rect x="6" y="4" width="4" height="16"/>
            <rect x="14" y="4" width="4" height="16"/>
        </svg>
    );
};

export const PlayIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <polygon points="5,3 19,12 5,21"/>
        </svg>
    );
};

export const SettingsIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
    );
};

export const SaveIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
            <polyline points="17 21 17 13 7 13 7 21"/>
            <polyline points="7 3 7 8 15 8"/>
        </svg>
    );
};

export const LoadIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
    );
};

export const ExitIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
    );
};

export const VolumeOnIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
        </svg>
    );
};

export const VolumeOffIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/>
            <line x1="17" y1="9" x2="23" y2="15"/>
        </svg>
    );
};

export const FullscreenIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/>
        </svg>
    );
};

// Game Elements
export const DiceIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8" cy="8" r="1"/>
            <circle cx="16" cy="16" r="1"/>
            <circle cx="16" cy="8" r="1"/>
            <circle cx="8" cy="16" r="1"/>
            <circle cx="12" cy="12" r="1"/>
        </svg>
    );
};

export const CardIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M2 10h20"/>
        </svg>
    );
};

export const PuzzleIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M10 4H4a2 2 0 0 0-2 2v4h6l2 4-2 4H2v4a2 2 0 0 0 2 2h6l2-4 2 4h6a2 2 0 0 0 2-2v-4h-6l-2-4 2-4h6V6a2 2 0 0 0-2-2h-6l-2 4-2-4z"/>
        </svg>
    );
};

export const TrophyIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M6 3h12v6a6 6 0 0 1-6 6 6 6 0 0 1-6-6V3z"/>
            <path d="M6 9h12M12 9v12M8 21h8"/>
        </svg>
    );
};

export const CrownIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 8L8 12l-2-4-2 4 4-4 4 4 4-4 4 4-2-4-2 4-4-4z"/>
            <path d="M4 16l-2 4h20l-2-4"/>
        </svg>
    );
};

// Environment
export const TreeIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 20V4M8 8h8M6 12h12M4 16h16"/>
        </svg>
    );
};

export const MountainIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M3 20l9-15 9 15H3z"/>
        </svg>
    );
};

export const CastleIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 2v20M2 22h20M5 22V7l7-5 7 5v15"/>
            <path d="M9 22V12h6v10"/>
        </svg>
    );
};

export const CaveIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M6 20h12M4 8l8-4 8 4v12H4V8z"/>
        </svg>
    );
};

// Continuing with more icons to reach 100...

export const HourglassIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M6 2h12v6l-4 4 4 4v6H6v-6l4-4-4-4V2z"/>
        </svg>
    );
};

export const CompassIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="12" r="10"/>
            <path d="M16.24 7.76l-2 6-6 2 2-6 6-2z"/>
        </svg>
    );
};

export const MapIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
            <line x1="8" y1="2" x2="8" y2="18"/>
            <line x1="16" y1="6" x2="16" y2="22"/>
        </svg>
    );
};

export const TelescopeIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 8l8 8M4 16l8-8M8 4L2 10M16 20l6-6"/>
        </svg>
    );
};

export const AnvilIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M7 10v10M7 10l10-5M7 10l5 5M17 5l-10 5"/>
            <path d="M12 15v5"/>
        </svg>
    );
};

export const ForgeIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 8v8M8 12h8"/>
        </svg>
    );
};

export const LockIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
    );
};

export const UnlockIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0 1 9-2"/>
        </svg>
    );
};

export const TrapIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/>
        </svg>
    );
};

export const PortalIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="6"/>
            <circle cx="12" cy="12" r="2"/>
        </svg>
    );
};

export const CrystalIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 2l8 6-3 10-10 0-3-10 8-6z"/>
        </svg>
    );
};

export const GemIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M6 3h12l3 7-9 11-9-11 3-7z"/>
        </svg>
    );
};

export const ScrollIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M16 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/>
            <path d="M10 3v4h4V3"/>
        </svg>
    );
};

export const BookIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
    );
};

export const QuillIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M2 22l4-4M21 3l-4 4M12 12l4-4-4-4-4 4 4 4z"/>
        </svg>
    );
};

export const LanternIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 2v4M8 6h8M6 6l-2 4h16l-2-4"/>
            <rect x="8" y="10" width="8" height="10" rx="2"/>
        </svg>
    );
};

export const CampfireIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 2c1 4 3 6 6 8-3 2-5 4-6 8-1-4-3-6-6-8 3-2 5-4 6-8z"/>
        </svg>
    );
};

export const TentIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M4 22V10l8-8 8 8v12H4z"/>
        </svg>
    );
};

export const BridgeIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M2 12h20M2 12v8M22 12v8M6 12v4M10 12v4M14 12v4M18 12v4"/>
        </svg>
    );
};

export const ShipIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M2 18l8-12 8 12H2z"/>
            <path d="M12 6v12M8 10h8"/>
        </svg>
    );
};

export const AnchorIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="5" r="3"/>
            <path d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3"/>
        </svg>
    );
};

export const FishingRodIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M2 2l6 6M4 4l12 12M10 10l8 8M12 12l6 6"/>
        </svg>
    );
};

export const NetIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M2 2h20v20H2z"/>
            <path d="M2 12h20M12 2v20M6 2v20M18 2v20M2 6h20M2 18h20"/>
        </svg>
    );
};

export const HookIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M18 6a4 4 0 0 0-8 0v12a2 2 0 0 0 4 0"/>
        </svg>
    );
};

export const BaitIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
        </svg>
    );
};

export const BarrelIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M4 8h16v8H4z"/>
            <path d="M4 8v8M20 8v8M8 8v8M16 8v8"/>
        </svg>
    );
};

export const CrateIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M3 12h18M12 3v18"/>
        </svg>
    );
};

export const WellIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="12" r="8"/>
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 4v16"/>
        </svg>
    );
};

export const FountainIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="8" r="2"/>
            <path d="M12 10v12M8 14h8"/>
        </svg>
    );
};

export const AltarIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    );
};

export const MonumentIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 2v20M8 8h8M6 12h12M4 16h16"/>
        </svg>
    );
};

export const GravestoneIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M8 22h8M6 22v-6h12v6M8 16V8h8v8"/>
        </svg>
    );
};

export const SkullIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="9" cy="9" r="2"/>
            <circle cx="15" cy="9" r="2"/>
            <path d="M8 17v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1"/>
            <path d="M12 2a10 10 0 0 0-10 10v2h20v-2A10 10 0 0 0 12 2z"/>
        </svg>
    );
};

export const BonesIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M8 6l2 2-2 2-2-2 2-2zM16 14l2 2-2 2-2-2 2-2zM8 14l2 2-2 2-2-2 2-2zM16 6l2 2-2 2-2-2 2-2z"/>
        </svg>
    );
};

export const SpiderIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="8" r="3"/>
            <path d="M12 11v10M9 14l-3 3M15 14l3 3M8 8L5 5M16 8l3-3"/>
        </svg>
    );
};

export const BatIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M12 6c0-2 2-4 4-4 0 2-2 4-4 4zM12 6c0 2-2 4-4 4 0-2 2-4 4-4z"/>
            <path d="M12 6v12M8 10l-4 4 4 4M16 10l4 4-4 4"/>
        </svg>
    );
};

export const RatIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M18 10a4 4 0 0 0-8 0v8a2 2 0 0 0 4 0"/>
            <circle cx="14" cy="6" r="1"/>
        </svg>
    );
};

export const SnakeIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <path d="M10 8l2-2 2 2-2 2-2-2zM14 12l2-2 2 2-2 2-2-2zM6 12l2-2 2 2-2 2-2-2z"/>
        </svg>
    );
};

export const SlimeIcon: React.FC<IconProps> = ({ 
    size = 24, 
    color = 'currentColor', 
    className = '',
    onClick,
    backgroundColor,
    strokeWidth = 2,
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
            <circle cx="12" cy="12" r="10"/>
            <circle cx="9" cy="9" r="1"/>
            <circle cx="15" cy="9" r="1"/>
        </svg>
    );
};

