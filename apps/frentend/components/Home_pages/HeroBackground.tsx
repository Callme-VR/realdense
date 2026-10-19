"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

type Props = { children?: React.ReactNode; className?: string };

export default function BlueWaveBackground({ children, className = "" }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video autoplays safely and handles browser policies
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Fallback gracefully if browser restricts autoplay
      });
    }
  }, []);

  return (
    <div className={`relative w-full min-h-screen overflow-hidden bg-[#a0ddfc] ${className}`}>
      {/* ── Background Static Image Layer ── */}
      <Image
        src="/images/hero/hero-background.webp"
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top select-none pointer-events-none"
      />

      {/* ── Background Video Layer ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center scale-[1.02] mix-blend-multiply opacity-85"
          aria-hidden="true"
        >
          <source src="/images/hero/wave.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Foreground Content ── */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
