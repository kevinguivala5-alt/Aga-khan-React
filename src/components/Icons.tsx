// Minimal outline-based icon system for AKA Maputo
// 
// Design Specifications:
// - Stroke-based (outline only, no fills)
// - Consistent stroke width: 1.8px
// - Rounded edges: stroke-linecap and stroke-linejoin="round"
// - Simple & geometric: basic shapes only
// - Monochromatic: single color, inherits from CSS
// - Consistent visual weight across all icons
// - Friendly, modern look suitable for education brands

interface IconProps {
  className?: string
  style?: React.CSSProperties
}

const SVGIcon = ({ 
  viewBox = "0 0 24 24", 
  children, 
  className, 
  style 
}: IconProps & { viewBox?: string; children: React.ReactNode }) => (
  <svg 
    viewBox={viewBox} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    style={style}
  >
    {children}
  </svg>
)

/* ═══════════════════════════════════════════
   PHILOSOPHY & VALUES ICONS
   ═══════════════════════════════════════════ */

export const InquiryIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 8v4m0 3v1"/>
  </SVGIcon>
)

export const LearningIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <path d="M12 2l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V6l7-4z"/>
    <path d="M9 13l3 3 5-5"/>
  </SVGIcon>
)

export const MindednessIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 3v18"/>
    <path d="M3 12h18"/>
  </SVGIcon>
)

export const PluralismIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <circle cx="12" cy="7" r="2.5"/>
    <path d="M7 18c0-2.2 2-4 5-4s5 1.8 5 4"/>
    <path d="M5 14c0-1 1-2 3-2"/>
    <path d="M19 14c0-1-1-2-3-2"/>
  </SVGIcon>
)

export const ServiceIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <path d="M20 9c0-4-3-7-8-7-5 0-8 3-8 7 0 2 1 4 3 5l-2 4 5-3c1 0 2 0 3 0 5 0 8-2 8-6z"/>
  </SVGIcon>
)

export const ActionIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <path d="M12 2l4 8h9l-7 5 2 8-7-5-7 5 2-8-7-5h9l4-8z"/>
  </SVGIcon>
)

export const LanguageIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M3 12h18"/>
    <path d="M12 3c2 3 3 6 3 9s-1 6-3 9"/>
    <path d="M12 3c-2 3-3 6-3 9s1 6 3 9"/>
  </SVGIcon>
)

/* ═══════════════════════════════════════════
   SPORTS ICONS
   ═══════════════════════════════════════════ */

export const FootballIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <ellipse cx="12" cy="12" rx="8" ry="10"/>
    <path d="M12 4v16"/>
  </SVGIcon>
)

export const SwimmingIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <circle cx="6" cy="6" r="2"/>
    <path d="M14 6h4m-8 5c2 0 3 2 3 4"/>
    <path d="M3 15c0-2 2-2 5-2s3 2 3 4"/>
  </SVGIcon>
)

export const BasketballIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 3v18"/>
    <path d="M3 12h18"/>
    <path d="M4 6c4 3 8 3 16 2M4 18c4-3 8-3 16-2"/>
  </SVGIcon>
)

export const TennisIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 3v18"/>
    <path d="M6 6l12 12M18 6l-12 12"/>
  </SVGIcon>
)

export const AthleticsIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <circle cx="12" cy="5" r="2"/>
    <path d="M12 8v7"/>
    <path d="M8 11l4-3 4 3"/>
    <path d="M8 15l4 3 4-3"/>
  </SVGIcon>
)

export const VolleyballIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M7 9c3 0 5 2 5 5M12 12c2 0 3-1 3-3M17 15c-1 2-3 3-5 3"/>
  </SVGIcon>
)

/* ═══════════════════════════════════════════
   SUSTAINABILITY ICONS
   ═══════════════════════════════════════════ */

export const SolarIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 1v4m6 1l-2.83 2.83m4-1.41l-2.83-2.83M23 12h-4m-10 0H1m2.83 6l2.83-2.83m4 4.24l-2.83 2.83"/>
  </SVGIcon>
)


export const WaterIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <path d="M12 2l-2 3c0 1 1 2 2 2s2-1 2-2l-2-3z"/>
    <path d="M12 7c-2 2-2 4-2 6 0 2.2 1.8 4 4 4s4-1.8 4-4c0-2 0-4-2-6"/>
  </SVGIcon>
)

