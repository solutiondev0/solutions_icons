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

// AI Brain Icon
export const BrainAI: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M12 4a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2z"/>
            <path d="M8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"/>
            <path d="M6 12h12"/>
            <path d="M9 16h6"/>
        </svg>
    );
};

// Neural Network Icon
export const NeuralNetwork: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="6" r="2"/>
            <circle cx="6" cy="12" r="2"/>
            <circle cx="18" cy="12" r="2"/>
            <circle cx="12" cy="18" r="2"/>
            <path d="m8 8 2 2M16 8l-2 2M8 16l2-2M16 16l-2-2"/>
        </svg>
    );
};

// Robot Icon
export const Robot: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <rect x="3" y="8" width="18" height="12" rx="2"/>
            <circle cx="9" cy="14" r="1"/>
            <circle cx="15" cy="14" r="1"/>
            <path d="M12 8V4"/>
            <path d="M8 4h8"/>
        </svg>
    );
};

// AI Chip Icon
export const AIChip: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <path d="M9 4v16"/>
            <path d="M15 4v16"/>
            <path d="M4 9h16"/>
            <path d="M4 15h16"/>
        </svg>
    );
};

// Machine Learning Icon
export const MachineLearning: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M12 20l3-3 3 3"/>
            <path d="M12 4l-3 3-3-3"/>
            <path d="M20 12l-3 3-3-3"/>
            <path d="M4 12l3-3 3 3"/>
            <circle cx="12" cy="12" r="2"/>
        </svg>
    );
};

// Data Analysis Icon
export const DataAnalysis: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
            <path d="M7 14l4-4 4 4 4-4"/>
            <path d="M7 10l4 4 4-4"/>
        </svg>
    );
};

// AI Assistant Icon
export const AIAssistant: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="9" r="1"/>
            <path d="M12 13v3"/>
            <path d="M15 16H9"/>
        </svg>
    );
};

// Deep Learning Icon
export const DeepLearning: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M3 6h18"/>
            <path d="M3 12h18"/>
            <path d="M3 18h18"/>
            <circle cx="6" cy="6" r="1"/>
            <circle cx="12" cy="12" r="1"/>
            <circle cx="18" cy="18" r="1"/>
        </svg>
    );
};

// AI Vision Icon
export const AIVision: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 19c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7z"/>
            <path d="M12 5V3"/>
            <path d="M12 21v-2"/>
            <path d="M3 12h2"/>
            <path d="M19 12h2"/>
        </svg>
    );
};

// Natural Language Icon
export const NaturalLanguage: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M8 8h8"/>
            <path d="M8 12h6"/>
            <path d="M8 16h4"/>
            <rect x="4" y="4" width="16" height="16" rx="2"/>
        </svg>
    );
};

// AI Model Icon
export const AIModel: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="m14 8-4 4 4 4"/>
            <path d="M18 12H6"/>
            <circle cx="12" cy="12" r="10"/>
        </svg>
    );
};

// Algorithm Icon
export const Algorithm: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M8 6h8"/>
            <path d="M6 12h12"/>
            <path d="M10 18h4"/>
            <circle cx="6" cy="6" r="2"/>
            <circle cx="18" cy="12" r="2"/>
            <circle cx="12" cy="18" r="2"/>
        </svg>
    );
};

// AI Training Icon
export const AITraining: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="m12 4 8 4-8 4-8-4 8-4z"/>
            <path d="m20 8-8 4"/>
            <path d="m4 8 8 4"/>
            <path d="m12 16 8-4"/>
            <path d="m12 12 8-4"/>
        </svg>
    );
};

// Predictive Analytics Icon
export const PredictiveAnalytics: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M3 12h4l3 9 4-18 3 9h4"/>
            <circle cx="12" cy="12" r="2"/>
        </svg>
    );
};

// AI Security Icon
export const AISecurity: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="m9 12 2 2 4-4"/>
        </svg>
    );
};

// Computer Vision Icon
export const ComputerVision: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <rect x="2" y="6" width="20" height="12" rx="2"/>
            <circle cx="12" cy="12" r="3"/>
            <path d="M6 6l3-3"/>
            <path d="M18 6l-3-3"/>
        </svg>
    );
};

// AI Innovation Icon
export const AIInnovation: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z"/>
        </svg>
    );
};

// Neural Connection Icon
export const NeuralConnection: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="7" cy="7" r="2"/>
            <circle cx="17" cy="7" r="2"/>
            <circle cx="7" cy="17" r="2"/>
            <circle cx="17" cy="17" r="2"/>
            <path d="M7 7h10M7 17h10M17 7v10M7 7v10"/>
        </svg>
    );
};

// AI Processing Icon
export const AIProcessing: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
        </svg>
    );
};

