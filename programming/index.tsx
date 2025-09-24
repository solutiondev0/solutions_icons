import React from 'react';
import { IconProps } from '..';

export const CodeIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M8.5 18.5L2.5 12L8.5 5.5M15.5 5.5L21.5 12L15.5 18.5M14 3L10 21"/>
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
      <path d="M8.5 18.5L2.5 12L8.5 5.5M15.5 5.5L21.5 12L15.5 18.5M14 3L10 21"/>
    </svg>
  );
};

export const TerminalIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="M7 9L10 12L7 15M13 15H17"/>
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
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="M7 9L10 12L7 15M13 15H17"/>
    </svg>
  );
};

export const BugIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M12 8V12M12 16H12.01M17 8H21M21 12C21 16.4183 16.9706 20 12 20C7.02944 20 3 16.4183 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z"/>
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
      <path d="M12 8V12M12 16H12.01M17 8H21M21 12C21 16.4183 16.9706 20 12 20C7.02944 20 3 16.4183 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z"/>
    </svg>
  );
};

export const DatabaseIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M12 8C16.9706 8 21 6.65685 21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5C3 6.65685 7.02944 8 12 8Z"/>
        <path d="M21 12C21 13.66 16.97 15 12 15C7.03 15 3 13.66 3 12"/>
        <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5"/>
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
      <path d="M12 8C16.9706 8 21 6.65685 21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5C3 6.65685 7.02944 8 12 8Z"/>
      <path d="M21 12C21 13.66 16.97 15 12 15C7.03 15 3 13.66 3 12"/>
      <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5"/>
    </svg>
  );
};

export const ServerIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <circle cx="7" cy="8" r="1"/>
        <circle cx="7" cy="12" r="1"/>
        <circle cx="7" cy="16" r="1"/>
        <line x1="11" y1="8" x2="17" y2="8"/>
        <line x1="11" y1="12" x2="17" y2="12"/>
        <line x1="11" y1="16" x2="17" y2="16"/>
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
      <rect x="3" y="4" width="18" height="16" rx="2"/>
      <circle cx="7" cy="8" r="1"/>
      <circle cx="7" cy="12" r="1"/>
      <circle cx="7" cy="16" r="1"/>
      <line x1="11" y1="8" x2="17" y2="8"/>
      <line x1="11" y1="12" x2="17" y2="12"/>
      <line x1="11" y1="16" x2="17" y2="16"/>
    </svg>
  );
};

export const GitBranchIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M6 3V15M6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18M6 15C7.65685 15 9 16.3431 9 18M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9ZM18 9C18 11.5 15.5 14 15.5 14M6 9V3"/>
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
      <path d="M6 3V15M6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18M6 15C7.65685 15 9 16.3431 9 18M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9ZM18 9C18 11.5 15.5 14 15.5 14M6 9V3"/>
    </svg>
  );
};

export const GitMergeIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21ZM6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9ZM6 9V21"/>
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
      <path d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21ZM6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9ZM6 9V21"/>
    </svg>
  );
};

export const GitCommitIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <line x1="3" y1="12" x2="9" y2="12"/>
        <line x1="15" y1="12" x2="21" y2="12"/>
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
      <line x1="3" y1="12" x2="9" y2="12"/>
      <line x1="15" y1="12" x2="21" y2="12"/>
    </svg>
  );
};

export const GitPullRequestIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="6" r="3"/>
        <path d="M18 9V15C18 16.5 17.2 17.8 16 18.5M6 15V9"/>
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
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="6" r="3"/>
      <path d="M18 9V15C18 16.5 17.2 17.8 16 18.5M6 15V9"/>
    </svg>
  );
};

export const PackageIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M12 22L2 17V7L12 2L22 7V17L12 22Z"/>
        <path d="M12 22V12"/>
        <path d="M22 7L12 12"/>
        <path d="M2 7L12 12"/>
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
      <path d="M12 22L2 17V7L12 2L22 7V17L12 22Z"/>
      <path d="M12 22V12"/>
      <path d="M22 7L12 12"/>
      <path d="M2 7L12 12"/>
    </svg>
  );
};

export const CloudIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M6 19C3.23858 19 1 16.7614 1 14C1 11.2386 3.23858 9 6 9C6.5 6.5 9 4 12 4C15.5 4 18 6.5 18 9C20.7614 9 23 11.2386 23 14C23 16.7614 20.7614 19 18 19H6Z"/>
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
      <path d="M6 19C3.23858 19 1 16.7614 1 14C1 11.2386 3.23858 9 6 9C6.5 6.5 9 4 12 4C15.5 4 18 6.5 18 9C20.7614 9 23 11.2386 23 14C23 16.7614 20.7614 19 18 19H6Z"/>
    </svg>
  );
};

