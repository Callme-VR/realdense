import React from "react";

interface RealDenseWaveBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export default function RealDenseWaveBackground({
  children,
  className = "",
}: RealDenseWaveBackgroundProps) {
  return (
    <section className={`relative min-h-[540px] lg:min-h-[580px] w-full overflow-hidden bg-white ${className}`}>
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Background */}
          <linearGradient id="ctaBackground" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#f7fcff" />
            <stop offset="100%" stopColor="#eaf7ff" />
          </linearGradient>

          {/* Soft blue glow */}
          <linearGradient id="ctaBlueGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#dff5ff" stopOpacity=".95" />
            <stop offset="100%" stopColor="#9edbff" stopOpacity=".75" />
          </linearGradient>

          {/* Main wave */}
          <linearGradient id="ctaWaveOne" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#dff5ff" />
            <stop offset="55%" stopColor="#c8edff" />
            <stop offset="100%" stopColor="#eaf8ff" />
          </linearGradient>

          {/* Foreground wave */}
          <linearGradient id="ctaWaveTwo" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c8ecff" />
            <stop offset="50%" stopColor="#e7f8ff" />
            <stop offset="100%" stopColor="#bfe8ff" />
          </linearGradient>

          <filter id="ctaBlur">
            <feGaussianBlur stdDeviation="22" />
          </filter>
        </defs>

        {/* Base */}
        <rect width="1600" height="900" fill="url(#ctaBackground)" />

        {/* Soft upper-left glow */}
        <path
          d="
            M0 0H760
            C700 70 700 165 760 270
            C815 368 930 430 1110 455
            C1210 468 1285 500 1370 555
            C1240 485 1095 470 955 485
            C770 505 615 575 430 575
            C245 575 110 515 0 425Z
          "
          fill="url(#ctaBlueGlow)"
          opacity=".28"
          filter="url(#ctaBlur)"
        />

        {/* Large white sweeping curve */}
        <path
          d="
            M0 0H720
            C655 92 664 192 720 282
            C783 384 906 442 1082 474
            C1198 495 1298 534 1410 604
            C1255 520 1095 510 935 540
            C735 577 575 626 405 620
            C235 614 95 560 0 485Z
          "
          fill="#ffffff"
        />

        {/* Thin blue accent */}
        <path
          d="
            M0 0H726
            C655 91 670 185 730 280
            C796 385 918 443 1085 476
          "
          fill="none"
          stroke="#b8e7ff"
          strokeWidth="2"
        />

        {/* Middle wave */}
        <path
          d="
            M0 475
            C135 535 260 575 420 578
            C625 582 760 505 940 500
            C1120 495 1275 535 1435 620
            C1495 652 1548 670 1600 674
            V900H0Z
          "
          fill="url(#ctaWaveOne)"
        />

        {/* Middle wave highlight */}
        <path
          d="
            M0 475
            C135 535 260 575 420 578
            C625 582 760 505 940 500
            C1120 495 1275 535 1435 620
            C1495 652 1548 670 1600 674
          "
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
        />

        {/* Foreground wave */}
        <path
          d="
            M0 650
            C120 605 220 600 330 628
            C495 670 590 760 770 772
            C955 784 1060 690 1225 665
            C1370 642 1490 688 1600 735
            V900H0Z
          "
          fill="url(#ctaWaveTwo)"
        />

        {/* Foreground highlight */}
        <path
          d="
            M0 650
            C120 605 220 600 330 628
            C495 670 590 760 770 772
            C955 784 1060 690 1225 665
            C1370 642 1490 688 1600 735
          "
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
        />

        {/* Bottom subtle layer */}
        <path
          d="
            M0 760
            C170 720 300 742 455 805
            C625 875 770 880 925 832
            C1115 773 1245 735 1410 770
            C1490 787 1550 812 1600 835
            V900H0Z
          "
          fill="#d8f2ff"
          opacity=".85"
        />
      </svg>

      {/* Actual content above background */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
