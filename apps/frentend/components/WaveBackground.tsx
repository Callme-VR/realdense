"use client";

import React, { useMemo } from "react";

/**
 * Light-blue wave background (16:9, viewBox 2576x1450).
 * Tone field is sampled from the reference image, wave bundles are traced
 * from it. Pass `imageSrc` to use the original raster for a pixel-exact match.
 */
type Props = {
  children?: React.ReactNode;
  className?: string;
  imageSrc?: string;
};

const W = 2576;
const H = 1450;
// const _C: [number, number] = [1412, 370]; // point where the bundles cross

/* 6 rows x 7 cols of colors sampled from the reference image
const _TONE = [
  ["#eaf8fe", "#f1f9fd", "#f1f8fe", "#eef8fd", "#eaf7fe", "#e5f5fe", "#cdecfd"],
  ["#f9fbfe", "#f0f9fe", "#ebf7fd", "#ddf3fe", "#e3f3fd", "#ecf7fe", "#e4f4fe"],
  ["#e6f6fd", "#f3fbff", "#f5fbfe", "#eef8ff", "#e8f6fd", "#eaf7fe", "#dbf2fe"],
  ["#def2ff", "#edf7fd", "#f1f9fd", "#f0f8fd", "#ebf7fd", "#eff8fd", "#e4f5fe"],
  ["#edf7fe", "#e7f5fe", "#eaf6fd", "#eaf6fe", "#e8f5fd", "#d9effd", "#d8f1fe"],
  ["#e4f5fe", "#eff8fe", "#edf8fe", "#e1f3fd", "#d5eefd", "#e3f4fd", "#eff8fe"],
]; */

// Cubic paths as flat arrays: [x0,y0, (c1x,c1y,c2x,c2y,x,y)...]
const toD = (a: number[]) => {
  let d = `M${a[0].toFixed(1)},${a[1].toFixed(1)}`;
  for (let i = 2; i < a.length; i += 6) {
    d += ` C${a
      .slice(i, i + 6)
      .map((n) => n.toFixed(1))
      .join(" ")}`;
  }
  return d;
};

const fan = (a: number[], b: number[], n: number) =>
  Array.from({ length: n }, (_, i) => {
    const t = i / (n - 1);
    return a.map((v, k) => v + (b[k] - v) * t);
  });

// Upper arch (outer -> inner) from the crossing point to the right edge
const ARCH_OUTER = [1412, 370, 1640, 300, 1850, 8, 2110, 6, 2330, 5, 2500, 120, 2576, 215];
const ARCH_MID = [1412, 370, 1640, 300, 1870, 70, 2150, 65, 2370, 62, 2520, 190, 2576, 290];
const ARCH_INNER = [1412, 370, 1600, 320, 1850, 115, 2150, 112, 2330, 110, 2450, 250, 2490, 450];
// Thin sweep down to the lower right
const SWEEP_A = [1412, 370, 1650, 430, 2000, 600, 2576, 830];
const SWEEP_B = [1412, 370, 1600, 520, 2000, 700, 2576, 885];
// Faint lobe going left
const LOBE_A = [1412, 370, 1300, 250, 1150, 170, 1000, 175];
const LOBE_B = [1412, 370, 1300, 420, 1150, 440, 1000, 330];