export const CloudUploadIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M6 19C3.23858 19 1 16.7614 1 14C1 11.2386 3.23858 9 6 9C6.5 6.5 9 4 12 4C15.5 4 18 6.5 18 9C20.7614 9 23 11.2386 23 14C23 16.7614 20.7614 19 18 19H6Z"/>
        <path d="M12 15V9M12 9L9 12M12 9L15 12"/>
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
      <path d="M6 19C3.23858 19 1 16.7614 1 14C1 11.2386 3.23858 9 6 9C6.5 6.5 9 4 12 4C15.5 4 18 6.5 18 9C20.7614 9 23 11.2386 23 14C23 16.7614 20.7614 19 18 19H6Z"/>
      <path d="M12 15V9M12 9L9 12M12 9L15 12"/>
    </svg>
  );
};

export const CloudDownloadIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M6 19C3.23858 19 1 16.7614 1 14C1 11.2386 3.23858 9 6 9C6.5 6.5 9 4 12 4C15.5 4 18 6.5 18 9C20.7614 9 23 11.2386 23 14C23 16.7614 20.7614 19 18 19H6Z"/>
        <path d="M12 15V9M12 15L9 12M12 15L15 12"/>
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
      <path d="M6 19C3.23858 19 1 16.7614 1 14C1 11.2386 3.23858 9 6 9C6.5 6.5 9 4 12 4C15.5 4 18 6.5 18 9C20.7614 9 23 11.2386 23 14C23 16.7614 20.7614 19 18 19H6Z"/>
      <path d="M12 15V9M12 15L9 12M12 15L15 12"/>
    </svg>
  );
};

export const CpuIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/>
        <line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/>
        <line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/>
        <line x1="20" y1="14" x2="23" y2="14"/>
        <line x1="1" y1="9" x2="4" y2="9"/>
        <line x1="1" y1="14" x2="4" y2="14"/>
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
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <line x1="9" y1="1" x2="9" y2="4"/>
      <line x1="15" y1="1" x2="15" y2="4"/>
      <line x1="9" y1="20" x2="9" y2="23"/>
      <line x1="15" y1="20" x2="15" y2="23"/>
      <line x1="20" y1="9" x2="23" y2="9"/>
      <line x1="20" y1="14" x2="23" y2="14"/>
      <line x1="1" y1="9" x2="4" y2="9"/>
      <line x1="1" y1="14" x2="4" y2="14"/>
    </svg>
  );
};

export const MemoryIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <rect x="4" y="4" width="16" height="16" rx="1"/>
        <line x1="9" y1="4" x2="9" y2="20"/>
        <line x1="15" y1="4" x2="15" y2="20"/>
        <line x1="4" y1="9" x2="20" y2="9"/>
        <line x1="4" y1="15" x2="20" y2="15"/>
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
      <rect x="4" y="4" width="16" height="16" rx="1"/>
      <line x1="9" y1="4" x2="9" y2="20"/>
      <line x1="15" y1="4" x2="15" y2="20"/>
      <line x1="4" y1="9" x2="20" y2="9"/>
      <line x1="4" y1="15" x2="20" y2="15"/>
    </svg>
  );
};

export const HardDriveIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
        <circle cx="18" cy="12" r="1"/>
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
      <rect x="3" y="4" width="18" height="16" rx="2"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
      <circle cx="18" cy="12" r="1"/>
    </svg>
  );
};

export const MonitorIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <rect x="3" y="3" width="18" height="14" rx="2"/>
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
      <rect x="3" y="3" width="18" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
};

export const SmartphoneIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <rect x="6" y="3" width="12" height="18" rx="2"/>
        <circle cx="12" cy="17" r="1"/>
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
      <rect x="6" y="3" width="12" height="18" rx="2"/>
      <circle cx="12" cy="17" r="1"/>
    </svg>
  );
};

export const TabletIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <rect x="4" y="2" width="16" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12" y2="18"/>
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
      <rect x="4" y="2" width="16" height="20" rx="2"/>
      <line x1="12" y1="18" x2="12" y2="18"/>
    </svg>
  );
};

export const LaptopIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M3 6L21 6C22.1046 6 23 6.89543 23 8V16C23 17.1046 22.1046 18 21 18H3C1.89543 18 1 17.1046 1 16V8C1 6.89543 1.89543 6 3 6Z"/>
        <path d="M2 20H22"/>
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
      <path d="M3 6L21 6C22.1046 6 23 6.89543 23 8V16C23 17.1046 22.1046 18 21 18H3C1.89543 18 1 17.1046 1 16V8C1 6.89543 1.89543 6 3 6Z"/>
      <path d="M2 20H22"/>
    </svg>
  );
};

export const KeyboardIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <circle cx="7" cy="10" r="1"/>
        <circle cx="12" cy="10" r="1"/>
        <circle cx="17" cy="10" r="1"/>
        <circle cx="7" cy="14" r="1"/>
        <circle cx="12" cy="14" r="1"/>
        <circle cx="17" cy="14" r="1"/>
        <circle cx="9" cy="18" r="1"/>
        <circle cx="15" cy="18" r="1"/>
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
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <circle cx="7" cy="10" r="1"/>
      <circle cx="12" cy="10" r="1"/>
      <circle cx="17" cy="10" r="1"/>
      <circle cx="7" cy="14" r="1"/>
      <circle cx="12" cy="14" r="1"/>
      <circle cx="17" cy="14" r="1"/>
      <circle cx="9" cy="18" r="1"/>
      <circle cx="15" cy="18" r="1"/>
    </svg>
  );
};


