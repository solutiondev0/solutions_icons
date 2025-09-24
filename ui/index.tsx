import React from 'react';
import { IconProps } from '..';

// Button Icons
export const ButtonIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="3" y="6" width="18" height="12" rx="3"/>
                <rect x="7" y="10" width="10" height="4" rx="1" fill="white"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <rect x="3" y="6" width="18" height="12" rx="3"/>
            <rect x="7" y="10" width="10" height="4" rx="1"/>
        </svg>
    );
};

export const SubmitButtonIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="3" y="6" width="18" height="12" rx="3"/>
                <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" fill="none"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <rect x="3" y="6" width="18" height="12" rx="3"/>
            <path d="M9 12L11 14L15 10" strokeWidth={strokeWidth}/>
        </svg>
    );
};

// Card Icons
export const CardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <rect x="5" y="8" width="14" height="3" fill="white"/>
                <rect x="5" y="13" width="8" height="2" fill="white"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <rect x="3" y="5" width="18" height="14" rx="2"/>
            <line x1="5" y1="8" x2="19" y2="8"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
            <line x1="5" y1="16" x2="13" y2="16"/>
        </svg>
    );
};

export const CardStackIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="3" y="4" width="18" height="14" rx="2"/>
                <rect x="5" y="8" width="18" height="14" rx="2" fill="currentColor" fillOpacity="0.7" transform="translate(0 -2)"/>
                <rect x="7" y="12" width="18" height="14" rx="2" fill="currentColor" fillOpacity="0.4" transform="translate(0 -4)"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <rect x="3" y="4" width="18" height="14" rx="2"/>
            <rect x="5" y="6" width="18" height="14" rx="2" transform="translate(0 -2)"/>
            <rect x="7" y="8" width="18" height="14" rx="2" transform="translate(0 -4)"/>
        </svg>
    );
};

// Carousel Icons
export const CarouselIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="2" y="5" width="20" height="14" rx="2"/>
                <circle cx="7" cy="17" r="1" fill="white"/>
                <circle cx="12" cy="17" r="1" fill="white"/>
                <circle cx="17" cy="17" r="1" fill="white"/>
                <rect x="5" y="8" width="14" height="6" rx="1" fill="white" fillOpacity="0.8"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <rect x="2" y="5" width="20" height="14" rx="2"/>
            <circle cx="7" cy="17" r="1"/>
            <circle cx="12" cy="17" r="1"/>
            <circle cx="17" cy="17" r="1"/>
            <rect x="5" y="8" width="14" height="6" rx="1"/>
        </svg>
    );
};

export const SliderIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="3" y="10" width="18" height="4" rx="2"/>
                <circle cx="8" cy="12" r="2" fill="white"/>
                <circle cx="16" cy="12" r="2" fill="white"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <line x1="4" y1="12" x2="20" y2="12"/>
            <circle cx="8" cy="12" r="2"/>
            <circle cx="16" cy="12" r="2"/>
        </svg>
    );
};

// Navigation Icons
export const HamburgerMenuIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="3" y="5" width="18" height="2" rx="1"/>
                <rect x="3" y="11" width="18" height="2" rx="1"/>
                <rect x="3" y="17" width="18" height="2" rx="1"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
    );
};

export const BreadcrumbIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <path d="M10 7L15 12L10 17" stroke="white" strokeWidth="2" fill="none"/>
                <circle cx="7" cy="12" r="1" fill="white"/>
                <circle cx="12" cy="12" r="1" fill="white"/>
                <circle cx="17" cy="12" r="1" fill="white"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <path d="M10 7L15 12L10 17"/>
            <circle cx="7" cy="12" r="1"/>
            <circle cx="12" cy="12" r="1"/>
            <circle cx="17" cy="12" r="1"/>
        </svg>
    );
};

