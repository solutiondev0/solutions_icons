import React from 'react';
import { IconProps } from '..';


// Filter Icons
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
                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
        </svg>
    );
};

export const FilterListIcon: React.FC<IconProps> = ({
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
                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M3 8h18M3 12h18M3 16h18M3 20h18" />
        </svg>
    );
};

export const FilterAltIcon: React.FC<IconProps> = ({
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
                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
        </svg>
    );
};

export const FilterCenterFocusIcon: React.FC<IconProps> = ({
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
                <path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 19V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14m14 0h2M5 19H3m8-12h2M9 7H7" />
        </svg>
    );
};

export const FilterNoneIcon: React.FC<IconProps> = ({
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
                <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
        </svg>
    );
};

export const FilterTiltShiftIcon: React.FC<IconProps> = ({
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
                <path d="M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zm7.32.19C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.11-1.44-2.44-1.62-3.9zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9l1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.46-.76 2.79-1.62 3.9zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.11.86-2.44 1.44-3.9 1.62zm-7.32-.19C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
        </svg>
    );
};

export const FilterVintageIcon: React.FC<IconProps> = ({
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
                <path d="M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-1.79-1.03-4.07-1.11-6 0-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 3.85 9 5.78 9 8c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-1.92-1.11-4.2-1.03-6 0 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19 1.79 1.03 4.07 1.11 6 0 .28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54 1.92 1.11 4.2 1.03 6 0-.01-2.07-1.08-4.08-3-5.19zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.7 12.4a6.5 6.5 0 01-13.4 0 6.5 6.5 0 0113.4 0z" />
        </svg>
    );
};

export const FilterBAndWIcon: React.FC<IconProps> = ({
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
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16l-7-8v8H5l7-8V5h7v14z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 3v14H5L19 3z" />
        </svg>
    );
};

export const FilterHdrIcon: React.FC<IconProps> = ({
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
                <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 6l-4 6 3 4-2 2-6-8h16L14 6z" />
        </svg>
    );
};

export const Filter9PlusIcon: React.FC<IconProps> = ({
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
                <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 7V8a2 2 0 00-2-2h-1a2 2 0 00-2 2v1a2 2 0 002 2h1v1H9v2h3a2 2 0 002-2zm-3-3V8h1v1h-1zm10-8H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14v6z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-7 7h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
    );
};

export const FilterDramaIcon: React.FC<IconProps> = ({
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
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l-4-4m0 0l4-4m-4 4h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2z" />
        </svg>
    );
};

export const FilterFramesIcon: React.FC<IconProps> = ({
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
                <path d="M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v14M9 5v14M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" />
        </svg>
    );
};

export const Filter1Icon: React.FC<IconProps> = ({
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
                <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6-4h6m-6 8h6M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
        </svg>
    );
};

export const Filter2Icon: React.FC<IconProps> = ({
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
                <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-8 14h-2v-4h2v4zm0-6h-2V7h2v2z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h8m-8 4h5M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
        </svg>
    );
};

export const Filter3Icon: React.FC<IconProps> = ({
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
                <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h8v2z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h6m-6 4h6m-6 4h6M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
        </svg>
    );
};

export const Filter4Icon: React.FC<IconProps> = ({
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
                <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-4 14h-4v-2h4v-2h-4V7h4v2h2V7h2v10h-2v-2h-2v2z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 16V8h2v4h2V8h2v8h-2v-2h-2v2H9zM5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
        </svg>
    );
};

export const Filter5Icon: React.FC<IconProps> = ({
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
                <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h8v2z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6v4H9v4h6m-9-8V8h12v8H6V8zM5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
        </svg>
    );
};

export const Filter6Icon: React.FC<IconProps> = ({
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
                <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-8 14h-2v-4h2v4zm0-6h-2V7h2v2z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-7-9v12h12V6H6zM5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
        </svg>
    );
};

export const Filter7Icon: React.FC<IconProps> = ({
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
                <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-8 14h-2V7h2v8zm4-4h-2V7h2v4z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l6-6v12M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
        </svg>
    );
};

export const Filter8Icon: React.FC<IconProps> = ({
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
                <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-8 14h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-7-9v12h12V6H6zM5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
        </svg>
    );
};

export const Filter9Icon: React.FC<IconProps> = ({
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
                <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-8 14h-2v-4h2v4zm0-6h-2V7h2v2z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-7-9v12h12V6H6zM5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
        </svg>
    );
};

export const FilterBlurIcon: React.FC<IconProps> = ({
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
                <path d="M10 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
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
            <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const FilterBlurCircularIcon: React.FC<IconProps> = ({
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
                <path d="M10 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
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
            <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const FilterBlurLinearIcon: React.FC<IconProps> = ({
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
                <path d="M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM3 21h18v-2H3v2zM5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5 3.5 7.17 3.5 8 4.17 9.5 5 9.5zm0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM3 3v2h18V3H3zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM13 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 3h18M9 9h6M9 15h6M9 21h6M9 3h6" />
        </svg>
    );
};

export const FilterBlurOffIcon: React.FC<IconProps> = ({
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
                <path d="M13 2.05v2.02c4.46.46 8 4.05 8 8.93 0 .9-.12 1.77-.33 2.59l1.47 1.47c.41-1.08.66-2.25.66-3.46 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05C6.94 2.55 3 6.81 3 12c0 4.97 4.02 9 9 9 2.42 0 4.62-.94 6.26-2.47l-1.46-1.46C15.97 18.41 14.07 19 12 19zm8.29-5.12l-1.39-1.39c-.22.46-.5.88-.82 1.27l1.48 1.48c.47-.67.82-1.44 1.03-2.27l-1.3-1.09zM2.81 2.81L1.39 4.22l3.53 3.53C3.94 9.07 3 11.46 3 14c0 4.97 4.02 9 9 9 2.04 0 3.92-.63 5.47-1.68l3.53 3.53 1.41-1.41L2.81 2.81z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const FilterBlurOnIcon: React.FC<IconProps> = ({
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
                <path d="M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 1c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm14-1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-6-1c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm6 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-6-1c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm6 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-6-1c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm6 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-6-1c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z" />
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
            <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const FilterBrightnessIcon: React.FC<IconProps> = ({
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
                <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
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
            <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
    );
};

export const FilterBrightnessHighIcon: React.FC<IconProps> = ({
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
                <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
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
            <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
    );
};

export const FilterBrightnessLowIcon: React.FC<IconProps> = ({
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
                <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
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
            <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
    );
};

export const FilterBrightnessMediumIcon: React.FC<IconProps> = ({
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
                <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
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
            <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
    );
};

export const FilterCenterFocusIcon2: React.FC<IconProps> = ({
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
                <path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
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
            <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const FilterDramaIcon2: React.FC<IconProps> = ({
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
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l-4-4m0 0l4-4m-4 4h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2z" />
        </svg>
    );
};

export const FilterFramesIcon2: React.FC<IconProps> = ({
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
                <path d="M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM6 18h12V8H6v10z" />
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
            <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="8" y="8" width="8" height="8" rx="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const FilterHdrIcon2: React.FC<IconProps> = ({
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
                <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 6l-4 6 3 4-2 2-6-8h16L14 6z" />
        </svg>
    );
};


