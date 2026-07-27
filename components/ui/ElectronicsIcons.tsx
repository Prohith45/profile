import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
  glow?: boolean;
}

export const ResistorIcon: React.FC<IconProps> = ({ className = '', size = 24, color = '#ff9d00', glow = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${glow ? 'drop-shadow-[0_0_8px_#ff9d00]' : ''}`}>
    <path d="M2 12H6L7.5 7L10.5 17L13.5 7L16.5 17L18 12H22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="7" y="10" width="1.5" height="4" fill="#ef4444" />
    <rect x="11" y="10" width="1.5" height="4" fill="#3b82f6" />
    <rect x="15" y="10" width="1.5" height="4" fill="#eab308" />
  </svg>
);

export const CapacitorIcon: React.FC<IconProps> = ({ className = '', size = 24, color = '#00f3ff', glow = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${glow ? 'drop-shadow-[0_0_8px_#00f3ff]' : ''}`}>
    <path d="M2 12H9M15 12H22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 5V19" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M15 5V19" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const IcChipIcon: React.FC<IconProps> = ({ className = '', size = 24, color = '#0070F3', glow = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${glow ? 'drop-shadow-[0_0_10px_#0070F3]' : ''}`}>
    <rect x="5" y="5" width="14" height="14" rx="2" fill="#0B0B0B" stroke={color} strokeWidth="2" />
    <path d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5" fill="#050505" stroke={color} strokeWidth="1.5" />
    {/* IC Pins */}
    <path d="M2 8H5M2 12H5M2 16H5M19 8H22M19 12H22M19 16H22M8 2V5M16 2V5M8 19V22M16 19V22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="7.5" cy="8" r="1" fill={color} />
  </svg>
);

export const TransistorIcon: React.FC<IconProps> = ({ className = '', size = 24, color = '#00f3ff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" />
    <path d="M7 12H11M11 7V17M11 9.5L16 6.5M11 14.5L16 17.5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <polygon points="15,16 16.5,18 13.5,17.5" fill={color} />
  </svg>
);

export const OscilloscopeWaveIcon: React.FC<IconProps> = ({ className = '', size = 24, color = '#00f3ff', glow = true }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${className} ${glow ? 'drop-shadow-[0_0_10px_#00f3ff]' : ''}`}>
    <rect x="2" y="3" width="20" height="18" rx="3" fill="#050505" stroke={color} strokeWidth="1.5" />
    <path d="M4 12H20M12 5V19" stroke={color} strokeWidth="0.5" strokeDasharray="1 1" opacity="0.4" />
    <path d="M4 12C6 6 8 6 10 12C12 18 14 18 16 12C18 6 20 12 20 12" stroke="#00f3ff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const SolderingIronIcon: React.FC<IconProps> = ({ className = '', size = 24, color = '#ff9d00' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 21L8 16" stroke="#4b5563" strokeWidth="3" strokeLinecap="round"/>
    <path d="M8 16L15 9" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M15 9L20 4L22 2" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    {/* Spark */}
    <circle cx="21" cy="3" r="1.5" fill="#facc15" className="animate-ping" />
  </svg>
);

export const MicrocontrollerBoardIcon: React.FC<IconProps> = ({ className = '', size = 24, color = '#0070F3' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="2" width="18" height="20" rx="2" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
    <rect x="7" y="6" width="10" height="8" rx="1" fill="#0f172a" stroke={color} strokeWidth="1" />
    <circle cx="6" cy="18" r="1.5" fill="#ef4444" />
    <circle cx="10" cy="18" r="1.5" fill="#3b82f6" />
    <circle cx="14" cy="18" r="1.5" fill="#10b981" />
    <path d="M4 4H5M4 8H5M4 12H5M19 4H20M19 8H20M19 12H20" stroke="#f59e0b" strokeWidth="2" />
  </svg>
);

export const PcbTraceIcon: React.FC<IconProps> = ({ className = '', size = 24, color = '#00f3ff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M2 6H8L12 10V18H22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="2" cy="6" r="2" fill={color} />
    <circle cx="12" cy="10" r="1.5" fill={color} />
    <circle cx="22" cy="18" r="2" fill={color} />
    <path d="M14 4H18L21 7V12" stroke="#ff9d00" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="14" cy="4" r="1.5" fill="#ff9d00" />
  </svg>
);

export const MultimeterIcon: React.FC<IconProps> = ({ className = '', size = 24, color = '#ef4444' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="2" width="16" height="20" rx="3" fill="#1f2937" stroke={color} strokeWidth="1.5" />
    <rect x="7" y="5" width="10" height="5" rx="1" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
    <text x="8.5" y="8.8" fill="#10b981" fontSize="3.5" fontFamily="monospace" fontWeight="bold">24.0V</text>
    <circle cx="12" cy="14" r="3" fill="#111827" stroke="#6b7280" strokeWidth="1.5" />
    <path d="M12 14L13.5 12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8" cy="19" r="1" fill="#ef4444" />
    <circle cx="12" cy="19" r="1" fill="#111827" />
    <circle cx="16" cy="19" r="1" fill="#3b82f6" />
  </svg>
);
