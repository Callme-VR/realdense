
"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import WaveBackground from "@/components/WaveBackground";

/* ── Filter Categories ── */
const categories = [
  "All",
  "Hairline",
  "Crown",
  "Full Restoration",
  "Beard",
  "Eyebrows",
] as const;

type Category = (typeof categories)[number];

/* ── Result Card Data Model ── */
interface ResultItem {
  id: number;
  title: string;
  grafts: string;
  categories: Category[];
  beforeImg: string;
  afterImg: string;
}

/* ── Patient Results ── */
const resultsData: ResultItem[] = [
  {
    id: 1,
    title: "Hairline + Crown",
    grafts: "FUE 3,200 grafts",
    categories: ["Hairline", "Crown"],
    beforeImg: "/images/transformations/case-01-before.webp",
    afterImg: "/images/transformations/case-01-after.webp",
  },
  {
    id: 2,
    title: "Hairline Restoration",
    grafts: "DHI 1,800 grafts",
    categories: ["Hairline"],
    beforeImg: "/images/transformations/case-02-before.webp",
    afterImg: "/images/transformations/case-02-after.webp",
  },
  {
    id: 3,
    title: "Crown Restoration",
    grafts: "Sapphire FUE 2,400 grafts",
    categories: ["Crown"],
    beforeImg: "/images/transformations/case-03-before.webp",
    afterImg: "/images/transformations/case-03-after.webp",
  },
  {
    id: 4,
    title: "Full Restoration",
    grafts: "DHI - 4,100 grafts",
    categories: ["Full Restoration"],
    beforeImg: "/images/transformations/case-04-before.webp",
    afterImg: "/images/transformations/case-04-after.webp",
  },
  {
    id: 5,
    title: "Full Restoration",
    grafts: "DHI - 4,100 grafts",
    categories: ["Full Restoration", "Beard"],
    beforeImg: "/images/transformations/case-04-before.webp",
    afterImg: "/images/transformations/case-04-after.webp",
  },
  {
    id: 6,
    title: "Crown Restoration",
    grafts: "Sapphire FUE 2,400 grafts",
    categories: ["Crown"],
    beforeImg: "/images/transformations/case-03-before.webp",
    afterImg: "/images/transformations/case-03-after.webp",
  },
  {
    id: 7,
    title: "Hairline + Crown",
    grafts: "FUE 3,200 grafts",
    categories: ["Hairline", "Crown", "Eyebrows"],
    beforeImg: "/images/transformations/case-01-before.webp",
    afterImg: "/images/transformations/case-01-after.webp",
  },
  {
    id: 8,
    title: "Hairline Restoration",
    grafts: "DHI 1,800 grafts",
    categories: ["Hairline"],
    beforeImg: "/images/transformations/case-02-before.webp",
    afterImg: "/images/transformations/case-02-after.webp",
  },
];

/* ── Interactive Before / After Slider ── */
function BeforeAfterImage({
  beforeImg,
  afterImg,
  title,
  priority = false,
}: {
  beforeImg: string;
  afterImg: string;
  title: string;
  priority?: boolean;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(
      0,
      Math.min(100, (x / rect.width) * 100)
    );

    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    isDragging.current = true;
    updatePosition(e.clientX);

    const handlePointerMoveWindow = (moveEvent: PointerEvent) => {
      moveEvent.preventDefault();
      updatePosition(moveEvent.clientX);
    };

    const handlePointerUpWindow = () => {
      isDragging.current = false;
      window.removeEventListener("pointermove", handlePointerMoveWindow);
      window.removeEventListener("pointerup", handlePointerUpWindow);
      window.removeEventListener("pointercancel", handlePointerUpWindow);
    };

    window.addEventListener("pointermove", handlePointerMoveWindow, { passive: false });
    window.addEventListener("pointerup", handlePointerUpWindow);
    window.addEventListener("pointercancel", handlePointerUpWindow);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, prev + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPos(100);
    }
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label={`Before and after transformation slider for ${title}`}
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onDragStart={(e) => e.preventDefault()}
      className="relative aspect-[4/3.3] w-full cursor-ew-resize touch-none select-none overflow-hidden bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a8ff]"
    >
      {/* AFTER Image */}
      <div className="pointer-events-none absolute inset-0 h-full w-full">
        <Image
          src={afterImg}
          alt={`After ${title}`}
          fill
          priority={priority}
          quality={85}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center"
        />
      </div>

      {/* BEFORE Image */}
      <div
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
        }}
      >
        <Image
          src={beforeImg}
          alt={`Before ${title}`}
          fill
          priority={priority}
          quality={85}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center"
        />
      </div>

      {/* BEFORE Label */}
      <span className="pointer-events-none absolute left-3 top-3 z-20 rounded-full border border-slate-200/60 bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm sm:text-[11px]">
        BEFORE
      </span>

      {/* AFTER Label */}
      <span className="pointer-events-none absolute right-3 top-3 z-20 rounded-full bg-[#00a8ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm sm:text-[11px]">
        AFTER
      </span>

      {/* Split Divider */}
      <div
        className="pointer-events-none absolute bottom-0 top-0 z-20 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.35)]"
        style={{ left: `calc(${sliderPos}% - 1px)` }}
      />

      {/* Slider Handle — no hover animation */}
      <div
        className="pointer-events-none absolute top-1/2 z-30 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/80 bg-white text-[10px] font-bold text-[#001e56] shadow-[0_2px_8px_rgba(0,0,0,0.2)] sm:h-7 sm:w-7"
        style={{ left: `${sliderPos}%` }}
      >
        <span className="flex select-none items-center gap-[1px] leading-none text-slate-700">
          ‹›
        </span>
      </div>
    </div>
  );
}