export const MouseIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M12 2C8.13401 2 5 5.13401 5 9V15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15V9C19 5.13401 15.866 2 12 2Z"/>
        <path d="M12 6V12"/>
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
      <path d="M12 2C8.13401 2 5 5.13401 5 9V15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15V9C19 5.13401 15.866 2 12 2Z"/>
      <path d="M12 6V12"/>
    </svg>
  );
};

export const PrinterIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M6 9V2H18V9M6 18H4C2.89543 18 2 17.1046 2 16V11C2 9.89543 2.89543 9 4 9H20C21.1046 9 22 9.89543 22 11V16C22 17.1046 21.1046 18 20 18H18M6 14H18V22H6V14Z"/>
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
      <path d="M6 9V2H18V9M6 18H4C2.89543 18 2 17.1046 2 16V11C2 9.89543 2.89543 9 4 9H20C21.1046 9 22 9.89543 22 11V16C22 17.1046 21.1046 18 20 18H18M6 14H18V22H6V14Z"/>
    </svg>
  );
};

export const RouterIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <rect x="2" y="12" width="20" height="8" rx="2"/>
        <path d="M6 16H7M10 16H11M14 16H15M18 16H19M5 8V12M19 8V12M8 6L12 2L16 6"/>
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
      <rect x="2" y="12" width="20" height="8" rx="2"/>
      <path d="M6 16H7M10 16H11M14 16H15M18 16H19M5 8V12M19 8V12M8 6L12 2L16 6"/>
    </svg>
  );
};

export const WifiIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"/>
        <path d="M8 13C8 13 9.5 11 12 11C14.5 11 16 13 16 13"/>
        <path d="M5 10C5 10 7 7 12 7C17 7 19 10 19 10"/>
        <path d="M2 7C2 7 4 4 12 4C20 4 22 7 22 7"/>
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
      <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"/>
      <path d="M8 13C8 13 9.5 11 12 11C14.5 11 16 13 16 13"/>
      <path d="M5 10C5 10 7 7 12 7C17 7 19 10 19 10"/>
      <path d="M2 7C2 7 4 4 12 4C20 4 22 7 22 7"/>
    </svg>
  );
};

export const BluetoothIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M6 7L18 17L12 22V2L18 7L6 17"/>
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
      <path d="M6 7L18 17L12 22V2L18 7L6 17"/>
    </svg>
  );
};

export const ShieldIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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

export const LockIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"/>
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
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"/>
    </svg>
  );
};

export const UnlockIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7C7 5.34315 8.34315 4 10 4C11.6569 4 13 5.34315 13 7V11"/>
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
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M7 11V7C7 5.34315 8.34315 4 10 4C11.6569 4 13 5.34315 13 7V11"/>
    </svg>
  );
};

export const KeyIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M21 2L19 4M15.5 7.5L19 4M15.5 7.5C14.5 8.5 14.5 10 15.5 11C16.5 12 18 12 19 11C20 10 20 8.5 19 7.5C18 6.5 16.5 6.5 15.5 7.5ZM10 13C7.5 15.5 7.5 19 10 21.5C12.5 24 16 24 18.5 21.5C21 19 21 15.5 18.5 13C16 10.5 12.5 10.5 10 13Z"/>
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
      <path d="M21 2L19 4M15.5 7.5L19 4M15.5 7.5C14.5 8.5 14.5 10 15.5 11C16.5 12 18 12 19 11C20 10 20 8.5 19 7.5C18 6.5 16.5 6.5 15.5 7.5ZM10 13C7.5 15.5 7.5 19 10 21.5C12.5 24 16 24 18.5 21.5C21 19 21 15.5 18.5 13C16 10.5 12.5 10.5 10 13Z"/>
    </svg>
  );
};

export const SearchIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
    </svg>
  );
};

export const FilterIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"/>
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
      <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"/>
    </svg>
  );
};

export const SettingsIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
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
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  );
};

export const BellIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
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
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  );
};

export const AlertIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M12 2L1 21H23L12 2Z"/>
        <path d="M12 9V14M12 17H12.01"/>
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
      <path d="M12 2L1 21H23L12 2Z"/>
      <path d="M12 9V14M12 17H12.01"/>
    </svg>
  );
};

export const InfoIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <line x1="12" y1="16" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12.01" y2="8"/>
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
      <line x1="12" y1="16" x2="12" y2="12"/>
      <line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
  );
};

export const WarningIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M12 9V14M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
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
      <path d="M12 9V14M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
    </svg>
  );
};

export const ErrorIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <line x1="15" y1="9" x2="9" y2="15"/>
        <line x1="9" y1="9" x2="15" y2="15"/>
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
      <line x1="15" y1="9" x2="9" y2="15"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
    </svg>
  );
};

export const SuccessIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
};

export const RefreshIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M23 4V10H17M1 20V14H7"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
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
      <path d="M23 4V10H17M1 20V14H7"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  );
};

export const DownloadIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
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
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
};


