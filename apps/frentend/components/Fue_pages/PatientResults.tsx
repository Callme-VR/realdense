"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface TransformationCard {
  id: number;
  title: string;
  grafts: string;
  beforeImg: string;
  afterImg: string;
}

const transformations: TransformationCard[] = [
  {
    id: 1,
    title: "Hairline + Crown",
    grafts: "FUE 3,200 grafts",
    beforeImg: "/images/transformations/case-01-before.webp",
    afterImg: "/images/transformations/case-01-after.webp",
  },
  {
    id: 2,
    title: "Hairline Restoration",
    grafts: "DHI 1,800 grafts",
    beforeImg: "/images/transformations/case-02-before.webp",
    afterImg: "/images/transformations/case-02-after.webp",
  },
  {
    id: 3,
    title: "Crown Restoration",
    grafts: "Sapphire FUE 2,400 grafts",
    beforeImg: "/images/transformations/case-03-before.webp",
    afterImg: "/images/transformations/case-03-after.webp",
  },
  {
    id: 4,
    title: "Full Restoration",
    grafts: "DHI - 4,100 grafts",
    beforeImg: "/images/transformations/case-04-before.webp",
    afterImg: "/images/transformations/case-04-after.webp",
  },
  {
    id: 5,
    title: "Full Restoration",
    grafts: "DHI - 4,100 grafts",
    beforeImg: "/images/transformations/case-04-before.webp",
    afterImg: "/images/transformations/case-04-after.webp",
  },
  {
    id: 6,
    title: "Crown Restoration",
    grafts: "Sapphire FUE 2,400 grafts",
    beforeImg: "/images/transformations/case-03-before.webp",
    afterImg: "/images/transformations/case-03-after.webp",
  },
  {
    id: 7,
    title: "Hairline + Crown",
    grafts: "FUE 3,200 grafts",
    beforeImg: "/images/transformations/case-01-before.webp",
    afterImg: "/images/transformations/case-01-after.webp",
  },
  {
    id: 8,
    title: "Hairline Restoration",
    grafts: "DHI 1,800 grafts",
    beforeImg: "/images/transformations/case-02-before.webp",
    afterImg: "/images/transformations/case-02-after.webp",
  },
];

/* ── Interactive Before / After Split Slider ── */
function BeforeAfterSlider({
  beforeImg,
  afterImg,
  title,
}: {
  beforeImg: string;
  afterImg: string;
  title: string;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    isDragging.current = true;
    updatePosition(e.clientX);

    const handlePointerMove = (moveEvent: PointerEvent) => {
      moveEvent.preventDefault();
      updatePosition(moveEvent.clientX);
    };

    const handlePointerUp = () => {
      isDragging.current = false;
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: false });
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label={`Before and after comparison for ${title}`}
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      onPointerDown={handlePointerDown}
      className="relative aspect-square w-full cursor-ew-resize select-none overflow-hidden bg-slate-100 touch-none"
    >
      {/* AFTER Image (Background) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src={afterImg}
          alt={`After ${title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center"
          quality={85}
        />
      </div>

      {/* BEFORE Image (Clipped) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
        }}
      >
        <Image
          src={beforeImg}
          alt={`Before ${title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center"
          quality={85}
        />
      </div>

      {/* BEFORE Badge */}
      <span className="pointer-events-none absolute left-2.5 top-2.5 z-20 rounded-full bg-black/45 backdrop-blur-xs px-2.5 py-0.5 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
        BEFORE
      </span>

      {/* AFTER Badge */}
      <span className="pointer-events-none absolute right-2.5 top-2.5 z-20 rounded-full bg-[#00a8ff] px-2.5 py-0.5 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
        AFTER
      </span>

      {/* Split Divider Line */}
      <div
        className="pointer-events-none absolute bottom-0 top-0 z-20 w-[1.5px] bg-white shadow-[0_0_6px_rgba(0,0,0,0.4)]"
        style={{ left: `calc(${sliderPos}% - 0.75px)` }}
      />

      {/* Circular Slider Handle */}
      <div
        className="pointer-events-none absolute top-1/2 z-30 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#001e56] shadow-[0_2px_8px_rgba(0,0,0,0.25)] border border-slate-100"
        style={{ left: `${sliderPos}%` }}
      >
        <span className="flex select-none items-center gap-[1px] leading-none text-slate-700 font-mono text-[9px]">
          ‹›
        </span>
      </div>
    </div>
  );
}

export interface PatientResultsProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  items?: TransformationCard[];
}

export default function FuePatientResults({
  eyebrow = "PATIENT RESULTS",
  titleLine1 = "Results of",
  titleLine2 = "FUT Hair Transplant",
  description = "FUT at QHT Clinic delivers high-density, long-term, natural-looking hair restoration, particularly effective for patients with advanced baldness. Visible growth typically begins within 3 to 4 months, with full results apparent by 12–18 months after the surgery.",
  items = transformations,
}: PatientResultsProps) {
  return (
    <section className="relative isolate w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* ── Background Image Layer (fue-patient-results-background.webp) ── */}
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none select-none overflow-hidden">
        <Image
          src="/Fue_page_images/fue-patient-results-background.webp"
          alt="Patient Results Background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1920px"
          className="object-cover object-top"
          quality={90}
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header Section ── */}
        <div className="max-w-[740px] mb-12 sm:mb-14 lg:mb-16">
          <span className="font-['Plus_Jakarta_Sans'] text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#00A3FF] mb-2 sm:mb-3 block">
            {eyebrow}
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[30px] sm:text-[38px] lg:text-[46px] font-extrabold tracking-[-0.03em] leading-[1.15]">
            <span className="text-[#001e56]">{titleLine1} </span>
            <span className="text-[#00A3FF]">{titleLine2}</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14.5px] sm:text-[15.5px] leading-[1.65] font-normal">
            {description}
          </p>
        </div>

        {/* ── 8 Cards Grid (4 columns x 2 rows) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col rounded-[20px] sm:rounded-[24px] bg-white border border-slate-100/90 shadow-[0_8px_24px_rgba(3,30,80,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_32px_rgba(3,30,80,0.12)] hover:-translate-y-0.5"
            >
              {/* Image Comparison Slider */}
              <div className="overflow-hidden rounded-t-[20px] sm:rounded-t-[24px]">
                <BeforeAfterSlider
                  beforeImg={item.beforeImg}
                  afterImg={item.afterImg}
                  title={item.title}
                />
              </div>

              {/* Card Meta Content */}
              <div className="p-4 sm:p-4.5 text-center flex flex-col justify-center items-center bg-white">
                <h3 className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[15.5px] font-bold text-[#001e56] tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[13.5px] text-[#556987] font-normal mt-0.5">
                  {item.grafts}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