export default function WaveBackground({ children, className = "", imageSrc }: Props) {
  const arch = useMemo(() => fan(ARCH_OUTER, ARCH_INNER, 30).map(toD), []);
  const sweep = useMemo(() => fan(SWEEP_A, SWEEP_B, 46).map(toD), []);
  const lobe = useMemo(() => fan(LOBE_A, LOBE_B, 26).map(toD), []);

  const dots = useMemo(() => {
    const out: { x: number; y: number; o: number; r: number }[] = [];
    for (let y = 170; y <= 600; y += 26) {
      for (let x = 2110; x <= 2510; x += 26) {
        const d = Math.hypot(x - 2380, y - 300);
        const rawO = Math.max(0, 0.75 - d / 340);
        if (rawO > 0.04) {
          const o = Number(rawO.toFixed(3));
          const r = Number((1.2 + rawO * 1.6).toFixed(2));
          out.push({ x, y, o, r });
        }
      }
    }
    return out;
  }, []);

  // const _cw = W / 7;
  // const _ch = H / 6;

  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-[#eef8fd] ${className}`}>
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div
          className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
          style={{
            transform: "translate3d(0, 0, 0)",
            WebkitTransform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            willChange: "transform",
            contain: "paint layout",
          }}
        >
          <svg
            aria-hidden
            className="h-full w-full"
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <defs>
              <filter id="soft" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="6" />
              </filter>
              <linearGradient id="toneGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f9fbfe" />
                <stop offset="35%" stopColor="#eef8fd" />
                <stop offset="70%" stopColor="#e5f5fe" />
                <stop offset="100%" stopColor="#d5eefd" />
              </linearGradient>
              <radialGradient id="toneTopRight" cx="0.95" cy="0.1" r="0.45">
                <stop offset="0%" stopColor="#cdecfd" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#cdecfd" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="toneBottomRight" cx="0.85" cy="0.9" r="0.4">
                <stop offset="0%" stopColor="#d8f1fe" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#d8f1fe" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="cyanSpot" cx="1" cy="0.55" r="0.2">
                <stop offset="0%" stopColor="#9fdafd" stopOpacity="0.75" />
                <stop offset="1" stopColor="#9fdafd" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="archStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#38b6ff" stopOpacity="0.2" />
                <stop offset="0.5" stopColor="#2db1ff" stopOpacity="0.7" />
                <stop offset="1" stopColor="#1ca4fb" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="sweepStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#3fb8ff" stopOpacity="0.55" />
                <stop offset="1" stopColor="#8fd0fb" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="lobeStroke" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0" stopColor="#4fbcff" stopOpacity="0.35" />
                <stop offset="1" stopColor="#4fbcff" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Tone field: Smooth hardware-accelerated sampled gradients (0 CPU/GPU scroll cost) */}
            <rect width={W} height={H} fill="url(#toneGrad)" />
            <rect width={W} height={H} fill="url(#toneTopRight)" />
            <rect width={W} height={H} fill="url(#toneBottomRight)" />
            <rect width={W} height={H} fill="url(#cyanSpot)" />

            {/* Translucent ribbons */}
            <g filter="url(#soft)">
              <path
                d="M1960,470 C2100,650 2350,760 2576,850 L2576,470Z"
                fill="#cdeafc"
                opacity="0.35"
              />
              <path
                d="M1412,370 C1650,430 2000,600 2576,830 L2576,885 C2000,700 1600,520 1412,370Z"
                fill="#bfe3fb"
                opacity="0.45"
              />
              <path
                d="M1400,985 C1700,1070 1900,830 2200,805 C2400,795 2500,850 2576,885 L2576,950 C2400,900 2100,900 1800,1050Z"
                fill="#ffffff"
                opacity="0.4"
              />
              <path
                d="M1450,1450 C1700,1250 1950,1000 2250,885 C2400,860 2500,870 2576,885 L2576,1450Z"
                fill="#bfe3fb"
                opacity="0.4"
              />
              <path
                d="M1750,1450 C1950,1230 2150,1040 2576,960 L2576,1450Z"
                fill="#a9d8f8"
                opacity="0.22"
              />
            </g>

            {/* Left faint lobe */}
            <g stroke="url(#lobeStroke)" strokeWidth="0.9">
              {lobe.map((d, i) => (
                <path key={`l${i}`} d={d} />
              ))}
            </g>
            <path
              d="M1260,272 C1500,292 1700,150 2000,22"
              stroke="#6fc6fb"
              strokeWidth="1"
              opacity="0.35"
            />

            {/* Sweep to lower right */}
            <g stroke="url(#sweepStroke)" strokeWidth="1">
              {sweep.map((d, i) => (
                <path key={`s${i}`} d={d} />
              ))}
            </g>

            {/* Upper arch */}
            <g stroke="url(#archStroke)" strokeWidth="1">
              {arch.map((d, i) => (
                <path key={`a${i}`} d={d} />
              ))}
            </g>
            <g stroke="#2eb0ff" strokeLinecap="round">
              <path d={toD(ARCH_OUTER)} strokeWidth="2.4" opacity="0.95" />
              <path d={toD(ARCH_MID)} strokeWidth="2" opacity="0.8" />
              <path d={toD(ARCH_INNER)} strokeWidth="2.2" opacity="0.85" />
            </g>

            {/* Dot grid */}
            <g fill="#38b6ff">
              {dots.map((d, i) => (
                <circle key={i} cx={d.x} cy={d.y} r={d.r} opacity={d.o} />
              ))}
            </g>
          </svg>
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