// Form Icons
export const InputFieldIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="3" y="7" width="18" height="10" rx="2"/>
                <rect x="6" y="10" width="12" height="1" fill="white"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <rect x="3" y="7" width="18" height="10" rx="2"/>
            <line x1="6" y1="11" x2="18" y2="11"/>
        </svg>
    );
};

export const CheckboxIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="4" y="6" width="16" height="12" rx="2"/>
                <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" fill="none"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <rect x="4" y="6" width="16" height="12" rx="2"/>
            <path d="M9 12L11 14L15 10" strokeWidth={strokeWidth}/>
        </svg>
    );
};

export const RadioButtonIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <circle cx="12" cy="12" r="8"/>
                <circle cx="12" cy="12" r="3" fill="white"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <circle cx="12" cy="12" r="8"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    );
};

export const SelectDropdownIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="3" y="6" width="18" height="12" rx="2"/>
                <path d="M8 9L12 13L16 9" fill="white"/>
                <line x1="8" y1="12" x2="16" y2="12" stroke="white" strokeWidth="1"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <rect x="3" y="6" width="18" height="12" rx="2"/>
            <path d="M8 9L12 13L16 9"/>
            <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
    );
};

// Layout Icons
export const GridIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="3" y="3" width="7" height="7" rx="1"/>
                <rect x="13" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="13" width="7" height="7" rx="1"/>
                <rect x="13" y="13" width="7" height="7" rx="1"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="13" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="13" width="7" height="7" rx="1"/>
            <rect x="13" y="13" width="7" height="7" rx="1"/>
        </svg>
    );
};

export const SidebarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="3" y="3" width="6" height="18" rx="1"/>
                <rect x="11" y="3" width="10" height="18" rx="1" fill="currentColor" fillOpacity="0.7"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <rect x="3" y="3" width="6" height="18" rx="1"/>
            <rect x="11" y="3" width="10" height="18" rx="1"/>
        </svg>
    );
};

export const ModalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="4" y="4" width="16" height="16" rx="2"/>
                <rect x="7" y="7" width="10" height="8" rx="1" fill="white"/>
                <circle cx="17" cy="7" r="1.5" fill="white"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <rect x="7" y="7" width="10" height="8" rx="1"/>
            <circle cx="17" cy="7" r="1.5"/>
        </svg>
    );
};

// Feedback Icons
export const SpinnerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <path d="M12 2V6" strokeLinecap="round"/>
            <path d="M12 18V22" strokeLinecap="round"/>
            <path d="M4.93 4.93L7.76 7.76" strokeLinecap="round"/>
            <path d="M16.24 16.24L19.07 19.07" strokeLinecap="round"/>
            <path d="M2 12H6" strokeLinecap="round"/>
            <path d="M18 12H22" strokeLinecap="round"/>
            <path d="M4.93 19.07L7.76 16.24" strokeLinecap="round"/>
            <path d="M16.24 7.76L19.07 4.93" strokeLinecap="round"/>
        </svg>
    );
};

export const ProgressBarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="3" y="10" width="18" height="4" rx="2"/>
                <rect x="3" y="10" width="12" height="4" rx="2" fill="white"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <rect x="3" y="10" width="18" height="4" rx="2"/>
            <rect x="3" y="10" width="12" height="4" rx="2" fill={color} fillOpacity="0.3"/>
        </svg>
    );
};

export const TooltipIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
                <circle cx="12" cy="17" r="0.5" fill="white" stroke="white"/>
                <path d="M12 14V7" stroke="white" strokeWidth="2"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="17" r="0.5"/>
            <path d="M12 14V8"/>
        </svg>
    );
};

