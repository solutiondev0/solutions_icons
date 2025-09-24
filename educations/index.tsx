import React from 'react';
import { IconProps } from '..';

export const BookIcon: React.FC<IconProps> = ({
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
            >
                <path d="M21 4H7a2 2 0 00-2 2v12a2 2 0 002 2h14a1 1 0 001-1V5a1 1 0 00-1-1z"/>
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
        >
            <path d="M21 4H7a2 2 0 00-2 2v12a2 2 0 002 2h14a1 1 0 001-1V5a1 1 0 00-1-1z"/>
        </svg>
    );
};

export const GraduationCapIcon: React.FC<IconProps> = ({
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
            >
                <path d="M21 10.5l-9-5-9 5 9 5 9-5z"/>
                <path d="M12 15v6M6 13.5v3.75a2.25 2.25 0 004.5 0V13.5"/>
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
        >
            <path d="M21 10.5l-9-5-9 5 9 5 9-5z"/>
            <path d="M12 15v6M6 13.5v3.75a2.25 2.25 0 004.5 0V13.5"/>
        </svg>
    );
};

export const PencilIcon: React.FC<IconProps> = ({
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
            >
                <path d="M14.06 6l-9.5 9.5L3 21l5.5-1.56 9.5-9.5L14.06 6z"/>
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
        >
            <path d="M14.06 6l-9.5 9.5L3 21l5.5-1.56 9.5-9.5L14.06 6z"/>
        </svg>
    );
};



export const MicroscopeIcon: React.FC<IconProps> = ({
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
            >
                <path d="M9 20h6M12 17v3M15 9a3 3 0 11-6 0 3 3 0 016 0z"/>
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
        >
            <path d="M9 20h6M12 17v3M15 9a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
    );
};

export const GlobeIcon1: React.FC<IconProps> = ({
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
            >
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
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
        >
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
    );
};

export const AwardIcon: React.FC<IconProps> = ({
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
            >
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.5 13.5l2.5 5.5-4-2-4 2 2.5-5.5"/>
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
        >
            <circle cx="12" cy="8" r="6"/>
            <path d="M15.5 13.5l2.5 5.5-4-2-4 2 2.5-5.5"/>
        </svg>
    );
};

//export const ClockIcon: React.FC<IconProps> = ({
//    size = 24,
//    color = 'currentColor',
//    className = '',
//    onClick,
//    backgroundColor,
//    strokeWidth = 1.5,
//    filled = false
//}) => {
//    if (filled) {
//        return (
//            <svg
//                width={size}
//                height={size}
//                viewBox="0 0 24 24"
//                fill={color}
//                className={className}
//                onClick={onClick}
//            >
//                <circle cx="12" cy="12" r="10"/>
//                <path d="M12 6v6l4 2"/>
//            </svg>
//        );
//    }
//    return (
//        <svg
//            width={size}
//            height={size}
//            viewBox="0 0 24 24"
//            fill="none"
//            stroke={color}
//            strokeWidth={strokeWidth}
//            className={className}
//            onClick={onClick}
//        >
//            <circle cx="12" cy="12" r="10"/>
//            <path d="M12 6v6l4 2"/>
//        </svg>
//    );
//};
//


export const BellIcon: React.FC<IconProps> = ({
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
            >
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
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
        >
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
        </svg>
    );
};

export const SearchIcon1: React.FC<IconProps> = ({
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
            >
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
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
        >
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
        </svg>
    );
};

export const HomeIcon: React.FC<IconProps> = ({
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
            >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <path d="M9 22V12h6v10"/>
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
        >
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            <path d="M9 22V12h6v10"/>
        </svg>
    );
};

export const UserIcon: React.FC<IconProps> = ({
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
            >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
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
        >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
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
            >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
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
        >
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
    );
};

export const SettingsIcon1: React.FC<IconProps> = ({
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
            >
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
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
        >
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
        </svg>
    );
};

export const FileTextIcon: React.FC<IconProps> = ({
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
            >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
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
        >
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
        </svg>
    );
};

export const FolderIcon: React.FC<IconProps> = ({
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
            >
                <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
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
        >
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
        </svg>
    );
};

