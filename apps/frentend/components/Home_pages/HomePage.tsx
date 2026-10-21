"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PatientCard {
  id: string;
  name: string;
  imageSrc: string;
  isCenter?: boolean;
  widthClass: string;
  scaleClass: string;
  borderClass: string;
  radiusClass: string;
  zIndexClass: string;
}

const patientCards: PatientCard[] = [
  {
    id: "kashyap-1",
    name: "Kashyap D",
    imageSrc: "/images/hero/patient-kashyap.webp",
    widthClass: "w-[17%] max-w-[195px]",
    scaleClass: "scale-[0.88] opacity-90 hover:opacity-100",
    borderClass: "border-[1.5px] sm:border-2 border-white",
    radiusClass: "rounded-[12px] sm:rounded-[18px] lg:rounded-[22px]",
    zIndexClass: "z-0",
  },
  {
    id: "deepak",
    name: "Dipak M",
    imageSrc: "/images/hero/patient-deepak.webp",
    widthClass: "w-[20%] max-w-[230px]",
    scaleClass: "scale-[0.95] hover:scale-[0.98]",
    borderClass: "border-2 sm:border-[2.5px] border-white",
    radiusClass: "rounded-[14px] sm:rounded-[22px] lg:rounded-[26px]",
    zIndexClass: "z-10",
  },
  {
    id: "abhishek",
    name: "Abhishek P",
    imageSrc: "/images/hero/patient-abhishek.webp",
    isCenter: true,
    widthClass: "w-[23%] max-w-[275px]",
    scaleClass: "scale-100 sm:scale-105 hover:scale-[1.07]",
    borderClass: "border-[2.5px] sm:border-[3.5px] border-white",
    radiusClass: "rounded-[16px] sm:rounded-[26px] lg:rounded-[30px]",
    zIndexClass: "z-20",
  },
  {
    id: "ranbeer",
    name: "Ranbir M",
    imageSrc: "/images/hero/patient-ranbeer.webp",
    widthClass: "w-[20%] max-w-[230px]",
    scaleClass: "scale-[0.95] hover:scale-[0.98]",
    borderClass: "border-2 sm:border-[2.5px] border-white",
    radiusClass: "rounded-[14px] sm:rounded-[22px] lg:rounded-[26px]",
    zIndexClass: "z-10",
  },
  {
    id: "kashyap-2",
    name: "Kashyap D",
    imageSrc: "/images/hero/patient-kashyap.webp",
    widthClass: "w-[17%] max-w-[195px]",
    scaleClass: "scale-[0.88] opacity-90 hover:opacity-100",
    borderClass: "border-[1.5px] sm:border-2 border-white",
    radiusClass: "rounded-[12px] sm:rounded-[18px] lg:rounded-[22px]",
    zIndexClass: "z-0",
  },
];

