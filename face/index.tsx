// FaceIcons.tsx
import React from 'react';
import { IconProps } from '..';

export const HappyFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <circle cx="8" cy="10" r="1" fill={filled ? 'white' : color} />
      <circle cx="16" cy="10" r="1" fill={filled ? 'white' : color} />
      <path d="M8 16c1.5 1 3.5 1 5 0" strokeLinecap="round" />
    </svg>
  );
};

export const SadFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <circle cx="8" cy="10" r="1" fill={filled ? 'white' : color} />
      <circle cx="16" cy="10" r="1" fill={filled ? 'white' : color} />
      <path d="M8 16c2 2 4 2 8 0" strokeLinecap="round" />
    </svg>
  );
};

export const NeutralFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <circle cx="8" cy="10" r="1" fill={filled ? 'white' : color} />
      <circle cx="16" cy="10" r="1" fill={filled ? 'white' : color} />
      <line x1="8" y1="16" x2="16" y2="16" strokeLinecap="round" />
    </svg>
  );
};

export const SmilingFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <circle cx="8" cy="10" r="1" fill={filled ? 'white' : color} />
      <circle cx="16" cy="10" r="1" fill={filled ? 'white' : color} />
      <path d="M8 14c1.5 1 3.5 1 5 0" strokeLinecap="round" />
    </svg>
  );
};

export const LaughingFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <circle cx="8" cy="9" r="1" fill={filled ? 'white' : color} />
      <circle cx="16" cy="9" r="1" fill={filled ? 'white' : color} />
      <path d="M8 15c2 3 6 3 8 0" strokeLinecap="round" />
      <path d="M9 12h6" strokeLinecap="round" />
    </svg>
  );
};

export const AngryFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <path d="M8 9l-2-1" strokeLinecap="round" />
      <path d="M16 9l2-1" strokeLinecap="round" />
      <circle cx="8" cy="10" r="1" fill={filled ? 'white' : color} />
      <circle cx="16" cy="10" r="1" fill={filled ? 'white' : color} />
      <path d="M8 17c2-1 4-1 6 0" strokeLinecap="round" />
    </svg>
  );
};

export const SurprisedFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <circle cx="12" cy="15" r="2" fill={filled ? 'white' : 'none'} />
      <circle cx="8" cy="10" r="2" fill={filled ? 'white' : color} />
      <circle cx="16" cy="10" r="2" fill={filled ? 'white' : color} />
    </svg>
  );
};

export const WinkingFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <circle cx="16" cy="10" r="1" fill={filled ? 'white' : color} />
      <path d="M8 10c0.5 0 1-0.5 1-1" strokeLinecap="round" />
      <path d="M8 14c1.5 1 3.5 1 5 0" strokeLinecap="round" />
    </svg>
  );
};

export const SleepingFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <path d="M8 10h0" strokeLinecap="round" />
      <path d="M16 10h0" strokeLinecap="round" />
      <path d="M8 16c2 1 4 1 6 0" strokeLinecap="round" />
      <path d="M6 6l12 6" strokeLinecap="round" />
    </svg>
  );
};

export const ThinkingFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <circle cx="9" cy="10" r="1" fill={filled ? 'white' : color} />
      <circle cx="15" cy="10" r="1" fill={filled ? 'white' : color} />
      <path d="M8 15h8" strokeLinecap="round" />
      <circle cx="18" cy="17" r="0.5" fill="none" />
    </svg>
  );
};

export const SickFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <circle cx="8" cy="10" r="1" fill={filled ? 'white' : color} />
      <circle cx="16" cy="10" r="1" fill={filled ? 'white' : color} />
      <path d="M8 16c2 1 4 1 6 0" strokeLinecap="round" />
      <path d="M10 7l-2 2" strokeLinecap="round" />
      <path d="M14 7l2 2" strokeLinecap="round" />
    </svg>
  );
};

export const CoolFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <circle cx="9" cy="10" r="1" fill={filled ? 'white' : color} />
      <circle cx="15" cy="10" r="1" fill={filled ? 'white' : color} />
      <path d="M8 14c2 1 4 1 6 0" strokeLinecap="round" />
      <circle cx="18" cy="7" r="1" fill="none" />
    </svg>
  );
};

export const WorriedFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <circle cx="8" cy="11" r="1" fill={filled ? 'white' : color} />
      <circle cx="16" cy="11" r="1" fill={filled ? 'white' : color} />
      <path d="M8 16c2.5 1.5 5.5 1.5 8 0" strokeLinecap="round" />
      <path d="M12 8v2" strokeLinecap="round" />
    </svg>
  );
};

export const ExpressionlessFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <line x1="8" y1="10" x2="10" y2="10" strokeLinecap="round" />
      <line x1="14" y1="10" x2="16" y2="10" strokeLinecap="round" />
      <line x1="8" y1="16" x2="16" y2="16" strokeLinecap="round" />
    </svg>
  );
};

export const KissingFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <circle cx="8" cy="10" r="1" fill={filled ? 'white' : color} />
      <circle cx="16" cy="10" r="1" fill={filled ? 'white' : color} />
      <path d="M8 14c1 1 3 1 4 0" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1" fill={filled ? 'white' : color} />
    </svg>
  );
};



export const SmirkingFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <circle cx="8" cy="10" r="1" fill={filled ? 'white' : color} />
      <path d="M16 10c0.5 0 1-0.5 1-1" strokeLinecap="round" />
      <path d="M8 15c1.5 1 3.5 1 5 0" strokeLinecap="round" />
      <path d="M14 8l2 2" strokeLinecap="round" />
    </svg>
  );
};

export const SunglassesFace: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="10" fill={backgroundColor} />
      <rect x="7" y="9" width="3" height="2" rx="1" fill={filled ? 'white' : color} />
      <rect x="14" y="9" width="3" height="2" rx="1" fill={filled ? 'white' : color} />
      <path d="M7 11h10" strokeLinecap="round" />
      <path d="M8 14c1.5 1 3.5 1 5 0" strokeLinecap="round" />
    </svg>
  );
};