//export const DownloadIcon: React.FC<IconProps> = ({
//    size = 24,
//    color = 'currentColor',
//    className = '',
//    onClick,
//    backgroundColor,
//    strokeWidth = 1.5,
//    filled = false
//}) => {
//    if (filled) {
//        return (
//            <svg
//                width={size}
//                height={size}
//                viewBox="0 0 24 24"
//                fill={color}
//                className={className}
//                onClick={onClick}
//            >
//                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
//            </svg>
//        );
//    }
//    return (
//        <svg
//            width={size}
//            height={size}
//            viewBox="0 0 24 24"
//            fill="none"
//            stroke={color}
//            strokeWidth={strokeWidth}
//            className={className}
//            onClick={onClick}
//        >
//            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
//        </svg>
//    );
//};

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
            >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
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
        >
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
        </svg>
    );
};

export const MailIcon1: React.FC<IconProps> = ({
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
            >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
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
        >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
        </svg>
    );
};

export const MessageSquareIcon: React.FC<IconProps> = ({
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
            >
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
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
        >
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
    );
};

export const VideoIcon: React.FC<IconProps> = ({
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
            >
                <polygon points="23 7 16 12 23 17 23 7"/>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
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
        >
            <polygon points="23 7 16 12 23 17 23 7"/>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
    );
};

export const CameraIcon: React.FC<IconProps> = ({
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
            >
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                <circle cx="12" cy="13" r="4"/>
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
        >
            <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
            <circle cx="12" cy="13" r="4"/>
        </svg>
    );
};

export const MusicIcon: React.FC<IconProps> = ({
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
            >
                <path d="M9 18V5l12-2v13"/>
                <circle cx="6" cy="18" r="3"/>
                <circle cx="18" cy="16" r="3"/>
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
        >
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
        </svg>
    );
};

export const ImageIcon: React.FC<IconProps> = ({
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
            >
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21,15 16,10 5,21"/>
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
        >
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21,15 16,10 5,21"/>
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
            >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
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
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
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
            >
                <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/>
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
        >
            <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/>
        </svg>
    );
};

export const FlagIcon: React.FC<IconProps> = ({
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
            >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                <line x1="4" y1="22" x2="4" y2="15"/>
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
        >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
            <line x1="4" y1="22" x2="4" y2="15"/>
        </svg>
    );
};

export const BookOpenIcon: React.FC<IconProps> = ({
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
            >
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
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
        >
            <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
        </svg>
    );
};

export const ArchiveIcon: React.FC<IconProps> = ({
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
            >
                <polygon points="21 8 21 21 3 21 3 8"/>
                <rect x="1" y="3" width="22" height="5"/>
                <line x1="10" y1="12" x2="14" y2="12"/>
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
        >
            <polygon points="21 8 21 21 3 21 3 8"/>
            <rect x="1" y="3" width="22" height="5"/>
            <line x1="10" y1="12" x2="14" y2="12"/>
        </svg>
    );
};

export const BarChartIcon: React.FC<IconProps> = ({
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
            >
                <line x1="12" y1="20" x2="12" y2="10"/>
                <line x1="18" y1="20" x2="18" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="16"/>
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
        >
            <line x1="12" y1="20" x2="12" y2="10"/>
            <line x1="18" y1="20" x2="18" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="16"/>
        </svg>
    );
};

export const CoffeeIcon: React.FC<IconProps> = ({
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
            >
                <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
                <line x1="6" y1="1" x2="6" y2="4"/>
                <line x1="10" y1="1" x2="10" y2="4"/>
                <line x1="14" y1="1" x2="14" y2="4"/>
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
        >
            <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
            <line x1="6" y1="1" x2="6" y2="4"/>
            <line x1="10" y1="1" x2="10" y2="4"/>
            <line x1="14" y1="1" x2="14" y2="4"/>
        </svg>
    );
};

export const CompassIcon: React.FC<IconProps> = ({
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
            >
                <circle cx="12" cy="12" r="10"/>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
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
        >
            <circle cx="12" cy="12" r="10"/>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
        </svg>
    );
};

export const DatabaseIcon: React.FC<IconProps> = ({
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
            >
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
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
        >
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
    );
};

export const EyeIcon1: React.FC<IconProps> = ({
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
            >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
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
        >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    );
};

export const FilterIcon1: React.FC<IconProps> = ({
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
            >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
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
        >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
        </svg>
    );
};

export const GiftIcon: React.FC<IconProps> = ({
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
            >
                <polyline points="20 12 20 22 4 22 4 12"/>
                <rect x="2" y="7" width="20" height="5"/>
                <line x1="12" y1="22" x2="12" y2="7"/>
                <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/>
                <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
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
        >
            <polyline points="20 12 20 22 4 22 4 12"/>
            <rect x="2" y="7" width="20" height="5"/>
            <line x1="12" y1="22" x2="12" y2="7"/>
            <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/>
            <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
        </svg>
    );
};