const mobileHeroCards = [
  {
    id: "abhishek",
    name: "Abhishek P",
    imageSrc: "/images/hero/patient-abhishek.webp",
  },
  {
    id: "deepak",
    name: "Dipak M",
    imageSrc: "/images/hero/patient-deepak.webp",
  },
  {
    id: "ranbeer",
    name: "Ranbir M",
    imageSrc: "/images/hero/patient-ranbeer.webp",
  },
  {
    id: "kashyap",
    name: "Kashyap D",
    imageSrc: "/images/hero/patient-kashyap.webp",
  },
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState(390);

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchDeltaX(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    setTouchDeltaX(e.touches[0].clientX - touchStartX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null) return;
    if (touchDeltaX < -40) {
      // Swiped left -> next card
      setActiveIndex((prev) => Math.min(prev + 1, mobileHeroCards.length - 1));
    } else if (touchDeltaX > 40) {
      // Swiped right -> previous card
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
    setTouchStartX(null);
    setTouchDeltaX(0);
  };

  // Dimensions for mobile carousel matching reference image (centered Dipak M, peeking Abhishek & Ranbir)
  const cardWidth = Math.min(Math.round(windowWidth * 0.68), 270);
  const gap = 12;
  const centerOffset = (windowWidth - cardWidth) / 2;
  const baseTranslateX = centerOffset - activeIndex * (cardWidth + gap);
  const translateX = touchStartX !== null ? baseTranslateX + touchDeltaX : baseTranslateX;

  return (
    <section className="relative isolate flex w-full flex-col items-center justify-center overflow-hidden pt-20 pb-10 sm:pt-28 sm:pb-16">
      {/* White glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[235px] z-0 h-[300px] w-[min(991px,140vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-40 blur-[100px] sm:h-[320px] sm:blur-[120px] lg:h-[346.86px] lg:blur-[151px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <p className="mb-2 font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase leading-[22px] tracking-[0.22em] text-[#0cb0f2] sm:text-[13.5px] sm:font-semibold sm:leading-[25px] sm:tracking-[0.24em] md:text-[16px]">
          Because Look Matters.
        </p>

        {/* Main headline */}
        <h1 className="mx-auto max-w-3xl font-['Plus_Jakarta_Sans'] text-[28px] xs:text-[30px] font-extrabold leading-[1.18] tracking-tight sm:text-4xl sm:leading-[1.14] md:text-[42px] lg:text-[46px] xl:text-[48px]">
          <span className="text-[#001e56]">
            Rediscover a Denser
            <br />
          </span>{" "}
          <span className="text-[#0cb0f2]">
            More Confident
          </span>{" "}
          <span className="text-[#001e56]">
            You
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-2.5 w-full max-w-[340px] font-['Plus_Jakarta_Sans'] text-[12.5px] font-medium leading-[1.55] tracking-[0.01em] text-[#001E56]/90 sm:mt-3.5 sm:max-w-[800px] sm:text-[15.5px] sm:leading-relaxed sm:tracking-[0.02em] sm:text-[#001E56] md:text-[16px] md:leading-[1.6] lg:text-[18px] lg:leading-[1.7]">
          Advanced hair restoration designed around you, with natural-looking
          results
          <br className="hidden sm:inline" />{" "}
          that feel completely your own.
        </p>

        {/* Mobile Patient transformations (sm:hidden) — Matches mobile reference image */}
        <div
          className="relative mt-6 w-screen left-1/2 -translate-x-1/2 overflow-hidden py-1 sm:hidden select-none touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          aria-label="Patient before and after transformations"
        >
          <div
            className={`flex items-center will-change-transform ${
              touchStartX !== null ? "transition-none" : "transition-transform duration-300 ease-out"
            }`}
            style={{
              transform: `translateX(${translateX}px)`,
              gap: `${gap}px`,
            }}
          >
            {mobileHeroCards.map((card, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={card.id}
                  onClick={() => setActiveIndex(idx)}
                  style={{ width: `${cardWidth}px` }}
                  className={`relative shrink-0 overflow-hidden cursor-pointer transition-all duration-300 ease-out ${
                    isActive
                      ? "rounded-[22px] border-[2.5px] border-white shadow-[0_12px_30px_rgba(0,30,86,0.20)] scale-100 z-10 opacity-100"
                      : "rounded-[18px] border-2 border-white/90 shadow-[0_6px_20px_rgba(0,30,86,0.12)] scale-[0.95] z-0 opacity-85"
                  }`}
                >
                  <div className="relative aspect-[1192/1320] w-full">
                    <Image
                      src={card.imageSrc}
                      alt={`${card.name} Hair Restoration Result`}
                      fill
                      sizes="(max-width: 640px) 70vw, 280px"
                      className="object-cover object-center select-none pointer-events-none"
                      priority={isActive}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Patient transformations (sm:flex) — 100% Preserved */}
        <div className="mt-7 hidden w-full items-center justify-center gap-1.5 px-1 sm:mt-9 sm:flex sm:gap-3.5 sm:px-4 lg:gap-5">
          {patientCards.map((card) => (
            <div
              key={card.id}
              className={`relative shrink-0 overflow-hidden border border-white/80 bg-white/10 shadow-[0_6px_20px_rgba(0,30,86,0.10)] transition-transform duration-300 ease-out ${card.widthClass} ${
                card.isCenter
                  ? "rounded-[14px] sm:rounded-[22px] lg:rounded-[26px] shadow-[0_10px_28px_rgba(0,30,86,0.16)]"
                  : "rounded-[10px] sm:rounded-[16px] lg:rounded-[20px]"
              } ${card.scaleClass} ${card.zIndexClass}`}
            >
              <div className="relative aspect-[1192/1320] w-full">
                <Image
                  src={card.imageSrc}
                  alt={`${card.name} Hair Restoration Result`}
                  fill
                  sizes="(max-width: 640px) 20vw, 280px"
                  className="object-cover object-center"
                  priority={card.isCenter}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Statistics bar */}
        <div className="mt-6 grid w-full max-w-[1060px] grid-cols-2 gap-x-2.5 gap-y-4 rounded-[24px] border border-white/25 bg-gradient-to-b from-[#185cb8]/90 to-[#0e4492]/95 px-4 py-4 shadow-[0_10px_35px_rgba(2,30,80,0.22)] backdrop-blur-md xs:gap-x-4 xs:gap-y-5 xs:px-5 xs:py-5 sm:mt-10 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:rounded-[22px] sm:border-white/25 sm:bg-[#0c246c]/85 sm:bg-none sm:px-10 sm:py-[18px]">
          {/* Stat 1 */}
          <div className="flex min-w-0 items-center gap-2 xs:gap-2.5 sm:gap-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-[#0d2c8a] text-white shadow-sm xs:h-10 xs:w-10 sm:h-11 sm:w-11">
              <svg
                className="h-4 w-4 xs:h-5 xs:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="min-w-0 text-left">
              <div className="text-[15px] font-bold leading-tight tracking-tight text-white xs:text-[16px] sm:text-[20px]">
                2000+
              </div>
              <div className="mt-0.5 text-[10.5px] font-medium leading-tight text-sky-100 xs:text-[11px] sm:text-[13px]">
                Patients Treated
              </div>
            </div>
          </div>

          <div className="hidden h-10 w-px bg-white/20 sm:block" />

          {/* Stat 2 */}
          <div className="flex min-w-0 items-center gap-2 xs:gap-2.5 sm:gap-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-[#00A8FF] text-white shadow-sm xs:h-10 xs:w-10 sm:h-11 sm:w-11">
              <svg
                className="h-4 w-4 xs:h-5 xs:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="min-w-0 text-left">
              <div className="text-[15px] font-bold leading-tight tracking-tight text-white xs:text-[16px] sm:text-[20px]">
                10+ Years
              </div>
              <div className="mt-0.5 text-[10.5px] font-medium leading-tight text-sky-100 xs:text-[11px] sm:text-[13px]">
                of Experience
              </div>
            </div>
          </div>

          <div className="hidden h-10 w-px bg-white/20 sm:block" />

          {/* Stat 3 */}
          <div className="flex min-w-0 items-center gap-2 xs:gap-2.5 sm:gap-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-[#0d2c8a] text-white shadow-sm xs:h-10 xs:w-10 sm:h-11 sm:w-11">
              <svg
                className="h-4 w-4 xs:h-5 xs:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div className="min-w-0 text-left">
              <div className="text-[15px] font-bold leading-tight tracking-tight text-white xs:text-[16px] sm:text-[20px]">
                4.9/5
              </div>
              <div className="mt-0.5 text-[10.5px] font-medium leading-tight text-sky-100 xs:text-[11px] sm:text-[13px]">
                Patient Satisfaction
              </div>
            </div>
          </div>

          <div className="hidden h-10 w-px bg-white/20 sm:block" />

          {/* Stat 4 */}
          <div className="flex min-w-0 items-center gap-2 xs:gap-2.5 sm:gap-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-[#00A8FF] text-white shadow-sm xs:h-10 xs:w-10 sm:h-11 sm:w-11">
              <svg
                className="h-4 w-4 xs:h-5 xs:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="min-w-0 text-left">
              <div className="text-[15px] font-bold leading-tight tracking-tight text-white xs:text-[16px] sm:text-[20px]">
                Personalized
              </div>
              <div className="mt-0.5 text-[10.5px] font-medium leading-tight text-sky-100 xs:text-[11px] sm:text-[13px]">
                Treatment Plans
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}