// Data Mining Icon
export const DataMining: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M6 3v18"/>
            <path d="M18 3v18"/>
            <path d="M3 6h18"/>
            <path d="M3 18h18"/>
            <circle cx="12" cy="12" r="2"/>
        </svg>
    );
};

// AI Recognition Icon
export const AIRecognition: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M10 10h4v4h-4z"/>
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <path d="M8 16l2-2 2 2"/>
            <path d="M14 8l-2 2-2-2"/>
        </svg>
    );
};

// AI Optimization Icon
export const AIOptimization: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="m3 16 4-4-4-4"/>
            <path d="m21 8-4 4 4 4"/>
            <path d="M11 12h6"/>
            <circle cx="12" cy="12" r="10"/>
        </svg>
    );
};

// AI Pattern Icon
export const AIPattern: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M4 4h4v4H4z"/>
            <path d="M16 4h4v4h-4z"/>
            <path d="M4 16h4v4H4z"/>
            <path d="M16 16h4v4h-4z"/>
            <circle cx="10" cy="10" r="2"/>
            <circle cx="14" cy="14" r="2"/>
        </svg>
    );
};

// AI Decision Icon
export const AIDecision: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="m9 18 6-6-6-6"/>
            <circle cx="12" cy="12" r="10"/>
        </svg>
    );
};

// AI Automation Icon
export const AIAutomation: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M12 6v12"/>
            <path d="M6 12h12"/>
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="2"/>
        </svg>
    );
};

// AI Knowledge Icon
export const AIKnowledge: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
    );
};

// AI Intelligence Icon
export const AIIntelligence: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="m12 4 3 3"/>
            <path d="m12 20-3-3"/>
            <path d="m4 12 3-3"/>
            <path d="m20 12-3 3"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    );
};

// AI Cluster Icon
export const AICluster: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="8" cy="8" r="2"/>
            <circle cx="16" cy="8" r="2"/>
            <circle cx="8" cy="16" r="2"/>
            <circle cx="16" cy="16" r="2"/>
            <path d="M8 8h8M8 16h8M16 8v8M8 8v8"/>
        </svg>
    );
};

// AI Signal Icon
export const AISignal: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M3 21h4"/>
            <path d="M7 17h4"/>
            <path d="M11 13h4"/>
            <path d="M15 9h4"/>
            <path d="M19 5h4"/>
        </svg>
    );
};

// AI Network Icon
export const AINetwork: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="6" r="2"/>
            <circle cx="6" cy="12" r="2"/>
            <circle cx="18" cy="12" r="2"/>
            <circle cx="12" cy="18" r="2"/>
            <path d="M12 8v8M8 12h8"/>
        </svg>
    );
};

// AI Learning Icon
export const AILearning: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="m12 2 3 3"/>
            <path d="m12 22-3-3"/>
            <path d="m22 12-3 3"/>
            <path d="m2 12 3-3"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    );
};

// AI Pattern Recognition Icon
export const AIPatternRecognition: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M4 4h4v4H4z"/>
            <path d="M16 4h4v4h-4z"/>
            <path d="M4 16h4v4H4z"/>
            <path d="M16 16h4v4h-4z"/>
            <path d="M10 10h4v4h-4z"/>
        </svg>
    );
};

// AI Reasoning Icon
export const AIReasoning: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="m12 8-4 4 4 4"/>
            <path d="m16 12H8"/>
            <circle cx="12" cy="12" r="10"/>
        </svg>
    );
};

// AI Prediction Icon
export const AIPrediction: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M12 2v20"/>
            <path d="M2 12h20"/>
            <circle cx="12" cy="12" r="4"/>
            <path d="m16 8-4 4-4-4"/>
        </svg>
    );
};

// AI Classification Icon
export const AIClassification: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <path d="M9 9h6v6H9z"/>
            <path d="M4 12h16"/>
            <path d="M12 4v16"/>
        </svg>
    );
};

// AI Generation Icon
export const AIGeneration: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M12 2v4"/>
            <path d="M12 18v4"/>
            <path d="M4 12h4"/>
            <path d="M16 12h4"/>
            <circle cx="12" cy="12" r="4"/>
        </svg>
    );
};

// AI Understanding Icon
export const AIUnderstanding: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12h8"/>
            <path d="M12 8v8"/>
            <circle cx="12" cy="12" r="2"/>
        </svg>
    );
};

// AI Adaptation Icon
export const AIAdaptation: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M12 2v20"/>
            <path d="M22 12H2"/>
            <path d="m6 6 12 12"/>
            <path d="m18 6-12 12"/>
        </svg>
    );
};

// AI Consciousness Icon
export const AIConsciousness: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="6"/>
            <circle cx="12" cy="12" r="2"/>
        </svg>
    );
};

// AI Perception Icon
export const AIPerception: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10"/>
            <path d="m8 8 8 8"/>
            <path d="m16 8-8 8"/>
        </svg>
    );
};