export const LayersIcon: React.FC<IconProps> = ({
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
            >
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
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
        >
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
        </svg>
    );
};

export const LockIcon1: React.FC<IconProps> = ({
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
            >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
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
        >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0110 0v4"/>
        </svg>
    );
};

export const MapIcon: React.FC<IconProps> = ({
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
            >
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
                <line x1="8" y1="2" x2="8" y2="18"/>
                <line x1="16" y1="6" x2="16" y2="22"/>
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
        >
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
            <line x1="8" y1="2" x2="8" y2="18"/>
            <line x1="16" y1="6" x2="16" y2="22"/>
        </svg>
    );
};

export const MonitorIcon: React.FC<IconProps> = ({
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
            >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
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
        >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
    );
};

export const MoonIcon: React.FC<IconProps> = ({
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
            >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
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
        >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
    );
};

export const PaperclipIcon: React.FC<IconProps> = ({
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
            >
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
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
        >
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
        </svg>
    );
};

export const PhoneIcon1: React.FC<IconProps> = ({
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
            >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
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
        >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
    );
};

export const PrinterIcon: React.FC<IconProps> = ({
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
            >
                <polyline points="6 9 6 2 18 2 18 9"/>
                <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
                <rect x="6" y="14" width="12" height="8"/>
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
        >
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
        </svg>
    );
};

export const ShieldIcon1: React.FC<IconProps> = ({
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
            >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
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
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
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
            >
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
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
        >
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
        </svg>
    );
};

export const SlidersIcon: React.FC<IconProps> = ({
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
            >
                <line x1="4" y1="21" x2="4" y2="14"/>
                <line x1="4" y1="10" x2="4" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12" y2="3"/>
                <line x1="20" y1="21" x2="20" y2="16"/>
                <line x1="20" y1="12" x2="20" y2="3"/>
                <line x1="1" y1="14" x2="7" y2="14"/>
                <line x1="9" y1="8" x2="15" y2="8"/>
                <line x1="17" y1="16" x2="23" y2="16"/>
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
        >
            <line x1="4" y1="21" x2="4" y2="14"/>
            <line x1="4" y1="10" x2="4" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12" y2="3"/>
            <line x1="20" y1="21" x2="20" y2="16"/>
            <line x1="20" y1="12" x2="20" y2="3"/>
            <line x1="1" y1="14" x2="7" y2="14"/>
            <line x1="9" y1="8" x2="15" y2="8"/>
            <line x1="17" y1="16" x2="23" y2="16"/>
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
            >
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
                <line x1="7" y1="7" x2="7.01" y2="7"/>
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
        >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
            <line x1="7" y1="7" x2="7.01" y2="7"/>
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
            >
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
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
        >
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="6"/>
            <circle cx="12" cy="12" r="2"/>
        </svg>
    );
};

export const TruckIcon: React.FC<IconProps> = ({
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
            >
                <rect x="1" y="3" width="15" height="13"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
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
        >
            <rect x="1" y="3" width="15" height="13"/>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
            <circle cx="5.5" cy="18.5" r="2.5"/>
            <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
    );
};

export const UmbrellaIcon: React.FC<IconProps> = ({
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
            >
                <path d="M23 12a11.05 11.05 0 00-22 0zm-5 7a3 3 0 01-6 0v-7"/>
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
        >
            <path d="M23 12a11.05 11.05 0 00-22 0zm-5 7a3 3 0 01-6 0v-7"/>
        </svg>
    );
};

export const WifiIcon: React.FC<IconProps> = ({
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
            >
                <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/>
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
        >
            <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/>
        </svg>
    );
};

export const ZapIcon: React.FC<IconProps> = ({
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
            >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
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
        >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
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
            >
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
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
        >
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="11" y1="8" x2="11" y2="14"/>
            <line x1="8" y1="11" x2="14" y2="11"/>
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
            >
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
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
        >
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="8" y1="11" x2="14" y2="11"/>
        </svg>
    );
};

// Continuing with more education-related icons...

export const SchoolIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
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
        >
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z"/>
        </svg>
    );
};

export const LibraryIcon: React.FC<IconProps> = ({
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
        >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
    );
};

export const CertificateIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 15l-5 3v-6l5-3 5 3v6l-5-3z"/>
                <path d="M17 8l5 3v6l-5-3-5 3v-6l5-3z"/>
                <path d="M7 8l5 3v6l-5-3-5 3v-6l5-3z"/>
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
        >
            <path d="M12 15l-5 3v-6l5-3 5 3v6l-5-3z"/>
            <path d="M17 8l5 3v6l-5-3-5 3v-6l5-3z"/>
            <path d="M7 8l5 3v6l-5-3-5 3v-6l5-3z"/>
        </svg>
    );
};