export const WasteIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <path d="M3 6h18l-1 14c-.1 1-.9 2-2 2H6c-1.1 0-1.9-1-2-2L3 6z"/>
    <path d="M8 9v8M12 9v8M16 9v8M9 6V4c0-.5.5-1 1-1h4c.5 0 1 .5 1 1v2"/>
  </SVGIcon>
)

/* ═══════════════════════════════════════════
   STUDENT LIFE ACTIVITY ICONS
   ═══════════════════════════════════════════ */

export const MunIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <circle cx="12" cy="7" r="2.5"/>
    <path d="M8 14c0-2 2-3 4-3s4 1 4 3v4H8v-4z"/>
    <path d="M6 11l1 5m10 0l1-5"/>
  </SVGIcon>
)

export const DramaIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <path d="M12 2l4 3v2h-8v-2l4-3z"/>
    <path d="M8 7h8v8c0 2-2 3-4 3s-4-1-4-3V7z"/>
    <path d="M10 16v4m4 0v-4"/>
  </SVGIcon>
)

export const MusicIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <path d="M9 17v-7l7-3v7"/>
    <circle cx="6" cy="20" r="2"/>
    <circle cx="16" cy="17" r="2"/>
  </SVGIcon>
)

export const ScienceIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <circle cx="8" cy="6" r="1.5"/>
    <circle cx="16" cy="6" r="1.5"/>
    <path d="M8 7.5v5c0 1 1 2 2 2h4c1 0 2-1 2-2v-5"/>
    <path d="M12 14v6"/>
  </SVGIcon>
)


export const MagazineIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="1"/>
    <path d="M7 7h10m-10 4h10m-6 4h6"/>
  </SVGIcon>
)

export const EcoIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <path d="M12 2c2 3 4 6 4 9 0 3-1 4-4 4s-4-1-4-4c0-3 2-6 4-9z"/>
    <path d="M9 10c1 1 2 0 3 1"/>
  </SVGIcon>
)

export const CodingIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <path d="M7 9l-4 3 4 3m10-6l4 3-4 3M14 4l-4 16"/>
  </SVGIcon>
)

export const CouncilIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <circle cx="12" cy="7" r="2.5"/>
    <path d="M7 18c0-2 2-3 5-3s5 1 5 3"/>
    <circle cx="4" cy="13" r="1.5"/>
    <path d="M2 16c0-1 1-2 2-2"/>
    <circle cx="20" cy="13" r="1.5"/>
    <path d="M22 16c0-1-1-2-2-2"/>
  </SVGIcon>
)

/* ═══════════════════════════════════════════
   APPLICATION PROCESS ICONS
   ═══════════════════════════════════════════ */

export const EntryIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <path d="M4 7h16v9c0 1-1 2-2 2H6c-1 0-2-1-2-2V7z"/>
    <path d="M4 7l8-3 8 3M12 10v6"/>
  </SVGIcon>
)

export const FeesIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <circle cx="12" cy="12" r="8"/>
    <path d="M12 9v6M10 12h4"/>
  </SVGIcon>
)


export const GlobalIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M2 12h20"/>
    <path d="M12 2c1 3 2 6 2 10s-1 7-2 10"/>
    <path d="M12 2c-1 3-2 6-2 10s1 7 2 10"/>
  </SVGIcon>
)

export const ScholarshipIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <path d="M4 8h16l-8-4-8 4z"/>
    <path d="M4 8v7c0 2 3 3 8 3s8-1 8-3V8"/>
    <path d="M12 8v7"/>
  </SVGIcon>
)

export const PaymentIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <rect x="2" y="6" width="20" height="11" rx="1.5"/>
    <path d="M2 10h20"/>
    <path d="M18 15h1m-8 0h1"/>
  </SVGIcon>
)

export const BoardingIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <path d="M3 9h18l-1-3H4l-1 3z"/>
    <path d="M3 9v8c0 1 1 2 2 2h14c1 0 2-1 2-2V9"/>
    <path d="M8 9v8m4-8v8m4-8v8"/>
  </SVGIcon>
)

export const ContactIcon = (props: IconProps) => (
  <SVGIcon {...props}>
    <path d="M22 16.92v2c0 1-1 2-2 2H4c-1 0-2-1-2-2v-2"/>
    <path d="M21 5c0-1-1-2-2-2h-14c-1 0-2 1-2 2v10c0 1 1 2 2 2h14c1 0 2-1 2-2V5z"/>
    <path d="M12 10c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"/>
  </SVGIcon>
)