// Data Display Icons
export const TableIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="3" y="3" width="18" height="18" rx="1"/>
                <line x1="3" y1="9" x2="21" y2="9" stroke="white" strokeWidth="1"/>
                <line x1="3" y1="15" x2="21" y2="15" stroke="white" strokeWidth="1"/>
                <line x1="9" y1="3" x2="9" y2="21" stroke="white" strokeWidth="1"/>
                <line x1="15" y1="3" x2="15" y2="21" stroke="white" strokeWidth="1"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <rect x="3" y="3" width="18" height="18" rx="1"/>
            <line x1="3" y1="9" x2="21" y2="9"/>
            <line x1="3" y1="15" x2="21" y2="15"/>
            <line x1="9" y1="3" x2="9" y2="21"/>
            <line x1="15" y1="3" x2="15" y2="21"/>
        </svg>
    );
};

export const ListIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="3" y="5" width="18" height="2" rx="1"/>
                <rect x="3" y="11" width="18" height="2" rx="1"/>
                <rect x="3" y="17" width="18" height="2" rx="1"/>
                <circle cx="7" cy="6" r="1" fill="white"/>
                <circle cx="7" cy="12" r="1" fill="white"/>
                <circle cx="7" cy="18" r="1" fill="white"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
            <circle cx="7" cy="6" r="1"/>
            <circle cx="7" cy="12" r="1"/>
            <circle cx="7" cy="18" r="1"/>
        </svg>
    );
};

export const AccordionIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="3" y="4" width="18" height="4" rx="1"/>
                <rect x="3" y="10" width="18" height="10" rx="1"/>
                <path d="M8 6L16 6" stroke="white" strokeWidth="2"/>
                <path d="M8 12L16 12" stroke="white" strokeWidth="2"/>
                <path d="M8 16L12 16" stroke="white" strokeWidth="2"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <rect x="3" y="4" width="18" height="4" rx="1"/>
            <rect x="3" y="10" width="18" height="10" rx="1"/>
            <line x1="8" y1="6" x2="16" y2="6"/>
            <line x1="8" y1="12" x2="16" y2="12"/>
            <line x1="8" y1="16" x2="12" y2="16"/>
        </svg>
    );
};

// More UI Component Icons...

export const ToggleSwitchIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="3" y="8" width="18" height="8" rx="4"/>
                <circle cx="15" cy="12" r="3" fill="white"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <rect x="3" y="8" width="18" height="8" rx="4"/>
            <circle cx="15" cy="12" r="3"/>
        </svg>
    );
};

export const PaginationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <circle cx="6" cy="12" r="2" fill="white"/>
                <circle cx="12" cy="12" r="2" fill="white"/>
                <circle cx="18" cy="12" r="2" fill="white"/>
                <path d="M10 12L14 12" stroke="white" strokeWidth="2"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <circle cx="6" cy="12" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <circle cx="18" cy="12" r="2"/>
            <line x1="10" y1="12" x2="14" y2="12"/>
        </svg>
    );
};

export const BadgeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <circle cx="12" cy="12" r="8"/>
                <circle cx="12" cy="12" r="3" fill="white"/>
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8">1</text>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <circle cx="12" cy="12" r="8"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    );
};

export const AvatarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <circle cx="12" cy="8" r="4"/>
                <path d="M5 20C5 16.134 8.13401 13 12 13C15.866 13 19 16.134 19 20" fill="white"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <circle cx="12" cy="8" r="4"/>
            <path d="M5 20C5 16.134 8.13401 13 12 13C15.866 13 19 16.134 19 20"/>
        </svg>
    );
};

export const ChipIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="5" y="5" width="14" height="14" rx="3"/>
                <text x="12" y="14" textAnchor="middle" fill="white" fontSize="6">Tag</text>
                <circle cx="8" cy="8" r="1" fill="white"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <rect x="5" y="5" width="14" height="14" rx="3"/>
            <circle cx="8" cy="8" r="1"/>
        </svg>
    );
};

export const DividerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, onClick, strokeWidth = 1.5, filled }) => {
    if (filled) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} onClick={onClick}>
                <rect x="3" y="11" width="18" height="2" rx="1"/>
            </svg>
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} onClick={onClick} strokeWidth={strokeWidth}>
            <line x1="3" y1="12" x2="21" y2="12"/>
        </svg>
    );
};