export const BrainIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 10c-3.3 0-6 2.7-6 6h12c0-3.3-2.7-6-6-6z"/>
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
        >
            <path d="M12 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 10c-3.3 0-6 2.7-6 6h12c0-3.3-2.7-6-6-6z"/>
        </svg>
    );
};

export const ChemistryIcon: React.FC<IconProps> = ({
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
            >
                <path d="M20 12c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v10h8V12z"/>
                <path d="M10 12c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10h8V12z"/>
                <path d="M20 2H4c-1.1 0-2 .9-2 2v4h20V4c0-1.1-.9-2-2-2z"/>
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
        >
            <path d="M20 12c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v10h8V12z"/>
            <path d="M10 12c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10h8V12z"/>
            <path d="M20 2H4c-1.1 0-2 .9-2 2v4h20V4c0-1.1-.9-2-2-2z"/>
        </svg>
    );
};

export const MathIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 2L1 21h22L12 2zm0 4l7.5 13h-15L12 6z"/>
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
        >
            <path d="M12 2L1 21h22L12 2zm0 4l7.5 13h-15L12 6z"/>
        </svg>
    );
};

export const GeographyIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
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
        >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
        </svg>
    );
};

export const HistoryIcon: React.FC<IconProps> = ({
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
            >
                <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
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
        >
            <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
        </svg>
    );
};

export const LanguageIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.18 5 4.05 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
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
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.18 5 4.05 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
    );
};

export const LiteratureIcon: React.FC<IconProps> = ({
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
        >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
    );
};

export const MusicNoteIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
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
        >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
    );
};

export const PhysicalEducationIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
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
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
    );
};

export const ScienceIcon: React.FC<IconProps> = ({
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
            >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
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
        >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
    );
};

export const TechnologyIcon: React.FC<IconProps> = ({
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
            >
                <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
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
        >
            <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
        </svg>
    );
};

export const ArtIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
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
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
        </svg>
    );
};

export const EconomicsIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.65-1.28 2.76-3.12 3.16z"/>
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
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.65-1.28 2.76-3.12 3.16z"/>
        </svg>
    );
};

export const PhilosophyIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
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
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
        </svg>
    );
};

export const PsychologyIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.88 15.76V19h-1.75v-1.24c-1.52-.31-2.81-1.19-3.47-2.49l1.54-.58c.37.79 1.11 1.33 2.05 1.33.98 0 1.73-.66 1.73-1.61 0-.96-.75-1.61-1.73-1.61-1.32 0-2.2.92-2.2 2.2h-1.81c0-2.19 1.62-3.9 4.01-3.9 2.29 0 3.82 1.61 3.82 3.62 0 1.77-1.1 3.16-2.79 3.58z"/>
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
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.88 15.76V19h-1.75v-1.24c-1.52-.31-2.81-1.19-3.47-2.49l1.54-.58c.37.79 1.11 1.33 2.05 1.33.98 0 1.73-.66 1.73-1.61 0-.96-.75-1.61-1.73-1.61-1.32 0-2.2.92-2.2 2.2h-1.81c0-2.19 1.62-3.9 4.01-3.9 2.29 0 3.82 1.61 3.82 3.62 0 1.77-1.1 3.16-2.79 3.58z"/>
        </svg>
    );
};

export const SociologyIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
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
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
    );
};

export const BusinessIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
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
        >
            <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
        </svg>
    );
};

export const LawIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
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
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
    );
};

export const MedicineIcon: React.FC<IconProps> = ({
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
            >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5v-2h2v-2H5V9h2V7h2v2h2V7h2v2h2V7h2v2h2v2h-2v2h2v2h-2v2h2v2h-2v-2h-2v2zm-4-4h2v-2h2v-2h-2V9h-2v2H9v2h2v2z"/>
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
        >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5v-2h2v-2H5V9h2V7h2v2h2V7h2v2h2V7h2v2h2v2h-2v2h2v2h-2v2h2v2h-2v-2h-2v2zm-4-4h2v-2h2v-2h-2V9h-2v2H9v2h2v2z"/>
        </svg>
    );
};

export const EngineeringIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
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
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
    );
};

export const ArchitectureIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
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
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
    );
};

export const AgricultureIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
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
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
    );
};

export const EnvironmentalScienceIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
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
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
    );
};

export const AstronomyIcon: React.FC<IconProps> = ({
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
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
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
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
    );
};

