import React from "react";

type Props = { children?: React.ReactNode; className?: string };

export default function BlueWaveBackground({ children, className = "" }: Props) {
  return (
    <div className={`relative w-full min-h-screen overflow-hidden bg-white ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1108 640"
        preserveAspectRatio="xMaxYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bw-bg" x1="0" y1="0" x2="1" y2="0.5">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.45" stopColor="#edf6fe" />
            <stop offset="1" stopColor="#d9f0fe" />
          </linearGradient>
          <linearGradient id="bw-top" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="1" stopColor="#cce9fd" stopOpacity="0.95" />
          </linearGradient>
          <radialGradient id="bw-petal" cx="0.3" cy="0.25" r="0.9">
            <stop offset="0" stopColor="#eff8fe" />
            <stop offset="0.45" stopColor="#bde2fa" />
            <stop offset="1" stopColor="#5bc0ed" />
          </radialGradient>
          <linearGradient id="bw-band" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7fcaf2" />
            <stop offset="0.5" stopColor="#1b9fe3" />
            <stop offset="1" stopColor="#0a82cf" />
          </linearGradient>
          <linearGradient id="bw-bright" x1="0.1" y1="0" x2="0.9" y2="1">
            <stop offset="0" stopColor="#b9e4f8" />
            <stop offset="1" stopColor="#32aee9" />
          </linearGradient>
          <radialGradient id="bw-fade">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#000" />
          </radialGradient>
          <mask id="bw-m1" maskUnits="userSpaceOnUse" x="800" y="110" width="200" height="140">
            <ellipse cx="900" cy="180" rx="95" ry="62" fill="url(#bw-fade)" />
          </mask>
          <mask id="bw-m2" maskUnits="userSpaceOnUse" x="820" y="400" width="200" height="200">
            <ellipse cx="920" cy="510" rx="85" ry="100" fill="url(#bw-fade)" />
          </mask>
          <pattern id="bw-dots" width="11" height="11" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="2.3" fill="#fff" />
          </pattern>
          <filter id="bw-b30" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="30" />
          </filter>
          <filter id="bw-b6" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="bw-b2" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>

        <rect width="1108" height="640" fill="url(#bw-bg)" />
        <ellipse cx="140" cy="200" rx="420" ry="260" fill="#fff" opacity="0.85" filter="url(#bw-b30)" />

        {/* top wide petal */}
        <path d="M440 40 C560 185 800 255 1040 238 L1108 300 L1108 0 L520 0 Z" fill="url(#bw-top)" />
        <path d="M440 40 C560 185 800 255 1040 238" fill="none" stroke="#fff" strokeWidth="6" opacity="0.8" filter="url(#bw-b6)" />
        <path d="M440 40 C560 185 800 255 1040 238" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.95" />

        {/* top-right petal */}
        <path d="M920 0 C908 85 985 175 1108 300 L1108 0 Z" fill="#e6f5fd" />
        <path d="M920 0 C908 85 985 175 1108 300" fill="none" stroke="#fff" strokeWidth="5" opacity="0.8" filter="url(#bw-b6)" />
        <path d="M920 0 C908 85 985 175 1108 300" fill="none" stroke="#fff" strokeWidth="1.5" />

        {/* right edge strip */}
        <path d="M1108 45 C1058 100 1052 225 1108 292 Z" fill="#c4e5f8" />
        <path d="M1108 45 C1058 100 1052 225 1108 292" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.9" />

        {/* big petal */}
        <path d="M1108 300 C1068 224 955 222 880 240 C740 282 622 430 598 640 L790 640 C905 598 1052 480 1108 300 Z" fill="url(#bw-petal)" />
        <ellipse cx="800" cy="360" rx="110" ry="70" transform="rotate(-50 800 360)" fill="#fff" opacity="0.45" filter="url(#bw-b30)" />
        <path d="M1108 300 C1068 224 955 222 880 240 C740 282 622 430 598 640" fill="none" stroke="#fff" strokeWidth="7" opacity="0.8" filter="url(#bw-b6)" />
        <path d="M1108 300 C1068 224 955 222 880 240 C740 282 622 430 598 640" fill="none" stroke="#fff" strokeWidth="1.8" opacity="0.95" />

        {/* deep blue band */}
        <path d="M1108 300 C1088 405 965 560 825 640 L760 640 C905 598 1085 425 1108 300 Z" fill="url(#bw-band)" />
        <path d="M1108 300 C1085 420 900 600 760 640" fill="none" stroke="#0a8fdc" strokeWidth="5" opacity="0.5" filter="url(#bw-b6)" />

        {/* bright bottom-right */}
        <path d="M1108 410 C1045 482 905 582 862 640 L1108 640 Z" fill="url(#bw-bright)" />
        <path d="M1108 410 C1045 482 905 582 862 640" fill="none" stroke="#fff" strokeWidth="1.8" opacity="0.95" />
        <path d="M1108 520 C1040 560 975 610 950 640 L1108 640 Z" fill="#fff" opacity="0.25" filter="url(#bw-b2)" />

        {/* bottom soft sweeps */}
        <path d="M520 640 C640 562 800 522 965 500 C905 562 825 612 765 640 Z" fill="#fff" opacity="0.5" filter="url(#bw-b6)" />
        <path d="M0 560 C40 600 80 625 110 640 L0 640 Z" fill="#dff1fc" opacity="0.7" />

        {/* faded dot grids */}
        <g mask="url(#bw-m1)" opacity="0.85">
          <rect x="800" y="110" width="200" height="140" fill="url(#bw-dots)" />
        </g>
        <g mask="url(#bw-m2)" opacity="0.9">
          <rect x="820" y="400" width="200" height="200" fill="url(#bw-dots)" />
        </g>
      </svg>

      <div className="relative z-10">{children}</div>
    </div>
  );
}