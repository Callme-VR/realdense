
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
      <span className="pointer-events-none absolute left-3 top-3 max-sm:left-2 max-sm:top-2 z-20 rounded-full border border-slate-200/60 bg-white/90 max-sm:bg-slate-700/70 max-sm:text-white max-sm:border-none px-2.5 max-sm:px-2 py-1 max-sm:py-0.5 text-[10px] max-sm:text-[8px] font-bold uppercase tracking-wider text-slate-700 shadow-sm sm:text-[11px]">
        BEFORE
      </span>

      {/* AFTER Label */}
      <span className="pointer-events-none absolute right-3 top-3 max-sm:right-2 max-sm:top-2 z-20 rounded-full bg-[#00a8ff] px-2.5 max-sm:px-2 py-1 max-sm:py-0.5 text-[10px] max-sm:text-[8px] font-bold uppercase tracking-wider text-white shadow-sm sm:text-[11px]">
        AFTER
      </span>

      {/* Split Divider */}
      <div
        className="pointer-events-none absolute bottom-0 top-0 z-20 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.35)]"
        style={{ left: `calc(${sliderPos}% - 1px)` }}
      />

      {/* Slider Handle — no hover animation */}
      <div
        className="pointer-events-none absolute top-1/2 z-30 flex h-6 w-6 max-sm:h-5 max-sm:w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/80 bg-white text-[10px] max-sm:text-[8px] font-bold text-[#001e56] shadow-[0_2px_8px_rgba(0,0,0,0.2)] sm:h-7 sm:w-7"
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredResults =
    activeCategory === "All"
      ? resultsData
      : resultsData.filter(
        (item) =>
          item.categories.includes(activeCategory) ||
          item.title.toLowerCase().includes(activeCategory.toLowerCase())
      );

  return (
    <WaveBackground className="relative py-14 max-sm:py-8 sm:py-16 lg:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 max-sm:px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 max-sm:mb-5 max-w-2xl sm:mb-10">
          <p className="mb-2.5 max-sm:mb-1.5 text-[12px] max-sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#00a8ff] sm:text-[13px]">
            PATIENT RESULTS
          </p>

          <h2 className="text-3xl max-sm:text-[24px] max-sm:leading-[1.15] font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[46px]">
            <span className="block text-[#001e56]">
              See the Difference.
            </span>
            <span className="text-[#00a8ff]">
              Feel the Confidence.
            </span>
          </h2>

          <p className="mt-3 max-sm:mt-2 text-[14.5px] max-sm:text-[11.5px] max-sm:leading-relaxed font-normal leading-relaxed text-[#64748B] sm:text-[15.5px]">
            Real patients. Real results. Every transformation
            <br className="hidden sm:inline" /> below is from our own clinic.
          </p>
        </div>

        {/* Category Filters and View All */}
        <div className="mb-8 max-sm:mb-6 flex flex-col items-start justify-between gap-4 sm:mb-10 sm:flex-row sm:items-center">
          {/* Mobile Category Dropdown and View All Button Row */}
          <div className="flex w-full items-center justify-between sm:hidden">
            {/* Custom Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#001e56] px-4 py-2 text-[12.5px] font-semibold text-white shadow-sm"
              >
                <span>{activeCategory}</span>
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu (Open State) */}
              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <div className="absolute left-0 top-full z-50 mt-1.5 w-48 overflow-hidden rounded-2xl bg-[#001e56] p-2 shadow-2xl border border-sky-900/40">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setActiveCategory(cat);
                          setIsDropdownOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-[12px] font-medium transition-colors ${
                          activeCategory === cat
                            ? "bg-white/15 text-[#00a8ff] font-bold"
                            : "text-white/90 hover:bg-white/10"
                        }`}
                      >
                        <span>{cat}</span>
                        {activeCategory === cat && (
                          <span className="text-[#00a8ff] text-[10px]">●</span>
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Mobile View All Button */}
            <button
              type="button"
              className="rounded-[8px] border border-[#001e56] bg-transparent px-3.5 py-1.5 text-[12px] font-medium text-[#001e56] transition-colors hover:bg-[#001e56] hover:text-white"
            >
              View All Results
            </button>
          </div>

          {/* Desktop & Tablet Categories Horizontal Bar */}
          <div className="scrollbar-none hidden sm:flex w-full items-center gap-2 overflow-x-auto pb-2 sm:w-auto sm:pb-0">
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

          {/* Desktop & Tablet View All Button */}
          <button
            type="button"
            className="hidden sm:block shrink-0 rounded-[8px] border border-[#001e56] bg-transparent px-5 py-2 text-[13px] font-medium leading-5 text-[#001e56] transition-colors duration-200 hover:bg-[#001e56] hover:text-white sm:text-[13.5px]"
          >
            View All Results
          </button>
        </div>
        {/* #193B8B */}

        {/* Results Grid — no entrance, exit, or layout animations */}
        <div className="grid grid-cols-1 max-sm:grid-cols-2 gap-5 max-sm:gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {filteredResults.map((item, idx) => {
            const mobileOrderClass =
              item.id === 1
                ? "max-sm:order-1"
                : item.id === 2
                ? "max-sm:order-2"
                : item.id === 3
                ? "max-sm:order-3"
                : item.id === 4
                ? "max-sm:order-4"
                : item.id === 8
                ? "max-sm:order-5"
                : item.id === 7
                ? "max-sm:order-6"
                : item.id === 5
                ? "max-sm:order-7"
                : item.id === 6
                ? "max-sm:order-8"
                : "";

            return (
              <div
                key={item.id}
                className={`group relative flex flex-col overflow-hidden rounded-[16px] max-sm:rounded-[12px] border border-slate-100 bg-white shadow-[0_4px_20px_rgba(0,30,86,0.06)] ${mobileOrderClass}`}
              >
                {/* Interactive Before / After Slider */}
                <BeforeAfterImage
                  beforeImg={item.beforeImg}
                  afterImg={item.afterImg}
                  title={item.title}
                  priority={idx < 4}
                />

                {/* Card Details */}
                <div className="flex flex-col items-center justify-center border-t border-slate-100/60 bg-white px-3 max-sm:px-1.5 py-4 max-sm:py-2.5 text-center">
                  <h3 className="text-[15px] max-sm:text-[11.5px] max-sm:leading-tight font-bold tracking-tight text-[#001e56] sm:text-[16px]">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 max-sm:mt-0 text-[12.5px] max-sm:text-[10px] font-normal text-[#64748B] sm:text-[13px]">
                    {item.grafts}
                  </p>
                </div>
              </div>
            );
          })}
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
