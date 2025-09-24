import React from 'react';

export interface IconProps {
    size?: number;
    color?: string;
    className?: string;
    onClick?: () => void;
    backgroundColor?: string;
    strokeWidth?: number;
    filled?: boolean;
}

export const FacebookIcon: React.FC<IconProps> = ({
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
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
    );
};

export const TwitterIcon: React.FC<IconProps> = ({
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
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
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
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
        </svg>
    );
};

export const InstagramIcon: React.FC<IconProps> = ({
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
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
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
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
    );
};

export const LinkedInIcon: React.FC<IconProps> = ({
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
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
        </svg>
    );
};

export const YouTubeIcon: React.FC<IconProps> = ({
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
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
        </svg>
    );
};

export const GithubIcon: React.FC<IconProps> = ({
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
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
    );
};

export const DiscordIcon: React.FC<IconProps> = ({
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
                <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0c.14.09.28.19.42.33a10.2 10.2 0 0 1-1.71.84 12.89 12.89 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"/>
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
            <path d="M18 7a16 16 0 0 0-12 0"/>
            <path d="M6 17a16 16 0 0 1 12 0"/>
            <path d="M8 12h8"/>
            <path d="M15.5 17.5h0a2.5 2.5 0 0 1-2.5-2.5v-6a2.5 2.5 0 0 1 2.5-2.5h0A2.5 2.5 0 0 1 18 9v6a2.5 2.5 0 0 1-2.5 2.5z"/>
            <path d="M8.5 17.5h0A2.5 2.5 0 0 1 6 15V9a2.5 2.5 0 0 1 2.5-2.5h0A2.5 2.5 0 0 1 11 9v6a2.5 2.5 0 0 1-2.5 2.5z"/>
        </svg>
    );
};


export const PinterestIcon: React.FC<IconProps> = ({
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
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
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
            <path d="M12 20.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17z"/>
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <circle cx="15.5" cy="8.5" r="1.5"/>
        </svg>
    );
};

export const SnapchatIcon: React.FC<IconProps> = ({
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
                <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.136.106.187.182.368.491.722 1.064 1.171 1.823.494.838.312 1.77.274 2.132-.06.567-.215 1.215-.431 1.852-.067.196-.146.395-.227.601a6.41 6.41 0 0 1-3.752 3.715 2.938 2.938 0 0 0-.1.569c-.056.515-.172 1.285-.534 1.958-.25.464-.613.867-1.076 1.153-.41.255-.888.404-1.378.404-.51 0-1.01-.161-1.432-.464-.416-.299-.745-.725-.953-1.193-.362-.673-.478-1.443-.534-1.958a2.94 2.94 0 0 0-.1-.569 6.406 6.406 0 0 1-3.751-3.715c-.081-.206-.16-.405-.227-.601-.216-.637-.371-1.285-.431-1.852-.038-.362-.22-1.294.274-2.132.449-.759.803-1.332 1.171-1.823.051-.076.112-.137.187-.182-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.859 1.069 11.216.793 12.206.793z"/>
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
            <path d="M16.5 8.5c-.5-2-1.5-3-3.5-3-2 0-3 1-3.5 3-.5 2-1 4-1 6a5 5 0 1 0 10 0c0-2-.5-4-1-6z"/>
            <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
    );
};

export const RedditIcon: React.FC<IconProps> = ({
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
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
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
            <circle cx="12" cy="12" r="10"/>
            <circle cx="9" cy="13" r="1.5"/>
            <circle cx="15" cy="13" r="1.5"/>
            <path d="M9 17c1.5-1 3-1 6 0"/>
            <path d="M8 8l2-2 2 2"/>
            <path d="M16 8l-2-2-2 2"/>
        </svg>
    );
};

export const WhatsAppIcon: React.FC<IconProps> = ({
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
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
            <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
            <path d="M8 12h8M12 8v8"/>
        </svg>
    );
};

export const TelegramIcon: React.FC<IconProps> = ({
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
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.14-.26.26-.429.26l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
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
            <path d="M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5M9 13.5v5l3.5-3"/>
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
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
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
            <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/>
            <path d="M10 2c1 .5 2 2 2 5"/>
        </svg>
    );
};


export const MicrosoftIcon: React.FC<IconProps> = ({
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
                <path d="M11.5 3H3v8.5h8.5V3zM21 3h-8.5v8.5H21V3zM11.5 12.5H3V21h8.5v-8.5zM21 12.5h-8.5V21H21v-8.5z"/>
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
            <rect x="2" y="2" width="9" height="9" rx="1"/>
            <rect x="13" y="2" width="9" height="9" rx="1"/>
            <rect x="2" y="13" width="9" height="9" rx="1"/>
            <rect x="13" y="13" width="9" height="9" rx="1"/>
        </svg>
    );
};

export const TwitchIcon: React.FC<IconProps> = ({
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
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
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
            <path d="M21 2H3v16h5v4l4-4h5l4-4V2z"/>
            <path d="M16 8v4M12 8v4"/>
        </svg>
    );
};