/* ── Main Patient Results Component ── */
export default function PatientResults(): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredResults =
    activeCategory === "All"
      ? resultsData
      : resultsData.filter(
        (item) =>
          item.categories.includes(activeCategory) ||
          item.title.toLowerCase().includes(activeCategory.toLowerCase())
      );

  return (
    <WaveBackground className="relative py-14 sm:py-16 lg:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="mb-2.5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#00a8ff] sm:text-[13px]">
            PATIENT RESULTS
          </p>

          <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[46px]">
            <span className="block text-[#001e56]">
              See the Difference.
            </span>
            <span className="text-[#00a8ff]">
              Feel the Confidence.
            </span>
          </h2>

          <p className="mt-3 text-[14.5px] font-normal leading-relaxed text-[#64748B] sm:text-[15.5px]">
            Real patients. Real results. Every transformation
            <br className="hidden sm:inline" /> below is from our own clinic.
          </p>
        </div>

        {/* Category Filters and View All */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-10 sm:flex-row sm:items-center">
          <div className="scrollbar-none flex w-full items-center gap-2 overflow-x-auto pb-2 sm:w-auto sm:pb-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={isActive}
                  className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold transition-colors duration-200 sm:px-5 sm:text-[14px] ${isActive
                    ? "bg-[#001e56] text-white shadow-sm"
                    : "border border-[#cdecfd] bg-[#eaf4fd]/70 text-[#001e56] hover:border-[#93cbe9] hover:bg-white"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="shrink-0 rounded-[8px] border border-[#001e56] bg-transparent px-5 py-2 text-[13px] font-medium leading-5 text-[#001e56] transition-colors duration-200 hover:bg-[#001e56] hover:text-white sm:text-[13.5px]"
          >
            View All Results
          </button>
        </div>
        {/* #193B8B */}

        {/* Results Grid — no entrance, exit, or layout animations */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {filteredResults.map((item, idx) => (
            <div
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-[16px] border border-slate-100 bg-white shadow-[0_4px_20px_rgba(0,30,86,0.06)]"
            >
              {/* Interactive Before / After Slider */}
              <BeforeAfterImage
                beforeImg={item.beforeImg}
                afterImg={item.afterImg}
                title={item.title}
                priority={idx < 4}
              />

              {/* Card Details */}
              <div className="flex flex-col items-center justify-center border-t border-slate-100/60 bg-white px-3 py-4 text-center">
                <h3 className="text-[15px] font-bold tracking-tight text-[#001e56] sm:text-[16px]">
                  {item.title}
                </h3>

                <p className="mt-0.5 text-[12.5px] font-normal text-[#64748B] sm:text-[13px]">
                  {item.grafts}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredResults.length === 0 && (
          <p className="py-10 text-center text-sm text-[#64748B]">
            No patient results found for this category.
          </p>
        )}
      </div>
    </WaveBackground>
  );
}