// AI Logic Icon
export const AILogic: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M8 6h8"/>
            <path d="M6 12h12"/>
            <path d="M10 18h4"/>
            <path d="M12 6v12"/>
        </svg>
    );
};

// AI Memory Icon
export const AIMemory: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <path d="M8 8h8v8H8z"/>
            <path d="M12 4v16"/>
        </svg>
    );
};

// AI Processing Power Icon
export const AIProcessingPower: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M12 2v4"/>
            <path d="M12 18v4"/>
            <path d="M4 12h4"/>
            <path d="M16 12h4"/>
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 8v8"/>
        </svg>
    );
};

// AI Neural Path Icon
export const AINeuralPath: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="6" cy="6" r="2"/>
            <circle cx="18" cy="6" r="2"/>
            <circle cx="6" cy="18" r="2"/>
            <circle cx="18" cy="18" r="2"/>
            <path d="M6 6h12M6 18h12M18 6v12M6 6v12"/>
        </svg>
    );
};

// AI Data Flow Icon
export const AIDataFlow: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M12 4v16"/>
            <path d="M4 12h16"/>
            <path d="m8 8 8 8"/>
            <path d="m16 8-8 8"/>
        </svg>
    );
};

// AI Cognitive Icon
export const AICognitive: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v8"/>
            <path d="M8 12h8"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    );
};

// AI Synapse Icon
export const AISynapse: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="8" cy="8" r="2"/>
            <circle cx="16" cy="16" r="2"/>
            <path d="M8 8h8v8"/>
            <circle cx="12" cy="12" r="1"/>
        </svg>
    );
};

// AI Thought Icon
export const AIThought: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M8 16c1-2 3-3 4-3s3 1 4 3"/>
            <path d="M9 9h.01"/>
            <path d="M15 9h.01"/>
            <circle cx="12" cy="12" r="10"/>
        </svg>
    );
};

// AI Decision Tree Icon
export const AIDecisionTree: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M12 4v16"/>
            <path d="M8 8h8"/>
            <path d="M6 12h12"/>
            <path d="M10 16h4"/>
            <circle cx="12" cy="4" r="1"/>
            <circle cx="8" cy="8" r="1"/>
            <circle cx="16" cy="8" r="1"/>
            <circle cx="6" cy="12" r="1"/>
            <circle cx="18" cy="12" r="1"/>
            <circle cx="10" cy="16" r="1"/>
            <circle cx="14" cy="16" r="1"/>
        </svg>
    );
};

// AI Neural Layer Icon
export const AINeuralLayer: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin={"round"}
            className={className}
            onClick={onClick}
        >
            <path d="M3 6h18"/>
            <path d="M3 12h18"/>
            <path d="M3 18h18"/>
            <circle cx="6" cy="6" r="1"/>
            <circle cx="12" cy="12" r="1"/>
            <circle cx="18" cy="18" r="1"/>
            <circle cx="6" cy="18" r="1"/>
            <circle cx="18" cy="6" r="1"/>
        </svg>
    );
};

// AI Intelligence Core Icon
export const AIIntelligenceCore: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="8"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="12" cy="12" r="1"/>
            <path d="M12 4v4"/>
            <path d="M12 16v4"/>
            <path d="M4 12h4"/>
            <path d="M16 12h4"/>
        </svg>
    );
};

// AI Pattern Matrix Icon
export const AIPatternMatrix: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <rect x="4" y="4" width="16" height="16" rx="1"/>
            <path d="M8 8h8v8H8z"/>
            <path d="M12 4v16"/>
            <path d="M4 12h16"/>
        </svg>
    );
};

// AI Neural Web Icon
export const AINeuralWeb: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="4" r="2"/>
            <circle cx="4" cy="12" r="2"/>
            <circle cx="20" cy="12" r="2"/>
            <circle cx="12" cy="20" r="2"/>
            <path d="M12 6v12M6 12h12M8 8l8 8M16 8l-8 8"/>
        </svg>
    );
};

// AI Cognitive Process Icon
export const AICognitiveProcess: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v12"/>
            <path d="M6 12h12"/>
            <path d="m8 8 8 8"/>
            <path d="m16 8-8 8"/>
        </svg>
    );
};

// AI Neural Network 3D Icon
export const AINeuralNetwork3D: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <circle cx="8" cy="8" r="2"/>
            <circle cx="16" cy="8" r="2"/>
            <circle cx="8" cy="16" r="2"/>
            <circle cx="16" cy="16" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <path d="M8 8h8M8 16h8M16 8v8M8 8v8M12 8v8M8 12h8"/>
        </svg>
    );
};

// AI Brain Circuit Icon
export const AIBrainCircuit: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onClick={onClick}
        >
            <path d="M12 4a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2z"/>
            <path d="M8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"/>
            <path d="M6 12h12"/>
            <path d="M9 16h6"/>
            <path d="M8 8h8v8H8z"/>
        </svg>
    );
};

